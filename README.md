#  BioAI 生命科学日报 - 前端

> AI + 生命科学领域每日资讯聚合网站

基于 [Hugo](https://gohugo.io/) + [Hextra](https://imfing.github.io/hextra/) 主题构建的静态网站，用于展示 BioAI 生命科学日报内容。

##  特性

- ** 响应式设计**：支持 PC 和移动端访问
- ** 全文搜索**：基于 FlexSearch 的快速搜索
- ** 多语言支持**：中文/英文
- ** RSS 订阅**：支持 RSS 订阅
- ** 高性能**：静态网站，加载速度快

##  快速开始

### 本地开发

\\\ash
# 克隆项目
git clone https://github.com/dongyu19920904/BioAI-Daily-Web.git
cd BioAI-Daily-Web

# 启动开发服务器
hugo server
\\\

### 部署到 GitHub Pages

项目已配置 GitHub Actions，推送到 main 分支后会自动构建并部署到 GitHub Pages。

##  项目结构

\\\
 content/
    cn/          # 中文内容
       daily/   # 每日日报
    en/          # 英文内容
 hugo.yaml        # Hugo 配置
 themes/hextra/   # Hextra 主题
 .github/workflows/  # GitHub Actions
\\\

##  相关项目

- **后端项目**：[CloudFlare-BioAI-Daily](https://github.com/dongyu19920904/CloudFlare-BioAI-Daily)

##  License

MIT License
