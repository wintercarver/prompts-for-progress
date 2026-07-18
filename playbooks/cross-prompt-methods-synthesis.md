# Cross-prompt methods synthesis playbook

Use this playbook for a periodic, repository-grounded review of methods in prompting for scientific and mathematical research. It is deliberately problem-agnostic: do not select a target problem or design a new research prompt unless that work is separately requested.

## Cadence and scope

Run this at a maintainer's judgment, such as after a merged record introduces a materially different successful workflow or validation pattern, or after roughly ten new merged records/cases. Count cases, not generated `corpus.jsonl` rows, benchmark trajectories, or logs.

Use only material whose provenance and rights permit the intended audience. Preserve the distinction between public and private/restricted analysis. A synthesis is descriptive evidence work, not a causal evaluation of models or prompts.

## Prompt to run

```text
Using the Prompts for Progress repository at its current checked-out commit, prepare a dated, repository-grounded synthesis of methods in prompting for scientific and mathematical research. This is a general-interest review only: do not select a target problem or design a fresh problem-specific research prompt.

Inspect the worktree before editing and preserve unrelated changes. Follow the repository's current contribution conventions. Create `research/synthesis/prompt-methods/summaries/[YYYY-MM-DD]/` and record the date, base commit, corpus snapshot, inclusion rule, rights boundary, and validation performed in its README. Update `research/synthesis/prompt-methods/LATEST.md` only when this run is the newest canonical summary.

Analyze the archive at the prompt-manifest/case level and, where useful, by workflow stage. Do not count generated artifact rows, benchmark trajectories, or log records as independent prompts unless the repository explicitly treats them that way. Respect provenance, publication, and rights fields. Do not infer a missing feature from a partial, representative, or unavailable prompt record.

Produce canonical `summary.md` and `case-matrix.csv`. The review should answer:

1. Which prompting and orchestration styles are visible across mathematical, scientific, software, and experimental domains?
2. What is distinctive about each style's context, feedback loop, validators, dependencies, and failure modes?
3. Which methods plausibly transfer across domains, and what would make the transfer fail?
4. What outcome evidence is present: deterministic verification, benchmark scoring, human expert review, simulated experiment, physical experiment, or only a narrative claim?
5. Which methods are absent, weakly enforced, or confounded by missing data, hidden prompts, same-model review, compute, or human intervention?

For every substantive claim, distinguish: directly observed prompt feature; reported workflow or outcome; plausible design hypothesis; and unsupported inference. Include corpus counts, sampling and availability limits, rights limitations, and dependencies such as datasets, solvers, compilers, laboratories, browsers, or expert review.

Use two review passes where available: one to challenge the taxonomy and one to challenge evidence and claim boundaries. Same-model reviewers are correlated readers, not independent validation. Validate matrix counts and source paths. Render a polished copy only when requested; Markdown and CSV remain canonical.

Finish with the key methods, evidence quality, likely transfer targets, unresolved gaps, validation performed, and exact files added. Commit only the dated synthesis and necessary indexes. Do not add this reusable playbook or other repository-authored guidance to `prompts/`.
```

## Expected output

Each dated directory normally contains a `README.md`, `summary.md`, and `case-matrix.csv`. Optional evidence registers or rendered copies are secondary. The current empirical reference is always the series' `LATEST.md`; this playbook is the slower-changing procedure used to create it.
