---
linkTitle: AI生命延续学日报
title: AI生命延续学日报 2026/11/2
breadcrumbs: false
next: /en/2026-11/2026-11-02
description: Daily AI + longevity news and insights, tracking aging biology, rejuvenation,
  biological age, lifespan interventions, and related tools and models.
cascade:
  type: docs
---
## **Today's Summary**

```
A splicing factor introduced into aged mice extended lifespan by roughly 14%, with no observed tumor risk.
Ultra-short wave electromagnetic fields may enhance brain waste clearance in mice, with cognitive improvement signals observed in an Alzheimer's model.
Both findings come from animal studies — whether they translate to humans remains to be seen.
```

## **🔥 Top 3 Today**

### 1. Splicing Factor SRSF1 Extends Mouse Lifespan by 14% — Zero Cancer Risk 🧬

SRSF1 tops the charts as a longevity candidate. Researchers ran a machine learning scan across human skin cell gene expression profiles to find genes that could roll back a cell's "transcriptomic age." The winner? Splicing factor SRSF1 — a master regulator capable of tweaking how thousands of genes are expressed simultaneously. When introduced into aged mice (accumulating mainly in the liver), SRSF1 slowed the aging rate, stretched lifespan by 14%, and kept cells looking and functioning normal — no pluripotency issues or tumor risks like those seen with Yamanaka factors. These results are still mouse-only; human translation is an open question. Check out [Fight Aging!'s coverage](https://www.fightaging.org/archives/2026/11/fight-aging-newsletter-november-2nd-2026/) for deeper background and mechanism discussion.

### 2. Ultra-Short Wave EM Therapy Boosts Brain Waste Clearance in Mice Within 10 Minutes 🧠

The glymphatic system — the brain's own "lymphatic drainage" network — is responsible for flushing out metabolic junk like protein fragments. It gets sluggish with age and is linked to neurodegenerative disease. [A study published in *Science Advances*](https://doi.org/10.1126/sciadv.aeh8870) shows that a 40.68 MHz ultra-short wave electromagnetic field can ramp up that clearance flow in healthy mice within 10 minutes. The mechanism involves nudging aquaporin AQP4 on astrocytes to relocate to perivascular positions, while also boosting slow-wave (delta wave) synchronization in the brain. The researchers also spotted cognitive improvement signals in an Alzheimer's mouse model — but again, everything here is animal data. Human efficacy is still TBD.

### 3. Anthropic Reveals Drug Development Moves: One-Person Acquisition, 6 Partnerships, Multiple Lab Results 💊

Anthropic dropped a press release post-IPO filing, laying out exactly what it's been up to in drug development. According to [GEN's report](https://www.genengnews.com/topics/genome-editing/stockwatch-gene-editing-shares-jump-on-esgct-data-fda-draft-guidance/), Anthropic acquired Mithril Medicine in August — a solo-founder company that used Claude to coordinate 11 external labs and handle operations, hitting a positive result in mice for a muscular dystrophy therapy within 18 months, with human trials potentially as early as 2028. Among six partnerships: Generate Biomedicines' 6-person science team used Claude Code to design CAR-T genetic instruction sequences roughly 70% shorter than the standard version, with better performance in lab tests; Enveda had Claude review 1,061 pages of manufacturing documents, catching 7 issues that human reviewers missed. Most of these results are still at the lab stage — they don't represent clinical efficacy.

[![Source image: StockWatch: Gene Editing Shares Jump on ESGCT Data, FDA Draft Guidance](https://www.genengnews.com/wp-content/uploads/2026/10/Diamantas_Kyle_900-x-900_Flag-253x300.jpg)](https://www.genengnews.com/topics/genome-editing/stockwatch-gene-editing-shares-jump-on-esgct-data-fda-draft-guidance/)

## **⚡ Product & Feature Updates**

### General-Purpose LLMs Beat Specialized Chemistry Models on Chemical Property Prediction 🔬

GPT-6 Astra and friends are outperforming chemistry specialists — at least in low-data settings. [A comparative study posted to arXiv](https://papers.cool/arxiv/2610.41899) found that with just 60 experimental data points, general-purpose large language models outperformed chemistry-specific models like ChemBERTa and MoLFormer on 5 physicochemical and quantum chemistry property regression tasks. Specialized chemistry models needed around 600 data points just to match what the generalists could do with 60. The researchers' take: the accumulated human chemical knowledge baked into general models is more valuable than raw molecular structure recognition — making them a solid fit for chemistry research scenarios where experimental data is scarce. This is a preprint, not yet peer-reviewed.

---

## **🧪 Cutting-Edge Research**

### Multi-Scale Graph Neural Network for Simultaneous Gene Expression Prediction from Pathology Slides 🔭

Spatial transcriptomics — mapping gene expression across tissue locations — is expensive and hard to come by. [A study on arXiv](https://papers.cool/arxiv/2610.41692) proposes using a graph neural network to predict gene expression at the bulk, spatial, and single-cell levels simultaneously from standard pathology whole-slide images (WSIs). Trained on lung, kidney, and breast cancer tissue, the model performs well at the bulk level but accuracy drops at the single-cell level. Downstream applications include survival analysis and tumor classification. Worth noting: a correlation between image features and gene expression doesn't mean image analysis can replace actual sequencing. The model is currently trained on cancer datasets — how well it generalizes to other diseases is still an open question.

---

## **◎ Industry Shifts & Personal Impact**

### Heart Valve Disease Deaths in U.S. Adults 65+ Are Climbing for the First Time in Nearly 20 Years ❤️‍🩹

Heart valve disease mortality is trending in the wrong direction. [Preliminary research presented at the American Heart Association's 2026 Scientific Sessions](https://medicalxpress.com/news/2026-10-deaths-heart-valve-disease-adults.html) shows that after roughly 20 years of decline, death rates from heart valve disease in Americans 65 and older have been rising since 2018 — and projections suggest the trend could persist through 2040. For anyone focused on cardiovascular health in older adults, this signals a growing burden over the next decade-plus, making early screening and proactive management strategies worth a closer look. Data comes from a conference preprint, not yet peer-reviewed, and the specific driving factors are pending the full paper.

---

## **⌘ Open Source Top Picks**

### Alpha-Park/genpark-personal-agent-cardiorespiratory-vo2max-velocity-skill: Aerobic Capacity & Cardiopulmonary Biological Age Estimator 🏃

This personal agent tool helps users estimate aerobic capacity (VO2max — a standard marker for cardiorespiratory endurance and long-term health risk) using heart rate data and running test results. According to the [repo description](https://github.com/Alpha-Park/genpark-personal-agent-cardiorespiratory-vo2max-velocity-skill), it can also convert results into a cardiorespiratory biological age and benchmark it against the ACSM Longevity Risk Index. Curious readers can check the repo for input requirements and estimation logic. License status and actual runtime behavior are unverified; self-reported features haven't been independently validated.

### Uditya007/BioSync: Free, Open-Source Biological Age & Recovery Tracking for Apple Watch 🍎

BioSync bills itself as an open-source alternative to WHOOP and Oura — running locally on Apple Watch and iPhone, no subscription required. According to the [repo description](https://github.com/Uditya007/BioSync), it offers real-time biological age estimation, recovery status, stress tracking, and sleep architecture analysis, with data staying on-device rather than hitting the cloud. Keep in mind that biological age is an estimate, not a clinical measurement. The project has very few stars, so stability and algorithmic rigor are worth checking yourself — license status isn't clearly stated in the available materials.

---

## **❓ Related Questions**

### What's the Difference Between a Lysosomal Aging Clock and a Standard DNA Methylation Aging Clock? 🕰️

They measure aging at completely different levels. DNA methylation clocks (like the Horvath clock) estimate age from chemical modification patterns in the cell's nuclear genome — a readout of the cell's overall epigenetic state. A lysosomal aging clock zooms in on a specific organelle — the lysosome — and looks at the accumulation patterns of specific metabolites inside it. According to [the original research covered by Fight Aging!](https://www.fightaging.org/archives/2026/11/fight-aging-newsletter-november-2nd-2026/), the lysosomal clock's markers are nearly invisible in whole-tissue analysis and only become detectable after isolating lysosomes separately — which suggests it's capturing much finer-grained organelle-level changes. Whether either clock can substitute for the other, or which one better predicts functional decline, remains an open question.