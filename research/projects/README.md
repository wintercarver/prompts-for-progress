# Compound research checkpoints

This directory is for intentionally combined iterations: a cross-prompt methods synthesis followed by one or more problem-selection and prompt-design applications. The 2026-07-18 project is the initial example.

Compound runs are useful when a fresh corpus review is itself part of the evidence for selecting a problem. They are not the default:

- use [`research/syntheses/`](../syntheses/README.md) for a problem-agnostic review of prompting methods; and
- use [`research/problem-studies/`](../problem-studies/README.md) for selecting a problem and designing a custom prompt without requiring a new full-corpus writeup.

Each compound directory uses `YYYY-MM-DD-short-topic/` and should preserve its snapshot metadata, canonical Markdown/CSV sources, reproducibility scripts, and optional rendered review copies in `deliverables/`.

The parent [`research/README.md`](../README.md) records workspace-wide principles. The sibling track READMEs contain the reusable prompts and their track-specific artifact conventions.
