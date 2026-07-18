# Prompts for Progress

Prompts for Progress is a provenance-focused archive of documented attempts to use AI systems to make original progress on research-level mathematical and scientific questions.

The project records successes, partial progress, disputed claims, rediscoveries, and unsuccessful documented attempts. Archiving a case does not endorse its claims.

## Current status

Private research phase. The initial corpus is being collected in deliberately lightweight Markdown before a general record schema is derived from the evidence.

## Repository layout

- `research/search-log/`: queries, sources, dates, and search coverage
- `research/candidates/`: raw candidate capture and triage
- `research/synthesis/`: cross-case analysis and schema notes
- `playbooks/`: reusable, slow-changing research procedures (not corpus prompts or run records)
- `records/`: vetted public records (added after research review)
- `problems/`: canonical research problems and collections linked to attempts
- `prompts/`: prompt manifests, source bundles, and the generated aggregate corpus
- `site/`: static site (added after the first approximately ten records)

See [PROJECT_CHARTER.md](PROJECT_CHARTER.md) for scope and principles.

The prompt corpus is generated as `prompts/corpus.jsonl` plus `prompts/corpus-index.json`. See [prompts/README.md](prompts/README.md) for completeness and rights labels.

Submission intake is designed around structured GitHub issues, agent-assisted evidence triage, and a human-controlled pull-request publication boundary. See [SUBMISSION_WORKFLOW.md](SUBMISSION_WORKFLOW.md).
