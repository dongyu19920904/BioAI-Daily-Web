---
linkTitle: AI生命延续学日报
title: AI生命延续学日报 2026/11/4
breadcrumbs: false
next: /en/2026-11/2026-11-04
description: Daily AI + longevity news and insights, tracking aging biology, rejuvenation,
  biological age, lifespan interventions, and related tools and models.
cascade:
  type: docs
---
## **Today's Summary**

```
Sickle cell gene therapy directly repairs the disease-causing gene in early human trials, achieving transfusion independence.
Blood sample study will track early protein signals before dementia symptoms appear — still exploratory analysis at this stage.
The gene therapy has early data from only three patients; no efficacy conclusions can be drawn yet.
```

## **🔥 Top 10 Stories of the Day**

### 1. Sickle Cell Gene Therapy Directly Repairs the Mutant Gene in 3 Patients

Kamau Therapeutics has dropped early data from its RESTORE Phase 1/2 trial: all 3 patients treated with nula-cel achieved transfusion independence, with zero pain crises post-treatment. "Homology-directed repair (HDR)" is the key concept here — instead of working around the problem by switching on fetal hemoglobin (like the already-approved Casgevy does), it swaps out the broken gene sequence and replaces it with the correct one directly. In the two patients who completed the 6-month follow-up, disease-causing sickle hemoglobin (HbS) dropped below 20% of total hemoglobin, while normal adult hemoglobin (HbA) hit 77% and 67% respectively. [Per GEN's coverage](https://www.genengnews.com/topics/genome-editing/kamau-therapeutics-releases-encouraging-sickle-cell-clinical-data-ahead-of-ash-meeting/), this is early clinical proof that HDR can directly correct the native β-globin gene in real patients. Full data drops December 14 at the American Society of Hematology (ASH) annual meeting — the trial is still recruiting, and with only 3 patients so far, it's way too early to call it a win. 🧬

[![Source image: Kamau Therapeutics Releases Encouraging Sickle Cell Clinical Data Ahead of ASH Meeting](https://www.genengnews.com/wp-content/uploads/2024/06/MatthewPorteus_Headshot-243x300.jpg)](https://www.genengnews.com/topics/genome-editing/kamau-therapeutics-releases-encouraging-sickle-cell-clinical-data-ahead-of-ash-meeting/)

### 2. UK Biobank's UKB-PRISM Study Will Track Early Protein Signals for Dementia in 80,000 Blood Samples

UK Biobank's UKB-PRISM project is planning to measure hundreds of circulating proteins across 80,000 stored blood samples, hunting for biomarkers of Alzheimer's and Parkinson's that show up years — even decades — before symptoms hit. The analysis will use Alamar Biosciences' NULISA ultra-sensitive protein detection platform, run at Nightingale Health labs, with completion expected by end of 2027. [Per Longevity.Technology's report](https://longevity.technology/news/reading-the-brains-small-print-in-80000-blood-samples/), what makes this interesting is that the blood was drawn before participants got sick, and it's linked to genetics, imaging, and medical records over time — so protein readings can be compared against real diagnoses that came later. Heads up though: protein levels correlating with disease doesn't mean they can be used for individual diagnosis yet, and the UK Biobank population skews healthier and wealthier than the general public, which limits how far you can generalize. 🧠

[![Source image: Reading the brain's small print in 80,000 blood samples](https://longevity.technology/wp-content/uploads/2026/11/reading-the-brains-small-print-in-80000-blood-samples-hero-1200x800-1-1024x683.png)](https://longevity.technology/news/reading-the-brains-small-print-in-80000-blood-samples/)

### 3. NOVOS Core RCT Shows Vascular Improvements but No Change in Lipids

A University of Surrey team ran a double-blind RCT on 61 healthy adults aged 40+ — participants took either a 12-ingredient NOVOS Core supplement or a placebo daily for 6 months. Vascular endothelial function (measured by flow-mediated dilation, or FMD — basically how well your artery walls can expand) improved about 47% relative to baseline in the supplement group, arterial stiffness went down, and systolic blood pressure was 6.1 mmHg lower than the placebo group. Lipid markers? No change. [Per Longevity.Technology's coverage](https://longevity.technology/news/novos-core-trial-reports-vascular-gains-in-healthy-adults/), the study was published in *European Heart Journal Open*, but only 43 people completed it, you can't tell which of the 12 ingredients is doing the heavy lifting, and the final measurements were taken about 24 hours after the last dose — so whether the improvements stick around is still an open question. 💊

[![Source image: NOVOS Core trial reports vascular gains in healthy adults](https://longevity.technology/wp-content/uploads/2023/09/NOVOS-product-review_1-1024x683.webp)](https://longevity.technology/news/novos-core-trial-reports-vascular-gains-in-healthy-adults/)

### 4. Biogen's Tau-Targeting Drug Diranersen Is Getting a CTAD Spotlight on November 17

Biogen is set to present interim results for diranersen at the CTAD conference in Boston on November 17. Diranersen is an antisense oligonucleotide (ASO) — think of it as a "shutdown command" that tells cells to produce less tau protein. Tau abnormally accumulating inside neurons is one of Alzheimer's core pathologies and is directly linked to nerve cell damage. The Phase 2 CELIA trial enrolled 416 patients with mild cognitive impairment or mild dementia over 18 months, and will present 96-week long-term extension data along with tau biomarker results. [Per Longevity.Technology's report](https://longevity.technology/news/biogens-tau-drug-diranersen-gets-a-ctad-spotlight/), the full early efficacy numbers haven't been made public yet, so whether the results hold up over a longer time window is still TBD. 👀

[![Source image: Biogen's tau drug diranersen gets a CTAD spotlight](https://longevity.technology/wp-content/uploads/2026/11/biogens-tau-drug-diranersen-gets-a-ctad-spotlight-hero-1200x800-1-1024x683.png)](https://longevity.technology/news/biogens-tau-drug-diranersen-gets-a-ctad-spotlight/)

### 5. Multi-Objective Molecule Generation Fine-Tuning: Balancing Binding Affinity and Synthesizability at the Same Time

HVFT (Hypervolume Fine-Tuning) is a new preprint method (not yet peer-reviewed) for steering a single pretrained generative model to simultaneously optimize multiple conflicting molecular properties — like making a molecule that's both highly active against a target *and* actually easy to synthesize in a lab. The key breakthrough is converting "expected hypervolume" — a metric that captures how well a set of candidates covers multiple objectives at once — into a per-molecule adaptive reward signal, so you can optimize it directly with standard training pipelines. [Paper index/abstract](https://papers.cool/arxiv/2611.05207) shows it outperforms existing baselines on therapeutic peptide and small molecule design tasks. Still a preprint, validated only on benchmark tasks, with no wet lab results yet. 🔬

### 6. FoldScape Predicts Protein Folding Intermediates Across the Full Pathway from Unfolded to Near-Native

FoldScape is a deep learning framework that generates conformational ensembles at any user-specified folding progress given a sequence — essentially taking "snapshot segments" of the folding process rather than just handing you the final structure. Understanding how a protein folds from a loose chain into a functional 3D shape is crucial for making sense of disease mechanisms and drug design. In tests on 20 human proteins, FoldScape covered roughly 10× the folding coordinate range of AlphaFold 3 random sampling, though it's less accurate than AlphaFold 3 near the native state — the two approaches are complementary. [Paper index/abstract](https://papers.cool/arxiv/2611.04287) — preprint, not yet peer-reviewed, and no experimental validation yet. 🧬

### 7. E2I-Flow Reconstructs Visual Images Directly from EEG Brain Signals

E2I-Flow is a framework that decodes electroencephalography (EEG — the electrical brain activity recorded through scalp electrodes) into visual images. It uses a dual-branch approach: a wavelet frequency branch and a temporal mixing branch to extract EEG features, then generates corresponding images via a conditional flow matching model. [Paper index/abstract](https://papers.cool/arxiv/2611.04524) shows it outperforms several baselines on zero-shot image retrieval and reconstruction tasks. Still a preprint, performance depends on public benchmark datasets, and there's no clinical application validation yet. 🧠

### 8. Sleep Quality Is Linked to Brain Health in People with Cardiometabolic Disease

Karolinska Institute research found that among people with type 2 diabetes, heart disease, or a history of stroke, those who sleep better show stronger cognitive function and larger brain volume. [Per News-Medical's report](https://www.news-medical.net/news/20261104/Good-sleep-protects-brain-health-in-people-with-cardiometabolic-disease.aspx), specific sample size, follow-up duration, and study design details are still pending verification. From what's available, this is a correlational study — you can't conclude that improving sleep *directly causes* brain volume to increase. 💤

### 9. Eating Peanuts Every Day May Change Your Brain's Insulin Response

A new study found that daily consumption of unsalted peanuts may enhance the brain's insulin response, offering a fresh clue about how diet affects cognitive health in aging. Brain insulin responsiveness is tied to memory and cognitive function, and a decline in this responsiveness has been associated with cognitive deterioration. [Per News-Medical's report](https://www.news-medical.net/news/20261104/Eating-peanuts-every-day-may-change-your-brains-insulin-response.aspx), specifics on sample size, intervention duration, and measurement methods are pending verification — don't go concluding that eating peanuts prevents cognitive decline just yet. 🥜

### 10. Molecular Prior Networks: Predict Drug-Target Affinity with a Single Forward Pass, No Task-Specific Training Required

In drug discovery, predicting how strongly a small molecule binds to a target protein (affinity) usually means retraining a model from scratch for each new target. Molecular Prior Networks tackle this by pretraining a Transformer across thousands of existing affinity datasets, so at inference time you only need a single forward pass — no fine-tuning for new tasks. [Paper index/abstract](https://papers.cool/arxiv/2611.05103) shows it hits state-of-the-art on the FS-Mol benchmark in small support set scenarios, making it a solid fit for early-stage drug discovery where data is scarce. Still a preprint, no wet lab validation yet. 💡

---

## **⚡ Product & Feature Updates**

### Full-Season Wearable Tracking Program Launches for Adolescent Female Athletes

[Longevity.Technology reports](https://longevity.technology/news/pole-position-why-adolescence-sets-the-pace-for-female-healthspan/) that all drivers and coaches in the More than Equal racing driver development program are now wearing Ultrahuman Rings for full-season tracking of sleep, heart rate variability (HRV — a measure of how well the autonomic nervous system regulates recovery, with a tendency to decline with age), and daily recovery scores. Most of these athletes are still teenagers, and that matters: peak bone mass, cardiorespiratory fitness, and endocrine rhythms are primarily established during adolescence — a critical window that shapes health for the second half of life. Each driver's readings are compared against their own personal baseline rather than population averages, and menstrual cycle tracking is managed separately by the team. The partnership doesn't publish data externally and isn't part of formal research; Ultrahuman Ring's daily recovery score is not equivalent to a biological age measurement. ⌚

---

## **🧪 Cutting-Edge Research**

### SphereFlow Closes ~80% of the Performance Gap for Missing MRI Sequences in Brain Tumor Imaging

Brain tumor MRI typically requires multiple sequences (T1, T2, FLAIR, etc.), but clinical constraints often mean one sequence is missing. SphereFlow projects all modalities into a shared spherical latent space and uses flow matching for cross-modal completion — rather than training the model to make a "long jump" between two modalities directly. [Paper index/abstract](https://papers.cool/arxiv/2611.04414) shows that on the BraTS brain tumor multi-modal MRI dataset, using SphereFlow-completed images for downstream segmentation closes roughly 80% of the performance gap compared to having all four complete modalities. Code is open-sourced at [github.com/WTHH031230/SphereFlow](https://github.com/WTHH031230/SphereFlow). Still a preprint, not yet validated in a clinical setting. 🏥

---

## **⌘ Top Open Source Projects**

### qlu-lab/SARDINE: Estimating Epigenetic Clock–Phenotype Associations from GWAS Summary Statistics

[SARDINE](https://github.com/qlu-lab/SARDINE) is a statistical framework designed for analyzing associations between epigenetic clocks (tools that estimate biological age from DNA methylation patterns) and health phenotypes, using epigenome-wide association study (EWAS) summary statistics to estimate effect sizes — no access to raw individual-level data required. It's a solid option for researchers who want to investigate biological age and disease relationships without being able to get their hands on raw methylation data. Repository documentation and license info can be confirmed on the GitHub page. Stars: 1, last active: 2026-11-03.

### NoWon1/AI-challenge-for-HEALTHY-Brain-Aging: Multi-Modal Prediction Models for Dementia Risk and Progression

[This repository](https://github.com/NoWon1/AI-challenge-for-HEALTHY-Brain-Aging) is competition code for the CBR Healthy Brain Aging AI Challenge, integrating multi-modal data to build dementia risk and progression prediction models, and includes a "lightweight digital twin" component — an attempt to model individual brain health states. Worth checking out for researchers interested in brain aging prediction model design and competition-style solution architectures. The repo description doesn't provide details on input formats or environment dependencies. Stars: 1, last active: 2026-11-04, runtime status unverified.

---

## **❓ Related Questions**

### Does the NOVOS Core Trial Prove the Supplement Actually Extends Lifespan?

Not even close. The trial measured proxy markers of vascular function (FMD, arterial stiffness, blood pressure) — these have statistical associations with cardiovascular risk in large population studies, but a 6-month trial with 43 completers cannot support a "extends lifespan" conclusion. The study itself acknowledges it can't tell which of the 12 ingredients is doing anything, and it can't rule out confounding from baseline age differences between groups. [Longevity.Technology's coverage](https://longevity.technology/news/novos-core-trial-reports-vascular-gains-in-healthy-adults/) and the original paper (*European Heart Journal Open*, doi:10.1093/ehjopen/oeag157) have the full methodology and limitations if you want to dig in. 🔍