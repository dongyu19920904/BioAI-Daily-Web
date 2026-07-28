---
linkTitle: AI生命延续学日报
title: AI生命延续学日报 2026/7/28
breadcrumbs: false
next: /2026-07/2026-07-28
description: "每日聚焦 AI + 长寿 / 延寿 / 衰老 / 生物年龄 / 年轻化等生命延续学前沿，追踪衰老机制、延寿干预与相关药物、工具、平台、模型。"
cascade:
  type: docs
---

## **今日摘要**

```
UC San Diego 团队造出靠汗水供电的帕金森监测贴片，顺手揭开患者"突然断药"之谜。
从病理切片预测基因表达、AI 算脑刺激靶点、汗液传感器……今天的论文在往"无创替代有创"这个方向猛卷。
可穿戴生化传感赛道正在从实验室走向临床，今天值得多看几条。
```



## ⚡ 快速导航

- [📰 今日 AI 资讯](#今日ai资讯) - 最新动态速览



> 💡 **提示**：想体验文中提到的 GPT、Claude、Gemini、Codex、Cursor、Grok 等工具，但不想折腾海外支付、注册、额度和教程？来 [**爱窝啦 Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) 按场景选择官方号、镜像、Cursor 方案或中转入口，官网自助下单，卡密秒发。

## **今日 AI 生命科学资讯**

### **👀 只有一句话**
一块贴在指尖的小贴片，靠汗水供电，实时监控帕金森药物浓度——这可能是今年最酷的可穿戴设备。

### **🔑 3 个关键词**
#可穿戴生物传感 #AI药物预测 #衰老免疫

---

## **🔥 重磅 TOP 10**

**1. [汗水供电的帕金森监测贴片，精度媲美血液检测](https://www.genengnews.com/topics/translational-medicine/parkinsons-disease-medication-monitored-with-fingertip-sweat-patch/)**

贴在指尖，不需要电池，靠汗水里的化学反应自己发电——UC San Diego 团队做出了这个东西。它实时测量帕金森患者体内左旋多巴（治疗帕金森最有效的药物）的浓度，精度跟实验室血液检测打平。更离谱的发现：帕金森患者清除这种药物的速度，比健康人快得多，这直接解释了为什么患者的症状会突然恶化。研究者的终极目标：让贴片和给药泵联动，自动按需补药。

![图片](https://www.genengnews.com/wp-content/uploads/2026/07/Low-Res_26-10453-2-232x300.jpg)

---

**2. [MEGA-CL：AI 预测药物在人体内的"命运"，75% 以上误差在 3 倍以内](https://papers.cool/arxiv/2607.24314)**

一个新分子被合成出来，接下来最头疼的问题是：它在人体里会怎么走？会不会被代谢掉？会不会有毒？这些叫 ADMET 属性（吸收、分布、代谢、排泄、毒性），测起来既贵又慢。MEGA-CL 用图神经网络（一种擅长处理分子结构的 AI）把这个问题搬到了电脑上——在 21 个 ADMET 任务里全面超越现有方法，还在 18 个刚获 FDA 批准的新药上做了外部验证，超过 50% 的预测误差在 2 倍以内。制药公司的早期筛选效率，可能就此大幅提速。

---

**3. [从病理切片直接预测基因表达，HistoGPA 刷新 10 种癌症基准](https://papers.cool/arxiv/2607.24364)**

一张 H&E 染色切片（最普通的病理检查方式），能不能直接告诉你肿瘤里哪些基因在高表达？以前大家觉得这几乎不可能，因为基因表达需要昂贵的空间转录组测序。HistoGPA 提出了一个新框架：让 AI 同时理解切片的局部形态和整体组织背景，再去匹配基因先验知识。在 HEST-1k 数据集的 10 种癌症类型上，它拿到了所有对比方法里最高的基因预测相关系数。如果这个方法成熟，普通病理切片的信息量将被彻底重估。

---

**4. [AI 找到阿尔茨海默症的"最优刺激靶点"——不是你以为的地方](https://papers.cool/arxiv/2607.24356)**

脑机接口 + 阿尔茨海默症，一个让人又兴奋又头疼的组合。这项研究用静息态脑功能连接数据建了个人级别的储层计算模型，然后模拟：如果我们在某个脑区施加电刺激，能不能把阿尔茨海默患者的大脑网络"纠正"回正常状态？关键发现：**最有效的刺激点，不是病变最明显的地方，而是对整个网络影响最大的地方**，而且每个人不一样。这为个性化神经调控治疗提供了新的思路。

---

**5. [EEG 基础模型真的靠谱吗？六大模型压测结果让人冷静](https://papers.cool/arxiv/2607.24519)**

最近 EEG（脑电图）基础模型很热，大家都说它能跨人群、跨任务用于临床诊断。这篇论文直接压测了 6 个主流模型，结论有点扎心：在韩国痴呆诊断任务上，预训练模型（0.568 AUROC）居然不如传统特征方法（0.769）；更离谱的是，一个随机初始化的编码器在某些任务上比预训练模型还好。真正有效的场景只有癫痫发作检测。这不是说 EEG AI 没用，而是说——评估方法必须更严格，否则很多"突破"只是数据集的幻觉。

---

**6. [阿尔茨海默症基因风险高的人，就一定不能成为"超级老人"吗？](https://www.news-medical.net/news/20260728/Can-Alzheimers-genes-predict-who-becomes-a-SuperAger.aspx)**

"超级老人"（SuperAger）指那些 80 岁以上记忆力仍像 50 岁的人。直觉上，他们应该是阿尔茨海默症遗传风险最低的那群人。但这项研究说：**不一定**。遗传风险低不是成为超级老人的充分条件，生活方式和其他生物因素同样关键。这对"基因决定命运"的观念是一次温和但有力的反驳，也给干预研究打开了一扇窗。

![图片](https://www.news-medical.net/images/news/ImageForNews_843462_17852222090289644.jpg)

---

**7. [胸腺素 Thymulin：年轻时帮你压炎症、抗肿瘤，老了就消失了](https://www.fightaging.org/archives/2026/07/thymulin-produced-by-the-thymus-acts-to-restrain-inflammation-but-declines-with-age/)**

胸腺随年龄萎缩是老生常谈，但它分泌的 Thymulin 具体做了什么，过去不太清楚。这篇发表在 Nature Communications 的新研究回答了这个问题：Thymulin 能抑制促炎髓系细胞（免疫系统里爱惹麻烦的一类细胞），还能增强 T 细胞对肿瘤的杀伤力，甚至让老年小鼠对 PD-L1 免疫治疗（一种重要的肿瘤免疫疗法）重新变得敏感。换句话说：胸腺衰老可能是老年人肿瘤免疫治疗效果差的重要原因之一，而补充 Thymulin 或许是破局点。

---

**8. [肠道信号通过迷走神经帮助大脑记忆——普鲁斯特的饼干有了神经生物学解释](https://www.news-medical.net/news/20260727/Signals-traveling-from-the-gut-through-the-vagus-nerve-help-form-memories.aspx)**

吃一口东西就唤起童年记忆，这不只是文学意象。新研究发现，肠道发出的信号通过迷走神经（连接肠道和大脑的"高速公路"）直接参与了记忆的形成。对于研究衰老相关认知下降的人来说，这条肠-脑轴可能是一个被低估的干预靶点——毕竟肠道微生物随年龄变化显著，而肠道健康与认知衰退的关联正越来越受重视。

![图片](https://www.news-medical.net/image-handler/picture/2017/1/Stomach-Liya_Graphics_15bd2f55dd07420c92d549f089b8e54f-620x480.jpg)

---

**9. [晒太阳晒出的伤害，居然是自己的免疫细胞帮倒忙的](https://lifespan.io/how-the-immune-system-makes-sun-damage-worse/)**

UVB 照射皮肤后，免疫细胞赶来"救场"，结果反而把事搞大了。这项研究发现，中性粒胞外陷阱（NETs，一种免疫细胞自爆后释放的 DNA 网状结构）是加重紫外线皮肤损伤的关键推手。抑制 PAD4 酶（NETs 形成必须的酶）或沉默皮肤细胞上的 CCDC25 受体，都能显著减轻小鼠的晒伤和炎症。对长寿研究来说更有意思的是：这条机制与"炎症性衰老"（inflammaging）直接相关，慢性 NETs 激活可能加速全身老化进程。

![图片](https://lifespan.io/wp-content/uploads/2026/07/Sunburned-skin-and-net-1-262x187.png)

---

**10. [红外成像 + AI = 儿童骨折的无辐射检查方案？](https://papers.cool/arxiv/2607.24727)**

儿科急诊 18% 的就诊是骨骼外伤，现在的诊断标准是 X 光。但早年反复接受低剂量辐射，会增加孩子一生的白血病和脑癌风险。这篇综述提出了一个替代框架：用多光谱红外成像采集数据，再通过 AI 图像转换模型（如 CycleGAN）生成"合成 X 光"效果图，实现无辐射骨骼筛查。儿童身体小、骨头薄，红外穿透性反而更好，这个路线在技术上是有依据的。距离临床应用还有路要走，但方向值得关注。

---

## **📌 值得关注**

**[研究]** [EEG 癫痫状态转换自动识别开源项目](https://github.com/ZoomingLiu/MS-EEGNet-TCN-HBSM) - 专注儿童耐药性癫痫的发作前期预警，能自动发现个体化的脑电状态转换点，不需要预设统一时间窗

**[开源]** [长寿运动世界杯：给"老得慢"的人一个竞技场](https://github.com/nopara73/LongevityWorldCup) - 开源的生物年龄计算器 + 运动员档案 + 排行榜，22 颗星，脑洞大开但认真在做

**[研究]** [UC Davis 获 330 万美元研究认知老化的文化差异](https://www.news-medical.net/news/20260727/UC-Davis-researcher-receives-grant-to-study-perceived-cognitive-aging.aspx) - 不同文化背景的人对"记忆变差"的感知不同，这可能影响早期干预的时机和效果

**[研究]** [碘摄入量：太少或太多都会打乱免疫平衡](https://www.news-medical.net/news/20260727/Too-little-or-too-much-iodine-may-push-immunity-off-balance.aspx) - 甲状腺-免疫轴的细节研究，精确阈值还不明确，但"不是越多越好"的结论已经很清楚

---

## **😄 AI生命科学趣闻**

### [靠汗水自己供电的"药物监测贴片"，还顺带发现了帕金森患者代谢更快这件事](https://www.genengnews.com/topics/translational-medicine/parkinsons-disease-medication-monitored-with-fingertip-sweat-patch/)

研究团队本来只是想做个"不用电池的可穿戴监测器"，结果顺手发现了一个重要的临床事实：帕金森患者把左旋多巴代谢掉的速度，比健康人快得多。这就解释了为什么患者有时候好好的，突然就"断药"了。网友评论区的高赞留言大概会是："所以汗水比病历本更诚实？" 😄

![图片](https://www.genengnews.com/wp-content/uploads/2026/07/Low-Res_26-10453-2-232x300.jpg)

---

## **🔮 AI生命科学趋势预测**

### 可穿戴生化传感器进入临床试验加速期
- **预测时间**：2026年Q3-Q4
- **预测概率**：75%
- **预测依据**：今日新闻[帕金森汗液监测贴片](https://www.genengnews.com/topics/translational-medicine/parkinsons-disease-medication-monitored-with-fingertip-sweat-patch/)已在 PNAS 发表，技术路线成熟；多个大学团队同期在开发类似无源生化传感器，下一步通常是启动更大规模临床验证

### AI 辅助个性化脑刺激方案获得更多资金支持
- **预测时间**：2026年8月-10月
- **预测概率**：65%
- **预测依据**：今日论文[阿尔茨海默症闭环神经调控模型](https://papers.cool/arxiv/2607.24356)提出了个性化靶点选择框架；结合脑机接口投资热度，预计相关公司/学术团队将借此推进资金申请或合作

### 胸腺再生 / Thymulin 补充进入抗肿瘤免疫临床探索
- **预测时间**：2026年Q4
- **预测概率**：55%
- **预测依据**：今日研究[Thymulin 与老年肿瘤免疫](https://www.fightaging.org/archives/2026/07/thymulin-produced-by-the-thymus-acts-to-restrain-inflammation-but-declines-with-age/)发表于 Nature Communications，影响力足够引发跟进；胸腺再生赛道（如 Intervene Immune、Lygenesis 等公司）正在寻找新机制支撑

### ADMET AI 预测工具被更多制药公司纳入早期筛选流程
- **预测时间**：2026年Q3
- **预测概率**：70%
- **预测依据**：今日论文[MEGA-CL](https://papers.cool/arxiv/2607.24314)在 FDA 新药外部验证上表现出色；药企采用 in silico ADMET 筛选的趋势已非常明显，高质量开源模型的出现通常会加速内部工具迭代

---

## **❓ 相关问题**

### 哪里可以获取 AI 药物预测、可穿戴生物传感和衰老免疫研究的最新资讯？

今日 AI 生命科学热点包括：AI 预测药物 ADMET 性质（MEGA-CL）、汗液供电的帕金森药物监测贴片、以及胸腺 Thymulin 与衰老免疫的最新机制研究。想持续追踪这类 **AI + 生命科学交叉领域**的前沿动态？

**推荐方案**：
- **[BioAI 生命科学日报](https://news.aibioo.cn)** 每日精选 AI 与生命科学交叉领域的重磅新闻
- 内容涵盖：AI 制药、蛋白质设计、基因编辑、医学影像 AI、生物大模型等
- 专为对 BioAI 感兴趣的投资人、产品经理、创业者、学生打造
- 用普通人能理解的语言，解读最前沿的技术进展

访问 [news.aibioo.cn](https://news.aibioo.cn) 订阅每日 AI 生命科学资讯。

---

### 如何高效检索 AI 生命科学相关论文和研究进展？

今日多篇重磅论文（EEG 基础模型评测、组织病理切片预测基因表达、阿尔茨海默症闭环神经调控）都涉及大量跨学科文献。对于科研工作者、学生和产品经理来说，手动检索文献效率很低——想找到真正相关的研究需要好工具。

**解决方案**：
- **[爱窝啦 Aivora](https://aivora.cn)** 提供 Consensus（专门用于学术论文检索的 AI）、Perplexity（实时联网搜索）、Claude、Gemini 等研究利器的入口
- 其中 Consensus 特别适合"这个领域有没有临床证据"这类问题，Perplexity 适合快速追踪最新进展
- 官网自助下单，卡密秒发；具体商品和售后范围以网站当前页面为准

访问 [aivora.cn](https://aivora.cn) 查看完整 AI 工具服务列表。