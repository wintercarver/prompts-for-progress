# Prompt-methods synthesis series

This is the archive's periodic, problem-agnostic review of methods, styles, feedback loops, and validation patterns found across its documented work. Each run is a dated snapshot, not a new corpus record and not a claim that a prompt method caused a reported outcome.

Use the stable [cross-prompt methods synthesis playbook](../../../playbooks/cross-prompt-methods-synthesis.md) to conduct a run. The canonical current reference is [LATEST.md](LATEST.md); it points to the newest dated summary.

## When to run

The maintainer decides when a new synthesis is warranted. Useful triggers include a merged record that adds a materially different successful workflow or validation pattern, or roughly ten newly merged **records/cases**. Do not trigger solely from generated corpus rows, logs, or implementation artifacts: they are not independent prompts.

## Dated-run convention

Create `summaries/YYYY-MM-DD/` with:

- `README.md` — scope, corpus snapshot, rights boundary, and validation notes;
- `summary.md` — the canonical narrative review; and
- `case-matrix.csv` — case-level coding and evidence paths.

Optional evidence registers or rendered copies may accompany a run, but Markdown and CSV remain canonical. A run may use private or restricted materials only for an explicitly internal analysis; it must not be presented as a public release until its rights boundary permits that.
