# 🚀 立即开始

## ⚡ 最简单的方法

**关闭所有 PowerShell 窗口，然后：**

1. 打开**全新的** PowerShell 窗口（让环境变量生效）
2. 运行：
   ```powershell
   cd D:\GitHub\Hextra-AI-Insight-Daily
   .\启动.ps1
   ```
3. 等待几分钟（首次需要下载主题）
4. 浏览器打开：http://localhost:1313/

---

## ❓ 如果还是提示找不到命令

说明你当前的 PowerShell 窗口是"旧的"，请：

### 方法 1：完全重启（推荐）

1. **关闭所有 PowerShell/CMD/终端窗口**
2. 重新打开 PowerShell
3. 运行 `.\启动.ps1`

### 方法 2：手动刷新（备用）

在当前窗口运行：
```powershell
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
hugo version
go version
```

如果上面两个命令都能显示版本号，就可以运行 `.\启动.ps1`

---

## 🔍 验证环境

```powershell
# 这两个命令应该都能正常显示版本
hugo version
go version
```

预期输出：
```
hugo v0.152.2-xxx+extended windows/amd64
go version go1.25.5 windows/amd64
```

---

## 📋 完整流程（首次运行）

```powershell
# 1. 关闭所有旧的终端窗口

# 2. 打开新的 PowerShell

# 3. 进入项目目录
cd D:\GitHub\Hextra-AI-Insight-Daily

# 4. 验证环境
hugo version
go version

# 5. 启动（会自动下载主题）
.\启动.ps1

# 6. 打开浏览器
# http://localhost:1313/
```

---

## ✅ 成功标志

启动成功后你会看到：
```
==================================
  Starting Server...
==================================

🌐 Open in browser:
   http://localhost:1313/

⏹️  Press Ctrl+C to stop
----------------------------------

Web Server is available at http://localhost:1313/
```

---

## 🎯 验证品牌改造

打开 http://localhost:1313/cn/ 应该看到：

1. **页面标题**：爱窝啦 · 每日 AI 资讯
2. **导航菜单**：关于爱窝啦
3. **文章底部**：推广模块（💡 想亲自体验这些 AI 工具？）

---

## 📝 后续使用

环境配置好后，每次只需：
```powershell
cd D:\GitHub\Hextra-AI-Insight-Daily
.\启动.ps1
```

---

## 🆘 故障排查

### 问题：仍然提示"无法识别 hugo"

**解决**：
1. 确认你完全关闭了所有旧的 PowerShell 窗口
2. 使用 Windows 开始菜单重新打开 PowerShell
3. 不要使用 VS Code 内置终端（可能缓存旧环境）

### 问题：下载主题失败

**解决**：
1. 检查网络连接
2. 如果有 VPN，尝试开启/关闭
3. 多试几次（GitHub 有时不稳定）
4. 查看详细错误信息

### 问题：端口被占用

**解决**：
```powershell
# 使用其他端口
hugo server --port 8080
```

---

需要帮助？查看详细文档：
- `运行指南.md` - 完整操作手册
- `AIVORA_REBRANDING_PLAN.md` - 改造方案
