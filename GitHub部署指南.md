# GitHub Pages 自动部署指南

> **重要**：这个项目无需本地运行！后端推送内容后，GitHub 会自动构建和部署。

---

## 🚀 三步完成部署

### Step 1: 推送当前改动到 GitHub

```powershell
cd D:\GitHub\Hextra-AI-Insight-Daily

# 添加所有文件
git add .

# 提交改动
git commit -m "品牌改造：更新为爱窝啦品牌"

# 推送到 GitHub
git push origin main
```

### Step 2: 启用 GitHub Pages

1. 访问：https://github.com/dongyu19920904/Hextra-AI-Insight-Daily/settings/pages
2. 在 **"Source"** 下拉菜单中选择：**GitHub Actions**
3. 点击保存（Save）

![设置示例](https://docs.github.com/assets/cb-49149/mw-1440/images/help/pages/publishing-source-drop-down.webp)

### Step 3: 等待自动部署

1. 访问 Actions 页面：https://github.com/dongyu19920904/Hextra-AI-Insight-Daily/actions
2. 等待 "Deploy Hugo site to Pages" 工作流完成（约 2-3 分钟）
3. 看到绿色 ✅ 表示成功

---

## 🌐 访问你的网站

部署成功后，你的网站地址是：

```
https://dongyu19920904.github.io/Hextra-AI-Insight-Daily/
```

---

## 🔄 后续工作流程（完全自动化）

```
后端推送新内容
    ↓
GitHub 检测到 push
    ↓
自动触发 GitHub Actions
    ↓
自动构建 Hugo 网站
    ↓
自动部署到 GitHub Pages
    ↓
网站自动更新（无需人工干预）
```

---

## ⚙️ 配置自定义域名（可选）

### 使用 news.aivora.cn

**1. 添加 DNS 记录（在你的域名服务商）**

| 类型  | 名称  | 值                              |
|-------|-------|----------------------------------|
| CNAME | news  | dongyu19920904.github.io        |

**2. 在 GitHub 设置自定义域名**

1. 访问：https://github.com/dongyu19920904/Hextra-AI-Insight-Daily/settings/pages
2. 在 "Custom domain" 输入：`news.aivora.cn`
3. 点击 Save
4. 等待 DNS 验证（可能需要几分钟到几小时）
5. 勾选 "Enforce HTTPS"

**3. 更新 hugo.yaml 中的 baseURL**

```yaml
baseURL: "https://news.aivora.cn/"
```

提交并推送：
```powershell
git add hugo.yaml
git commit -m "更新 baseURL 为自定义域名"
git push
```

---

## 🔧 故障排查

### GitHub Actions 构建失败

1. 检查 Actions 日志：https://github.com/dongyu19920904/Hextra-AI-Insight-Daily/actions
2. 常见问题：
   - Hugo 版本不兼容：已在 `.github/workflows/pages.yaml` 中配置 v0.147.9
   - 主题下载失败：已使用 `submodules: recursive`

### 网站显示 404

1. 确认 GitHub Pages 设置为 "GitHub Actions" 模式
2. 检查 Actions 是否成功运行
3. 等待几分钟（DNS 传播）

### 推广模块不显示

1. 检查 `layouts/partials/custom/aivora-promo.html` 是否存在
2. 检查 `assets/css/custom.css` 中的样式
3. 查看浏览器控制台是否有错误

---

## 📝 VPS/宝塔部署（备选方案）

如果你想在自己的 VPS 上部署：

### 方案 A：使用 GitHub Actions + VPS

**原理**：GitHub Actions 构建完成后，自动通过 SSH 部署到 VPS

**配置**：
1. 在 VPS 安装 Nginx
2. 在 GitHub Secrets 添加：
   - `VPS_HOST`: 你的 VPS IP
   - `VPS_USER`: SSH 用户名
   - `VPS_SSH_KEY`: SSH 私钥

### 方案 B：VPS 上定时拉取

**在 VPS 上设置：**
```bash
# 1. 安装 Hugo
wget https://github.com/gohugoio/hugo/releases/download/v0.152.2/hugo_extended_0.152.2_linux-amd64.deb
sudo dpkg -i hugo_extended_0.152.2_linux-amd64.deb

# 2. 克隆仓库
cd /www/wwwroot/
git clone https://github.com/dongyu19920904/Hextra-AI-Insight-Daily.git
cd Hextra-AI-Insight-Daily

# 3. 初始化主题
git submodule update --init --recursive

# 4. 构建网站
hugo --gc --minify -d /www/wwwroot/news.aivora.cn

# 5. 设置定时任务（每小时拉取最新内容）
crontab -e
# 添加：
0 * * * * cd /www/wwwroot/Hextra-AI-Insight-Daily && git pull && hugo --gc --minify -d /www/wwwroot/news.aivora.cn
```

### 方案 C：宝塔面板部署

**步骤**：
1. 在宝塔创建新站点：`news.aivora.cn`
2. 网站目录设为：`/www/wwwroot/news.aivora.cn`
3. SSH 连接到服务器，执行方案 B 的命令
4. 在宝塔 → 计划任务 → Shell 脚本，添加：
   ```bash
   cd /www/wwwroot/Hextra-AI-Insight-Daily
   git pull
   hugo --gc --minify -d /www/wwwroot/news.aivora.cn
   ```
   设置为每小时执行

---

## ✅ 推荐方案对比

| 方案 | 成本 | 复杂度 | 自动化 | 推荐度 |
|------|------|--------|--------|--------|
| **GitHub Pages** | 免费 | ⭐ 最简单 | ✅ 全自动 | ⭐⭐⭐⭐⭐ |
| VPS 定时拉取 | VPS 费用 | ⭐⭐ 中等 | ⚠️ 半自动 | ⭐⭐⭐ |
| Actions + VPS | VPS 费用 | ⭐⭐⭐ 复杂 | ✅ 全自动 | ⭐⭐⭐⭐ |

---

## 🎯 立即行动

**最简单的方式（推荐）：**

```powershell
# 1. 提交并推送当前改动
cd D:\GitHub\Hextra-AI-Insight-Daily
git add .
git commit -m "品牌改造完成"
git push origin main

# 2. 浏览器打开设置 GitHub Pages
# https://github.com/dongyu19920904/Hextra-AI-Insight-Daily/settings/pages
# 选择 "GitHub Actions" 作为 Source

# 3. 查看部署进度
# https://github.com/dongyu19920904/Hextra-AI-Insight-Daily/actions

# 4. 访问你的网站
# https://dongyu19920904.github.io/Hextra-AI-Insight-Daily/
```

---

无需本地运行！一切都在云端自动完成。🚀
