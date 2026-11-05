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
## **Today's Digest**

```
Sickle cell anemia gene therapy directly repairs disease-causing genes in early human trials and achieves transfusion independence.
Blood sample research will track early protein signals before dementia symptoms appear, still exploratory analysis.
The gene therapy has early data from only three patients, no efficacy conclusions can be drawn at this point.
```

## **🎯 Today's Top 10 Focus**

### 1. Sickle Cell Anemia Gene Therapy Directly Repairs Mutated Genes in 3 Patients

Kamau Therapeutics dropped early data from its RESTORE Phase I/II trial: all 3 patients treated with nula-cel achieved transfusion independence, with no pain crises post-treatment. The approach uses "homology-directed repair (HDR)" — basically swapping out the misspelled gene segment for the correct version right inside the cell, rather than sidestepping the problem by activating fetal hemoglobin like the already-approved Casgevy. Among two patients who completed 6-month follow-up, disease-causing sickle hemoglobin (HbS) dropped below 20% of total hemoglobin, while normal adult hemoglobin (HbA) reached 77% and 67% respectively. [GEN's coverage](https://www.genengnews.com/topics/genome-editing/kamau-therapeutics-releases-encouraging-sickle-cell-clinical-data-ahead-of-ash-meeting/) reports this as early clinical evidence that direct HDR correction of the native β-globin gene is feasible in patients; full data drops December 14 at the American Society of Hematology (ASH) annual meeting. The trial is still recruiting, with only 3 patients so far — no efficacy conclusions yet.

[![Source image: Kamau Therapeutics Releases Encouraging Sickle Cell Clinical Data Ahead of ASH Meeting](https://www.genengnews.com/wp-content/uploads/2024/06/MatthewPorteus_Headshot-243x300.jpg)](https://www.genengnews.com/topics/genome-editing/kamau-therapeutics-releases-encouraging-sickle-cell-clinical-data-ahead-of-ash-meeting/)

### 2. 80,000 Blood Samples Track Early Dementia Protein Signals

UK Biobank's UKB-PRISM study plans to measure hundreds of circulating proteins in 80,000 stored blood samples, aiming to find biomarkers for Alzheimer's and Parkinson's years or even decades before symptoms show up. Testing will run on Alamar Biosciences' NULISA ultrasensitive protein detection platform at Nightingale Health labs, with completion expected by end of 2027. [According to Longevity.Technology](https://longevity.technology/news/reading-the-brains-small-print-in-80000-blood-samples/), these blood samples were collected before participants developed any disease, and are linked longitudinally to genetics, imaging, and medical records — so protein results can be compared against real later diagnoses. Protein levels currently correlate with disease but can't be used for individual diagnosis yet, and the UK Biobank population is healthier and wealthier than the general public, limiting representativeness.

[![Source image: Reading the brain's small print in 80,000 blood samples](https://longevity.technology/wp-content/uploads/2026/11/reading-the-brains-small-print-in-80000-blood-samples-hero-1200x800-1-1024x683.png)](https://longevity.technology/news/reading-the-brains-small-print-in-80000-blood-samples/)

### 3. Supplement NOVOS Core RCT: Vascular Markers Improve, Lipids Unchanged

NOVOS Core, a 12-ingredient supplement, showed vascular improvements but no lipid changes in a University of Surrey double-blind randomized controlled trial. 61 healthy adults over 40 took the supplement or placebo daily for 6 months. Vascular endothelial function (measured by flow-mediated dilation, FMD — which reflects blood vessel wall expansion capacity) improved about 47% from baseline in the supplement group, arterial stiffness decreased, and systolic blood pressure was 6.1 mmHg lower than the placebo group. Lipid panels didn't budge. [According to Longevity.Technology](https://longevity.technology/news/novos-core-trial-reports-vascular-gains-in-healthy-adults/), the study was published in European Heart Journal Open, but only 43 people completed the trial, the 12 ingredients can't be teased apart to identify which one drove the effect, and the last measurement came about 24 hours after the last dose — whether improvements persist remains uncertain.

[![Source image: NOVOS Core trial reports vascular gains in healthy adults](https://longevity.technology/wp-content/uploads/2023/09/NOVOS-product-review_1-1024x683.webp)](https://longevity.technology/news/novos-core-trial-reports-vascular-gains-in-healthy-adults/)

### 4. Biogen's Tau-Targeting Drug Diranersen to Reveal New Data at Alzheimer's Conference

Biogen will present topline results for diranersen on November 17 at the CTAD conference in Boston. Diranersen is an antisense oligonucleotide (ASO) — think of it as a "turn-off instruction" that tells cells to produce less tau protein. Tau protein piling up abnormally inside cells is a core pathology of Alzheimer's and directly linked to neuron damage. The Phase II CELIA trial enrolled 416 patients with mild cognitive impairment or mild dementia over 18 months, and will showcase 96-week long-term extension data plus tau biomarker results. [According to Longevity.Technology](https://longevity.technology/news/biogens-tau-drug-diranersen-gets-a-ctad-spotlight/), full early efficacy numbers aren't public yet, and whether results hold up over a longer time window remains to be seen.

[![Source image: Biogen's tau drug diranersen gets a CTAD spotlight](https://longevity.technology/wp-content/uploads/2026/11/biogens-tau-drug-diranersen-gets-a-ctad-spotlight-hero-1200x800-1-1024x683.png)](https://longevity.technology/news/biogens-tau-drug-diranersen-gets-a-ctad-spotlight/)

### 5. Multi-Objective Molecular Generation Fine-Tuning: Balancing Binding Affinity and Synthesizability Together

HVFT (hypervolume fine-tuning), introduced in a preprint not yet peer-reviewed, lets a single pretrained generative model optimize multiple conflicting molecular properties simultaneously — for instance, a molecule that's both potent against a target and easy to synthesize. The key breakthrough: converting "expected hypervolume," a metric measuring overall multi-property coverage, into a per-candidate adaptive reward signal that standard training pipelines can optimize directly. [The paper index/abstract](https://papers.cool/arxiv/2611.05207) shows the method beats existing baselines on therapeutic peptide and small molecule design tasks. Still a preprint, validated only on benchmark tasks — no wet-lab results yet.

### 6. Protein Folding Intermediate Prediction: FoldScape Covers the Full Journey from Unfolded to Near-Native Conformations

FoldScape, a preprint, introduces a deep learning framework that generates conformational ensembles at user-specified folding progress points from a sequence — kind of like taking "segmented snapshots" of the folding process instead of just showing the final structure. Understanding how a protein folds from a disordered chain into a functional 3D structure is crucial for disease mechanism research and drug design. Across 20 human proteins tested, FoldScape covers roughly 10x the folding coordinate range of AlphaFold 3's repeated random sampling, but falls short of AlphaFold 3's near-native precision. The two are complementary. [The paper index/abstract](https://papers.cool/arxiv/2611.04287) notes this is a preprint, not yet peer-reviewed or experimentally validated.

### 7. Reconstructing Visual Images from EEG Brain Signals

E2I-Flow proposes a framework that decodes EEG (electroencephalography — brain electrical activity recorded via scalp electrodes) into visual images. Method-wise, it uses a dual-path approach with wavelet frequency branches and temporal mixing branches to extract EEG features, then generates corresponding images through conditional flow matching. [The paper index/abstract](https://papers.cool/arxiv/2611.04524) shows it outperforms multiple baselines on zero-shot image retrieval and reconstruction tasks. Still a preprint, system performance depends on public benchmark datasets, and no clinical validation yet.

### 8. Sleep Quality Linked to Brain Health in Cardiometabolic Disease Patients

Karolinska Institutet research found that among people with type 2 diabetes, heart disease, or prior stroke, those with better sleep quality also had better cognitive function and larger brain volume. [According to News-Medical](https://www.news-medical.net/news/20261104/Good-sleep-protects-brain-health-in-people-with-cardiometabolic-disease.aspx), specific sample sizes, follow-up duration, and study design details need verification. The available abstract indicates this is a correlational study — can't conclude that improving sleep directly causes increased brain volume.

### 9. Daily Peanut Consumption May Alter Brain's Insulin Response

A study found that eating unsalted peanuts daily may boost the brain's insulin response, offering new clues about how diet shapes cognitive health in aging. Brain insulin response is tied to memory and cognitive function, and declining response is thought to be linked to cognitive decline. [According to News-Medical](https://www.news-medical.net/news/20261104/Eating-peanuts-every-day-may-change-your-brains-insulin-response.aspx), specific sample sizes, intervention duration, and measurement methods need verification. Can't infer from this that eating peanuts prevents cognitive deterioration.

### 10. Molecular Drug-Target Affinity Prediction: Single Forward Pass Replaces Task-Specific Training

Molecular Prior Networks proposes using a Transformer pretrained on thousands of existing affinity datasets, so predictions need just one forward pass — no retraining for new tasks. In drug discovery, predicting the binding strength (affinity) between a small molecule and a target protein typically requires retraining a model for each new target. [The paper index/abstract](https://papers.cool/arxiv/2611.05103) shows it hits state-of-the-art on the FS-Mol benchmark's low-support-set scenarios, making it a fit for early drug discovery stages with sparse data. Still a preprint, no wet-lab validation.

---

## **📦 Product & Feature Updates**

### Full-Season Wearable Tracking Project Launches for Adolescent Female Athletes

Ultrahuman Ring is now on every driver and coach in the More than Equal racing development program, tracking sleep, heart rate variability (HRV — reflects autonomic nervous system regulation of recovery state, trending downward with age), and daily recovery scores all season long. [Longevity.Technology reports](https://longevity.technology/news/pole-position-why-adolescence-sets-the-pace-for-female-healthspan/) that most of these athletes are still teenagers, and bone mass peak, cardiorespiratory fitness, and endocrine rhythms are primarily established during adolescence — a critical window shaping lifelong health. Each driver's readings are compared against their own baseline rather than population means, and menstrual cycle tracking is managed separately by team staff. The partnership isn't publishing data externally or using it for formal research, and the Ultrahuman Ring's daily recovery score shouldn't be equated with biological age measurement.

---

## **🔬 Cutting-Edge Research**

### Multimodal MRI Missing Sequence Completion: SphereFlow Closes 80% of the Gap to Complete Data

SphereFlow projects all modalities into a shared spherical latent space and uses flow matching for cross-modal completion, rather than making the model learn long-range "jumps" between two modalities. Brain tumor MRI typically requires multiple sequences (T1, T2, FLAIR, etc.), and in clinical practice one sequence often goes missing due to acquisition constraints. [The paper index/abstract](https://papers.cool/arxiv/2611.04414) shows that on the BraTS brain tumor multimodal MRI dataset, when using completed images for downstream segmentation, SphereFlow closed about 80% of the performance gap to full four-modality input. Code is open-sourced at [github.com/WTHH031230/SphereFlow](https://github.com/WTHH031230/SphereFlow). Still a preprint, not yet validated in clinical settings.

---

## **🌐 Open Source Top Projects**

### qlu-lab/SARDINE: Estimating Epigenetic Clock-Phenotype Associations Using GWAS Summary Statistics

[SARDINE](https://github.com/qlu-lab/SARDINE) is a statistical framework for association analysis between epigenetic clocks (tools that estimate biological age from DNA methylation patterns) and health phenotypes. It uses epigenome-wide association study (EWAS) summary statistics to estimate effect sizes without needing access to raw individual data. Handy for researchers who can't get their hands on raw methylation data but still want to do inferential analysis on biological age-disease relationships. Repo documentation and license info can be confirmed on the GitHub page. Stars: 1, last active 2026-11-03.

### NoWon1/AI-challenge-for-HEALTHY-Brain-Aging: Multimodal Prediction Models for Dementia Risk and Progression

[This repo](https://github.com/NoWon1/AI-challenge-for-HEALTHY-Brain-Aging) contains competition code for the CBR Healthy Brain Aging AI Challenge, integrating multimodal data to build dementia risk and progression prediction models, and includes a "digital twin lite" component — essentially an attempt to model individual brain health states. Useful for researchers interested in brain aging prediction modeling to reference as a competition solution. The repo description doesn't provide specific input formats or dependency environment details. Stars: 1, last active 2026-11-04, runtime status to be verified.

---

## **💡 Related Questions**

### Can the NOVOS Core Trial Results Show the Supplement Actually Extends Lifespan?

Not yet. This trial measured proxy markers of vascular function (FMD, arterial stiffness, blood pressure) — these have statistical associations with cardiovascular risk in large population studies, but a 6-month trial in 43 completers can't conclude "extends lifespan." The study itself acknowledges it can't distinguish which of the 12 ingredients drove the effect, and can't rule out confounding from the placebo group having a higher baseline age. [Longevity.Technology's coverage](https://longevity.technology/news/novos-core-trial-reports-vascular-gains-in-healthy-adults/) and the original paper (European Heart Journal Open, doi:10.1093/ehjopen/oeag157) have the full methods and limitations.