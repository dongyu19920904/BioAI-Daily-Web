---
linkTitle: AI Daily
title: AI Daily-AI资讯日报
breadcrumbs: false
next: /2026-01/2026-01-10
description: "每日自动汇总 AI + 生命科学领域最新动态，追踪生物医药、基因编辑、蛋白质预测、AI辅助药物研发等前沿进展。"
cascade:
  type: docs
---

## **今日摘要**

```
深度学习工具包扎堆更新，从宏基因组分箱到蛋白质预测，开源社区正在重建生信基础设施。
DeepPurpose 一站式搞定药物-靶点预测，DANCE 给单细胞方法论文排座次，ProteinFlow 解决数据预处理老大难。
做生信的别光盯着论文了，这波工具红利值得花时间研究。
```



## ⚡ 快速导航

- [📰 今日 AI 资讯](#今日ai资讯) - 最新动态速览



> 💡 **提示**：想第一时间体验文中提到的最新 AI 模型（Claude 4.5、GPT、Gemini 3 Pro）？没有账号？来 [**爱窝啦 Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) 领个号，一分钟上手，售后无忧。

## **今日 AI 生命科学资讯**

### **👀 只有一句话**
今天的主角是深度学习工具包们——从宏基因组分箱到蛋白质相互作用预测，开源社区正在悄悄重塑生物信息学的基础设施。

### **🔑 3 个关键词**
#深度学习生信 #宏基因组 #蛋白质预测

---

## **🔥 重磅 TOP 10**

### 1. [DeepPurpose：一站式药物-靶点预测工具包](https://github.com/kexinhuang12345/DeepPurpose)

做药物发现的朋友应该都有过这种痛苦：想预测个药物-靶点相互作用（DTI），得自己从头搭模型、调参数、处理数据格式。DeepPurpose 直接把这些活儿打包了。1115 颗星的开源项目，覆盖 DTI、药物性质、蛋白质功能预测等多个任务。API 设计得很友好，几行代码就能跑起来。对于想快速验证想法的研究者来说，这就是省下来的三个通宵。

---

### 2. [DANCE：单细胞分析的深度学习基准平台](https://github.com/OmicsML/dance)

单细胞领域的方法论文越来越多，但到底哪个模型好用？DANCE 给了个答案。这是一个专门为单细胞分析设计的深度学习库，不仅提供现成的模型，还搭建了标准化的 benchmark 平台。384 颗星，来自 OmicsML 团队。想在单细胞领域做 AI 研究的，这个库值得收藏。

---

### 3. [ProteinFlow：蛋白质结构数据的深度学习预处理管线](https://github.com/adaptyvbio/ProteinFlow)

训练蛋白质模型最头疼的是什么？数据预处理。ProteinFlow 专门解决这个问题——从 PDB 下载、清洗、特征提取到格式转换，一条龙服务。Adaptyv Bio 出品，269 颗星。如果你正在做蛋白质设计或结构预测，这个工具能帮你省掉大量重复劳动。

---

### 4. [SemiBin：自监督学习做宏基因组分箱](https://github.com/BigDataBiology/SemiBin)

宏基因组分箱（binning）一直是个技术活。SemiBin 用自监督深度学习来搞定这事，不需要大量标注数据就能训练。Big Data Biology Lab 出品，148 颗星。对于做微生物组研究的团队来说，这可能是目前最省心的分箱工具之一。

---

### 5. [ClairS：长读长测序的体细胞变异检测](https://github.com/HKU-BAL/ClairS)

长读长测序（PacBio、Nanopore）的体细胞小变异检测一直是个难题。香港大学 BAL 实验室的 ClairS 用深度学习来解决这个问题，102 颗星。配套的 ClairS-TO 还支持 tumor-only 模式。做肿瘤基因组学的朋友可以关注一下。

---

### 6. [DeepInteract：几何深度学习预测蛋白质界面接触](https://github.com/BioinfoMachineLearning/DeepInteract)

蛋白质-蛋白质相互作用的界面在哪里？DeepInteract 用几何 Transformer 来预测。ICLR 2022 的工作，64 颗星。对于做蛋白质对接、药物设计的研究者来说，这是个值得尝试的工具。

---

### 7. [Janggu：基因组学的深度学习基础设施](https://github.com/BIMSBbioinfo/janggu)

想用深度学习分析基因组数据，但被数据格式搞得头大？Janggu 提供了一套完整的基础设施，支持各种基因组数据格式的读取和处理。BIMSB 出品，257 颗星。对于想入门基因组深度学习的人来说，这是个不错的起点。

---

### 8. [TransformerCPI：用 Transformer 预测化合物-蛋白质相互作用](https://github.com/lifanchen-simm/transformerCPI)

Transformer 在 NLP 领域大杀四方，那能不能用来预测化合物-蛋白质相互作用？TransformerCPI 给出了肯定答案。Bioinformatics 2020 发表，151 颗星。自注意力机制加上标签反转实验，效果相当不错。

---

### 9. [DeepMicrobes：宏基因组物种分类](https://github.com/MicrobeLab/DeepMicrobes)

给宏基因组数据做物种分类，传统方法要么慢要么不准。DeepMicrobes 用深度学习来搞定这事，102 颗星。对于做微生物组研究的团队来说，这是个值得尝试的分类工具。

---

### 10. [Ten Quick Tips for Deep Learning in Biology](https://github.com/Benjamin-Lee/deep-rules)

不是工具，但可能比工具更重要。这是一份"生物学深度学习十条军规"，227 颗星。从数据准备到模型评估，把常见的坑都列出来了。刚入门的朋友建议先读这个，能少走很多弯路。

---

## **📌 值得关注**

**[开源]** [Scaden：深度学习做细胞组成分析](https://github.com/KevinMenden/scaden) - 从 bulk RNA-seq 反推细胞比例，86 星

**[开源]** [af2complex：用 AlphaFold 预测蛋白质直接相互作用](https://github.com/FreshAirTonight/af2complex) - AlphaFold 的延伸应用，168 星

**[开源]** [TAPE：组织自适应自编码器做细胞类型特异性分析](https://github.com/poseidonchan/TAPE) - 解决组织异质性问题，58 星

**[开源]** [DeepChrome：从组蛋白修饰预测基因表达](https://github.com/QData/DeepChrome) - Bioinformatics 2016 经典工作，63 星

**[开源]** [Saber：生物医学信息抽取工具](https://github.com/BaderLab/saber) - 从文献中提取实体关系，102 星

**[研究]** [Deep Learning for Clustering in Bioinformatics](https://github.com/rezacsedu/Deep-Learning-for-Clustering-in-Bioinformatics) - 生信聚类方法汇总，141 星

---

## **📊 更多动态**

| # | 类型 | 标题 | 链接 |
|---|------|------|------|
| 1 | 开源 | GENetLib：基因-环境交互分析深度学习库 | [链接](https://github.com/XMU-Kuangnan-Fang-Team/GENetLib) |
| 2 | 开源 | RIDDLE：用深度学习从疾病史推断种族 | [链接](https://github.com/jisungk/RIDDLE) |
| 3 | 资源 | Deep Learning Examples in Bioinformatics | [链接](https://github.com/liyu95/Deep_learning_examples) |
| 4 | 资源 | DeepLearning-in-Bioinformatics 学习资源汇总 | [链接](https://github.com/Bjoux2/DeepLearning-in-Bioinformatics) |
| 5 | 开源 | OpenHealth：AI 健康助手 | [链接](https://github.com/OpenHealthForAll/open-health) |
| 6 | 开源 | HealthChain：医疗 AI 中间件 | [链接](https://github.com/dotimplement/HealthChain) |

---

## **🔮 AI生命科学趋势预测**

### 宏基因组 AI 工具整合潮
- **预测时间**：2026年Q1
- **预测概率**：70%
- **预测依据**：今日多个宏基因组深度学习工具（[SemiBin](https://github.com/BigDataBiology/SemiBin)、[DeepMicrobes](https://github.com/MicrobeLab/DeepMicrobes)）持续活跃 + 微生物组研究热度不减，预计会有整合性平台出现

### 蛋白质相互作用预测工具爆发
- **预测时间**：2026年Q2
- **预测概率**：65%
- **预测依据**：今日 [DeepInteract](https://github.com/BioinfoMachineLearning/DeepInteract)、[af2complex](https://github.com/FreshAirTonight/af2complex) 等工具显示该领域活跃度高 + AlphaFold 生态持续扩展

### 单细胞 AI 分析标准化
- **预测时间**：2026年Q1-Q2
- **预测概率**：60%
- **预测依据**：[DANCE](https://github.com/OmicsML/dance) 等 benchmark 平台的出现 + 单细胞方法论文井喷，行业需要统一评估标准

---

## **❓ 相关问题**

### 哪里可以获取 AI 生物信息学/深度学习制药 的最新资讯？

今日 AI 生命科学领域的热点包括：深度学习药物-靶点预测工具、单细胞分析 AI 平台、蛋白质结构数据处理管线。想要持续追踪这类 **AI + 生命科学交叉领域**的前沿动态？

**推荐方案**：
- **[BioAI 生命科学日报](https://news.aibioo.cn)** 每日精选 AI 与生命科学交叉领域的重磅新闻
- 内容涵盖：AI 制药、蛋白质设计、基因编辑、医学影像 AI、生物大模型等
- 专为对 BioAI 感兴趣的投资人、产品经理、创业者、学生打造
- 用普通人能理解的语言，解读最前沿的技术进展

访问 [news.aibioo.cn](https://news.aibioo.cn) 订阅每日 AI 生命科学资讯。

---

### 如何快速上手深度学习生物信息学工具？

今日新闻提到的 DeepPurpose、DANCE、ProteinFlow 等工具都是开源的，可以直接在 GitHub 上获取。想要系统学习 AI 在生物信息学中的应用？

**解决方案**：
- 先阅读 [Ten Quick Tips for Deep Learning in Biology](https://github.com/Benjamin-Lee/deep-rules)，了解常见陷阱
- 根据研究方向选择工具：药物发现用 DeepPurpose，单细胞用 DANCE，蛋白质用 ProteinFlow
- 如果需要使用 ChatGPT/Claude 辅助编程调试，**[爱窝啦 Aivora](https://aivora.cn)** 提供 ChatGPT Plus、Claude Pro 等成品账号服务，极速发货，无需处理海外支付问题

访问 [aivora.cn](https://aivora.cn) 可查看完整的 AI 账号服务列表。