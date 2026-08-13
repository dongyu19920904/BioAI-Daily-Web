const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const publicDir = path.resolve(process.argv[2] || "public");
const read = (...parts) => fs.readFileSync(path.join(publicDir, ...parts), "utf8");

const timeline = read("timeline", "index.html");
const sitemap = read("sitemap.xml");
const zhSitemap = read("zh", "sitemap.xml");
const llms = read("llms.txt");

const cardTags = [...timeline.matchAll(/<article\b[^>]*\bdata-timeline-item(?:\s|=|>)[^>]*>/g)].map(
  (match) => match[0],
);
const cardCount = cardTags.length;
const sessionDates = [...timeline.matchAll(/<section\b[^>]*\bdata-timeline-session\b[^>]*\bdata-date=(?:"(\d{4}-\d{2}-\d{2})"|(\d{4}-\d{2}-\d{2}))/g)].map(
  (match) => match[1] || match[2],
);
const cardBlocks = [...timeline.matchAll(/<article\b[^>]*\bdata-timeline-item(?:\s|=|>)[^>]*>[\s\S]*?<\/article>/g)].map(
  (match) => match[0],
);
const externalUrls = cardBlocks.map((card) => {
  const sourceAnchor = card.match(/<a\b[^>]*href=(?:"([^"]+)"|'([^']+)'|([^\s>]+))[^>]*>来源证据/);
  assert.ok(sourceAnchor, "every card must expose a source evidence link");
  return (sourceAnchor[1] || sourceAnchor[2] || sourceAnchor[3])
    .replace(/[?#].*$/, "")
    .replace(/\/$/, "")
    .toLowerCase();
});
const jsonLdBlocks = [...timeline.matchAll(/<script\b[^>]*type=(?:"application\/ld\+json"|application\/ld\+json)[^>]*>([\s\S]*?)<\/script>/g)].map(
  (match) => match[1].trim(),
);
const collectionSchema = jsonLdBlocks
  .map((block) => {
    try {
      return JSON.parse(block);
    } catch {
      return null;
    }
  })
  .find((schema) => schema && schema["@type"] === "CollectionPage");

assert.ok(cardCount > 0, "timeline must render at least one signal card");
assert.equal(cardBlocks.length, cardCount, "every signal card must have a complete article block");
assert.ok(cardCount <= 28, `timeline rendered too many cards: ${cardCount}`);
assert.ok(sessionDates.length > 0 && sessionDates.length <= 14, "timeline must cover one to fourteen published issues");
assert.deepEqual(sessionDates, [...sessionDates].sort().reverse(), "timeline dates must be descending");
assert.equal(new Set(externalUrls).size, externalUrls.length, "timeline source URLs must be unique");
assert.ok(collectionSchema, "CollectionPage JSON-LD is required");
assert.equal(collectionSchema.mainEntity["@type"], "ItemList");
assert.equal(collectionSchema.mainEntity.numberOfItems, cardCount, "schema and visible card count must match");
assert.equal(collectionSchema.mainEntity.itemListElement.length, cardCount, "schema list and cards must match");
assert.match(timeline, /<link\b[^>]*rel=canonical[^>]*href=https:\/\/news\.aibioo\.cn\/timeline\/?(?:\s|>)/);
assert.doesNotMatch(timeline, /name=robots[^>]*content="?noindex/i);
assert.doesNotMatch(timeline, /AI生命科学趋势预测|相关问题|AI生命科学趣闻/);
assert.match(sitemap, /<loc>https:\/\/news\.aibioo\.cn\/zh\/sitemap\.xml<\/loc>/);
assert.match(zhSitemap, /<loc>https:\/\/news\.aibioo\.cn\/timeline\/<\/loc>/);
assert.match(zhSitemap, new RegExp(`<lastmod>${sessionDates[0]}T00:00:00\\+08:00<\\/lastmod>`));
assert.match(llms, /AI 生命延续学时间线/);

const enTimelinePath = path.join(publicDir, "en", "timeline", "index.html");
if (fs.existsSync(enTimelinePath)) {
  const englishTimeline = fs.readFileSync(enTimelinePath, "utf8");
  assert.match(englishTimeline, /name=robots[^>]*content="?noindex, nofollow/i);
  const enSitemap = read("en", "sitemap.xml");
  assert.doesNotMatch(enSitemap, /<loc>https:\/\/news\.aibioo\.cn\/en\/timeline\/<\/loc>/);
}

console.log(
  JSON.stringify(
    {
      cardCount,
      issueCount: sessionDates.length,
      latestDate: sessionDates[0],
      uniqueSourceUrls: externalUrls.length,
      schemaItems: collectionSchema.mainEntity.numberOfItems,
    },
    null,
    2,
  ),
);
