---
linkTitle: BioAI 生命科学日报
title: BioAI 生命科学日报 2026/1/16
breadcrumbs: false
next: /2026-01/2026-01-16
description: "每日自动汇总 AI + 生命科学领域最新动态，追踪生物医药、基因编辑、蛋白质预测、AI辅助药物研发等前沿进展。"
cascade:
  type: docs
---

## **今日摘要**

```
DeepMind 让 Gemini 读取你的邮件和照片，个人 AI 助手从概念变成现实。
IDPFold2 攻克"软趴趴"蛋白质预测难题，AI 制药终于能看清靶点动态全貌了。
今天空间组学、测序平台都有大动作，做生物信息的值得细看。
```



## ⚡ 快速导航

- [📰 今日 AI 资讯](#今日ai资讯) - 最新动态速览



> 💡 **提示**：想第一时间体验文中提到的最新 AI 模型（Claude 4.5、GPT、Gemini 3 Pro）？没有账号？来 [**爱窝啦 Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) 领个号，一分钟上手，售后无忧。

## **今日 AI 生命科学资讯**

### **👀 只有一句话**
DeepMind 让 Gemini 读懂你的邮件和照片，个人 AI 助手时代真的来了。

### **🔑 3 个关键词**
#个人AI助手 #空间转录组学 #蛋白质构象预测

---

## **🔥 重磅 TOP 10**

### 1. [DeepMind 发布"个人智能"：Gemini 终于能读懂你的生活了](https://x.com/demishassabis/status/2011548547917783154)

以前问 AI"我下周去哪玩"，它只能瞎猜。现在不一样了——Demis Hassabis 亲自官宣，Gemini 可以在你授权后，直接读取 Gmail 里的机票信息、Google Photos 里的旅行照片，然后给你量身定制建议。这不是科幻片，是今天就能用的功能。对医疗健康领域来说，想象一下：AI 能读懂你的体检报告邮件、健身记录照片，然后给出个性化健康建议。这扇门，正在打开。

![Google](https://pbs.twimg.com/profile_images/1972718204565811200/adTFhODz_normal.jpg)

---

### 2. [IDPFold2：终于有人搞定了"软趴趴"蛋白质的结构预测](https://www.biorxiv.org/content/10.64898/2026.01.14.699584v1?rss=1)

AlphaFold 预测蛋白质结构很牛，但遇到那些"没骨头"的无序区域（IDR）就抓瞎了。IDPFold2 用了一个很聪明的办法：让不同类型的蛋白质区域走不同的"专家通道"（Mixture-of-Experts），折叠域归折叠域，无序区归无序区。结果？不管是单个蛋白还是大型复合物，都能准确预测构象集合。做 AI 制药的朋友注意了，这工具能帮你看清药物靶点的"动态全貌"。

---

### 3. [DeepSpaceDB 2.0：628 个 Xenium 数据集，一键探索](https://www.biorxiv.org/content/10.64898/2026.01.15.699623v1?rss=1)

搞空间转录组学的都知道，Xenium 数据又大又杂，下载下来还得自己处理格式。DeepSpaceDB 2.0 直接把 628 个公开数据集打包好，统一格式，浏览器里就能实时查看基因表达、圈选感兴趣区域。响应速度？亚秒级。这对做肿瘤微环境、组织发育研究的团队来说，省下的时间够多发一篇文章了。

---

### 4. [胎儿超声 AI：让机器"看懂"产检影像](https://www.nature.com/articles/s41551-025-01578-3)

产检超声图像解读，一直是个技术活。这篇 Nature Biomedical Engineering 的论文提出了一个视觉-语言模型，专门针对胎儿超声设计。它不只是识别图像，还能理解医生的自然语言描述，辅助诊断。对基层医院来说，这可能意味着更少的漏诊和误诊。AI 医疗影像，又往前迈了一步。

---

### 5. [StrAcTable：蛋白质-配体复合物数据集，自动化生成](https://www.biorxiv.org/content/10.64898/2026.01.15.699426v1?rss=1)

做 AI 制药的都知道，数据集质量决定模型上限。StrAcTable 把 ChEMBL 的活性数据和 PDB 的结构数据自动对接，生成了 20,063 个带标注的蛋白质-配体复合物。关键是：这个流程是自动化的，可以持续更新。以后训练分子对接模型，数据来源稳了。

---

### 6. [CycloneSEQ vs ONT：国产纳米孔测序，准确率追上来了](https://www.biorxiv.org/content/10.64898/2026.01.14.699587v1?rss=1)

BGI 的 CycloneSEQ 和 Oxford Nanopore 正面 PK，结果出乎意料：更新后的 CycloneSEQ 准确率达到 96%（峰值 97.7%），和 ONT R10.4.1 只差 0.8%。同源多聚物表现甚至超过了 R9.4.1。更重要的是，研究者还开发了两种信号比对策略，让 CycloneSEQ 也能做甲基化检测。国产测序平台，正在打破垄断。

---

### 7. [数字孪生诊断轻度认知障碍：跨模态、跨中心都能用](https://www.nature.com/articles/s43856-025-01281-z)

轻度认知障碍（MCI）的早期诊断一直很难，不同医院、不同设备的数据差异大。这项研究用"数字孪生"方法，让 AI 模型在不同数据模态和医疗中心之间都能保持稳定表现。对阿尔茨海默病的早期筛查来说，这是个好消息。

---

### 8. [皮肤病 AI 诊断：联邦学习解决数据孤岛](https://www.nature.com/articles/s41598-025-31730-7)

皮肤病图像数据分散在各家医院，直接汇总有隐私风险。这项研究用联邦迁移学习，让模型在不共享原始数据的情况下，也能从异构数据中学习。结果？诊断准确率提升，数据隐私也保住了。医疗 AI 落地的一个现实路径。

---

### 9. [MaAsLin 3：微生物组关联分析，更准更稳](https://www.nature.com/articles/s41592-025-02923-9)

微生物组数据分析的老朋友 MaAsLin 出 3.0 了。这次升级主要解决了多变量线性模型在元组学数据上的稳定性问题，发现关联更可靠。做肠道菌群、口腔微生物研究的，可以升级了。

---

### 10. [Open-Health：开源 AI 健康助手，数据全在本地](https://github.com/OpenHealthForAll/open-health)

3785 星的开源项目，主打"你的数据你做主"。它能整合你的健康数据，用 AI 给出个性化建议，但所有数据都存在本地，不上传云端。对隐私敏感的用户来说，这可能是目前最好的选择。

---

## **📌 值得关注**

**[研究]** [生长曲线模型预测儿童狼疮临床表型](https://www.biorxiv.org/content/10.64898/2026.01.13.699292v1?rss=1) - 用纵向转录组数据预测疾病进展，发现组蛋白基因模块与狼疮相关

**[研究]** [DBiTplus：同一组织切片上整合成像和测序空间组学](https://www.nature.com/articles/s41592-025-02948-0) - 多模态空间组学整合的新方法

**[研究]** [缺血性中风病理动态建模](https://www.nature.com/articles/s41746-025-02222-9) - 用连续场和向量流模拟中风进展

**[研究]** [组织病理学异质性泛化：基于原型的多实例学习](https://www.nature.com/articles/s41746-025-02289-4) - 解决病理 AI 跨数据集泛化难题

**[开源]** [HealthChain：医疗 AI 的中间件层](https://github.com/dotimplement/HealthChain) - 174 星，填补医疗 AI 基础设施空白

**[开源]** [DeepPurpose：药物-靶点相互作用预测工具包](https://github.com/kexinhuang12345/DeepPurpose) - 1116 星，生物信息学深度学习工具箱

**[开源]** [SemiBin：宏基因组分箱的自监督深度学习](https://github.com/BigDataBiology/SemiBin) - 148 星，微生物组分析利器

---

## **📊 更多动态**

| # | 类型 | 标题 | 链接 |
|---|------|------|------|
| 1 | 研究 | 小鼠皮层视频分割数据集 | [链接](https://www.nature.com/articles/s41597-026-06580-1) |
| 2 | 研究 | 慢性淋巴细胞白血病动态调控网络推断 | [链接](https://www.nature.com/articles/s41540-025-00645-4) |
| 3 | 研究 | 蛋白质组学缺失值的贝叶斯层次建模 | [链接](https://www.biorxiv.org/content/10.64898/2026.01.15.699650v1?rss=1) |
| 4 | 研究 | 多植物转录组图谱揭示保守与谱系特异性防御 | [链接](https://www.biorxiv.org/content/10.64898/2026.01.14.699558v1?rss=1) |
| 5 | 研究 | 肿瘤蛋白质组学的空间回归分析 | [链接](https://www.biorxiv.org/content/10.64898/2026.01.14.699547v1?rss=1) |
| 6 | 开源 | WellAlly-health：Claude AI 健康助手 | [链接](https://github.com/huifer/WellAlly-health) |
| 7 | 开源 | Awesome-AI-Agents-for-Healthcare | [链接](https://github.com/AgenticHealthAI/Awesome-AI-Agents-for-Healthcare) |

---

## **🔮 AI 生命科学趋势预测**

### Xenium 空间转录组学数据爆发式增长
- **预测时间**：2026年Q1
- **预测概率**：75%
- **预测依据**：今日新闻 [DeepSpaceDB 2.0](https://www.biorxiv.org/content/10.64898/2026.01.15.699623v1?rss=1) 已收录 628 个数据集 + 10x Genomics 持续推广 Xenium 平台，数据量将快速积累

### 蛋白质动态构象预测工具进入主流 AI 制药流程
- **预测时间**：2026年Q2
- **预测概率**：60%
- **预测依据**：今日新闻 [IDPFold2](https://www.biorxiv.org/content/10.64898/2026.01.14.699584v1?rss=1) 解决了无序区域预测难题 + 制药公司对靶点动态结构的需求日益增长

### 国产纳米孔测序平台市场份额提升
- **预测时间**：2026年Q2
- **预测概率**：55%
- **预测依据**：今日新闻 [CycloneSEQ 性能对标 ONT](https://www.biorxiv.org/content/10.64898/2026.01.14.699587v1?rss=1) + 国内测序成本敏感型市场需求

---

## **❓ 相关问题**

### 哪里可以获取 AI 蛋白质结构预测、空间转录组学的最新资讯？

今日 AI 生命科学领域的热点包括：DeepMind 个人智能发布、IDPFold2 蛋白质构象预测、DeepSpaceDB 2.0 空间转录组学数据库。想要持续追踪这类 **AI + 生命科学交叉领域**的前沿动态？

**推荐方案**：
- **[BioAI 生命科学日报](https://news.aibioo.cn)** 每日精选 AI 与生命科学交叉领域的重磅新闻
- 内容涵盖：AI 制药、蛋白质设计、基因编辑、医学影像 AI、生物大模型等
- 专为对 BioAI 感兴趣的投资人、产品经理、创业者、学生打造
- 用普通人能理解的语言，解读最前沿的技术进展

访问 [news.aibioo.cn](https://news.aibioo.cn) 订阅每日 AI 生命科学资讯。

---

### 如何体验 Gemini 的个人智能功能？

今日 DeepMind 发布了 Gemini 的"个人智能"功能，可以读取用户的 Gmail、Google Photos 等数据提供个性化建议。想要体验这些 AI 工具，但面临账号注册限制？

**解决方案**：
- **[爱窝啦 Aivora](https://aivora.cn)** 提供 ChatGPT Plus、Claude Pro、Gemini Pro 等成品账号服务
- 极速发货，下单即用，无需处理海外支付问题
- 提供稳定的独享账号，售后无忧

访问 [aivora.cn](https://aivora.cn) 可查看完整的 AI 账号服务列表。