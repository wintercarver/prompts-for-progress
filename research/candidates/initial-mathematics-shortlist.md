# Initial mathematics shortlist

Research cutoff: 2026-07-16

Status: discovery and first-pass triage. Inclusion here is not endorsement. Dates and validation claims require record-level audit before publication.

## High-priority cases with prompt or workflow artifacts

| Candidate | First public date | Reported outcome | Prompt / run evidence | Validation evidence | Initial triage |
| --- | --- | --- | --- | --- | --- |
| Cycle Double Cover Conjecture | 2026-07 | Complete proof | [Full prompt](https://cdn.openai.com/pdf/04d1d1e4-bc75-476a-97cf-49055cd98d31/cdc_prompt.pdf); no full transcript located | [Lean project](https://github.com/openai/cdc-lean), expert audit still recent | Include with current-status caveat |
| Erdős planar unit-distance conjecture | 2026-05 | Disproof / new construction | Prompt and response in [proof paper](https://cdn.openai.com/pdf/74c24085-19b0-4534-9c90-465b8e29ad73/unit-distance-proof.pdf); [abridged run](https://cdn.openai.com/pdf/1625eff6-5ac1-40d8-b1db-5d5cf925de8b/unit-distance-cot.pdf) | Independent mathematician review in [companion remarks](https://cdn.openai.com/pdf/74c24085-19b0-4534-9c90-465b8e29ad73/unit-distance-remarks.pdf) | Include |
| BH-Gaussian conjecture / false-discovery rate | 2026-07 | Explicit counterexample | Full shared conversation linked in [preprint](https://arxiv.org/abs/2607.12208) | Author checking plus outward-rounded interval certificate | Include after artifact audit |
| Zeroth-order convex-optimization lower bound | 2026-07 | Closed dimension gap | [Repository, prompt, paper, and formalization](https://github.com/PhillipKerger/zero-order-bounds-lean-verification); [original chat](https://chatgpt.com/share/6a55aa50-b484-83ea-85c0-c7e7b4bda41c) | Lean formalization and author review; not peer reviewed | Include |
| Sabidussi compatibility conjecture | 2026-07 | Proof and strengthening | [Shared chat](https://chatgpt.com/share/6a5561e7-f15c-83ed-ab33-baee01734ceb); [paper](https://arxiv.org/abs/2607.13225) | [Lean project](https://github.com/gexahedron/sabidussi-lean) | Include after chat audit |
| Nesterov accelerated-gradient point convergence | 2025-07 / 2025-10 | Resolved long-open convergence question | Interaction narrative, but no complete transcript located | Human-authored [preprint](https://arxiv.org/abs/2510.23513) and [first-person account](https://openai.com/index/gpt-5-mathematical-discovery/) | Include as human–AI collaboration |
| OpenAI First Proof attempt collection | 2026-02 | Ten attempts with mixed and changing assessments | Prompt patterns in [full report](https://cdn.openai.com/pdf/26177a73-3b75-4828-8c91-e8f1cf27aaa0/oai_first_proof.pdf); no full raw logs | Expert feedback; one initially favored attempt later acknowledged incorrect | Include as parent collection with child attempts |
| Aletheia FirstProof campaign | 2026-02 | Six reported autonomous solutions | [Raw prompts and outputs](https://github.com/google-deepmind/superhuman/tree/main/aletheia); [paper](https://arxiv.org/abs/2602.21201) | Majority expert assessment, not formal verification | Include as campaign with child attempts |
| Anderson commutative-algebra conjecture | 2026-04 | Complete proof | Agent workflow in [technical report](https://frenzymath.com/conjecture_tech_report.pdf); exact prompts/logs not located | Approximately 19,000-line [Lean project](https://github.com/frenzymath/Anderson-Conjecture2) | Include after statement-faithfulness audit |
| Fel’s conjecture on numerical semigroups | 2026-02 | Complete proof | Minimal task and source statement preserved in [repository](https://github.com/AxiomMath/fel-polynomial); [paper](https://arxiv.org/abs/2602.03716) | Lean proof; publication status to verify | Include |
| Motivic class of genus-0 maps to a flag variety | 2026-01 | New theorem and counterexample to analogue | Representative prompts reproduced in [paper](https://arxiv.org/abs/2601.07222); no complete transcript | Human-authored proof and explicit responsibility | Include as iterative collaboration |
| “Claude’s Cycles” | 2026-02 to 2026-04 | Complete odd- and even-case resolution across linked attempts | Exact prompts, public proof chat, code, and multi-agent workflow in [revised Knuth note](https://www-cs-faculty.stanford.edu/~knuth/papers/claude-cycles.pdf) | [Odd-case Lean project](https://github.com/kim-em/KnuthClaudeLean/); Knuth-authored proof material | Include as linked research campaign, including failed intermediate even-case attempt |
| FunSearch cap sets and bin packing | 2023-12 | Improved constructions and heuristics | Program scaffold, evaluator, and evolving exemplars rather than a single prompt | Executable evaluation and peer-reviewed [Nature paper](https://www.nature.com/articles/s41586-023-06924-6) | Include as workflow case |
| Gilbert–Pollak / Steiner-ratio lower bound | 2026-01 | Certified improvement from 0.824 to 0.8559 | Exact prompt files and reproducible pipeline in [repository](https://github.com/keyisi2006/Steiner-Ratio); [paper](https://arxiv.org/abs/2601.22365) | Independently checkable computational certificate | Include as certified partial progress |
| AlphaEvolve mathematics suite | 2025-05 | Multiple improved constructions and algorithms | Prompt sampler and code skeleton described; selected artifacts available | Automated evaluators; individual results need separate audit | Parent campaign; split only when artifacts support it |
| AI-driven formal-proof-search campaign | 2026-05 | Erdős, OEIS, and other reported results | Architecture and coordination described in [paper](https://arxiv.org/abs/2605.22763) | Lean proofs; natural-language correspondence requires per-case checking | Parent campaign with child records |
| GPT-5 early-science mathematics collection | 2025-10 / 2025-11 | Mix of progress, critique, failure, and rediscovery | Selected prompts and examples in [report](https://cdn.openai.com/pdf/4a25f921-e4e0-479a-9b38-5367b47e8fd0/early-science-acceleration-experiments-with-gpt-5.pdf) | Named expert collaborators; deliberately heterogeneous | Excellent attempt collection |
| Robust density estimation under Wasserstein contamination | 2025-11 | Closed minimax-rate gap | Interaction described in [note](https://arxiv.org/abs/2511.18828); exact raw prompt status to inspect | Human-authored mathematical analysis | Research further |
| Gödel Test conjectures | 2025-09 | Mixed: alternate valid guarantee plus failures | Problems and outputs reported in [paper](https://arxiv.org/abs/2509.18383) | Authors evaluate deliberately novel conjectures | Include as paired success/failure campaign |

## Scope-edge case

[AI-guided discovery in pure mathematics](https://www.nature.com/articles/s41586-021-04086-x) used supervised machine learning and attribution methods to guide human conjecture formation and proofs in knot theory and representation theory. It is strong, peer-reviewed AI-assisted mathematics, but not an agent-prompt case. Keep it visible while the project decides whether the archive covers all AI-assisted workflows or focuses on promptable/agentic systems.

## Cross-cutting audit questions

- Is the exact initial prompt preserved, or only a representative reconstruction?
- Are follow-up instructions and human interventions visible?
- Does a formal proof match the intended natural-language statement?
- Was relevant prior art checked after the run?
- Is “autonomous” being used consistently?
- Is the credited model name public and stable?
- Does the record represent one run, several runs, or a campaign?
- What may be mirrored lawfully, and what should remain linked?
