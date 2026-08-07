import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('robots, baseURL, sitemap and canonical domain share news.aibioo.cn', () => {
  assert.match(read('hugo.yaml'), /baseURL:\s*["']https:\/\/news\.aibioo\.cn\//);
  const robots = read('layouts/robots.txt');
  assert.match(robots, /Sitemap:\s+https:\/\/news\.aibioo\.cn\/sitemap\.xml/);
  assert.doesNotMatch(robots, /ai\.hubtoday\.app/);
  for (const bot of ['OAI-SearchBot', 'PerplexityBot', 'Googlebot', 'Bingbot']) {
    assert.match(robots, new RegExp(`User-agent: ${bot}`));
  }
});

test('ordinary daily navigation resolves the latest published date dynamically', () => {
  const nav = read('layouts/_partials/navbar-link.html');
  const latest = read('layouts/_partials/custom/latest-daily-url.html');
  assert.match(nav, /Identifier "documentation"/);
  assert.match(nav, /partialCached "custom\/latest-daily-url\.html"/);
  assert.match(latest, /where site\.RegularPages "Language\.Lang"/);
  assert.match(latest, /sort \$pages "File\.Path" "desc"/);
  assert.match(latest, /\.RelPermalink/);
});

test('ordinary daily uses real editorial schema and never MedicalWebPage', () => {
  const head = read('layouts/_partials/custom/head-end.html');
  assert.match(head, /"BlogPosting"/);
  assert.match(head, /"BreadcrumbList"/);
  assert.match(head, /authorName/);
  assert.doesNotMatch(head, /MedicalWebPage/);
});

test('evidence links remain crawlable and store links are sponsored', () => {
  const renderer = read('layouts/_default/_markup/render-link.html');
  assert.doesNotMatch(renderer, /nofollow/);
  assert.match(renderer, /sponsored/);
});

test('daily typography keeps unified Chinese reading fonts and 16px mobile body', () => {
  const css = read('assets/css/custom.css');
  assert.match(css, /\.bio-daily-layout[\s\S]*Microsoft YaHei UI[\s\S]*PingFang SC[\s\S]*Noto Sans CJK SC/);
  assert.match(css, /@media \(max-width: 767px\)[\s\S]*\.bio-daily-content[\s\S]*font-size:\s*1rem/);
  assert.match(css, /\.bio-daily-content figcaption/);
});

test('site home redirects to the latest published date without a hard-coded date', () => {
  const home = read('content/cn/_index.md');
  const homeTemplate = read('themes/hextra/layouts/home.html');
  const head = read('themes/hextra/layouts/_partials/head.html');
  const headEnd = read('layouts/_partials/custom/head-end.html');
  assert.match(home, /noindex:\s*true/);
  assert.doesNotMatch(home, /20\d{2}-\d{2}-\d{2}/);
  assert.doesNotMatch(home, /重磅 TOP 10|## 今日信号/);
  assert.match(homeTemplate, /partial "custom\/latest-daily-url\.html"/);
  assert.match(head, /noindex, follow/);
  assert.match(head, /latest-daily-url\.html/);
  assert.match(headEnd, /window\.location\.replace/);
  assert.match(headEnd, /http-equiv="refresh"/);
});

test('daily sync preserves reviewed date pages and leaves the root redirect stable', () => {
  const workflow = read('.github/workflows/build-book.yaml');
  assert.match(workflow, /文件 \$TARGET_FILE 已存在[\s\S]*continue/);
  assert.match(workflow, /authorName:[\s\S]*editor:[\s\S]*evidenceSummary:[\s\S]*applicationDistance:/);
  assert.doesNotMatch(workflow, /cat "\$LATEST_NOTE" >> "\$TARGET_INDEX"/);
  assert.match(workflow, /同步任务不再改写 content\/cn\/_index\.md/);
  assert.doesNotMatch(workflow, /printf "阅读 %s 完整日报/);
});

test('ordinary daily layout suppresses the generic store promotion', () => {
  const docsSingle = read('layouts/docs/single.html');
  assert.match(docsSingle, /bio-daily-masthead\.html/);
  assert.doesNotMatch(docsSingle, /custom\/aivora-promo\.html/);
});
