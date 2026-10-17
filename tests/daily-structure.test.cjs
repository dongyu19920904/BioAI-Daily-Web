const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8').replace(/\r\n/g, '\n');
const body = content => content.replace(/^---\n[\s\S]*?\n---\n/, '').trim();

test('latest aligned edition keeps its body and section order across daily rollover', () => {
    const date = fs.readdirSync(path.join(root, 'daily')).filter(file => /^\d{4}-\d{2}-\d{2}\.md$/.test(file)).sort().at(-1).slice(0, 10);
    const raw = read(`daily/${date}.md`).trim();
    assert.equal(body(read(`content/cn/${date.slice(0, 7)}/${date}.md`)), raw);
    assert.equal(body(read('content/cn/_index.md')), raw);
    const topics = [...raw.matchAll(/^### (\d+)\. (.+)$/gm)];
    const count = Number(raw.match(/今日焦点 TOP (\d+)/)?.[1]);
    assert.ok(count > 0 && count <= 10);
    assert.deepEqual(topics.map(match => Number(match[1])), Array.from({ length: count }, (_, index) => index + 1));
    assert.ok(topics.every(match => !match[2].includes('](')));
    const sections = [...raw.matchAll(/^## \*\*(.+)\*\*$/gm)].map(match => match[1]);
    const allowed = ['今日摘要', `🔥 今日焦点 TOP ${count}`, '⚡ 产品与功能更新', '🧪 前沿研究', '◎ 行业变化与个人影响', '⌘ 开源 TOP 项目', '◉ 社媒精选', '😄 AI趣闻', '❓ 相关问题'];
    const positions = sections.map(section => allowed.indexOf(section));
    assert.deepEqual(sections.slice(0, 2), allowed.slice(0, 2));
    assert.ok(positions.every((position, index) => position >= 0 && (index === 0 || position > positions[index - 1])));
    assert.doesNotMatch(raw, /快速导航|今日可引用要点|趋势预测/);
    assert.doesNotMatch(raw, /^来源类型[:：]|^证据阶段[:：]|^可信度[:：]/m);
    assert.doesNotMatch(raw, /^\*\*[^\n]+\*\*(?:\s*\[[^\n]+)?[。.]?\s*$/m);
    assert.match(raw, /尚未.*临床|预印本|未.*验证|没有人体效果证据|没有经过同行专家审核/);
});

test('every latest news item has prose and an inline source without freezing daily facts', () => {
    const file = fs.readdirSync(path.join(root, 'daily')).filter(file => /^\d{4}-\d{2}-\d{2}\.md$/.test(file)).sort().at(-1);
    const raw = read(`daily/${file}`);
    const items = raw.split(/^### .+\n/gm).slice(1);
    assert.ok(items.length > 0);
    for (const item of items) {
        const paragraphs = item.split(/\n\s*\n/).map(value => value.trim()).filter(value => value && !/^(?:#|---|\[?!\[)/.test(value));
        assert.ok(paragraphs.some(value => value.length >= 30 && /\[[^\]]+\]\(https?:\/\//.test(value)), 'each item needs actual prose with an inline source');
    }
    assert.doesNotMatch(raw, /BIOAI_REF_\d+/);
    assert.doesNotMatch(raw, /^关键词[:：]|^学到什么[:：]/m);
});

test('daily reading uses a restrained shared style for dated pages and homepage', () => {
    const css = read('assets/css/custom.css');
    assert.match(read('layouts/_default/single.html'), /if \$isDaily.*bio-daily-reading/);
    assert.match(read('layouts/docs/single.html'), /if \$isDaily.*bio-daily-reading/);
    assert.match(read('layouts/docs/list.html'), /if \.IsHome.*bio-daily-reading/);
    assert.match(css, /\.bio-daily-reading \.content h3\s*\{[^}]*font-size: 17px/s);
    assert.match(css, /\.bio-daily-reading \.content strong\s*\{[^}]*color: inherit/s);
    assert.match(css, /Only the opening summary is prose/);
});
