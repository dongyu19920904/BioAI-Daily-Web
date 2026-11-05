---
linkTitle: AI生命延续学日报
title: 'AI生命延续学日报 2026/11/5'
breadcrumbs: false
next: /2026-11/2026-11-05
description: '2026-11-05 AI生命延续学日报：脑扫描发现阿尔茨海默症在记忆丧失前数年已有信号；早发性阿尔茨海默症患者脑内 tau 蛋白扩散更快；女性生育史与激素用药史和脑血管健康存在关联。聚焦来源、证据阶段和实际应用距离。'
cascade:
  type: docs
---

## **今日摘要**

```
脑扫描研究发现认知正常者的神经放电模式与日后患阿尔茨海默症风险存在关联。
早发性患者脑内异常蛋白的扩散范围比晚发性患者更广，两类疾病进展模式可能存在实质差异。
上述两项均为观察性研究，关联不等于因果，结果不能用于判断个人患病风险。
```

## **🔥 今日焦点 TOP 10**

### 1. 脑扫描发现阿尔茨海默症在记忆丧失前数年已有信号

斯坦福医学院主导的研究发现，认知功能正常的成年人脑中，某些神经元的放电模式可以在记忆丧失和淀粉样斑块堆积出现之前，就预示日后患阿尔茨海默症的风险。这一发现来自对认知正常成人的脑活动影像分析，属于观察性研究，目前只能说明这些放电模式与未来患病风险相关，还不能说明它们直接导致疾病，具体研究对象数量和随访时长待核查。详情见[News-Medical 的媒体报道](https://www.news-medical.net/news/20261105/Brain-scans-reveal-clues-to-Alzheimers-risk-years-before-memory-loss-begins.aspx)。

### 2. 早发性阿尔茨海默症患者脑内 tau 蛋白扩散更快

一项新研究发现，65 岁前出现症状的早发性阿尔茨海默症患者，脑内 tau 蛋白（一种在患者神经细胞中异常积聚的标志性蛋白）的沉积范围比 65 岁及以后发病的患者更广。tau 蛋白异常扩散被认为是导致神经细胞逐步死亡的关键因素之一。这项研究提示早发与晚发两类患者的疾病进展模式可能存在实质差异，但具体样本量、是否有纵向追踪数据等细节在输入摘要中未提供，详见 [News-Medical 报道](https://www.news-medical.net/news/20261105/Tau-spreads-more-rapidly-in-early-onset-Alzheimers-disease.aspx)。

### 3. 女性生育史与激素用药史和脑血管健康存在关联

发表在《神经病学》（Neurology，美国神经病学学会官方期刊）的一项研究发现，女性生育年限较长、曾使用避孕药或绝经期激素治疗，与脑血管健康的若干指标存在关联。这是一项观察性研究，关联不等于因果，目前无法说明激素暴露直接改善或损害脑血管，也不能据此建议个人调整用药，具体关联方向和样本信息可沿[News-Medical 报道](https://www.news-medical.net/news/20261104/Longer-reproductive-lifespan-and-hormonal-history-may-influence-brain-vascular-health.aspx)查阅原文。

### 4. 研究者提出应将运动列入精神与认知健康的正式处方

发表在《Brain Health》的一篇同行评审 Viewpoint（观点文章），综合随机对照试验、荟萃分析（即汇总多项试验结果的统计分析）和队列研究的证据，认为运动对减轻抑郁、焦虑症状和支持认知功能有作用，主张医生应将分级运动处方作为脑健康护理的结构性组成部分，并建议个体化考量身体状况和参与障碍。据[News-Medical 报道](https://www.news-medical.net/news/20261104/Exercise-may-improve-mood-and-memory-and-researchers-say-doctors-should-prescribe-it.aspx)，文章同时指出，运动预防痴呆的证据目前仍以观察性研究为主，尚未达到因果性结论。

[![来源配图：Exercise may improve mood and memory, and researchers say doctors should prescribe it](https://www.news-medical.net/images/news/ImageForNews_850645_17938313141223800.jpg)](https://www.news-medical.net/news/20261104/Exercise-may-improve-mood-and-memory-and-researchers-say-doctors-should-prescribe-it.aspx)

### 5. AI 多模态医疗推理测试：主流模型在交叉图像中错误率达 45%

一项名为 Trick-or-Treat 的对抗性评测构建了一个新基准：将真实胸部 X 光片与 AI 合成的临床照片配对，其中"错配组"的照片显示的是不一致的临床表现（如普通痘痘而非水痘皮疹），用来测试模型是否会忽略视觉矛盾、强行给出符合 X 光的诊断。在三个前沿大模型的测试中，面对错配图像对时，模型产生临床显著幻觉（即虚构或歪曲图中不存在的病变）的比例为 45%–57.5%，而单独展示相同照片时该比例为 25%–37.5%。这项工作揭示了当前多模态医学 AI 在跨模态推理上的系统性缺陷，[论文摘要见 papers.cool](https://papers.cool/arxiv/2611.06631)。

### 6. 神经网络模型预测膜蛋白在细胞膜上的扩散轨迹

细胞膜蛋白的运动方式（即"侧向扩散"）与细胞信号传导密切相关，但分子动力学模拟（用计算机模拟分子运动的方法）计算成本极高。研究者提出了一种结合 Transformer 架构、递归网络和随机潜在过程的神经随机模型，在两种膜蛋白混合系统中，能将轨迹从模拟的有限帧延伸至 40,000 帧，并复现了实验中观察到的异常扩散特征。目前验证仅在模拟数据上进行，尚未与真实单粒子追踪实验系统比较，[论文详情见 papers.cool](https://papers.cool/arxiv/2611.06157)。

### 7. 单细胞克隆不再是生物制药首次人体试验的唯一起点

GEN 发表的一篇技术分析文章提出，对于部分生物制剂（即利用活细胞生产的大分子药物），可将传统必须完成的单细胞克隆筛选步骤推迟，先用"稳定细胞池"（整合了目的基因的细胞群体）生产少量临床材料、完成首次人体安全性试验，再并行推进克隆筛选。据[GEN 报道](https://www.genengnews.com/topics/bioprocessing/rethinking-the-clone-first-paradigm-for-first-in-human-biologics/)，使用转座酶技术（一种能使基因更均匀整合进细胞基因组的工具）构建的稳定池，在抗体滴度、细胞活力和产品质量属性上与后续克隆来源材料表现相当；这一策略不适用于产品质量复杂或材料需求量大的分子。

[![来源配图：Rethinking the Clone-First Paradigm for First-in-Human Biologics](https://www.genengnews.com/wp-content/uploads/2026/10/Jesse-McCool-281x300.jpg)](https://www.genengnews.com/topics/bioprocessing/rethinking-the-clone-first-paradigm-for-first-in-human-biologics/)

### 8. 少步生成模型的蛋白质结构设计通过噪声优化获得改善

扩散模型（通过逐步去除随机噪声来生成图像或结构的 AI 方法）在少步推理时难以对目标属性进行引导。LeNO（学习噪声优化）方法通过训练一个残差网络来学习初始噪声的修正量，在推理时只需一次噪声修正，无需反复搜索。[论文](https://papers.cool/arxiv/2611.06255)在蛋白质结构生成任务中也进行了评测，使用了设计可行性（designability）这类计算成本较高的黑盒奖励函数；目前结果仅来自计算评估，尚未经过实验验证。

### 9. 退休对澳大利亚老年人的孤独感没有可测量的影响

莫纳什大学主导的研究发现，退休这一生活事件对澳大利亚老年人的孤独感没有可测量的差异，这与"退休导致社交孤立"的普遍直觉相反。孤独感是健康老龄化和寿命研究中公认的重要风险因素，这一阴性结果提示退休本身可能不是干预的优先靶点，但具体研究设计、样本规模和追踪方式待核查，详见 [News-Medical 报道](https://www.news-medical.net/news/20261104/Retirement-does-not-increase-loneliness-in-older-Australians.aspx)。

### 10. 基因表达的随机波动如何被细胞分裂周期塑造

细胞在生长和分裂过程中，mRNA 和蛋白质的数量会产生随机波动（即"基因表达噪声"），而传统模型通常只描述静止的细胞。一篇综述梳理了在增殖细胞中对这种噪声建模的进展，重点讨论了"周期稳态"（细胞在反复分裂后达到的统计规律）如何与常用的静态稳态近似相互关系，以及实验测量方式本身如何影响对分子数量分布的解读。[论文见 papers.cool](https://papers.cool/arxiv/2611.06537)，涉及数千个基因的计算拟合方法也在文中有所讨论。

---

## **⚡ 产品与功能更新**

### 细胞外无菌 DNA 合成套件 MiroMine 进入早期访问

Ribbon Bio 推出了无细菌 DNA 组装套件 MiroMine，将此前仅作为服务提供的无菌合成技术带到实验室桌面。该套件绕过了传统 DNA 合成必须经过细菌培养的流程，核心优势在于可以处理细菌不能稳定维持的序列（含高 GC 含量、重复序列或同聚物）。据 [GEN 赞助内容报道](https://www.genengnews.com/sponsored/building-custom-dna-without-bacterial-constraints/)，早期访问版本支持约 7 kb 以内的分子，在内部测试中 3.4 kb 和 6.8 kb 片段达到 100% 测序正确率，约 4 kb 片段为 88%（该公司设定的精度基准为 90%）；内毒素水平在每微克 0.1 单位以下，未检出细菌基因组 DNA。上述数据来自 Ribbon Bio 自身测试，尚未经独立第三方验证。

[![来源配图：Building Custom DNA without Bacterial Constraints](https://s.w.org/images/core/emoji/17.0.2/72x72/2122.png)](https://www.genengnews.com/sponsored/building-custom-dna-without-bacterial-constraints/)

---

## **🧪 前沿研究**

### 医学 AI 在处理电子健康记录事件序列时的优势范围被重新厘定

时序点过程（Temporal Point Processes，一种对离散事件发生时间和类型建模的统计框架）被广泛用于预测电子健康记录中的疾病事件序列。这项研究在 UK Biobank 疾病历史和 MIMIC-IV 重症监护记录两个大规模医疗数据集上系统比较了经典 Hawkes 过程与神经网络模型，发现当 Hawkes 过程配备灵活的可学习基线和核函数后，与神经网络的性能差距基本消失——仅在 MIMIC-IV 重症数据上，神经模型在预测"发生了什么类型的事件"时保留了优势，而对"何时发生"的预测提升主要来自强度函数的灵活性，而非模型架构本身。研究同时开源了名为 TorchPP 的框架，[论文和代码详情见 papers.cool](https://papers.cool/arxiv/2611.06348)。

---

## **❓ 相关问题**

### 脑扫描发现的"放电模式异常"能用来筛查个人患阿尔茨海默症的风险吗？

目前还不能。斯坦福这项研究属于观察性研究，发现认知正常成人的特定脑放电模式与日后患病风险相关，但相关不等于因果，也不等于这种模式可以精确预测某个具体的人是否会发病。脑年龄或活动模式的差异是统计层面的群体信号，单次影像结果不能直接解读为个人患病风险的判定。具体研究对象数量、随访时长和模式识别方法的细节可从 [News-Medical 报道](https://www.news-medical.net/news/20261105/Brain-scans-reveal-clues-to-Alzheimers-risk-years-before-memory-loss-begins.aspx) 追溯原文继续了解。