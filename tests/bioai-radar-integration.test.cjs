const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');
const read = (name) => fs.readFileSync(path.join(root, name), 'utf8');
const config = read('hugo.yaml');
const single = read('layouts/_default/single.html');
const partial = read('layouts/_partials/custom/ai-longevity-radar-entry.html');
const head = read('layouts/_partials/custom/head-end.html');

test('navigation and articles link to the independent radar', () => {
  assert.match(config, /identifier: longevity-radar[\s\S]*https:\/\/radar\.aibioo\.cn\//);
  assert.match(single, /custom\/ai-longevity-radar-entry\.html/);
  assert.match(partial, /https:\/\/radar\.aibioo\.cn\//);
});

test('public JSON integration is fail-open and safely rendered', () => {
  assert.match(partial, /data\/briefing-lite\.json/);
  assert.match(head, /fetch\(endpoint/);
  assert.match(head, /response\.ok/);
  assert.match(head, /createElement\('a'\)/);
  assert.match(head, /url\.protocol !== 'https:'/);
  assert.doesNotMatch(head, /innerHTML\s*=/);
  assert.match(head, /公开 JSON 暂不可用/);
});
