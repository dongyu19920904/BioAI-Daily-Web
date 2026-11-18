---
linkTitle: AI生命延续学日报
title: AI生命延续学日报 2026/11/17
breadcrumbs: false
next: /en/2026-11/2026-11-17
description: Daily AI + longevity news and insights, tracking aging biology, rejuvenation,
  biological age, lifespan interventions, and related tools and models.
cascade:
  type: docs
---
## **Today's Summary**

```
Proteins secreted by aging fat cells damage blood vessels and trigger cellular senescence — validated in mouse experiments.
Gut microbiomes of long-lived populations show specific metabolic activity changes; similar metabolic improvements observed in aged mice.
Research on lipoproteins and vascular aging remains at the cell and animal stage; the causal chain is unclear, and human effects are unknown.
```

## **📌 Today's Top 9 Stories**

### 1. Asprosin, a Protein Secreted by Fat Cells, Drives Vascular Aging

Asprosin, a protein produced by aging fat cells, damages mitochondria in blood vessel lining cells and triggers cellular senescence — the state where cells stop dividing and pump out inflammatory signals to their surroundings, per [a Lifespan.io report](https://lifespan.io/fat-cells-can-secrete-a-senescence-promoter/). In mouse experiments, injecting anti-Asprosin antibodies or knocking out its gene significantly reduced blood vessel wall thickening and inflammatory markers. In vitro tests went further: secretions from fat cells that couldn't produce Asprosin caused less damage to human endothelial cells. The discovery stays at the cell and animal stage for now, though. Researchers note the complete causal chain behind elevated Asprosin isn't pinned down yet, and whether it beats existing vascular treatments is an open question awaiting clinical testing.

![Fat and vascular aging diagram](https://lifespan.io/wp-content/uploads/2026/11/Fat-and-vascular-aging-262x187.jpg)

### 2. Gut Microbiome Metabolic Activity Linked to Human Longevity 🦠

Specific metabolic activity changes in the gut microbiome (the trillions-strong microbial community in the intestines) of long-lived populations have been identified by UC San Diego researchers, per [a News-Medical report](https://www.news-medical.net/news/20261116/Gut-microbiome-changes-could-potentially-be-harnessed-to-support-healthier-aging.aspx). The team used engineered bacteria to reproduce similar metabolic health improvements in aged mice. This is a correlation study — whether these metabolic activities can be controllably "amplified" in humans and whether they actually extend lifespan remain open questions pending verification against the original data.

[![Source image: Gut microbiome changes could potentially be harnessed to support healthier aging](https://www.news-medical.net/images/tags/TagImage-4166-452960421181018548294-620x480.jpg)](https://www.news-medical.net/news/20261116/Gut-microbiome-changes-could-potentially-be-harnessed-to-support-healthier-aging.aspx)

### 3. Evaluating AI Models That Convert H&E Slides to Multiplex Immunofluorescence 🔬

Five AI generative models that "translate" H&E images into multiplex immunofluorescence (mIF) have been systematically evaluated by [the HEmIF-Bench paper](https://papers.cool/arxiv/2611.19905). In pathology, mIF staining can simultaneously tag multiple proteins to help analyze the tumor microenvironment, while conventional H&E staining is cheaper and far more common. The evaluation covered tasks like cell phenotyping, tumor lymphoid structure recognition, and patient survival prediction. The key finding: high pixel-level staining fidelity doesn't translate to good downstream task performance, and no generative model consistently beat UNI2, a foundation model pretrained on large-scale H&E data. That's a wake-up call for tools marketed on "virtual staining accuracy" — real diagnostic value still needs independent validation.

### 4. MT-RGCN-DTI: A Drug-Target Interaction Prediction Model 💊

MT-RGCN-DTI, a drug-target interaction prediction model, uses a relational graph convolutional network (a graph neural network that handles multiple node and edge types) to integrate drug similarity, protein similarity, and known interaction networks simultaneously, per [the MT-RGCN-DTI paper](https://papers.cool/arxiv/2611.20109). In early-stage AI drug discovery, quickly predicting which drug molecules can bind to a target protein can dramatically cut experimental costs. The model achieved competitive prediction performance on multiple standard datasets. Code is open-sourced in the [GitHub repository](https://github.com/Dheeran-S/MT-RGCN-DTI/). The paper is a preprint reporting benchmark performance, not yet validated in real drug development pipelines.

### 5. Lumosity Large Clinical Trial Shows Overall Cognitive Improvement 🧠

Lumosity, the brain training program from Lumos Labs, showed overall cognitive improvement in a large randomized clinical trial of healthy adults, per [a News-Medical report](https://www.news-medical.net/news/20261116/Brain-training-program-Lumosity-improves-overall-cognition-in-clinical-trial.aspx). Specific sample size, training duration, and individual cognitive subtest data await verification against the original article. Current conclusions apply only to healthy adults and can't be directly extrapolated to dementia or cognitive impairment patients.

### 6. Agent Orange Exposure Raises Parkinson's Disease Risk ⚠️

Agent Orange exposure is linked to a 57% higher risk of Parkinson's disease and related conditions in Vietnam War veterans, per [a News-Medical report](https://www.news-medical.net/news/20261116/Agent-Orange-exposure-significantly-raises-Parkinsons-risk-in-veterans.aspx). A study analyzing electronic health records of millions of veterans found that soldiers exposed to the herbicide had significantly higher disease risk than unexposed counterparts. This is a large-scale observational study showing statistical association, not direct causation. The specific mechanisms linking dioxins and other chemicals in Agent Orange to neurotoxicity weren't disclosed in the abstract.

### 7. Alzheimer's Disease Research Finds Strong Links Between Physical and Brain Health 🫀

Alzheimer's disease and aging research has turned up strong associations between physical health and brain health, per [a News-Medical report](https://www.news-medical.net/news/20261116/Research-on-Alzheimers-finds-strong-links-between-physical-and-brain-health.aspx). Specific study design, cohort size, and quantitative results await verification against the original article. As a correlation study, it can't directly conclude that "improving physical fitness prevents Alzheimer's disease."

### 8. SemiNovo: A Semi-Supervised Framework for Peptide De Novo Sequencing 🧬

SemiNovo, a semi-supervised framework for de novo peptide sequencing, learns from both annotated and unannotated mass spectra, per [the SemiNovo paper](https://papers.cool/arxiv/2611.21079). In proteomics, directly recovering amino acid sequences from mass spectrometry data is key to identifying unknown proteins, but most existing deep learning models train only on high-confidence spectra that match database entries, leaving vast amounts of unannotated spectra untapped. The framework also comes with DarkSpec, a large-scale unannotated mass spectrometry corpus, achieving leading performance on multiple benchmarks. Code and dataset are publicly available; the paper is a preprint.

### 9. Longevity Prediction Neural Network Embeds Actuarial Constraints 📊

AINN, a longevity prediction neural network, embeds actuarial monotonicity priors (the assumption that mortality rises monotonically with age) as a differentiable penalty term into LSTM training, per [the AINN paper](https://papers.cool/arxiv/2611.18802). It forecasts lifespan using data from six countries — Switzerland, Sweden, Norway, West Germany, the Netherlands, and Japan — spanning 1956–2020. The key finding: the constraint strength coefficient λ shows a quantifiable accuracy-stability tradeoff. At λ=0.1, prediction confidence intervals narrow by 25% with only a 0.84% increase in RMSE; 10-year out-of-sample backtesting shows a mean absolute error of 0.38 years. This is statistical prediction modeling — results depend on the selected countries and historical data and don't represent individual lifespan prediction capability.

---

## **🚀 Product & Feature Updates**

### LabVantage on AI Adoption Prerequisites: Connecting Lab Information Systems

LabVantage VP of Product Denise Bell discusses how siloed lab informatics constrains AI adoption, per [a GEN podcast](https://www.genengnews.com/topics/toward-connected-laboratory-ecosystems/). When LIMS (Laboratory Information Management Systems), ELN (Electronic Lab Notebooks), LES (Laboratory Execution Systems), and SDMS (Scientific Data Management Systems) each run independently, AI lacks sufficient operational and scientific context to reliably support decision-making. This content comes from a commercial podcast — it's a product philosophy discussion, not independent research validation.

[![Source image: Toward Connected Laboratory Ecosystems](https://www.genengnews.com/wp-content/uploads/2026/11/Denise-Bell-VP-Product-Management-and-Marketing-e1794865379160-300x300.jpg)](https://www.genengnews.com/topics/toward-connected-laboratory-ecosystems/)

---

## **🔍 Frontier Research**

### A Parametric Analysis Framework for Corpus Callosum Diffusion MRI

A parametric analysis framework for corpus callosum diffusion MRI applies standardized grid resampling to the mid-sagittal section, establishing cross-subject spatial correspondence without computationally expensive inter-subject registration, per [this paper](https://papers.cool/arxiv/2611.19066). The corpus callosum is the largest white matter tract connecting the brain's two hemispheres, and its microstructural changes relate to aging and Alzheimer's disease. On aging and Alzheimer's datasets, the new method's effect size maps broadly agree with existing mainstream methods while revealing local differences that current methods miss. The paper is a preprint reporting method validation only — not yet a clinical diagnostic tool.

---

## **📋 Industry Changes & Personal Impact**

### Weight Loss Drug Prescriptions Plummet After Four States Cut Medicaid Coverage 💰

Weight loss drug prescriptions took a sharp dive after four states dropped Medicaid (the US public insurance program for low-income individuals) coverage for GLP-1 drugs, according to a University of Pittsburgh research team and [a News-Medical report](https://www.news-medical.net/news/20261116/Medicaid-coverage-cuts-sharply-reduce-weight-loss-drug-prescriptions.aspx). GLP-1 drugs have drawn attention in recent years for weight loss and cardiovascular benefits, but their high price means many patients rely on insurance coverage to access them. This study reveals the direct impact of insurance policy on drug accessibility; the specific magnitude of decline and number of people affected await verification against the original article.

---

## **📦 Top Open Source Projects**

### Shape-Lab/SPHARM-Mamba: Cortical Surface Brain Age Prediction Tool

SPHARM-Mamba is an open-source tool for cortical surface morphological analysis and brain age prediction, available at [its GitHub repository](https://github.com/Shape-Lab/SPHARM-Mamba). Its core method combines spherical harmonics (a mathematical tool for describing shapes on a sphere) with the Mamba architecture, making the model rotation-invariant to brain orientation — well-suited for multi-scale analysis of brain region morphology using structural MRI data. Brain age is the brain's "physiological age" estimated from neuroimaging, commonly used in aging and neurodegenerative disease research. The repo has 1 star, was last active November 9, 2026, and license info is pending verification. Best to check the repository for runtime environment requirements before diving in.

---

## **💡 Related Questions**

### What Does the Asprosin Research Mean for Everyday People — Can It Be Tested or Targeted?

Asprosin is still a lab research target with no approved testing or intervention methods. This study established its link to vascular aging in cells and mice, but the researchers themselves note the complete causal chain behind elevated Asprosin isn't yet clear, and any potential therapy would need to be compared against existing vascular treatments before its value can be assessed. Check out [the original Lifespan.io article](https://lifespan.io/fat-cells-can-secrete-a-senescence-promoter/) for details.