---
linkTitle: AI生命延续学日报
title: AI生命延续学日报 2026/11/23
breadcrumbs: false
next: /en/2026-11/2026-11-23
description: Daily AI + longevity news and insights, tracking aging biology, rejuvenation,
  biological age, lifespan interventions, and related tools and models.
cascade:
  type: docs
---
## **Today's Summary**

```
An AI agent tracks tumor changes, agreeing with radiologists' assessments 87% of the time in clinical follow-up reviews.
Albumin modification patterns in blood may reveal biological aging status, with a critical inflection window in middle age.
The tumor tracking results come from a benchmarking phase and have not yet been validated in prospective clinical trials.
```

## **🔥 Top 10 Today**

### 1. LesionAgent Tracks Tumor Changes, Matching Radiologist Diagnoses 87% of the Time

LesionAgent is an AI agent that requires no task-specific training. It reads CT scans from different time points, automatically identifies lesions, matches the same lesion across time, and assesses tumor progression according to clinical guidelines. Across 4 public longitudinal CT datasets, it tracked more lesions and measured them more accurately than all automated baselines. In 23 clinical follow-up cases, it agreed with radiologists' response assessments 20 times, including every instance of response change. The key improvement came from the system architecture rather than the model itself: running the same LLM without the designed processing pipeline dropped detection F1 from 78% to 41%. These results are from a benchmarking phase — whether this can replace real radiology workflows still requires prospective clinical validation. Check out the [LesionAgent repository](https://github.com/MIC-DKFZ/LesionAgent) for paper details and the napari viewer app, and see the [paper index/abstract](https://papers.cool/arxiv/2611.27876) for full metrics. 🧠

### 2. Ruby, an AI Drug Potency Prediction Model, Leads on Multiple Public Benchmarks

One of the core challenges in small-molecule drug development is predicting how strongly a compound binds to its target — the "potency" — which directly determines which candidates are worth advancing. Ruby is a potency prediction model that builds on intermediate representations from the structural foundation model Pearl, without needing to compute binding poses for each compound individually. According to the [paper index/abstract](https://papers.cool/arxiv/2611.27015), Ruby achieves the highest early enrichment composite score across 7 public hit-identification targets, outperforms competing methods in average correlation across the OpenFE, CASP16, FEP+ 4, and OpenBind benchmarks, and leads on zero-shot prediction across 8 biochemical and cellular assays in the Genesis-Incyte collaboration. Training data includes proprietary data alongside the GenesisPotency-2026 dataset (CC BY-SA 4.0) released with the paper. All results are computational benchmark evaluations and have not yet translated into clinical candidates. 💊

### 3. CrypticFlow, a New Protein Conformation Prediction Model, Balances Global Accuracy with Local Geometric Validity

In structure-based drug design, predicting a protein's conformation after binding a drug (the "holo" state) is much harder than predicting the unbound state (the "apo" state). Existing models either achieve high global accuracy but produce geometrically implausible local atomic arrangements, or get the local geometry right but accumulate errors that grow with chain length. CrypticFlow uses a hierarchical flow matching approach: it first generates sparse backbone anchors in Cartesian coordinate space, then recursively fills in details in internal coordinate space. According to the [paper index/abstract](https://papers.cool/arxiv/2611.27162), it achieves the lowest median and mean Cα RMSD among comparable-parameter baselines on the D3PM test set, with adjacent distance fidelity at 99.58%. These are computational model evaluations — whether predicted conformations actually improve hit rates in real drug design remains unvalidated. 🔬

### 4. A New Aging Theory Framework Unifies DNA, RNA, Proteins, and Metabolites into One Model

Molecular biology's central dogma describes the flow of information inside cells: DNA → RNA → protein. A paper published in *The Innovation Life* proposes an "aging central dogma" that adds metabolites as a fourth layer, arguing that aging results from a gradual breakdown in the balance between synthesis, modification, and degradation across all four molecular levels. The paper argues that RNA is not merely an intermediary — defects in its transcription, splicing, modification, and localization can independently drive downstream protein homeostasis disruption. Metabolic changes like NAD⁺ decline and pro-inflammatory lipid accumulation are also framed not just as consequences of other aging hallmarks. This is a theoretical framework integrating existing data; the authors explicitly note that the field lacks consensus on the relative importance of each mechanism, and the framework itself still needs experimental testing. See the original paper at [doi:10.59717/j.xinn-life.2026.100262](https://doi.org/10.59717/j.xinn-life.2026.100262). 🧬

### 5. Tissue Architecture Features from Pathology Slides Can Supplement AI Foundation Model Predictions

Pathology foundation models learn rich features from slide images, but researchers wanted to know: beyond what these models already capture, do hand-crafted tissue architecture measurements add anything extra? According to the [paper index/abstract](https://papers.cool/arxiv/2611.27881), the team built a 139-dimensional feature set covering nuclear morphology, cell-cell connections, and multi-cell community organization, then fused it with representations from two pathology foundation models, CTransPath and PLIP. On the breast cancer BCNB dataset, estrogen receptor classification ROC-AUC reached as high as 0.9144, above either foundation model alone, with similar gains on lung tissue typing. These results come from cross-validation on specific datasets — whether the interpretable features remain stable across broader cancer types and institutions still needs further study. 🔍

### 6. R2RG Improves 3D Brain MRI Representation Learning on Small Datasets

Learning effective feature representations from 3D MRI is tough: data is scarce, dimensionality is high, and spatial information is complex. Slicing 3D volumes into 2D images for processing loses spatial relationships, while mainstream Transformer and diffusion architectures tend to underperform on small datasets. According to the [paper index/abstract](https://papers.cool/arxiv/2611.27057), R2RG combines convolutional neural networks with a generative adversarial network (GAN) for reconstruction-based representation learning. Across three standard datasets and one locally collected dataset, it outperforms contrastive representation learning methods on both Parkinson's and Alzheimer's disease classification. This is still a benchmarking phase — it doesn't yet demonstrate improved clinical diagnostic accuracy. 🧠

### 7. Albumin Modification Patterns Reveal a "Middle-Age Inflection Window" in Biological Aging

Albumin is the most abundant protein in blood, and the patterns of its post-translational modifications (chemical changes that happen after a protein is synthesized) may reflect the body's biological aging state. According to [a News-Medical report](https://www.news-medical.net/news/20261120/Albumin-modifications-reveal-new-clues-about-biological-aging.aspx), a paper published November 4, 2026 in volume 18 of *Aging* maps how albumin modifications change with age and identifies a critical inflection window in middle age. The source provides only abstract-level information — specific sample sizes, the age range of the inflection, and the types of modifications involved need confirmation from the full paper. ⏳

### 8. Mouse Study Maps the Genetic Landscape of Immune Aging

The immune system's ability to recognize and respond to cancer and infection declines with age, but the underlying genetic mechanisms aren't well understood. According to [a News-Medical report](https://www.news-medical.net/news/20261123/Preclinical-mouse-models-reveal-how-aging-impairs-immune-threat-adaptation.aspx), a research team at Monash University used preclinical mouse models to map a genetic blueprint of immune aging, revealing the genetic basis by which the immune system loses its ability to adapt to threats over time. Results are currently from mouse experiments — whether they translate to humans requires further research. 🐭

### 9. Corsera Health Launches Phase 1 Cardiovascular RNAi Prevention Drug Trial in Australia and New Zealand

Corsera Health has kicked off a Phase 1 clinical trial in Australia and New Zealand evaluating COR-2003 alone and in combination with COR-1004 as a preventive treatment for cardiovascular disease. RNAi (RNA interference) works by disrupting the expression of specific genes to reduce harmful protein production — it's still early days for this approach in cardiovascular prevention. Phase 1 trials are primarily designed to assess safety and tolerability, so efficacy claims can't be made at this stage. See [Longevity.Technology's coverage](https://longevity.technology/news/corsera-health-begins-phase-1-trial-of-dual-rnai-preventive-medicine/) for details. 💉

### 10. New Adaptive Optics Imaging Tech Can Detect Glaucoma Progression Months Earlier

Glaucoma's optic nerve damage often advances silently before patients notice any change in their vision, making early detection of progression critical for protecting sight. According to [a News-Medical report](https://www.news-medical.net/news/20261120/New-imaging-technology-detects-glaucoma-progression-months-earlier.aspx), FDA researchers developed a high-resolution adaptive optics imaging technology that showed potential to detect signs of glaucoma progression months earlier than current methods in patients at the University of Maryland. The source is abstract-level only — specific sample sizes, the magnitude of the early-detection advantage, and false positive rates need confirmation from the full paper. This is promising early-stage research. 👁️

---

## **🧪 Frontier Research**

### COVID-19 Vaccines Carry a Higher Shoulder Injury Risk Than Flu Shots, Though the Absolute Difference Is Small

SIRVA (Shoulder Injury Related to Vaccine Administration) occurs when a vaccine is injected too high on the arm or at the wrong angle, causing fluid to enter the shoulder joint and leading to pain and limited mobility. According to [a News-Medical report](https://www.news-medical.net/news/20261123/COVID-19-vaccines-carry-a-higher-shoulder-injury-risk-than-flu.aspx), a study covering nearly two million doses found that COVID-19 vaccines carry a 63% higher relative risk of SIRVA compared to flu vaccines, though the absolute increase in risk is small. The source is abstract-level — specific incidence rates by vaccine type need confirmation from the full paper.

[![Source image: COVID-19 vaccines carry a higher shoulder injury risk than flu](https://www.news-medical.net/images/news/ImageForNews_852423_1795431272968629.jpg)](https://www.news-medical.net/news/20261123/COVID-19-vaccines-carry-a-higher-shoulder-injury-risk-than-flu.aspx)

### NIH Awards $3.7M Five-Year Grant for Cartilage Regeneration Research

Osteoarthritis causes gradual cartilage wear in joints, and effective repair options are currently lacking. According to [a News-Medical report](https://www.news-medical.net/news/20261120/2437-million-NIH-grant-backs-innovative-cartilage-regeneration-research.aspx), the National Institutes of Health (NIH) awarded a $3.7 million, five-year R01 grant to a project researching new approaches to cartilage repair in osteoarthritis. The source covers only the funding announcement — the specific research plan and preliminary data need further review. 🦴

---

## **◎ Industry Shifts & What They Mean for You**

### TEA-Bench-BR: A Coding Agent Benchmark for Healthcare Clinical Pathway Code

When clinical rules get translated into code, they're prone to "silent errors" — the program runs fine, the output looks reasonable, but the actual clinical judgment is wrong. TEA-Bench-BR is a coding benchmark built around Brazil's early autism screening pathway. It includes 144 tasks and 6,798 hidden test cases, and supports FHIR R4 medical data standard export. According to the [paper index/abstract](https://papers.cool/arxiv/2611.27895), the Gemma 4 31B model achieves a 77.8%–85.2% solve rate on single-tool tasks, with errors concentrated in input validation rather than clinical decision logic. The 12B model has a 10.1% miss rate on cases requiring referral; the 31B model drops that to just 0.02%. This benchmark targets healthcare coding compliance scenarios and helps quantify model reliability on rule translation before deployment, though it uses simulated instruments rather than real clinical tools. 🏥