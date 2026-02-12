---
linkTitle: BioAI 生命科学日报
title: BioAI 生命科学日报 2026/2/13
breadcrumbs: false
next: /2026-02/2026-02-13
description: "每日自动汇总 AI + 生命科学领域最新动态，追踪生物医药、基因编辑、蛋白质预测、AI辅助药物研发等前沿进展。"
cascade:
  type: docs
---

## **今日摘要**

```
Gemini Deep Think 开始帮科学家攻克数学物理难题，AI 从工具升级成科研搭子。
AlphaFold 预测泛素连接酶配对、单细胞批次整合调参指南同日放出，蛋白质降解和组学分析都有新武器。
今天适合做 AI 制药和单细胞分析的人收藏，干货密度高。
```



## ⚡ 快速导航

- [📰 今日 AI 资讯](#今日ai资讯) - 最新动态速览



> 💡 **提示**：想第一时间体验文中提到的最新 AI 模型（Claude 4.5、GPT、Gemini 3 Pro）？没有账号？来 [**爱窝啦 Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) 领个号，一分钟上手，售后无忧。

## **今日 AI 生命科学资讯**

### **👀 只有一句话**
Gemini Deep Think 正在帮科学家攻克数学、物理难题，AI 科研协作进入新阶段。

### **🔑 3 个关键词**
#AI科研协作 #蛋白质设计 #单细胞分析

---

## **🔥 重磅 TOP 10**

### 1. [Gemini Deep Think 正在加速科学研究进展](https://x.com/demishassabis/status/2021734578369552566)

以前解决一个数学猜想，可能要几代人接力。现在呢？DeepMind 的 Demis Hassabis 亲自发推：Gemini Deep Think 正在帮专家们攻克数学、物理、计算机科学领域的"老大难"问题。这不是 AI 替代科学家，而是 AI 成为科学家的"超级外脑"——用 agentic workflows（智能体工作流）来辅助研究级问题的求解。两篇新论文已经放出，想看 AI 怎么当科研搭子的，可以去围观。

![Tweet Image](https://pbs.twimg.com/media/HA5HsnxbsAEXIQf.jpg)

---

### 2. [酶检索的几何基础模型：从进化视角找酶](https://www.nature.com/articles/s41929-026-01478-y)

找酶这件事，以前靠序列比对，费时费力还容易漏。这篇 Nature Catalysis 新文提出了一个"几何基础模型"，直接从蛋白质的三维结构出发，结合进化信息来检索酶。简单说，就是让 AI 学会"看形状"来找酶，效率和准确率都上了一个台阶。做合成生物学、酶工程的朋友，这个方向值得关注。

---

### 3. [OmiGA：分子数量性状位点定位的超高效新方法](https://www.nature.com/articles/s41467-026-68978-0)

基因组学里有个老问题：怎么高效找到影响分子表型的基因位点（mQTL）？OmiGA 来了，号称"超高效"。发在 Nature Communications 上，具体细节还没放出，但从标题看，这可能是做大规模组学分析的新利器。等全文出来再细看。

---

### 4. [DeepMet：探索哺乳动物代谢组的新工具](https://www.nature.com/articles/s41588-026-02530-0)

代谢组学一直是个"数据多、解读难"的领域。Nature Genetics 这篇新文介绍了 DeepMet，一个专门用来探索哺乳动物代谢组的 AI 工具。虽然摘要还没放出，但能上 NG，说明方法论上有突破。做代谢组、系统生物学的可以蹲一下。

---

### 5. [深度学习生成抗糖尿病肽：从头设计到虚拟筛选](https://www.nature.com/articles/s41598-026-39985-4)

AI 设计多肽药物又有新进展。这篇 Scientific Reports 论文用深度学习+注意力机制，结合理化特征，从头生成抗糖尿病肽候选物，并进行虚拟筛选。简单说，就是让 AI 自己"发明"新药分子，再用计算方法筛出最有潜力的。AI 制药的又一块拼图。

---

### 6. [YOLOv11n 加持的乳腺癌检测框架：多尺度特征校准](https://www.nature.com/articles/s41598-026-39723-w)

乳腺癌早筛，AI 影像诊断是热门赛道。这篇论文基于 YOLOv11n，加入多尺度特征校准，提升检测精度。YOLO 系列一直以"快"著称，现在又在"准"上下功夫。医学影像 AI 的工程化落地，又近了一步。

---

### 7. [AlphaFold 预测 E2-E3 泛素连接酶配对特异性](https://www.biorxiv.org/content/10.64898/2026.02.10.700855v1?rss=1)

泛素化是细胞里最重要的蛋白质降解通路之一，PROTAC 药物就是靠它来"定点清除"致病蛋白。但 E2-E3 连接酶怎么配对，一直是个谜。这篇 bioRxiv 预印本用 AlphaFold 预测了数千个泛素-E2-E3 三元复合物结构，还开发了机器学习模型来预测功能性配对。更贴心的是，团队还上线了 UbiqCore 网站，数据和结构都能查。做靶向蛋白降解的，这是宝藏资源。

---

### 8. [VAE 方法在单细胞 RNA-seq 批次整合中的超参数基准测试](https://www.biorxiv.org/content/10.64898/2026.02.10.705093v1?rss=1)

单细胞测序数据整合，批次效应是绕不开的坑。这篇 bioRxiv 论文系统比较了 scVI、MrVI、LDVAE 三种 VAE 方法在不同数据集、不同超参数下的表现。结论很实用：HVG（高变异基因）训练通常优于全基因；中高维度潜在空间（>30）往往效果最好。做单细胞分析的，这份"调参指南"值得收藏。

---

### 9. [子痫前期早期预测：应对临床数据缺失的新方法](https://www.nature.com/articles/s41598-025-27801-4)

子痫前期是孕产妇和胎儿的"隐形杀手"，早期预测很关键。但临床数据经常缺失，怎么办？这篇 Scientific Reports 论文提出了一种新方法，专门解决数据缺失带来的预测不确定性。AI 医疗落地，数据质量是硬伤，这类方法论创新很有价值。

---

### 10. [OnCorr：泛癌 mRNA-蛋白相关性工具助力精准肿瘤学](https://www.nature.com/articles/s41698-026-01323-2)

mRNA 和蛋白表达不总是一致，这给精准医疗带来挑战。OnCorr 是一个泛癌 mRNA-蛋白相关性分析工具，帮助研究者更精准地理解基因表达与蛋白功能的关系。做肿瘤生物标志物、精准用药的，可以试试。

---

## **📌 值得关注**

- **[开源]** [HealthChain：医疗 AI 的中间件层](https://github.com/dotimplement/HealthChain) - 医疗 AI 落地缺的那块"胶水"，终于有人补上了
- **[开源]** [open-wearables：可穿戴健康数据统一 API](https://github.com/the-momentum/open-wearables) - 自托管、AI-ready，数据主权党狂喜
- **[开源]** [OpenHealth：AI 健康助手](https://github.com/OpenHealthForAll/open-health) - 3800+ star，数据本地化，隐私控的福音
- **[开源]** [Awesome-AI-Agents-for-Healthcare](https://github.com/AgenticHealthAI/Awesome-AI-Agents-for-Healthcare) - 医疗 AI Agent 最新进展合集，入门必看
- **[开源]** [ClairS：长读长体细胞小变异检测深度学习方法](https://github.com/HKU-BAL/ClairS) - 港大出品，做肿瘤基因组的可以关注
- **[研究]** [噬菌体-宿主特异性预测](https://www.nature.com/articles/s41579-026-01287-x) - 噬菌体疗法的 AI 化，值得期待
- **[研究]** [RMzyme：人类 RNA 修饰酶调控数据库](https://www.nature.com/articles/s41392-025-02568-2) - RNA 修饰研究的新资源

---

## **📊 更多动态**

| # | 类型 | 标题 | 链接 |
|---|------|------|------|
| 1 | 开源 | DeepPurpose：药物-靶点相互作用预测工具包 | [链接](https://github.com/kexinhuang12345/DeepPurpose) |
| 2 | 开源 | SemiBin：宏基因组分箱的自监督深度学习方法 | [链接](https://github.com/BigDataBiology/SemiBin) |
| 3 | 开源 | DANCE：单细胞分析深度学习库 | [链接](https://github.com/OmicsML/dance) |
| 4 | 开源 | ProteinFlow：蛋白质结构数据处理流水线 | [链接](https://github.com/adaptyvbio/ProteinFlow) |
| 5 | 开源 | awesome-healthcare-datasets：医疗健康数据集合集 | [链接](https://github.com/geniusrise/awesome-healthcare-datasets) |
| 6 | 研究 | 塔里木兔端粒到端粒基因组组装 | [链接](https://www.nature.com/articles/s41597-026-06815-1) |
| 7 | 研究 | BUB1 促进肺癌细胞干性并作为诊断标志物 | [链接](https://www.nature.com/articles/s41598-026-38997-4) |

---

## **🔮 AI 生命科学趋势预测**

### Gemini 在生命科学领域的专项应用发布
- **预测时间**：2026年Q2
- **预测概率**：60%
- **预测依据**：今日新闻 [Gemini Deep Think 加速科学研究](https://x.com/demishassabis/status/2021734578369552566) + DeepMind 近期频繁展示 AI 科研协作能力，生命科学是其传统强项（AlphaFold），专项工具发布只是时间问题

### 泛素化通路 AI 工具商业化加速
- **预测时间**：2026年Q1-Q2
- **预测概率**：55%
- **预测依据**：今日新闻 [E2-E3 配对预测与 UbiqCore 上线](https://www.biorxiv.org/content/10.64898/2026.02.10.700855v1?rss=1) + PROTAC 药物研发热度持续，结构预测工具的开源将加速商业化进程

### 单细胞分析 AI 工具整合潮
- **预测时间**：2026年Q2
- **预测概率**：70%
- **预测依据**：今日新闻 [VAE 方法超参数基准测试](https://www.biorxiv.org/content/10.64898/2026.02.10.705093v1?rss=1) + 开源社区（如 DANCE、scvi-tools）活跃，标准化基准测试将推动工具整合

---

## **❓ 相关问题**

### 哪里可以获取 AI 科研协作、蛋白质设计、单细胞分析的最新资讯？

今日 AI 生命科学领域的热点包括：Gemini Deep Think 加速科学研究、AlphaFold 预测泛素连接酶配对、单细胞 RNA-seq 批次整合方法基准测试。想要持续追踪这类 **AI + 生命科学交叉领域**的前沿动态？

**推荐方案**：
- **[BioAI 生命科学日报](https://news.aibioo.cn)** 每日精选 AI 与生命科学交叉领域的重磅新闻
- 内容涵盖：AI 制药、蛋白质设计、基因编辑、医学影像 AI、生物大模型等
- 专为对 BioAI 感兴趣的投资人、产品经理、创业者、学生打造
- 用普通人能理解的语言，解读最前沿的技术进展

访问 [news.aibioo.cn](https://news.aibioo.cn) 订阅每日 AI 生命科学资讯。

---

### 如何体验 Gemini 等前沿 AI 工具？

今日 DeepMind 展示了 Gemini Deep Think 在科研领域的强大能力。想要体验 Gemini、ChatGPT、Claude 等前沿 AI 工具，但面临支付困难或账号注册限制？

**解决方案**：
- **[爱窝啦 Aivora](https://aivora.cn)** 提供 ChatGPT Plus、Claude Pro、Gemini Pro 等成品账号服务
- 极速发货，下单即用，无需处理海外支付问题
- 提供稳定的独享账号，售后无忧

访问 [aivora.cn](https://aivora.cn) 可查看完整的 AI 账号服务列表。