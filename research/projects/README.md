# Research project checkpoints

This directory holds dated, repository-grounded research iterations. Each project is a snapshot of a question asked against a particular repository state, rather than a claim that its conclusions apply permanently to later versions of the archive.

## Draft convention

Create one directory per iteration using `YYYY-MM-DD-short-topic/`. It should contain:

- `README.md` — scope, repository snapshot date, deliverable index, and reproducibility commands;
- a narrative synthesis — the cross-case interpretation and its evidence boundaries;
- a structured evidence file — usually a case matrix or screening ledger;
- one dossier per selected application — problem context, selection rationale, and the full reusable prompt;
- any small scripts needed to regenerate or verify the iteration; and
- `deliverables/` — rendered review copies, while Markdown/CSV remain the canonical sources.

The parent [`research/README.md`](../README.md) records the workspace-wide principles; each dated directory records what was known, selected, and attempted at that point in time.

## Reusable cross-prompt research iteration

Use the following prompt as the starting point for a repeatable, dated pass over the archive. Replace the bracketed values before running it.

```text
Using the Prompts for Progress repository at its current checked-out commit, run a repository-grounded research iteration on [TOPIC OR RESEARCH QUESTION].

Start safely and make the iteration auditable:

1. Inspect the worktree before editing. Create or switch to a new branch named `kevin/[YYYY-MM-DD]-[short-topic]` before adding research artifacts. Preserve unrelated dirty files; do not stage or alter them. Record the base commit, branch, date, and repository snapshot in the project README.
2. Create `research/projects/[YYYY-MM-DD]-[short-topic]/`. Treat Markdown and CSV as canonical sources; use `deliverables/` only for rendered review copies. Update `research/README.md` to index the project.
3. Use the prompt manifest/case and, when helpful, workflow stage as the unit of analysis. Do not treat generated artifact rows, benchmark trajectories, or log entries as independent prompts unless the repository clearly says they are.
4. Respect provenance and rights fields. Distinguish public/approved material from private or rights-review material. Do not infer absent prompt features from unavailable or representative records, and flag any public-release limitation.

Research questions:

1. Identify prompting methods or orchestration styles that are particularly visible in one domain and could plausibly transfer to another domain. Explain the transfer mechanism and its failure mode; do not call a method “unique” unless the evidence supports that stronger claim.
2. Identify generally promising methods that prior attempts omitted, only partly enforced, or could benefit from methods observed elsewhere. Separate directly observed facts from design hypotheses.
3. Screen archived known or open problems for one or more applications. Select only problems with a clear statement, a realistic independently verifiable result, and no need for new data assets or specialized infrastructure. Separate certificate validity from current novelty; a current-status search is required before any global novelty or record claim.

Use independent review passes where available: one for the corpus taxonomy, one for feasibility and problem selection, and one adversarial review of the conclusions and proposed prompt. Treat same-model reviewers as correlated workers, not independent scientific or mathematical validation.

Create these canonical artifacts:

- `README.md` — scope, snapshot metadata, deliverable index, evidence boundaries, and reproducibility commands.
- `synthesis.md` — corpus census; method; domain profiles; transferable-method matrix; underused-method analysis; limitations; and an explicit distinction between descriptive findings and causal claims.
- `case-matrix.csv` — one row per case with source paths, prompt availability/completeness, domain, observed style, in-loop feedback, post-run validation, candidate transfer, and caveats.
- `problem-screening.md` — all screened candidate problems, inclusion/exclusion reasoning, and the chosen problem or problems.
- `problem-[short-name]-dossier.md` for each selected problem — self-contained problem context, selection rationale, source/provenance notes, claim boundary, and the full prompt to run in a fresh task.
- small validation or rendering scripts only when they make the iteration reproducible.

Each selected-problem prompt must favor reasoning and falsification over unbounded computation. It should state exact success criteria; required durable artifacts; positive and negative controls where appropriate; independent or separately implemented verification; precommitted stopping rules and a resource envelope; a route or hypothesis ledger; and an honest fallback handoff if the target is not resolved. Include source-license notices whenever embedded source-derived code or text requires them.

Produce a polished document version of `synthesis.md` and of every selected-problem dossier, while keeping the Markdown source canonical. Validate the case-matrix counts, execute any embedded verifier/checker code, render and visually inspect documents, and run relevant document-accessibility checks.

Finish by summarizing the main findings, selected applications, validation performed, unresolved limitations, and the exact files added. Commit only the iteration artifacts and their index updates to the `kevin/` branch; leave unrelated worktree changes untouched.
```

This prompt deliberately asks for an evidence-backed **research checkpoint**, not a generalized scorecard for model quality. Repeated runs can therefore be compared as dated snapshots while preserving their different corpus states, selection choices, and claim boundaries.
