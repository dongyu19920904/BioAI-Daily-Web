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
Anti-aging vaccine extends median lifespan in mice by 12%, targeting senescent cells rather than pathogens.
U.S. drug regulators plan to add aging to their regulatory science agenda — policy details pending verification.
Vaccine results observed in female mice only; cannot be extrapolated to humans.
```

## **🔥 Top 10 Daily Highlights**

### 1. Protein Pocket Model Predicts Ligand Property Ranges

[RangeFinder](https://papers.cool/arxiv/2611.03379) is an SE(3)-equivariant transformer that takes structural, chemical, and evolutionary info from protein binding pockets and directly predicts numerical ranges for nine ligand physicochemical properties — no per-molecule scoring needed. On the BioLiP2 dataset, it hits a range-IoU of 0.464 at just 12.2ms per pocket, beating all deployable baselines. Ablations show performance depends more on the density and quality of ligand supervision data than on any single input modality. It's positioned as a low-cost molecular pre-filter before docking, with code open-sourced at the [GitHub repo](https://github.com/alannadels/RangeFinder) — actual drug screening validation hasn't been done yet. 🧬

### 2. Autism Classification from MRI Using a Typical Brain as Reference

[NormMoX](https://papers.cool/arxiv/2611.03349) uses normative modeling — building a "normal range" for each brain region based on age and sex in healthy populations, then measuring individual deviation — to classify autism from structural and functional MRI. On 1,035 participants from ABIDE I, it achieves an AUROC of 0.728, outperforming both linear and deep fusion baselines. Using a "typical brain" as a shared reference, it handles missing modalities without imputation and can point to exactly which modality and brain region each person deviates from. This is retrospective classification, not clinical diagnostic validation. Code is open at the [GitHub repo](https://github.com/Novelex/NormMox). 🧠

### 3. Training-Free Method Finds High-Function Antimicrobial Peptides

[This paper](https://papers.cool/arxiv/2611.03603) pits variational autoencoders against information-theoretic methods on two complete fitness landscapes to find rare, high-function sequences. The information-theoretic approach requires zero training, runs significantly faster than standard ML/AI methods, and is more effective at surfacing those rare high-performers. The team then applied it to discover antimicrobial peptides that target bacterial cell membranes without hitting eukaryotic membranes. Whether this holds up in biological experiments is still TBD. 🦠

### 4. Single-Occurrence Facts in Training Data Cap a Model's Scientific Discovery Ability

[This research](https://papers.cool/arxiv/2611.03617) traces LLM scientific discovery capability back to training data, arguing that *monofacts* — facts appearing only once in training — set the ceiling for discovery. In materials science and regulatory genomics, the team directly manipulated monofact rates in training sets and found: more monofacts → more discoveries across two open-source model families, and this can't be explained by dataset diversity alone. The relationship also transfers across scientific domains when using paired in-domain data. Results are from controlled training sets; generalizability to large general-purpose models is unconfirmed. 📊

### 5. Jointly Recovering Cell Trajectories and RNA Dynamics

[ManifoldVelo](https://papers.cool/arxiv/2611.03056) is a topology-constrained framework that jointly recovers pseudotime (estimated time ordering cells by gene expression) and RNA velocity (the direction of cellular change based on transcription/degradation dynamics) on a continuous expression manifold. It achieves best-in-class pseudotime recovery and directional consistency across multimodal cyclic and branching simulations, with real data analysis aligning with pancreatic development stages. New cells can get predictions using only spliced RNA — no need to retrain the reference model. Validated on simulated and single-cell data; not yet used for in vivo causal inference. 🔬

### 6. Iterative Refinement for Spatial Multi-Omics Integration

[ILR-SMO](https://papers.cool/arxiv/2611.02932) reframes spatial multi-omics integration (measuring multiple molecular types while preserving tissue spatial location) as a stability-aware iterative refinement of shared latent representations, rather than a one-shot fusion. By progressively injecting modality information with reliability-aware gating and spatial consistency constraints, it outperforms seven existing methods on five spatial multi-omics benchmarks and is more robust to modality imbalance and measurement noise. The framework is self-supervised; validation is limited to public benchmark datasets — real clinical tissue performance is unconfirmed. 🧫

### 7. Generating Visual Images Preferred by Artificial Networks and Human Brains

[Vis-Lens](https://papers.cool/arxiv/2611.03597) combines a VAE and a diffusion model in an image generation framework that uses activation-based prior regularization of latent codes to directly generate natural images "preferred" by either artificial neural network units or human visual cortex (via fMRI data) — no per-image iterative optimization required. It outperforms recent methods on both activation modulation and image realism for both artificial networks and human visual cortex. This is a representation visualization tool, not a clinical application. 👁️

### 8. Dementia Risk Score for Low- and Middle-Income Countries

A [media report](https://www.news-medical.net/news/20261103/New-dementia-risk-tool-designed-for-the-countries-that-need-it-most.aspx) covers an international team led by Northumbria University that developed and validated a five-factor risk score to identify older adults at high risk of dementia in low- and middle-income countries — where roughly 60% of global dementia cases now occur. The input only provides abstract-level info; the specific five factors, validation sample size, and predictive performance are pending verification from the original paper.

![Dementia Risk Tool for Low- and Middle-Income Countries](https://www.news-medical.net/images/tags/TagImage-1241-45296008423622681466-620x480.jpg)

### 9. Dietary Patterns Shifting Among Younger Adults in America's Famous Blue Zone

A [media report](https://www.news-medical.net/news/20261102/Younger-adults-in-Americas-famous-Blue-Zone-are-eating-differently.aspx) covers a cross-sectional study of 615 adults examining dietary patterns in the Loma Linda Blue Zone (a region renowned for longevity) and surrounding communities. Vegetarianism is more common among older adults and Seventh-day Adventists, and vegetarians show significantly lower BMI than non-vegetarians. Researchers are worried about whether younger generations are keeping up traditional dietary habits — but cross-sectional design can't prove vegetarianism rates are actually declining over time. 🥗

![Loma Linda Blue Zone Dietary Study](https://www.news-medical.net/images/news/ImageForNews_850408_17936670384939234.jpg)

### 10. Anti-Aging Vaccine Extends Median Mouse Lifespan by 12%

A [media report](https://lifespan.io/rejuvenation-roundup-october-2026/) covers a study where female B6 mice treated late in life with a triple-element senolytic vaccine (one that clears senescent cells rather than pathogens) showed reduced aging markers and a 12% increase in median lifespan. Results are in female mice only and can't be extrapolated to humans. Source is Lifespan.io's monthly roundup; original paper details pending verification. 💉

[![Source image: Rejuvenation Roundup October 2026](https://lifespan.io/wp-content/uploads/2026/11/Rejuvenation-Roundup-October-2026-262x187.png)](https://lifespan.io/rejuvenation-roundup-october-2026/)

---

## **🧪 Frontier Research**

### Quantum Machine Learning Takes a Swing at Small-Data Lung Cancer Prediction

A [media report](https://www.news-medical.net/news/20261102/New-study-evaluates-quantum-machine-learning-for-lung-cancer-prediction.aspx) covers a new study evaluating the feasibility of quantum machine learning for predicting lung cancer on small datasets, exploring whether quantum computing can extract useful patterns from limited symptom and risk factor data. Only abstract-level info available; specific model architecture, data scale, and predictive performance are pending from the original paper. ⚛️

### Molecular Links Between Menopause and Brain Aging Identified

A [media report](https://www.news-medical.net/news/20261102/Study-identifies-molecular-links-between-menopause-and-brain-aging.aspx) covers researchers from UC Santa Barbara, UC San Francisco, and other institutions investigating the molecular connections between menopause and brain aging — a transition accompanied by hot flashes, brain fog, and sleep disruption. The report describes the research direction; specific molecular mechanisms, sample sizes, and conclusions are pending from the original paper.

![Research on Molecular Links Between Menopause and Brain Aging](https://www.news-medical.net/image-handler/picture/2014/7/Menopause-620x480.jpg)

---

## **◎ Industry Shifts & Personal Impact**

### $80 Million Initiative to Study How Energy Shapes Brain Function

A [media report](https://www.news-medical.net/news/20261102/New-international-initiative-explores-how-energy-shapes-brain-function.aspx) covers an $80 million international research initiative exploring how energy shapes brain function, with ISTA's Prof. Tim Vogels landing $3 million of that funding. Only abstract-level info provided; specific research directions, participating institutions, and expected outputs are pending verification. 🧠

---

## **⌘ Top Open Source Projects**

### dclai-aha/DNA-Damage-Aging-Clocks: DNA Damage Aging Clocks

This repo provides Python scripts and datasets for building DNA damage aging clocks based on AP sites (damage where bases are lost from DNA) and SSBs (single-strand breaks) — essentially models that estimate biological age from DNA damage levels — and evaluates the effect of a high-fat diet on predicted age in mice. Per the [GitHub repo](https://github.com/dclai-aha/DNA-Damage-Aging-Clocks), there's recent activity with 1 star. Clocks are built on mouse data with no mention of human validation; license and run status pending verification.

### Zhaowado/biological-age-prediction-model: Biological Age Prediction Model

Per the [GitHub repo](https://github.com/Zhaowado/biological-age-prediction-model), this project is a biological age prediction model with recent activity and 1 star. No description is provided in the repo; specific inputs/outputs, data used, and model methodology are pending a README check.

---

## **❓ Related Questions**

### Can Epigenetic Clock Results Give False Positives?

A [media report](https://lifespan.io/rejuvenation-roundup-october-2026/) covers a study providing a framework for interpreting epigenetic clock results (methods that estimate biological age from DNA methylation) in anti-aging interventions, suggesting some previously published single-clock findings may need revisiting. The recommendation: cross-reference clock changes with tissue function, healthspan, and mortality data rather than treating them as standalone evidence of rejuvenation. Source is the Lifespan.io roundup; original paper methodology pending verification. 🕰️