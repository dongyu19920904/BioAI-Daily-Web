---
linkTitle: AI生命延续学日报
title: AI生命延续学日报 2026/11/25
breadcrumbs: false
next: /en/2026-11/2026-11-25
description: Daily AI + longevity news and insights, tracking aging biology, rejuvenation,
  biological age, lifespan interventions, and related tools and models.
cascade:
  type: docs
---
## **Today's Summary**

```
A single-injection gene-editing therapy kept bad cholesterol suppressed in monkeys for three years.
A review suggests black seed has modest benefits on aging-related markers, but human evidence remains thin.
All cholesterol-lowering gene-editing data comes from animal studies; human efficacy still awaits clinical trials.
```

## **🔥 Today's Top 5**

### 1. Single-Injection CRISPR Gene Editing Keeps LDL Cholesterol Down in Monkeys for Three Years

Verve Therapeutics (now a Lilly subsidiary) published research in *Nature* showing that a one-shot CRISPR base-editing therapy produced lasting reductions in blood LDL cholesterol — the so-called "bad cholesterol" — in monkeys. 🧬 The edit targets ANGPTL3, a liver-produced protein that inhibits the breakdown of fat particles in the blood; switching it off lowers both LDL and triglycerides simultaneously. In healthy monkeys at the high-dose level, a single injection reduced non-HDL cholesterol by an average of 31.8% and LDL by 12.9% over three years, with no accumulated liver damage observed. Researchers also knocked out the LDL receptor in four additional monkeys to simulate familial hypercholesterolemia; LDL dropped from 458 to 247 mg/dL (roughly 46%) within 35 days, though it remained significantly elevated, indicating this pathway can't fully address that genetic condition. A cohort of 738 offspring confirmed the edits weren't passed down to the next generation. All data is from animal studies, so whether this works for people with diet- or age-related high cholesterol still needs human trials to answer. Check out [Lifespan.io's coverage](https://lifespan.io/single-dose-gene-therapy-lowers-ldl-cholesterol-in-monkeys/) for the full experimental design and data.

![Illustration of single-injection CRISPR gene editing for cholesterol reduction](https://lifespan.io/wp-content/uploads/2026/11/DNA-262x187.png)

---

### 2. Black Seed and Aging: A Review Finds the Human Evidence Still Isn't There

[News-Medical's report](https://www.news-medical.net/news/20261124/Black-seed-has-been-used-for-2000-years-Could-it-help-us-age-better.aspx) covers a narrative review that systematically surveyed the effects of black seed (*Nigella sativa*) and its main active compound thymoquinone on aging-related biological processes, including oxidative stress, inflammation, metabolic dysfunction, neurodegeneration, and cellular senescence. 🌿 A narrative review doesn't run new experiments — it pools existing literature to assess the overall strength of the evidence. The review found that current human studies show only "modest improvements" in cardiometabolic risk markers and cognitive measures, which isn't enough to support the conclusion that black seed supplements can extend healthy human lifespan. This herb has been in use for over two thousand years, but a long history of traditional use isn't the same as modern evidence-based proof.

[![Source image: Black seed has been used for 2,000 years. Could it help us age better?](https://www.news-medical.net/images/news/ImageForNews_852701_17955756489545102.jpg)](https://www.news-medical.net/news/20261124/Black-seed-has-been-used-for-2000-years-Could-it-help-us-age-better.aspx)

---

### 3. Circadian Rhythms and Protein Quality Control: Fruit Fly Research Uncovers a New Link

A research team at KAIST (Korea Advanced Institute of Science and Technology) used fruit flies to discover that cells perform quality checks on proteins as they're being synthesized, weeding out defective ones — and that this quality-control process plays a role in regulating the biological clock's rhythm. ⏰ The circadian clock governs the sleep-wake cycle, and protein synthesis quality control wasn't previously on the list of known clock-regulating mechanisms. The specific findings and mechanistic details still need independent verification; head over to [News-Medical's report](https://www.news-medical.net/news/20261125/KAIST-team-uncovers-link-between-protein-quality-control-and-sleep-wake-rhythm-regulation.aspx) to read the original research. These results come from fruit flies, so whether they apply to mammals or humans is still an open question.

---

### 4. How the Brain Ages Spatially: Mavrikaki-Lab Releases Code for Human Brain Transcriptomics Study

Mavrikaki-Lab has published analysis code for a [human brain aging spatial transcriptomics study](https://github.com/Mavrikaki-Lab/Mavrikaki_Ra_Brain_aging_spatial_transcriptomics_human) on GitHub. 🧠 Spatial transcriptomics measures gene activity region by region while preserving each region's physical location in the tissue — essentially drawing a "map" of gene expression across the brain, rather than blending all regions into one averaged measurement. The repo currently has 1 star and was last active on November 9, 2026. The README's self-described content still needs independent verification, and the publication status of the underlying research is unclear.

---

### 5. Sex-Specific Differences in Rat Healthspan Published in *Aging*

[News-Medical's report](https://www.news-medical.net/news/20261124/Study-reveals-sex-specific-differences-in-aging-and-healthspan-decline.aspx) points to a paper published November 11, 2026, in *Aging* (Volume 18), which used aging rats to systematically evaluate how healthspan decline differs between males and females. 🐀 Healthspan refers to the years spent in good physical function, as distinct from total lifespan. Specific assessment metrics and key numbers are only available at the abstract level and need verification against the full paper; the research was conducted in rats, so the findings don't translate directly to humans.

---

## **🧪 Cutting-Edge Research**

### Excess Body Fat Worsens Physical Symptoms During Perimenopause

[News-Medical's report](https://www.news-medical.net/news/20261125/New-study-links-excess-adiposity-to-heightened-somatic-symptoms-during-perimenopause.aspx) covers a new study examining the link between excess adiposity (too much fat tissue, which is a bit different from just being overweight) and the severity of physical symptoms during perimenopause. The perimenopause transition spans several years before menopause and commonly brings symptoms like hot flashes and fatigue. 💡 The relationship between BMI and menopausal symptoms has been studied before, but how fat distribution specifically affects perimenopausal symptoms has gotten relatively little attention. Detailed sample sizes and quantified results still need verification from the full paper; this is an observational study, so it can establish association but not causation.

---

## **⌘ Top Open-Source Projects**

### lucascamillomd/pyaging: A GPU-Accelerated Python Toolkit for Aging Clocks

[pyaging](https://github.com/lucascamillomd/pyaging) packages several GPU-optimized aging clock algorithms, letting researchers estimate biological age from genomic or epigenetic data — that is, how old cells actually are at a molecular level, as opposed to chronological age by birthdate. 🐍 It's a good fit for aging researchers with Python experience who need to process samples in bulk. The project has 134 stars and was last active on November 22, 2026. Supported data formats and runtime requirements are in the repo's README; keep in mind that biological age estimates are statistical metrics, not definitive predictions of individual disease risk.

### ZT135292/Dog\_blood\_transcriptomic\_aging\_clock: A Canine Blood Transcriptomics Aging Clock

[This repo](https://github.com/ZT135292/Dog_blood_transcriptomic_aging_clock) provides complete code for building an aging clock from canine blood gene expression data, implementing and comparing six machine learning approaches for age prediction: elastic net, Lasso, random forest, XGBoost, support vector regression, and mixture of experts. 🐕 Transcriptomic aging clocks infer biological age by measuring which genes are active and to what degree; dog models are also frequently used as a reference point in human aging research. The repo was last active on November 19, 2026; star count was not provided, and license status needs verification.