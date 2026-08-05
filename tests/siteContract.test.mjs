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

test('section home is a latest entry and does not duplicate the full report', () => {
  const home = read('content/cn/_index.md');
  assert.match(home, /阅读 20\d{2}-\d{2}-\d{2} 完整日报/);
  assert.doesNotMatch(home, /重磅 TOP 10|## 今日信号/);
  assert.ok(home.length < 3000, 'section entry must stay short');
});

test('ordinary daily layout suppresses the generic store promotion', () => {
  const docsSingle = read('layouts/docs/single.html');
  assert.match(docsSingle, /bio-daily-masthead\.html/);
  assert.doesNotMatch(docsSingle, /custom\/aivora-promo\.html/);
});
