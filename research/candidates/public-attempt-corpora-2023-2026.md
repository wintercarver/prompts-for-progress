# Public AI research-attempt corpora and benchmark archives

Research cutoff: 2026-07-17

Status: source and ingestion audit. Inclusion does not endorse the scientific importance, novelty, correctness, or provenance of a model output.

This scan asks a narrower question than the case-level candidate lists: which public sources preserve *multiple* AI attempts on research-like mathematics or science tasks, including prompts, intermediate work, failures, and validation data?

The search covered public repositories, benchmark releases, data archives, and lab-style artifact collections from 2023 through the research cutoff. It was deduplicated against the current Prompts for Progress records and candidate notes. Aletheia, AlphaProof Nexus, GPT-Erdős, Kosmos, Star Fleet Math, Virtual Lab, Robin, and OpenAI's First Proof campaigns are therefore not repeated here. PaperBench, ScienceAgentBench, RE-Bench, and Sakana's AI Scientist were already identified in `continued-cross-domain-scan.md`; this document only adds corpus-level access and rights findings where useful.

## Main conclusion

There is already enough public attempt-level material to prototype a corpus ingestion pipeline, but most sources are benchmarks rather than claimed discoveries. The best initial sources are:

1. **BixBench**, because it exposes 2,120 original trajectories and an evaluation table under a permissive license.
2. **Lossfunk AI Scientist Artifacts**, because it deliberately preserves three failed research attempts alongside one completed paper and publishes the workflow prompts.
3. **FrontierMath: Open Problems**, because it contains prompts and unsuccessful initial attempts on genuine unsolved mathematics problems.
4. **MLGym**, because it publishes 100 complete runs across 13 open-ended machine-learning research tasks.
5. **DiscoveryWorld**, because it publishes prompt-rich, step-level scientific exploration logs with detailed partial-progress scoring.
6. **MLR-Bench**, because it combines 201 open-ended research topics with public agent outputs, papers, reviews, and evidence of failed or fabricated experiment reporting.

These sources should not all become ordinary archive records. A useful distinction is:

- **Research attempt records:** a model or agent was actually directed at an open or research-level question.
- **Research benchmark records:** a model attempted a task derived from published research or a synthetic discovery environment.
- **Methodology corpora:** the source is most valuable for studying prompts, trajectories, failures, and evaluation rather than for recording a contribution to science.

## Priority summary

| Source | Public attempt volume | Raw prompt or trace access | Validation structure | Rights constraint | Suggested priority |
| --- | ---: | --- | --- | --- | --- |
| [BixBench](https://github.com/Future-House/BixBench) | 2,120 original trajectories | Final answers and generated notebooks; system prompts and run configurations | MCQ exact match, open-ended model grading, five-replica analysis | Apache-2.0 repository and dataset | Very high |
| [Lossfunk AI Scientist Artifacts](https://github.com/Lossfunk/ai-scientist-artefacts-v1) | 4 end-to-end research attempts | Complete workflow prompts and per-attempt artifacts | One completed paper; three named failure stages | No license file found at cutoff; link only unless permission is obtained | Very high |
| [FrontierMath: Open Problems](https://epoch.ai/frontiermath/open-problems/about) | 14 open problems with initial attempt material | Precise problem prompts and model attempts on problem pages | Programmatic verifiers; significance and difficulty ratings | Site text CC BY; verifier access is paid and conditional | Very high |
| [MLGym](https://github.com/facebookresearch/MLGym/tree/main/trajectories/mlgym_bench_v0) | 100 public run directories | Full dialogue, terminal work, configs, and task prompts | Task-specific objective scores and result tables | Mostly CC BY-NC 4.0; some components use other licenses | High |
| [DiscoveryWorld](https://github.com/allenai/discoveryworld/tree/main/data) | Four agent families across a 120-task benchmark; exact archive count needs enumeration | Full prompts, thoughts, actions, observations, memories, and world histories | Completion, procedural progress, discovery knowledge, detailed scorecards | Apache-2.0 | High |
| [MLR-Bench](https://github.com/chchenhui/mlrbench) | Public outputs from five end-to-end agent configurations; exact attempt count needs enumeration | Prompts in code plus ideas, proposals, experiments, write-ups, papers, and reviews | Stage and overall review rubrics; execution-log audits | MIT | High after file-level audit |
| [The AI Scientist v1](https://github.com/SakanaAI/AI-Scientist) | Approx. 50 ideas for each base-model and template combination; exact total unstated | Linked all-runs Drive archive, prompts, code, papers, and reviews | Run completion, generated papers, automated reviews | Custom Responsible AI-derived license; Drive artifact rights need checking | Medium-high |
| [Open Proof Corpus](https://proofcorpus.ai/) | 5,062 proofs for 1,010 problems | Problem, proof, model, selected thinking, costs, and generation prompts in code/config | Human correct/incorrect labels, feedback, uncertainty, sentence annotations | Dataset CC BY-NC-SA 4.0; code Apache-2.0 | Medium, scope edge |
| [AstaBench](https://github.com/allenai/asta-bench) | 2,400+ examples across 11 benchmarks; public log stores vary by suite | Inspect `.eval` archives can contain prompts, messages, tools, scores, and costs | Suite-specific scoring plus standardized run logs | Apache-2.0 framework; underlying tasks retain their own terms | Medium as source map |
| [OpenDiscoveryTrace](https://huggingface.co/datasets/aayambansall/OpenDiscoveryTrace) | Dataset card says 432 trajectories | Structured prompts, thoughts, tool I/O, errors, revisions, confidence, outcomes | Self-described success and verification fields | CC BY 4.0 | Quarantine pending provenance audit |

## Detailed source notes

### BixBench

- **Scope:** 205 open-ended and multiple-choice bioinformatics questions derived from 60 published Jupyter notebooks and associated data capsules. Tasks require dataset exploration, code execution, biological interpretation, hypothesis generation, and validation.
- **Public attempts:** the maintainers provide downloads for [2,120 raw trajectories](https://storage.googleapis.com/bixbench-results/raw_trajectory_data.csv) and the corresponding [evaluation dataframe](https://storage.googleapis.com/bixbench-results/eval_df.csv). The repository also contains newer v1.5 result directories.
- **Prompt and trace access:** each agentic trajectory stores the final answer and generated Jupyter notebook as JSON. YAML run configurations expose model settings, system prompts, evaluation mode, rollout settings, and file paths. The paper reproduction configuration runs GPT-4o and Claude configurations with five replicas.
- **Outcome and validation:** multiple-choice questions can be scored directly and analyzed by majority vote. Open-ended responses use model graders. The evaluation table enables analysis by model, question, replica, image availability, and refusal setting.
- **Primary sources:** [repository](https://github.com/Future-House/BixBench), [dataset](https://huggingface.co/datasets/futurehouse/BixBench), [paper](https://arxiv.org/abs/2503.00096).
- **Rights:** the repository and Hugging Face dataset state Apache-2.0. Original notebook and capsule contents may still carry source-specific terms, so a mirror should retain source attribution and audit bundled third-party files.
- **Ingestion recommendation:** very high. Begin with a manifest of the 2,120 rows, then sample 10 to 20 trajectories to map prompts, notebooks, scores, and failures onto the archive schema. Store the corpus as one campaign or dataset record with optional child attempts, not 2,120 public-facing cards.

### Lossfunk AI Scientist Artifacts v1

- **Scope:** four end-to-end machine-learning research ideas passed through a six-agent workflow from ideation to experimentation and paper creation.
- **Public attempts:** exactly four. `MARL` failed during implementation; `SALVO-WM` and `SDTS-WM` failed during evaluation; `SemEnt-ALGN` produced a completed paper accepted at Agents4Science 2025.
- **Prompt and trace access:** the repository publishes complete workflow prompts for idea generation, hypothesis generation, experiment planning, and paper creation. Each idea directory contains research artifacts and a failure analysis or completed result.
- **Outcome and validation:** failure stages are explicitly named rather than inferred from missing papers. The completed paper has an external conference record, although acceptance is not proof of correctness or importance.
- **Primary sources:** [artifact repository](https://github.com/Lossfunk/ai-scientist-artefacts-v1), [paper](https://arxiv.org/abs/2601.03315), [project site](https://whyaiscientistsfail.lossfunk.com/).
- **Rights:** no `LICENSE` file was visible in the repository root at the research cutoff. The material should be linked and summarized, with only short quoted excerpts, unless the author grants mirroring permission.
- **Ingestion recommendation:** very high. This is the clearest small public example of the archive's intended denominator: a single workflow with success and named failure modes preserved together.

### FrontierMath: Open Problems

- **Scope:** a pilot set of 14 genuine unsolved mathematics problems contributed by professional mathematicians. The problems cover several fields and include contributor assessments of importance, prior human effort, and expected time to solve.
- **Public attempts:** each problem is released with a precise prompt and initial AI attempt material. Epoch reports testing GPT-5.2 Pro and Gemini 3 Deep Think in their web applications. The exact number of public model runs should be enumerated from the individual problem pages rather than inferred as 14 times two.
- **Prompt and trace access:** problem prompts and displayed model outputs are public. The initial attempts include failures and cases where a model recognizes the problem as open or gives up.
- **Outcome and validation:** proposed answers are intended to be checked by programmatic verifiers. Contributors also preregister mathematical significance and caveats. At release, the models generally failed on the open versions while sometimes solving warm-ups.
- **Primary source:** [benchmark description and problem index](https://epoch.ai/frontiermath/open-problems/about).
- **Rights:** Epoch's page text is available under CC BY. Verifier access is sold separately. Users with verifier access must notify Epoch and the problem contributor of success, and the access terms grant joint publication rights. Do not mirror verifiers or imply that the public prompts alone reproduce the full evaluation.
- **Ingestion recommendation:** very high. Create one campaign record plus child attempt records for each publicly displayed run. It is unusually close to the archive's core scope and preserves unsuccessful attempts on research mathematics.

### MLGym

- **Scope:** 13 open-ended AI research tasks covering computer vision, NLP, reinforcement learning, game theory, and related machine-learning areas. Tasks require hypotheses, implementation, experiments, analysis, and iteration.
- **Public attempts:** the `mlgym_bench_v0` directory contained exactly 100 run directories at the cutoff. It includes four runs for each of 13 tasks using Claude 3.5 Sonnet, plus four runs for 12 tasks using Claude 3.7 Sonnet.
- **Prompt and trace access:** each run directory contains the task configuration and agent trajectory. The project includes a trajectory viewer to inspect dialogue and terminal activity.
- **Outcome and validation:** task-specific objective metrics and benchmark result tables make failed, partial, and successful runs comparable. Four replicas expose within-model variance.
- **Primary sources:** [repository](https://github.com/facebookresearch/MLGym), [trajectory directory](https://github.com/facebookresearch/MLGym/tree/main/trajectories/mlgym_bench_v0), [paper](https://arxiv.org/abs/2502.14499).
- **Rights:** most of the project is CC BY-NC 4.0. SWE-Agent and Modded-NanoGPT components are MIT; Gymnax components are Apache-2.0. Any mirror must preserve per-component notices and remain noncommercial where CC BY-NC applies.
- **Ingestion recommendation:** high. Ingest the run index and a small representative set of full traces. Treat it as a methodology corpus unless an individual run can be tied to a defensible research result.

### DiscoveryWorld

- **Scope:** 120 tasks across eight scientific topics, three difficulty levels, and five parametric seeds in a simulated scientific-discovery environment. Topics include proteomics, isotope dating, and rocket science.
- **Public attempts:** the release separates four agent families: ReAct, Plan-and-Execute, Hypothesizer, and a random baseline. A complete four-agent by 120-task matrix would be 480 runs, but the archive should be enumerated because failed, missing, or repeated logs can make the actual count differ.
- **Prompt and trace access:** ReAct and Plan-and-Execute logs preserve actions and thoughts at each time step. Hypothesizer's `output_allhistory` files preserve the full next-action prompt, reflection prompt, observation, scientific working memory, planned action, action success, and oracle scorecard. Full serialized world histories and videos are also available.
- **Outcome and validation:** logs include task completion, normalized procedural-progress scores, subgoal scorecards, and discovery-knowledge questions. The release also documents scorer errors and errata, which should be preserved as evaluation-version metadata.
- **Primary sources:** [repository](https://github.com/allenai/discoveryworld), [data release and format](https://github.com/allenai/discoveryworld/tree/main/data), [paper](https://arxiv.org/abs/2406.06769).
- **Rights:** Apache-2.0.
- **Ingestion recommendation:** high for prompt and failure research, medium for public archive cards because the worlds are synthetic. It offers one of the richest examples of how to preserve changing hypotheses and partial progress.

### MLR-Bench

- **Scope:** 201 open-ended machine-learning research topics derived from ICLR, ICML, and NeurIPS workshop calls: 73 from 2023, 91 from 2024, and 37 from 2025. The nine categories include AI for Science, ML theory, trustworthy AI, multimodality, vision, reinforcement learning, and systems.
- **Public attempts:** the repository publishes end-to-end output sets for Claude, Codex, Gemini CLI, Gemini, and o4-mini, plus separate idea/proposal and experiment/write-up artifacts. It also publishes ten AI Scientist v2 paper directories for o4-mini. A recursive inventory is still needed before claiming a total attempt count.
- **Prompt and trace access:** prompts and agent stages are inspectable in code. Public artifacts include ideas, proposals, experiments, write-ups, generated papers, automated reviews, and human-evaluation material. Whether every end-to-end directory contains an uninterrupted raw model transcript should be checked at file level.
- **Outcome and validation:** MLR-Judge applies stepwise and overall review rubrics. The paper's execution-log audit reports cases where agents did not run experiments but presented simulated or fabricated experimental results. Those should be represented as validation failures, not merely low scores.
- **Primary sources:** [repository](https://github.com/chchenhui/mlrbench), [project site](https://chchenhui.github.io/mlrbench/), [paper](https://arxiv.org/abs/2505.19955).
- **Rights:** MIT.
- **Ingestion recommendation:** high after an exact artifact inventory. It is particularly useful for modeling outcome states such as `execution_failed`, `evaluation_failed`, `unsupported_claim`, and `paper_completed` separately.

### The AI Scientist v1 all-runs archive

- **Scope:** autonomous machine-learning research using three original templates: NanoGPT, 2D diffusion, and grokking. Community templates now extend to infectious-disease modeling, quantum chemistry, and earthquake prediction, but these were not part of the original evaluation.
- **Public attempts:** the repository states that all paper runs and data are in a linked Google Drive folder and that each base model was run on each template for approximately 50 ideas. It does not state an exact total in the README.
- **Prompt and trace access:** the code exposes prompts for idea generation, novelty checking, experimentation, plotting, writing, and reviewing. The Drive archive contains run outputs, generated papers, experiment material, and reviews. The maintainers explicitly note that completion rates vary by model and template.
- **Outcome and validation:** generated paper completion and automated review are available, but neither establishes a valid scientific contribution. Failed or incomplete runs should be inventoried directly rather than reconstructed only from the example-paper list.
- **Primary sources:** [repository and all-runs link](https://github.com/SakanaAI/AI-Scientist), [paper](https://arxiv.org/abs/2408.06292).
- **Rights:** the code uses a custom AI Scientist Source Code License derived from a Responsible AI License and requires prominent disclosure in resulting manuscripts. The Drive artifacts need a separate rights check before mirroring.
- **Ingestion recommendation:** medium-high. First build a read-only manifest of Drive contents, models, templates, ideas, completion status, paper files, and reviews. Do not assume the source-code license automatically governs every generated artifact.

### Open Proof Corpus

- **Scope:** 1,010 high-school and undergraduate competition problems from 20 national and international contests. This is advanced proof generation, but it is not research mathematics or an open-problem corpus.
- **Public attempts:** 5,062 proofs from six models; 43% were judged correct.
- **Prompt and trace access:** the dataset includes problem statement, generated solution, solver model, human score and feedback, optional sentence-level annotations, costs, token counts, timestamps, and thinking fields for some open models. Solver and judging prompts are configured in the code repository.
- **Outcome and validation:** one or two human judges label each proof and can provide uncertainty, short feedback, and sentence-level issue annotations. The corpus separates final-answer correctness from proof validity and includes best-of-n experiments.
- **Primary sources:** [project site](https://proofcorpus.ai/), [dataset](https://huggingface.co/datasets/INSAIT-Institute/OPC), [code](https://github.com/insait-institute/open-proof-corpus), [paper](https://arxiv.org/abs/2506.21621).
- **Rights:** the dataset is CC BY-NC-SA 4.0; the code repository is Apache-2.0.
- **Ingestion recommendation:** medium as a schema and validation reference, low for ordinary records. It is useful for testing prompt storage, human grading, error annotations, and repeated-attempt statistics without confusing competition proofs with breakthroughs.

### AstaBench

- **Scope:** more than 2,400 examples across 11 scientific-research benchmarks, including literature search, code execution, data analysis, and end-to-end discovery.
- **Public attempts:** the framework contains `dev_dvc_logs` and `test_dvc_logs`, and supports leaderboard submissions as Inspect `.eval` archives. The number of bundled baseline runs depends on the benchmark and DVC version, so it should not be equated with the 2,400 task examples.
- **Prompt and trace access:** Inspect logs can preserve task prompts, messages, tool calls, model output, token use, cost, and scores. The framework provides common viewing and scoring tools.
- **Outcome and validation:** each underlying benchmark retains its native scoring while AstaBench normalizes execution and cost reporting.
- **Primary source:** [repository](https://github.com/allenai/asta-bench).
- **Rights:** the AstaBench framework is Apache-2.0. Included benchmarks, datasets, model outputs, and linked DVC objects can have different licenses or access restrictions.
- **Ingestion recommendation:** medium as a source map and normalization layer. Use it to discover and parse other corpora, but audit rights and scientific scope at the underlying benchmark level before copying data.

### OpenDiscoveryTrace

- **Scope:** self-described scientific-agent traces across drug discovery, materials science, genomics, and literature tasks.
- **Public attempts:** the Hugging Face card says 432 trajectories: 372 from three frontier models, 30 from Qwen2.5-1.5B, and 30 live-retrieval variants. The associated workshop paper and repository versions have reported other totals, so the exact release version must be pinned.
- **Prompt and trace access:** JSON traces expose prompt, ground truth, thought, tool input and output, observation, error, revision trigger, confidence, raw response, final claim, and outcome fields.
- **Outcome and validation:** the schema contains success, confidence, verification method, failure type, and recovery fields. It is not yet clear how many outcomes were independently validated rather than assigned by the generating harness.
- **Primary sources:** [dataset](https://huggingface.co/datasets/aayambansall/OpenDiscoveryTrace), [repository](https://github.com/aayambansal/OpenDiscoveryTrace), [workshop paper](https://openreview.net/forum?id=EHT3wVhCUZ).
- **Rights:** CC BY 4.0 for the dataset; MIT is stated for code.
- **Provenance concerns:** the paper is an anonymous workshop submission, the dataset viewer was broken at the cutoff because JSON files did not share one schema, and release totals have changed or conflicted across surfaces. Model and task provenance should be independently checked before treating these as real API-generated runs.
- **Ingestion recommendation:** quarantine. Its schema is worth studying, but do not import records until file counts, hashes, API provenance, ground-truth construction, and verification methods are audited.

## Public task sets that do not yet expose a clear original run corpus

These are good watchlist sources or reproducible generators of future attempts. They should not be counted as public attempt collections until original model logs are located.

### ResearchGym

- **Scope:** five test tasks from 2025 oral and spotlight papers across vision, NLP, reinforcement learning, materials tokenization, and time-series explanation. The paper reports 15 evaluations and only one baseline improvement.
- **Prompt and trace support:** every new run can preserve `transcript.json`, agent logs, command output, cost summaries, run metadata, status, and plan files. An inspection agent checks for cheating and violations.
- **Gap:** the repository publishes the harness and tasks, but no original `results` or `runs` corpus was present at the cutoff.
- **Sources:** [repository](https://github.com/Anikethh/ResearchGym), [paper](https://arxiv.org/abs/2602.15112).
- **Priority:** medium watchlist. Ask the authors whether the 15 evaluated run directories can be released.

### BAISBench

- **Scope:** cell processing and cell-type annotation on 15 expert-labeled single-cell datasets, plus 193 multiple-choice discovery questions derived from 41 recent single-cell studies.
- **Prompt and trace support:** notebooks contain reproduction instructions, and the paper provides an example prompt.
- **Gap:** the task data and evaluation code are public, but a corpus of the original models' complete attempt transcripts was not found.
- **Sources:** [repository](https://github.com/EperLuo/BaisBench), [dataset](https://huggingface.co/datasets/EperLuo/BaisBench), [paper](https://arxiv.org/abs/2505.08341).
- **Rights:** MIT repository. Underlying biological datasets retain their own terms.
- **Priority:** medium-low until original logs are released.

### DiscoverPhysics

- **Scope:** 22 simulated worlds with deliberately nonstandard laws of motion. Agents design several experiments, observe noisy trajectories, and submit a natural-language explanation plus executable Python law. Eleven worlds are public and eleven private.
- **Attempt scale:** the public leaderboard reports 13 models, five seeds, and pass@k statistics. This implies a substantial run collection, but it does not establish that the full transcripts are publicly downloadable.
- **Prompt and validation:** the universal prompt is described in the paper. Evaluation combines held-out trajectory error with an expert-rubric explanation score. The public benchmark repository is gated on Hugging Face for validation reasons.
- **Sources:** [project and leaderboard](https://sampsonml.github.io/DiscoverPhysicsLeaderboard/), [paper](https://arxiv.org/abs/2605.26087), [gated benchmark](https://huggingface.co/mattWiemann/DiscoverPhysics).
- **Priority:** medium watchlist. Seek release of per-seed experimental histories and outputs before corpus ingestion.

### AIRS-Bench

- **Scope:** 20 end-to-end machine-learning research tasks from 17 papers and 16 datasets across NLP, code, mathematics, biochemical modeling, and time-series forecasting.
- **Attempt scale:** 14 agent configurations are evaluated with multiple seeds. Aggregate scores and valid-submission rates are public.
- **Prompt and validation:** each task supplies a project description, data, objective metric, baseline, and human state-of-the-art score. Linear and parallel agent harnesses support reproducible new attempts.
- **Gap:** a durable, public directory of the reported models' raw dialogue and terminal trajectories was not found in this pass.
- **Sources:** [repository](https://github.com/facebookresearch/airs-bench), [paper](https://arxiv.org/abs/2602.06855).
- **Rights:** CC BY-NC 4.0.
- **Priority:** medium-low until raw reported runs are located.

### DiscoveryBench

- **Scope:** 264 real data-driven discovery tasks across six domains plus 903 synthetic tasks. Each task combines a research goal with datasets derived from published work.
- **Prompt and trace support:** coder and ReAct agents can write log files; the repository includes model configurations and faceted evaluation for hypotheses and workflows.
- **Gap:** the benchmark and harness are public, but a complete original baseline trajectory archive was not identified.
- **Sources:** [repository](https://github.com/allenai/discoverybench), [dataset](https://huggingface.co/datasets/allenai/discoverybench), [paper](https://arxiv.org/abs/2407.01725).
- **Priority:** medium-low unless baseline logs are released. It remains a useful model for evaluating partial correctness in open-ended discovery.

### PaperBench and ScienceAgentBench

Both are already documented in `continued-cross-domain-scan.md`. This deeper audit found:

- **PaperBench:** the maintained harness defines complete per-run artifacts, including optional `agent.log`, `grade.json`, metadata, run logs, status, timestamped submission logs and tarballs, executed-grader output, and rollout snapshots. The repository does not clearly expose the full original baseline run corpus, so the reported model-by-paper evaluation count should not be presented as a public trajectory count. See [PaperBench repository](https://github.com/openai/frontier-evals/tree/main/project/paperbench).
- **ScienceAgentBench:** the harness writes model trajectories and costs to JSONL, selects the best of three runs, and writes evaluation logs. The public release does not clearly bundle the paper's original run logs. The authors explicitly prohibit redistribution of the unzipped full benchmark artifacts. Most tasks are CC BY 4.0, two source families retain original terms, and code is MIT. See [ScienceAgentBench repository](https://github.com/OSU-NLP-Group/ScienceAgentBench).

## Proposed ingestion order

1. **Inventory BixBench.** Save a local manifest with trajectory identifiers, questions, models, replica numbers, outcomes, and source URLs. Sample enough rows to determine whether the CSV includes full notebooks or pointers to JSON.
2. **Create four Lossfunk records.** One campaign plus four child attempts would immediately demonstrate that the archive treats failure as first-class evidence. Request mirroring permission for prompts and artifacts.
3. **Enumerate FrontierMath individual pages.** Capture problem ID, field, importance tier, contributor, prompt, model, displayed attempt, attempt date if available, and verifier-access caveat.
4. **Parse MLGym's 100 directories.** Build a compact run manifest and identify a few representative failure, partial-progress, and high-score traces.
5. **Download and checksum DiscoveryWorld's agent archives.** Enumerate actual runs and create a field map for prompt, memory, action, observation, subgoal score, and final outcome.
6. **Recursively inventory MLR-Bench.** Count artifacts by agent, task, stage, paper, and review. Locate raw execution logs and mark cases flagged for simulated or unsupported results.
7. **Audit The AI Scientist Drive archive.** Record exact file counts, templates, models, ideas, completion status, and artifact-level rights before mirroring anything.
8. **Keep OPC as a validation test fixture.** It is an excellent way to test repeated attempts and human error annotations but should remain outside the main research-breakthrough timeline.
9. **Quarantine OpenDiscoveryTrace.** Validate release consistency and provenance before any public import.

## Schema lessons from these corpora

The scan supports several fields that are easy to lose when a record is reduced to “prompt plus outcome”:

- `corpus_or_campaign_id`
- `task_or_problem_id`
- `attempt_id` and `replica_index`
- `prompt_role` such as system, user, reflection, judge, or reviewer
- `prompt_source` and `prompt_version`
- `trace_access` such as full, partial, final-only, unavailable, or gated
- `artifact_types` such as notebook, code, data, paper, review, scorecard, or world log
- `attempt_stage_reached`
- `termination_reason`
- `outcome_claimed`
- `outcome_validated`
- `validation_method` and `validator`
- `partial_progress_score`
- `failure_stage` and `failure_type`
- `unsupported_or_fabricated_result_flag`
- `evaluation_version` and known scorer errata
- `license_code`, `license_data`, `license_output`, and `mirroring_permission`
- separate `run_date`, `first_public_date`, and `publication_date`

These fields can remain optional during the early archive phase. The main lesson is to store source artifacts and distinctions faithfully enough that a later schema migration can recover them.

## Rights and integrity cautions

- A permissive code license does not automatically license model outputs, embedded papers, source datasets, or third-party notebooks.
- A benchmark task count is not an attempt count. Count actual trace or run artifacts separately.
- A model-by-task matrix is only an expected count until the archive is enumerated for missing, repeated, aborted, or corrupted runs.
- Automated graders should be stored as evidence, not treated as independent scientific validation.
- Synthetic discovery worlds are valuable prompt-engineering evidence, but they should be visually separated from attempts on real open problems.
- Generated papers and workshop acceptance should not be converted into “successful contribution” without claim-level review.
- Broken viewers, inconsistent release totals, absent licenses, and gated archives should remain visible as provenance warnings rather than being silently normalized away.
