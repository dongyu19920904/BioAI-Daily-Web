# 三栏正文排版离线验收

范围仅 AI生命延续学日报、商机日报、资讯商机项目的正文与栏目首页；不改已有 Markdown、URL、schema、导航数据、根配色、雷达或个人博客。基线 `bd056cdcff3f8cce547e65e8cd74f22a9344870d`，本地分支 `codex/bioai-columns-editorial-20261026`，本轮不推送或部署。

## 改动

- `layouts/partials/custom/report-kind.html` 统一识别三栏，原模板只在识别成功时给正文加 `data-bio-report`；普通月目录、关于页等不进入新正文层。
- `assets/css/bioai-columns.css` 在 reader CSS 后指纹加载；保持原字体和日夜变量，限制 48rem 阅读宽度，整理列表间距，长表格与代码局部滚动。不新增 CSS 框架、字体、包或图片请求。
- `scripts/check-columns-offline.mjs` 是开发验收脚本，使用本机已有 Playwright 独立上下文，仅放行指定 loopback origin。不是 Pages/Worker 的运行依赖，不触发线上生成。
- `tests/column-presentation.test.cjs` 先红后绿；既有测试未删除、放宽或改历史正文。

## 结果

前端 `node --test tests/*.test.cjs`：33 通过。Hugo 0.147.9 全量构建中文 896 / 英文 984 页，既有 GEO 三类历史页校验及 14 期/27 节点时间线校验通过。最后表格列宽微调后重新构建当前固定样稿 21 页，通过。

浏览器 12 组：3 栏 × 桌面 1440×1000 / 手机 390×844 × 日夜，另 2 组长表格、代码与公式容器显示夹具。核对实际 PNG 像素宽高、原生主题按钮、正文不变、无重载、单 H1、来源链接和 canonical、无页面横向溢出、无 pageerror。手机长表格/代码确实局部滚动；公式是容器测试，不宣称新增数学引擎。

正文对比度日间 10.69:1、夜间 12.87:1；链接 5.45:1 / 10.01:1。不是完整 WCAG 或护眼认证。固定样稿不是实际医学研究或真实需求验证，不发布。

## 本机复现

缓存、临时目录按 `project-cache-hygiene` 包装器放在 D 盘。后端 `D:\GitHub\_worktrees\bioai-opportunity-gate-20261026` 中设置 `BIOAI_FIXTURE_OUTPUT_DIR=D:\CodexCache\artifacts\bioai-columns-editorial-20261026`，执行带 `tests/helpers/deny-network.cjs` 的完整 Node 测试，即可导出实际 mock 保存链路的三栏 MD、records 和结果。

Hugo 配置和临时服务在该产物目录的 `fixture-config.json` / `full-config.json` / `serve.mjs`。使用已有 `D:\CodexCache\tools\hugo-0.147.9\hugo.exe`，不执行主题更新或 npm 安装。样稿构建完成并启动仅 loopback 的预览后，在本仓库通过缓存包装器执行：

```powershell
# -Command array for Invoke-WithProjectCache.ps1
@('node','scripts/check-columns-offline.mjs','http://127.0.0.1:1337/','D:/CodexCache/artifacts/bioai-columns-editorial-20261026/browser')
```

`THEME_PLAYWRIGHT_MODULE` 可指定已有 Playwright 模块，不会自动安装。默认是本机 Codex 已有 runtime。脚本退出时关闭自有浏览器上下文，服务另行停止；不操作日常 Chrome 或共享 neo 标签。

完整截图/数据：`D:\CodexCache\artifacts\bioai-columns-editorial-20261026\browser\report.json` 与同目录 PNG。6 张 `columns-disabled` 仅表示同稿关闭新增 CSS 的显示对照，不能当成新旧模型质量 A/B。全量构建/固定素材/后端成本及未验收范围详见后端 `docs/BIOAI_COLUMNS_EDITORIAL_20261026.md`。

待统一整合：只交本地提交，不独立发布前端或 Worker；需保留协调任务的个人博客新版本。真实模型下一期措辞与线上费用尚未验证。
