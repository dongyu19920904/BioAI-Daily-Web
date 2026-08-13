const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

test("BioAI 时间线只读取最近 14 期且每期最多两个 TOP 节点", () => {
  const template = read("layouts/timeline/list.html");
  const collector = read("layouts/partials/timeline/collect-bioai-signals.html");

  assert.match(template, /"issueLimit" 14 "maxNodesPerDay" 2/);
  assert.match(collector, /\$dailyNodeCount := 0/);
  assert.match(collector, /le \$rank \$maxNodesPerDay/);
  assert.match(collector, /lt \$dailyNodeCount \$maxNodesPerDay/);
  assert.match(collector, /\$dailyNodeCount = add \$dailyNodeCount 1/);
});

test("解析器匹配 BioAI 加粗编号链接且限定重磅 TOP 章节", () => {
  const collector = read("layouts/partials/timeline/collect-bioai-signals.html");

  assert.match(collector, /\\\*\\\*\\s\*\(\[0-9\]\+\)\\\./);
  assert.match(collector, /in \$sectionHeadingLower "top"/);
  assert.match(collector, /in \$sectionHeading "重磅"/);
  assert.doesNotMatch(collector, /趋势预测|相关问题|AI生命科学趣闻/);
});

test("时间线使用 URL 去重并保留来源证据与日报上下文", () => {
  const collector = read("layouts/partials/timeline/collect-bioai-signals.html");
  const template = read("layouts/timeline/list.html");

  assert.match(collector, /\$seenURLs := newScratch/);
  assert.match(collector, /replaceRE `\[#\?\]\.\*\$`/);
  assert.match(template, />\s*来源证据/);
  assert.match(template, />日报上下文</);
});

test("CollectionPage 和 ItemList 与同一 signals 集合生成", () => {
  const template = read("layouts/timeline/list.html");

  assert.match(template, /"@type" "CollectionPage"/);
  assert.match(template, /"@type" "ItemList"/);
  assert.match(template, /"itemListElement" \$schemaItems/);
  assert.match(template, /"numberOfItems" \(len \$schemaItems\)/);
  assert.match(template, /"dateModified"/);
  assert.match(template, /replace \$date "-" "\."/);
  assert.doesNotMatch(template, /\$date \| replace/);
  assert.match(template, /data-fixed-date/);
  assert.match(read("layouts/_partials/custom/head-end.html"), /hasAttribute\('data-fixed-date'\)/);
});

test("英文时间线不生成、保持 noindex，且翻译工作流不能覆盖它", () => {
  const english = read("content/en/timeline/_index.md");
  const head = read("layouts/_partials/custom/head-end.html");
  const enWorkflow = read(".github/workflows/build-book-en.yaml");
  const jaWorkflow = read(".github/workflows/build-book-ja.yaml");

  assert.match(english, /noindex:\s*true/);
  assert.match(english, /sitemap:\s*\n\s+disable:\s*true/);
  assert.match(english, /_build:\s*\n\s+render:\s*never\s*\n\s+list:\s*never/);
  assert.match(head, /if not \(\.Params\.noindex \| default false\)/);
  for (const workflow of [enWorkflow, jaWorkflow]) {
    assert.match(workflow, /! -path "content\/cn\/timeline\/_index\.md"/);
    assert.match(workflow, /--exclude 'timeline\/'/);
  }
});

test("页面公开说明来源类型不等于医学证据等级", () => {
  const template = read("layouts/timeline/list.html");
  const llms = read("static/llms.txt");

  assert.match(template, /来源类型.*不代表医学证据等级/);
  assert.match(template, /不构成医疗、诊断、治疗或抗衰建议/);
  assert.match(llms, /来源类型只说明链接性质，不等同于医学证据等级/);
});

test("Pages 部署在构建前运行测试、构建后验证产物", () => {
  const workflow = read(".github/workflows/pages.yaml");

  assert.match(workflow, /actions\/setup-node@v4/);
  assert.match(workflow, /node-version:\s*'22'/);
  assert.match(workflow, /node --test tests\/\*\.test\.cjs/);
  assert.match(workflow, /node scripts\/verify-bioai-timeline\.cjs public/);
});
