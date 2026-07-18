# Additional physical and life science candidate cases

Research cutoff: 2026-07-17

Status: source triage for future records. Inclusion here does not endorse a novelty or correctness claim. The outcome labels below reflect the strongest result supported by the cited sources, not necessarily the authors' preferred description.

This scan supplements the initial science shortlist and the continued cross-domain scan. It focuses on cases with unusually useful prompt, trajectory, failure, or physical-validation evidence. Dates are deliberately split into actual run dates and public-disclosure dates; most authors do not report when their agent run occurred.

## Record-ready candidates

### A-Lab GPSS lithium-halide spinel campaign

- **Field:** solid-state chemistry, battery materials, and self-driving laboratories
- **Research target:** optimize air-sensitive chloride spinel solid electrolytes in the `Li2-xM1+-yCl4` family for both high spinel phase purity and ionic conductivity.
- **Actual campaign dates:** 2025-11-03 through 2025-12-26, a 53-day laboratory campaign.
- **Public dates:** arXiv submission 2026-04-13. No peer-reviewed version was identified in this pass.
- **AI system:** GPT-5 with high reasoning effort operated three workflows: abnormality detection using abductive reasoning, pattern finding using inductive reasoning, and Bayesian-optimization-assisted pattern finding. The system produced structured proposals and kept a reflection memory. It was connected to the A-Lab GPSS glovebox laboratory.
- **Human role:** humans designed the first 77 samples and 12 later samples, specified the chemical search space and laboratory constraints, and performed or supervised semi-automated transfers, characterization, and inspection. The agent proposed and executed 263 of 352 samples.
- **Outcome classification:** successful optimization campaign with many unsuccessful experiments, rather than one discrete breakthrough. The joint success rate for samples exceeding both the authors' conductivity and purity thresholds rose from 1.33% in the first 75 agent samples to 5.33% in the final 75.
- **Attempt denominator:** 352 synthesized samples covering 19 metals and 124 of 171 possible pairwise metal combinations. The low absolute final hit rate is important context and makes this a valuable campaign-level record.
- **Validation:** every proposed sample was physically synthesized and evaluated with X-ray diffraction and electrochemical impedance spectroscopy. The team later updated 13 conductivity values after identifying analysis issues, and human reinspection found occasional phase-fitting problems.
- **Prompt and trajectory availability:** unusually strong. The public repository contains separate prompt files for the agent workflows, structured outputs, code, and campaign data. The dataset has a permanent Zenodo deposit. A repository audit should still determine whether every production conversation and reflection state is preserved.
- **Primary sources:** [paper](https://arxiv.org/abs/2604.11957), [code and prompts](https://github.com/CederGroupHub/alab_gpss_public), [dataset](https://doi.org/10.5281/zenodo.19396297), and [campaign video](https://youtu.be/9j-3aIf02jE).
- **Caveats:** this is a developer-authored preprint, the search was seeded and constrained by humans, several physical and analytical steps were not fully autonomous, and the final joint hit rate was 5.33%. The archive should avoid turning campaign-level improvement into a claim of a singular new material breakthrough.
- **Recommended record shape:** one campaign record with links to the complete experiment table, rather than 352 thin child records. Preserve the failed samples as first-class tabular evidence.

### ACRA autonomous synthesis-reproduction campaign

- **Field:** synthetic chemistry, laboratory automation, and reproducibility
- **Research target:** convert synthesis procedures in papers into executable XDL protocols, detect and repair ambiguities, simulate the procedures against real hardware, and physically reproduce them on Chemputer and Opentrons platforms.
- **Actual run dates:** not reported.
- **Public date:** peer-reviewed article published 2026-04-03.
- **AI system:** Autonomous Chemputer Reaction Agents used a paper scraper, procedure agent, XDL generator, critique or judge stages, retrieval of similar validated procedures, and iterative parser and hardware-simulation correction. The accessible paper and repository show an OpenAI-API-based system, but the exact production model and version should be recorded as undisclosed unless confirmed from supplementary material.
- **Human role:** chemists selected source documents, built the hardware and XDL constraints, annotated ambiguous examples, and performed an independent manual attempt after one robotic failure. A human-question tool could be invoked when the system could not resolve an ambiguity.
- **Outcome classification:** mixed reproduction campaign. The system generated highly executable procedures and completed several physical syntheses, while also producing a well-documented failure that exposed a likely non-reproducible literature procedure.
- **Campaign results:** from 717 extracted literature procedures, 427 were classified executable, 89 as blueprints, and 201 as incomplete. On a 150-procedure benchmark, 99.33% yielded valid XDL and 94.67% passed the discrepancy and simulation checks. Six procedures were attempted physically across the two platforms.
- **Successful physical examples:** the reported examples include p-toluenesulfonate; 2-methyl-2-(3-oxopentyl)-1,3-cyclohexanedione; 3-methoxy-3-oxopropanoic acid from a German-language procedure; 4-(4-nitrophenyl)morpholine; and (2E)-3-[3,4-bis(acetyloxy)phenyl]-2-propenoic acid.
- **Documented unsuccessful attempt:** for methyl 4,6-O-benzylidene-alpha-D-glucopyranoside, the source instructed 30 extractions and ACRA reduced this to three. The automated reaction showed no conversion. A chemist then repeated the work with altered hardware and still could not reproduce the reported chemistry without substantial procedural changes. The authors classified the original procedure as not reproducible.
- **Validation:** robotic execution, product isolation, NMR, and yield measurements; the failure received a separate chemist-led reproduction attempt.
- **Prompt and trajectory availability:** strong but not necessarily complete. The public repository contains the agent prompt directory, scraper, source code, notebooks, and data; supplementary information adds prompt and workflow detail. Confirm whether production chat traces are included before labeling transcripts public.
- **Primary sources:** [Communications Chemistry article](https://www.nature.com/articles/s42004-026-01993-w), [code and prompts](https://github.com/croningp/acra), [data](https://doi.org/10.5281/zenodo.18980981), and [archived code release](https://doi.org/10.5281/zenodo.18980238).
- **Caveats:** this is primarily literature reproduction, not discovery of a new molecule or reaction. The workflow makes explicit best-guess substitutions for ambiguous prose, and some Chemputer-specific packages are available only on request.
- **Recommended record shape:** one campaign record plus a linked documented-attempt record for the failed glucopyranoside reproduction. This is one of the clearest scientific examples of why the archive should preserve unsuccessful work.

### TeLLAgent organic-solar-cell materials campaigns

- **Field:** organic electronics, molecular design, and materials informatics
- **Research target:** design synthesizable donor and acceptor materials for organic solar cells from natural-language requests, then verify device performance experimentally.
- **Actual run dates:** not reported.
- **Public dates:** manuscript received 2025-12-17, accepted 2026-05-19, and first published 2026-05-22.
- **AI system:** a DeepSeek-R1 supervisor planned the work and a DeepSeek-V3.1 executor invoked about 30 specialized tools through MCP. The tools included molecular generators, property predictors, filters, database search, and analysis modules. The system used iterative self-correction.
- **Human role:** researchers synthesized the selected materials, fabricated and characterized devices, and performed physical-property measurements. In the acceptor campaign, an expert explicitly assessed feasibility and novelty over several cycles and selected a donor partner from the top three candidates returned from a 1,285-material database.
- **Outcome classification:** two lab-validated human-AI design campaigns.
- **Donor campaign:** from a single natural-language query, TeLLAgent generated and filtered donor candidates. The selected material was synthesized; paired with Y6, it achieved 15.07% measured power-conversion efficiency versus a 15.83% prediction.
- **Quasi-macromolecular acceptor campaign:** a researcher specified possible pi-bridges and acceptor units, then iterated with the agent and expert review. The final system achieved 16.44% measured efficiency versus a 16.07% prediction.
- **Validation:** material synthesis, solar-cell fabrication, optical absorption, energy-level characterization, and measured device efficiency.
- **Prompt and trajectory availability:** partial to strong. The paper prints a system-prompt fragment beginning `You are an AI system called TeLLAgent`, supplementary information describes prompt context and failure analyses, and the repository exposes the setup and a subset of tools. Verify whether the exact initial natural-language queries and complete production trajectories can be mirrored.
- **Primary sources:** [Chemical Science article](https://pubs.rsc.org/en/content/articlehtml/2026/sc/d5sc09883a), [repository](https://github.com/JinYSun/TeLLAgent), and [interactive demonstration](https://huggingface.co/spaces/jinysun/TeLLAgent).
- **Caveats:** expert filtering and material selection were consequential, the workflow depends on specialized pretrained generators and predictors, only part of the tool stack is public, and the authors report weaker behavior outside the predictors' training distribution. The record should not imply end-to-end autonomous discovery.
- **Recommended record shape:** two linked campaign records sharing one system-method page.

### EarthLink Atlantic Nino precursor investigation

- **Field:** climate science, ocean-atmosphere variability, and seasonal forecasting
- **Exact research request:** `I want to extend the forecast skill of the JJA (June-July-August) Atlantic Niño event (i.e., TCC skill > 0.5) to an 8-month lead time. Please use appropriate datasets to identify some good precursors and develop forecasting models (such as multiple linear regression, random forest, gradient boosting, etc.). Finally, please explain the underlying physical mechanisms.`
- **Actual run date:** not reported.
- **Public dates:** first arXiv disclosure 2025-07-23. Expanded versions appeared during 2026; the archive should preserve separate version dates instead of replacing the original disclosure date.
- **AI system:** EarthLink routed the request through input-guard, planning, recipe, diagnostic, and image-analysis agents. It generated a plan, code, dataset analyses, forecasting models, and a physical explanation. The repository currently defaults to GPT-5 and the broader paper compares several frontier models, but the exact backbone for this particular discovery run is not sufficiently clear from the public record and should be marked undisclosed pending author confirmation.
- **Human role:** a person supplied the research question and quantitative success threshold. Scientists evaluated scientific value, inspected outputs, and made minor figure-layout adjustments. The platform supports optional supervision.
- **Outcome classification:** documented mixed result or target-missed attempt with a potentially useful scientific hypothesis.
- **Outcome:** the agent proposed an Atlantic-internal wind-thermocline precursor pathway that the authors describe as physically consistent. Multiple-linear-regression, random-forest, and gradient-boosting hindcasts reached temporal-correlation coefficients of roughly 0.36 to 0.46. These exceeded persistence and ENSO-only comparators but did not reach the explicitly requested threshold above 0.5.
- **Validation:** retrospective correlation and hindcast analyses against historical datasets, plus author and expert evaluation. No prospective forecast, laboratory test, or independent replication was identified.
- **Prompt and trajectory availability:** the complete user prompt is public and the code is public. The repository defines output packages containing the request, plan, scripts, results, and logs. Confirm whether the exact production run package is present before claiming the full trajectory is available.
- **Primary sources:** [original arXiv paper](https://arxiv.org/abs/2507.17311), [expanded preprint](https://assets-eu.researchsquare.com/files/rs-8630394/v1_covered_9fac9b8c-5aa6-49e4-ab6d-b24eb8a96733.pdf?c=1771474786), [project site](https://www.openearthlab.com/EarthLink/), and [repository](https://github.com/OpenEarthLab/EarthLink).
- **Caveats:** preprint evidence only, an author-proposed mechanism rather than an independently established one, and the numerical target was missed. This is precisely why it is more informative as a documented attempt than as a breakthrough claim.
- **Recommended record shape:** a single documented-attempt record with `target_met: false`, while separately recording the comparative improvement and proposed mechanism.

### Two AM CVn astronomy experiments

- **Field:** optical and X-ray astronomy
- **Source status:** single-author ICML 2026 AI4Science workshop poster published 2026-05-30. Actual run dates are not reported.
- **AI system:** the paper says a general-purpose LLM with Python access; it does not identify the provider, model, or version. The archive must not infer these.
- **Human role common to both experiments:** the researcher selected the scientific question, input datasets, and success criteria, then evaluated the output. In the second experiment, short expert hints were essential.

#### Experiment A: counterfactual recovery from spectra

- **Exact prompt:** `identify the AM CVn in this set.`
- **Target:** find one known AM CVn binary hidden among 29 reduced Magellan/MagE spectra, the other 28 being hydrogen-rich cataclysmic variables. No labels, templates, or line-identification hints were provided.
- **Outcome classification:** successful recovery of an already known object, not a new astronomical discovery.
- **Outcome:** in about 15 minutes, the model wrote a line-detection and equivalent-width pipeline and a helium-minus-hydrogen score. The known AM CVn ranked first with a positive score while all other objects scored negatively.
- **Validation:** direct comparison with the hidden known label.

#### Experiment B: candidate generation with an initial failure

- **Exact goal:** `produce a high-confidence shortlist of candidate permanent high-state AM CVn binaries.`
- **Target:** screen a 1,487,933-row eROSITA-DE and Gaia DR3 catalog for permanent high-state AM CVn candidates.
- **Outcome classification:** mixed candidate-generation attempt; no new system was confirmed.
- **Outcome:** without domain guidance, the first attempt failed. Across eight rounds, the human supplied one-sentence domain priors. In about 1.5 hours the system reduced the catalog to a 30-object shortlist and recovered the known system HP Lib at rank 3 of an intermediate 223-object pool. The remaining 28 top candidates require spectroscopy or time-domain follow-up.
- **Validation:** recovery of known anchor objects only. No public evidence confirms a new candidate as an AM CVn system.
- **Prompt and trajectory availability:** the initial prompts and all eight hints are described in the paper, together with a reasoning narrative. No public code, data package, full machine-readable transcript, or model identifier was identified.
- **Primary sources:** [OpenReview entry](https://openreview.net/forum?id=QITl9MXW8h) and [paper PDF](https://openreview.net/attachment?id=QITl9MXW8h&name=pdf).
- **Caveats:** workshop paper, one researcher, undisclosed model, no code or complete trace, and no newly confirmed object. Although the author uses discovery language, the limitations say only two anchor systems are confirmed and that neither experiment qualifies as fully independent scientific discovery.
- **Recommended record shape:** two related documented-attempt records. The contrast between the zero-hint failure and eight-round expert-guided shortlist is more valuable than combining them into one success story.

### Latent-Y autonomous antibody-design campaigns

- **Field:** protein design, biologics, and drug discovery
- **Research target:** generate de novo VHH antibody binders, in some campaigns autonomously identify a functional epitope from literature, and validate selected sequences in the laboratory.
- **Actual run dates:** not reported. The paper applies a Protein Data Bank leakage cutoff of 2026-03-16, which is not equivalent to a run date.
- **Public dates:** manuscript dated 2026-03-23, arXiv submission 2026-03-31, revision 2026-04-01.
- **AI system:** a provider-agnostic frontier-LLM harness coordinated specialized subagents, databases, MCP tools, and Latent Labs' proprietary Latent-X2 protein generator. The exact LLM and version used for each production campaign are not disclosed.
- **Standardized public request:** `I want to design 24 VHH binders to [TARGET_NAME], that target the function described in the technical paper. You may use a sampling budget of up to 10 000 samples. When you submit any batches for this campaign, please use the project_id=camp:xxx.`
- **Human role:** most benchmark campaigns reportedly ran without human filtering or intervention after the request. Internal or external teams synthesized and assayed selected proteins. In the cross-species TNFL9 campaign, a human expert caught a biologically implausible hotspot-selection strategy and instructed the agent to filter it, making the collaboration load-bearing.
- **Outcome classification:** promising but vendor-controlled mixed campaign with both wet-lab hits and failures.
- **Nine-target laboratory campaign:** binders were confirmed for six of nine targets, a 67% target-level success rate. The targets spanned IL-6, IL-6R, prolactin, IL-33, TNF, SARS-CoV-2 RBD, cross-species TNFL9, and human transferrin receptor contexts. Three target-level attempts therefore produced no confirmed binder; preserve that denominator even if individual non-hit targets cannot be unambiguously recovered from the summary tables.
- **Autonomous epitope campaigns:** the paper reports successful binder discovery for IL-6, IL-6R, and prolactin and describes IL-6 as the first fully de novo lab-validated antibody binder from an autonomous workflow.
- **Cross-species TNFL9 collaboration:** 3 of 40 designs bound both human and cynomolgus targets. The human intervention prevented the system from exploiting geometrically accessible but biologically inappropriate intra-trimeric hotspots.
- **Twenty-one-campaign literature benchmark:** the agent selected the intended epitope in 21 of 21 cases, generated at least 24 post-QA binders in 16 of 21, and produced no computationally passing binder in 2 of 21. Only the human-transferrin-receptor benchmark was experimentally tested, yielding 11 hits from 40 designs; the rest remain computational outputs.
- **Validation:** VHH expression, high-throughput one-point surface plasmon resonance, and five-point Biacore affinity measurements for selected IL-6, IL-6R, and prolactin binders.
- **Prompt and trajectory availability:** partial. The exact standardized request, condensed traces, and selected user interventions appear in the paper. Full reasoning traces are said to exist in the proprietary platform, but the system prompts, code, generator, and complete production trajectories are not publicly downloadable.
- **Primary sources:** [arXiv record](https://arxiv.org/abs/2603.29727) and [HTML rendering](https://ar5iv.labs.arxiv.org/html/2603.29727v2).
- **Caveats:** vendor-authored preprint, proprietary platform and model, undisclosed exact LLM, selected sequences and structures rather than a complete open campaign dump, and no independent replication identified. Binding affinity is not therapeutic efficacy, target modulation, safety, or in-vivo benefit.
- **Recommended record shape:** one campaign record with child rows for all nine lab targets and the 21 benchmark targets. Do not collapse 6-of-9 into an undifferentiated success.

### Engineering-oriented symbolic regression for a constitutive law

- **Field:** solid mechanics, materials modeling, and scientific machine learning
- **Research target:** derive a simulation-ready hyperelastic constitutive law from standard Treloar rubber data while satisfying frame indifference, Drucker stability, convexity, and finite-element stability.
- **Actual run date:** not reported.
- **Public date:** arXiv submission 2026-02-12.
- **AI system:** Gemini 3 Pro acted as a physics-informed agent. From a natural-language domain descriptor such as `Isotropic Hyperelasticity`, it generated coordinate transformations, an operator whitelist, and physical inequality constraints. Symbolic genetic search generated equations, while the LLM assisted with constraint formation, model selection, and formula auditing.
- **Human role:** researchers chose the domain, data, symbolic-search architecture, and evaluation structure. The exact division between automated and human Pareto-front selection is not sufficiently clear for a stronger autonomy claim.
- **Outcome classification:** computational equation-discovery candidate with held-out-data and simulation validation.
- **Outcome:** the workflow proposed a hybrid law combining a Mooney-Rivlin linear base and a rational locking term. The paper reports training MSE around 0.008 and withheld pure-shear MSE around 0.0048. A notched-tensile Abaqus simulation converged under severe compression where the compared third-order Ogden model failed.
- **Validation:** fit to established experimental data, a held-out deformation mode, physical-constraint checks, and numerical finite-element stability. No new physical experiment or independent replication was identified.
- **Prompt and trajectory availability:** weak. The paper supplies an example natural-language domain descriptor and workflow detail, but no complete system prompt, production transcript, or public code repository was identified.
- **Primary source:** [arXiv paper](https://arxiv.org/abs/2603.19241).
- **Caveats:** preprint only, no open execution artifacts found, core discovery is symbolic regression rather than unconstrained LLM reasoning, and novelty and convexity claims are author claims. This is lower priority than prompt-rich cases.
- **Recommended record shape:** a candidate record only after a PDF and artifact audit, with a clear `validation_level: computational` label.

## Watchlist and boundary cases

### AIonopedia ammonia-absorbing ionic liquid

- **Claim:** the authors report an autonomous-domain-foundation-model workflow that selected and wet-lab validated an out-of-distribution phosphorus-centered ionic liquid for ammonia absorption.
- **Dates:** arXiv submission 2025-11-14; actual run date not reported.
- **Sources:** [paper](https://arxiv.org/abs/2511.11257).
- **Why not record-ready:** the accessible primary abstract supports wet-lab validation, but this pass did not locate public prompts, code, trajectories, an identified LLM backbone, or sufficiently detailed human-role provenance. Detailed performance numbers currently circulate mainly through secondary summaries and should not be imported without checking the full paper and supplement.

### POLYT5 polymer design

- **Claim:** a model generated more than six million polymer candidates, identified over 18,000 promising candidates, and led to synthesis and validation of one dielectric polymer meeting several property targets.
- **Dates:** received 2025-11-02, accepted 2026-02-20, and published 2026-03-03.
- **Source:** [Nature Chemical Engineering article](https://www.nature.com/articles/s44387-026-00087-1).
- **Boundary reason:** GPT-5 nano only routes natural-language requests; the paper says prediction and generation are performed exclusively by POLYT5. Key data are unavailable for intellectual-property reasons. This belongs in a broader AI-enabled materials archive, but it is weak evidence for prompt engineering or agent reasoning.

### ADDR Alzheimer drug-repurposing prioritization

- **Claim:** GPT-4.1 used a context-only structured prompt to label abstracts associated with 90 candidates generated by graph models, prioritizing 15 high-confidence and 17 broader candidates.
- **Dates:** published 2026-02-26; actual run date not reported.
- **Sources:** [article](https://www.nature.com/articles/s44401-026-00074-3) and [code and data](https://github.com/maggielee1111/LLM-prioritization-Framework).
- **Validation:** 82% agreement in a manual audit, overlap with trials and literature, observational NACC evidence, and clinician review; no new wet-lab, animal, or prospective clinical validation.
- **Boundary reason:** useful evidence-prioritization workflow, but the candidate generation is performed by graph models and the LLM primarily classifies existing text. It should not be described as an autonomous drug breakthrough.

### AgenticSciML computational method discovery

- **Claim:** a team of more than ten agents generated and evaluated scientific-machine-learning methods across six PDE and operator-learning tasks, with large reported improvements over baselines.
- **Source:** [Nature article](https://www.nature.com/articles/s44387-026-00102-5).
- **Boundary reason:** this may warrant a computational-research record after prompt and artifact review, but it produces numerical methods rather than a natural- or physical-science finding and currently lacks the failure-level provenance prioritized in this scan.

## Schema implications from this pass

These cases reinforce several properties that should be represented explicitly rather than buried in narrative:

1. **Separate dates:** `run_started`, `run_ended`, `first_public`, `preprint_published`, and `peer_reviewed_published`. Do not substitute an arXiv date for an unknown attempt date.
2. **Outcome versus target:** store the requested quantitative or qualitative target, whether it was met, and any useful secondary outcome. EarthLink both missed its `TCC > 0.5` target and produced a candidate mechanism.
3. **Attempt denominator:** preserve `attempted`, `successful`, `failed`, `indeterminate`, and the unit of counting. A-Lab's 352 samples and Latent-Y's six of nine targets communicate far more than a success label.
4. **Validation ladder:** distinguish known-object recovery, retrospective computational validation, held-out prediction, simulation, physical synthesis, assay, animal work, prospective field tests, and independent replication.
5. **Prompt completeness:** distinguish exact user prompt, system prompt, supplementary excerpts, source-code prompts, complete transcript, condensed trace, and unavailable private trace.
6. **Model provenance:** allow `undisclosed`; never infer a model from the current default in a repository or a vendor relationship.
7. **Human intervention events:** record expert hints, candidate filtering, feasibility review, physical handling, analysis correction, and post-run interpretation separately. The AM CVn and TNFL9 cases show that a one-line human hint can be scientifically load-bearing.
8. **Claimed versus archive outcome:** preserve the authors' wording, but give the archive a conservative normalized category. An unconfirmed shortlist is not a discovery, and recovery of a hidden known object is not a new finding.
9. **Artifact rights and completeness:** link to prompts where mirroring is not licensed or where safety, proprietary tooling, or publication rights make copying inappropriate.
10. **Campaign-child structure:** support a campaign with many trials or targets and optional child records. This prevents both success-only selection and hundreds of content-free pages.

## Suggested ingestion order

1. A-Lab GPSS, because prompts, code, experiment denominator, physical validation, and corrections are public.
2. EarthLink Atlantic Nino, because the exact request and explicit target miss make it a model documented-attempt record.
3. ACRA, including the failed glucopyranoside reproduction as a linked child record.
4. The paired AM CVn experiments, retaining the initial failure and all eight human hints.
5. TeLLAgent's two materials campaigns, after extracting exact queries from the supplement.
6. Latent-Y as a campaign-level record with strong proprietary and vendor caveats.
7. The constitutive-law case only after a deeper prompt and artifact audit.
