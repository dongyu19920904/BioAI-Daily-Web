---
linkTitle: AI生命延续学日报
title: 'AI生命延续学日报 2026/11/18'
breadcrumbs: false
next: /2026-11/2026-11-18
description: '2026-11-18 AI生命延续学日报：阿尔茨海默免疫疗法首次人体试验见生物标志物改善；部分重编程效果因细胞类型而异；脑扫描隐私保护协作框架跨站点分类神经疾病。聚焦来源、证据阶段和实际应用距离。'
cascade:
  type: docs
---

## **今日摘要**

```
一种调动免疫细胞入脑的阿尔茨海默抗体在早期人体试验中观察到神经损伤标志物下降。
部分重编程对不同人类细胞的影响差异明显，内皮细胞功能改善而T细胞则不可逆丢失。
上述标志物下降来自40人的探索性小样本，尚无统计显著性，不能说明药物改变病程。
```

## **🔥 今日焦点 TOP 10**

### 1. 阿尔茨海默免疫疗法首次人体试验见生物标志物改善

据 [媒体报道](https://www.genengnews.com/topics/translational-medicine/beyond-amyloid-and-tau-alzheimers-drug-developer-sees-early-clinical-success-for-immunotherapy-based-approach/)，ImmunoBrain 的抗体 IBC-Ab002 在 40 名早期阿尔茨海默病患者的 I 期试验中显示安全，并在 48 周观察到脑脊液中与神经元损伤相关标志物下降。该药不直接清除淀粉样蛋白，而是短暂阻断 PD-1/PD-L1 这条免疫"刹车"通路，调动外周免疫细胞入脑缓解炎症；30 mg/kg 组神经颗粒蛋白下降约 23%，未见脑出血或 ARIA。数据发表于 Nature Medicine，但样本小、无统计显著性，属探索性信号，团队已提交 II 期申请，能否改变病程仍待验证。

[![来源配图：Beyond Amyloid and Tau: Alzheimer’s Drug Developer Sees Early Clinical Success for Immunotherapy-Based Approach](https://www.genengnews.com/wp-content/uploads/2026/11/Prof-Michal-Schwartz-CROP-SQUARE-300x298.jpg)](https://www.genengnews.com/topics/translational-medicine/beyond-amyloid-and-tau-alzheimers-drug-developer-sees-early-clinical-success-for-immunotherapy-based-approach/)

### 2. 部分重编程效果因细胞类型而异

据 [Lifespan.io 的报道](https://lifespan.io/partial-reprogrammings-outcome-depends-on-cell-type/)，一项含重编程先驱山中伸弥参与的预印本对三种人类细胞——皮肤成纤维细胞、杀伤性 T 细胞、主动脉内皮细胞——做了"部分重编程"测试，即短暂激活 OSKM 四个基因让细胞返老还童但不完全变回干细胞。三种细胞反应差异很大：内皮细胞表观遗传年龄下降的同时功能也改善；T 细胞深度重编程后无法恢复并丢失；成纤维细胞表观年龄降了但增殖长期受损。这是预印本尚未经同行评议，且只用 48-63 岁供体的体外细胞，不能外推到人体器官。

![三种细胞类型对部分重编程的反应示意图](https://lifespan.io/wp-content/uploads/2026/11/Three-cell-types-262x187.jpg)

### 3. 脑扫描隐私保护协作框架跨站点分类神经疾病

据 [论文索引/摘要](https://papers.cool/arxiv/2611.21955)，SCAN 框架让多家医院在不共享患者脑 MRI 扫描的前提下协作适配一个 3D 视觉语言模型来分类神经疾病，用 67 个站点、12 个国家的 7,641 张扫描覆盖阿尔茨海默病、中风、癫痫，新站点只分享加噪处理后的类别摘要。在 7 个未见站点上零样本分类 AUC 达 0.833-0.945，无需训练的本地原型使某站点癫痫 AUC 从 0.508 提升到 0.762，接近本地训练分类器。这是方法学预印本，共享带来的精度增益有限，尚未进入临床诊断。

### 4. 科学家导向的 AI 代理在蛋白质预测中接近最强基线

据 [论文索引/摘要](https://papers.cool/arxiv/2611.21950)，DiscoveryAgent 是一个让科学家在研究轮次间选择、修改或替换假设的 AI 代理框架，并配备审计代理核查每步记录。在蛋白质变体效应预测任务中，经科学家引导的版本在 106 个 ProteinGym 基线中仅被一个超越；三个领域案例研究还识别了与自身免疫病相关的 CD4+ T 细胞中继基因。这是预印本，性能是在特定基准上测得，不等于实际药物发现成功率。

### 5. 单细胞扰动预测模型跨情境泛化更好

据 [论文索引/摘要](https://papers.cool/arxiv/2611.21959)，OCCAM 用一个多层感知机框架学习单细胞表示并预测基因扰动效果，扰动指用实验手段改变某个基因看细胞反应。在"交叉情境"少样本预测中——某扰动和某细胞情境分别见过但从未同时出现——OCCAM 比四个重训对手更好地捕捉未观察组合的响应；对同时改两个基因的双重扰动，它能组合单基因响应来减少表达预测误差。这是预印本方法评测，准确预测表达水平仍是挑战。

### 6. 牙科 CBCT 影像中检出 MRI 证实的软组织病变

据 [论文索引/摘要](https://papers.cool/arxiv/2611.23042)，研究团队用物理引导的自监督学习，从常规牙科 CBCT（一种 X 射线锥形束 CT，本为看骨骼优化）中提取出通常要 MRI 才能看清的软组织病变信号。在 212 对配准的颞下颌关节 CBCT-MRI 数据上，一种特殊预训练设置使关节积液检出 ROC AUC 达 0.793，提示低剂量 X 射线影像中可能保留人眼看不见的软组织信息。这是预印本回顾性研究，尚未前瞻性验证，不能代替 MRI 诊断。

### 7. 遗传条码追踪人类干细胞在骨髓移植中的差异

据 [媒体报道](https://www.genengnews.com/topics/translational-medicine/genetic-barcoding-reveals-how-pre-bone-marrow-transplant-conditioning-impacts-immune-system-regeneration/)，南加州大学团队用遗传条码给单个人类造血干细胞和祖细胞打上标记，移植入小鼠后追踪它们如何重建血液和免疫系统。研究发现人类多能祖细胞的长期再生能力比过去小鼠实验认为的更强，但造血干细胞产血更多、谱系更广；不同移植前处理（放疗 vs 化疗药白消安）影响免疫细胞产出的类型和速度，干细胞受影响更小。结果来自人鼠嵌合模型，能否直接指导患者移植方案仍需进一步研究。

### 8. 蛋白质设计能量函数获 GPU 加速实现

据 [论文索引/摘要](https://papers.cool/arxiv/2611.21857)，tmol 是一个 GPU 原生的 PyTorch 库，实现了 Rosetta 蛋白质能量函数 RosettaGenFF，批量打分通量最高提升 362 倍，且可微分、能接入机器学习框架。把它作为生成式蛋白质设计的奖励信号后，设计出的界面在氢键和水桥数量上有改善。这是预印本，通量与界面改善是在特定基准上测得，实际设计成功率需更多验证。

### 9. 生物工程血管首次进入人体测试

据 [媒体报道](https://longevity.technology/news/humacytes-bioengineered-bypass-vessel-gets-first-human-test/)，Humacyte 启动了一项 10 人试验，测试一种"货架式"生物工程血管，用于心脏搭桥手术中替代从患者腿部取出的自体静脉。该血管由北卡公司制造，旨在让不需要取自体静脉的旁路移植成为可能。这是首次人体试验，规模小，尚未公布安全或通畅性结果，离广泛可用仍远。

![Humacyte 生物工程血管](https://longevity.technology/wp-content/uploads/2026/11/humacytes-bioengineered-bypass-vessel-gets-first-human-test-hero-1200x800-1-1024x683.png)

### 10. 曲率加权图网络在蛋白互作预测上的增益被重新解释

据 [论文索引/摘要](https://papers.cool/arxiv/2611.21849)，研究者在四个蛋白质相互作用数据集上逐条边分析曲率增强图卷积网络（CGCN），发现它总体 AUC、AUPR、F1 都提升，但增益几乎全来自低度数边，而在低曲率（瓶颈）边上三个数据集反而变差，与"缓解过度挤压"的动机相反。进一步分析提示曲率加权实际是锐化了簇间分隔，以簇间预测为代价改善簇内预测。这是预印本方法学分析，结论限于所测数据集。

## **⚡ 产品与功能更新**

### 皮肤衰老平台：两家公司推出系统性衰老图谱

据 [媒体报道](https://longevity.technology/news/beauty-giant-and-supplement-startup-both-chase-skin-aging/)，雅诗兰黛在上海进博会发布"Mastering Skin Longevity"平台，用钟表式展示呈现多个生物开关如何共同塑造皮肤衰老；几周前初创公司 Epillon 也发布了一张含十个相互影响部分的皮肤衰老图谱。两家都将皮肤衰老视为相互关联的系统而非单一指标。这些是企业的概念发布，非临床验证的治疗方案。

![皮肤衰老平台发布](https://longevity.technology/wp-content/uploads/2026/11/beauty-giant-and-supplement-startup-chase-skin-aging-revised-hero-1200x800-1-1024x683.png)

## **🧪 前沿研究**

### 慢性孤独与痴呆风险升高相关

据 [媒体报道](https://www.news-medical.net/news/20261117/Chronic-loneliness-linked-to-3825-higher-risk-of-dementia.aspx)，一项追踪人群 30 年的研究显示，只有持续的慢性孤独才与痴呆风险显著相关，风险升高约 38%。这是观察性研究，发现的是相关而非因果，不能说明孤独直接导致痴呆，具体样本量和机制待核查原文。

## **⌘ 开源 TOP 项目**

### lucascamillomd/pyaging：GPU 加速的衰老时钟集合

这个 Python 库收集了多种基于 GPU 优化的衰老时钟，即通过甲基化或基因表达等分子数据估算生物年龄的模型，适合做衰老研究的科研人员使用。据 [仓库](https://github.com/lucascamillomd/pyaging)，目前有 134 stars，最近活跃于 11 月 15 日；具体支持哪些时钟、输入格式和许可证需在仓库确认。

### ZT135292/Dog_blood_transcriptomic_aging_clock：犬血液衰老时钟模型代码

这个仓库提供用基因表达谱和年龄标签构建犬血液转录组衰老时钟的代码，比较了弹性网络、套索、随机森林、XGBoost、支持向量回归和专家混合模型六种方法对年龄的预测性能。据 [仓库](https://github.com/ZT135292/Dog_blood_transcriptomic_aging_clock)，适合做兽医或比较衰老研究的开发者参考，最近活跃于 11 月 18 日；模型精度和许可证需在仓库确认。

## **❓ 相关问题**

### ImmunoBrain 的 I 期数据能说明药有效吗

不能。据 [媒体报道](https://www.genengnews.com/topics/translational-medicine/beyond-amyloid-and-tau-alzheimers-drug-developer-sees-early-clinical-success-for-immunotherapy-based-approach/)，I 期主要看安全性，40 人样本无统计显著性，生物标志物下降是探索性信号；团队已提交 II 期用临床终点验证。标志物改善不等同认知功能改善或疾病停止进展。

### 部分重编程的细胞差异对现有试验意味着什么

不可直接推论。该预印本测的是 OSKM 四因子在三种人细胞体外短暂激活，而 Life Biosciences 的视神经试验用 OSK 三因子连续八周，配方、时长和靶向细胞都不同，结果不能互推。据 [Lifespan.io 报道](https://lifespan.io/partial-reprogrammings-outcome-depends-on-cell-type/)，研究提醒需验证重编程后细胞功能是否真改善，而不只看表观年龄下降。