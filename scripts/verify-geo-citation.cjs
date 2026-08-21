const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const publicDir = path.resolve(process.argv[2] || "public");

const samples = [
  {
    file: "2026-08/2026-08-21/index.html",
    canonical: "https://news.aibioo.cn/2026-08/2026-08-21/",
  },
  {
    file: "opportunity/2026-08/2026-08-21/index.html",
    canonical: "https://news.aibioo.cn/opportunity/2026-08/2026-08-21/",
  },
  {
    file: "project-opportunity/2026-08/2026-08-21/index.html",
    canonical: "https://news.aibioo.cn/project-opportunity/2026-08/2026-08-21/",
  },
];

const read = (relativePath) =>
  fs.readFileSync(path.join(publicDir, relativePath), "utf8");

function extractJsonLd(html) {
  const blocks = [];
  const pattern = /<script\s+type=["']?application\/ld\+json["']?>([\s\S]*?)<\/script>/gi;
  for (const match of html.matchAll(pattern)) {
    blocks.push(JSON.parse(match[1]));
  }
  return blocks;
}

for (const sample of samples) {
  const html = read(sample.file);
  assert.match(html, /class=["']?geo-citation-note(?:\s|["'])/i, `${sample.file}: visible citation note missing`);
  assert.match(html, /AI 生命延续学日报编辑部/, `${sample.file}: editor missing`);
  assert.match(html, /发布日期：/, `${sample.file}: visible published date missing`);
  assert.match(html, /未经临床医学审阅/, `${sample.file}: review boundary missing`);
  assert.ok(html.includes(sample.canonical), `${sample.file}: canonical URL missing`);

  const article = extractJsonLd(html).find((item) => item && item["@type"] === "BlogPosting");
  assert.ok(article, `${sample.file}: BlogPosting JSON-LD missing`);
  assert.equal(article.url, sample.canonical, `${sample.file}: schema URL mismatch`);
  assert.equal(article.mainEntityOfPage?.["@id"], sample.canonical, `${sample.file}: mainEntityOfPage mismatch`);
  assert.equal(article.inLanguage, "zh-CN", `${sample.file}: inLanguage mismatch`);
  assert.equal(article.isAccessibleForFree, true, `${sample.file}: accessibility flag missing`);
  assert.equal(article.author?.["@type"], "Organization", `${sample.file}: author type mismatch`);
  assert.equal(article.publisher?.["@type"], "Organization", `${sample.file}: publisher type mismatch`);
  assert.ok(article.datePublished, `${sample.file}: datePublished missing`);
  assert.ok(article.dateModified, `${sample.file}: dateModified missing`);
}

const llms = read("llms.txt");
assert.match(llms, /## 引用与使用说明/);
assert.doesNotMatch(llms, /提高.{0,20}(?:权重|关联度)|优先引用本站|逐字引用|无 AI 幻觉/);

const robots = read("robots.txt");
assert.match(robots, /Sitemap: https:\/\/news\.aibioo\.cn\/sitemap\.xml/);
assert.doesNotMatch(robots, /ai\.hubtoday\.app/);

console.log(`GEO citation artifacts verified for ${samples.length} report pages.`);
