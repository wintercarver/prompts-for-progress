# Cross-domain prompting style research

This project is an initial repository-grounded analysis of prompting methods in the Prompts for Progress archive.

## Deliverables

- [Cross-domain prompting style research](cross-domain-prompting-style-research.md)
- [Standalone research prompt: exceed the archived 512-cap in F3^8](cap-set-513-research-prompt.md)
- [Case-level coding matrix](case-coding-matrix.csv)

The polished Word versions are in [`deliverables/`](deliverables/). The Markdown files are the canonical, reviewable source documents.

## Reproducibility

Run `python3 validate_embedded_prompt.py` to extract all five Python blocks from the standalone prompt into a temporary directory, reproduce the 512-point baseline, calibrate both checkers, and exercise the five precommitted affine transformations. Run `python3 build_documents.py` to regenerate the Word deliverables from the Markdown sources.

## Scope

The analysis uses the repository snapshot dated 2026-07-18. It treats prompt manifests and workflow stages as the units of analysis; it does not count the 131 generated JSONL artifact rows as 131 independent prompts. Findings are descriptive and hypothesis-generating, not causal estimates of prompt effectiveness.
