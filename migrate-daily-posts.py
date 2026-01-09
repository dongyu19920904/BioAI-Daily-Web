#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
迁移 daily/ 目录的文件到 content/cn/blog/daily/ 并添加 Front Matter
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

def extract_title(content):
    """从内容中提取标题"""
    match = re.search(r'##\s*(.+?)\s*\n', content)
    if match:
        title = match.group(1).replace('BioAI 生命科学日报 ', 'BioAI 日报 ')
        return title
    return None

def extract_description(content):
    """从今日摘要中提取描述"""
    match = re.search(r'### \*\*今日摘要\*\*\s*\n\s*```\s*\n(.+?)\n', content, re.DOTALL)
    if match:
        desc = match.group(1).replace('\n', ' ').strip()
        return desc[:150] if len(desc) > 150 else desc
    return "每日精选 AI 领域最值得关注的动态"

def add_front_matter(content, date, title, description):
    """为内容添加 Front Matter"""
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
    source_dir = Path("daily")
    target_dir = Path("content/cn/blog/daily")

    # 确保目标目录存在
    target_dir.mkdir(parents=True, exist_ok=True)
    print(f"[OK] 目标目录: {target_dir}\n")

    # 获取所有 markdown 文件
    md_files = sorted(source_dir.glob("*.md"))
    print(f"[INFO] 找到 {len(md_files)} 个文件需要处理\n")

    processed = 0
    skipped = 0

    for file_path in md_files:
        target_path = target_dir / file_path.name

        # 如果目标文件已存在，跳过
        if target_path.exists():
            print(f"[SKIP] 跳过 {file_path.name} (已存在)")
            skipped += 1
            continue

        # 读取原文件内容
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # 从文件名提取日期 (格式: 2025-12-10.md)
        date = file_path.stem

        # 提取标题和描述
        title = extract_title(content) or f"AI 日报 {date}"
        description = extract_description(content)

        # 添加 Front Matter
        new_content = add_front_matter(content, date, title, description)

        # 写入目标文件
        with open(target_path, 'w', encoding='utf-8') as f:
            f.write(new_content)

        print(f"[OK] 处理完成: {file_path.name}")
        processed += 1

    print(f"\n[SUCCESS] 迁移完成！")
    print(f"   - 处理: {processed} 个文件")
    print(f"   - 跳过: {skipped} 个文件")
    print(f"   - 目标目录: {target_dir}\n")

if __name__ == "__main__":
    main()
