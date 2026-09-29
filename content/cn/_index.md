---
linkTitle: AI生命延续学日报
title: AI生命延续学日报 2026/9/29
breadcrumbs: false
next: /2026-09/2026-09-28
description: "每日聚焦 AI + 长寿 / 延寿 / 衰老 / 生物年龄 / 年轻化等生命延续学前沿，追踪衰老机制、延寿干预与相关药物、工具、平台、模型。"
cascade:
  type: docs
---

## **今日摘要**

```
抗 PD-L1 抗体脑内注射让阿尔茨海默小鼠神经元保住 40%，关键是挡住 T 细胞入脑，tau 蛋白没清也管用。

血液 SASP Score 用深度学习整合 38 种蛋白量化全身衰老负担,高分人群死亡风险高 1.4 倍,抽血就能测。

阿尔茨海默不一定要清 tau,心衰可能靠石榴化合物改善 80%,抗衰老思路正在换轨道。
```



## ⚡ 快速导航

- [📰 今日 AI 资讯](#今日ai资讯) - 最新动态速览



> 💡 **提示**：想体验文中提到的 GPT、Claude、Gemini、Codex、Cursor、Grok 等工具，但不想折腾海外支付、注册、额度和教程？来 [**爱窝啦 Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) 按场景选择官方号、镜像、Cursor 方案或中转入口，官网自助下单，卡密秒发。

## **今日 AI 生命科学资讯**

### **👀 只有一句话**
抗体阻断脑内免疫检查点可恢复小胶质细胞功能并减少神经退行

### **🔑 3 个关键词**
#衰老生物标志物 #神经退行性疾病 #表观遗传时钟

---

## **🔥 重磅 TOP 10**

### 1. [血液 SASP Score：用深度学习量化全身衰老细胞负担](https://lifespan.io/a-new-metric-for-overall-senescent-cell-burden/)

以往只能单独测某个衰老标志物。现在研究团队用深度学习整合 38 种血液蛋白，开发出 SASP Score——一个能反映全身衰老细胞分泌总负担的生物标志物。基于英国生物样本库 5 万人数据验证，高 SASP Score 人群死亡风险提高 1.4 倍，慢性肾病、痴呆、中风风险明显升高。运动干预 18 个月后，SASP Score 不再上升，而对照组持续恶化。

这是首个用 AI 整合非线性关系、跨平台通用的衰老细胞负担量化工具。抽一管血就能评估，可用于快速验证抗衰老干预效果。但它只反映全身性衰老负担，无法定位具体器官病变，需与其他生物学时钟配合使用。

**来源类型**：研究机构发布 / 动物实验 + 人群观察性研究 / 可信度：中

![A New Metric for Overall Senescent Cell Burden](https://lifespan.io/wp-content/uploads/2026/09/Bad-blood-vessel-proteins-262x187.png)

---

### 2. [抗 PD-L1 抗体直接注射脑内可恢复小胶质细胞功能](https://www.fightaging.org/archives/2026/09/pd-l1-blockade-in-the-brain-restores-measures-of-glial-cell-function/)

PD-L1 是癌细胞用来逃避免疫的"刹车"蛋白，现在发现老化的脑细胞也会用它。研究团队给阿尔茨海默小鼠脑内注射抗 PD-L1 抗体，7 天后小胶质细胞活性恢复，神经元钙活动正常化，淀粉样蛋白斑块减少，效果比传统静脉注射更直接。

关键在于直接作用于脑内。以往静脉注射需绕过血脑屏障，效果有限。但现在只在小鼠身上验证，脑内注射给药在人体的安全性和可行性尚未确认。另外，研究未测试是否清除了衰老细胞，机制可能不止激活免疫清除一种。

**来源类型**：研究报告 / 动物实验（5xFAD 小鼠模型）/ 可信度：中

---

### 3. [methylCIPHER：集成多种表观遗传时钟的开源 R 包](https://github.com/HigginsChenLab/methylCIPHER)

表观遗传时钟种类繁多，研究者要用哪个、怎么算，一直是痛点。methylCIPHER 一次性集成了 PC clocks、SystemsAge、CausalAge、DunedinPACE 等前沿算法，用户只需输入甲基化数据，就能批量计算多种生物学年龄指标。代码已开源，26 个 star 说明已有研究者在用。

这不是新时钟，而是工具箱。它降低了表观遗传时钟的使用门槛，但不意味着这些时钟本身的局限消失了——它们各自适用人群、预测目标、训练数据集都不同，用户仍需判断哪个时钟适合自己的研究问题。

**来源类型**：开源项目 / 工具发布 / 可信度：高（代码可审查）

---

### 4. [STABLE-BAG：用 SHAP 解释脑年龄差异的稳定性框架](https://github.com/sisinflab/STABLE-BAG)

脑年龄差（Brain Age Gap）是 AI 预测的大脑年龄与实际年龄的差值，能反映大脑健康。但以往模型只给出一个数字，看不出哪些脑区贡献了这个差异。STABLE-BAG 用 SHAP（可解释 AI 方法）拆解脑年龄差，让研究者看到哪些脑区老得快、哪些还年轻，并确保这种解释在不同数据集上稳定可复现。

这是 AI + 脑衰老的可解释性进展。过去"黑盒"模型让医生不敢用，现在能看到具体哪些区域有问题，更接近临床需求。但代码刚发布（1 star），还需要更多独立验证。

**来源类型**：开源项目 / 方法论工具 / 可信度：中（需进一步验证）

---

### 5. [新抗体疗法阻断 T 细胞入脑，减少阿尔茨海默小鼠 40% 组织损失](https://www.genengnews.com/topics/translational-medicine/antibody-blocks-t-cell-infiltration-and-limits-neurodegeneration-in-alzheimers-mice/)

阿尔茨海默病脑内 tau 蛋白堆积后，T 细胞会从外周淋巴结进入大脑，加速神经元死亡。华盛顿大学团队给小鼠注射抗 CXCR3 抗体（阻断 T 细胞入脑的"导航信号"），3.5 个月后脑内 T 细胞减少一半，记忆中枢保留 40% 更多组织，记忆测试表现更好——即使 tau 水平没变。

关键发现：不用清除 tau，只阻断 T 细胞入脑就能减少损伤。而且抗体不需要穿过血脑屏障，这意味着现有多发性硬化症的 T 细胞疗法可能直接用于阿尔茨海默。但目前只在小鼠验证，人体安全性未知。

**来源类型**：同行评审论文（Neuron）/ 动物实验 / 可信度：高

---

### 6. [AI 工具识别造血干细胞衰老模式](https://www.news-medical.net/news/20260928/New-artificial-intelligence-tool-identifies-aging-patterns-in-hematopoietic-stem-cells.aspx)

造血干细胞负责产生所有血细胞，但随年龄增长功能下降，导致贫血、免疫力降低。研究团队开发 AI 工具分析造血干细胞的衰老模式，能识别哪些细胞老得快、哪些还保持活力。这为理解血液系统衰老提供了新视角。

目前报道信息有限，未说明 AI 用了什么数据、准确率多高、是否已开源。如果只是初步概念验证，距离临床应用还很远。需要更多细节才能判断实用价值。

**来源类型**：新闻报道 / 研究阶段未明 / 可信度：低（信息不足）

---

### 7. [石榴提取物改善心衰模型心脏功能达 80%](https://www.sciencedaily.com/releases/2026/09/260925093157.htm)

吃石榴、核桃、浆果后，身体会产生一种叫 Urolithin A 的化合物。动物实验显示，它能让僵硬的心脏组织放松，减少疤痕和异常增大，改善心衰指标最高达 80%。在工程化人类心脏组织上也看到了类似效果。

这是针对"舒张功能障碍型心衰"——一种难治疗的心衰类型。Urolithin A 已在线粒体修复研究中出现多次，这次是首次在心衰模型中看到如此大幅度改善。但仍是动物实验 + 体外组织，人体剂量、长期安全性未知。

**来源类型**：研究机构发布 / 动物实验 + 体外组织 / 可信度：中

---

### 8. [长寿运动平台：生物年龄计算器 + 公开排行榜](https://github.com/nopara73/LongevityWorldCup)

LongevityWorldCup 是一个开源的长寿运动平台，提供生物年龄计算器、运动员档案和公开排行榜。用户可以输入健康数据，计算自己的生物年龄，并与其他人比较。26 个 star 显示已有小规模社区在用。

这是"长寿竞技化"的尝试——把衰老逆转变成可量化、可比较的运动。但生物年龄计算器的准确性取决于背后用的是哪种时钟，平台未说明。如果只是简单问卷估算，参考价值有限。

**来源类型**：开源项目 / 社区工具 / 可信度：中（需核查算法）

---

### 9. [癌细胞选择性删除 Y 染色体片段促进肿瘤生长](https://www.news-medical.net/news/20260928/Cancer-cells-erase-sections-of-Y-chromosome-to-trigger-tumor-growth-in-men.aspx)

男性癌细胞会选择性删除 Y 染色体上富含基因的区域，触发一系列反应促进肿瘤生长。这解释了为什么男性某些癌症发病率更高。这不是随机丢失，而是癌细胞的"主动策略"。

Y 染色体丢失在老年男性中很常见，以往认为是衰老副产物。现在发现癌细胞会利用这一点。但报道未说明是哪些癌症、删除哪些基因、能否逆转。如果能找到关键基因，可能开发出针对男性癌症的新疗法。

**来源类型**：新闻报道 / 研究阶段未明 / 可信度：中

---

### 10. [欧盟建议 35 岁起定期心脏检查](https://medicalxpress.com/news/2026-09-eu-regular-heart-onward.html)

欧盟周一建议 35 岁以下人群至少做一次心脏病筛查，35 岁及以上定期检查。这是政策层面对心血管疾病年轻化的回应。心血管疾病是全球第一死因，早筛可以发现高危人群、提前干预。

这不是新技术，而是公共卫生政策。重点是"35 岁"这个节点——以往认为心脏病是老年病，现在提前了。但报道未说明具体检查项目、频率、如何覆盖低收入人群。

**来源类型**：政策公告 / 公共卫生建议 / 可信度：高

---

## **📌 值得关注**

**[研究]** [中风后非损伤区脑组织也出现加速衰老](https://www.news-medical.net/news/20260928/Understanding-how-brain-aging-outside-stroke-injury-zones-affects-aphasia.aspx) - 中风不只伤直接受损区域，周边区域也会加速老化，影响失语症恢复

**[研究]** [DNA 酶切过程首次被实时观测](https://www.genengnews.com/topics/omics/scientists-observe-enzymes-breaking-down-dna-in-real-time/) - 日本团队用高速原子力显微镜看到酶如何找到并切断 DNA，揭示 DNA 结构影响其被降解的机制

**[研究]** [老年人大麻使用障碍上升](https://www.news-medical.net/news/20260928/Study-finds-rising-cannabis-use-disorder-among-older-adults.aspx) - 美国老年人大麻使用越来越普遍,但成瘾风险研究不足

**[工具]** [ROGEN 项目：甲基化时钟 + 长寿变异注释工具集](https://github.com/IBAR-ROGEN/Aging) - 整合甲基化衰老时钟、长寿相关变异注释、等位基因频率比对的生物信息学工具，1 star 刚发布

---

## **🔎 值得细看**

### [抗体阻断 T 细胞入脑：不清除 tau 也能保护神经元](https://www.genengnews.com/topics/translational-medicine/antibody-blocks-t-cell-infiltration-and-limits-neurodegeneration-in-alzheimers-mice/)

阿尔茨海默研究的主流逻辑是"清除 tau 蛋白 → 保护神经元"。但华盛顿大学这项研究打破了这个逻辑：小鼠脑内 tau 水平没变，神经元却保住了 40%。原因是 T 细胞入脑后会攻击神经元，阻断它们入脑的路径（CXCR3）就能减少损伤。这说明 tau 本身可能不是直接杀手，免疫过度反应才是。论文发表在 Neuron，证据扎实。但小鼠模型不能完全代表人类阿尔茨海默，人体 T 细胞入脑机制可能更复杂。

**来源类型**：同行评审论文（Neuron）/ 动物实验 / 可信度：高

---

## **🔮 AI生命科学趋势预测**

### 抗衰老药物临床试验进入"组合疗法"时代
- **预测时间**：2026 年 Q4
- **预测概率**：70%
- **预测依据**：今日新闻显示多个靶点（PD-L1、CXCR3、SASP）在动物实验中有效，但单一疗法效果有限。根据癌症免疫治疗的发展路径，组合疗法通常在单药验证后 1-2 年内启动临床试验。

### 表观遗传时钟成为抗衰老药物试验的标准终点指标
- **预测时间**：2027 年 Q1
- **预测概率**：75%
- **预测依据**：今日新闻[methylCIPHER 开源](https://github.com/HigginsChenLab/methylCIPHER) + SASP Score 验证成功，显示表观遗传时钟工具日趋成熟。FDA 已在讨论将生物学年龄作为药物审批的替代终点。

### 脑内直接给药技术突破血脑屏障难题
- **预测时间**：2027 年 Q1
- **预测概率**：60%
- **预测依据**：今日新闻[抗 PD-L1 抗体脑内注射](https://www.fightaging.org/archives/2026/09/pd-l1-blockade-in-the-brain-restores-measures-of-glial-cell-function/)效果显著，但脑内注射不现实。纳米载体、聚焦超声等技术已在多个实验室验证，可能在未来半年内看到首个人体试验。

### AI 衰老生物标志物平台整合进主流体检
- **预测时间**：2027 年 Q2
- **预测概率**：65%
- **预测依据**：今日新闻[SASP Score](https://lifespan.io/a-new-metric-for-overall-senescent-cell-burden/)只需抽血即可检测，成本低、易推广。结合欧盟 35 岁定期心脏检查政策，预计商业体检机构会快速跟进。

---

## **📎 今日可引用要点**

**事实结论**：华盛顿大学研究显示，用抗 CXCR3 抗体阻断 T 细胞入脑后,阿尔茨海默小鼠记忆中枢保留 40% 更多组织,即使 tau 蛋白水平未改变。  
**原始来源**：[Antibody Blocks T Cell Infiltration and Limits Neurodegeneration in Alzheimer's Mice](https://www.genengnews.com/topics/translational-medicine/antibody-blocks-t-cell-infiltration-and-limits-neurodegeneration-in-alzheimers-mice/)  
**证据边界**：研究对象为 5xFAD 转基因小鼠模型,治疗周期 3.5 个月;人体中 T 细胞入脑机制可能更复杂,安全性和有效性尚未验证。

**事实结论**：基于英国生物样本库 5 万人数据开发的 SASP Score 生物标志物显示,高分人群全因死亡风险比低分人群高 1.4 倍,慢性肾病、痴呆、中风风险显著升高。  
**原始来源**：[A New Metric for Overall Senescent Cell Burden](https://lifespan.io/a-new-metric-for-overall-senescent-cell-burden/)  
**证据边界**：这是观察性研究,只能证明相关性而非因果关系;SASP Score 只反映全身衰老细胞分泌负担,无法定位具体器官病变或预测特定疾病类型。

**事实结论**：石榴提取物 Urolithin A 在动物心衰模型中改善心脏舒张功能指标最高达 80%,并在工程化人类心脏组织上观察到类似效果。  
**原始来源**：[Pomegranate compound improves heart function by up to 80% in study](https://www.sciencedaily.com/releases/2026/09/260925093157.htm)  
**证据边界**：证据来自动物实验和体外工程组织,人体有效剂量、长期安全性、是否能从饮食中摄取足够量均未确认。