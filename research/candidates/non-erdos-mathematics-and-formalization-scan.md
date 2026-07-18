# Non-Erdos mathematics, theoretical CS, and formalization scan

Research cutoff: 2026-07-17

Status: candidate collection and source triage. Inclusion here does not endorse novelty, correctness, or significance. Run dates and publication dates are separated whenever the source permits. "Unknown" means that the primary source did not disclose the date; it must not be silently replaced with the paper date.

This pass excludes cases already captured in the initial mathematics shortlist and the separate Erdos inventory. It emphasizes primary papers, repositories, exact prompts or transcripts, formal certificates, and mixed-outcome campaigns.

## Highest-priority individual cases

### Farhi-Goldstone-Gutmann QAOA ring-of-disagrees conjecture

- **Problem and claimed result:** `A Machine-Verified Proof of a Quantum-Optimization Conjecture` proves the FGG conjecture that depth-`p` QAOA on an even cycle, when `2p + 2 <= N`, has optimal approximation ratio exactly `(2p + 1)/(2p + 2)`.
- **Dates:** model run not disclosed; arXiv v1 2026-06-29.
- **AI system and role:** Claude Fable 5, using an agentic Lean toolkit, Python checks, and Lean compiler feedback, generated the decisive proof and its natural-language strategy after being given a fixed formal theorem and supporting library.
- **Human role:** Uri Kol, Maor Ben-Shahar, Kfir Sulimany, and Dirk Englund built the quantum/QAOA Lean infrastructure, formalized known components, isolated the open statement, and audited that the fixed theorem matched the intended conjecture.
- **Outcome category:** claimed complete resolution; formally verified proof.
- **Prompt and trajectory availability:** the paper says the model was tasked with closing the remaining theorem by constructing a Lean proof, but does not publish the exact initial mission prompt or full trajectory. The final proof and library are public. Treat prompt availability as `representative`, not `full`.
- **Validation:** Lean 4 kernel; theorem statement and definitions reportedly fixed before the model saw the gap; standard classical Mathlib axioms; no trust in Python checks is required for the final proof.
- **Primary sources:** [paper](https://arxiv.org/abs/2606.29687), [Lean repository](https://github.com/urikol/QuantumOptimization), [LeanScriber toolkit](https://github.com/urikol/leanscriber).
- **Caveats:** extremely recent preprint with no peer review identified. Lean proves the formal implication; faithfulness of definitions to the natural-language conjecture remains a human audit boundary.
- **Triage:** very high.

### Gaussian completely monotone conjecture and related entropy conjectures

- **Problem and claimed result:** `A Counterexample to the Gaussian Completely Monotone Conjecture` gives an explicit one-dimensional probability measure whose fifth entropy derivative along heat flow has the wrong sign. This disproves the Cheng-Geng GCM conjecture and consequently the stronger McKean Gaussian-optimality and Toscani entropy-power conjectures. It also proves existence of a log-concave counterexample at some order.
- **Dates:** model run unknown; arXiv v1 2026-05-12.
- **AI system and role:** GPT-5.5 Pro found the explicit finite-support counterexample.
- **Human role:** Yuzhou Gu and Mark Sellke derived and wrote the proof, supplied the log-concave consequence, and produced a rigorous certificate.
- **Outcome category:** explicit counterexample / disproof.
- **Prompt and trajectory availability:** no prompt or transcript in the paper; only the model attribution and final counterexample are public.
- **Validation:** analytic proof plus exact-rational SageMath/Arb ball arithmetic at 256-bit precision, with a printed verification script and a rigorous tail bound.
- **Primary source:** [paper and verification code](https://arxiv.org/abs/2605.11656).
- **Caveats:** preprint only; the provenance of the search process and unsuccessful candidates is unavailable.
- **Triage:** high for result quality, low for prompt availability.

### Non-uniqueness for a differential equation and matched failed attempts

- **Problem and claimed result:** Brian Street asked whether zero initial data forces uniqueness for a difference-quotient differential equation with a positive smooth weight. A ChatGPT construction led to a smooth non-uniqueness counterexample; the paper also proves uniqueness for a broad structured class of weights.
- **Dates:** comparison-model tests 2026-03-27; successful ChatGPT-5.5-Pro response 2026-04-22; arXiv v1 2026-05-06.
- **AI system and role:** ChatGPT-5.5 Pro generated the key oscillatory/flat-function construction after 43 minutes 11 seconds of reported thinking. In same-problem informal tests, ChatGPT-5.2-Pro, ChatGPT-5.4-Pro, Gemini 3 DeepThink, Opus 4.6 Extended, and ChatGPT-5.5 Extended Thinking either failed to prove the result or produced incorrect proofs.
- **Human role:** Street checked the conclusion, identified skipped or confusing steps, adapted the construction, supplied the missing estimates, rewrote the proof, and developed the broader theorem.
- **Outcome category:** disproof/counterexample, with five documented unsuccessful comparison attempts.
- **Prompt and trajectory availability:** unusually strong. Section 4 prints the exact prompt and the successful model response verbatim, with human footnote commentary. The failed models' full outputs are not printed.
- **Validation:** detailed human proof in the same paper; no formal proof or peer review identified.
- **Primary source:** [paper, prompt, and annotated response](https://arxiv.org/abs/2605.04810).
- **Caveats:** the printed prompt concerns a closely related weighted-Laplace formulation rather than the final theorem verbatim. The failed attempts are aggregate labels without their raw traces.
- **Triage:** very high, particularly as a linked success/failure record.

### Strongly polynomial policy iteration for robust MDPs: Aletheia strengthening

- **Problem and claimed result:** the human paper proves strongly polynomial termination of policy iteration for fixed-discount, `(s,a)`-rectangular `L_infinity` robust MDPs. A required combinatorial theorem bounds how many dyadic scales can be hit by bounded integer combinations of a finite real set.
- **Dates:** human paper arXiv v1 2026-01-30; v2 2026-06-02. The Aletheia run occurred shortly after the authors obtained their own sufficient theorem, but the exact run date is not disclosed.
- **AI system and role:** Aletheia, built on Gemini Deep Think, independently found and proved an effective strengthening of the authors' combinatorial theorem.
- **Human role:** Ali Asadi, Krishnendu Chatterjee, Ehsan Goharshady, Mehrdad Karrabi, Alipasha Montaseri, and Carlo Pagano established the main robust-MDP result. The last author submitted the standalone combinatorial question to Aletheia; the paper distinguishes the human theorem from the stronger model theorem.
- **Outcome category:** independently generated strengthening incorporated into a larger human proof; not the sole source of the main result.
- **Prompt and trajectory availability:** the exact natural-language prompt is printed in Appendix H. No full Aletheia transcript was located.
- **Validation:** human-authored proof in a paper accepted for COLT 2026; no formal verification.
- **Primary sources:** [paper](https://arxiv.org/abs/2601.23229), [Aletheia project](https://github.com/google-deepmind/superhuman/tree/main/aletheia).
- **Caveats:** avoid crediting Aletheia with resolving the robust-MDP question. The authors had already proved a sufficient result; the AI contribution is the sharper auxiliary theorem.
- **Triage:** high; excellent example of precise contribution attribution.

### Binary fixed-margin swap-chain spectral gap

- **Problem and claimed result:** `Spectral Gap for the Binary Fixed-Margin Swap Chain` proves the conjectured rapid mixing for all feasible margins and a worst-case-tight lower bound of `binom(m,2)^-1 binom(n,2)^-1`, addressing a question traced to Kannan, Tetali, and Vempala (1997).
- **Dates:** model run unknown; arXiv v1 2026-06-21.
- **AI system and role:** ChatGPT 5.5 Pro reportedly proposed the full strategy: comparison with a two-row heat-bath chain, reduction to three rows, Johnson-harmonic decomposition, technical lemmas, and initial proofs.
- **Human role:** Weibo Fu, Qian Qin, and Guanyang Wang posed and guided the problem, evaluated arguments, rewrote the proof, and accepted responsibility for the final result.
- **Outcome category:** claimed complete proof of a long-standing rapid-mixing conjecture.
- **Prompt and trajectory availability:** no exact prompt or full transcript located in the paper.
- **Validation:** detailed human-written proof; no formal verification or peer-reviewed venue identified.
- **Primary source:** [paper](https://arxiv.org/abs/2606.22636).
- **Caveats:** very recent preprint and unusually broad model-credit statement without a preserved trajectory.
- **Triage:** high result relevance, medium provenance quality.

### Learning-curve monotonicity for maximum likelihood estimators

- **Problem and claimed result:** Mark Sellke and Steven Yin answer an open COLT 2019 question for well-specified Gaussian maximum-likelihood learning curves and extend the result to multivariate Gaussian parameters, Gamma and other exponential-family settings, and reverse KL formulations.
- **Dates:** initial run in or before 2025-11; public reproduction and paper announcement 2025-12-11.
- **AI system and role:** an unreleased longer-thinking GPT-5.2 Pro prototype produced the initial proof; public GPT-5.2 Pro reportedly reproduced the main theorem and extensions on first attempts. The model identified complete monotonicity as the central structure.
- **Human role:** Sellke and Yin posed the questions, checked, transcribed, and edited the proofs, and wrote the framing. They report not supplying proof strategies or intermediate mathematical arguments.
- **Outcome category:** complete result with several generalizations.
- **Prompt and trajectory availability:** the paper describes the initial query as an AI-generated restatement rather than printing it exactly. It prints three exact follow-up questions, but no full chat.
- **Validation:** human-author checking and review by external subject-matter experts reported by OpenAI. One model sign error was corrected and reportedly did not affect downstream conclusions.
- **Primary sources:** [paper](https://arxiv.org/abs/2512.10220), [OpenAI case study](https://openai.com/index/gpt-5-2-for-science-and-math/).
- **Caveats:** company case study plus preprint, no formal proof or peer review identified; some reverse-KL material may overlap mathematical folklore.
- **Triage:** high.

### Extremal descendant integrals on moduli spaces of curves

- **Problem and claimed result:** Johannes Schmitt's paper proves that pure psi-class intersection numbers are minimized when exponents are concentrated and maximized when they are as balanced as possible. The conjecture emerged during an AI experiment rather than from a previously named open problem.
- **Dates:** initial Claude observation at an ETH OpenEvolve hackathon, exact date unknown; arXiv v1 2025-12-16.
- **AI systems and roles:** Claude Opus 4.5 noticed the conjecture. o3, GPT-5, and GPT-5 Pro independently converged on correct proof ideas; Gemini 3 Pro handled the minimum side; Claude Code with Opus 4.5 and GPT-5.2 formalized the combinatorial core in Lean.
- **Human role:** Schmitt chose the test domain, checked novelty/open status with colleagues, evaluated model outputs, repaired formulas, supplied the geometric argument, and wrote the paper.
- **Outcome category:** new theorem plus partially formalized proof; mixed documented attempts.
- **Prompt and trajectory availability:** the paper links multiple shared chats and a complete Claude Code formalization transcript and preserves substantial AI proof material. The exact first-solving prompt is linked rather than plainly printed in the article.
- **Validation:** small-case computation, colleague novelty checks, convergence of independent proof attempts, human proof, and Lean verification of the combinatorial core.
- **Documented failures:** some models handled only genus zero or gave vague arguments; some produced false counterexamples; one hallucinated a nonexistent journal reference; GPT-5.1 failed; an original GPT-5 output used a wrong genus-zero formula; the full geometric theorem was not formalized because prerequisite infrastructure was missing.
- **Primary source:** [paper and linked artifacts](https://arxiv.org/abs/2512.14575).
- **Caveats:** author describes the result as borderline in publication significance; novelty is based on author/colleague assessment; only the combinatorial core is formalized.
- **Triage:** very high as a mixed-outcome provenance record.

### Separable Banach space not a Lipschitz retract of its bidual

- **Problem and claimed result:** Antonio Acuaviva settles the separable case of a problem originating with Lindenstrauss (1964) negatively, constructing a separable Banach space with a bimonotone Schauder basis that is not a uniformly continuous, hence not a Lipschitz, retract of its bidual.
- **Dates:** AI work date unknown; arXiv v1 2026-07-14.
- **AI system and role:** ChatGPT 5.6 Pro was used in exploratory and preparatory work, including auxiliary lemmas, technical implementation details, literature retrieval, consistency checks, and LaTeX.
- **Human role:** Acuaviva proposed and directed the renorming-amplification strategy and takes full responsibility for the mathematics.
- **Outcome category:** complete human-led proof with AI technical assistance.
- **Prompt and trajectory availability:** none located; only the paper's AI-use statement.
- **Validation:** detailed human-authored proof; no formal verification or peer review identified.
- **Primary source:** [paper](https://arxiv.org/abs/2607.12935).
- **Caveats:** AI did not originate the core strategy according to the author. This is a useful lower-autonomy comparison case, not an autonomous-agent record.
- **Triage:** medium-high.

### Dual linear-programming bound for sphere packing in dimension 36

- **Problem and claimed result:** Rifat Jumagulov constructs an exact dual Cohn-Elkies certificate showing that the linear-programming method cannot certify the best-known dimension-36 packing as optimal. The result is a limitation of the LP bound, not a solution of the dimension-36 sphere-packing problem.
- **Dates:** construction run unknown; novelty search reported on 2026-07-11 and rechecked 2026-07-14; paper dated 2026-07-13; arXiv revision 2026-07-15.
- **AI systems and roles:** Claude Fable 5 and Claude Opus 4.8 assisted certificate construction, verification tooling, and manuscript preparation. GPT-5.6 Codex performed an independent computational cross-check.
- **Human role:** Jumagulov proposed and supervised the work and is the sole author accountable for the result.
- **Outcome category:** certified partial progress / method limitation.
- **Prompt and trajectory availability:** no prompt or transcript located. Ancillary exact data, verification code, manifests, and receipts accompany the paper.
- **Validation:** exact rational certificate, exact arithmetic to a large cutoff, outward interval tail bounds, and multiple independent computational implementations including PARI and Arb.
- **Primary source:** [paper and ancillary files](https://arxiv.org/abs/2607.11319).
- **Caveats:** extremely fresh one-author preprint; no independent external replication identified. Site copy must not call this "solving sphere packing in dimension 36."
- **Triage:** high for certificate quality, low for prompt recovery.

## Campaigns and linked attempts

### ProofCouncil open-problem campaign

- **Campaign:** `ProofCouncil: An LLM Agent for Solving Open Mathematical Problems` evaluates a multi-model author/critic/council/compute architecture on private researcher problems and the second FirstProof batch.
- **Dates:** runs occurred before the 2026-07-10 arXiv v1; exact dates for each research-problem run are not disclosed. FirstProof tasks were run inside that challenge's 24-hour window.
- **Systems:** GPT-5.5 Pro xhigh author and critic; Gemini 3.1 Pro high, Claude Opus 4.7 max, and GPT-5.5 Pro in the council; Codex GPT-5.5 xhigh as a Sage/GAP/Singular/PARI compute worker.
- **Human role:** Johannes Schmitt and collaborators designed the system and evaluation, collected or edited researcher problems, and returned outputs to problem submitters and external experts for review. Challenge tasks received no in-run human input.
- **Researcher-problem outcomes:** 30 private problems; 21 reviewed. The paper reports 5 complete, 2 possibly complete, 8 meaningful partial, 4 correct but no progress, and 2 misinterpreted/easier versions; 3 execution errors and 6 unreviewed cases preserve additional denominator information.
- **FirstProof outcomes:** 6 of 10 judged correct up to minor revisions; one partial/major-revision result; two rejected; one produced no output after repeated API timeouts.
- **Failure evidence:** a stateful critic repeatedly accepted an incomplete solution that fresh critics rejected; another unsupported assertion passed the critic but failed human review; a correct-up-to-minor-revisions result was rejected by the critic.
- **Prompt and trajectory availability:** Appendix C prints full component prompts for the architecture, and code is public. Private researcher statements, solutions, and individual trajectories are withheld for privacy and intellectual-property reasons.
- **Validation:** expert referees for FirstProof and problem authors/external experts for research problems; predominantly informal expert review rather than formal verification.
- **Primary sources:** [paper](https://arxiv.org/abs/2607.09474), [code](https://github.com/eth-sri/proof-council).
- **Caveats:** the researcher evaluation was adapted based on early runs and is not a frozen benchmark. Human grading categories must remain time-stamped and should not be presented as formal correctness.
- **Triage:** very high as a campaign and documented-attempt collection.

### Google DeepMind AI co-mathematician campaign

- **Campaign:** a Gemini-based asynchronous multi-agent workbench reported collaborations on live researcher problems, including both completed and still-under-review cases.
- **Dates:** arXiv v1 2026-05-07, v2 2026-05-13. Child-run dates are mostly undisclosed; Marc Lackenby's follow-up paper was submitted 2026-05-11.
- **System and human roles:** researchers supplied problems, references, refinements, and review; the system launched parallel prove/disprove and Gemini Deep Think workstreams. The platform was in limited release and is not publicly reproducible.
- **Child case: Kourovka Notebook Problem 21.10.** Marc Lackenby entered the problem statement asking whether every finite group admits a just-finite presentation, meaning one where deleting any relation presents an infinite group. A first model proof was self-rejected but contained the useful strategy; Lackenby filled a gap; the system completed and later found two minor issues. A separate paper reports the completed collaborative resolution and generalizations. Sources: [campaign paper](https://arxiv.org/abs/2605.06651), [Lackenby paper](https://arxiv.org/abs/2605.10402).
- **Child case: symmetric-power Stirling coefficients.** Gergely Berczi supplied a research brief after AlphaEvolve had failed on higher-index cases. The co-mathematician found the original conjecture false for small indices, rejected the proposed strategy, suggested an updated conjecture, and produced proof strategies for two conjectures. The campaign paper says detailed human review was still underway.
- **Child case: Hamiltonian-diffeomorphism perturbation lemma.** Semon Rezchikov supplied a technical subproblem, papers, and a refined statement. Gemini Deep Think produced a key lemma and an apparently sound proof that reportedly resolved the question; other AI systems had failed the same prompt. No standalone public proof or full prompt was found.
- **Prompt and trajectory availability:** representative dialogue and workflow descriptions only. Exact complete logs and the private problem corpus are not public.
- **Validation:** Lackenby provides a public human-authored paper for the group-theory case. The other two cases rely on researcher reports and, in one case, were explicitly still under review.
- **Caveats:** do not aggregate the whole campaign as "three solved problems." Child records need distinct outcome and validation states.
- **Triage:** high as a parent campaign; only the Lackenby child is ready for a success record.

### Ripple: AI-heavy formalization with discoveries, repaired gaps, and an obstruction

- **Campaign:** `Ripple` is an open Lean 4 framework for real-number computation by chemical reaction networks, GPACs, population protocols, CTMC/mean-field limits, and Turing-completeness results.
- **Dates:** arXiv v1 2026-07-15; exact development-run dates not enumerated in the paper.
- **Systems and human roles:** Ho-Lin Chen and Xiang Huang report that publicly available Claude Opus 4.6-4.8, Claude Fable 5, and GPT-5.4-5.6 agents performed most formalization. The human authors designed and supervised the project and wrote the mathematical account.
- **Outcomes:** a very large sorry-free formalization; repairable gaps found in published approximate-majority and LPP arguments; a new machine-checked construction of Apéry's constant `zeta(3)` as CRN-computable; and a sharpened but unresolved Ramanujan `1/pi` construction.
- **Documented obstruction:** formalization exposes a neutral-mode/singular-seed problem. Rational truncated seeding yields `zeta(3) + c`, and the same barrier blocks the proposed exact `pi` construction. This should be represented as a partial or blocked research thread, not hidden under the successful framework.
- **Prompt and trajectory availability:** public repository and a detailed account of the agent workflow; original end-to-end prompts and trajectories need a repository audit before claiming full availability.
- **Validation:** Lean kernel; core constructions reportedly use exactly three foundational Mathlib axioms and contain no `sorry`.
- **Primary sources:** [paper](https://arxiv.org/abs/2607.13531), [repository](https://github.com/zinan-huang/Ripple).
- **Caveats:** extremely recent preprint; the framework combines formalization of established results, corrections, new results, and open questions. These should become linked child records rather than one breakthrough count.
- **Triage:** high as a formalization campaign and mixed-outcome record.

### Moonshine and the Neural Jacobian Conjecture

- **Campaign:** Moonshine transfers the local-nondegeneracy/global-injectivity theme of the classical Jacobian conjecture to one-hidden-layer affine-ridge sigmoid networks and formulates a new Neural Jacobian Conjecture.
- **Dates:** runs not individually dated; arXiv v1 2026-06-09.
- **Systems and human roles:** the Moonshine agent generated the conjecture and research framework. GPT-5.5 Pro and DeepSeek-V4-Pro independently produced proofs for width `N = n + 1`; interactive GPT-5.5 Pro use contributed another geometric-topological proof. Xiaoyang Chen and Xiang Jiang built the agent, evaluated outputs, and authored the paper.
- **Outcome category:** AI-generated conjecture with a proved boundary case; the general `N >= n + 2` case remains open.
- **Prompt and trajectory availability:** source code and project page are public; the article describes structured logs, failed paths, and open subproblems, but exact complete model prompts and original trajectories require repository audit.
- **Validation:** multiple informal proofs in the paper; no formal proof or independent peer review identified.
- **Primary sources:** [paper](https://arxiv.org/abs/2606.10806), [repository](https://github.com/DeepMathLLM/Moonshine).
- **Caveats:** the conjecture itself was created by the same system that established its easiest nontrivial case. It is progress on a new problem, not progress on the classical Jacobian conjecture.
- **Triage:** medium-high and useful for recording conjecture provenance.

### EinsteinArena distributed optimization campaign

- **Campaign:** `Harnessing the Collective Intelligence of AI Agents in the Wild for New Discoveries` describes an open platform where independently operated agents read shared problem specifications, download prior solutions, submit constructions to public verifiers, and exchange research notes. The paper reports 12 new state-of-the-art scores as of May 2026.
- **Dates:** platform launch 2026-03-19; manuscript dated 2026-05; arXiv v1 2026-06-09. The site remains live, so every site-derived score and artifact count needs a retrieval date.
- **Claimed May 2026 child results:** kissing number `K(11) >= 604`; Erdős minimum overlap `0.380871`; first autocorrelation `1.5028609`; second autocorrelation `0.9626`; third autocorrelation `1.4523`; degree-69 flat polynomials `1.28093`; 16-point max/min distance ratio `12.889230`; prime-number-theorem construction `0.99490`; 26-circle square packing `2.635983095`; 21-circle rectangle packing `2.365832385`; 50-point Tammes score `0.5134721`; and edges-versus-triangles score `-0.71171`. These are construction or bound improvements, not twelve theorem proofs.
- **Systems and human roles:** the platform accepts heterogeneous, user-supplied agents and does not require disclosure of their base models or of the humans who create and operate them. Named agents therefore identify platform accounts, not reproducible model configurations. Federico Bianchi, Yongchan Kwon, Aneesh Pappu, and James Zou built and studied the platform, maintained verifiers, and inferred solution lineages from submission fingerprints and discussions.
- **Problem and verifier recovery:** public `GET /api/problems/{slug}` responses include the full mathematical description, JSON submission schema, scoring direction, minimum-improvement rule, and current Python verifier. The platform source and lineage-analysis code are public. Historical verifier versions can sometimes be reconstructed from Git history, but solution records do not identify the exact verifier commit that evaluated them.
- **Submission recovery:** public `GET /api/solutions/best?problem_id=ID&limit=100` responses include full construction data, scalar score, agent name, solution ID, and creation time. On 2026-07-17, all twelve May problem families had recoverable retained solutions through this API, with between 16 and 99 returned records per family. Multiple historical personal-best submissions from the same agent are present, so useful progress paths can be reconstructed. This is not a complete attempt history: non-improving submissions and rejected would-be leaders are deleted, local experiments are absent, and the leaderboard may prune beyond its retention cap.
- **Discussion recovery:** approved threads and replies are public, searchable, and pageable through the API. They preserve some failed approaches, verifier problems, borrowing, and negative results. Pending or moderation-rejected posts are not public, and agents are not required to disclose all local work.
- **Prompt and trajectory availability:** only the generic homepage instruction and public `skill.md` participation protocol are recoverable. Exact system prompts, problem-solving prompts, local tool traces, reasoning trajectories, base-model settings, and human interventions for the result-producing agents are not required and generally are not public. EinsteinArena is therefore highly solution-rich but prompt-poor.
- **Verifier-output recovery:** a public solution-status endpoint returns evaluation status, scalar score, timestamps, and an error field. It does not expose sandbox stdout, a detailed verifier trace, environment hashes, or a signed execution receipt. A researcher can download the submitted data and rerun the current public verifier, but that is a new verification event rather than recovery of the original run log.
- **K(11) reconciliation:** the paper reports an improvement from 593 to 604. The live homepage retrieved 2026-07-17 still labels the closed original task as `K(11) >= 594`, because that page is the fixed 594-vector challenge. The 604-vector construction is separately public in the project's result repository as 604 vectors over `Z[sqrt(2)]`, with a pure-integer certificate that all norms are 36 and all pairwise squared distances are at least 36. The live site has since opened a distinct 605-vector optimization task whose discussion explicitly treats 604 as the standing record. This is a stale task-card or record-boundary mismatch, not evidence that the 604 claim was withdrawn.
- **Validation caveats:** verifiers establish feasibility or a score for a submitted construction, not global optimality. Novelty and "state of the art" depend on comparison with mutable prior baselines. Several gains are numerically small. Verifiers were strengthened after agents exposed precision and validity bugs, including replacement of an earlier double-precision kissing-number pipeline. Some tasks are not exact certificates: the current prime-number-theorem verifier, for example, uses a fixed-seed sample of ten million points to check an inequality. Current live scores also exceed several May paper values, so the paper's twelve-result table must be stored as a dated snapshot.
- **Record boundaries:** create one parent campaign; one child record for each dated SOTA claim; one submission event for each retained personal best; discussion-note records for materially informative failures or verifier corrections; verifier-version records; and explicit `derived_from` or inferred-lineage edges. Label fingerprint-based parents as inferred rather than reported. Keep the 594, 604, and ongoing 605 searches distinct.
- **Primary sources:** [paper](https://arxiv.org/abs/2606.10402), [live platform](https://einsteinarena.com/), [public participation and API protocol](https://einsteinarena.com/skill.md), [platform source](https://github.com/vinid/einstein-arena), [result repository](https://github.com/togethercomputer/EinsteinArena-new-SOTA), [K(11) 594 and 604 certificates](https://github.com/togethercomputer/EinsteinArena-new-SOTA/tree/main/kissing-number).
- **Triage:** very high as a campaign and partial-attempt ledger; low for exact prompt archiving.

## Method-level discovery case

### Global Lyapunov functions with symbolic transformers

- **Problem and result:** a sequence-to-sequence transformer is trained on synthetically generated dynamical systems and Lyapunov functions. It outperforms reported SOS/SMT/numerical baselines on selected polynomial systems and generates explicit candidate Lyapunov functions for non-polynomial systems where the authors say no generic algorithm exists.
- **Dates:** experiments not separately dated; arXiv v1 2024-10-10.
- **AI and human roles:** Alberto Alfarano, Francois Charton, and Amaury Hayat designed the reverse-generation datasets, models, baselines, and verification experiments. The transformer produces explicit function expressions rather than natural-language proofs.
- **Outcome category:** method-level discovery across many generated systems, not resolution of one named open conjecture.
- **Prompt availability:** no natural-language prompt; the analogue is the serialized system-to-expression model input, dataset generator, and decoding procedure.
- **Validation:** candidate functions are explicit and can be checked against Lyapunov inequalities; results are benchmark and generated-system evaluations.
- **Primary source:** [paper](https://arxiv.org/abs/2410.08304).
- **Caveats:** the phrase "long-standing open problem" refers to the absence of a general method, not to a theorem that this paper completely solves. Keep this as a workflow or collection record, not a single breakthrough.
- **Triage:** medium; useful scope test for whether the archive includes non-agent symbolic models.

## Deduplication notes

- The Anderson commutative-algebra conjecture, OpenAI and Aletheia FirstProof campaigns, FunSearch, AlphaEvolve, GPT-5 early-science cases, and AlphaProof Nexus were already present in `initial-mathematics-shortlist.md`; they were not duplicated here.
- Erdos-numbered cases and the forbidden-Sidon/perfect-difference-set paper belong in `erdos-campaigns-and-cases.md`, even when formal verification or prompt artifacts are strong.
- Search results for `Search versus Decision for S2P` and Fill's spectral-gap conjecture were excluded because their primary papers did not disclose an AI contribution.

## Schema implications from this pass

1. Store `run_date`, `comparison_run_date`, `first_public_date`, `preprint_date`, and `revision_date` separately; many sources disclose only some of them.
2. Support child attempts beneath a campaign, with denominators for execution errors, unreviewed cases, no-output runs, and critic false positives/negatives.
3. Separate `prompt availability` from `trajectory availability`; several papers print an exact prompt but omit the run, or publish code and proofs without the original prompt.
4. Give the model's contribution a scoped object (`counterexample`, `strategy`, `auxiliary theorem`, `formalization`, `literature search`) so an AI strengthening is not misreported as the main theorem.
5. Treat validation as an event history: model self-critique, fresh-model critique, human author review, external expert review, computational certificate, formal-kernel verification, peer review, and later correction are not interchangeable.
6. Record unresolved obstructions and failed comparator runs as first-class children of successful projects.
7. Preserve a `statement fidelity` field for formal proofs and a `novelty check` field for rediscovery risk.
