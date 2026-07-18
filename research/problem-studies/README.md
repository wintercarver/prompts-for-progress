# Problem selection and prompt-design studies

Use this track for the compound practical question: **which problem is a good candidate for AI reasoning and agentic workflows, and what custom prompt should a fresh task use?** A study may either screen the repository’s problem catalog or work from a problem already chosen by the user.

This track may cite an existing cross-prompt synthesis, but it does not require a new full-corpus methods review. When no synthesis exists or it is stale, create a concise `evidence-brief.md` covering only the prompt methods relevant to the selected problem’s domain and verification model.

Create one dated directory per study: `research/problem-studies/YYYY-MM-DD-short-topic/`.

## Expected artifacts

- `README.md` — snapshot metadata, scope, selection mode, and reproducibility commands;
- `problem-screening.md` — candidate ledger and selection rationale, when selection is in scope;
- `evidence-brief.md` — relevant imported methods and why they fit this problem;
- `problem-[short-name]-dossier.md` — context, claim boundary, rationale, and full fresh-task prompt;
- validation scripts or certificate/checker artifacts when appropriate; and
- optional `deliverables/` — rendered review copies, with Markdown canonical.

## Reusable prompt

```text
Using the Prompts for Progress repository at its current checked-out commit, run a problem-selection and research-prompt design study.

Mode: [SCREEN THE ARCHIVE FOR A PROBLEM / DESIGN FOR THE PRESELECTED PROBLEM: name].

Before editing, inspect the worktree and create or switch to `kevin/[YYYY-MM-DD]-[short-topic]`. Preserve unrelated changes. Create `research/problem-studies/[YYYY-MM-DD]-[short-topic]/`, record the base commit, branch, date, and repository snapshot in its README, and index it from `research/README.md`.

If screening is requested, evaluate candidate problems against explicit criteria: a clear and stable statement; a realistically verifiable success result; an independently checkable certificate, test, or proof obligation where possible; no need for new data assets or specialized infrastructure; a plausible reasoning or agentic-workflow leverage point; and an honest current-status/novelty boundary. Keep every screened candidate in `problem-screening.md`, including exclusions and uncertainty.

If a problem is preselected, do not write a new whole-corpus methodology review. Instead, cite the relevant existing synthesis if available and create an `evidence-brief.md` that extracts only transferable methods needed for this problem’s domain, such as theorem-contract discipline, hypothesis portfolios, ambiguity audits, experimental controls, program-search fitness, or independent verification.

For every chosen problem, create `problem-[short-name]-dossier.md` with: the self-contained problem statement; available baseline and source/provenance; why it was selected; relevant methods imported from prior prompting work; required durable artifacts; exact success and non-success boundaries; verification plan; resource envelope; stopping rules; and the complete prompt for a fresh research task.

The fresh-task prompt must favor reasoning, explicit hypotheses, and falsification over unbounded computation. It should require an artifact or route ledger, use positive/negative controls where appropriate, distinguish same-model critique from independent verification, preserve a valid incumbent, and return a useful honest handoff if unresolved. Include license notices for embedded source-derived material. Do not claim current novelty, a record, or an upper bound without a dated, appropriate prior-art or expert check.

Use independent feasibility and adversarial prompt reviews where available. Execute embedded checkers, validate reproducibility artifacts, and render a polished dossier only when requested. Finish with the selected problem, evidence for its viability, exact validation performed, unresolved risks, and the files added. Commit only the study and its index updates to the `kevin/` branch.
```
