const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8').replace(/\r\n/g, '\n');
const body = content => content.replace(/^---\n[\s\S]*?\n---\n/, '').trim();

test('aligned edition has one consistent body, ten topics and original media', () => {
    const raw = read('daily/2026-10-16.md').trim();
    assert.equal(body(read('content/cn/2026-10/2026-10-16.md')), raw);
    assert.equal(body(read('content/cn/_index.md')), raw);
    const topics = [...raw.matchAll(/^### (\d+)\. (.+)$/gm)];
    assert.deepEqual(topics.map(match => Number(match[1])), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    assert.ok(topics.every(match => !match[2].includes('](')));
    const sections = [...raw.matchAll(/^## \*\*(.+)\*\*$/gm)].map(match => match[1]);
    assert.deepEqual(sections, ['今日摘要', '🔥 今日焦点 TOP 10', '🧪 前沿研究', '⌘ 开源 TOP 项目', '❓ 相关问题']);
    assert.doesNotMatch(raw, /快速导航|今日可引用要点|趋势预测/);
    assert.match(raw, /细胞实验 \+ 动物模型/);
    const originals = new Set([...read('docs/daily-structure-20261016/2026-10-16-original.md').matchAll(/!\[[^\]]*\]\((https?:[^)]+)\)/g)].map(match => match[1]));
    const images = [...raw.matchAll(/!\[[^\]]*\]\((https?:[^)]+)\)/g)].map(match => match[1]);
    assert.equal(images.length, 6);
    assert.ok(images.every(url => originals.has(url)));
});
