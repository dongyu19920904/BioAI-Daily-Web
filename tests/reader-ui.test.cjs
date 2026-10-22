const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const read = name => fs.readFileSync(path.join(__dirname, '..', name), 'utf8');

test('reader assets are fingerprinted and all report kinds retain date and archive context', () => {
  const head = read('layouts/_partials/custom/head-end.html');
  assert.match(head, /resources.Get "css\/bioai-reader.css" \| minify \| fingerprint/);
  assert.match(head, /resources.Get "js\/bioai-reader.js" \| minify \| fingerprint/);
  const masthead = read('layouts/partials/custom/report-masthead.html');
  assert.match(masthead, /with \.File/);
  for (const field of ['opportunity', 'project-opportunity', '.ReadingTime', 'datetime=', 'relLangURL', 'custom/reader-more.html']) assert.ok(masthead.includes(field), field);
  assert.equal((masthead.match(/<h1>/g) || []).length, 1);
});

test('secondary destinations remain navigable on mobile without duplicate business logic', () => {
  const config = read('hugo.yaml');
  for (const name of ['real-longevity', 'opportunity-status', 'personal-home', 'ai-daily', 'about']) {
    assert.match(config, new RegExp(`identifier: ${name}\\n[^]*?parent: more`));
  }
  const more = read('layouts/partials/custom/reader-more.html');
  assert.match(more, /<details class="bio-reader-more">/);
  assert.match(more, /range site.Menus.main/);
  assert.match(more, /range .Children/);
  const js = read('assets/js/bioai-reader.js');
  assert.match(js, /event.key === 'Escape'/);
  assert.match(js, /hextra-sidebar-active-item/);
  assert.doesNotMatch(js, /fetch\(|localStorage|innerHTML/);
  assert.doesNotMatch(config, /weight:\s*\d+\.\d+/);
  assert.match(read('i18n/zh.yaml'), /onThisPage: 本页目录/);
  assert.match(read('i18n/en.yaml'), /bioDailyTitle: AI Longevity Daily/);
  assert.match(read('layouts/partials/custom/report-masthead.html'), /T "bioDailyTitle"/);
});

test('citation provenance stays expandable with the medical caution always visible', () => {
  const note = read('layouts/_partials/custom/geo-citation-note.html');
  assert.ok(note.indexOf('未经临床医学审阅') < note.indexOf('<details>'));
  assert.match(note, /<summary>编辑与引用信息<\/summary>/);
  assert.doesNotMatch(note, /if \$isDaily/);
  const css = read('assets/css/bioai-reader.css');
  assert.match(css, /\.bio-reader \.content img[^}]*min-width: 0;[^}]*height: auto;/s);
  assert.match(css, /\.bio-reader-more nav \{ left: 0; right: auto; \}/);
});
