# Initial science shortlist

Research cutoff: 2026-07-16

Status: discovery and first-pass triage. Inclusion here does not endorse novelty, causal interpretation, or therapeutic efficacy.

## Strong prompt- or workflow-rich candidates

| Candidate | Field | Reported contribution | Prompt / run evidence | Validation and caveats |
| --- | --- | --- | --- | --- |
| [Virtual Lab nanobody design](https://www.nature.com/articles/s41586-025-09442-9) | Protein engineering | Designed 92 mutants; two improved binding against newer SARS-CoV-2 variants | [Complete agent discussions, code, and scoring](https://github.com/zou-group/virtual_lab) | Wet-lab binding and expression; known scaffolds, not neutralization |
| [GPT-4 breast-cancer drug pairs](https://arxiv.org/pdf/2405.12258) | Drug repurposing | Several synergistic pairs amid many non-successes and an incorrect biological explanation | Prompts and hypotheses in supplement | Peer-reviewed cell-line assays; not clinical evidence |
| [Google Co-Scientist system and AML case](https://www.nature.com/articles/s41586-026-10644-y) | Oncology | Several expert-selected candidates inhibited AML-cell viability; combinations had mixed effects | [Exact system prompts and pseudocode](https://static-content.springer.com/esm/art%3A10.1038%2Fs41586-026-10644-y/MediaObjects/41586_2026_10644_MOESM1_ESM.pdf) | In vitro; expert candidate selection; proprietary implementation |
| [Co-Scientist liver-fibrosis case](https://pmc.ncbi.nlm.nih.gov/articles/PMC12667525/) | Organoid biology | Two of three recommended compound classes showed antifibrotic activity | Co-Scientist prompts plus generated hypotheses | Human organoids, not animal or clinical efficacy |
| Co-Scientist cf-PICI case ([AI analysis](https://www.sciencedirect.com/science/article/pii/S0092867425009730), [biology result](https://www.sciencedirect.com/science/article/pii/S0092867425009742)) | Microbiology | Recovered a then-unpublished gene-transfer mechanism | Research goal in Co-Scientist supplement | Counterfactual rediscovery, not AI-originated discovery |
| [FutureHouse Robin for dry AMD](https://www.nature.com/articles/s41586-026-10652-y) | Ophthalmology | Connected ROCK inhibition to improved RPE phagocytosis and guided two experimental rounds | [Prompts, trajectories, code, and data links](https://github.com/Future-House/robin) | In-vitro validation; novelty chiefly the disease connection |
| [GPT-5 RAPF-HiFi cloning](https://openai.com/index/accelerating-biological-research-in-the-wet-lab/) | Molecular biology | Combined modifications yielded 79-fold more verified clones than baseline | Fixed prompt described but not fully published | Replicated controls; no standalone peer-reviewed paper found |
| [GPT-5 / Ginkgo autonomous CFPS lab](https://cdn.openai.com/pdf/5a12a3bc-96b7-4e07-9386-db6ee5bb2ed9/using-a-gpt-5-driven-autonomous-lab-to-optimize-the-cost-and-titer-of-cell-free-protein-synthesis.pdf) | Synthetic biology | Lower reported specific cost and higher titer over six closed-loop rounds | Exact prompts and full trajectories unavailable | More than 36,000 reactions; one protein and one system |
| [ChemCrow chromophore and synthesis work](https://www.nature.com/articles/s42256-024-00832-8) | Chemistry | Proposed new chromophore and executed known syntheses | [Full runs](https://github.com/ur-whitelab/chemcrow-runs), [public implementation](https://github.com/ur-whitelab/chemcrow-public) | Synthesized molecule materially missed target wavelength |
| [Qiushi Discovery Engine](https://arxiv.org/abs/2604.27092) | Experimental optics | Proposed and tested a pairwise optical interaction and related experiments | Broad initial theme disclosed; full traces/code/data unavailable | Very recent preprint; novelty not independently reproduced |
| [HACO / MaskGXT](https://arxiv.org/pdf/2606.22866) | Materials computation | Transferred a vision modeling strategy to crystal generation and improved benchmarks | Human prompts and winning-lineage transcripts in appendix; [code](https://github.com/kiyoung98/HACO) | Computational benchmark, not material synthesis; key human interventions |
| [AHOIS multimode-fibre discovery](https://arxiv.org/abs/2606.26722) | Experimental optics | Proposed backscatter encoding and adaptive sparse scanning | Exact open-ended prompt; representative trajectories in supplement | Preprint, supervised experiments, no claim of new physical law |

## Documented attempts and audits

### GPT-5 early-science physics cases

The [Early science acceleration experiments](https://cdn.openai.com/pdf/4a25f921-e4e0-479a-9b38-5367b47e8fd0/early-science-acceleration-experiments-with-gpt-5.pdf) contains valuable paired attempts:

- a cold black-hole symmetry prompt incorrectly concluded no symmetries existed, while a fresh instance first warmed up on the flat-space limit and then recovered the full curved-space generators;
- an initial cosmic-string integral run continued for hours without returning and was terminated, while a second, more specific prompt succeeded;
- T-cell mechanism and CAR-T predictions include long prompts and output excerpts, but validation figures were still unpublished.

These should be separated into run-level records rather than summarized as one success story.

### Independent audit of Kosmos radiobiology claims

An [independent audit](https://arxiv.org/abs/2511.13825) evaluated public Kosmos reports and found a mix of refuted, supported, and ambiguous claims. The DDR/p53 claim failed a 10,000-random-gene-set comparison; the CDO1 association remained strong; a prostate signature was statistically significant but not unusual relative to random signatures. This is a priority example of post-publication validation changing claim status.

### Kosmos seven-study corpus

The [Kosmos paper](https://arxiv.org/abs/2511.02824) links exact high-level objectives, reports, and notebook trajectories for studies in neuroprotection, perovskites, connectomes, myocardial fibrosis, diabetes genetics, Alzheimer’s progression, and entorhinal-cortex vulnerability.

Corpus-level audit results are as important as individual highlights: 79.4% of 102 audited statements were supported, but only 57.9% of interpretation claims. The authors warn about prompt sensitivity, preprocessing sensitivity, overclaiming, rabbit holes, and stochasticity.

## Scope boundaries

Lower-priority workflow-automation cases include Carnegie Mellon Coscientist, LLM-RDF reaction development, OpenScientist, and BioDiscoveryAgent. Important foundation-model discoveries such as AlphaFold-derived work, Evo, MatterGen, and A-Lab should remain outside the prompt-led archive unless scope explicitly expands beyond natural-language agents.

## Modeling implications

1. Keep `attempt_date`, `first_public_date`, and `peer_reviewed_date` separate.
2. Distinguish counterfactual rediscovery from original discovery.
3. Store positive and negative experimental arms within one campaign.
4. Distinguish cell-line, organoid, animal, and clinical evidence.
5. Record who selected the hypotheses or candidates that were actually tested.
6. Preserve reviewer-agent rejections and abandoned branches where available.
