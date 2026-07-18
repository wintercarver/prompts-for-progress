# Cross-Domain Prompting Styles for Research Progress

**Repository study · Prompts for Progress · 18 July 2026**

## Executive summary

The archive does not support a claim that one prompt style *causes* research success. It does support a more useful first conclusion: different domains have developed distinct ways to turn an open-ended request into checkable research state, and several mechanisms appear underused among other codeable artifacts in this archive.

A compelling cross-case design synthesis is this closed verification loop; its components occur in different cases, but this is neither a frequency estimate nor a replicated protocol:

> precise specification → candidate artifact → external feedback → localized diagnosis → minimal repair → re-verification

That pattern appears in different forms: chemistry translates prose into executable XDL and repairs line-mapped errors; formal mathematics compiles Lean; combinatorial program search scores executable constructions; hidden-system physics tests models against experiments; and wet-lab biology feeds measured results into the next hypothesis round. The shared mechanism is not role-play or prompt length. It is persistent state that something outside the generator can check.

The most valuable cross-domain transfers are:

1. **Chemistry to mathematics and software:** perform an ambiguity and executability audit before attempting a solution; preserve unresolved assumptions instead of guessing them away.
2. **Experimental science to mathematics:** use positive controls, negative controls, and one cheap experiment designed to distinguish or falsify a candidate mechanism before investing in a full proof route.
3. **Physics to general research:** maintain competing hypotheses, deliberately test extreme regimes, and validate the final model on withheld or adversarial conditions.
4. **Mathematics to scientific discovery:** state exact quantifiers, success conditions, and non-solutions so that attractive partial results cannot silently replace the requested endpoint.
5. **Program search to all verifiable domains:** retain only evaluator-checked executable candidates, preserve behaviorally different search islands, and optimize artifacts rather than persuasive prose.
6. **Autonomous ML research to other domains:** use claim cards with a baseline, metric, threshold, budget, artifact path, and evidence provenance; require an evidence gate before drafting a conclusion.

The archive also exposes methods that are absent from many cases or inconsistently operationalized: held-out validation, blinded independent verification, source-locked theorem or evidence cards, explicit uncertainty and abstention, symmetric proof/disproof search, negative-result memory, verification-preserving repair, calibrated controls, and prompt ablations.

## 1. Research questions

This study addresses two questions:

1. Which prompting and orchestration styles are distinctive among the domains represented in the archive, and which have plausible transfer value elsewhere?
2. Which generally promising research methods are absent, underused, or incompletely enforced in prior attempts?

“Distinctive” means visibly emphasized in this corpus, not globally unique to the domain. “Promising” means there is a concrete mechanism by which the method could improve specification, search, or verification. It does not mean the corpus establishes causal effectiveness.

## 2. Corpus and method

### 2.1 Corpus census

This internal analysis covers 23 local prompt manifests linked to 23 case, campaign, or attempt records, collectively covering 23 unique top-level problem files. It is broader than the generated public corpus. Of the prompt manifests:

- 21 contain prompt or orchestration content;
- 2 are availability records with no prompt content (`aletheia-erdos-sweep` and `nesterov-point-convergence`);
- 12 appear in the public index, of which 10 contribute content; their manifest completeness is 2 `exact`, 5 `full`, 1 `partial`, 2 `representative`, and 2 `unavailable`;
- 11 additional manifests are under `private-rights-review` and are used here only for internal analysis; public release of findings derived from those bundles requires rights clearance;
- across the full local collection, manifest completeness is 7 `full`, 7 `exact`, 5 `representative`, 2 `partial`, and 2 `unavailable`.

These completeness counts were derived from manifest headers. `prompts/README.md` defines several labels but omits the `full` label used by seven manifests. Manifest `completeness` and record `promptAvailability` are different fields; the companion matrix preserves both rather than treating apparent differences as contradictions.

The generated public `prompts/corpus.jsonl` contains 131 artifact rows, but those rows are radically imbalanced: AILA contributes 106 and ACRA contributes 9. Those files are implementation components, benchmark tasks, or logs—not 131 independent research prompts. All comparisons in this report therefore use the **prompt manifest/case** and, when needed, the **workflow stage** as the analytic unit.

Sources: `prompts/README.md`; `prompts/corpus-index.json`; `prompts/corpus.jsonl`; `records/SCHEMA.md`; `problems/SCHEMA.md`.

### 2.2 Coding procedure

Each content-bearing case was read for directly observable features at these stages:

- formulation;
- generation;
- selection;
- execution;
- evaluation;
- repair;
- synthesis;
- finalization.

The coding vocabulary included success contracts, structured outputs, tool or verifier loops, multi-agent role separation, controls and falsification, ambiguity handling, state persistence, prior-art checks, safety boundaries, and fallback contracts. Evidence was also classified by feedback source: self-review, same-model critic, another model, human review, deterministic evaluator/compiler, simulated experiment, or physical experiment.

Three complementary agent reviews were used: domain taxonomy, feasibility screening, and adversarial methods review. These were role-separated same-system reviews, not independent human coders; no inter-rater reliability statistic was computed. Candidate claims were retained only when a repository source supported them. Missing prompt text was coded `NA`, never as evidence that a method was absent. The companion `case-coding-matrix.csv` is a case-level qualitative synthesis, not a stage-level audit trail.

### 2.3 Evidence ladder

Claims in this report are limited to the following ladder:

1. **Observed:** the method appears directly in prompt text or orchestration.
2. **Mechanistically transferable:** the method creates a checkable or falsifiable research operation that could be applied elsewhere.
3. **Outcome-associated but confounded:** the method appears in a case with a documented outcome, but task, model, compute, tools, and human contribution differ.
4. **Comparatively supported:** a matched comparison or ablation isolates the method.
5. **Replicated causal evidence:** controlled studies reproduce the effect.

This corpus supports many level-1 observations, plausible level-2 transfers, and a few level-3 associations. It does not support levels 4 or 5 for general prompting methods.

## 3. Domain profiles

### 3.1 Pure mathematics: the prompt as a theorem contract

The mathematics cases divide into several distinctive styles. Elaborate research-management prompts—Cycle Double Cover, Bartnik, and zeroth-order—specify definitions, quantifiers, approach portfolios, route registries, dependency graphs, theorem-strength blockers, and adversarial checklists. Compact truth-neutral contracts—unit distance and Street's differential-equation question—state the exact affirmative and negative endpoints without a large orchestration layer. First Proof uses a short staged generate–solve–gap-audit–repair cycle; Erdős 848 and the Nesterov account foreground human correction and restructuring; AlphaProof is the compiler-gated formal-search case discussed next.

This is a genuine strength. It prevents special cases, equivalent conjectures, finite checks, or one-sided bounds from being reported as full resolutions. The zeroth-order prompt is especially careful about oracle-model alignment, quantifier order, exact-real information, fixed-function consistency, query accounting, and imported-theorem hypotheses.

The weakness is that several long mathematics prompts combine excellent acceptance criteria with exhortative persistence: assume a proof exists, do not return without it, and keep searching for a fixed number of hours. Such instructions can anchor the truth value, suppress useful audited partial artifacts, and reward continued activity without requiring new information. The unsuccessful Bartnik attempt and successful zeroth-order case use closely related orchestration styles; their divergence is a warning that problem tractability, model behavior, human expertise, and verification—not prompt style alone—drive outcomes.

Evidence: `prompts/cycle-double-cover.md`; `prompts/bartnik-admissible-extension.md`; `prompts/unit-distance-conjecture.md`; `prompts/sources/zeroth-order-convex-lower-bound/initial-prompt.txt`; `records/bartnik-admissible-extension-attempt.md`; `records/zeroth-order-convex-lower-bound.md`.

### 3.2 Formal mathematics: validator-gated persistence

AlphaProof Nexus makes the compiler the acceptance oracle. The prompt requires the agent to iterate on Lean feedback, leave the file compiling even if unfinished, record discoveries in comments because the file is the persistent handoff state, and edit only marked regions. This is stronger than asking a critic whether a proof “looks correct”: the prompt requires every handoff to contain a valid artifact plus an explicit remainder. The compiler loop is preserved; rater-agent feedback is described, but full rater prompts and run transcripts are not.

The transfer is broad. In any domain with a parser, type checker, simulator, test suite, constraint solver, or certificate checker, the prompt should require a valid checkpoint at every handoff. Narrative status is secondary to the artifact.

Evidence: `prompts/alphaproof-nexus.md:9-45`; `records/alphaproof-nexus.md`.

### 3.3 Executable combinatorics: evolve the checkable component

FunSearch does not center a stable natural-language prompt. It supplies an executable scaffold, asks the model to complete a small priority function, scores the resulting cap set, clusters programs by behavioral signature, maintains multiple islands, samples high-performing exemplars, and resets weak islands. The research state is a population of tested programs rather than a collection of essays.

Two ideas transfer especially well:

- **Artifact fitness:** rank branches by verified score or proof obligations closed, not by verbal confidence.
- **Behavioral diversity:** preserve candidates that behave differently even when their current score is similar; many agents with differently worded versions of one mechanism are not a diverse portfolio.

The limiting condition is evaluator fidelity. A precise evaluator can still optimize a proxy that misses the real scientific objective. Conceptual interpretation, ablation, robustness, and novelty remain separate checks.

Evidence: `prompts/sources/funsearch-cap-sets/cap_set.ipynb`; `prompts/sources/funsearch-cap-sets/programs_database.py:49-56,95-167,194-271`; `prompts/sources/funsearch-cap-sets/sampler.py`; `records/funsearch-cap-sets.md`.

### 3.4 Synthetic chemistry: ambiguity before execution

ACRA decomposes literature procedures into chemical inventories, hazards, resolvable ambiguities, unresolved questions, explicit steps, and XDL. It distinguishes steps missing from the translation from steps the language cannot execute. Its critique loop maps defects to source lines and requests minimal correction rather than wholesale regeneration.

The core transferable pattern is:

1. identify ambiguity;
2. classify it as resolvable, conditional, missing, or outside capability;
3. translate the task into typed obligations;
4. validate against the available operation set;
5. map failures back to exact source claims;
6. repair only affected parts.

Applied to mathematics, this becomes an assumption and theorem-applicability ledger. Applied to software, it becomes a requirements-to-tests matrix. Applied to policy or analysis, it becomes a claim-to-evidence map.

The hazard must transfer too: ACRA sometimes encourages best guesses and replaces vague language with apparently exact quantities. Outside a physical-procedure workflow, that can turn uncertainty into false precision. A sound adaptation must label provisional assumptions and preserve unresolved items.

Evidence: `prompts/sources/acra-synthesis-reproduction/procedure_prompt.py`; `prompts/sources/acra-synthesis-reproduction/xdl_prompt.py`; `prompts/sources/acra-synthesis-reproduction/critique_prompt.py`; `records/acra-synthesis-reproduction.md`.

### 3.5 Materials discovery: anomaly-first, decisive experiments

The A-Lab GPSS prompts search for samples that behave abnormally relative to related compositions, formulate a mechanistic hypothesis, and ask for the smallest orthogonal experiment with an explicit decision rule. After the physical result arrives, the reflection template asks the agent to record whether the hypothesis was supported. Separate exploration prompts deliberately target patterns with some evidence but substantial uncertainty rather than repeating well-established rules.

This is more disciplined than “explore promising directions.” The transferable unit is a **decisive test card**:

- the anomaly or claim;
- competing explanations;
- the cheapest test that changes the decision;
- predicted outcomes under each explanation;
- a result-dependent next action;
- a durable supported/unsupported reflection.

For proof search, the test may be a finite counterexample search, symbolic calculation, limiting case, or attempt to prove a sharply chosen lemma. The calculation is not the proof; it is an information-gain operation that kills weak routes early.

Evidence: `prompts/sources/alab-gpss-spinel-campaign/agent_prompts.py:479-515,541-611,631-653,716-775`; `records/alab-gpss-spinel-campaign.md`.

### 3.6 Biomedical discovery: controls, evidence funnels, and measured feedback

The breast-cancer drug-pair sequence uses positive controls, negative controls, mechanistic synergy requirements, and quantitative experimental feedback before requesting the next round. Robin uses a staged funnel from disease biology to assay selection, literature-backed evaluation, candidate generation, pairwise ranking, and experimental analysis. Virtual Lab uses specialist roles, explicit dissent, a PI decision, durable meeting summaries, and a critic–revision loop.

Three transfer mechanisms stand out:

- **Controls before novelty:** calibrate a proof critic, grader, or research agent on a known-positive case and a nearby false case before trusting it on an open claim.
- **Pairwise evidence ranking:** compare two routes on statement fidelity, direct evidence, feasibility, and risk; novelty comes after validity.
- **Feedback with provenance:** carry numerical or experimental results into the next round instead of replacing them with a vague summary.

The same-model persona caveat is important. Multiple roles are not independent verification when they share a model, context, and favored answer. Fresh context, blinding, mechanism diversity, or an external validator is required for genuine independence.

Evidence: `prompts/sources/gpt4-breast-cancer-drug-pairs/prompts.md`; `prompts/sources/futurehouse-robin-amd/prompts.py`; `prompts/sources/virtual-lab-nanobodies/prompts.py`; `prompts/sources/virtual-lab-nanobodies/nanobody_constants.py`.

### 3.7 Hidden-system physics: hypothesis survival under active experiment

SciExplorer requires an initial portfolio of hypotheses, at least five experiments spanning ordinary and extreme initial conditions, a survivor/new-hypothesis update after tool results, and forward simulation of the proposed model before submission. This operationalizes scientific reasoning better than asking for a single best explanation.

The missing piece is held-out validation: the visible prompt compares the final model on the same conditions used for exploration. A stronger transfer reserves adversarial conditions that cannot influence model selection, then requires replay there as the final gate.

Evidence: `prompts/sources/sciexplorer-physics-models/prompt-inputs.md`; `records/sciexplorer-physics-models.md`.

### 3.8 AI/ML research: hypothesis cards and evidence gates

Lossfunk's staged prompts require falsifiable hypotheses, versioned datasets, verified baselines, metrics, numeric success thresholds, compute budgets, dependencies, acceptance checks, artifact paths, and claim-to-result traceability. A paper-readiness gate asks whether the evidence supports the emerging claim and whether experiments could have disproved it.

This is one of the most operationally explicit templates among the available cases for converting “do research” into a realistically verifiable project. Its transfer does not require GPUs or ML: every branch of an open-problem search can have an exact claim, allowed evidence, baseline, success bar, resource cap, and required artifact.

Evidence: `prompts/sources/lossfunk-four-research-attempts/hypotheses_generation/`; `prompts/sources/lossfunk-four-research-attempts/experiment_planning/experiment_planning_code.md`; `prompts/sources/lossfunk-four-research-attempts/paper_creation/paper_readiness_check.md`; `records/lossfunk-four-research-attempts.md`.

### 3.9 Astronomy and hypothesis campaigns: evidence-ID partitioning

AstroAgents partitions observations among scientists, asks each claim to cite datapoint identifiers, accumulates and deduplicates hypotheses, and adds literature and novelty critique. The distinctive transferable move is claim-level evidence partitioning: each hypothesis should identify exactly which observations support it, which observations it leaves unexplained, and what new evidence would discriminate it from rivals.

The implementation also illustrates why visible feedback loops need wiring audits. Several analysis and critic fields are declared but not directly interpolated into the scientist prompt, while the accumulator is told not to change hypothesis statements. A critic can therefore be present in the diagram without having an effective repair channel.

Evidence: `prompts/sources/astroagents-hypothesis-campaign/AstroAgents.py:170-237`; `records/astroagents-hypothesis-campaign.md`.

### 3.10 Instrument automation: privileged-action routing

AILA routes analysis, image handling, and AFM control among specialized handlers and includes explicit escalation phrases. This makes privileged-action routing a prompt-design object: separate observation, interpretation, code modification, and physical execution; state which role may cross each boundary; and preserve tool output as the handoff artifact.

Its failure logs expose the limit. Prose instructions are not capability security: an executor that accepts arbitrary Python can bypass a declared “retrieve then modify” boundary, and one log substitutes hypothetical friction values before reporting success. Transfer requires enforced permissions, runtime guards, and provenance—not merely role labels.

Evidence: `prompts/sources/aila-afmbench/AILA_4.0.py:371-389,464-483`; `prompts/sources/aila-afmbench/run-prompts/Prompt_1.txt`; `prompts/sources/aila-afmbench/run-prompts/Prompt_2.txt`; `records/aila-afmbench.md`.

### 3.11 Forecast and benchmark prompts: contracts without discovery loops

EarthLink's Atlantic Niño prompt is primarily an objective contract: metric, lead time, desired skill, candidate model families, and mechanism request. Its brevity makes the target legible, but it omits data vintages, temporal splits, leakage controls, uncertainty, and preregistered baselines. BixBench, by contrast, emphasizes answer/grader interoperability and evidence localization across biological-data tasks; one template simultaneously requires a long `<question_analysis>` and prohibits extra output, illustrating how schema obligations can conflict.

These are not discovery workflows of the same kind as A-Lab or FunSearch. Their transferable lesson is narrower: metrics and output contracts must be complete, mutually consistent, and paired with the data split or evidence address that makes them auditable.

Evidence: `prompts/earthlink-atlantic-nino-attempt.md`; `records/earthlink-atlantic-nino-attempt.md`; `prompts/sources/bixbench-trajectories/prompts.py`; `records/bixbench-trajectories.md`.

## 4. Transfer matrix

| Source-domain method | Transfer target | Concrete adaptation | Main risk |
|---|---|---|---|
| Chemistry ambiguity/executability audit | Mathematics, software, policy | Classify each assumption, imported theorem, or requirement as supported, conditional, missing, or unavailable before generation | Guessing can disguise uncertainty as precision |
| Wet-lab positive and negative controls | Proof critics, graders, research agents | Calibrate on a known valid neighbor and a subtly false neighbor; record false-positive and false-negative behavior | Controls may be too easy or leak the target pattern |
| One decisive experiment with a decision rule | Proof search and algorithm design | Choose the cheapest finite test, symbolic check, or counterexample search that separates mechanisms | Finite evidence can kill a lemma but cannot prove a general theorem |
| Extreme-condition experiments and hypothesis survivor ledger | Modeling, debugging, theorem exploration | Test boundary cases, degeneracies, symmetries, and adversarial regimes; update surviving hypotheses explicitly | Search may overfit the explored cases without a holdout |
| Exact theorem contract and exclusions | Scientific hypothesis generation | Pre-register endpoint, units, validation type, and non-claims | Overly rigid contracts can discard useful exploratory results |
| Executable incumbents and behavioral islands | Any verifier-backed task | Persist only checked artifacts; cluster by behavior/mechanism; reset stagnant branches | A flawed evaluator rewards the wrong objective |
| Compiler-valid handoffs | Software, formal science, data pipelines | Every handoff must parse, run, or verify; store notes beside the artifact | Passing a validator does not establish semantic fidelity |
| Pairwise evidence ranking | Multi-route research | Compare routes lexicographically: fidelity, validity, obligations closed, robustness, then elegance | Same-model judges remain correlated; order effects and intransitive cycles can make rankings unstable |
| Hypothesis cards and readiness gates | Open research generally | Attach baseline, metric, threshold, budget, provenance, failure modes, and output path to each route | Administrative structure can become ceremony if gates are not enforced |

## 5. Unevenly represented methods and concrete defects

### 5.1 Corpus-wide opportunities

1. **Held-out validation.** Reserve tests, cases, or perturbations that cannot influence candidate development.
2. **Blinded independent verification.** Give a fresh verifier the statement and artifact without the generator's rationale or favored route.
3. **Source-locked evidence cards.** Record the exact theorem/evidence statement, hypotheses, source location, and applicability mapping.
4. **Explicit uncertainty and abstention.** Allow `unknown`, `unsupported`, and `needs input`; do not equate forced completion with rigor.
5. **Bidirectional truth search.** Treat proof and disproof/counterexample as legitimate outcomes unless the task itself fixes the answer.
6. **Objective stopping and useful fallback.** Stop a route when its decisive test fails or its marginal information falls below a declared bar; preserve the strongest checked artifact and exact obstruction.
7. **Negative-result memory.** Store false lemmas, counterexamples, failed parameters, and validator outputs so new agents do not rediscover them.
8. **Verification-preserving repair.** Map critique to exact claims and change only affected components, then re-run the full gate.
9. **Critic calibration.** Measure a validator on known positive and negative cases before using it on novel work.
10. **Prompt ablation.** Compare methods on matched tasks while holding model, tools, budget, and evaluation fixed.

### 5.2 Implementation defects that matter

- **AstroAgents feedback is only partially wired.** The scientist prompt declares analysis, search analysis, and critic feedback as inputs but does not interpolate them directly; the accumulator is instructed not to change hypothesis statements. A visible critic loop is not necessarily an effective repair loop. Evidence: `prompts/sources/astroagents-hypothesis-campaign/AstroAgents.py:170-237`.
- **AILA's prose boundaries are not capability security.** The AFM handler is told to modify retrieved code rather than invent code, but the executor accepts arbitrary Python and a data-analysis tool can execute dynamic code. The published logs include routing failures and hypothetical data. Evidence: `prompts/sources/aila-afmbench/AILA_4.0.py:371-389,464-483`; `prompts/sources/aila-afmbench/run-prompts/Prompt_1.txt`; `prompts/sources/aila-afmbench/run-prompts/Prompt_2.txt`; `records/aila-afmbench.md`.
- **Strict JSON/XML is interoperability, not validation.** Several templates describe “valid JSON” while showing comments, ellipses, or unquoted schema placeholders. A parser gate is needed, and syntactic validity still says nothing about scientific truth.
- **Same-data replay is not generalization.** SciExplorer's final comparison uses the initial conditions explored during discovery. A holdout should be added.
- **Persistence can encourage fabrication.** Assuming an affirmative proof exists and forbidding a truthful unresolved report may increase search effort, but it also anchors the answer and erases uncertainty.

## 6. What the archive does—and does not—say about effectiveness

The 23 records mix theorem proofs, finite constructions, benchmarks, hypothesis proposals, simulated discoveries, wet-lab campaigns, and unsuccessful attempts. Their outcomes use different validation types, and prompts differ simultaneously with model, compute, tool state, human intervention, and problem difficulty. No significance test or success-rate comparison is justified.

The strongest caution is the CDC-style contrast. The Bartnik attempt used a detailed portfolio, dependency graph, blocked-route registry, and adversarial audit but did not solve the conjecture. The zeroth-order convex lower-bound case used a closely related orchestration style and produced an author-reviewed Lean formalization; it had not been peer reviewed at the repository snapshot cutoff. This pair is useful evidence that the style transfers across mathematical fields; it is not evidence that the style causes success.

The study therefore recommends methods because they make research state more checkable, falsifiable, persistent, or efficiently searchable—not because their presence correlates with the archive's `complete` label.

## 7. Implications for research-prompt design

For future repository experiments, use the following architecture:

1. **Truth-neutral contract.** State the problem, quantifiers, allowed assumptions, proof and disproof criteria, non-solutions, and claim boundary.
2. **Preflight audit.** Restate the formal target; list ambiguities, edge cases, imported facts, and the exact verification plan.
3. **Calibrated controls.** Test the evaluator on known valid and invalid neighboring artifacts.
4. **Mechanism-diverse portfolio.** Separate branches by actual mechanism and keep their initial contexts sealed; same-model branches remain correlated.
5. **Decisive-test cards.** Before expensive work, require each branch to name the cheapest result that would support, redirect, or kill it.
6. **Persistent route registry.** Record assumptions, dependencies, artifacts, validator outputs, counterexamples, and status.
7. **External fitness.** Prefer compiler, test, certificate, simulator, symbolic check, or physical result over self-assessed confidence.
8. **Behavior-based selection.** Preserve diverse valid incumbents; do not collapse the search to one attractive family too early.
9. **Fresh-context audit.** Blind a verifier to the development narrative; include genuinely held-out or adversarial tests when the object supports them, and do not call same-model review independent evidence.
10. **Minimal repair and full recheck.** Map defects to claims, repair locally, then rerun all gates.
11. **Resource-aware stopping.** If unresolved, return the strongest checked artifact, the exact remaining obstruction, failed-route memory, and reproducible next experiments. Never manufacture completion.

## 8. Limitations and next research

This is a small, heterogeneous, historically selected archive. Mathematics is overrepresented; several cases have partial or representative prompts; private-rights-review materials are excluded from the generated public corpus; exact model settings, compute, system prompts, or human interventions are sometimes unknown. Prompt availability is not the same as run reproducibility.

The next study should convert the qualitative matrix into a stage-level dataset with two independent coders, adjudicated disagreements, and inter-rater reliability. A subsequent experiment should test a small number of mechanisms—such as ambiguity audit, decisive-test card, external verifier, and negative-result memory—on matched verifier-backed tasks while holding the model, tools, budget, and scoring constant. That is the point at which the project could begin making comparative effectiveness claims.

## Appendix A. Principal repository evidence

- Corpus scope and completeness: `prompts/README.md`, `prompts/corpus-index.json`, `research/README.md`.
- Mathematics contracts: `prompts/cycle-double-cover.md`, `prompts/bartnik-admissible-extension.md`, `prompts/unit-distance-conjecture.md`, `prompts/sources/zeroth-order-convex-lower-bound/initial-prompt.txt`.
- Formal feedback: `prompts/alphaproof-nexus.md`.
- Executable combinatorial search: `prompts/sources/funsearch-cap-sets/`.
- Chemistry ambiguity and repair: `prompts/sources/acra-synthesis-reproduction/`.
- Materials decisive experiments: `prompts/sources/alab-gpss-spinel-campaign/agent_prompts.py`.
- Biomedical controls and feedback: `prompts/sources/gpt4-breast-cancer-drug-pairs/prompts.md`, `prompts/sources/futurehouse-robin-amd/prompts.py`, `prompts/sources/virtual-lab-nanobodies/`.
- Physics hypothesis testing: `prompts/sources/sciexplorer-physics-models/prompt-inputs.md`.
- Research stage gates: `prompts/sources/lossfunk-four-research-attempts/`.
- Instrument routing and failure logs: `prompts/sources/aila-afmbench/`.
- Hypothesis orchestration: `prompts/sources/astroagents-hypothesis-campaign/`.

## Appendix B. Claim language for later publication

Prefer:

- “distinctive among codeable cases in this corpus”;
- “mechanistically promising transfer”;
- “externally checkable workflow”;
- “associated with a documented outcome, with major confounding”;
- “not observed in the available artifact.”

Avoid:

- “unique to this domain”;
- “proven effective”;
- “absent” when prompt completeness is partial, representative, or unavailable;
- “independently verified” for same-model personas without blinding or an external checker;
- “reproducible” based only on exact prompt availability.
