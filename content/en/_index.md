---
linkTitle: AI生命延续学日报
title: AI生命延续学日报 2026/11/18
breadcrumbs: false
next: /en/2026-11/2026-11-18
description: Daily AI + longevity news and insights, tracking aging biology, rejuvenation,
  biological age, lifespan interventions, and related tools and models.
cascade:
  type: docs
---
## **Today's Summary**

```
An Alzheimer's antibody that recruits immune cells into the brain showed a drop in neuronal damage markers in an early human trial.
Partial reprogramming has notably different effects across human cell types — endothelial cells improved in function while T cells were irreversibly lost.
The marker drop came from an exploratory 40-person sample with no statistical significance, so it doesn't establish that the drug changes disease course.
```

## **🔥 Today's Top 10 Highlights** 🔥

### 1. Alzheimer's Immunotherapy Shows Biomarker Improvement in First Human Trial

IBC-Ab002, an antibody from ImmunoBrain, proved safe in a Phase I trial of 40 early Alzheimer's patients and showed drops in CSF markers tied to neuronal damage over 48 weeks, according to [media coverage](https://www.genengnews.com/topics/translational-medicine/beyond-amyloid-and-tau-alzheimers-drug-developer-sees-early-clinical-success-for-immunotherapy-based-approach/). Rather than directly clearing amyloid, the drug briefly blocks the PD-1/PD-L1 immune "brake" to recruit peripheral immune cells into the brain and ease inflammation. The 30 mg/kg group saw roughly a 23% drop in neurogranin, with no brain bleeds or ARIA. Data landed in Nature Medicine, but the sample is small and statistically non-significant — this is an exploratory signal — and the team has filed for Phase II. Whether it actually changes disease course is still unproven. 🧠

[![Source image: Beyond Amyloid and Tau: Alzheimer's Drug Developer Sees Early Clinical Success for Immunotherapy-Based Approach](https://www.genengnews.com/wp-content/uploads/2026/11/Prof-Michal-Schwartz-CROP-SQUARE-300x298.jpg)](https://www.genengnews.com/topics/translational-medicine/beyond-amyloid-and-tau-alzheimers-drug-developer-sees-early-clinical-success-for-immunotherapy-based-approach/)

### 2. Partial Reprogramming Outcomes Vary Wildly by Cell Type

A preprint co-authored by reprogramming pioneer Shinya Yamanaka tested "partial reprogramming" on three human cell types — skin fibroblasts, killer T cells, and aortic endothelial cells — by briefly activating the four OSKM genes to rejuvenate cells without fully reverting them to stem cells, according to [Lifespan.io's coverage](https://lifespan.io/partial-reprogrammings-outcome-depends-on-cell-type/). The results were all over the map: endothelial cells saw both epigenetic age reduction and functional improvement; T cells couldn't recover after deep reprogramming and were lost; fibroblasts got younger epigenetically but suffered long-term proliferation damage. This is a preprint, not yet peer-reviewed, and uses only in vitro cells from 48–63-year-old donors — don't extrapolate to whole organs. ⚠️

![Diagram of three cell types' responses to partial reprogramming](https://lifespan.io/wp-content/uploads/2026/11/Three-cell-types-262x187.jpg)

### 3. Privacy-Preserving Brain Scan Framework Classifies Neurological Diseases Across Sites

SCAN is a framework that lets multiple hospitals collaboratively fine-tune a 3D vision-language model for neurological disease classification without ever sharing patient brain MRIs, according to [this paper index/abstract](https://papers.cool/arxiv/2611.21955). It spans 7,641 scans from 67 sites across 12 countries, covering Alzheimer's, stroke, and epilepsy — with new sites sharing only noise-added category summaries. Zero-shot classification AUC hit 0.833–0.945 on 7 unseen sites, and training-free local prototypes bumped one site's epilepsy AUC from 0.508 to 0.762, approaching locally trained classifiers. This is a methodological preprint; the accuracy gains from sharing are modest, and it hasn't entered clinical diagnosis yet. 🏥

### 4. Scientist-Guided AI Agent Approaches Top Baseline in Protein Prediction

DiscoveryAgent is an AI agent framework that lets scientists choose, modify, or swap hypotheses between research rounds, complete with an audit agent that checks every step, according to [this paper index/abstract](https://papers.cool/arxiv/2611.21950). On protein variant effect prediction, the scientist-guided version was beaten by just one of 106 ProteinGym baselines. Three domain case studies also identified relay genes in CD4+ T cells tied to autoimmune disease. This is a preprint, and benchmark performance doesn't equal real-world drug discovery success. 🔬

### 5. Single-Cell Perturbation Model Generalizes Better Across Contexts

OCCAM uses a multi-layer perceptron framework to learn single-cell representations and predict gene perturbation effects — meaning experimentally changing a gene to see how the cell responds — according to [this paper index/abstract](https://papers.cool/arxiv/2611.21959). In "cross-context" few-shot prediction, where a perturbation and a cell context have each been seen individually but never together, OCCAM outperforms four retrained competitors at capturing unseen combinations. For dual-gene perturbations (changing two genes at once), it combines single-gene responses to cut expression prediction error. This is a preprint benchmark evaluation; accurately predicting expression levels is still a tough problem. 💡

### 6. Soft-Tissue Lesions Detectable in Dental CBCT Scans, Confirmed by MRI

A research team used physics-guided self-supervised learning to extract soft-tissue lesion signals from routine dental CBCT scans — a cone-beam X-ray type optimized for bone that normally can't show soft tissue clearly — according to [this paper index/abstract](https://papers.cool/arxiv/2611.23042). On 212 paired temporomandibular joint CBCT-MRI datasets, one special pretraining setup achieved an ROC AUC of 0.793 for joint effusion detection, suggesting low-dose X-ray images may hold soft-tissue information invisible to the human eye. This is a retrospective preprint, not yet prospectively validated, and can't replace MRI diagnosis. 🦷

### 7. Genetic Barcoding Tracks How Human Stem Cells Rebuild Immunity After Bone Marrow Transplant

A USC team used genetic barcoding to tag individual human hematopoietic stem and progenitor cells, then transplanted them into mice to track how they reconstructed blood and immune systems, according to [media coverage](https://www.genengnews.com/topics/translational-medicine/genetic-barcoding-reveals-how-pre-bone-marrow-transplant-conditioning-impacts-immune-system-regeneration/). The study found human multipotent progenitors have stronger long-term regenerative capacity than prior mouse experiments suggested, though hematopoietic stem cells produced more blood and broader lineages. Different pre-transplant conditioning regimens (radiation vs. busulfan chemotherapy) affected the type and speed of immune cell output, with stem cells less affected. Results come from a human-mouse chimeric model, so direct translation to patient transplant protocols needs more work. 🧬

### 8. Protein Design Energy Function Gets a GPU-Accelerated Makeover

tmol is a GPU-native PyTorch library implementing the Rosetta protein energy function RosettaGenFF, with batch scoring throughput up to 362× faster, fully differentiable and plug-and-play with ML frameworks, according to [this paper index/abstract](https://papers.cool/arxiv/2611.21857). Using it as a reward signal for generative protein design produced interfaces with better hydrogen bond and water bridge counts. This is a preprint; throughput and interface improvements are benchmark-specific, and real-world design success rates need more validation. ⚡

### 9. Bioengineered Blood Vessel Enters Human Testing for the First Time

Humacyte has launched a 10-person trial testing an off-the-shelf bioengineered blood vessel for use in coronary bypass surgery as a replacement for the patient's own leg veins, according to [media coverage](https://longevity.technology/news/humacytes-bioengineered-bypass-vessel-gets-first-human-test/). The North Carolina company's vessel aims to make bypass surgery possible without harvesting autologous veins. This is a first-in-human trial, it's small, no safety or patency results have been released, and widespread availability is a long way off. 🫀

![Humacyte bioengineered blood vessel](https://longevity.technology/wp-content/uploads/2026/11/humacytes-bioengineered-bypass-vessel-gets-first-human-test-hero-1200x800-1-1024x683.png)

### 10. Curvature-Weighted Graph Network Gains in Protein Interaction Prediction Get a Second Look

Researchers did an edge-by-edge analysis of curvature-enhanced graph convolutional networks (CGCN) across four protein-protein interaction datasets and found that while overall AUC, AUPR, and F1 all improved, the gains were almost entirely on low-degree edges, according to [this paper index/abstract](https://papers.cool/arxiv/2611.21849). On low-curvature (bottleneck) edges, three datasets actually got worse — the opposite of the "alleviating over-squashing" motivation. Further analysis suggests curvature weighting is actually sharpening inter-cluster separation, improving intra-cluster predictions at the expense of inter-cluster ones. This is a preprint methodological analysis, and conclusions are limited to the tested datasets. 🔍

## **⚡ Product & Feature Updates**

### Skin Aging Platforms: Two Companies Drop Systemic Aging Maps

Estée Lauder unveiled its "Mastering Skin Longevity" platform at the CIIE in Shanghai, using a clock-style display to show how multiple biological switches shape skin aging together, according to [media coverage](https://longevity.technology/news/beauty-giant-and-supplement-startup-both-chase-skin-aging/). A few weeks prior, startup Epillon also dropped a skin aging map with ten interacting components. Both companies frame skin aging as an interconnected system rather than a single metric. These are conceptual corporate launches, not clinically validated treatment protocols. ✨

![Skin aging platform launch](https://longevity.technology/wp-content/uploads/2026/11/beauty-giant-and-supplement-startup-chase-skin-aging-revised-hero-1200x800-1-1024x683.png)

## **🧪 Frontier Research**

### Chronic Loneliness Linked to Higher Dementia Risk

A 30-year longitudinal study found that only persistent, chronic loneliness — not occasional loneliness — correlates with significantly higher dementia risk, roughly 38%, according to [media coverage](https://www.news-medical.net/news/20261117/Chronic-loneliness-linked-to-3825-higher-risk-of-dementia.aspx). This is observational research that shows correlation, not causation — it doesn't establish that loneliness directly causes dementia. Sample size and mechanisms need to be checked in the original paper. 💭

## **⌘ Top Open Source Projects**

### lucascamillomd/pyaging: GPU-Accelerated Aging Clock Collection

pyaging is a Python library collecting multiple GPU-optimized aging clocks — models that estimate biological age from molecular data like methylation or gene expression — aimed at researchers in the aging field, according to the [repository](https://github.com/lucascamillomd/pyaging). It currently has 134 stars and was last active on November 15. Which specific clocks are supported, input formats, and the license all need to be confirmed in the repo. ⏱️

### ZT135292/Dog_blood_transcriptomic_aging_clock: Canine Blood Aging Clock Model Code

This repo provides code for building a canine blood transcriptomic aging clock from gene expression profiles and age labels, comparing six methods — elastic net, lasso, random forest, XGBoost, support vector regression, and mixture of experts — for age prediction, according to the [repository](https://github.com/ZT135292/Dog_blood_transcriptomic_aging_clock). It's a solid reference for developers doing veterinary or comparative aging research, with the last activity on November 18. Model accuracy and license need to be confirmed in the repo. 🐕

## **❓ Related Questions**

### Does ImmunoBrain's Phase I Data Mean the Drug Works?

No. Phase I is primarily about safety, the 40-person sample has no statistical significance, and the biomarker drop is an exploratory signal, according to [media coverage](https://www.genengnews.com/topics/translational-medicine/beyond-amyloid-and-tau-alzheimers-drug-developer-sees-early-clinical-success-for-immunotherapy-based-approach/). The team has filed for Phase II to validate with clinical endpoints. Biomarker improvement is not the same as cognitive improvement or disease stabilization. ❗

### What Do the Cell-Type Differences in Partial Reprogramming Mean for Existing Trials?

You can't draw a direct line. The preprint tested brief OSKM four-factor activation in three human cell types in vitro, while Life Biosciences' optic nerve trial uses OSK three-factor activation continuously for eight weeks — different formula, duration, and target cells mean results don't translate. According to [Lifespan.io's coverage](https://lifespan.io/partial-reprogrammings-outcome-depends-on-cell-type/), the study's real takeaway is that you need to verify whether cellular function actually improves after reprogramming, not just whether epigenetic age drops. 🔬