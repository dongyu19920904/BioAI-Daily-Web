#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
从 content/cn/2025-12/ 目录迁移正确的内容到 content/cn/blog/daily/
"""

import os
import re
import sys
from pathlib import Path

# 设置 Windows 控制台编码
if sys.platform == 'win32':
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8')

def extract_title_from_content(content):
    """从内容中提取标题"""
    match = re.search(r'##\s*(.+?)\s*\n', content)
    if match:
        title = match.group(1).replace('BioAI 生命科学日报 ', 'BioAI 日报 ')
        return title
    return None

def extract_description_from_content(content):
    """从今日摘要中提取描述"""
    match = re.search(r'### \*\*今日摘要\*\*\s*\n\s*```\s*\n(.+?)\n```', content, re.DOTALL)
    if match:
        desc = match.group(1).replace('\n', ' ').strip()
        return desc[:150] if len(desc) > 150 else desc
    return "每日精选 AI 领域最值得关注的动态"

def remove_front_matter(content):
    """移除 front matter"""
    # 匹配 --- 开头和结尾的 front matter
    pattern = r'^---\s*\n.*?\n---\s*\n'
    cleaned = re.sub(pattern, '', content, flags=re.DOTALL)
    return cleaned.strip()

def add_blog_front_matter(content, date, title, description):
    """为内容添加博客 Front Matter"""
    front_matter = f"""---
title: "{title}"
date: {date}
type: blog
tags: ["BioAI日报", "生命科学", "AI资讯"]
authors:
  - name: BioAI 生命科学日报
    link: https://news.aibioo.cn
description: "{description}"
---

"""
    return front_matter + content

def main():
    source_dir = Path("content/cn/2025-12")
    target_dir = Path("content/cn/blog/daily")

    # 确保目标目录存在
    target_dir.mkdir(parents=True, exist_ok=True)
    print(f"[OK] 目标目录: {target_dir}\n")

    # 获取所有 markdown 文件（排除 _index.md）
    md_files = sorted([f for f in source_dir.glob("*.md") if f.name != "_index.md"])
    print(f"[INFO] 找到 {len(md_files)} 个文件需要处理\n")

    processed = 0
    updated = 0
    skipped = 0

    for file_path in md_files:
        target_path = target_dir / file_path.name

        # 读取原文件内容
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # 从文件名提取日期 (格式: 2025-12-10.md)
        date = file_path.stem

        # 移除原有的 front matter
        clean_content = remove_front_matter(content)

        # 提取标题和描述
        title = extract_title_from_content(clean_content) or f"AI 日报 {date}"
        description = extract_description_from_content(clean_content)

        # 添加博客 Front Matter
        new_content = add_blog_front_matter(clean_content, date, title, description)

        # 检查目标文件是否存在
        if target_path.exists():
            # 读取现有内容
            with open(target_path, 'r', encoding='utf-8') as f:
                existing_content = f.read()

            # 如果内容不同，则更新
            if existing_content != new_content:
                with open(target_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"[UPDATE] 更新文件: {file_path.name}")
                updated += 1
            else:
                print(f"[SKIP] 内容相同，跳过: {file_path.name}")
                skipped += 1
        else:
            # 写入新文件
            with open(target_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"[NEW] 创建新文件: {file_path.name}")
            processed += 1

    print(f"\n[SUCCESS] 迁移完成！")
    print(f"   - 新建: {processed} 个文件")
    print(f"   - 更新: {updated} 个文件")
    print(f"   - 跳过: {skipped} 个文件")
    print(f"   - 目标目录: {target_dir}\n")

if __name__ == "__main__":
    main()
