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
Chemotherapy may age breast cancer survivors biologically beyond their chronological years, potentially raising their risk of dying from other diseases.
Lifespan extension barely reached statistical significance, wasn't tested in female mice, and has no human data yet.
```

## **🔥 Today's Top 10**

### 1. Vanadyl Sulfate Supplement Clears Senescent Cells and Extends Lifespan in Mice

According to [Lifespan.io's coverage](https://lifespan.io/a-supplement-kills-senescent-cells-and-extends-life-in-mice/), a University of Chicago team published research in *Nature Aging* on vanadyl sulfate (VS)—a mineral compound found in shellfish, mushrooms, and soybeans, also sold as a supplement. Senescent cells are cells that stop dividing but refuse to die, instead pumping out inflammatory signals that are thought to accelerate aging. Researchers gave roughly 71-week-old (equivalent to elderly) male mice VS in drinking water for 90 days. Median lifespan jumped from 887 to 952 days—a 7.4% gain. Body fat dropped, physical performance and glucose regulation improved, and kidney inflammation markers declined. Mechanistically, VS kills senescent cells by forcing protein misfolding; healthy cells, equipped with better repair systems, survive. Key caveats: about 20 mice per group, lifespan extension just barely hit statistical significance, female mice weren't tested for longevity, and this is still animal data—human relevance remains to be seen.

![Advantages of AI Building Blocks](https://lifespan.io/wp-content/uploads/2026/11/VS-Mouse-Effects.png)

---

### 2. Bonbon Foundation Model Shows Zero-Shot Emergent Abilities in Drug Discovery

[Paper index/abstract](https://papers.cool/arxiv/2611.14504) describes Bonbon, a foundation model pretrained on roughly 3.2 trillion protein-ligand sequence pairs. Ligands are small molecules that bind proteins and might become drugs. Notably, Bonbon was never explicitly taught any specific task, yet spontaneously developed three "emergent abilities": predicting drug mechanisms of action, pinpointing binding sites on proteins, and distinguishing covalent from non-covalent binding modes. In wet-lab validation targeting nine disease proteins, 61.5% of Bonbon's novel compounds showed activity in dose-response assays, including structures previously unreported to inhibit those targets. This is a preprint—unreviewed by peers—and lab activity is many steps away from clinical drugs.

---

### 3. Chemotherapy May Accelerate Biological Aging in Breast Cancer Survivors

According to [News-Medical's report](https://www.news-medical.net/news/20261110/Chemotherapy-may-accelerate-biological-aging-in-breast-cancer-survivors.aspx), new research suggests chemotherapy—while helping breast cancer patients survive—may push their "biological age" beyond their chronological years. Biological age estimates the body's true wear-and-tear through blood or cellular markers, distinct from years since birth. The study also hints this could increase patients' risk of dying from other diseases. The source provides only a headline and abstract; sample size, chemotherapy types, and specific numbers await verification—check the full paper for study design details.

[![Source image: Chemotherapy may accelerate biological aging in breast cancer survivors](https://www.news-medical.net/images/tags/TagImage-1039-45840826385648151818-620x480.jpg)](https://www.news-medical.net/news/20261110/Chemotherapy-may-accelerate-biological-aging-in-breast-cancer-survivors.aspx)

---

### 4. Pyrite AI Agent for Ranking Molecular Poses in Drug Design

[Paper index/abstract](https://papers.cool/arxiv/2611.14511) introduces Pyrite—a benchmark dataset of 1,500 ligand-binding pose pairs, designed to test whether AI can judge which drug molecule configuration is more likely to truly bind a target protein. Interestingly, expert chemists with 3D visualization tools performed near random chance, underscoring the problem's difficulty. The authors developed two large language model agents: PyriteReasoner, which reasons directly in text, hit 67% accuracy; PyriteFeaturizer, which prompts the model to auto-generate feature code, reached 74%—both beating human experts. This is a preprint evaluation study; accuracy reflects benchmark performance, not real-world drug development success rates.

---

### 5. Foundation Model Adaptation Outperforms Specialized Models in Cross-Institution Medical Image Segmentation

[Paper index/abstract](https://papers.cool/arxiv/2611.14519) reports a systematic comparison of adapting foundation models (general-purpose vision models pretrained on massive natural image datasets, like DINOv2) for medical image segmentation tasks. Covering colonoscopy, breast ultrasound, and dermoscopy, adapted foundation models generalized better on external test sets from different institutions than models trained from scratch. However, when training data was abundant, specialized models delineated lesion boundaries more precisely and missed fewer small lesions. The study also found that the number of parameters needing adaptation was tiny and depended on the imaging domain rather than the adaptation method. This is a preprint—results await peer review.

---

### 6. DrugCoding: AI Programming Agent Auto-Orchestrating Multi-Stage Drug Discovery Workflows

[Paper index/abstract](https://papers.cool/arxiv/2611.13651) proposes DrugCoding, an AI system that autonomously plans tasks, invokes specialized scientific models, and generates executable code to chain together molecular design, property prediction, and virtual screening into automated drug discovery pipelines. In multi-turn tool-calling evaluations spanning various language models and scientific tool interfaces, DrugCoding achieved a 97.35% Pass@1 rate (correct on first try) on the full benchmark—9.24 percentage points above the strongest baseline. These are standardized benchmark results; actual drug development complexity and uncertainty far exceed evaluation settings. Still a preprint.

---

### 7. Predicting Single-Cell Spatial Gene Expression from Tissue Slide Images

[Paper index/abstract](https://papers.cool/arxiv/2611.13649) demonstrates predicting single-cell-level gene expression from routine H&E-stained pathology slides (standard hospital tissue stains). Trained with paired Xenium 5K spatial transcriptomics data and domain adaptation strategies, average gene prediction correlation improved 2.67-fold over zero-shot baselines, reaching 0.63 for spatially differential genes and an AUROC of 0.80 for overall gene detection. The potential value lies in extracting partial gene information without expensive molecular assays, but prediction performance varies widely across biological contexts. H&E-to-gene correlations don't mean H&E can replace molecular tests. This is a preprint.

---

### 8. Landmark Alzheimer's Longitudinal Study Receives $32M Extension Through 2031

According to [News-Medical's coverage](https://www.news-medical.net/news/20261110/2432-million-grant-extends-landmark-Alzheimers-research-through-2031.aspx), the Alzheimer's longitudinal research program launched by neurologist Leonard Berg at Washington University in St. Louis in the 1970s received $32 million in funding, extending it through 2031. The study rejected treating age-related memory decline as "normal aging" and committed to tracking true brain pathology—one of the field's longest-running cohort efforts. Specific research directions and funding allocations are detailed in the [media report](https://www.news-medical.net/news/20261110/2432-million-grant-extends-landmark-Alzheimers-research-through-2031.aspx).

---

### 9. 45 Days of Yoga Improved Mood and Memory, but Long-Term Meaning of Brain Connectivity Changes Remains Unclear

According to [News-Medical's report](https://www.news-medical.net/news/20261110/Scientists-scanned-peoples-brains-before-and-after-45-days-of-yoga-Heres-what-changed.aspx), a randomized controlled trial enrolled 139 healthy adults in a 45-day standardized yoga program. Compared to a waitlist control, mood, self-reported sleep quality, and some short-term memory measures improved. Brain scans from 43 participants revealed changes in functional connectivity across networks involved in motor control, attention, language, and cognitive processing. Functional connectivity refers to the degree of coordinated activity between brain regions, measurable via MRI. Researchers explicitly noted the long-term significance of these connectivity changes remains uncertain and doesn't support claims that yoga prevents cognitive decline.

[![Source image: Scientists scanned people's brains before and after 45 days of yoga. Here's what changed](https://www.news-medical.net/images/news/ImageForNews_851266_17943566428378793.jpg)](https://www.news-medical.net/news/20261110/Scientists-scanned-peoples-brains-before-and-after-45-days-of-yoga-Heres-what-changed.aspx)

---

### 10. Ergothioneine in Mushrooms May Protect Against Neurodegenerative Diseases, but Human Evidence Is Limited

According to [News-Medical's report](https://www.news-medical.net/news/20261110/Could-eating-more-mushrooms-help-protect-your-brain-as-you-age.aspx), a review synthesized existing research on ergothioneine—a natural antioxidant concentrated in mushrooms that shows protective effects against oxidative stress and inflammation linked to Alzheimer's and Parkinson's in lab and animal studies. Human evidence remains very limited. Review authors stressed that larger clinical trials are needed to determine whether ergothioneine supplementation can prevent or delay neurodegenerative diseases; current findings don't support dietary recommendations.

[![Source image: Could eating more mushrooms help protect your brain as you age?](https://www.news-medical.net/images/news/ImageForNews_851241_17943525083515017.jpg)](https://www.news-medical.net/news/20261110/Could-eating-more-mushrooms-help-protect-your-brain-as-you-age.aspx)

---

## **⚡ Product & Feature Updates**

### Fitnescity Health Expands Whole-Body MRI Scans to Nearly 100 U.S. Locations

According to [Longevity.Technology's coverage](https://longevity.technology/news/fitnescity-healths-whole-body-mri-scans-go-nationwide/), Fitnescity Health—self-described as America's largest preventive imaging network—has opened whole-body MRI scans at nearly 100 sites nationwide and made access available to health platforms via a unified API. Whole-body MRI is a single scan covering major organs to detect potential abnormalities early, previously offered mainly at boutique health centers. This expansion makes scheduling as routine as a standard checkup, though broader commercial access doesn't mean new clinical validation. Pricing and coverage details are in the [media report](https://longevity.technology/news/fitnescity-healths-whole-body-mri-scans-go-nationwide/).

---

## **🧪 Frontier Research**

### Nonlinear Midlife Amyloid Accumulation in Brain Choroid Plexus

[This preprint](https://europepmc.org/article/MED/PPR1361149) studied the formation of "Biondi body" amyloid deposits in the human choroid plexus—the brain structure that produces cerebrospinal fluid. The process shows cross-scale nonlinear changes during midlife, linked to early neurodegenerative disease progression. The choroid plexus and amyloid accumulation are considered potential early windows in Alzheimer's research. This is an unreviewed preprint using human samples; sample size and methods require checking the full paper.

---

## **◎ Industry Shifts & Personal Impact**

### UTHealth Houston Launches Mobile Clinic in Lower Rio Grande Valley

According to [News-Medical's report](https://www.news-medical.net/news/20261110/UTHealth-Houston-unveils-state-of-the-art-mobile-clinic-in-the-Lower-Rio-Grande-Valley.aspx), UTHealth Houston held a ribbon-cutting on October 22 for a new mobile clinic in Texas's Lower Rio Grande Valley. Mobile clinics bring medical equipment to underserved areas—this region has historically had low healthcare access. The announcement didn't disclose service scope, population coverage, or operational scale; details are in the [media report](https://www.news-medical.net/news/20261110/UTHealth-Houston-unveils-state-of-the-art-mobile-clinic-in-the-Lower-Rio-Grande-Valley.aspx).