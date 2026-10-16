const fs = require('node:fs');

function reuseDailyFrontMatter(existingPage, daily) {
    const frontMatter = existingPage.match(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/);
    if (!frontMatter) throw new Error('Existing daily page has no YAML frontmatter');
    return frontMatter[0].trimEnd() + '\n\n' + daily.trim() + '\n';
}

if (require.main === module) {
    const [source, target] = process.argv.slice(2);
    if (!source || !target) throw new Error('Usage: sync-daily-page.cjs source.md target.md');
    const updated = reuseDailyFrontMatter(fs.readFileSync(target, 'utf8'), fs.readFileSync(source, 'utf8'));
    fs.writeFileSync(target, updated);
}

module.exports = { reuseDailyFrontMatter };
