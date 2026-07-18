# GPT-4 breast-cancer drug-pair prompt sequence

Source: https://rs.figshare.com/articles/journal_contribution/29143434

The five prompts below are transcribed from supplementary figures S1 through S5. The supplement is licensed CC BY 4.0. Capitalization, wording, and numerical values are preserved.

## Initial drug-combination hypotheses

We are conducting pre-clinical research on breast cancer in a laboratory, specifically looking for novel drug combinations that can selectively target MCF7 breast cancer cells in a synergistic manner, while sparing MCF10A normal cells. We would like to use ChatGPT's knowledgebase to generate at least five hypotheses for small molecule drug combinations that are low to mid-range in cost, accessible, and preferably FDA-approved.

For each suggested drug combination, it should be explained in detail why it should be highly synergistic against MCF7 cells, based on some interesting interplay between the drug's mechanism of action, one drug aiding the other in some way. We don't want a reason for synergy to simply be targeting different unrelated pathways.

Additionally, it is paramount that all suggested combinations have not been tested in cancer cell lines, and that at least one of the drugs in any combination is a non-cancer drug.

For each drug combination, the diseases for which the FDA-approved drugs are used to treat (at least one of which should not be cancer) should be mentioned, followed by a detailed description of why they would aid one another and be synergistic in MCF7 cells. Lastly, it should be explained why MCF10A cells would be less affected.

Please provide your answers in a point format. Each point should start with explaining what it is about. 1) Drug, disease, mechanism. 2) Synergy hypothesis. 3) Why MCF7 is particularly vulnerable. 4) Why MCF10A is likely less affected.

## Positive controls

We are looking for known drug combinations that would have an effect on MCF7 cells. We'd like to use ChatGPT's knowledgebase to generate at least ten hypotheses for small molecule drug combinations that are low to mid-range in cost, accessible, and FDA-approved. It is important that the specific drug combinations have been thoroughly tested and shown convincing inhibition of MCF7 cell growth. We prefer combinations that have been approved for treating breast cancer.

To develop these hypotheses, we'd like ChatGPT to consider the following factors: the mechanism of action of the drugs and any relevant factors relating to genetics, epigenetics, metabolomics, proteomics, and lipidomics. We're particularly interested in hypotheses that take into account the specific characteristics of MCF7 cells.

For each suggested drug combination, we'd like ChatGPT to provide a very detailed explanation of why MCF7 cells would be affected. The objective of this prompt is to generate "positive controls", i.e. drug combinations that will harm MCF7 cells.

In your answer I want you to start by restating the criteria expressed in this prompt.

## Negative controls

We are looking for novel drug combinations that would not have an effect on MCF7 cells. We'd like to use ChatGPT's knowledgebase to generate at least five hypotheses for small molecule drug combinations that are low to mid-range in cost, accessible, and preferably FDA-approved. It is important that the drug combinations have not been tested in the context of breast cancer.

To develop these hypotheses, we'd like ChatGPT to consider the following factors: the mechanism of action of the drugs and any relevant factors relating to genetics, epigenetics, metabolomics, proteomics, and lipidomics. We're particularly interested in hypotheses that take into account the specific characteristics of MCF7 cells.

For each suggested drug combination, we'd like ChatGPT to provide a very detailed explanation of why MCF7 cells would not be affected. The objective of this prompt is to generate "controls", i.e. drug combinations that won't harm MCF7 cells.

In your answer I want you to start by restating the criteria expressed in this prompt.

## Primary-screen results and new combinations

We have conducted experiments testing several hypotheses with GPT-4 regarding synergistic drug combinations aimed at targeting MCF7 cells more effectively than MCF10A cells.

Now, we will present the primary findings from these experiments and request your assistance in proposing three new combinations (pairs) to test using the same drug library. Our main objective is to selectively target MCF7 cells while sparing MCF10A cells.

While several drugs exhibited effects on both cell lines at higher concentrations, for our purposes the most important aspect is that MCF7 is more sensitive to the combinations than MCF10A.

For MCF7 cells, Disulfiram demonstrated the highest toxicity. This was followed by Niclosamide. Doxorubicin and Mebendazole also demonstrated toxicity. Celecoxib, Quinacrine, Dipyridamole, Fulvestrant, itraconazole, Hydroxychloroquine, Chloroquine and Simvastatin showed toxicity only when used in higher concentrations.

For MCF10A cells, Niclosamide and Doxorubicin demonstrated the highest toxicity. Atorvastatin also appeared toxic. Itraconazole, Mebendazole, Chloroquine, Simvastatin, Quinacrine, Celecoxib and Mementine were toxic only when used in higher concentrations.

Disulfiram, Mebendazole, Fulvestrant and Quinacrine preferentially targeted MCF7. Doxorubicin, Atorvastatin, Niclosamide, Celecoxib and Simvastatin showed higher toxicity in the MCF10A cell line.

Based on this information and your knowledge of drug mechanisms and cell line profiles, we would like you to propose three new combinations that are expected to target MCF7 cells while sparing MCF10A cells. You can only select drugs mentioned in the analysis above, and one drug may be included in multiple combinations. Please rank these combinations according to their expected potency

## Future drug-combination hypotheses

We've conducted experiments exploring synergistic drug combinations targeting MCF7 cells more effectively than MCF10A cells.

We use a drug library consisting of the following drugs for this project: Allopurinol, Atenolol, Celecoxib, Disulfiram, Fulvestrant, Itraconazole, Sildenafil, Cimetidine, Mebendazole, Metronidazole, Atorvastatin, Chloroquine, Doxorubicin, Memantine, Niclosamide, Acarbose, Cetirizine, Cyclophosphamide, Diphenhydramine, Dipyridamole, Furosemide, Hydroxychloroquine, Omeprazole, Palbociclib, Quinacrine, Simvastatin.

In our latest iteration, we screened four of your most recent recommended combinations. The combinations are declared along with their resultant HSA synergy scores after incubation with MCF7 cells:

1) Mebendazole + Quinacrine : HSA score of 0.56

2) Disulfiram + Mebendazole: HSA score of -2.49

3) Disulfiram + Fulvestrant: HSA score of 1.81

4) Disulfiram + Quinacrine: HSA score of 1.53

In addition, we verified the toxicity of 12 single drug treatments, as well as three combinations from the first experiment.

Single drugs showing toxicity towards MCF7: Celecoxib, Chloroquine, Dipyridamole, Disulfiram, Doxorubicin, Fulvestrant, Hydroxychloroquine, Itraconazole, Mebendazole, Niclosamide, Quinacrine, Simvastatin.

Verified combinations featuring in our first experiment:

1) Disulfiram + Hydroxychloroquine: HSA score of 1.08

2) Dipyridamole + Mebendazole: HSA score of 1.10

3) Disulfiram + Simvastatin: HSA score of 4.75

Out of all the tested combinations declared above, three combinations demonstrated specificity towards MCF7 (difference of > 1 HSA synergy score compared to MCF10A):

1) Dipyridamole + Mebendazole: 3.60

2) Disulfiram + Simvastatin: 2.49

2) Mebendazole + Quinacrine: 1.09

For the next experiment we would like you to consider any compounds from our original drug library (as well as those of the positive controls), to device new combinations that would show synergy and specificity towards MCF7 as opposed to MCF10A. Please provide a table listing the drug pair, a detailed hypothesis explaining why the pair would be synergistic (based on both our results and your knowledge), and why MCF10A would be impacted to a lesser extent.
