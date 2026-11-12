---
linkTitle: AI生命延续学日报
title: AI生命延续学日报 2026/11/11
breadcrumbs: false
next: /en/2026-11/2026-11-11
description: Daily AI + longevity news and insights, tracking aging biology, rejuvenation,
  biological age, lifespan interventions, and related tools and models.
cascade:
  type: docs
---
## **Today's Summary**

```
A mineral supplement cleared senescent cells in mice and modestly extended median lifespan.
Chemotherapy may push breast cancer survivors' biological age ahead of their chronological age, potentially raising the risk of dying from other diseases.
The lifespan extension results barely cleared statistical significance, weren't validated in female mice, and there's zero human data yet.
```

## **🔥 Today's Top 10 Highlights**

### 1. Vanadyl Sulfate Clears Senescent Cells and Extends Lifespan in Mice

Vanadyl sulfate (VS) — a mineral compound found in shellfish, mushrooms, and soybeans, also sold as a dietary supplement — was the subject of a new *Nature Aging* paper from a University of Chicago research team, as [reported by Lifespan.io](https://lifespan.io/a-supplement-kills-senescent-cells-and-extends-life-in-mice/). Senescent cells are those that stop dividing but refuse to die, instead pumping out harmful inflammatory signals to surrounding tissue — a key driver of accelerated aging. The researchers added VS to the drinking water of male mice around 71 weeks old (roughly elderly by mouse standards) for 90 days. Median lifespan jumped from 887 to 952 days, a 7.4% increase, while body fat dropped, physical performance and blood sugar regulation improved, and kidney inflammation markers declined. Mechanistically, VS appears to kill senescent cells by promoting abnormal protein folding, while healthy cells survive thanks to their stronger repair machinery. 🧪 Worth noting: each group had ~20 mice, the lifespan extension barely hit statistical significance, female mice weren't tested for longevity, and this is still animal data — translation to humans remains an open question.

![VS Mouse Effects](https://lifespan.io/wp-content/uploads/2026/11/VS-Mouse-Effects.png)

---

### 2. Bonbon, an AI Foundation Model, Shows Zero-Shot Emergent Abilities in Drug Discovery

Bonbon is a foundation model trained on roughly 3.2 trillion protein-ligand sequence pairs — where ligands are small molecules that bind proteins and could become drugs — and it was never explicitly taught any specific task during training, yet it spontaneously developed three "emergent abilities": identifying drug mechanisms of action, pinpointing binding sites on proteins, and distinguishing covalent from non-covalent binding. That's the finding from the [paper index/abstract](https://papers.cool/arxiv/2611.14504). In wet-lab validation across 9 disease targets, 61.5% of Bonbon's novel compounds showed activity in dose-response experiments, including entirely new structural scaffolds previously unreported as inhibitors of those proteins. 🔬 This is a preprint — peer review pending — and lab efficacy is a long way from clinical drugs.

---

### 3. Chemotherapy May Accelerate Biological Aging in Breast Cancer Survivors

Chemotherapy, while helping breast cancer patients survive, may push the body's "biological age" — an estimate of true physiological aging based on blood or cellular markers, distinct from chronological age — beyond the patient's actual age, and may also raise the risk of dying from other diseases. That's the thrust of new research [reported by News-Medical](https://www.news-medical.net/news/20261110/Chemotherapy-may-accelerate-biological-aging-in-breast-cancer-survivors.aspx). The source currently only provides a title and abstract; sample size, chemo type, and specific numbers are pending verification — check the original paper for study design details.

[![Source image: Chemotherapy may accelerate biological aging in breast cancer survivors](https://www.news-medical.net/images/tags/TagImage-1039-45840826385648151818-620x480.jpg)](https://www.news-medical.net/news/20261110/Chemotherapy-may-accelerate-biological-aging-in-breast-cancer-survivors.aspx)

---

### 4. Pyrite: An AI Agent Benchmark for Molecular Pose Ranking in Drug Design

Pyrite is a benchmark dataset of 1,500 binding pose pairs designed to test whether AI can determine which drug molecule configuration is more likely to actually bind a target protein — a task known as ligand binding pose ranking. The [paper index/abstract](https://papers.cool/arxiv/2611.14511) has a fun twist: expert chemists equipped with 3D visualization tools performed near chance level, showing just how hard this problem really is. 😅 Building on that, the researchers developed two LLM-based agents: PyriteReasoner (direct text-based reasoning) hit 67% accuracy, while PyriteFeaturizer (which guides the model to auto-generate feature extraction code) reached 74% — both beating human expert performance. This is a preprint-stage benchmark study; accuracy figures reflect performance on the benchmark set and don't translate directly to real-world drug development success rates.

---

### 5. Foundation Model Adaptation Beats Specialist Models for Cross-Institution Medical Image Segmentation

DINOv2 and similar foundation models — general-purpose vision models pretrained on large-scale natural images — were systematically compared against task-specific models for medical image segmentation, covering colonoscopy, breast ultrasound, and dermoscopy, according to the [paper index/abstract](https://papers.cool/arxiv/2611.14519). On external test sets from different institutions, adapted foundation models outperformed from-scratch specialist models on generalization across every dataset. That said, when training data was plentiful, specialist models were sharper at lesion boundary delineation and had lower small-lesion miss rates. The researchers also found that only a tiny fraction of model parameters need adapting, and the right approach depends on the imaging domain rather than the adaptation method. Still a preprint — not yet peer-reviewed.

---

### 6. DrugCoding: An AI Coding Agent That Automates Multi-Stage Drug Discovery Pipelines

DrugCoding is an AI system that autonomously plans tasks, calls specialized scientific models, and generates executable code to chain together molecular design, property prediction, and virtual screening into automated drug discovery workflows, as proposed in the [paper index/abstract](https://papers.cool/arxiv/2611.13651). Across multi-round tool-calling evaluations spanning multiple language models and scientific tool interfaces, DrugCoding hit a Pass@1 rate (getting it right on the first try) of 97.35% on the full benchmark — 9.24 percentage points above the strongest baseline. 🤖 These are results on a standardized benchmark set; real drug development pipelines are far messier and more uncertain. Still preprint stage.

---

### 7. Predicting Single-Cell Spatial Gene Expression from Tissue Slide Images

A method for predicting single-cell-level gene expression from H&E-stained pathology slides — the routine tissue staining images made in hospitals — is presented in the [paper index/abstract](https://papers.cool/arxiv/2611.13649). Trained with paired Xenium 5K spatial transcriptomics data and using a domain adaptation strategy, the approach boosted average gene prediction correlation 2.67× over the zero-shot baseline, hit a Pearson correlation of 0.63 for spatially variable genes, and achieved an AUROC of 0.80 for detecting all genes. The potential upside here is getting partial gene expression information without expensive molecular assays — but prediction performance varies significantly across biological contexts, and a correlation between H&E images and gene expression doesn't mean you can substitute one for the other. Preprint stage.

---

### 8. Landmark Alzheimer's Longitudinal Study Lands $32M Grant Extended Through 2031

The Alzheimer's disease longitudinal research project — originally launched in the 1970s by neurologist Leonard Berg at Washington University in St. Louis — has received a $32 million grant extending the work through 2031, as [reported by News-Medical](https://www.news-medical.net/news/20261110/2432-million-grant-extends-landmark-Alzheimers-research-through-2031.aspx). One of the longest-running cohort studies in the field, this project pushed back against treating age-related memory decline as "normal aging" and has been tracking the actual pathological progression in the brain. Details on specific research directions and how this round of funding will be used are in the [media report](https://www.news-medical.net/news/20261110/2432-million-grant-extends-landmark-Alzheimers-research-through-2031.aspx).

---

### 9. 45 Days of Yoga Improves Mood and Memory, But the Long-Term Meaning of Brain Connectivity Changes Is Still Unclear

Yoga is what drove measurable changes in mood, self-reported sleep quality, and some short-term memory metrics in a randomized controlled trial of 139 healthy adults who completed a 45-day standardized yoga program versus a waitlist control group, as [reported by News-Medical](https://www.news-medical.net/news/20261110/Scientists-scanned-peoples-brains-before-and-after-45-days-of-yoga-Heres-what-changed.aspx). Brain scans from a subset of 43 participants showed changes in functional connectivity — how in-sync different brain regions are, measurable via MRI — across networks involved in movement, attention, language, and cognitive processing. The researchers explicitly noted that the long-term significance of these connectivity changes remains uncertain, and you can't use this to conclude yoga prevents cognitive decline. 🧘

[![Source image: Scientists scanned people's brains before and after 45 days of yoga. Here's what changed](https://www.news-medical.net/images/news/ImageForNews_851266_17943566428378793.jpg)](https://www.news-medical.net/news/20261110/Scientists-scanned-peoples-brains-before-and-after-45-days-of-yoga-Heres-what-changed.aspx)

---

### 10. Ergothioneine in Mushrooms May Protect Against Neurodegeneration — But Human Evidence Is Thin

Ergothioneine — a natural antioxidant found primarily in mushrooms — has shown protective effects against oxidative stress and inflammation linked to Alzheimer's and Parkinson's disease in lab and animal studies, according to a review [reported by News-Medical](https://www.news-medical.net/news/20261110/Could-eating-more-mushrooms-help-protect-your-brain-as-you-age.aspx). Human evidence, however, remains very limited. The review's authors stress that larger clinical trials are needed before anyone can say whether ergothioneine supplementation actually prevents or slows neurodegeneration — current findings aren't a basis for dietary recommendations. 🍄

[![Source image: Could eating more mushrooms help protect your brain as you age?](https://www.news-medical.net/images/news/ImageForNews_851241_17943525083515017.jpg)](https://www.news-medical.net/news/20261110/Could-eating-more-mushrooms-help-protect-your-brain-as-you-age.aspx)

---

## **⚡ Product & Feature Updates**

### Fitnescity Health Expands Whole-Body MRI Scans to Nearly 100 Sites Nationwide

Fitnescity Health — which bills itself as the largest preventive imaging network in the US — has opened up whole-body MRI scanning to nearly 100 locations nationwide and is offering unified API access for health platforms, as [reported by Longevity.Technology](https://longevity.technology/news/fitnescity-healths-whole-body-mri-scans-go-nationwide/). Whole-body MRI covers all major organs in a single scan for early detection of potential abnormalities — a service previously limited to a handful of boutique health centers. This expansion makes booking feel closer to a routine checkup, though broader commercial access doesn't equal new evidence for clinical effectiveness. Pricing and coverage specifics are in the [media report](https://longevity.technology/news/fitnescity-healths-whole-body-mri-scans-go-nationwide/).

---

## **🧪 Frontier Research**

### Amyloid Accumulation in the Brain's Choroid Plexus Shows Nonlinear Patterns in Middle Age

The choroid plexus — the brain structure responsible for producing cerebrospinal fluid — and the formation of "Biondi body" amyloid within it were the focus of [this preprint](https://europepmc.org/article/MED/PPR1361149), which found the process exhibits cross-scale nonlinear changes during middle age, with links to early-stage neurodegenerative disease progression. The choroid plexus and amyloid accumulation are considered potentially early windows into Alzheimer's research. This is an unreviewed preprint on human samples — specific sample size and methodology need verification from the original paper.

---

## **◎ Industry Shifts & Personal Impact**

### UTHealth Houston Launches Mobile Medical Clinic in the Rio Grande Valley

UTHealth Houston unveiled a new mobile clinic in the Lower Rio Grande Valley of Texas on October 22nd, as [reported by News-Medical](https://www.news-medical.net/news/20261110/UTHealth-Houston-unveils-state-of-the-art-mobile-clinic-in-the-Lower-Rio-Grande-Valley.aspx). Mobile clinics bring medical equipment directly to underserved communities — and this region has historically had low healthcare access. The announcement doesn't include specifics on services offered, population covered, or operational scale; details are in the [media report](https://www.news-medical.net/news/20261110/UTHealth-Houston-unveils-state-of-the-art-mobile-clinic-in-the-Lower-Rio-Grande-Valley.aspx).