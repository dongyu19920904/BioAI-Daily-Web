const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

test("BioAI article schema exposes transparent citation metadata", () => {
  const head = read("layouts/_partials/custom/head-end.html");

  assert.match(head, /"inLanguage"/);
  assert.match(head, /"isAccessibleForFree" true/);
  assert.match(head, /dict "description" \. "abstract" \./);
});

test("BioAI robots and llms allow discovery without model directives", () => {
  const robots = read("layouts/robots.txt");
  const llms = read("static/llms.txt");

  for (const bot of ["Googlebot", "Bingbot", "OAI-SearchBot", "PerplexityBot"]) {
    assert.match(robots, new RegExp(`User-agent: ${bot}`));
  }
  assert.match(llms, /不包含排名、提高权重或优先引用指令/);
});
