const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

test("report pages expose the evidence-to-action navigation chain", () => {
  const single = read("layouts/docs/single.html");
  const chain = read("layouts/_partials/custom/report-action-chain.html");

  assert.match(single, /custom\/report-action-chain\.html/);
  assert.match(chain, /雷达信号 → 证据解释 → 商机验证 → 项目试跑/);
  assert.match(chain, /https:\/\/radar\.aibioo\.cn\//);
  assert.match(chain, /\/opportunity\//);
  assert.match(chain, /\/project-opportunity\//);
  assert.match(chain, /\/timeline\//);
  assert.match(chain, /相关历史证据/);
  assert.match(chain, /相邻期次/);
  assert.match(chain, /Continue from evidence to action/);
  assert.match(chain, /utils\/report-date-key\.html/);
  assert.match(chain, /lt \$candidateDateKey \$pageDateKey/);
  assert.match(chain, /\.RegularPages\.ByDate\.Reverse/);
  assert.match(chain, /partialCached "custom\/report-topic-history\.html"/);
  assert.doesNotMatch(chain, /range where site\.RegularPages/);

  const topic = read("layouts/_partials/utils/report-topic.html");
  const history = read("layouts/_partials/custom/report-topic-history.html");
  assert.match(topic, /AI药物发现/);
  assert.match(topic, /生物年龄与衰老时钟/);
  assert.match(topic, /神经退行性疾病AI/);
  assert.match(history, /RegularPages\.ByDate\.Reverse/);
  assert.match(history, /utils\/report-date-key\.html/);
  assert.match(history, /eq \.Language\.Lang \$lang/);

  const dateKey = read("layouts/_partials/utils/report-date-key.html");
  assert.match(dateKey, /ContentBaseName/);
  assert.match(dateKey, /\^\\d\{4\}-\\d\{2\}-\\d\{2\}\$/);
});
