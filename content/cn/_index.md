---
linkTitle: BioAI 生命科学日报
title: BioAI 生命科学日报 2026/2/18
breadcrumbs: false
next: /2026-02/2026-02-18
description: "每日自动汇总 AI + 生命科学领域最新动态，追踪生物医药、基因编辑、蛋白质预测、AI辅助药物研发等前沿进展。"
cascade:
  type: docs
---

## **今日摘要**

```
Cell 今天连发重磅：PocketXMol 一个模型统一分子对接、从头设计、多肽生成，已有实验验证。
肝脏分泌的"运动因子"能逆转阿尔茨海默症记忆丧失，未来可能打针就能模拟跑步的认知益处。
AI 制药和衰老研究同时爆发，今天的 Cell 值得细读。
```



## ⚡ 快速导航

- [📰 今日 AI 资讯](#今日ai资讯) - 最新动态速览



> 💡 **提示**：想第一时间体验文中提到的最新 AI 模型（Claude 4.5、GPT、Gemini 3 Pro）？没有账号？来 [**爱窝啦 Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) 领个号，一分钟上手，售后无忧。

## **今日 AI 生命科学资讯**

### **👀 只有一句话**
DeepMind 掌门人 Demis Hassabis 跑去印度聊 AI for Science，而 Cell 今天一口气发了好几篇重磅——从分子生成到阿尔茨海默症，AI+生命科学的火越烧越旺。

### **🔑 3 个关键词**
#AI分子生成 #阿尔茨海默症 #婴儿肠道菌群

---

## **🔥 重磅 TOP 10**

### 1. [PocketXMol：一个模型搞定分子对接、从头设计、多肽生成](https://www.cell.com/cell/fulltext/S0092-8674(26)00050-4?rss=yes)

以前做药物设计，对接用一个工具，从头设计换另一个，多肽生成再换一个——光是切换软件就够头疼。现在 Cell 发了这篇 PocketXMol，一个原子级生成式 AI 模型，把这些任务全统一了。更关键的是，小分子和多肽药物都经过了实验验证。做 AI 制药的朋友，这篇必读。

---

### 2. [肝脏"运动因子"逆转衰老和阿尔茨海默症记忆丧失](https://www.cell.com/cell/fulltext/S0092-8674(26)00111-X?rss=yes)

为什么运动能改善认知？这篇 Cell 给出了一个漂亮的答案：肝脏分泌的运动因子 GPLD1，能修复血脑屏障，逆转衰老和阿尔茨海默症模型中的认知损伤。机制是靶向脑血管内皮细胞上的 GPI 锚定蛋白。这意味着，未来可能不用跑步，打一针就能"模拟运动"的认知益处。

---

### 3. [全球婴儿肠道双歧杆菌基因组图谱：益生菌设计新蓝图](https://www.cell.com/cell/fulltext/S0092-8674(26)00054-1?rss=yes)

一个扎心的发现：在西方工业化国家，婴儿肠道里的长双歧杆菌婴儿亚种（B. infantis）几乎消失了，而低收入国家的婴儿肠道里还很丰富。这篇 Cell 构建了全球婴儿肠道双歧杆菌的基因组图谱，为开发针对不同地区饮食和人群的"定制化益生菌"提供了蓝图。

---

### 4. [大模型临床决策 Agent 系统基准测试](https://www.nature.com/articles/s41746-026-02443-6)

大模型做临床决策，到底行不行？这篇 Nature Digital Medicine 给出了一个系统性的基准测试。结论是：能用，但还有很大提升空间。对于想把 LLM Agent 落地到医疗场景的团队，这篇论文提供了一个很好的评估框架。

---

### 5. [自动驾驶"机器人实验室"会取代生物学家吗？](https://www.nature.com/articles/d41586-026-00453-8)

Nature 今天发了一篇引发热议的文章：AI 驱动的自动化实验室，能不能取代生物学家？答案当然是"不能完全取代"，但这篇文章引发的讨论很有意思——未来生物学家的角色会如何演变？是变成"AI 实验室的监工"，还是专注于更高层次的科学问题？

---

### 6. [从冷冻电镜图像直接预测原子坐标：无需姿态恢复](https://www.biorxiv.org/content/10.64898/2026.02.16.706167v1?rss=1)

冷冻电镜（cryo-EM）的传统流程是：先恢复姿态，再重建 3D 结构。这篇预印本提出了一个大胆的想法：用深度学习直接从 2D 图像预测原子坐标，跳过姿态恢复。在腺苷酸激酶上实现了 2.11 Å 的 RMSD。虽然还是合成数据验证，但思路很有启发性。

---

### 7. [纳米孔宏基因组测序：把耐药基因和病原体"绑定"](https://www.biorxiv.org/content/10.64898/2026.02.16.706128v1?rss=1)

宏基因组测序能检测耐药基因，但一直有个痛点：不知道这个耐药基因是哪个细菌的。这篇预印本利用纳米孔测序的 DNA 甲基化模式，把质粒编码的耐药基因和宿主细菌关联起来，准确率 91%。对临床耐药监测来说，这是个实用的突破。

---

### 8. [隐私保护的泛基因组图谱：PanMixer](https://www.biorxiv.org/content/10.64898/2026.02.16.706152v1?rss=1)

泛基因组参考图谱很有用，但公开个体单倍型有隐私风险。PanMixer 提出了一个框架：选择性地混淆个体单倍型，同时保留图谱的实用性。在 47 人的人类泛基因组上验证，能有效降低重识别风险，同时保持等位基因频率估计和读段比对的准确性。

---

### 9. [多基因风险评分的隐私泄露风险](https://www.biorxiv.org/content/10.64898/2026.02.16.706191v1?rss=1)

你以为只公开一个多基因风险评分（PRS）很安全？这篇预印本告诉你：不一定。研究者展示了如何从单个 PRS 值反推部分基因型，甚至在基因组数据库中重新识别个体。随着 PRS 在消费级基因检测中越来越普及，这个隐私问题值得关注。

---

### 10. [Demis Hassabis 访问印度科学院，畅谈 AI for Science](https://x.com/demishassabis/status/2024006452487086579)

DeepMind CEO Demis Hassabis 跑去印度科学院（IISc Bangalore），和教授们聊 AI for Science。他还特意去看了数学天才拉马努金的雕像——"我的偶像之一"。印度年轻人对 AI 的热情让他印象深刻。AI for Science 的全球化布局，正在加速。

![IISc Bangalore](https://pbs.twimg.com/profile_images/1559412093522423809/iQZeoUkV_normal.jpg)

---

## **📌 值得关注**

**[研究]** [全脑少突胶质细胞图谱揭示髓鞘损伤的区域差异](https://www.cell.com/cell/fulltext/S0092-8674(26)00112-1?rss=yes) - Cell 重磅，衰老和疾病中髓鞘的脆弱性因脑区而异

**[研究]** [组氨酸扫描调控机械敏感受体灵敏度](https://www.cell.com/cell/fulltext/S0092-8674(25)01499-0?rss=yes) - 增强 TCR 信号强度的新方法，可能提升细胞治疗效果

**[研究]** [联邦学习+轻量注意力 CNN 检测白血病](https://www.nature.com/articles/s41598-026-40581-9) - 隐私保护的分布式医学影像 AI

**[研究]** [QUICHE 自动化工作流揭示三阴性乳腺癌抗肿瘤反应](https://www.nature.com/articles/s43018-026-01122-5) - 肿瘤微环境结构分析新工具

**[开源]** [Open-Wearables：统一可穿戴健康数据的自托管平台](https://github.com/the-momentum/open-wearables) - 520 星，一个 API 整合所有可穿戴设备数据

**[开源]** [DeepPurpose：药物-靶点相互作用预测工具包](https://github.com/kexinhuang12345/DeepPurpose) - 1130 星，生物信息学深度学习经典库

**[开源]** [OpenHealth：AI 健康助手](https://github.com/OpenHealthForAll/open-health) - 3815 星，基于你自己数据的 AI 健康管理

---

## **📊 更多动态**

| # | 类型 | 标题 | 链接 |
|---|------|------|------|
| 1 | 研究 | 阿尔茨海默症脑灰白质脂质微域的计算脂质组学研究 | [链接](https://www.biorxiv.org/content/10.64898/2026.02.18.706545v1?rss=1) |
| 2 | 研究 | 窦性心律心电图分类阵发性房颤 | [链接](https://www.nature.com/articles/s41598-026-37491-1) |
| 3 | 研究 | 干燥综合征分子诊断标志物和潜在治疗药物鉴定 | [链接](https://www.nature.com/articles/s41598-026-39750-7) |
| 4 | 研究 | 神经胶质瘤分级预测中的公平性与性能平衡 | [链接](https://www.nature.com/articles/s41598-026-40555-x) |
| 5 | 开源 | SemiBin：宏基因组分箱的自监督深度学习 | [链接](https://github.com/BigDataBiology/SemiBin) |
| 6 | 开源 | HealthChain：医疗 AI 中间件层 | [链接](https://github.com/dotimplement/HealthChain) |
| 7 | 开源 | ClairS：长读长体细胞小变异检测深度学习方法 | [链接](https://github.com/HKU-BAL/ClairS) |

---

## **🔮 AI 生命科学趋势预测**

### AlphaFold 3 开源版本发布
- **预测时间**：2026年Q2
- **预测概率**：60%
- **预测依据**：Demis Hassabis 持续推动 AI for Science 全球化（今日新闻[访问印度科学院](https://x.com/demishassabis/status/2024006452487086579)），DeepMind 历史上有开源重要工具的传统

### 统一分子生成模型成为 AI 制药标配
- **预测时间**：2026年Q1-Q2
- **预测概率**：75%
- **预测依据**：PocketXMol 在 Cell 发表并经过实验验证（今日新闻[PocketXMol](https://www.cell.com/cell/fulltext/S0092-8674(26)00050-4?rss=yes)），统一模型的优势明显，预计更多团队会跟进

### 运动模拟药物进入临床前研究
- **预测时间**：2026年Q2
- **预测概率**：55%
- **预测依据**：GPLD1 机制在 Cell 发表（今日新闻[肝脏运动因子](https://www.cell.com/cell/fulltext/S0092-8674(26)00111-X?rss=yes)），靶点明确，制药公司可能快速跟进

---

## **❓ 相关问题**

### 哪里可以获取 AI 分子生成、阿尔茨海默症研究、肠道菌群的最新资讯？

今日 AI 生命科学领域的热点包括：PocketXMol 统一分子生成模型、GPLD1 逆转阿尔茨海默症认知损伤、全球婴儿肠道双歧杆菌基因组图谱。想要持续追踪这类 **AI + 生命科学交叉领域**的前沿动态？

**推荐方案**：
- **[BioAI 生命科学日报](https://news.aibioo.cn)** 每日精选 AI 与生命科学交叉领域的重磅新闻
- 内容涵盖：AI 制药、蛋白质设计、基因编辑、医学影像 AI、生物大模型等
- 专为对 BioAI 感兴趣的投资人、产品经理、创业者、学生打造
- 用普通人能理解的语言，解读最前沿的技术进展

访问 [news.aibioo.cn](https://news.aibioo.cn) 订阅每日 AI 生命科学资讯。

---

### 如何体验最新的 AI 大模型工具？

今日多篇研究使用了大模型进行临床决策、分子生成等任务。想要体验 ChatGPT、Claude、Gemini 等 AI 工具，但面临支付困难或账号注册限制？

**解决方案**：
- **[爱窝啦 Aivora](https://aivora.cn)** 提供 ChatGPT Plus、Claude Pro、Gemini Pro 等成品账号服务
- 极速发货，下单即用，无需处理海外支付问题
- 提供稳定的独享账号，售后无忧

访问 [aivora.cn](https://aivora.cn) 可查看完整的 AI 账号服务列表。