const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { reuseDailyFrontMatter } = require('../scripts/sync-daily-page.cjs');

test('daily sync preserves Worker metadata and replaces only the body', () => {
    const header = '---\r\ndate: 2026-10-16T00:00:00+08:00\r\ndescription: "APOE4 研究"\r\nimages:\r\n  - https://example.org/image.png\r\n---';
    const body = '## **今日摘要**\n\n事实。\n\n## **🔥 今日焦点 TOP 10**\n';
    assert.equal(reuseDailyFrontMatter(header + '\r\n\r\n旧正文', body), header + '\n\n' + body);
    assert.throws(() => reuseDailyFrontMatter('No frontmatter', body), /no YAML frontmatter/);
});

test('daily sync workflow retains per-page metadata and points homepage at newest edition', () => {
    const workflow = fs.readFileSync(path.join(__dirname, '../.github/workflows/build-book.yaml'), 'utf8');
    assert.match(workflow, /node scripts\/sync-daily-page\.cjs/);
    assert.match(workflow, /yq e --front-matter=extract/);
    assert.match(workflow, /NEXT_LINK="\$\{LATEST_NOTE_DATE:0:7\}\/\$\{LATEST_NOTE_DATE\}"/);
    assert.doesNotMatch(workflow, /NEXT_LINK="\$\{YEAR_MONTH_SECOND_LATEST\}/);
});
