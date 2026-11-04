---
linkTitle: AI生命延续学日报
title: AI生命延续学日报 2026/11/3
breadcrumbs: false
next: /en/2026-11/2026-11-03
description: Daily AI + longevity news and insights, tracking aging biology, rejuvenation,
  biological age, lifespan interventions, and related tools and models.
cascade:
  type: docs
---
## **Today's Summary**

```
Anti-aging vaccines extend median lifespan in mice by 12%, targeting senescent cells rather than pathogens.
US drug regulators plan to include aging in their regulatory science agenda — policy details pending verification.
Vaccine results observed only in female mice — no evidence of efficacy in humans yet.
```

## **📌 Today's Top 10 Highlights**

### 1. RangeFinder: Protein Pocket Model Predicts Ligand Property Ranges

RangeFinder, per [Paper Index/Abstract](https://papers.cool/arxiv/2611.03379), is an SE(3)-equivariant transformer model that takes structural, chemical, and evolutionary information from protein binding pockets (the cavities where drug molecules bind) and directly predicts numerical ranges for nine ligand physicochemical properties — instead of scoring molecules one by one. On the BioLiP2 dataset, it hits a range-IoU of 0.464 at just 12.2 milliseconds per pocket, beating all deployable baselines. Ablation studies show performance depends more on the density and quality of ligand supervision data than on any single input modality. The authors position it as a low-cost pre-docking molecular filtering prior, with code open-sourced on [GitHub Repository](https://github.com/alannadels/RangeFinder). Actual drug screening validation hasn't been done yet.

### 2. NormMoX: MRI-Based Autism Classification Using a "Typical Brain" Reference

NormMoX, per [Paper Index/Abstract](https://papers.cool/arxiv/2611.03349), uses normative modeling (building normal ranges for brain region metrics across age and sex in healthy populations, then measuring how much an individual deviates) to classify autism from structural and functional MRI. Across 1,035 participants in ABIDE I, it achieves an AUROC of 0.728, outperforming both linear and deep fusion baselines. The model uses a "typical brain" as a shared reference, doesn't require imputation when a modality is missing, and can point out exactly which modality and brain region each person deviates from the norm. This is retrospective classification only — no clinical diagnosis validation. Code is open-sourced on [GitHub Repository](https://github.com/Novelex/NormMox).

### 3. Training-Free Method Finds High-Functioning Antimicrobial Peptides

A training-free information-theoretic approach, per [Paper Index/Abstract](https://papers.cool/arxiv/2611.03603), outperformed variational autoencoders at searching for rare high-functioning sequences across two complete fitness landscapes. The method doesn't need training, runs significantly faster than standard ML/AI approaches, and is more effective at discovering rare high-functioning sequences. The team applied it to find antimicrobial peptides that specifically target bacterial cell membranes without hitting eukaryotic cell membranes. Whether the antimicrobial activity and selectivity hold up in biological experiments still needs confirmation down the line.

### 4. Monofacts in Training Data Set the Ceiling for Model Scientific Discovery

Monofacts — facts that appear only once during training — set the upper limit on a large language model's scientific discovery capabilities, per [Paper Index/Abstract](https://papers.cool/arxiv/2611.03617). In materials science and regulatory genomics, the team directly manipulated the monofact rate in training sets and found that more monofacts led to more discoveries across two open-source model families — a relationship not explained by training set diversity alone. The pattern transfers across scientific domains when paired with in-domain data. The study was conducted on controlled training sets, so whether it generalizes to general-purpose large models remains to be seen.

### 5. ManifoldVelo: Jointly Recovering Cell Trajectories and RNA Dynamics

ManifoldVelo, per [Paper Index/Abstract](https://papers.cool/arxiv/2611.03056), is a topology-constrained framework that jointly recovers pseudotime (estimated time ordering of cellular processes using gene expression) and RNA velocity (direction of cellular change indicated by transcription and degradation dynamics) on a continuous expression manifold. It achieves the best pseudotime recovery and highest directional consistency in both multimodal cyclic and branching simulations, and real data analysis aligns with pancreatic development stages. New cells can be predicted using spliced RNA alone, no retraining of the reference model required. The method has been validated on simulations and single-cell data but hasn't yet been used for in vivo causal inference.

### 6. ILR-SMO: Iterative Refinement Integrates Spatial Multi-Omics Data

ILR-SMO, per [Paper Index/Abstract](https://papers.cool/arxiv/2611.02932), reframes spatial multi-omics integration (measuring multiple molecular types while preserving tissue spatial location) as a stability-aware refinement process over a shared latent representation — rather than a one-shot fusion. By progressively injecting each modality's information with reliability-aware gating and spatial consistency constraints, it outperforms seven existing methods across five spatial multi-omics benchmarks and is more robust to modality imbalance and measurement noise. The framework is self-supervised, but validation is limited to public benchmark datasets — performance on real clinical tissue samples remains to be checked.

### 7. Vis-Lens: Generating Images Preferred by Artificial Networks and Human Brains

Vis-Lens, per [Paper Index/Abstract](https://papers.cool/arxiv/2611.03597), combines a variational autoencoder with a diffusion model into an image generation framework that uses activation-based prior regularization on latent codes to directly generate natural images "preferred" by artificial neural network units or human brain visual cortex (using fMRI data) — no per-image iterative optimization needed. Both activation modulation capability and image realism outperform recent methods on both artificial neural networks and human visual cortex. This is a representation visualization tool and doesn't involve clinical diagnosis or therapeutic applications.

### 8. Five-Factor Dementia Risk Score Designed for Low- and Middle-Income Countries

A five-factor risk score developed and validated by an international team led by Northumbria University, per [Media Report](https://www.news-medical.net/news/20261103/New-dementia-risk-tool-designed-for-the-countries-that-need-it-most.aspx), aims to identify older adults at high risk of dementia in low- and middle-income countries — where roughly 60% of global dementia cases now occur. Only a short summary was provided; the specific five factors, validation sample size, and predictive performance need to be checked against the original paper.

![Dementia Risk Tool for Low- and Middle-Income Countries](https://www.news-medical.net/images/tags/TagImage-1241-45296008423622681466-620x480.jpg)

### 9. Blue Zone Younger Generations Are Shifting Their Diet Patterns

Loma Linda Blue Zone (a region famous for longevity) and surrounding communities are the focus of a cross-sectional study, per [Media Report](https://www.news-medical.net/news/20261102/Younger-adults-in-Americas-famous-Blue-Zone-are-eating-differently.aspx), surveying dietary patterns across 615 adults. Vegetarianism is more common among older adults and Seventh-day Adventists, and vegetarians have significantly lower BMI than non-vegetarians. Researchers worry whether younger generations are keeping up the traditional eating habits, but cross-sectional data can't prove that vegetarian proportions are declining over time.

![Loma Linda Blue Zone Diet Study](https://www.news-medical.net/images/news/ImageForNews_850408_17936670384939234.jpg)

### 10. Senolytic Vaccine Extends Median Lifespan in Mice by 12%

A three-element senolytic vaccine (a vaccine that clears senescent cells) administered to female B6 mice in late life reduced aging markers and extended median lifespan by 12%, per [Media Report](https://lifespan.io/rejuvenation-roundup-october-2026/). The vaccine targets senescent cells, not pathogens. Results were observed only in female mice and don't demonstrate efficacy in humans. Source is a Lifespan.io monthly roundup; original paper details pending verification.

[![Source Image: Rejuvenation Roundup October 2026](https://lifespan.io/wp-content/uploads/2026/11/Rejuvenation-Roundup-October-2026-262x187.png)](https://lifespan.io/rejuvenation-roundup-october-2026/)

## **🔬 Frontier Research**

### Quantum Machine Learning Takes a Shot at Small-Data Lung Cancer Prediction

Quantum machine learning gets evaluated for feasibility of lung cancer prediction on small datasets, per [Media Report](https://www.news-medical.net/news/20261102/New-study-evaluates-quantum-machine-learning-for-lung-cancer-prediction.aspx). The study explores whether quantum computing can learn useful patterns from limited symptom and risk factor data. Only a short summary was provided; specific model architecture, data scale, and predictive performance need to be checked against the original paper.

### Menopause and Brain Aging: Researchers Uncover Molecular Links

Menopause and brain aging share molecular links that researchers at UC Santa Barbara, UC San Francisco, and other institutions are actively investigating, per [Media Report](https://www.news-medical.net/news/20261102/Study-identifies-molecular-links-between-menopause-and-brain-aging.aspx) — menopause brings changes like hot flashes, brain fog, and sleep disturbances. The report covers research directions; specific molecular mechanisms, sample sizes, and conclusions need to be checked against the original paper.

![Molecular Links Between Menopause and Brain Aging Study](https://www.news-medical.net/image-handler/picture/2014/7/Menopause-620x480.jpg)

## **🌍 Industry Moves & Personal Impact**

### $80M Initiative to Study How Energy Shapes Brain Function

An $80 million international research initiative will explore how energy shapes brain function, with ISTA's Professor Tim Vogels receiving $3 million of the funding, per [Media Report](https://www.news-medical.net/news/20261102/New-international-initiative-explores-how-energy-shapes-brain-function.aspx). Only a short summary was provided; specific research directions, participating institutions, and expected outputs need to be checked against the original paper.

## **💻 Open Source Top Projects**

### dclai-aha/DNA-Damage-Aging-Clocks: DNA Damage Aging Clocks

dclai-aha/DNA-Damage-Aging-Clocks provides Python scripts and datasets for building DNA damage aging clocks based on AP sites (damage where a base is lost from DNA) and SSBs (single-strand breaks) — models that estimate biological age from DNA damage levels — and for evaluating the impact of a high-fat diet on predicted age in mice. Per [GitHub Repository](https://github.com/dclai-aha/DNA-Damage-Aging-Clocks), there's recent activity with 1 star. The clocks were built on mouse data with no mention of human validation; license and running status need to be checked.

### Zhaowado/biological-age-prediction-model: Biological Age Prediction Model

Zhaowado/biological-age-prediction-model, per [GitHub Repository](https://github.com/Zhaowado/biological-age-prediction-model), has recent activity with 1 star. The repo has no description; specific inputs/outputs, data used, and modeling methods need to be checked against the README.

## **💡 Related Questions**

### Could Epigenetic Clock Results Be False Positives?

Epigenetic clocks (methods that estimate biological age using DNA methylation) may be producing false positives in some anti-aging intervention studies, per [Media Report](https://lifespan.io/rejuvenation-roundup-october-2026/). A framework for interpreting epigenetic clock results in anti-aging interventions suggests some previously published single-clock findings may need a second look. The recommendation is to cross-reference clock changes with tissue function, healthspan, and mortality — rather than using them as standalone evidence of rejuvenation. Source is a Lifespan.io roundup; original paper methodology pending verification.