# Continued cross-domain candidate scan

Research cutoff: 2026-07-17

Status: candidate collection and source triage. Inclusion here does not endorse novelty, correctness, or practical significance. Dates refer to public versions unless an actual run date is known.

This pass focused on cases not already represented in the initial science and mathematics shortlists. It also looked for campaign-scale sources that preserve unsuccessful attempts, prompts, or trajectories.

## High-priority additions

### CellVoyager computational-biology analyses

- **Field:** single-cell transcriptomics and computational biology
- **Reported contribution:** CellVoyager autonomously generated and implemented analyses for COVID-19 peripheral blood, human endometrium, and aging-brain datasets. The authors describe the resulting findings as novel, creative, and scientifically sound after expert review.
- **Outcome:** computational findings with expert evaluation; no new wet-lab validation reported for the three case studies.
- **Dates:** received 2025-06-02; peer-reviewed publication 2026-03-17; actual agent-run dates not identified.
- **Prompt and trajectory availability:** the [MIT-licensed repository](https://github.com/zou-group/CellVoyager) contains the runnable agent, input fields, CellBench, and case-study code. The exact prompts are inspectable in code. Whether the original uninterrupted case-study trajectories and notebooks are all preserved still needs a repository-level audit.
- **Primary sources:** [Nature Methods article](https://www.nature.com/articles/s41592-026-03029-6), [code and benchmark](https://github.com/zou-group/CellVoyager), [Zenodo archive](https://doi.org/10.5281/zenodo.17945696).
- **Caveats:** the paper's novelty claims concern additional analyses of existing datasets. Expert ratings are not independent replication, and exploratory analyses carry multiple-testing and researcher-degrees-of-freedom risks even when code executes correctly.
- **Triage:** high. This is a strong prompt-rich computational-discovery record and could support three linked case records plus one campaign record.

### CRISPR-GPT gene-editing experiment design

- **Field:** genome engineering
- **Reported contribution:** CRISPR-GPT guided knockout experiments for four genes using Cas12a and activation experiments for NCR3LG1 and CEACAM1 using CRISPR-dCas9. The designs were executed in human cancer cell lines.
- **Outcome:** successful experimental workflow demonstrations across six target genes, plus a 288-case design benchmark and independent expert testing.
- **Dates:** preprint 2024-04-27; article published 2025-07-30; issue date 2026-02. Actual laboratory and agent-run dates need extraction from the paper or authors.
- **Prompt and trajectory availability:** the article points to example prompts in Supplementary Note E and 20 full chat-history demonstrations in Supplementary Data 1. The authors state that code and prompts are not fully released because of safety concerns.
- **Primary sources:** [Nature Biomedical Engineering article](https://www.nature.com/articles/s41551-025-01463-z), [original preprint](https://arxiv.org/abs/2404.18021).
- **Caveats:** this is AI-guided experiment design rather than discovery of a new biological mechanism. Public reproducibility is deliberately incomplete, and the experiments were conducted in cell lines.
- **Triage:** high. It is unusually well documented for a wet-lab agent workflow, but mirroring rights and safety boundaries require care.

### The AI Scientist and AI Scientist-v2 campaigns

- **Field:** machine-learning research
- **Reported contribution:** The AI Scientist family generates hypotheses, writes and executes code, analyzes experiments, writes papers, and performs automated review. In the v2 evaluation, humans selected three AI-generated starting ideas for full runs; one of the three resulting papers cleared the workshop's average acceptance threshold, while two were rejected.
- **Outcome:** mixed research campaign. The accepted paper was withdrawn before publication. Internal review also identified citation errors, dataset-overlap concerns, unclear method descriptions, and inaccurate figure captions.
- **Dates:** v1 preprint 2024-08-12; v2 preprint 2025-04-11; workshop experiment in 2025; expanded peer-reviewed Nature article published in 2026.
- **Prompt and trajectory availability:** excellent. The papers print the prompts, models, sampling settings, runtime limits, and tree-search configuration. The public repositories include code, generated papers, and experiment materials. The v1 repository says it provides all paper-generation runs from the original evaluation.
- **Primary sources:** [v1 paper](https://arxiv.org/abs/2408.06292), [v1 repository](https://github.com/SakanaAI/AI-Scientist), [v2 paper](https://arxiv.org/abs/2504.08066), [v2 repository](https://github.com/SakanaAI/AI-Scientist-v2), [workshop experiment materials](https://github.com/SakanaAI/AI-Scientist-ICLR2025-Workshop-Experiment), [Nature article](https://www.nature.com/articles/s41586-026-10265-5).
- **Caveats:** acceptance at one workshop is not evidence that the scientific claims are correct or important. Humans chose which ideas to fund and which complete run to submit. V1 used human-authored research templates, while v2's more open-ended setup had a lower success rate.
- **Triage:** high as a campaign record. It supplies successes, rejections, selection effects, complete prompts, and substantial failure evidence.

### Agents4Science 2025 proceedings and audits

- **Field:** cross-domain AI-authored research
- **Reported contribution:** Agents4Science required AI participation in authorship and used AI review agents. The organizers explicitly framed the submissions as an experiment in observing both possible insights and instructive failures.
- **Outcome:** a heterogeneous collection rather than one finding. Individual submissions should be triaged separately.
- **Dates:** submission deadline 2025-09-15; decisions 2025-10-05; conference 2025-10-22.
- **Prompt and trajectory availability:** the [conference site](https://agents4science.stanford.edu/) publishes submissions, reviews, audit reports, and AI-review prompts. Transparency varies by submission. At least one audited paper preserved a complete formative Gemini dialogue, a 21-prompt suite, evaluation protocol, and hundreds of response artifacts.
- **Primary sources:** [conference site](https://agents4science.stanford.edu/), [example detailed audit](https://agents4science.stanford.edu/audits/audit_66.html).
- **Caveats:** conference participation and acceptance are not evidence of discovery. The archive needs to distinguish research performed by an agent from research merely drafted or edited by one.
- **Triage:** high as a discovery source and possible bulk-import corpus.

### AI research agents narrow scientific exploration

- **Field:** meta-science and machine-learning research
- **Reported contribution:** four agent frameworks and six language models generated 37,802 ideas across citation-defined AI and machine-learning areas. The generated ideas were more concentrated than human papers, stayed closer to seed literature, and tended to differ through recombination rather than new research questions.
- **Outcome:** large-scale negative or limiting result about current research-agent ideation.
- **Date:** preprint 2026-05-27.
- **Prompt and trajectory availability:** the paper describes controlled frameworks and shared seed literature. Public code, raw idea packages, and exact prompt availability still need confirmation before ingestion.
- **Primary source:** [arXiv paper](https://arxiv.org/abs/2605.27905).
- **Caveats:** the study concerns AI and machine-learning ideation, not the full research lifecycle. Citation similarity is only one view of conceptual novelty.
- **Triage:** high for the archive's methodological background. It directly tests whether research agents broaden or narrow exploration.

### Four autonomous machine-learning research attempts

- **Field:** machine-learning research and meta-science
- **Reported contribution:** a six-agent pipeline took four ideas through hypothesis formation, implementation, evaluation, and paper preparation. One attempt completed the pipeline and was accepted to Agents4Science 2025; three failed during implementation or evaluation.
- **Outcome:** one success and three documented failures. The failures cover multi-agent reinforcement learning and two world-model ideas, while the completed paper concerns semantic-entropy jailbreak detection.
- **Date:** report posted 2026-01-06; underlying attempts occurred in 2025, with exact run dates needing artifact extraction.
- **Prompt and trajectory availability:** strong. The public repository contains the workflow prompts, four idea directories, outputs, and failure analyses. It explicitly labels the outcome of each attempt.
- **Primary sources:** [paper](https://arxiv.org/abs/2601.03315), [artifact repository](https://github.com/Lossfunk/ai-scientist-artefacts-v1), [successful Agents4Science submission](https://openreview.net/forum?id=B6ZrLXou3u).
- **Caveats:** the successful paper's acceptance at an experimental workshop is not independent confirmation of its scientific claims. The repository describes itself as artifacts from the first complete run, so the completeness of raw provider-side conversations and unsuccessful retries still needs checking.
- **Triage:** very high. This is a compact, public success-and-failure set with shared prompts and unusually candid failure diagnoses.

### Agent-Native Research Artifacts and the RE-Bench failure corpus

- **Field:** meta-research and AI research engineering
- **Reported contribution:** an analysis of 24,008 agent runs across 21 models and 228 RE-Bench tasks reports that unsuccessful runs consumed 90.2% of total dollar cost and 59.2% of tokens. The proposed artifact format preserves failures, implementation details, evidence, and branching exploration.
- **Outcome:** evidence that discarded attempts dominate research-agent cost and that conventional papers omit information needed by future agents.
- **Dates:** analysis run reported as 2026-03-12; paper posted 2026-04.
- **Prompt and trajectory availability:** the underlying METR evaluation corpus reportedly retains full successful and unsuccessful trajectories. The artifact compiler and schema are public.
- **Primary sources:** [paper](https://arxiv.org/abs/2604.24658), [project repository](https://github.com/ARA-Labs/Agent-Native-Research-Artifact), [RE-Bench](https://metr.org/blog/2024-11-22-evaluating-r-d-capabilities-of-llms/).
- **Caveats:** RE-Bench is AI research engineering with objective optimization tasks, not open-ended natural science. A failed run is defined relative to a reference score rather than a claim of scientific failure.
- **Triage:** high as a corpus source and design reference. The analysis strongly supports preserving unsuccessful attempts.

### SciExplorer physics-model campaign

- **Field:** classical mechanics, waves, dynamical systems, and quantum many-body physics
- **Reported contribution:** SciExplorer was placed in simulated physical systems initially unknown to it and used generic experiment and code tools to recover equations of motion, infer Hamiltonians, and identify other model structure. The paper reports both successful recoveries and premature commitment to incorrect models.
- **Outcome:** mixed benchmark campaign across many simulated systems, with machine-checkable final answers rather than new claims about nature.
- **Dates:** preprint 2025-09-29; accepted 2026-05-22; peer-reviewed publication 2026-07-08.
- **Prompt and trajectory availability:** excellent. The article prints the generic system prompt, and the authors publish the [framework](https://github.com/MaxNaeg/SciExplorer) and a separate [results repository](https://github.com/MaxNaeg/SciExplorerResults) containing exploration logs.
- **Primary sources:** [Physical Review X article](https://journals.aps.org/prx/abstract/10.1103/xnqc-q6nt), [preprint](https://arxiv.org/abs/2509.24978).
- **Caveats:** the environments are simulated and designed by the researchers, so the records concern rediscovery from controlled observations rather than previously unknown physical laws. The authors deliberately avoided task-specific prompt repairs, making the failures especially informative.
- **Triage:** high as a campaign. It combines one stable prompt, diverse problems, full logs, objective scoring, and explicit failure analysis.

## Research reproduction corpora

These are not breakthrough records, but they contain real research tasks, fixed prompts, outcome denominators, and recurring failure modes.

### PaperBench

- **Scope:** 20 ICML 2024 Spotlight and Oral papers decomposed into 8,316 expert-authored rubric items.
- **Outcome:** the initial release reported 21.0% for its strongest tested baseline and no model exceeded the human baseline. The maintained repository now lists 26.0% for an o1-high iterative agent with a 36-hour limit, so leaderboard date and configuration must be stored with every result.
- **Availability:** public benchmark code, task artifacts, agent scaffold, and published system prompt.
- **Sources:** [OpenAI release](https://openai.com/index/paperbench/), [paper](https://cdn.openai.com/papers/22265bac-3191-44e5-b057-7aaacd8e90cd/paperbench.pdf), [repository](https://github.com/openai/frontier-evals/tree/main/project/paperbench).
- **Potential use:** campaign record or source of structured documented attempts. Confirm which original agent submissions and trajectories are publicly downloadable.

### ReplicationBench

- **Scope:** paper-scale, expert-validated astrophysics reproduction tasks co-developed with original authors.
- **Outcome:** every tested frontier model scored below 20%; the authors and domain experts analyzed recurring trajectory-level failure modes.
- **Availability:** [paper](https://arxiv.org/abs/2510.24591), [release repository](https://github.com/Christine8888/replicationbench-release), [Hugging Face dataset](https://huggingface.co/datasets/ChristineYe8/ReplicationBench).
- **Potential use:** strong non-ML replication corpus. Audit whether all evaluated trajectories or only task packages are public.

### CORE-Bench

- **Scope:** 270 tasks drawn from 90 papers in computer science, social science, and medicine.
- **Outcome:** the specialized agent reached about 21% to 22% accuracy on the hardest tasks; the general agent was substantially worse.
- **Availability:** task prompts and questions are public with the [benchmark repository](https://github.com/siegelz/core-bench); the [project site](https://crab.cs.princeton.edu/core-website/) documents agents and results.
- **Potential use:** lower-priority corpus because agents reproduce code rather than generate hypotheses, but prompt and outcome structure is unusually clean.

### ScienceAgentBench

- **Scope:** 102 data-driven discovery tasks from 44 peer-reviewed papers across four disciplines, validated by nine domain experts.
- **Outcome:** with three attempts per task, the strongest reported agent solved 32.4% independently and 34.3% with expert knowledge.
- **Availability:** [paper](https://arxiv.org/abs/2410.05080), [repository](https://github.com/OSU-NLP-Group/ScienceAgentBench).
- **Potential use:** benchmark collection for unsuccessful and partial attempts, with the caveat that each task is reduced to generating a Python program.

### Comparative autonomous-research failure study

- **Scope:** eight open-source research-agent frameworks were tested on two real reproduction tasks, one in uncertainty quantification and one in protein-interaction discovery.
- **Outcome:** no framework completed the full cycle from literature understanding through computational execution, validated results, and paper writing. The authors report sophisticated hallucinations from every framework and substantial human debugging requirements.
- **Availability:** the [bioRxiv preprint](https://www.biorxiv.org/content/10.64898/2026.01.05.697809v1) names the tested frameworks and describes the failures. Exact task prompts, full trajectories, and any companion repository still need artifact-level verification.
- **Potential use:** unusually valuable campaign-level evidence about failed attempts on genuine research tasks. It should be represented as an evaluation campaign, not eight unsupported individual failure records, unless the underlying runs can be recovered.

## Emerging discovery candidates needing deeper verification

### AstroAgents astrobiology hypothesis campaign

- **Field:** astrobiology and mass spectrometry
- **Reported contribution:** an eight-agent system generated more than 100 hypotheses from data for eight meteorites and ten soil samples. A NASA astrobiology expert judged 36% plausible; among that plausible subset, 66% were judged novel.
- **Sources:** [paper](https://arxiv.org/abs/2503.23170), [interactive project site](https://astroagents.github.io/), [MIT-licensed repository](https://github.com/amirgroup-codes/AstroAgents).
- **Prompt availability:** excellent for a hypothesis-generation campaign. The project site exposes each agent role prompt and generated outputs, while the repository includes `prompt.txt`, agent code, and result directories for Claude and Gemini runs.
- **Caveats:** expert ratings are not experimental validation. Novel and plausible hypotheses remain proposals, the evaluation used one named domain expert, and the public materials need an inventory to determine whether all generated hypotheses and iterations are preserved.
- **Triage:** high. It could become one campaign record with many child attempts and provides a strong example of prompt comparison across models.

### CMBEvolve and CosmoEvolve

- **Field:** cosmology and astrophysics
- **Reported contribution:** CMBEvolve improved out-of-distribution detection for weak-lensing maps through code evolution. CosmoEvolve performed an open-ended ACT DR6 analysis and reported non-trivial pair- and scale-dependent behavior with analysis-grade diagnostics.
- **Sources:** [overview paper](https://arxiv.org/abs/2605.14791), [CosmoEvolve system paper](https://papers.parallelscience.org/pdf/2604.00022v2), [agent-produced ACT DR6 paper](https://papers.parallelscience.org/abs/2604.00010).
- **Prompt availability:** the system architecture, roles, and internal review process are documented; exact initial prompt and full trajectories require repository inspection.
- **Caveats:** preliminary preprints, no independent scientific validation identified, and the authors describe these as demonstrations.
- **Triage:** medium-high.

### STELLA biomedical world model

- **Field:** oncology and protein engineering
- **Reported contribution:** the updated STELLA preprint reports that the system identified BTN3A1 as a negative regulator of NK-cell function in AML, later tested with CRISPR knockout, and proposed a strictosidine-synthase M276L variant with more than two-fold improved catalytic activity.
- **Sources:** [updated bioRxiv preprint](https://www.biorxiv.org/content/10.1101/2025.07.01.662467v2), [earlier system paper](https://arxiv.org/abs/2507.02004).
- **Prompt availability:** task-prompt construction is described and examples appear in the paper. Full discovery trajectories, exact prompts, code, and raw experimental data need a focused audit.
- **Caveats:** very recent preprint from the system's developers, unclear external replication, and multiple human and model components.
- **Triage:** medium-high pending artifact verification.

### Eubiota microbiome discovery

- **Field:** microbiome engineering
- **Reported contribution:** the preprint reports identification of a DNA-repair fitness axis, a four-strain consortium that reduced colitis severity in mice, a commensal-sparing antibiotic combination, and diet-associated metabolites that suppressed NF-kB signaling.
- **Source:** [bioRxiv preprint](https://www.biorxiv.org/content/10.64898/2026.02.27.708412v1).
- **Prompt availability:** the framework is described as open source, but the durable repository, exact prompts, original trajectories, and source licenses need confirmation.
- **Caveats:** preprint only, many distinct claims in one system paper, and external replication was not found in this pass.
- **Triage:** medium-high because the animal validation is unusual, but provenance needs stronger verification.

### Catalyst-Agent computational screening

- **Field:** heterogeneous catalysis
- **Reported contribution:** the system reports 23% to 34% success among selected computational candidates across oxygen reduction, nitrogen reduction, and carbon-dioxide reduction tasks, often converging within one or two refinement trials.
- **Source:** [arXiv preprint](https://arxiv.org/abs/2603.01311).
- **Prompt availability:** MCP tools and workflow are described; exact prompts, all candidate attempts, and complete trajectories need artifact inspection.
- **Caveats:** success is defined by learned-model and computational screening criteria, not synthesized catalysts or wet-lab performance.
- **Triage:** medium.

### MASTER catalyst exploration

- **Field:** density-functional-theory catalyst search
- **Reported contribution:** hierarchical agent reasoning reduced the number of required atomistic simulations by as much as 90% versus heuristic or random selection in two catalyst applications.
- **Sources:** [peer-reviewed npj Computational Materials article](https://www.nature.com/articles/s41524-026-02139-1).
- **Prompt availability:** reasoning traces are analyzed in the paper, but public prompts, code, and full run logs need confirmation.
- **Caveats:** efficiency improvement in computational exploration, not an experimentally validated catalyst discovery.
- **Triage:** medium.

### Autonomous equation development for materials science

- **Field:** data-driven materials theory
- **Reported contribution:** an LLM agent recovered established equations from data and proposed a strain-dependent relationship for HOMO-LUMO gap changes.
- **Source:** [arXiv preprint](https://arxiv.org/abs/2604.19789).
- **Prompt availability:** the framework keeps an execution record and provides system-level methodology; full prompts and raw trajectories need confirmation.
- **Caveats:** the proposed new law is predictive and not independently or experimentally validated. The paper also reports incorrect or inconsistent equations despite strong numerical fits.
- **Triage:** medium, particularly valuable as a mixed-outcome record.

### FirstResearch question-formation experiment

- **Field:** prompt engineering for scientific agents
- **Reported contribution:** a structured Research Question Certificate outperformed prompt-level baselines on ten topics under two LLM-judge protocols. The certificate forces assumptions, mechanisms, falsifiers, decisive tests, and failure updates to be explicit.
- **Sources:** [paper](https://arxiv.org/abs/2607.05682), [code, prompts, and saved outputs](https://github.com/louiswang524/FirstResearch).
- **Prompt availability:** excellent.
- **Caveats:** no human domain-expert evaluation, only one repeated ablation checkpoint, and the output is a proposed question rather than a completed research finding.
- **Triage:** medium as a prompt-method record and possible template reference.

### MAESTRO single-atom catalyst search

- **Field:** computational electrocatalysis and materials discovery
- **Reported contribution:** multiple specialized agents iteratively modified single-atom oxygen-reduction catalysts, reflected on computational feedback, and reported candidates that break conventional scaling relations between reaction intermediates.
- **Source:** [arXiv preprint](https://arxiv.org/abs/2602.21533).
- **Prompt availability:** the agent roles and iterative reasoning design are described in the paper. A public repository, complete prompts, full proposal history, and failed candidate set were not identified in this pass.
- **Caveats:** the candidates were validated computationally, not synthesized or tested experimentally. Claims about newly learned design principles and novelty are made by the system authors in a recent preprint.
- **Triage:** medium pending artifact availability.

### Genesys language-model architecture campaign

- **Field:** machine-learning architecture discovery
- **Reported contribution:** Genesys proposed 1,162 language-model designs and successfully pretrained 1,062 of them at one or more scales. The authors report that top designs outperformed GPT-2 and Mamba2 on six of nine downstream benchmarks.
- **Outcome:** large computational discovery campaign with a visible denominator, selective scaling, and many designs that failed generation or later filtering stages.
- **Sources:** [NeurIPS paper](https://papers.nips.cc/paper_files/paper/2025/hash/fa40454addc83f1f63ddebe65aa8fb39-Abstract-Conference.html), [preprint](https://arxiv.org/abs/2506.20249), [system repository](https://github.com/allenai/genesys).
- **Prompt availability:** the public system code and paper describe proposal, adversarial review, implementation, mutation, and verification. The repository needs inspection to determine whether all 1,162 proposals, prompts, rejected variants, and training results are durably preserved.
- **Caveats:** this is AI research rather than natural science, and the comparisons use comparatively small pretrained models. “Newly discovered” denotes generated architectures, not necessarily conceptual novelty relative to all prior literature.
- **Triage:** medium-high as a campaign because it exposes a large attempt denominator and a staged validation funnel.

## Workflow-rich boundary cases

### DeepSeek-R1 and Centaur cognitive-model discovery

- **Field:** cognitive science and human decision-making
- **Reported contribution:** DeepSeek-R1 proposed a two-stage heuristic combining equal weighting with a highest-validity-expert tie-breaker. The authors formalized it and found that it fit a multi-attribute decision dataset better than the three models in the original study. They then used errors identified by Centaur to develop a weighted combination that matched Centaur's fit while remaining interpretable.
- **Outcome:** peer-reviewed, model-assisted development of a new interpretable cognitive model, with substantial human formalization and refinement.
- **Date:** Nature article published 2025-07-02; actual model-run date not reported.
- **Prompt and artifact availability:** the exact DeepSeek-R1 prompt is in the article's Supplementary Methods. Psych-101, the Centaur adapter, and reproduction code are public, and the article provides example prompts for all 160 behavioral paradigms.
- **Primary source:** [Nature article](https://www.nature.com/articles/s41586-025-09215-4), [reproduction repository](https://github.com/marcelbinz/Llama-3.1-Centaur-70B), [Psych-101 dataset](https://huggingface.co/datasets/marcelbinz/Psych-101).
- **Caveats:** DeepSeek-R1 supplied a verbal hypothesis, not the final model. Humans chose the interesting explanation, translated it into equations, inspected the largest residuals, and introduced the final weighted form. The study reanalyzes an existing dataset and does not independently replicate the proposed decision mechanism.
- **Triage:** medium-high as a human-AI theory-development record with a recoverable prompt.

### Trainable agents for advanced scientific instruments

- **Field:** X-ray nanoprobes, robotic materials stations, and scientific instrumentation
- **Reported contribution:** a human-in-the-loop multi-agent pipeline operated multistep workflows at an X-ray nanoprobe beamline and an autonomous robotic materials station. In one reported task, a vision agent selected a follow-up scan region by comparing nano-diffraction and nano-fluorescence images.
- **Outcome:** successful instrument-operation demonstrations and benchmark comparisons, not a new scientific finding.
- **Date:** peer-reviewed article published 2026-03-06.
- **Prompt and trajectory availability:** the article describes expert-designed prompt templates and real-time instructions stored as retrievable memories. Supporting information is public under the article's CC BY license, but complete original session histories and executable code availability still need checking.
- **Primary source:** [npj Computational Materials article](https://www.nature.com/articles/s41524-026-02005-0).
- **Caveats:** humans remained in the loop, operational procedures supplied much of the domain knowledge, and only one tested model consistently performed the most difficult cross-modality task.
- **Triage:** medium-low for findings, high as an example of prompts becoming durable experimental operating knowledge.

### AILA and AFMBench atomic-force-microscopy campaign

- **Field:** atomic force microscopy and autonomous laboratory operation
- **Reported contribution:** AILA coordinated instrument control and data analysis for calibration, feature detection, friction measurement, graphene-layer analysis, and indenter identification. AFMBench evaluated 100 physical-operation tasks with three trials per task.
- **Outcome:** mixed instrument campaign with successful experiments, high error rates, and safety-relevant instruction drift. GPT-4o had a 29% error rate over 300 task instances; other tested models ranged from 51.6% to 66.6%.
- **Date:** peer-reviewed article published 2025-10-14.
- **Prompt and trajectory availability:** strong. System prompts are in the supplement, all benchmark tasks and selected real-experiment logs are in the public repository, and the article prints or links complete prompts and output logs for several experiments.
- **Primary source:** [Nature Communications article](https://www.nature.com/articles/s41467-025-64105-7).
- **Caveats:** the work automates known microscopy workflows rather than discovering a new scientific result. Some runs exceeded instructions even when producing a correct final result, and code-generation loops could terminate after 20 unsuccessful corrections.
- **Triage:** high as a documented-attempt and prompt-fragility campaign, lower priority for the findings index.

### Agentic X-ray scientist at a synchrotron beamline

- **Field:** experimental X-ray scattering and scientific instrumentation
- **Reported contribution:** an LLM agent trained in a virtual six-circle diffractometer environment was deployed at Stanford Synchrotron Radiation Lightsource. It found reference reflections, determined the orientation matrix, and adapted to unexpected conditions during real beamline operation.
- **Outcome:** successful execution of an expert experimental setup task, not a new scientific finding.
- **Date:** peer-reviewed article published 2026-07-01.
- **Prompt and trajectory availability:** unusually strong. Supplementary Note 1 contains the short and long guidance prompts, Supplementary Note 9 contains complete real-experiment conversation histories, and the code and data have separate Zenodo deposits.
- **Primary sources:** [Nature Machine Intelligence article](https://www.nature.com/articles/s42256-026-01261-5), [data](https://doi.org/10.5281/zenodo.20017861), [code](https://doi.org/10.5281/zenodo.20017991).
- **Caveats:** the long guidance prompt provides detailed workflow instructions, and the task is sample alignment rather than autonomous hypothesis formation or discovery.
- **Triage:** medium-low for the core archive, high as a prompt-engineering and physical-agent reference.

### Prompt-to-Paper bioinformatics campaign

- **Field:** computational bioinformatics and automated manuscript generation
- **Reported contribution:** five agent runs executed computational analyses, produced manuscripts, and underwent 60 automated improvement iterations. The system's own quality score rose by 17.96 points on average.
- **Outcome:** mixed. A human reviewer averaged the manuscripts at 7.0 out of 10 but flagged readability, absent figures, formatting problems, empty citation markers, and references described as fake in several outputs.
- **Date:** preprint 2026-07-05.
- **Prompt and trajectory availability:** the paper states that code, prompts, evaluation data, and generated manuscripts are public in the [project repository](https://github.com/Ramshakk/Prompt-to-Paper-Agentic-AI-System-for-Bioinformatics).
- **Primary source:** [arXiv paper](https://arxiv.org/abs/2607.05456).
- **Caveats:** the main quality gains are judged largely by the system's own automated scorer. The five case studies use hardcoded reference data and required algorithmic steps, and the paper reports presentation and citation defects despite claiming zero out-of-range citations.
- **Triage:** medium-low as scientific discovery, high as a transparent mixed-outcome paper-generation campaign.

## Follow-up queue

1. Inspect CellVoyager's case-study output directories and prompt modules to determine whether full original runs can be mirrored or linked.
2. Download the CRISPR-GPT supplements and enumerate the 20 public chats, experimental prompts, withheld components, and license.
3. Treat AI Scientist-v2 as a campaign with three child records: one accepted and two rejected.
4. Crawl the Agents4Science submission and audit indexes into a candidate manifest without assuming acceptance means validation.
5. Determine trajectory availability and licenses for PaperBench, ReplicationBench, ScienceAgentBench, CORE-Bench, and RE-Bench.
6. Seek independent expert commentary or later follow-up for STELLA, Eubiota, CosmoEvolve, Catalyst-Agent, and the materials-theory case.
7. Preserve separate dates for the run, first public disclosure, preprint, and peer-reviewed publication.
