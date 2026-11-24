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
AI agents track tumor changes, reaching 87% agreement with radiologists in clinical follow-ups.
Albumin modification patterns in blood may reveal biological aging status, with a key turning window during middle age.
Tumor tracking results come from the benchmark testing phase and have not yet undergone prospective clinical validation.
```

## **🎯 Top 10 Focus Today**

### 1. AI Agent Tracks Tumor Changes, Reaching 87% Diagnostic Agreement with Radiologists

LesionAgent is an AI agent that needs no task-specific training. It reads patient CT scans from different time points, automatically spots lesions, matches the same lesion across time, and judges whether tumors have progressed per clinical guidelines. On 4 public longitudinal CT datasets, it tracked more lesions and measured them more accurately than all automated baseline methods. In 23 clinical follow-ups, it matched radiologists' response assessments 20 times, including every single response change. The key improvement comes from system architecture, not the model itself. Using the same LLM but stripping its designed processing pipeline dropped detection F1 from 78% to 41%. These are benchmark-stage results. Whether it can replace real radiology workflows needs prospective clinical validation. For more on the paper and the napari reading app, check the [LesionAgent repository](https://github.com/MIC-DKFZ/LesionAgent). The [paper index/abstract](https://papers.cool/arxiv/2611.27876) has the full metrics.

### 2. AI Drug Activity Prediction Model Ruby Leads Multiple Public Benchmarks

Ruby, a potency prediction model, tackles one of the core challenges in small-molecule drug development: predicting how strongly a compound binds its target (potency), which directly decides which candidates are worth pushing forward. Ruby builds on intermediate representations from the structure-based foundation model Pearl and doesn't need to compute binding poses for each compound individually. According to the [paper index/abstract](https://papers.cool/arxiv/2611.27015), Ruby scored highest in early enrichment composite score on 7 public hit compound identification targets, beat comparison methods in average correlation across four benchmarks (OpenFE, CASP16, FEP+ 4, and OpenBind), and led in zero-shot prediction across 8 biochemical and cell assays in the Genesis-Incyte collaboration. Training data includes proprietary data and the GenesisPotency-2026 dataset released with the paper (CC BY-SA 4.0 license). All results are computational benchmarks, not yet translated into clinical drug candidates.

### 3. New Protein Conformation Prediction Model Balances Overall Accuracy with Local Geometric Plausibility

CrypticFlow takes on a tough problem in structure-based drug design: predicting protein conformations after drug binding (the "holo state") is way harder than predicting the unbound state (the "apo state"). Existing models either nail overall accuracy but produce implausible local atomic geometry, or work locally but let errors pile up and amplify along the chain. CrypticFlow uses a hierarchical flow matching scheme, first generating sparse backbone anchor points in Cartesian coordinate space, then recursively filling in details in internal coordinate space. According to the [paper index/abstract](https://papers.cool/arxiv/2611.27162), on the D3PM test set it hit the lowest median and mean Cα RMSD among baselines of the same parameter count, with adjacency distance fidelity reaching 99.58%. This is computational model evaluation. Whether predicted conformations actually boost hit rates in real drug design remains unverified.

### 4. New Aging Theory Framework Unifies DNA, RNA, Proteins, and Metabolites into One Model 🧬

A paper published in *The Innovation Life* proposes an "aging central dogma" that extends the molecular biology central dogma (DNA → RNA → proteins) by adding metabolites as a fourth layer. It argues that aging results from the progressive breakdown of balance among synthesis, modification, and degradation across these four molecular layers. RNA isn't just an intermediate messenger, the paper points out. Defects in its transcription, splicing, modification, and localization can independently drive downstream protein homeostasis disruption. Metabolic changes like NAD⁺ decline and pro-inflammatory lipid accumulation aren't merely consequences of other aging hallmarks either. This is a theoretical framework integrating existing data. The authors explicitly state that the field has no consensus on the relative importance of each mechanism, and the framework itself still needs experimental validation. See the original paper at [doi:10.59717/j.xinn-life.2026.100262](https://doi.org/10.59717/j.xinn-life.2026.100262).

### 5. Pathology Slide Tissue Structure Features Can Complement AI Foundation Model Predictions

A 139-dimensional set of cell- and tissue-level features can add predictive value on top of what pathology foundation models already learn from slide images. These handcrafted tissue structure metrics cover nuclear morphology, intercellular connections, and multicellular community organization. According to the [paper index/abstract](https://papers.cool/arxiv/2611.27881), researchers fused them with representations from two pathology foundation models, CTransPath and PLIP. On the breast cancer BCNB dataset, estrogen receptor classification ROC-AUC reached 0.9144, beating foundation models alone. Lung tissue typing showed similar gains. These results come from cross-validation on specific datasets. Whether interpretable features hold up across broader disease types and institutions needs further study.

### 6. 3D Brain MRI Representation Learning Shows Improvements on Small Datasets

R2RG takes on the challenge of learning effective feature representations from 3D MRI images, where data is scarce, dimensions are high, and spatial information is complex. Slicing 3D volumes into 2D for processing throws away spatial relationships, and mainstream Transformer and diffusion architectures tend to choke on small datasets. According to the [paper index/abstract](https://papers.cool/arxiv/2611.27057), R2RG combines convolutional neural networks with generative adversarial networks (GANs) for reconstruction-based representation learning. On three standard datasets and one locally collected dataset, it outperformed contrastive representation learning methods in classifying Parkinson's and Alzheimer's disease. This is currently at the benchmark evaluation stage and doesn't yet show improved clinical diagnostic accuracy.

### 7. Albumin Modification Patterns Reveal a "Middle-Age Turning Window" in Biological Aging

Albumin, the most abundant protein in blood, carries post-translational modification (chemical changes happening after protein synthesis) patterns that may reflect the body's biological aging status. According to the [News-Medical report](https://www.news-medical.net/news/20261120/Albumin-modifications-reveal-new-clues-about-biological-aging.aspx), a paper published on November 4, 2026 in *Aging* journal volume 18 maps the full landscape of how albumin modifications change with age and spots a key turning window during middle age. The source material only provides abstract-level info. Specific sample sizes, the age range of the turning point, and modification types need confirmation from the original paper.

### 8. Mouse Study Maps the Genetic Landscape of Immune Aging

A Monash University research team, using preclinical mouse models, has mapped a genetic atlas of immune aging, revealing the gene-level basis for why the immune system loses its ability to recognize and fight cancer and infections as we age. According to the [News-Medical report](https://www.news-medical.net/news/20261123/Preclinical-mouse-models-reveal-how-aging-impairs-immune-threat-adaptation.aspx), these mechanisms have been unclear until now. These results come from mouse experiments. Whether they translate to humans needs follow-up research.

### 9. Corsera Health Launches Phase 1 Trial of Cardiovascular RNAi Preventive Drug in Australia and New Zealand 💊

Corsera Health has kicked off a phase 1 clinical trial in Australia and New Zealand to evaluate the safety of COR-2003 used alone and combined with COR-1004 as a preventive drug for cardiovascular disease. RNAi (RNA interference) is a technique that cuts harmful protein production by interfering with specific gene expression. It's still in early exploration for cardiovascular prevention. The phase 1 trial primarily checks safety and tolerability and can't yet speak to effectiveness. See the [Longevity.Technology report](https://longevity.technology/news/corsera-health-begins-phase-1-trial-of-dual-rnai-preventive-medicine/) for details.

### 10. New Adaptive Optics Imaging Tech Could Detect Glaucoma Progression Months Earlier

A high-resolution adaptive optics imaging technology developed by FDA researchers shows potential to pick up glaucoma progression signs months earlier than existing methods. Glaucoma's optic nerve damage often silently progresses before patients notice vision changes, making early detection critical for preserving eyesight. According to the [News-Medical report](https://www.news-medical.net/news/20261120/New-imaging-technology-detects-glaucoma-progression-months-earlier.aspx), the technology was tested in University of Maryland patients. The source material is abstract-level. Specific sample sizes, the lead time advantage, and false positive rates need confirmation from the original paper. This is currently a promising early-stage study.

---

## **🔬 Frontier Research**

### COVID Vaccine Shoulder Injury Risk Higher Than Flu Vaccine, But Absolute Difference Is Small

A study covering nearly two million doses found that COVID vaccines carry a 63% higher relative risk of SIRVA than flu vaccines, though the absolute risk bump is tiny. SIRVA (shoulder injury related to vaccine administration) happens when a shot goes in too high or at the wrong angle, letting fluid leak into the shoulder joint and causing pain and restricted movement. According to the [News-Medical report](https://www.news-medical.net/news/20261123/COVID-19-vaccines-carry-a-higher-shoulder-injury-risk-than-flu.aspx), the source material is abstract-level. Specific incidence rates by vaccine type need confirmation from the original paper.

[![Source image: COVID-19 vaccines carry a higher shoulder injury risk than flu](https://www.news-medical.net/images/news/ImageForNews_852423_1795431272968629.jpg)](https://www.news-medical.net/news/20261123/COVID-19-vaccines-carry-a-higher-shoulder-injury-risk-than-flu.aspx)

### Cartilage Regeneration Research Lands $3.7M Five-Year NIH Grant

A $3.7 million, five-year R01 grant from the NIH will back a project investigating new methods for cartilage repair in osteoarthritis. Osteoarthritis gradually wears down joint cartilage, and effective repair options are currently lacking. According to the [News-Medical report](https://www.news-medical.net/news/20261120/2437-million-NIH-grant-backs-innovative-cartilage-regeneration-research.aspx), the source material only provides funding info. Specific research plans and preliminary data need to be verified.

---

## **📊 Industry Changes & Personal Impact**

### Coding Agent Benchmark TEA-Bench-BR Tests Medical Clinical Pathway Code

TEA-Bench-BR, a coding benchmark built on Brazil's early autism screening pathway, tackles a real problem: translating clinical rules into code is prone to "silent errors," where programs run and produce plausible-looking results but actually make wrong clinical judgments. The benchmark packs 144 tasks and 6,798 hidden test cases and supports FHIR R4 medical data standard export. According to the [paper index/abstract](https://papers.cool/arxiv/2611.27895), the Gemma 4 31B model hit a 77.8%–85.2% solve rate on single-tool tasks, with errors mainly in input validation rather than clinical judgment logic. The 12B model had a 10.1% miss rate on cases requiring referral, while the 31B model's was just 0.02%. This benchmark targets medical coding compliance scenarios and helps quantify model reliability in rule translation before deployment, though it uses simulated instruments rather than real clinical tools.