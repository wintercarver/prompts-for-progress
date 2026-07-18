# Cross-prompt methods syntheses

Use this track to answer the general-interest question: **what methods, styles, and validation patterns appear in prompting for scientific and mathematical research?** It is intentionally problem-agnostic. Its output should be readable as a review of the archive even when no later problem is selected.

Create one dated directory per synthesis: `research/syntheses/YYYY-MM-DD-short-topic/`.

## Expected artifacts

- `README.md` — snapshot metadata, scope, rights boundary, and reproducibility commands;
- `synthesis.md` — narrative review of methods, domains, dependencies, outcomes, and limitations;
- `case-matrix.csv` — a case-level evidence matrix with source paths and availability caveats;
- optional `evidence-register.md` — claims, supporting paths, and counterevidence; and
- optional `deliverables/` — rendered review copies; Markdown and CSV stay canonical.

For each method, distinguish: what the prompt actually says, what feedback or validator it uses, what outcome is reported, what dependencies it needs, and whether the archive provides any efficacy evidence. Treat this as descriptive synthesis, not a causal evaluation of models or prompts.

## Reusable prompt

```text
Using the Prompts for Progress repository at its current checked-out commit, write a dated, repository-grounded synthesis of methods in prompting for scientific and mathematical research. Do not select a target problem or design a new research prompt unless that is requested separately.

Before editing, inspect the worktree and create or switch to `kevin/[YYYY-MM-DD]-prompt-methods-synthesis`. Preserve unrelated changes. Create `research/syntheses/[YYYY-MM-DD]-[short-topic]/`, record the base commit, branch, date, and corpus snapshot in its README, and index it from `research/README.md`.

Analyze the archive at the prompt-manifest/case level and, where useful, by workflow stage. Do not count generated artifact rows, benchmark trajectories, or log records as independent prompts unless the repository explicitly treats them that way. Respect publication, provenance, and rights fields. Do not infer a missing feature from a partial, representative, or unavailable prompt record.

Produce a general-interest review that answers:

1. Which prompting and orchestration styles are visible across mathematical, scientific, software, and experimental domains?
2. What is distinctive about each style’s context, feedback loop, validators, dependencies, and failure mode?
3. Which methods plausibly transfer across domains, and why might the transfer fail?
4. What outcome evidence exists: deterministic verification, benchmark scoring, human expert review, simulated experiment, physical experiment, or only a narrative claim?
5. Which methods are absent, weakly enforced, or confounded by missing data, hidden prompts, same-model review, compute, or human intervention?

Create canonical `synthesis.md` and `case-matrix.csv`. Make the synthesis explicit about its evidence ladder: directly observed prompt feature; reported workflow or outcome; plausible design hypothesis; and unsupported inference. Include corpus counts, sampling/availability limits, rights limitations, and a section on dependencies such as datasets, solvers, compilers, laboratories, browsers, or expert review.

Use independent review passes where available: a taxonomy review and an adversarial evidence/claim-boundary review. Same-model reviewers are correlated readers, not independent validation. Validate matrix counts and source paths. Render a polished document only when requested, retaining the Markdown source as canonical.

Finish with the key methods, their evidence quality, their likely transfer targets, unresolved gaps, validation performed, and the exact files added. Commit only this synthesis and its index updates to the `kevin/` branch.
```
