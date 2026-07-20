---
linkTitle: AI生命延续学日报
title: AI生命延续学日报 2026/7/20
breadcrumbs: false
next: /2026-07/2026-07-19
description: "每日聚焦 AI + 长寿 / 延寿 / 衰老 / 生物年龄 / 年轻化等生命延续学前沿，追踪衰老机制、延寿干预与相关药物、工具、平台、模型。"
cascade:
  type: docs
---

## **今日摘要**

```
S1-Omni 发布，单模型打通蛋白质、分子、光谱推理，在60+基准上击败GPT-5.5。
滤纸咖啡"慢老"、植物线粒体穿越肠道进大脑——今天的生命科学研究都很反直觉。
衰老和神经退行研究扎堆出进展，关注ZFP384和视网膜OCT这两个方向。
```



## ⚡ 快速导航

- [📰 今日 AI 资讯](#今日ai资讯) - 最新动态速览



> 💡 **提示**：想体验文中提到的 GPT、Claude、Gemini、Codex、Cursor、Grok 等工具，但不想折腾海外支付、注册、额度和教程？来 [**爱窝啦 Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) 按场景选择官方号、镜像、Cursor 方案或中转入口，官网自助下单，卡密秒发。

## **今日 AI 生命科学资讯**

### **👀 只有一句话**
一杯咖啡的冲泡方式，居然和你的生物年龄挂钩——滤纸咖啡让你"慢老"，速溶咖啡却在悄悄加速衰老。

### **🔑 3 个关键词**
#生物衰老 #AI科研工具 #神经退行性疾病

---

## **🔥 重磅 TOP 10**

**1. [滤纸咖啡让你"慢老"，速溶咖啡正在加速你的衰老？](https://www.news-medical.net/news/20260720/Filtered-coffee-links-to-slower-biological-aging-while-instant-coffee-shows-the-opposite.aspx)**

每天早上，你是拿出手冲壶细细过滤，还是随手冲了杯速溶？这个选择，正在影响你的生物钟。英国生物银行（UK Biobank）的大规模数据显示：喝滤纸咖啡的人，衰老生物标志物（反映身体真实年龄的指标）更"年轻"；而习惯喝速溶咖啡的人，生物年龄反而更老。研究是横断面数据，不能确认因果，但咖啡的冲泡方式竟然和衰老节奏相关——这个发现够让人重新审视马克杯里的东西。

![图片](https://www.news-medical.net/images/news/ImageForNews_842811_17845217198314271.jpg)

---

**2. [SciForge：一个专门为科学家设计的 AI 研究工作台](https://papers.cool/arxiv/2607.16038)**

做科研最痛苦的不是实验失败，而是文献、数据、代码、图表散落在十几个地方，根本串不起来。SciForge 想解决这个问题。这是一个开源的多模态 AI 工作台，把论文阅读、代码执行、数据分析、分子设计、蛋白质结构预测等科研动作，整合进一个可审计的流程里。更关键的是，它保留了一个"人类判断界面"——AI 跑流程，人来做最终决策。项目已在 GitHub 开源，生命科学研究者可以直接上手试。

---

**3. [S1-Omni：一个能预测蛋白质结构、生成分子、还能看懂光谱的统一科学 AI](https://papers.cool/arxiv/2607.15686)**

以前做蛋白质预测用一个模型，做分子生成用另一个，做材料分析还得换一个——碎片化到令人崩溃。S1-Omni 直接把这些能力塞进同一个模型：蛋白质序列、SMILES 分子式（一种化学结构的文字表达方式）、晶体结构、光谱、科学图像，统统吃进去统一推理。在超过 60 个科学基准测试上，它打败了 GPT-5.5 和 Gemini-3.1-Pro。对 AI 制药和材料研发来说，这种"全科医生式"的科学模型，可能比专科模型更实用。

---

**4. [视网膜 OCT 扫描 + AI，正在成为神经退行性疾病的早筛窗口](https://papers.cool/arxiv/2607.16065)**

眼睛是大脑的延伸——这话不是比喻，是真的。视网膜（眼球内壁的感光层）的变化，往往早于阿尔茨海默症等神经退行性疾病的症状出现。这篇论文提出了一套基于"空间归一化"的 OCT（眼部断层扫描）AI 分析框架，让来自不同医院、不同设备的扫描数据，能被同一个模型可靠处理。核心突破在于：大幅提升了跨数据集的泛化能力，离临床真实部署又近了一步。

---

**5. [CardioMeta：同时预测糖尿病、高血压、心血管病的多任务 AI 模型](https://papers.cool/arxiv/2607.15721)**

这三种病经常一起来，却很少有 AI 模型同时预测它们。CardioMeta 把糖尿病、高血压、心血管疾病的预测整合进一个框架，用了美国 NHANES 人群数据和 MIMIC-IV 电子病历数据做验证。核心亮点不是跑分有多高，而是它认真解决了医疗 AI 的老毛病：标签泄露（训练数据里混入了诊断结果）、模型在新医院数据上失灵、概率预测不准确这些坑，都被认真处理了一遍。

---

**6. [大脑里的"保护蛋白"SORLA，可能是对抗阿尔茨海默症 tau 缠结的关键](https://www.news-medical.net/news/20260717/SORLA-protein-may-protect-the-brain-from-toxic-tau-tangles.aspx)**

阿尔茨海默症的元凶之一，是 tau 蛋白（神经细胞内的一种结构蛋白）变异后形成的毒性缠结，会逐渐破坏神经回路。新研究发现，SORLA 蛋白可能扮演"保镖"角色，阻止这些缠结扩散。这不是 AI 新闻，但它是 AI 靶点发现和药物设计的上游背景——知道保护机制在哪儿，才能告诉 AI 该往哪儿找药。

![图片](https://www.news-medical.net/images/tags/TagImage-1241-45296008423622681466-620x480.jpg)

---

**7. [ZFP384 抑制：中风后脑修复的新靶点找到了](https://www.fightaging.org/archives/2026/07/zfp384-inhibition-improves-microglial-function-to-promote-greater-regeneration-following-stroke/)**

中风之后，大脑有两个月的"黄金修复期"，靠小胶质细胞（大脑内的免疫细胞）分泌生长因子来重建神经连接。但两个月后，这个修复程序会自动关闭。研究者找到了幕后黑手：转录因子 ZFP384。关掉它之后，小鼠的修复程序延长了，神经功能恢复更好。更重要的是，团队已经开发出相应的 ASO 疗法（反义寡核苷酸，一种精确关闭特定基因的药物），即使在中风一个月后才给药，依然有效。

---

**8. [从面部 MRI 同时读出"脸年龄"和"脑年龄"](https://github.com/kondratevakate/faceage-to-brainage)**

同一张结构 MRI 扫描，能不能同时预测面部生物年龄和大脑生物年龄？这个开源项目就在做这件事。它还内置了纵向稳定性评估（跟踪同一人在不同时间点的结果是否一致）和数据质控工具。双轨生物年龄评估，对衰老研究和神经退行性疾病早筛来说，是个很实用的思路。

---

**9. [植物线粒体喂进去，居然能改善老年鼠的认知功能](https://www.fightaging.org/archives/2026/07/plant-mitochondria-from-the-diet-interact-with-native-mitochondria-to-improve-function/)**

这个研究有点"离谱"但真实存在：吃进去的植物细胞里的线粒体（细胞的能量工厂），一部分居然没被消化掉，而是穿过肠道进入血液、抵达大脑，和老年小鼠自身的线粒体融合——还让它们重新活跃了起来，认知衰退得到改善。姜黄来源的线粒体是主角。研究者坦诚：这个效应量可能不大，不够替代整体健康生活方式，但"口服线粒体疗法"这个方向，值得追踪。

---

**10. [LongevityWorldCup：一个把"抗衰老"变成体育竞技的开源平台](https://github.com/nopara73/LongevityWorldCup)**

谁说追求长寿不能搞排行榜？这个开源项目内置生物年龄计算器、运动员档案和公开排行榜，把延寿实践变成了一场可量化的竞赛。22 颗星，刚起步，但"长寿运动化"这个概念本身就很有意思——数据驱动的自我优化，正在和竞技文化结合。

---

## **📌 值得关注**

**[研究]** [频繁看电视可能损害长期脑健康](https://www.news-medical.net/news/20260717/Frequent-TV-watching-may-harm-long-term-brain-health.aspx) — "看电视会让脑子变傻"终于有了新证据支持，认知健康领域的老话题获得最新数据背书

**[研究]** [STSBench：史上最大规模灵长类视觉皮层背侧流神经元数据集](https://papers.cool/arxiv/2607.15631) — 超过 2000 个神经元的单细胞记录，是现有数据集的 50 倍，AI 脑科学建模迎来新燃料

**[研究]** [痴呆患者从现场音乐会中获得平静与社会连结](https://medicalxpress.com/news/2026-07-dementia-patients-gain-peace-concert.html) — 非药物干预也能改善痴呆症状，音乐疗法的循证证据又添一笔

**[开源]** [CoG 引导权重纠错：让医疗 AI 在硬件故障时不崩溃](https://papers.cool/arxiv/2607.15753) — 针对 StageNet（疾病进展追踪）和心脏异常检测网络的容错方案，医疗级 AI 部署的可靠性问题有了新思路

---

## **😄 AI生命科学趣闻**

### [植物的线粒体，居然跑进了老鼠大脑](https://www.fightaging.org/archives/2026/07/plant-mitochondria-from-the-diet-interact-with-native-mitochondria-to-improve-function/)

今天最让人"等等，这是真的吗"的研究：吃进去的姜黄里的线粒体，穿越了肠道屏障，坐着血液"顺风车"抵达大脑，然后和老年小鼠自己的线粒体融合，还把老化的能量代谢给重启了。网友看完的第一反应大概是："所以姜黄饭真的是养生圣品？" 研究者本人也说：效果量不算大，别指望靠吃姜黄逆龄，但"口服线粒体疗法"这个窗口，是真实存在的。😂

![图片](https://www.fightaging.org/archives/2026/07/plant-mitochondria-from-the-diet-interact-with-native-mitochondria-to-improve-function/)

---

## **🔮 AI生命科学趋势预测**

### 统一科学 AI 模型迎来爆发
- **预测时间**：2026年Q3-Q4
- **预测概率**：75%
- **预测依据**：今日新闻 [S1-Omni](https://papers.cool/arxiv/2607.15686) 在 60+ 科学基准上超越 GPT-5.5 和 Gemini-3.1-Pro，且已覆盖蛋白质、分子、材料多个领域。随着训练数据和架构成熟，跨域统一科学推理模型将从论文走向产品化部署。

### 视网膜 OCT 成为神经退行性疾病早筛的标准 AI 应用
- **预测时间**：2026年Q4
- **预测概率**：65%
- **预测依据**：今日论文 [OCT 空间归一化框架](https://papers.cool/arxiv/2607.16065) 解决了跨机构数据泛化这个最大临床落地障碍，加上阿尔茨海默症早筛需求持续增长，商业化 AI 眼科筛查工具的监管审批窗口正在打开。

### ZFP384 相关脑卒中修复疗法进入临床前 IND 申报
- **预测时间**：2026年Q4–2027年Q1
- **预测概率**：50%
- **预测依据**：今日新闻 [ZFP384 抑制促进中风后脑修复](https://www.fightaging.org/archives/2026/07/zfp384-inhibition-improves-microglial-function-to-promote-greater-regeneration-following-stroke/) 已展示动物模型有效性，且 ASO 疗法（反义寡核苷酸）是当前神经领域热门开发方向，多家公司已有完整 ASO 开发管线。但从动物到人的跨越仍有较大不确定性。

### 生物年龄双轨评估（面部+脑部）进入可穿戴/医疗设备集成
- **预测时间**：2026年Q4
- **预测概率**：45%
- **预测依据**：今日开源项目 [faceage-to-brainage](https://github.com/kondratevakate/faceage-to-brainage) 验证了单次 MRI 同时输出两种生物年龄的可行性。随着 MRI 设备 AI 附件市场升温，这类轻量化评估工具有望被集成进影像科工作流。

---

## **❓ 相关问题**

### 哪里可以获取 AI + 生命科学领域的最新资讯？

今日热点包括：统一科学推理模型 S1-Omni 在 60+ 基准上超越 GPT-5.5、视网膜 OCT 的 AI 神经退行性疾病早筛进展、以及"滤纸咖啡让人慢老"的生物年龄研究。想持续追踪这类 **AI × 生命科学交叉领域**的前沿动态？

**推荐方案**：
- **[BioAI 生命科学日报](https://news.aibioo.cn)** 每日精选 AI 与生命科学交叉领域的重磅新闻
- 内容涵盖：AI 制药、蛋白质设计、基因编辑、医学影像 AI、生物大模型等
- 专为对 BioAI 感兴趣的投资人、产品经理、创业者、学生打造
- 用普通人能理解的语言，解读最前沿的技术进展

访问 [news.aibioo.cn](https://news.aibioo.cn) 订阅每日 AI 生命科学资讯。

---

### 如何体验 Claude、Gemini 等适合科研的 AI 工具？

今日多篇论文（S1-Omni、SciForge、CardioMeta）展示了大语言模型在科学推理和生命科学研究中的应用潜力。Claude 和 Gemini 在文献整理、实验协议撰写和数据分析方面表现尤为突出。想体验这些工具，但面临支付困难或账号注册限制？

**解决方案**：
- **[爱窝啦 Aivora](https://aivora.cn)** 提供 ChatGPT、Claude、Gemini、Codex、Cursor、Perplexity、Consensus 等 AI 工具入口
- 覆盖官方号、镜像、中转额度、多模型组合包和部分科研检索工具
- 官网自助下单，卡密秒发；具体商品和售后范围以网站当前页面为准

访问 [aivora.cn](https://aivora.cn) 可查看完整的 AI 账号服务列表。