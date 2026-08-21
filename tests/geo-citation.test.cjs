const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

test("report pages show a visible source-first citation contract", () => {
  const single = read("layouts/_default/single.html");
  const docsSingle = read("layouts/docs/single.html");
  const citation = read("layouts/_partials/custom/geo-citation-note.html");
  const css = read("assets/css/custom.css");

  assert.match(single, /custom\/geo-citation-note\.html/);
  assert.match(docsSingle, /custom\/geo-citation-note\.html/);
  assert.match(docsSingle, /\$isGeoReport/);
  assert.match(citation, /AI 生命延续学日报编辑部/);
  assert.match(citation, /未经临床医学审阅/);
  assert.match(citation, /原始论文、机构或项目来源/);
  assert.match(citation, /\.Permalink/);
  assert.match(citation, /发布日期/);
  assert.match(citation, /更新时间/);
  assert.match(citation, /ContentBaseName/);
  assert.doesNotMatch(css, /\.geo-citation-note[^}]*display\s*:\s*none/s);
  assert.doesNotMatch(citation, /User-Agent|GPTBot|PerplexityBot|OAI-SearchBot/);
});

test("llms.txt is a transparent directory and citation guide, not a ranking prompt", () => {
  const llms = read("static/llms.txt");

  assert.match(llms, /## 引用与使用说明/);
  assert.match(llms, /文章标题、发布日期和 canonical URL/);
  assert.match(llms, /原始论文、期刊、临床试验注册或监管机构页面/);
  assert.match(llms, /AI 生命延续学商机日报/);
  assert.match(llms, /AI 生命延续学资讯商机项目/);
  assert.doesNotMatch(llms, /提高.{0,20}(?:权重|关联度)|优先引用本站|逐字引用|无 AI 幻觉/);
});

test("schema uses truthful article and organization semantics", () => {
  const head = read("layouts/_partials/custom/head-end.html");
  const config = read("hugo.yaml");

  assert.match(head, /"BlogPosting"/);
  assert.match(head, /"WebPage"/);
  assert.match(head, /"inLanguage"/);
  assert.match(head, /"isAccessibleForFree" true/);
  assert.doesNotMatch(head, /"TechArticle"|"MedicalWebPage"/);
  assert.match(config, /publisher:[\s\S]*type: "Organization"[\s\S]*AI 生命延续学日报编辑部/);
  assert.match(config, /author:[\s\S]*type: "Organization"/);
});

test("robots keeps the real domain and does not restore the historical sitemap host", () => {
  const robots = read("layouts/robots.txt");

  assert.match(robots, /Sitemap: https:\/\/news\.aibioo\.cn\/sitemap\.xml/);
  assert.doesNotMatch(robots, /ai\.hubtoday\.app/);
  assert.doesNotMatch(robots, /User-agent:\s*(?:OAI-SearchBot|PerplexityBot|Googlebot|Bingbot)[\s\S]{0,100}Disallow:\s*\//i);
});

test("Pages verifies generated GEO artifacts before deployment", () => {
  const workflow = read(".github/workflows/pages.yaml");
  const verifier = read("scripts/verify-geo-citation.cjs");

  assert.match(workflow, /node scripts\/verify-geo-citation\.cjs public/);
  assert.match(verifier, /BlogPosting/);
  assert.match(verifier, /geo-citation-note/);
  assert.match(verifier, /datePublished/);
  assert.match(verifier, /dateModified/);
});
