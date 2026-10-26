const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const read = file => fs.readFileSync(path.join(__dirname, '..', file), 'utf8');

test('one formatter-independent report classifier preserves original column names and routes', () => {
  const partial = read('layouts/partials/custom/report-kind.html');
  for (const section of ['daily', 'opportunity', 'project-opportunity']) assert.ok(partial.includes(`"${section}"`));
  assert.match(partial, /\.RelPermalink/);
  assert.match(partial, /\.IsHome/);
  assert.match(partial, /return \$kind/);
  for (const file of ['layouts/_default/single.html', 'layouts/docs/single.html', 'layouts/docs/list.html']) {
    const source = read(file);
    assert.match(source, /custom\/report-kind.html/);
    assert.match(source, /data-bio-report=/);
    assert.match(source, /\.Content/);
  }
});

test('the column layer is fingerprinted, scoped, theme-neutral and responsive', () => {
  const head = read('layouts/_partials/custom/head-end.html');
  const css = read('assets/css/bioai-columns.css');
  assert.match(head, /resources.Get "css\/bioai-columns.css" \| minify \| fingerprint/);
  assert.ok(head.indexOf('css/bioai-columns.css') > head.indexOf('css/bioai-reader.css'));
  for (const section of ['daily', 'opportunity', 'project-opportunity']) assert.ok(css.includes(`[data-bio-report="${section}"]`));
  assert.doesNotMatch(css, /:root|html(?:\.|\s)|^body\s*\{|font-size:[^;\n]*vw|letter-spacing:\s*-/m);
  assert.match(css, /prefers-reduced-motion|focus-visible/);
  assert.match(css, /overflow-x:\s*auto/);
  assert.match(css, /white-space:\s*pre/);
  assert.match(css, /max-width:\s*767px/);
  assert.match(css, /var\(--bio-/);
});
