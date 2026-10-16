---
linkTitle: AI生命延续学日报
title: 'AI生命延续学日报 2026/10/16'
breadcrumbs: false
next: /2026-10/2026-10-16
description: '2026-10-16 AI生命延续学日报：APOE4 髓鞘损伤机制、阿尔茨海默治疗响应差异、AI 分子设计。包含 TOP10、前沿研究、开源项目及证据问答。'
cascade:
  type: docs
---

## **今日摘要**

```
MIT 用 CRISPR 找到 APOE4 破坏大脑髓鞘的关键机制，GSK3b 成为阿尔茨海默潜在新靶点。
AI 药物设计开始玩"分子跳跃"——MolHop 在 160 万个支架间导航，绕专利、探新化学空间。
今天阿尔茨海默研究扎堆，从机制到药物响应标志物，临床转化窗口正在打开。
```

## **🔥 今日焦点 TOP 10**

### 1. APOE4 髓鞘损伤研究锁定 Wnt 通路

**APOE4 损伤有了机制线索。** [APOE4 研究给出 Wnt 通路线索](https://www.genengnews.com/topics/translational-medicine/how-alzheimers-risk-gene-apoe4-disrupts-myelination/)。

想象神经元的电线外层绝缘皮开始剥落——这正是 APOE4 基因携带者大脑里正在发生的事。MIT Picower 研究所 Li-Huei Tsai 团队用全基因组 CRISPR 筛选，对人类细胞里每一个蛋白编码基因逐一敲除，系统找出了症结：Wnt 信号通路受到压制，导致本该为神经元"刷绝缘层"的少突胶质细胞（oligodendrocytes）把脂肪堆成液滴而非铺成髓鞘。团队在人类细胞培养物和阿尔茨海默小鼠模型中均验证，用 GSK3b 抑制剂恢复 Wnt 活性后，脂滴减少、髓鞘化回升。这是迄今最系统的 APOE4 髓鞘损伤机制解析，GSK3b 成为潜在药物靶点——但距离人体临床验证还有相当距离。论文发表于 *Cell Stem Cell*，原始数据已在 Open Science Framework 公开。

**来源类型：同行评审论文 / 证据阶段：细胞实验 + 动物模型 / 可信度：高**

![AI资讯图片](https://www.genengnews.com/wp-content/uploads/2026/10/Low-Res_Figure3B-wnt-akay-upscale-300x186.jpg)

---

### 2. 血液蛋白揭示阿尔茨海默治疗响应差异

**清斑块与保认知可能走不同路线。** [130 种蛋白的变化轨迹并不相同](https://longevity.technology/news/blood-clues-to-why-alzheimers-drug-results-vary/)。

每 25 微升血浆（约一滴），检测 130 种蛋白——华盛顿大学医学院团队用这个方案追踪了接受 lecanemab（抗淀粉样蛋白抗体疗法）的患者。结果出人意料：负责清除脑内淀粉样蛋白的蛋白标志物，和负责维持认知能力的蛋白标志物，走的完全是两条路线。这意味着"清除淀粉样蛋白"和"保住记忆"可能受不同生物机制控制，部分解释了为何同一种药在不同患者身上效果差异巨大。研究还发现，大脑来源的 tau 蛋白版本在区分治疗效果上远优于外周血中的 tau。目前尚不能用这些标志物在治疗前预测谁会受益，那才是临床最需要的答案。研究发表于《柳叶刀·神经病学》，检测平台由 Alamar Biosciences 提供（存在商业利益关联）。

**来源类型：同行评审论文（观察性纵向队列）/ 证据阶段：人体血液样本分析 / 可信度：中高**

![AI资讯图片](https://longevity.technology/wp-content/uploads/2026/10/blood-clues-to-why-alzheimers-drug-results-vary-hero-1200x800-1-1024x683.png)

---

### 3. MolHop 让 AI 跨越分子支架设计药物

**AI 在分子支架之间导航。** [MolHop 在分层支架空间中探索分子](https://papers.cool/arxiv/2610.19920)。

传统 AI 药物设计像在已知分子上"微调"——换几个原子、调几个键。MolHop 做的是完全不同的事：把约 160 万个商业分子的骨架（scaffold）组织成一张从粗到细的层级地图，让 AI Agent 通过强化学习在地图上导航，找到"骨架完全不同但功能相似"的候选分子。这对制药研发意义直接：绕开已有专利、探索更广阔的化学空间。MolHop-9B 在跨支架任务上超过了 GPT-5.6-sol、Claude-5-Opus 等基线模型。不过这是 arXiv 预印本，评测停留在标准基准数据集，还没有在真实药物管线中验证。

**来源类型：arXiv 预印本，未经同行评审 / 证据阶段：计算基准测试 / 可信度：中**

---

### 4. 线粒体药物团队获得百万美元里程碑奖

**线粒体团队获得里程碑奖。** [健康寿命竞赛公布线粒体团队进展](https://longevity.technology/news/xprize-hands-1m-to-a-mitochondrial-drug-team/)。

线粒体是细胞的"发电站"，随年龄衰退。Mighty Therapeutics 和华盛顿大学团队凭借 elamipretide（一种专门结合线粒体关键脂质的多肽）的初步试验数据，从 $1.01 亿 XPRIZE 健康寿命竞赛中拿到了 100 万美元里程碑奖，进入最终阶段。elamipretide 已于 2025 年 9 月获 FDA 批准用于罕见病 Barth 综合征——这是首个直接靶向线粒体的 FDA 批准疗法。接下来，团队将用这笔钱设计一项随机双盲安慰剂对照试验，测试该药物能否改善老年人的肌肉、认知和免疫功能。结果要等到 2029 年，现有"初步数据"细节尚未公开。

**来源类型：行业媒体报道 / 证据阶段：初步可行性数据 + 进入对照试验设计阶段 / 可信度：中**

![AI资讯图片](https://longevity.technology/wp-content/uploads/2026/10/uw-mighty-therapeutics-hero-1200x800-1-1024x683.png)

---

### 5. Reservoir 上线免疫细胞长期冻存服务

**今天的免疫细胞可以冻存。** [Reservoir 提供免疫细胞冻存服务](https://longevity.technology/news/cellino-team-launches-immune-cell-banking-service/)。

一次标准抽血，60 毫升血液，提取出 T 细胞、B 细胞、自然杀伤细胞等混合细胞群，在 -150°C 以下长期保存。这是 Cellino 团队今日上线的 Reservoir 服务背后的逻辑：免疫细胞会随年龄衰退，初始 T 细胞减少、基因突变克隆扩增，35 岁冻存的细胞和 65 岁的不是同一批。服务目前在波士顿、旧金山、洛杉矶、纽约四城通过合作诊所提供，运营方 Cell Harbor 依据 PHS Act Section 361 监管框架，属于"最低限度操作"，无需上市前审批。Cellino 此前已从 Khosla Ventures 等机构融资超 9600 万美元并获 ARPA-H 最高 2500 万美元资助。关键不确定性：冻存的细胞够不够未来细胞疗法的用量？扩增技术届时能否跟上？这些问题目前没有答案。该服务明确定位为"保存服务，而非诊断或治疗"。

**来源类型：官方发布 + 行业媒体报道 / 证据阶段：商业服务上线，无临床有效性数据 / 可信度：高（事实层面）；细胞未来价值不确定性高**

![AI资讯图片](https://longevity.technology/wp-content/uploads/2026/10/Reservoir-Founding-Team-2-1024x683.jpg)

---

### 6. ReproBAIT 评测 AI 复现生物工具的局限

**AI 复现复杂生物工具仍有限。** [ReproBAIT 检验生物工具复现能力](https://papers.cool/arxiv/2610.19810)。

一个没有联网权限的 AI 编程 Agent，只拿到训练数据、计算预算和对工具的简短描述，能否从头复现 ProteinMPNN（蛋白质逆向折叠）、RFdiffusion3（全原子生成扩散模型）这样的生物 AI 工具？ReproBAIT 评测框架给出了第一批数据：简单工具可以被相当程度地复现，复杂工具能力有限。研究者还发现了"记忆化"的中等程度证据——模型可能在预训练时已见过这些开源工具的代码，导致复现能力被高估。对制药和生物工具开发者的实际意义：在公开发布工具细节时，需要重新评估商业机密保护和双重用途管控策略。这是 arXiv 预印本，尚待同行评审。

**来源类型：arXiv 预印本 / 证据阶段：评测基准研究 / 可信度：中**

---

### 7. 脑 MRI 嵌入向量仍可能泄露患者身份

**嵌入向量并不等于匿名化。** [MRI 嵌入向量存在重新识别风险](https://papers.cool/arxiv/2610.20494)。

很多医疗 AI 研究为了保护隐私，会把 MRI 原图替换成模型生成的"嵌入向量"再共享。但这真的安全吗？这项研究测试了 5 种预训练脑部 MRI 编码器，结果令人不安：在 MIRIAD 数据集上，仅凭嵌入向量就能以高达 99% 的准确率将患者样本重新配对（跨时间点连接同一个人）；在 OASIS-2 数据集上超过 90%。更进一步，从嵌入向量中预测性别的平衡准确率高达 90-95%。结论清晰：用嵌入向量替代原始图像，本身不足以保证匿名性。这对生物医学数据共享和隐私合规有直接影响。预印本已提交，尚待同行评审。

**来源类型：arXiv 预印本 / 证据阶段：实验性隐私攻击评测，使用公开数据集 / 可信度：中高**

---

### 8. 神经保护酶成为认知衰退研究新线索

**神经保护酶出现研究线索。** [相关报道介绍神经保护酶研究](https://www.news-medical.net/news/20261015/A-protective-brain-enzyme-may-counteract-aging-associated-cognitive-decline.aspx)。

Mass General Brigham、哈佛干细胞研究所和 Broad Institute 联合团队在 *Nature Neuroscience* 发表研究，发现一种"衰老敏感的分泌型磷脂酶"（secreted phospholipase）具有神经保护作用，可能帮助对抗年龄相关的认知衰退。论文标题直接写明这是"认知韧性"的生物学基础。目前素材仅提供了论文摘要层面的信息，具体实验对象（细胞/动物/人体）和效应大小有待查阅原文。*Nature Neuroscience* 为顶级同行评审期刊，权威性高；但"may counteract"措辞本身说明因果关系尚需进一步验证。

**来源类型：同行评审论文（摘要报道）/ 证据阶段：待核实（期刊权威性高）/ 可信度：中高**

![AI资讯图片](https://www.news-medical.net/image-handler/picture/2018/7/shutterstock_1028141632_649cad8889c647fc8d0bd83bf7503e08-620x480.jpg)

---

### 9. 脑功能 EEG 软件进入得州影像检查

**脑功能软件进入影像检查。** [得州影像机构引入脑功能测试](https://longevity.technology/news/texas-imaging-chain-adds-a-brain-function-test/)。

MRI 和 CT 能看到大脑的"结构"，却无法直接告诉你它运作得怎样。得克萨斯州影像连锁 DICOT 与多伦多 VoxNeuro 合作，将后者的认知功能神经影像软件（cfNI）整合进常规检查。这套系统基于 EEG（脑电图）记录事件相关电位，患者完成一组标准化任务（注意力、记忆等），软件输出数字化评分，供医生结合影像结果判断。VoxNeuro 的软件持有 FDA 510(k) 许可（K253015），适用于 18-70 岁人群，明确定位为辅助工具而非诊断设备。值得注意的是：发布通告里没有任何关于"cfNI 改变了多少治疗方案"的结果数据，临床价值有待研究支撑。

**来源类型：行业媒体报道 / 证据阶段：商业服务上线，FDA 已获许可，临床结果数据缺失 / 可信度：中**

![AI资讯图片](https://longevity.technology/wp-content/uploads/2026/10/texas-imaging-chain-adds-a-brain-function-test-hero-1200x800-2-1024x683.jpg)

---

### 10. 电子病历模型改善远期疾病时间预测

**远期预测改善，短期仍有局限。** [图增强模型评估疾病轨迹预测](https://papers.cool/arxiv/2610.20502)。

从数十万份真实住院记录（MIMIC-IV 数据集）里，能学出疾病如何一步步演变吗？这项研究用图神经网络提取患者的"连续住院转变模式"，再结合时序 Transformer 预测疾病进展时间。针对 730 天以上的远期事件，时间预测误差从基线减少约 59 天。这类工具如果走向临床，可以辅助衰老相关慢性病的进展风险分层。但研究也坦诚指出：在宏观 C-index 和整体 Brier 分数上，该方法未能优于纯病史离散风险模型，且短期（730 天内）时间预测反而变差。这是 arXiv 预印本，MIMIC-IV 是研究级数据集，与真实临床部署存在差距。

**来源类型：arXiv 预印本 / 证据阶段：回顾性计算研究，公开数据集验证 / 可信度：中**

## **🧪 前沿研究**

### STING 信号通路或可预防骨质疏松

**骨质疏松靶点出现新线索。**

[STING 信号通路或可预防骨质疏松](https://www.news-medical.net/news/20261015/Targeting-the-STING-pathway-could-help-prevent-osteoporosis.aspx)：研究发现靶向 STING（细胞内炎症信号通路）可能干预骨髓微环境的衰老性改变，为骨质疏松防治提供新靶点方向；素材摘要信息有限，具体实验阶段待核实。

## **⌘ 开源 TOP 项目**

### anupbagale/brain-age-prediction-ixi：脑年龄预测参考实现

**从 MRI 估算脑年龄。**

[脑年龄预测开源项目 brain-age-prediction-ixi](https://github.com/anupbagale/brain-age-prediction-ixi)：用 3D CNN 从 T1 MRI 预测生物脑年龄，含偏差校正和扫描仪分析，基于 IXI 公开数据集，可作为脑年龄研究的入门参考实现。

---

### sudo-pranshu/ParkinSense：可穿戴震颤研究方案

**可穿戴震颤研究参考。**

[帕金森症持续监测可穿戴平台 ParkinSense](https://github.com/sudo-pranshu/ParkinSense)：基于 nRF52840 开发板，提取震颤数字生物标志物，用于帕金森早期检测；开源项目，目前星标数极低，适合研究者参考硬件方案。

## **❓ 相关问题**

### 血液蛋白能预测谁适合使用 lecanemab 吗？

**目前不能据此选择用药。**

[治疗响应研究讨论了血液蛋白变化](https://longevity.technology/news/blood-clues-to-why-alzheimers-drug-results-vary/)。

这篇报道容易被误读为"血液检测可以预测谁适合用 lecanemab"。一手来源是《柳叶刀·神经病学》观察性队列研究，样本来自单一医学中心，分析平台由利益相关企业 Alamar Biosciences 提供。研究实际做到的是：描述 130 种蛋白在治疗过程中的变化轨迹，发现淀粉样蛋白清除与认知保留由不同生物过程驱动。**目前不能据此回答"谁应该用这个药"**——预测性生物标志物需要独立的前瞻性验证研究，那是下一步，还没做。
