---
linkTitle: AI生命延续学日报
title: 'AI生命延续学日报 2026/9/24'
breadcrumbs: false
next: /2026-09/2026-09-24
description: '2026-09-24 AI生命延续学日报：快速导航；今日 AI 生命科学资讯；只有一句话。聚焦来源、证据阶段和实际应用距离。'
cascade:
  type: docs
---

## **今日摘要**

```
纽约大学开源AI工具3小时筛460万化合物，预测药物分子氢原子稳定位置，制药团队今天就能用。
16种血液蛋白与更年期、认知衰退、阿尔茨海默风险关联，但相关性不等于因果，暂无干预方案。
AI制药赛道工具更新快，基础研究标志物多，临床转化仍需等。
```



## ⚡ 快速导航

- [📰 今日 AI 资讯](#今日ai资讯) - 最新动态速览



> 💡 **提示**：想体验文中提到的 GPT、Claude、Gemini、Codex、Cursor、Grok 等工具，但不想折腾海外支付、注册、额度和教程？来 [**爱窝啦 Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) 按场景选择官方号、镜像、Cursor 方案或中转入口，官网自助下单，卡密秒发。

## **今日 AI 生命科学资讯**

### **👀 只有一句话**
AI工具预测药物分子稳定性，更年期血液蛋白特征与阿尔茨海默风险相关。

### **🔑 3 个关键词**
#AI制药 #生物衰老 #神经退行性疾病

---

## **📎 今日可引用要点**

- **事实结论**：研究者识别出一个包含16种蛋白质的血液特征，该特征与更年期相关，且与女性认知能力下降和阿尔茨海默症发病风险存在关联。
- **原始来源**：[Menopause leaves a blood protein signature linked to brain aging and Alzheimer's risk](https://www.news-medical.net/news/20260923/Menopause-leaves-a-blood-protein-signature-linked-to-brain-aging-and-Alzheimere28099s-risk.aspx)
- **证据边界**：观察性研究 / 人群队列分析 / 可信度中；相关性不等于因果关系,研究未证明这些蛋白质直接导致认知衰退或痴呆。

- **事实结论**：纽约大学团队开发的AI工具Tautomer-Predictor可在单个GPU上3.2小时内处理460万个化合物,准确预测药物分子中氢原子的稳定位置。
- **原始来源**：[Tautomer-Predictor AI Tool Identifies Stable Molecules for Drug Discovery](https://www.genengnews.com/topics/drug-discovery/tautomer-predictor-ai-tool-identifies-stable-molecules-for-drug-discovery/)
- **证据边界**：同行评审论文(Chemical Science) / 计算工具验证 / 可信度高；工具已开源,但其预测结果在实际药物开发中的有效性仍需临床验证。

- **事实结论**：Genialis与Inventia Life Science合作,将AI患者分析与3D胰腺癌模型结合,从644例患者肿瘤数据中识别出预后不良的微环境特征并映射到实验室模型。
- **原始来源**：[Genialis and Inventia Life Science Collaborate to Link Patient Biology with 3D Pancreatic Cancer Models](https://www.genengnews.com/topics/cancer/genialis-and-inventia-life-science-collaborate-to-link-patient-biology-with-3d-pancreatic-cancer-models/)
- **证据边界**：商业合作项目 / 初步研究数据 / 可信度中；方法尚未在临床试验中验证,模型与患者疗效的对应关系有待确认。

---

## **🔥 重磅 TOP 10**

### 1. [Tautomer-Predictor AI Tool Identifies Stable Molecules for Drug Discovery](https://www.genengnews.com/topics/drug-discovery/tautomer-predictor-ai-tool-identifies-stable-molecules-for-drug-discovery/)

药物分子像变脸演员,同样的配方,氢原子换个位置就成了另一个"角色",与蛋白质的结合方式完全不同。纽约大学团队训练了一个图神经网络,让它从110万个晶体结构中学会识别氢原子的"最佳站位"。这个AI工具Tautomer-Predictor不需要3D结构或量子力学计算,直接从2D分子式预测稳定构型,在单个GPU上3.2小时就能处理460万个化合物——传统量子力学方法根本做不到这个速度。

研究团队用它重新检查了蛋白质数据库(PDB)里5075个生物分子复合物,发现约2.5%(126个)的氢原子位置可能标错了。修正后的分子与蛋白质形成了更合理的氢键模式。这个工具已开源,药物研发团队今天就能用它筛选化合物库、优化分子对接模拟。

但这是计算预测,不是湿实验验证。模型在晶体环境数据上训练,预测结果在溶液或生物环境中是否同样准确,仍需实验确认。当前不能据此判断某个分子一定会成为有效药物。

**来源类型**：同行评审论文(Chemical Science) / 开源工具发布 / 可信度：高

![Tautomer-Predictor AI Tool Identifies Stable Molecules for Drug Discovery](https://www.genengnews.com/wp-content/uploads/2026/09/Low-Res_2bpm_tautomer-1-300x135.jpg)

---

### 2. [Menopause leaves a blood protein signature linked to brain aging and Alzheimer's risk](https://www.news-medical.net/news/20260923/Menopause-leaves-a-blood-protein-signature-linked-to-brain-aging-and-Alzheimere28099s-risk.aspx)

验血能预测大脑衰老速度吗?研究者从血液样本中识别出16种蛋白质,它们的组合模式与更年期的关联比实际年龄更强——换句话说,这些蛋白质反映的是生殖系统的生物学年龄,而非日历上的数字。这个"更年期蛋白质评分"越高,女性的蛋白质组衰老估计值越差,认知测试表现也更弱,阿尔茨海默症发病率更高。研究还在英国生物样本库的独立队列中重复验证了主要发现。

这是观察性研究,不是因果验证。数据显示相关性,但不能证明这些蛋白质直接导致认知衰退或痴呆。目前也没有针对这16种蛋白质的干预方案通过临床验证。这项工作提供了可检测的生物标志物,为理解更年期、大脑衰老和神经退行性疾病的关系提供了线索,但还不能用作临床诊断或治疗靶点。

**来源类型**：观察性研究 / 人群队列分析 / 可信度：中

![Menopause leaves a blood protein signature linked to brain aging and Alzheimer's risk](https://www.news-medical.net/images/news/ImageForNews_847512_17902185276588882.jpg)

---

### 3. [Genialis and Inventia Life Science Collaborate to Link Patient Biology with 3D Pancreatic Cancer Models](https://www.genengnews.com/topics/cancer/genialis-and-inventia-life-science-collaborate-to-link-patient-biology-with-3d-pancreatic-cancer-models/)

胰腺癌新药临床试验经常失败,一个原因是不知道药物适合哪类患者。Genialis和Inventia Life Science把AI患者分析和3D细胞模型平台结合起来:先用Genialis Supermodel从644例胰腺癌患者的肿瘤数据中识别出预后不良的微环境特征,再用Inventia的RASTRUM平台"打印"出对应的3D肿瘤-基质共培养模型。这样研究者可以在实验室里测试新疗法,看它们对特定患者群体是否有效。

这项工作本周在PanCAN 2026科学峰会上展示初步结果。方法的创新在于:从患者数据生成假设,在人源细胞模型中验证,再反向匹配到临床人群。但这仍是早期研究合作,模型与患者疗效的对应关系还需临床试验确认,当前不能直接指导治疗决策。

**来源类型**：商业合作公告 / 会议展示 / 可信度：中

![Genialis and Inventia Life Science Collaborate to Link Patient Biology with 3D Pancreatic Cancer Models](https://www.genengnews.com/wp-content/uploads/2026/09/2026-Genialis-software-schematic-1024x418.jpg)

---

### 4. [PsychAD studies map molecular mechanisms across major brain disorders](https://www.news-medical.net/news/20260923/PsychAD-studies-map-molecular-mechanisms-across-major-brain-disorders.aspx)

阿尔茨海默病、帕金森病、精神分裂症——这些看似不同的脑疾病在分子层面有哪些共同机制?西奈山医学院领导的PsychAD联盟发布了一个里程碑式的研究合集:9篇论文横跨Nature系列期刊,绘制了多种脑疾病的分子机制图谱。这个多学科项目自2019年由美国国家衰老研究所资助启动,整合了大规模多组学数据(基因组、转录组、表观基因组等),试图找到这些疾病共享的分子通路和潜在治疗靶点。

这是基础研究成果的集中发布,提供了可公开查询的数据资源和分子图谱。研究揭示了疾病相关的基因表达变化、表观遗传修饰和细胞类型特异性模式,为AI模型训练和药物靶点发现提供了数据基础。但这些是关联性发现,不是治疗方案。从分子图谱到有效药物,中间还有靶点验证、药物开发、临床试验等多个阶段。

**来源类型**：同行评审论文集(Nature系列) / 多中心研究联盟 / 可信度：高

![PsychAD studies map molecular mechanisms across major brain disorders](https://www.news-medical.net/image-handler/picture/2016/3/Artificially_Colored_MRI_Scan_Of_Human_Brain-Daisy_Daisy_a8c5d8bbbf824bc8932308e30187510f-620x480.jpg)

---

### 5. [Physical Activity Delays Ovarian Aging in Mice](https://lifespan.io/physical-activity-delays-ovarian-aging-in-mice/)

跑步机训练能延缓小鼠卵巢衰老,保留更多原始卵泡。研究团队发现这个效果由脂肪组织分泌的激素——脂联素(adiponectin)介导:运动提高脂联素水平,脂联素抑制mTOR信号通路,从而减缓卵泡的过度激活和消耗。缺乏脂联素的小鼠即使运动,保护效果也大幅减弱。

更进一步,研究者用AdipoRon(一种脂联素受体激动剂)处理小鼠,不运动也能达到类似效果:处理组小鼠卵泡储备更多,生育能力延长数月。在对照组小鼠几乎停止生育的年龄,AdipoRon处理组大多数仍在产崽。

这是动物实验,用的是小鼠模型。人类卵巢衰老的机制更复杂,AdipoRon在人体中的安全性和有效性尚未验证。当前不能据此推荐任何人用药物替代运动来延缓卵巢衰老或延长生育年限。这项工作揭示了运动-脂联素-mTOR这条通路在生殖衰老中的作用,为未来干预研究提供了方向。

**来源类型**：同行评审论文(Nature Aging) / 动物实验 / 可信度：高

![Physical Activity Delays Ovarian Aging in Mice](https://lifespan.io/wp-content/uploads/2026/09/Mouse-treadmill-262x187.jpg)

---

### 6. [An Entirely New Target for Fighting Senescence](https://lifespan.io/an-entirely-new-target-for-fighting-senescence/)

PTCHD4是一个几乎没出现在文献里的蛋白质,现在被发现与细胞衰老密切相关。研究者发现,当细胞受到DNA损伤或反复复制时,PTCHD4表达量会上升,并与衰老标志物p16同步出现在多种细胞和组织中。敲除PTCHD4的小鼠成纤维细胞衰老速度显著放缓:普通细胞传代8次就出现衰老特征,而PTCHD4缺失细胞要到14代才开始衰老。

活体实验更令人意外:不表达PTCHD4的小鼠自然寿命延长数月,不长白毛,对肺纤维化的抵抗力更强。机制研究显示PTCHD4通过激活AKT信号通路促进衰老,而非此前猜测的Hedgehog通路。

这是初步发现,PTCHD4的完整生物学功能尚不清楚。研究未报告PTCHD4缺失的小鼠是否有其他健康问题,也未开发针对PTCHD4的药物。从识别靶点到临床应用,中间还有靶点验证、药物筛选、安全性评估等多个阶段。但这项工作确实打开了一个全新的抗衰老靶点。

**来源类型**：基础研究论文 / 动物实验 / 可信度：中

![An Entirely New Target for Fighting Senescence](https://lifespan.io/wp-content/uploads/2026/09/Proteins-under-magnifying-glass-262x187.jpg)

---

### 7. [AI-Driven Neural Surrogates for In Silico Design of Cognitive-Affective Neuromodulation Targets](https://papers.cool/arxiv/2609.27729)

神经精神病学的目标不只是解码大脑活动,还要改变它——比如减轻负面情绪偏向或过度突出的记忆。研究者开发了一个AI驱动的"神经代理"框架:从fMRI快照中提取大脑表征,用深度生成模型(VDVAE和Versatile Diffusion)模拟表征变化,再预测这些变化对应的视觉刺激会带来什么感知效果——全程不需要物理刺激。

在36,000多个图像-fMRI观测数据上训练后,模型能从视觉皮层活动中重建图像(双向识别准确率0.79-0.88)。研究者用这个系统测试了"如果改变大脑表征,感知会如何变化":情绪效价从-0.61标准差移动到+1.03标准差,记忆度从-1.34移动到+1.45标准差。18名参与者的7200次人类评分试验中,情绪效价的变化方向与预测一致(16/18参与者),但记忆度评分未显示可靠变化。

这是概念验证研究,用的是静态大脑快照和离线生成模型。真实神经调控是动态过程,涉及实时反馈和脑区相互作用。当前方法无法预测长期效应或副作用,也未在临床神经调控设备上测试。这项工作提供了一种"上游"设计方法,在物理刺激之前先用计算模型测试候选表征改变,但离临床应用还很远。

**来源类型**：预印本(arXiv) / 计算建模+行为实验 / 可信度：中

---

### 8. [A generalizable structural brain MRI foundation model built through dual-priority federated pretraining](https://papers.cool/arxiv/2609.27611)

脑MRI基础模型通常需要汇集大量数据集中训练,但隐私和治理限制让数据汇集变得困难。研究者提出BrainFedFM,一个通过联邦学习(federated learning)预训练的结构脑MRI基础模型:数据留在原地,模型在42个站点上分布式训练,覆盖164,707个3D扫描。

BrainFedFM采用"双优先级"策略:局部使用空间优先级掩码(spatial-priority masking)强调重要解剖区域,全局使用站点优先级聚合(site-priority aggregation)让贡献度高的站点有更大权重。在20个下游数据集、17个分类/回归/分割任务上,BrainFedFM达到最佳性能(平均排名1.68,相比第二名提升50%),在分类和回归任务上尤其稳定,对代表性不足的人群也表现出鲁棒性。

这是技术验证,不是临床诊断工具。模型在多种任务上表现优秀,但具体疾病的诊断准确性、临床决策价值仍需在真实医疗场景中评估。这项工作证明了联邦学习可以在不汇集原始影像的情况下,从分布式数据中构建高质量的神经影像基础模型,为保护隐私的AI医疗研究提供了实用路径。

**来源类型**：预印本(arXiv) / 多中心联邦学习 / 可信度：中

---

### 9. [SynSeq: End-to-End SYNTAX Score Prediction from Coronary Angiography Videos](https://papers.cool/arxiv/2609.27696)

SYNTAX评分是评估冠状动脉病变严重程度、指导血运重建治疗的重要工具,但人工评估耗时且不同医生评分存在差异。研究者开发了SynSeq,直接从冠状动脉造影视频预测SYNTAX评分,无需手动标注病变位置。

SynSeq结合了针对性预处理和定制训练策略(零膨胀感知损失、线性目标缩放)。在公开的CardioSyntax数据集上,SynSeq显著超越此前最佳方法:R²提升0.55,预测偏差降低93.1%,在三位独立专家的标注上表现更一致。对于血运重建治疗建议,SynSeq的加权F1分数达到0.80,略低于专家间一致性。

这是回顾性数据集上的验证,不是前瞻性临床试验。模型在特定数据集上表现优秀,但在不同医院、不同造影设备、不同人群上的泛化能力尚未验证。AI辅助评分可以提高一致性、节省时间,但当前不能完全替代临床医生的综合判断。这项工作展示了视频级端到端预测的可行性,为冠脉病变自动评估提供了新思路。

**来源类型**：预印本(arXiv) / 回顾性数据集验证 / 可信度：中

---

### 10. [MolDesignBench: Evaluating LLM-based Agent for Scenario-grounded Molecular Design](https://papers.cool/arxiv/2609.27349)

大语言模型(LLM)驱动的AI代理能设计分子吗?现有基准测试过于简化,只关注明确、单一的约束和可行问题。研究者推出MolDesignBench,一个更贴近真实分子设计场景的基准:2000个生成和优化任务,结合隐含在设计叙述中的需求和明确的性质/官能团约束,包含不可行案例,需要有效使用17种专业化学工具。

多个前沿LLM在这个基准上表现不佳——最好的成功率仅约43%,在隐含约束推理、不可行性检测和工具推理上频繁失败。细粒度失败模式分析显示,隐含约束解释和不可行性检测是主要瓶颈。

这是AI能力评估,不是药物设计工具。基准测试暴露了当前LLM代理在分子设计任务上的明显短板,为未来研究指明方向。但通过基准测试不代表能设计出有效药物,分子设计涉及合成可行性、生物活性、毒性等多方面考量,AI代理还需要与化学家和生物学家协作。

**来源类型**：预印本(arXiv) / AI基准测试 / 可信度：中

---

## **📌 值得关注**

**[研究]** [Naked Mole Rat Hyaluronan Synthase 2 Improves Health in Mice But Doesn't Reduce Age-Related Hearing Loss](https://www.fightaging.org/archives/2026/09/naked-mole-rat-hyaluronan-synthase-2-improves-health-in-mice-but-doesnt-reduce-age-related-hearing-loss/) - 裸鼹鼠透明质酸合酶2改善小鼠健康但不减缓听力损失,不同抗衰老干预的作用机制存在差异

**[研究]** [Investigating Mechanisms by Which Mitochondrial Superoxide Promotes Longevity](https://www.fightaging.org/archives/2026/09/investigating-mechanisms-by-which-mitochondrial-superoxide-promotes-longevity/) - 线虫研究揭示轻度线粒体超氧化物通过激酶信号通路延长寿命的分子机制

**[研究]** [Frailty affects cognitive impairment differently in men and women with chronic kidney disease](https://medicalxpress.com/news/2026-09-frailty-affects-cognitive-impairment-differently.html) - 慢性肾病患者的虚弱对男性和女性认知障碍的影响存在性别差异

**[开源]** [MaastrichtU-CDS/FaceAge-Weekend-van-de-Wetenschap](https://github.com/MaastrichtU-CDS/FaceAge-Weekend-van-de-Wetenschap) - 开源工具:使用深度学习从人脸照片解码生物年龄,可用于衰老研究

**[研究]** [Benchmarking Active Spot Selection for Cost-Efficient Spatial Transcriptomics](https://papers.cool/arxiv/2609.27208) - 空间转录组学中主动学习策略在小预算下并未优于随机采样,评估指标影响策略排名

**[研究]** [An open benchmark for machine learning-based polymer property prediction](https://papers.cool/arxiv/2609.27036) - 开放聚合物性质预测基准PolyBench26,覆盖25万数据点,图模型表现最佳

---

## **🔮 AI生命科学趋势预测**

### 脂联素受体激动剂进入生殖衰老临床试验
- **预测时间**：2027年Q1-Q2
- **预测概率**：55%
- **预测依据**：今日新闻[Physical Activity Delays Ovarian Aging in Mice](https://lifespan.io/physical-activity-delays-ovarian-aging-in-mice/)显示AdipoRon在动物模型中显著延长生育期 + 生殖医学领域对延缓卵巢衰老的临床需求强烈,若安全性数据支持,小规模探索性临床试验可能快速启动

### 多模态脑影像基础模型实现跨医院部署
- **预测时间**：2026年Q4
- **预测概率**：65%
- **预测依据**：今日新闻[A generalizable structural brain MRI foundation model built through dual-priority federated pretraining](https://papers.cool/arxiv/2609.27611)证明联邦学习在脑影像基础模型上的可行性 + 医疗AI隐私合规压力持续上升,联邦学习方案将成为主流部署模式

### AI分子设计工具整合不可行性检测模块
- **预测时间**：2026年10-11月
- **预测概率**：70%
- **预测依据**：今日新闻[MolDesignBench: Evaluating LLM-based Agent for Scenario-grounded Molecular Design](https://papers.cool/arxiv/2609.27349)指出不可行性检测是主要瓶颈 + AI制药工具开发者通常快速响应基准测试暴露的短板,增加约束验证模块的技术难度不高

### 更年期蛋白质标志物纳入阿尔茨海默早筛流程
- **预测时间**：2027年Q1
- **预测概率**：50%
- **预测依据**：今日新闻[Menopause leaves a blood protein signature linked to brain aging and Alzheimer's risk](https://www.news-medical.net/news/20260923/Menopause-leaves-a-blood-protein-signature-linked-to-brain-aging-and-Alzheimere28099s-risk.aspx)识别出16种血液蛋白特征 + 血液标志物检测成本低、易推广,但需要更多前瞻性队列验证因果关系,时间线可能延后

### 冠脉造影AI评分系统获得首个监管批准
- **预测时间**：2027年Q2
- **预测概率**：60%
- **预测依据**：今日新闻[SynSeq: End-to-End SYNTAX Score Prediction from Coronary Angiography Videos](https://papers.cool/arxiv/2609.27696)显示AI评分接近专家一致性水平 + 心血管影像AI工具审批通道相对成熟,若前瞻性临床试验数据支持,监管批准可能在1年内实现