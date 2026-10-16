const fs = require('node:fs');

function reuseDailyFrontMatter(existingPage, daily) {
    const frontMatter = existingPage.match(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/);
    if (!frontMatter) throw new Error('Existing daily page has no YAML frontmatter');
    const normalized = value => value.replace(/\r\n/g, '\n').trim();
    if (normalized(existingPage.slice(frontMatter[0].length)) === normalized(daily)) return existingPage;
    return frontMatter[0].trimEnd() + '\n\n' + daily.trim() + '\n';
}

if (require.main === module) {
    const [source, target] = process.argv.slice(2);
    if (!source || !target) throw new Error('Usage: sync-daily-page.cjs source.md target.md');
    const existing = fs.readFileSync(target, 'utf8');
    const updated = reuseDailyFrontMatter(existing, fs.readFileSync(source, 'utf8'));
    if (updated !== existing) fs.writeFileSync(target, updated);
}

module.exports = { reuseDailyFrontMatter };
