#  BioAI 生命科学日报 - 前端 AI 开发指南

> 本文档供 AI 助手阅读，了解前端项目背景、目标和配置方法。

---

##  项目背景

本项目是 **BioAI 生命科学日报** 的前端展示网站，基于 Hugo + Hextra 主题构建。

| 项目 | 仓库地址 |
|------|----------|
| **前端 (本项目)** | https://github.com/dongyu19920904/BioAI-Daily-Web |
| **后端** | https://github.com/dongyu19920904/CloudFlare-BioAI-Daily |

**原项目来源：** Hextra-AI-Insight-Daily（AI 资讯日报前端）

---

##  用户目标

将原来的 **AI 资讯日报** 改造成 **AI + 生命科学日报**，聚焦领域包括：
- AI 辅助药物研发
- 蛋白质结构预测 (AlphaFold 等)
- 基因编辑与 CRISPR
- 生物信息学
- 医学影像 AI
- 数字健康
- 合成生物学

---

##  项目结构

`
BioAI-Daily-Web/
 hugo.yaml              # Hugo 主配置文件 
 content/
    cn/                # 中文内容
       _index.md      # 首页内容
       about.md       # 关于页面
       daily/         # 每日日报（由后端自动生成）
    en/                # 英文内容
 static/
    images/            # Logo 等图片
    favicon.ico        # 网站图标
    CNAME              # 自定义域名配置
 layouts/               # 自定义布局模板
 themes/hextra/         # Hextra 主题
 .github/workflows/     # GitHub Actions 部署配置
`

---

##  配置文件说明

### hugo.yaml（主配置）

`yaml
title: BioAI 生命科学日报           # 网站标题 已修改
baseURL: "https://dongyu19920904.github.io/BioAI-Daily-Web/"  # 网站地址 已修改

params:
  description: 每日自动汇总 AI + 生命科学领域最新动态  # 已修改
  author:
    name: "BioAI Daily"             # 已修改
`

---

##  需要修改的文件

### 1. Logo 和图标
| 文件 | 路径 | 说明 |
|------|------|------|
| Logo (亮色) | static/images/logo.png | 导航栏 Logo |
| Logo (暗色) | static/images/logo-dark.png | 暗色模式 Logo |
| Favicon | static/favicon.ico | 浏览器标签图标 |
| Favicon SVG | static/favicon.svg | SVG 图标 |

### 2. 页面内容
| 文件 | 说明 |
|------|------|
| content/cn/_index.md | 中文首页内容 |
| content/cn/about.md | 关于页面 |
| content/en/_index.md | 英文首页内容 |
| content/en/about.md | 英文关于页面 |

### 3. 自定义域名（可选）
修改 static/CNAME 文件内容为你的域名，如：
`
bioai.yourdomain.com
`

### 4. 清理旧内容
以下目录包含原 AI 资讯的历史内容，建议清理：
- content/cn/daily/ - 旧的中文日报
- content/en/2025-*/ - 旧的英文日报
- daily/ - 根目录下的旧日报文件

---

##  本地开发

### 启动开发服务器
`ash
hugo server
`
访问 http://localhost:1313/

### 构建静态文件
`ash
hugo --gc --minify
`
输出到 public/ 目录

---

##  部署流程

### GitHub Pages 自动部署

1. 推送代码到 main 分支
2. GitHub Actions 自动触发构建
3. 构建完成后自动部署到 GitHub Pages

### 手动启用 GitHub Pages
1. 进入仓库 Settings  Pages
2. Source 选择 **GitHub Actions**
3. 保存

### 访问地址
https://dongyu19920904.github.io/BioAI-Daily-Web/

---

##  与后端的关系

后端 (CloudFlare-BioAI-Daily) 会：
1. 每日定时抓取生命科学相关新闻
2. 使用 AI 生成日报内容
3. 自动提交 Markdown 文件到本前端仓库的 content/cn/daily/ 目录
4. 触发 GitHub Actions 重新构建网站

**关键配置（后端 wrangler.toml）：**
`	oml
GITHUB_REPO_OWNER = "dongyu19920904"
GITHUB_REPO_NAME = "BioAI-Daily-Web"
GITHUB_BRANCH = "main"
`

---

##  待办事项

### 高优先级
- [ ] 更换 Logo 图片（生命科学相关）
- [ ] 更新首页内容介绍
- [ ] 修改关于页面
- [ ] 清理旧的 AI 资讯内容

### 中优先级
- [ ] 更换 Favicon
- [ ] 调整颜色主题（可选）
- [ ] 配置自定义域名（可选）

### 低优先级
- [ ] 优化 SEO 描述
- [ ] 添加统计代码

---

##  主题自定义

Hextra 主题支持以下自定义：

### 颜色配置
在 hugo.yaml 中可以调整主题颜色

### 自定义 CSS
创建 ssets/css/custom.css 添加自定义样式

### 自定义 JavaScript
编辑 layouts/partials/custom/head-end.html

---

##  参考文档

- Hugo 官方文档: https://gohugo.io/documentation/
- Hextra 主题文档: https://imfing.github.io/hextra/docs/
- GitHub Pages 文档: https://docs.github.com/en/pages
