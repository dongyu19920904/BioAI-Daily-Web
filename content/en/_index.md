---
linkTitle: AI生命延续学日报
title: AI生命延续学日报 2026/9/29
breadcrumbs: false
next: /en/2026-09/2026-09-28
description: Daily AI + longevity news and insights, tracking aging biology, rejuvenation,
  biological age, lifespan interventions, and related tools and models.
cascade:
  type: docs
---
## Today's Summary

```
Injecting anti-PD-L1 antibodies directly into the brain saved 40% of neurons in Alzheimer's mice, and the key move was blocking T cells from getting into the brain — worked even without clearing tau.

The blood SASP Score uses deep learning to combine 38 proteins into one number that tracks whole-body aging load. High scorers face 1.4x higher death risk, and it's just a blood draw.

Alzheimer's might not need tau clearance at all, heart failure could improve by 80% with a pomegranate compound, and anti-aging research is shifting tracks fast.
```

## ⚡ Quick Nav

- [📰 Today's AI News](#todays-ai-news) - Latest updates at a glance

> 💡 **Heads up**: Want to try tools like GPT, Claude, Gemini, Codex, Cursor, or Grok mentioned in this piece, but don't want to deal with overseas payments, sign-ups, quotas, and tutorials? Head over to [**Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) and pick from official accounts, mirrors, Cursor plans, or relay access based on your scenario — self-service ordering on the site, instant delivery.

## Today's AI Life Science News

### 👀 One-Liner
Antibodies blocking an immune checkpoint in the brain restore microglial function and cut neurodegeneration

### 🔑 3 Keywords
#AgingBiomarkers #Neurodegeneration #EpigeneticClocks

---

## 🔥 TOP 10 Big Stories

### 1. [The SASP Score: Deep Learning Quantifies Whole-Body Senescent Cell Burden](https://lifespan.io/a-new-metric-for-overall-senescent-cell-burden/)

Deep learning is the star here. Previously, researchers could only measure one senescence marker at a time. Now a research team has used deep learning to combine 38 blood proteins into the SASP Score — a biomarker reflecting total senescent cell secretory burden across the whole body. Validated against UK Biobank data from 50,000 people, high SASP Score individuals showed a 1.4x higher mortality risk, plus notably elevated risk for chronic kidney disease, dementia, and stroke. After 18 months of exercise intervention, SASP Score stopped climbing, while the control group kept getting worse.

This is the first AI tool to integrate nonlinear relationships across platforms to quantify senescent cell burden. One blood draw gets you a read, making it handy for quickly checking whether anti-aging interventions actually work. That said, it only captures systemic aging load — it can't pinpoint which specific organ is affected, so it needs to be paired with other biological clocks.

**Source type**: Research institution release / Animal studies + population observational study / Credibility: Medium

![A New Metric for Overall Senescent Cell Burden](https://lifespan.io/wp-content/uploads/2026/09/Bad-blood-vessel-proteins-262x187.png)

---

### 2. [Anti-PD-L1 Antibody Injected Directly Into the Brain Restores Microglial Function](https://www.fightaging.org/archives/2026/09/pd-l1-blockade-in-the-brain-restores-measures-of-glial-cell-function/)

PD-L1 is the story's focus. It's the "brake" protein cancer cells use to dodge the immune system, and turns out aging brain cells pull the same trick. A research team injected anti-PD-L1 antibodies directly into the brains of Alzheimer's mice, and 7 days later, microglial activity bounced back, neuronal calcium activity normalized, and amyloid plaques shrank — with a more direct effect than traditional IV injection.

The key here is direct brain delivery. IV injections have to get past the blood-brain barrier, which limits their punch. But this has only been tested in mice, and the safety and feasibility of direct brain injection in humans hasn't been confirmed. Also, the study didn't check whether senescent cells were actually cleared, so the mechanism might involve more than just kicking immune clearance into gear.

**Source type**: Research report / Animal study (5xFAD mouse model) / Credibility: Medium

---

### 3. [methylCIPHER: An Open-Source R Package Bundling Multiple Epigenetic Clocks](https://github.com/HigginsChenLab/methylCIPHER)

methylCIPHER is the name to know here. Epigenetic clocks come in so many flavors that figuring out which one to use — and how to run it — has been a real headache for researchers. methylCIPHER bundles cutting-edge algorithms like PC clocks, SystemsAge, CausalAge, and DunedinPACE all in one place. Just feed in your methylation data, and it batch-calculates multiple biological age metrics. The code's open source, and 26 stars show researchers are already putting it to use.

This isn't a new clock — it's a toolbox. It lowers the barrier to using epigenetic clocks, but that doesn't erase the limitations of the clocks themselves. Each one targets different populations, prediction goals, and training datasets, so users still need to figure out which clock fits their research question.

**Source type**: Open-source project / Tool release / Credibility: High (code is auditable)

---

### 4. [STABLE-BAG: A Stability Framework for Explaining Brain Age Gaps With SHAP](https://github.com/sisinflab/STABLE-BAG)

Brain Age Gap (BAG) is what's on the table — it's the difference between the AI-predicted age of your brain and your actual age, and it reflects brain health. Previous models just spit out a single number with no insight into which brain regions drove the gap. STABLE-BAG uses SHAP (an explainable AI method) to break down the brain age gap, letting researchers see which regions are aging fast and which are holding up well, all while making sure the explanation stays stable and reproducible across datasets.

This is real progress on AI + brain aging explainability. Black-box models used to make doctors nervous, but now you can actually see which regions are flagged, which is way closer to what clinicians need. That said, the code just dropped (1 star), so it still needs more independent validation.

**Source type**: Open-source project / Methodology tool / Credibility: Medium (needs further validation)

---

### 5. [New Antibody Therapy Blocks T Cells From Entering the Brain, Cuts Tissue Loss by 40% in Alzheimer's Mice](https://www.genengnews.com/topics/translational-medicine/antibody-blocks-t-cell-infiltration-and-limits-neurodegeneration-in-alzheimers-mice/)

Washington University's team is behind this one. Once tau protein piles up in the Alzheimer's brain, T cells start migrating in from peripheral lymph nodes and speed up neuron death. The team injected mice with anti-CXCR3 antibodies (blocking the "navigation signal" that guides T cells into the brain), and after 3.5 months, T cells in the brain dropped by half, the memory center held onto 40% more tissue, and memory test scores improved — all without any change in tau levels.

The big finding: you don't need to clear tau to cut down damage — just blocking T cell entry does the trick. And since the antibody doesn't need to cross the blood-brain barrier, existing T-cell therapies for multiple sclerosis might be repurposed for Alzheimer's directly. Still, this is mouse-only data for now, and human safety remains unknown.

**Source type**: Peer-reviewed paper (Neuron) / Animal study / Credibility: High

---

### 6. [AI Tool Spots Aging Patterns in Hematopoietic Stem Cells](https://www.news-medical.net/news/20260928/New-artificial-intelligence-tool-identifies-aging-patterns-in-hematopoietic-stem-cells.aspx)

Hematopoietic stem cells are the focus — they churn out all our blood cells, but their function declines with age, leading to anemia and weaker immunity. A research team built an AI tool to analyze aging patterns in these stem cells, able to flag which cells are aging fast and which are still going strong. This opens up a fresh angle on understanding blood system aging.

Details are thin so far — no word on what data the AI trained on, how accurate it is, or whether it's open source. If this is just an early proof of concept, clinical application is still a long way off. More details are needed to judge real-world value.

**Source type**: News report / Research stage unclear / Credibility: Low (insufficient info)

---

### 7. [Pomegranate Extract Improves Heart Function by Up to 80% in Heart Failure Model](https://www.sciencedaily.com/releases/2026/09/260925093157.htm)

Urolithin A is the compound driving this story. When you eat pomegranates, walnuts, or berries, your body produces this compound, and animal studies show it can relax stiffened heart tissue, reduce scarring and abnormal enlargement, and improve heart failure metrics by up to 80%. Similar effects showed up in engineered human heart tissue too.

This targets "diastolic heart failure" — a notoriously hard-to-treat type. Urolithin A has already popped up repeatedly in mitochondrial repair research, but this is the first time it's shown such a dramatic improvement in a heart failure model. Still, it's animal studies plus lab tissue only — human dosing and long-term safety remain unknown.

**Source type**: Research institution release / Animal study + in vitro tissue / Credibility: Medium

---

### 8. [LongevityWorldCup: A Longevity Sports Platform With a Biological Age Calculator and Public Leaderboard](https://github.com/nopara73/LongevityWorldCup)

LongevityWorldCup is the platform in question — an open-source longevity sports hub offering a biological age calculator, athlete profiles, and a public leaderboard. Users input their health data, calculate their biological age, and compare with others. 26 stars suggest a small community is already using it.

This is an attempt to "gamify longevity" — turning aging reversal into something measurable and comparable, like a sport. But the accuracy of the biological age calculator depends on which clock is running behind the scenes, and the platform doesn't say. If it's just a simple questionnaire estimate, the reference value is limited.

**Source type**: Open-source project / Community tool / Credibility: Medium (algorithm needs checking)

---

### 9. [Cancer Cells Selectively Delete Y Chromosome Segments to Fuel Tumor Growth](https://www.news-medical.net/news/20260928/Cancer-cells-erase-sections-of-Y-chromosome-to-trigger-tumor-growth-in-men.aspx)

Male cancer cells are the subject here — they selectively delete gene-rich regions of the Y chromosome, triggering a cascade that fuels tumor growth. This helps explain why certain cancers are more common in men. This isn't random loss — it's an active strategy cancer cells are pulling off.

Y chromosome loss is common in older men and used to be chalked up as just a side effect of aging. Now it turns out cancer cells are exploiting it. The report doesn't specify which cancers, which genes get deleted, or whether it's reversible. If the key genes can be pinned down, this could open the door to new therapies targeting male-specific cancers.

**Source type**: News report / Research stage unclear / Credibility: Medium

---

### 10. [EU Recommends Regular Heart Checkups Starting at Age 35](https://medicalxpress.com/news/2026-09-eu-regular-heart-onward.html)

The EU is the actor here — on Monday, it recommended at least one heart disease screening for people under 35, with regular checkups from 35 onward. This is a policy-level response to cardiovascular disease trending younger. Cardiovascular disease is the world's #1 killer, and early screening helps catch high-risk folks before things get worse.

This isn't new tech — it's public health policy. The headline number is "35" — heart disease used to be seen as an old person's problem, and now the timeline's moved up. The report doesn't spell out specific tests, frequency, or how coverage will reach lower-income populations.

**Source type**: Policy announcement / Public health recommendation / Credibility: High

---

## 📌 Worth Watching

**[Research]** [Brain Tissue Outside the Stroke-Damaged Zone Also Shows Accelerated Aging](https://www.news-medical.net/news/20260928/Understanding-how-brain-aging-outside-stroke-injury-zones-affects-aphasia.aspx) - Stroke doesn't just hurt the directly damaged area — surrounding regions age faster too, affecting aphasia recovery

**[Research]** [DNA Cleavage Observed in Real Time for the First Time](https://www.genengnews.com/topics/omics/scientists-observe-enzymes-breaking-down-dna-in-real-time/) - A Japanese team used high-speed atomic force microscopy to watch enzymes find and cut DNA, revealing how DNA structure affects its own degradation

**[Research]** [Cannabis Use Disorder Rising Among Older Adults](https://www.news-medical.net/news/20260928/Study-finds-rising-cannabis-use-disorder-among-older-adults.aspx) - Cannabis use among older Americans is climbing, but research on addiction risk hasn't kept pace

**[Tool]** [ROGEN Project: A Toolkit Bundling Methylation Clocks and Longevity Variant Annotations](https://github.com/IBAR-ROGEN/Aging) - A bioinformatics toolkit combining methylation aging clocks, longevity-related variant annotation, and allele frequency comparison, just released with 1 star

---

## 🔎 Worth a Closer Look

### [Antibody Blocks T Cells From Entering the Brain: Protecting Neurons Without Clearing Tau](https://www.genengnews.com/topics/translational-medicine/antibody-blocks-t-cell-infiltration-and-limits-neurodegeneration-in-alzheimers-mice/)

The mainstream logic in Alzheimer's research goes "clear tau protein → protect neurons." But this Washington University study flips that script: tau levels in the mice's brains never budged, yet 40% of neurons survived anyway. The reason is that T cells invading the brain attack neurons directly, so blocking their entry route (CXCR3) cuts the damage. This suggests tau itself might not be the direct killer — an overzealous immune response might be the real culprit. The paper's published in Neuron, and the evidence is solid. Still, mouse models don't fully capture human Alzheimer's, and the mechanism behind T cell brain infiltration in humans is likely more complex.

**Source type**: Peer-reviewed paper (Neuron) / Animal study / Credibility: High

---

## 🔮 AI Life Science Trend Forecast

### Anti-Aging Drug Trials Are Entering the "Combination Therapy" Era
- **Forecast timing**: Q4 2026
- **Probability**: 70%
- **Reasoning**: Today's news shows multiple targets (PD-L1, CXCR3, SASP) proving effective in animal studies, but single-target therapies have limited punch on their own. Based on the path cancer immunotherapy took, combination therapies usually enter clinical trials 1-2 years after single-agent validation.

### Epigenetic Clocks Become the Standard Endpoint for Anti-Aging Drug Trials
- **Forecast timing**: Q1 2027
- **Probability**: 75%
- **Reasoning**: Today's news on [methylCIPHER going open source](https://github.com/HigginsChenLab/methylCIPHER) plus the successful validation of the SASP Score shows epigenetic clock tools are maturing fast. The FDA is already discussing using biological age as a surrogate endpoint for drug approval.

### Direct Brain Delivery Tech Breaks Through the Blood-Brain Barrier Problem
- **Forecast timing**: Q1 2027
- **Probability**: 60%
- **Reasoning**: Today's news on [anti-PD-L1 antibody brain injection](https://www.fightaging.org/archives/2026/09/pd-l1-blockade-in-the-brain-restores-measures-of-glial-cell-function/) showed striking results, but direct brain injection isn't practical at scale. Nanocarriers and focused ultrasound tech are already being validated across multiple labs, and we might see the first human trial within the next six months.

### AI Aging Biomarker Platforms Get Folded Into Mainstream Health Checkups
- **Forecast timing**: Q2 2027
- **Probability**: 65%
- **Reasoning**: Today's news on the [SASP Score](https://lifespan.io/a-new-metric-for-overall-senescent-cell-burden/) shows it only needs a blood draw, keeping costs low and scalability high. Combined with the EU's policy on regular heart checkups starting at 35, commercial health checkup providers are likely to jump on this fast.

---

## 📎 Citable Takeaways for Today

**Factual finding**: Washington University research shows that blocking T cell entry into the brain with anti-CXCR3 antibodies preserved 40% more tissue in the memory centers of Alzheimer's mice, even with no change in tau protein levels.
**Original source**: [Antibody Blocks T Cell Infiltration and Limits Neurodegeneration in Alzheimer's Mice](https://www.genengnews.com/topics/translational-medicine/antibody-blocks-t-cell-infiltration-and-limits-neurodegeneration-in-alzheimers-mice/)
**Evidence boundaries**: The study used a 5xFAD transgenic mouse model over a 3.5-month treatment period; T cell brain infiltration mechanisms in humans may be more complex, and safety and efficacy haven't been verified yet.

**Factual finding**: The SASP Score biomarker, developed from UK Biobank data on 50,000 people, shows that high scorers face a 1.4x higher all-cause mortality risk than low scorers, along with significantly elevated risk of chronic kidney disease, dementia, and stroke.
**Original source**: [A New Metric for Overall Senescent Cell Burden](https://lifespan.io/a-new-metric-for-overall-senescent-cell-burden/)
**Evidence boundaries**: This is an observational study, so it can only establish correlation, not causation; the SASP Score only reflects whole-body senescent cell secretory burden and can't pinpoint specific organ damage or predict particular disease types.

**Factual finding**: The pomegranate compound Urolithin A improved diastolic heart function metrics by up to 80% in animal heart failure models, with similar effects observed in engineered human heart tissue.
**Original source**: [Pomegranate compound improves heart function by up to 80% in study](https://www.sciencedaily.com/releases/2026/09/260925093157.htm)
**Evidence boundaries**: Evidence comes from animal studies and in vitro engineered tissue; effective human dosing, long-term safety, and whether diet alone can deliver sufficient amounts all remain unconfirmed.