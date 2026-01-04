# 迁移 daily/ 目录的文件到 content/cn/blog/daily/ 并添加 Front Matter
# 用法: .\migrate-daily-posts.ps1

$sourceDir = "daily"
$targetDir = "content\cn\blog\daily"

# 确保目标目录存在
if (-not (Test-Path $targetDir)) {
    New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
    Write-Host "创建目标目录: $targetDir" -ForegroundColor Green
}

# 获取所有 markdown 文件
$files = Get-ChildItem -Path $sourceDir -Filter "*.md" | Sort-Object Name

Write-Host "`n找到 $($files.Count) 个文件需要处理`n" -ForegroundColor Cyan

foreach ($file in $files) {
    $fileName = $file.Name
    $targetPath = Join-Path $targetDir $fileName

    # 如果目标文件已存在，跳过
    if (Test-Path $targetPath) {
        Write-Host "跳过 $fileName (已存在)" -ForegroundColor Yellow
        continue
    }

    # 读取原文件内容
    $content = Get-Content $file.FullName -Raw -Encoding UTF8

    # 从文件名提取日期 (格式: 2025-12-10.md)
    $date = $fileName -replace '\.md$', ''

    # 从内容中提取标题 (第一行通常是 ## 爱窝啦 AI 日报 2025/12/10)
    if ($content -match '##\s*(.+?)\s*\n') {
        $title = $matches[1] -replace '爱窝啦 AI 日报 ', 'AI 日报 '
    } else {
        $title = "AI 日报 $date"
    }

    # 从今日摘要中提取第一段作为描述
    if ($content -match '### \*\*今日摘要\*\*\s*\n\s*```\s*\n(.+?)\n') {
        $desc = ($matches[1] -replace '\n', ' ').Trim()
        if ($desc.Length -gt 150) {
            $description = $desc.Substring(0, 150)
        } else {
            $description = $desc
        }
    } else {
        $description = "每日精选 AI 领域最值得关注的动态"
    }

    # 构建 Front Matter - 使用数组拼接避免 here-string 问题
    $frontMatterLines = @(
        "---",
        "title: `"$title`"",
        "date: $date",
        "type: blog",
        "tags: [`"AI日报`", `"每日博客`", `"AI资讯`"]",
        "authors:",
        "  - name: 爱窝啦 AI 观察者",
        "    link: https://news.aivora.cn",
        "description: `"$description`"",
        "---",
        ""
    )

    $frontMatter = $frontMatterLines -join "`n"

    # 合并 Front Matter 和原内容
    $newContent = $frontMatter + "`n" + $content

    # 写入目标文件
    [System.IO.File]::WriteAllText($targetPath, $newContent, [System.Text.Encoding]::UTF8)

    Write-Host "处理完成: $fileName" -ForegroundColor Green
}

Write-Host "`n迁移完成！共处理 $($files.Count) 个文件" -ForegroundColor Green
Write-Host "目标目录: $targetDir`n" -ForegroundColor Cyan
