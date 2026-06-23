---
linkTitle: AI生命延续学日报
title: AI生命延续学日报 2026/6/23
breadcrumbs: false
next: /2026-06/2026-06-23
description: "每日聚焦 AI + 长寿 / 延寿 / 衰老 / 生物年龄 / 年轻化等生命延续学前沿，追踪衰老机制、延寿干预与相关药物、工具、平台、模型。"
cascade:
  type: docs
---

## **今日摘要**

```
衰老细胞"炎症开关"被锁定：XPO1 蛋白偷运 R-loop 出逃是元凶，阻断它能让小鼠肝脏损伤减轻、寿命延长。
朊病毒里藏着抗菌药——AI 扫出 1179 个候选抗菌肽，其中 2 种已在小鼠身上打败顽固耐药菌。
今天的核心是"找到了为什么"，从炎症机制到耐药菌克星，有具体靶点的科学值得重点看。
```



## ⚡ 快速导航

- [📰 今日 AI 资讯](#今日ai资讯) - 最新动态速览



> 💡 **提示**：想体验文中提到的 GPT、Claude、Gemini、Codex、Cursor、Grok 等工具，但不想折腾海外支付、注册、额度和教程？来 [**爱窝啦 Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) 按场景选择官方号、镜像、Cursor 方案或中转入口，官网自助下单，卡密秒发。

## **今日 AI 生命科学资讯**

### **👀 只有一句话**
衰老细胞里有个"叛徒"——它把本该留在细胞核里的分子偷运出去，点燃了全身炎症，而科学家刚刚抓住了它。

### **🔑 3 个关键词**
#衰老炎症 #AI抗菌肽 #脑老化时钟

---

## **🔥 重磅 TOP 10**

**1. [衰老细胞的炎症开关找到了：R-loop 出逃是元凶](https://lifespan.io/a-transcriptional-failure-leads-to-systemic-inflammation/)**

你有没有想过，为什么人老了全身总是"慢性发炎"？最新研究给出了一个具体答案：衰老细胞里，本来待在细胞核内正常工作的 RNA-DNA 杂合体（R-loop），被一种叫 XPO1 的蛋白质偷运到了细胞质。跑出去的 R-loop 会引发连锁反应，最终让衰老细胞不断向外"喷毒"（SASP，即衰老相关分泌表型），搞坏周围健康细胞。研究者在老年小鼠身上用药物 KPT-330 阻断了这个运输通道，结果：肝脏损伤减轻、炎症下降、寿命延长。这不只是机制发现，背后已经有了明确的干预靶点。

![图片](https://lifespan.io/wp-content/uploads/2026/06/RNA-and-DNA-interaction-262x187.jpg)

---

**2. [一针 FGF21 基因疗法，老年小鼠心肝肾脑同步改善](https://www.fightaging.org/archives/2026/06/fgf21-gene-therapy-improves-health-in-aged-mice/)**

热量限制（少吃）能延寿，这事大家都知道。但谁愿意真的一辈子少吃？研究者直接找到热量限制背后的关键分子——FGF21，用 AAV 基因疗法（一种病毒载体，把基因"打进"肌肉细胞）把它注射到老年小鼠体内。结果惊人：体重正常化、胰岛素敏感性改善、肝脏解毒能力恢复、肾病减缓、心脏功能改善、认知提升——几乎是全身翻新。背后机制涉及线粒体功能增强、蛋白质稳态恢复和炎症逆转。少吃的所有好处，一针搞定。离人体试验还有距离，但方向感极强。

---

**3. [AI 在朊病毒里挖出新型抗菌武器，连耐药菌都能杀](https://www.genengnews.com/topics/translational-medicine/ai-discovers-potential-antimicrobial-prionin-peptides/)**

朊病毒（prion）是让人闻风丧胆的"疯牛病蛋白"，谁会想到它体内藏着抗菌武器？宾夕法尼亚大学团队用深度学习平台 APEX 1.1，扫描了近 3000 种朊病毒相关蛋白里的 1930 万个片段，找到 1179 个候选抗菌肽，命名为"prionin"。合成测试：59 种能杀细菌，2 种在小鼠皮肤感染模型里，对顽固耐药菌鲍曼不动杆菌（Acinetobacter baumannii）的疗效媲美现有抗生素。这个研究真正令人兴奋的不只是结果——而是 AI 改变了"去哪里找药"这个问题本身。

---

**4. [脑 CT 自动诊断模型 Brain-Adapter：不用标注，照样跑赢专科模型](https://papers.cool/arxiv/2606.23494)**

急性脑出血、梗塞、创伤——这些病分秒必争，但 3D 脑部 CT 的自动诊断一直是硬骨头，因为模型训练需要大量专家标注，成本极高。Brain-Adapter 换了个思路：用现成的影像-语言大模型（VLM）处理 2D 切片，再用 MIL（多实例学习）把切片组合成 3D 判断，诊断报告的文字本身就当标签——不需要额外标注。实验结果显著优于现有 3D 模型。真正的价值在于：把"需要专家喂数据"的门槛大幅降低，让 AI 脑部诊断在资源有限的医院也能落地。

---

**5. [精神分裂症基因图谱大扩容：新方法一口气发现 641 个新关联基因](https://www.genengnews.com/topics/translational-medicine/long%e2%80%91range-gene-networks-uncover-641-new-schizophrenia%e2%80%91associated-genes/)**

以前研究精神分裂症的基因，只盯着变异位点附近的"邻居基因"。Lieber 研究所团队开发了 INGENE 和 MODULE 两个新模型，能捕捉远距离基因之间的调控关系——就像从看单个路灯，变成看整个城市的电网。结合 10 万人以上的遗传数据，新方法识别出 766 个关联基因，其中 641 个是以前从未发现的。汇聚点集中在谷氨酸信号、神经发育、免疫通路。这不是小幅优化，是对精神疾病遗传学底层逻辑的重新理解。

---

**6. [AI 驱动分子性质预测的"闭环自动研究"：让机器自己改进自己的研究流程](https://papers.cool/arxiv/2606.22731)**

AI 制药的瓶颈之一是：筛选出来的分子，在验证集上表现好，但换个数据集就崩。这篇论文做了个严格测试：让语言模型 Agent 自动修改特征、模型架构和外部数据，然后在从未见过的测试集上打分。跨 36 个药物属性预测任务，验证结果真实可泛化——其中外部数据引入让 CYP2C9 底物预测提升 0.17。更关键的是，它提供了一套判断"AI 的改进是真改进还是过拟合"的方法论框架，对 AI 制药领域极具参考价值。

---

**7. [稀有视网膜病诊断突破：Evo-RAD 自进化 Agent 比基础模型高出 21%](https://papers.cool/arxiv/2606.22955)**

稀有病之所以难诊，是因为数据少，AI 根本没见过。Evo-RAD 的思路很聪明：把"检索参考病例"变成一个强化学习任务——Agent 在诊断过程中动态删掉误导性样本、补入同类样本，直到参考集足够纯净再下判断。在视网膜稀有病基准测试上，比视网膜专用基础模型高出 21%，代码已开源。这套"自进化检索"逻辑不只适用于眼科，任何稀有病 AI 诊断都可以借鉴。

---

**8. [单细胞染色质时钟 sc-ChromAging：CD4+ 初始 T 细胞是最准的生物年龄指针](https://www.fightaging.org/archives/2026/06/a-chromatin-accessibility-aging-clock-assessed-in-many-different-immune-cell-types/)**

生物年龄时钟领域有个老问题：用血细胞测出来的"年龄"，能代表全身吗？这篇研究用单细胞染色质可及性测序（scATAC-seq，检测哪些基因处于"开放可读"状态）构建了新时钟 sc-ChromAging，覆盖 25 种免疫细胞亚型。结论有点出乎意料：预测精度最高的不是各种效应细胞，而是 CD4+ 初始 T 细胞——因为这类细胞接触外界抗原少，染色质的变化更纯粹地反映"内在衰老程序"。这为未来的衰老测量提供了更精准的细胞层面锚点。

---

**9. [用脑电图给非洲人群建大脑年龄模型：MIRASOL 开源项目](https://github.com/Oluwapelumi-Solagbade/MIRASOL-Brain-Age-2026)**

现有大脑年龄 AI 模型几乎全部基于欧美白人数据，泛化到其他族群时误差极大。这个 MICCAI 2026 竞赛项目（MIRASOL）尝试用 EEG 脑电图在非洲人群中构建大脑年龄预测模型，直接针对数据多样性这个核心盲点。目前开源代码已在 GitHub 上发布，关注 AI 健康公平性的研究者值得一看。

---

**10. [走路能预测寿命？老年人迈步速度是长寿晴雨表](https://medicalxpress.com/news/2026-06-quickly-older-adults-longevity.html)**

Ben-Gurion 大学研究发现，老年人在同时执行认知任务（比如边走路边数数）时，迈出第一步的速度，是预测长期存活率的独立指标。这个简单测试背后捕捉的是神经肌肉活力和认知处理速度的综合状态——两者同时退化，才是真正的风险信号。未来可穿戴设备结合 AI 分析步态，或许比年度体检更早发现问题。

---

## **📌 值得关注**

**[研究]** [年轻一代生物性衰老加速，与早发癌症率上升有关](https://medicalxpress.com/news/2026-06-faster-aging-younger-generations-linked.html) - 每一代人的生物衰老速度都比上一代快，细胞损伤累积更早，值得持续追踪

**[研究]** [力量训练与长寿关联再获证据：不用每天举铁，但要坚持](https://medicalxpress.com/news/2026-06-people-weights-longer.html) - 新研究再次确认举重对寿命的正面影响，健身不只是体型问题

**[开源]** [闭环自动研究用于分子性质预测（论文+代码）](https://papers.cool/arxiv/2606.22731) - AI 自动优化药物属性预测流程，并严格验证泛化性，方法论框架可复用

**[产品]** [Evo-RAD 稀有视网膜病诊断框架开源](https://github.com/SDH-Lab/Evo-RAD) - 自进化检索 Agent，稀有病诊断提升 21%，已可直接调用

---

## **😄 AI 生命科学趣闻**

### [AI 在"疯牛病蛋白"里找到了抗菌药](https://www.genengnews.com/topics/translational-medicine/ai-discovers-potential-antimicrobial-prionin-peptides/)

朊病毒（prion）大概是生物学里名声最差的蛋白——跟疯牛病、克雅氏病绑定，人见人怕。结果 AI 扫了一遍，淡定地说：嗯，里面藏着 1179 个可能的抗菌肽。研究者：……你确定？AI：已在小鼠身上验证，疗效媲美现有抗生素。这大概是 2026 年最离谱的"废物利用"研究，朊病毒：我也没想到自己有这天。😂

---

## **🔮 AI 生命科学趋势预测**

### FGF21 相关疗法进入人体安全性试验
- **预测时间**：2026年 Q3-Q4
- **预测概率**：65%
- **预测依据**：今日新闻 [FGF21 基因疗法在老年小鼠中全面改善健康](https://www.fightaging.org/archives/2026/06/fgf21-gene-therapy-improves-health-in-aged-mouse/) + AAV 基因疗法平台已成熟，多家长寿公司（如 Rejuvenate Bio）已在跟进类似靶点，动物数据积累正接近申请 IND 临界点

### SASP/炎症干预成为新一波抗衰老药物管线热点
- **预测时间**：2026年 Q3
- **预测概率**：75%
- **预测依据**：今日新闻 [R-loop 出逃导致系统性炎症](https://lifespan.io/a-transcriptional-failure-leads-to-systemic-inflammation/) + XPO1 抑制剂 KPT-330 已有临床用药历史（用于血液肿瘤），在衰老领域的适应症扩展路径相对清晰，多家 senolytic 公司正在关注 SASP 调控方向

### AI 驱动抗菌肽发现进入临床前加速阶段
- **预测时间**：2026年 Q4
- **预测概率**：60%
- **预测依据**：今日新闻 [AI 发现 prionin 抗菌肽](https://www.genengnews.com/topics/translational-medicine/ai-discovers-potential-antimicrobial-prionin-peptides/) + 抗生素耐药性已被 WHO 列为全球紧急威胁，AI 抗菌肽发现赛道（Hexagon Bio、Invaio Sciences 等）正在加速，本研究成果发表在 Nature Microbiology，资本关注度将随之上升

### 多组学生物年龄时钟走向临床整合
- **预测时间**：2026年 Q3
- **预测概率**：55%
- **预测依据**：今日新闻 [sc-ChromAging 单细胞染色质时钟](https://www.fightaging.org/archives/2026/06/a-chromatin-accessibility-aging-clock-assessed-in-many-different-immune-cell-types/) + 生物年龄测量赛道（TruAge、Elysium、Novos 等）竞争加剧，单细胞精度时钟将成为下一代产品差异化卖点

---

## **❓ 相关问题**

### 哪里可以获取 AI 制药、抗衰老研究、脑部 AI 诊断的最新资讯？

今日 AI 生命科学热点包括：**FGF21 基因疗法让老年小鼠全身器官改善**、**AI 从朊病毒中挖出新型抗菌肽**、**衰老细胞炎症机制被精确定位到分子层面**。想要持续追踪这类 AI + 生命科学交叉领域的前沿动态？

**推荐方案**：
- **[BioAI 生命科学日报](https://news.aibioo.cn)** 每日精选 AI 与生命科学交叉领域的重磅新闻
- 内容涵盖：AI 制药、蛋白质设计、基因编辑、医学影像 AI、衰老生物学等
- 专为对 BioAI 感兴趣的投资人、产品经理、创业者、学生打造
- 用普通人能理解的语言，解读最前沿的技术进展

访问 [news.aibioo.cn](https://news.aibioo.cn) 订阅每日 AI 生命科学资讯。

---

### 如何体验 Claude、Perplexity 等适合做科研资料整理的 AI 工具？

今日多篇研究来自 Nature Microbiology、Nature Genetics 等顶刊，想要高效检索、理解和整理这类文献，Claude（擅长长文本分析）、Perplexity（实时联网检索）和 Consensus（专门检索学术论文）是科研工作者最常用的 AI 工具组合。如果面临支付困难或账号注册限制——

**解决方案**：
- **[爱窝啦 Aivora](https://aivora.cn)** 提供 Claude、Gemini、Perplexity、Consensus、ChatGPT、Cursor、Codex 等 AI 工具入口
- 覆盖官方号、中转额度、多模型组合包和科研检索工具
- 官网自助下单，卡密秒发；具体商品和售后范围以网站当前页面为准

访问 [aivora.cn](https://aivora.cn) 查看完整 AI 账号服务列表。