import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const base = new URL(process.argv[2] || 'http://127.0.0.1:1337/');
assert.ok(['127.0.0.1', 'localhost'].includes(base.hostname) && base.protocol === 'http:', 'offline loopback preview only');
const output = path.resolve(process.argv[3] || 'D:/CodexCache/artifacts/bioai-columns-editorial-20261026/browser');
await mkdir(output, { recursive: true });
const runtime = process.env.THEME_PLAYWRIGHT_MODULE || path.join(process.env.USERPROFILE, '.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs');
const { chromium } = await import(pathToFileURL(runtime));
const browser = await chromium.launch({ headless: true });
const report = { fixture: 'Fixed mock-model Markdown rendered by Hugo, not published research or a live generation.', browser: browser.version(), cases: [], pageErrors: [], externalRequests: [] };
const luminance = rgb => rgb.match(/[\d.]+/g).slice(0, 3).map(Number).map(n => n / 255).map(n => n <= 0.04045 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4).reduce((s, n, i) => s + n * [0.2126, 0.7152, 0.0722][i], 0);
const contrast = (a, b) => { const x = luminance(a), y = luminance(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); };
try {
  for (const [device, width, height] of [['desktop', 1440, 1000], ['mobile', 390, 844]]) {
    const context = await browser.newContext({ viewport: { width, height }, reducedMotion: 'reduce', colorScheme: 'light', deviceScaleFactor: 1 });
    await context.route('**/*', route => {
      const url = new URL(route.request().url());
      if (url.origin === base.origin) return route.continue();
      report.externalRequests.push(url.origin);
      return route.abort();
    });
    const page = await context.newPage();
    page.setDefaultTimeout(15000);
    page.on('pageerror', error => report.pageErrors.push(error.message));
    try {
      for (const section of ['daily', 'opportunity', 'project-opportunity']) {
        const route = `${section === 'daily' ? '' : section + '/'}2026-10/2026-10-26/`;
        assert.equal((await page.goto(new URL(route, base).href, { waitUntil: 'load' })).status(), 200);
        const body = page.locator(`[data-bio-report="${section}"]`);
        await body.waitFor();
        const text = await body.textContent();
        const timeOrigin = await page.evaluate(() => performance.timeOrigin);
        for (const theme of ['light', 'dark']) {
          const dark = await page.locator('html').evaluate(el => el.classList.contains('dark'));
          if (dark !== (theme === 'dark')) {
            await page.locator('.hextra-theme-toggle:visible').first().click();
            await page.locator(`.hextra-theme-toggle-options [data-item="${theme}"]:visible`).first().click();
            await page.waitForFunction(dark => document.documentElement.classList.contains('dark') === dark, theme === 'dark');
          }
          await page.evaluate(() => { window.scrollTo(0, 0); return new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))); });
          assert.equal(await body.textContent(), text, 'native theme switch must not change article content');
          assert.equal(await page.evaluate(() => performance.timeOrigin), timeOrigin, 'native theme switch must not reload');
          const metric = await body.evaluate(el => {
            const css = getComputedStyle(el);
            const a = el.querySelector('a');
            return { kind: el.dataset.bioReport, viewport: innerWidth, scrollWidth: document.documentElement.scrollWidth, reportWidth: el.getBoundingClientRect().width, font: css.fontSize, lineHeight: css.lineHeight, ink: css.color, link: getComputedStyle(a).color, paper: getComputedStyle(document.body).backgroundColor, h1: document.querySelectorAll('h1').length, canonical: document.querySelector('link[rel=canonical]')?.href, links: [...el.querySelectorAll('a[href^="https://example.org/"]')].map(a => a.href), css: [...document.styleSheets].some(s => s.href?.includes('bioai-columns')) };
          });
          assert.equal(metric.viewport, width);
          assert.ok(metric.scrollWidth <= width + 1, 'no page-wide horizontal overflow');
          assert.equal(metric.h1, 1);
          assert.ok(metric.css && metric.links.length);
          assert.equal(metric.canonical, new URL(route, base).href);
          assert.ok(contrast(metric.ink, metric.paper) >= 4.5 && contrast(metric.link, metric.paper) >= 4.5);
          const screenshot = `${section}-${device}-${theme}.png`;
          await page.screenshot({ path: path.join(output, screenshot) });
          const png = await readFile(path.join(output, screenshot));
          assert.equal(png.readUInt32BE(16), width, 'actual screenshot pixel width');
          assert.equal(png.readUInt32BE(20), height, 'actual screenshot pixel height');
          report.cases.push({ section, device, theme, ...metric, screenshot, textContrast: contrast(metric.ink, metric.paper), linkContrast: contrast(metric.link, metric.paper), nativeThemeNoReload: true });
          if (theme === 'light') {
            await page.evaluate(() => { document.querySelector('link[href*="bioai-columns"]').disabled = true; });
            await page.screenshot({ path: path.join(output, `${section}-${device}-columns-disabled.png`) });
            await page.evaluate(() => { document.querySelector('link[href*="bioai-columns"]').disabled = false; });
          }
        }
        if (section === 'project-opportunity') {
          await body.evaluate(el => {
            const fixture = document.createElement('section');
            fixture.id = 'display-fixture';
            fixture.innerHTML = '<h2>离线显示测试，不是项目事实</h2><blockquote><p>来源、限定与否定不能丢失。</p></blockquote><table tabindex="0" aria-label="排版测试表格"><tr><th>固定长标识符</th><th>证据阶段</th></tr><tr><td>source_identifier_that_must_remain_intact_1234567890123456789012345678901234567890</td><td>预印本，动物观察</td></tr></table><pre tabindex="0"><code>const source = "https://example.org/source?unchanged=1&amp;numeric=24"; // preserve this long line exactly\nconst windowWeeks = 8;</code></pre><div class="katex-display" tabindex="0">formula_display_preservation_x_1_plus_x_2_plus_x_3_equals_24_times_8_only_a_layout_fixture</div>';
            el.append(fixture);
          });
          await page.locator('#display-fixture').scrollIntoViewIfNeeded();
          const stress = await page.locator('#display-fixture').evaluate(el => ({ viewport: innerWidth, scrollWidth: document.documentElement.scrollWidth, regions: [...el.querySelectorAll('table,pre,.katex-display')].map(e => ({ tag: e.tagName, overflow: getComputedStyle(e).overflowX, whiteSpace: getComputedStyle(e).whiteSpace, width: e.clientWidth, scrollWidth: e.scrollWidth })) }));
          assert.ok(stress.scrollWidth <= width + 1);
          assert.ok(stress.regions.every(r => r.overflow === 'auto'));
          assert.equal(stress.regions[1].whiteSpace, 'pre');
          if (device === 'mobile') assert.ok(stress.regions.slice(0, 2).every(r => r.scrollWidth > r.width), 'long tables/code scroll locally rather than squeezing text');
          await page.screenshot({ path: path.join(output, `display-fixture-${device}-dark.png`) });
          report.cases.push({ fixture: true, device, ...stress });
        }
      }
    } finally { await context.close(); }
  }
  assert.deepEqual(report.pageErrors, []);
} catch (error) {
  report.error = error.stack;
  process.exitCode = 1;
} finally {
  await browser.close();
  await writeFile(path.join(output, 'report.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify({ output, cases: report.cases.length, error: report.error || null, pageErrors: report.pageErrors }));
}
