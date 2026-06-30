---
linkTitle: AI生命延续学日报
title: AI生命延续学日报 2026/6/30
breadcrumbs: false
next: /2026-06/2026-06-30
description: "每日聚焦 AI + 长寿 / 延寿 / 衰老 / 生物年龄 / 年轻化等生命延续学前沿，追踪衰老机制、延寿干预与相关药物、工具、平台、模型。"
cascade:
  type: docs
---

## **今日摘要**

```
人类细胞里藏着一段灵长类专属的衰老加速RNA，敲掉它细胞就老得更慢。
年轻人生物年龄"跑偏"、神经退行预测、量子算药，今天的论文扎堆往同一个方向指。
衰老研究正在从描述走向干预，做这个赛道的团队，可以开始盯靶点了。
```



## ⚡ 快速导航

- [📰 今日 AI 资讯](#今日ai资讯) - 最新动态速览



> 💡 **提示**：想体验文中提到的 GPT、Claude、Gemini、Codex、Cursor、Grok 等工具，但不想折腾海外支付、注册、额度和教程？来 [**爱窝啦 Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) 按场景选择官方号、镜像、Cursor 方案或中转入口，官网自助下单，卡密秒发。

## **今日 AI 生命科学资讯**

### **👀 只有一句话**
年轻人正在以比老一代更快的速度生物老化——而科学家终于找到了一条隐藏在细胞深处、只有灵长类才有的"加速衰老开关"。

### **🔑 3 个关键词**
#生物衰老 #神经退行性疾病AI #量子计算制药

---

## **🔥 重磅 TOP 10**

**1. [年轻人癌症高发，原来是生物年龄"跑快了"](https://www.news-medical.net/news/20260629/Faster-biological-aging-may-help-explain-rising-cancer-rates-in-younger-adults.aspx)**

30多岁确诊癌症，不是"运气差"——新研究发现，后出生的年代群体普遍存在生物年龄加速老化的现象（用"系统性年龄偏差时钟"测量），而这种加速与早发肺癌、胃肠道癌、子宫癌的风险显著挂钩。换句话说：日历年龄相同，但有些人的细胞已经"老"了一个代际。这不是危言耸听，而是测量工具终于够精准了。

![图片](https://www.news-medical.net/images/news/ImageForNews_841273_17827861818953602.jpg)

---

**2. [发现"灵长类专属衰老开关"：一段非编码RNA，只有猴子和人才有](https://lifespan.io/how-a-primate-specific-rna-strand-worsens-senescence/)**

小鼠实验里永远找不到这个东西——研究人员在人类和灵长类体内发现了一段叫 LINC01021 的长非编码RNA（不编码蛋白质，但调控基因表达），它在7种组织中随年龄显著上升，强制激活它会让细胞提前进入"僵尸状态"（细胞衰老），敲掉它则细胞衰老明显减缓。机制路径：LINC01021 → 耗尽稳定RNA的蛋白 DAZAP1 → RBMX 崩溃 → P53 飙升 → 衰老。人源化小鼠验证了体内效果。这是衰老研究里罕见的"人类特有靶点"，未来mRNA或基因疗法或许可以直接干预。

![图片](https://lifespan.io/wp-content/uploads/2026/06/Monkeys-and-people-262x187.jpg)

---

**3. [用量子计算+机器学习算蛋白质-药物结合能，成本比 IBM Quantum 方案低一大截](https://papers.cool/arxiv/2606.30551)**

这套方案实实在在跑了 SARS-CoV-2 主蛋白酶和 FDA 批准的抗病毒药 Amantadine。核心创新：把受限玻尔兹曼机（RBM，一种生成式 ML 模型）嵌入量子化学计算流程，同时换掉了计算复杂度更高的参数初始化方式。结果：在模拟器上以更少的算力完成了同等精度的药物结合能计算。量子计算制药距离真正落地还远，但"更省钱地算清楚电子结构"这一步，今天迈出去了。

---

**4. [ENC-ODE：用神经微分方程预测阿尔茨海默病生物标志物的变化轨迹](https://papers.cool/arxiv/2606.30398)**

临床数据稀疏、随访时间不规律——这是神经退行性疾病研究的两大噩梦。ENC-ODE 用连续时间的神经常微分方程（Neural ODE）来建模临床事件，不压缩历史信息，而是用注意力机制对不同时间点的事件加权聚合。在 ADNI（阿尔茨海默病神经影像倡议）数据集上，性能超过主流序列模型。代码已开源：https://github.com/JardinDelSol/enc-ode，做认知衰退预测研究的值得拉下来跑一跑。

---

**5. [青光眼视野变化预测，终于从"给一个答案"进化到"给一个概率分布"](https://papers.cool/arxiv/2606.30417)**

同一个青光眼患者，下次复查视野会变成什么样？传统模型给你一个数字，这个数字可能完全错。新研究用扩散模型（Diffusion Model）来生成"可能的未来视野分布"，而不是单点预测——结果在两个独立队列上都做到了更好的校准度。对眼科AI来说，这是从"我告诉你答案"到"我告诉你不确定性在哪里"的重要一跃。个性化治疗计划需要的正是这种带置信区间的预测。

---

**6. [BrainJanus：第一个把大脑信号、视觉和语言统一在一个模型里的框架](https://papers.cool/arxiv/2606.30319)**

以前脑信号解码（把脑电/fMRI翻译成图像或文字）和编码（把图像/文字转成大脑预测信号）是两套独立系统。BrainJanus 用一个统一的自回归框架把这四件事（图像→大脑、文字→大脑、大脑→图像、大脑→文字）全装进去了，还保留了可解释的生物拓扑结构，并展示了零样本泛化能力。脑机接口的下一步，不只是"读出脑信号"，而是"和大脑双向对话"。

---

**7. [血液代谢组学：一管血，看透你的生活方式如何影响认知老化轨迹](https://www.news-medical.net/news/20260629/Blood-metabolism-maps-how-lifestyle-tracks-function-in-cognitive-aging.aspx)**

研究横跨认知正常（CN）、轻度认知损伤（MCI）到阿尔茨海默病（AD）三个阶段，用通路级血液代谢组学（分析血液里的代谢产物如何协同变化）找到了饮食和运动相关的代谢信号——能量代谢、氨基酸、脂质、炎症、氧化应激和肠道微生物相关通路都榜上有名。这些信号与体能、认知和日常功能表现直接挂钩。距离"一管血预测你还有几年认知健康期"，又近了一步。

![图片](https://www.news-medical.net/images/news/ImageForNews_841275_17827899358872133.jpg)

---

**8. [细胞衰老与"干细胞性"之间的爱恨纠葛，终于有人系统梳理了](https://www.news-medical.net/news/20260629/Scientists-map-how-cellular-senescence-and-stemness-interact-in-disease.aspx)**

细胞衰老（变成"僵尸细胞"，停止分裂但不死）和干细胞性（细胞保持自我更新和分化能力）——这两者听起来是对立的，但新综述揭示它们的关系复杂得多：某些情境下衰老促进干细胞激活，另一些情境下又抑制组织再生。搞清楚这个动态关系，是癌症、纤维化、老年疾病治疗策略的基础。发表在《Aging》杂志第18卷，做衰老研究的必读。

![图片](https://www.news-medical.net/image-handler/picture/2019/5/shutterstock_499282837_f18bafe030744de991560feceed98d20-620x480.jpg)

---

**9. [脑MRI配准新框架 DrivenMorph：用"驱动力"概念让深度学习解释得通了](https://papers.cool/arxiv/2606.30183)**

医学影像配准（把不同时间或不同模态的脑部图像精准对齐）一直有个痛点：深度学习跑得准但说不清为什么。DrivenMorph 借鉴了经典的 Demons 算法思路，引入局部差异建模作为"物理驱动力"，让形变过程有了可解释的力学依据。在多个3D脑MRI数据集上超越了现有方法，还把差异建模和形变解耦，方便模块化调整。神经退行性疾病的纵向追踪，需要大量这类精准配准。

---

**10. [DNA语言模型：transformer预训练那么贵，到底值不值？](https://papers.cool/arxiv/2606.30140)**

DNABERT2 这类基因组 transformer 模型要预训练好几周，算力烧得心疼。这项研究系统评估了三件事：重度预训练对下游任务到底带来多少提升？BPE 分词（把DNA序列切块的方式）对基因组任务合不合适？结果还在 peer review 中，但这个问题本身就很关键——AI制药和基因组学研究现在砸了大量资源在基础模型上，有没有人算过ROI？这篇是难得的"反向审视"。

---

## **📌 值得关注**

**[研究]** [Arc蛋白如何推动阿尔茨海默病的Tau蛋白扩散](https://www.news-medical.net/news/20260629/Scientists-discover-how-Arc-protein-spreads-Alzheimers-brain-pathology.aspx) - 搞清楚毒性Tau的传播机制，是开发"阻断扩散"疗法的前提，值得持续关注

**[研究]** [新型病毒模型在不用毒素的情况下复现帕金森症状](https://www.news-medical.net/news/20260629/New-viral-model-triggers-Parkinsons-symptoms-without-using-toxins.aspx) - 更接近真实病理的动物模型，意味着未来药物筛选结果更可信

**[研究]** [脑肿瘤分割的不确定性建模框架SIUM](https://papers.cool/arxiv/2606.30374) - 缺失某种MRI模态时还能给出可靠分割结果，临床场景中这个能力极其实用，代码已开源

**[开源]** [IBAR-ROGEN/Aging：甲基化衰老时钟+长寿变异注释工具集](https://github.com/IBAR-ROGEN/Aging) - 做基因组衰老研究的实用工具包，虽然 star 数还少，但功能覆盖很全

**[临床]** [出院后新开镇静剂处方显著增加老年人跌倒风险](https://www.news-medical.net/news/20260629/New-sedative-prescriptions-increase-fall-risks-for-discharged-older-adults.aspx) - 老年医疗的真实痛点；AI辅助用药审查在这个场景有明确价值

---

## **😄 AI生命科学趣闻**

### [只有人和猴子才有这段RNA，科学家用人源化小鼠证明它会让你"老得更快"](https://lifespan.io/how-a-primate-specific-rna-strand-worsens-senescence/)

今天最离谱的研究：科学家费尽周折做了个"装了人类基因的小鼠"，就为了证明人类自带一段会加速衰老的 RNA——这段 RNA 在老鼠身上根本不存在。结论？这只小鼠比普通小鼠更早变得虚弱、爪力更差、炎症更重。网友可能的反应："所以进化给了我们更大的脑子，同时附赠了一个提前老化的定时炸弹？" 研究者自己也承认：小鼠不是人，有些让我们变老的东西，恰好是让我们成为"人"的东西。

![图片](https://lifespan.io/wp-content/uploads/2026/06/Monkeys-and-people-262x187.jpg)

---

## **🔮 AI生命科学趋势预测**

### 生物衰老时钟进入临床验证加速期
- **预测时间**：2026年Q3
- **预测概率**：75%
- **预测依据**：今日新闻[年轻人生物老化加速与早发癌症相关](https://www.news-medical.net/news/20260629/Faster-biological-aging-may-help-explain-rising-cancer-rates-in-younger-adults.aspx) + [血液代谢组学追踪认知老化](https://www.news-medical.net/news/20260629/Blood-metabolism-maps-how-lifestyle-tracks-function-in-cognitive-aging.aspx)。多个团队正在用不同维度（甲基化、代谢组、蛋白组）测量生物年龄，今年内很可能出现多指标融合的标准化临床评估方案。

### LINC01021 等灵长类特异lncRNA进入靶向干预早期研究
- **预测时间**：2026年Q3-Q4
- **预测概率**：55%
- **预测依据**：今日新闻[LINC01021加速灵长类衰老的机制研究](https://lifespan.io/how-a-primate-specific-rna-strand-worsens-senescence/)。人源化小鼠模型已验证体内效果，mRNA疗法和反义寡核苷酸技术成熟度足够，预计会有团队启动干预设计的早期实验。

### 神经退行性疾病AI预测工具走向前瞻性临床试验
- **预测时间**：2026年Q4
- **预测概率**：65%
- **预测依据**：今日论文[ENC-ODE预测阿尔茨海默生物标志物演变](https://papers.cool/arxiv/2606.30398) + [青光眼视野扩散模型预测](https://papers.cool/arxiv/2606.30417)。AI预测工具从回顾性验证转向前瞻性临床嵌入，已有机构在排队；模型开源加速了这一转化进程。

### 量子-经典混合计算在药物结合能计算上出现商业化案例
- **预测时间**：2026年Q4
- **预测概率**：50%
- **预测依据**：今日论文[量子ML混合流程计算蛋白质-配体结合能](https://papers.cool/arxiv/2606.30551)。该团队已在模拟器上跑通工业级蛋白质系统，下一步是真实量子硬件验证；IBM、Fujitsu等均有商业化动机推动落地。

---

## **❓ 相关问题**

### 哪里可以获取 AI+生物衰老/神经退行性疾病/量子计算制药 的最新资讯？

今日 AI 生命科学领域的热点包括：生物衰老时钟与早发癌症的关联研究、灵长类特异性衰老 RNA 靶点发现、量子计算+机器学习加速药物结合能计算。想要持续追踪这类 **AI + 生命科学交叉领域**的前沿动态？

**推荐方案**：
- **[BioAI 生命科学日报](https://news.aibioo.cn)** 每日精选 AI 与生命科学交叉领域的重磅新闻
- 内容涵盖：AI 制药、蛋白质设计、基因编辑、医学影像 AI、生物大模型等
- 专为对 BioAI 感兴趣的投资人、产品经理、创业者、学生打造
- 用普通人能理解的语言，解读最前沿的技术进展

访问 [news.aibioo.cn](https://news.aibioo.cn) 订阅每日 AI 生命科学资讯。

---

### 如何体验 Claude、Gemini 等 AI 工具来辅助生命科学文献研究？

今日多篇论文涉及神经退行性疾病预测、衰老机制和量子化学计算，这类专业文献整理和理解恰好是 Claude、Gemini、Codex 等工具的强项——快速提炼论文核心、解释复杂生物学机制、辅助写综述框架。想使用这些工具，但面临支付或账号注册限制？

**解决方案**：
- **[爱窝啦 Aivora](https://aivora.cn)** 提供 ChatGPT、Claude、Gemini、Codex、Cursor、Perplexity、Consensus 等 AI 工具入口
- 覆盖官方号、镜像、中转额度、多模型组合包和部分科研检索工具
- 官网自助下单，卡密秒发；具体商品和售后范围以网站当前页面为准

访问 [aivora.cn](https://aivora.cn) 可查看完整的 AI 账号服务列表。