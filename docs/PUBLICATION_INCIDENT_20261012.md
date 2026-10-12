# BioAI 日报停更排查与恢复（2026-10-12）

## 已核实的原因

- 公开站点 `https://news.aibioo.cn/` 停在 2026-10-02，但前端仓库已有 2026-10-12 普通日报、栏目首页及商机日报。
- BioAI 后端自愈运行 `38163916849` 于 2026-10-12 北京时间凌晨成功生成普通日报、商机日报；项目商机因来源缺失及健康自测风险被内容门禁拦截。
- 前端部署运行 `36994266171` 创建于 2026-10-02；build 已成功，deploy 长期 queued，整个 workflow 一直未结束。
- `.github/workflows/pages.yaml` 使用全局 `pages` 并发锁及 `cancel-in-progress: false`；旧任务长期占锁，后续任务只能等待，并持续替换取消前一个 pending 任务。
- 取消旧运行后，最新运行 `38201060149` 立即开始构建，证实发布队列锁是本次网站停更的直接阻塞点。GitHub 内部为何未调度旧 deploy，现有日志无法进一步确定。

## 与农业项目的关系

- 农业项目任务：`01a105fc-524a-7e13-9716-f522194962a8`，仓库 `QiuQiu-Farm-Daily-Generator` / `QiuQiu-Farm-Daily-Web`。
- 农业日报由 GitHub Actions 在 runner 内采集、调用模型、构建，发布到独立 Cloudflare Pages 项目 `qiuqiu-farm-daily`。
- Cloudflare API 确认农业 Pages 属于同一个 Cloudflare 账号，生产部署 `uses_functions: false`；生成器未部署 Worker/Cron/KV。
- BioAI 前端实际使用 GitHub Pages，自定义域名为 `news.aibioo.cn`，不是 Cloudflare Pages 构建；其后端 Worker 登录页本次正常返回 200。
- 没有证据表明农业项目耗尽了 BioAI Worker 额度。本次已定位的阻塞在 GitHub Pages 发布队列，因此无需为此次恢复注册或迁移 Cloudflare 账号。
- 本轮未取得完整 Cloudflare 用量账单，不据此声称账号全部资源均有剩余额度。

## 最小修复

1. 取消长期卡住的运行 `36994266171`，让最新正常稿件自动构建发布。
2. build 添加 20 分钟超时，deploy 添加 10 分钟超时。
3. 新增独立 `pages-queue-guard.yaml`，每小时检查一次，仅取消本仓库 `pages.yaml`、main 分支超过 60 分钟仍活动的运行，再调度最新版本。
4. 正常取消后有界等待；仍未结束才调用 force-cancel。守卫不调用模型、不改文章、不使用 Cloudflare Worker/KV。

## 验证记录

- 原有前端合同测试 16/16 通过。
- 队列守卫模拟检查通过：健康任务不取消；10 天前 queued 任务被解除并触发重发；普通取消失败时强制解除。
- 仓库最新普通日报已存在，无需重新调用模型或伪造 10 月 3 日后的历史内容。
- 公开首页与日期页最终回查结果在恢复发布完成后补记。

## 相关记录

- 旧卡住任务：https://github.com/dongyu19920904/BioAI-Daily-Web/actions/runs/36994266171
- 恢复部署：https://github.com/dongyu19920904/BioAI-Daily-Web/actions/runs/38201060149
- 后端生成与项目商机门禁日志：https://github.com/dongyu19920904/CloudFlare-BioAI-Daily/actions/runs/38163916849
- Cloudflare 静态 Pages 与 Functions 额度说明：https://developers.cloudflare.com/pages/functions/pricing/
