---
linkTitle: AI生命延续学日报
title: 'AI生命延续学日报 2026/10/21'
breadcrumbs: false
next: /2026-10/2026-10-21
description: '2026-10-21 AI生命延续学日报：Percival 视觉语言模型从 CT 扫描中提取跨器官健康信号；Tessera：兼顾方向敏感性的空间转录组表征学习框架；HistoLoop：基于病理切片的空间基因表达迭代预测模型。聚焦来源、证据阶段和实际应用距离。'
cascade:
  type: docs
---

## **今日摘要**

```
宾大Percival在大规模CT上训练，预测跨器官疾病优于图像基线，但未与放射科对比，部分预测或为已有未记录疾病。
多个预印本将病理切片、空间转录组与脑影像整合为多模态模型，Brain2Vec已开源权重并接入云平台。
先核查ATH434二期事后重分析：统计模型在试验启动后追加，原始主要终点未达到，不等于确证疗效。
```

## **🔥 今日焦点 TOP 10**

### 1. Percival 视觉语言模型从 CT 扫描中提取跨器官健康信号

据 [Lifespan.io 的报道](https://lifespan.io/ai-extracts-broader-health-insights-from-routine-ct-scans/)，宾夕法尼亚大学团队开发的视觉语言模型 Percival，在逾 **52,000 名参与者**的 400,000 余个 CT 图像体积上完成训练（npj Digital Medicine）。模型嵌入（embedding）与 **35 项实验室指标**（含肾功能、肝功能、血糖、血脂及炎症标志物）存在显著关联，并与 351 个跨器官诊断类别相关联；在预测后续心衰、肝硬化、急性肾衰等疾病方面超过了仅使用图像的基线模型。研究者指出，部分"未来诊断"可能是已有但尚未记录的疾病，因此这里的预测能力与真正提前若干年预警疾病有所不同。研究尚未与放射科医生直接对比，不能得出 Percival 优于临床常规读片的结论。

[![来源配图：AI Extracts Broader Health Insights From Routine CT Scans](https://lifespan.io/wp-content/uploads/2026/10/CT-Scan-Robot-262x187.jpg)](https://lifespan.io/ai-extracts-broader-health-insights-from-routine-ct-scans/)

### 2. Tessera：兼顾方向敏感性的空间转录组表征学习框架

[论文索引/摘要](https://papers.cool/arxiv/2610.28579) 显示，Tessera 在空间转录组（spatial transcriptomics）表征学习中引入几何归纳偏置（geometric inductive bias），同时保留细胞间关系的方向信息而非仅以距离建模。框架采用平移不变设计，在多种组织和测序技术上的表现超过现有空间基础模型，零样本泛化到训练时最大上下文 **16 倍**的场景。目前为预印本，具体数据集和评测指标待同行评审核查，因果机制尚不能得出结论。

### 3. HistoLoop：基于病理切片的空间基因表达迭代预测模型

[论文索引/摘要](https://papers.cool/arxiv/2610.28339) 介绍了 HistoLoop，一种循环 Transformer（looped Transformer），通过多轮迭代将病理切片（H&E 图像）中的 spot 状态逐步精化，以预测空间基因表达。在 HEST-Bench HVG50 评测协议下，HistoLoop 在 **HEST-1K 数据集 5 个器官 6 项癌症任务**中取得最高宏平均基因 Pearson 相关系数。该方法为观察性预测，属于预印本，尚未验证对临床诊断或治疗决策的实际影响。

### 4. Brain2Vec：74,425 例 T1 加权 MRI 预训练的脑结构基础模型

[论文索引/摘要](https://papers.cool/arxiv/2610.28411) 显示，Brain2Vec 在脑年龄预测任务上，使用预训练权重初始化后在最终准确率和收敛速度上均优于随机初始化；冻结嵌入在 5 项分类任务中的 4 项超过解剖体积特征基线。模型代码和训练权重已开源（见 [CBICA/Brain2Vec](https://github.com/CBICA/Brain2Vec)），也可通过 NiChart 云平台使用。预训练数据来自多项研究的汇总，下游任务均为学术评测，尚未在临床部署中验证。

### 5. Alterity 对 MSA 药物 ATH434 进行事后重分析，报告功能衰退减缓 52%

据 [Longevity.Technology 的报道](https://longevity.technology/news/alterity-reanalysis-puts-msa-drug-at-52-slowing/)，Alterity Therapeutics 在 2026 年首尔国际帕金森及运动障碍大会（作为壁报发表）中，对其 2 期试验进行事后重分析，以脑脊液**神经丝轻链（NfL）**调整基线疾病严重程度后，50 mg 组在 Week 52 比安慰剂组在残障量表上少恶化 **4.64 分**（p=0.032，量表最小临床差异为 1.5 分）。关键局限：统计模型在试验启动后追加，原始主要终点（黑质铁沉积）未达到，75 mg 剂量未达统计显著性；该数字是探索性重分析，不等于确证性临床疗效。

[![来源配图：Alterity reanalysis puts MSA drug at 52% slowing](https://longevity.technology/wp-content/uploads/2026/10/alterity-reanalysis-neon-revision-1024x683.png)](https://longevity.technology/news/alterity-reanalysis-puts-msa-drug-at-52-slowing/)

### 6. VGL-stGen：肺组织病理与空间转录组的多模态大语言模型

[论文索引/摘要](https://papers.cool/arxiv/2610.28266) 介绍的 VGL-stGen 从预训练医学视觉语言模型出发，结合配对肺 H&E 图像、空间转录组和单细胞参考数据，支持 13 项任务（组织分类、细胞类型分类、基因预测及条件表达补全）。图像置换实验显示正确配对的组织图像在观测表达之外贡献了额外信息。研究者明确指出，外部分类依赖共享注释谱系的计算参考，且部分 H&E 来源在训练阶段已暴露，结果外推需谨慎。

### 7. GCLDock：课程学习提升蛋白质-配体柔性对接成功率

[论文索引/摘要](https://papers.cool/arxiv/2610.28145) 提出将课程学习（curriculum learning）引入柔性对接（flexible docking）训练，逐步加入蛋白质大构象变化样本。在 PDBBind ESMFold apo 基准上，GCLDock 取得 **46.52%** 的 top-1 成功率（配体 RMSD < 2Å），附加 PoseBusters 有效性约束后为 40.26%，超过现有基线。该任务针对蛋白质-配体结合构型预测，属计算基准评测，尚未在湿实验或药物研发流程中独立验证。

### 8. Duke 痴呆 AI 工具临床转化计划

据 [News-Medical 的报道](https://www.news-medical.net/news/20261021/Duke-initiative-aims-to-bring-dementia-AI-tools-into-clinical-practice.aspx)，Duke 大学发起了一项旨在将痴呆症 AI 工具推进至常规临床实践的倡议，报道指出目前已有大量研究成果但鲜有工具真正落地。具体工具名称、评估指标、入组人群和试点规模均为短摘要层级，详细数据待核查，不能依此推断临床诊断准确率或患者结局改善。

[![来源配图：Duke initiative aims to bring dementia AI tools into clinical practice](https://www.news-medical.net/images/tags/TagImage-1241-45296008423622681466-620x480.jpg)](https://www.news-medical.net/news/20261021/Duke-initiative-aims-to-bring-dementia-AI-tools-into-clinical-practice.aspx)

### 9. LoRA 微调视觉基础模型在脑 MRI 中性能收敛但内部机制分化

[论文索引/摘要](https://papers.cool/arxiv/2610.28255) 对 DINOv3、SigLIP2、MerMED-FM、BiomedCLIP 四个 ViT-B/16 主干进行 LoRA 微调，用于脑肿瘤分割（6 个数据集，平均 Dice **78–81%**）。研究发现四个模型分割性能相近，但迁移至阿尔茨海默病分类时表现分化：分割微调使 DINOv3 分类性能提升，对其余三个主干则造成下降。将 LoRA 限制在早中层可匹配或接近全层分割性能并减少分类损耗。结果基于特定评测集，不代表所有临床脑 MRI 任务。

### 10. MODAG 帕金森病诊断试剂盒与候选药物组合获 CPHI 大奖

据 [Longevity.Technology 的报道](https://longevity.technology/news/parkinsons-test-and-drug-duo-wins-cphi-award/)，德国生物技术公司 MODAG 凭借 CE 标志脑脊液 **α-突触核蛋白（alpha-synuclein）**聚集体检测试剂盒 PD DETECT（2026 年 3 月上市）与候选药物 emrusolmin 的配对策略，在 CPHI 米兰赢得 API 开发与创新奖。emrusolmin 目前由 Teva 开展多系统萎缩（MSA）2 期临床试验，已获 FDA 孤儿药与快速通道资格。该奖项为行业认可，公告未报告任何临床结果，不能视为疗效证明。

[![来源配图：Parkinson’s test-and-drug duo wins CPHI award](https://longevity.technology/wp-content/uploads/2026/10/parkinsons-test-and-drug-duo-wins-cphi-award-hero-1200x800-1-1024x683.png)](https://longevity.technology/news/parkinsons-test-and-drug-duo-wins-cphi-award/)

---

## **🧪 前沿研究**

### 父亲年龄可能影响胚胎性别特异性基因表达

据 [News-Medical 的报道](https://www.news-medical.net/news/20261020/Paternal-age-may-influence-sex-specific-gene-expression-changes-in-embryos.aspx)（发布于 2026-10-20），研究报道了父亲年龄与胚胎中性别特异性基因表达变化之间的关联方向，属短摘要层级，具体研究设计、样本量、胚胎来源物种及统计效应量待原文核查。与衰老生物学的关联在于父代年龄对后代基因调控的潜在影响，但因果机制和对人类健康的实际影响目前不能得出结论。

### EEG 区域特异性分类评估催眠易感性

[论文索引/摘要](https://papers.cool/arxiv/2610.28427) 使用 256 通道 EEG 对 **62 名男性参与者**（32 对照、30 名引导意象/催眠组）进行滑动窗口 2D CNN 分类，Leave-One-Subject-Out 跨被试评估下额叶与前额叶区域维持高于随机水平的准确率（分别为 0.646 和 0.624），而枕叶区域在随机划分下的高准确率（0.721）在跨被试评估中崩溃至接近随机水平（0.453），揭示了 EEG 研究中被试特异性指纹的混淆风险。样本全为男性，结果不能外推至其他性别或临床诊断场景。

---

## **◎ 行业变化与个人影响**

### 高度虚弱乳腺癌生存者中超半数未获 Medicare 居家护理

据 [News-Medical 的报道](https://www.news-medical.net/news/20261020/Most-frail-breast-cancer-survivors-lack-Medicare-home-care.aspx)（发布于 2026-10-20，《国家癌症研究所杂志》），研究显示在特定年份中，**超过半数高度虚弱的老年乳腺癌长期生存者**未获得 Medicare 居家健康护理服务。这一观察性研究提示医疗可及性存在缺口，影响人群为美国老年乳腺癌生存者。样本量、虚弱评定方法及地区差异待原文核查；不能推断居家护理干预对预后的因果改善。

[![来源配图：Most frail breast cancer survivors lack Medicare home care](https://www.news-medical.net/images/tags/TagImage-1039-45840826385648151818-620x480.jpg)](https://www.news-medical.net/news/20261020/Most-frail-breast-cancer-survivors-lack-Medicare-home-care.aspx)

---

## **⌘ 开源 TOP 项目**

### ismailtatli/BrainAge-XAI：可解释深度学习用于脑年龄差距估计

[BrainAge-XAI](https://github.com/ismailtatli/BrainAge-XAI)（发布于 2026-10-21）是一个将结构 MRI 用于脑年龄差距（brain age gap）估计与认知衰老分析的可解释深度学习项目，主题标记为 aging_clock（衰老时钟）。适合研究脑衰老时钟和认知衰老机制的神经科学研究者。研究对象（数据集来源）待核查；Stars 数量、许可证及试跑环境要求均未在输入中提供，建议查阅仓库 README 确认。

### nopara73/LongevityWorldCup：开源长寿运动竞技平台

[LongevityWorldCup](https://github.com/nopara73/LongevityWorldCup)（发布于 2026-10-21，**26 Stars**）是一个集生物年龄计算器、运动员档案与公开排行榜于一体的开源平台，定位为长寿领域的竞技运动场景。适合有兴趣探索生物年龄量化与公开对比的个人用户和研究者。仓库自述功能，许可证及所用生物年龄算法的科学依据待独立核查，计算结果不能作为临床诊断参考。

---

## **❓ 相关问题**

### Alterity ATH434 的 52% 疾病减缓数据可信度如何评估？

需谨慎。这是一项 2 期试验（**77 名成人**）的事后重分析，统计模型在试验启动后追加；原始主要影像学终点（黑质铁沉积变化）未达到。52% 这一数字来自调整基线 NfL 后的探索性分析，而非预设主要终点，两组分析（46% vs 52%）对应不同患者子集和模型。如 [Longevity.Technology 的报道](https://longevity.technology/news/alterity-reanalysis-puts-msa-drug-at-52-slowing/) 所述，Phase 3 确证试验结果才是最终判断依据。