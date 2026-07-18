# Prospective problem candidates

This directory is an editorial intake area for open research questions that may be suitable for AI-assisted research experiments. It is not a list of endorsed problems, a benchmark, or evidence that an AI attempt occurred.

The distinction matters:

- A file here records a prospective target and the evidence used to screen it.
- A canonical entry in [`problems/`](../../problems/README.md) describes an enduring problem after editorial review.
- An archive record documents an actual AI-assisted attempt and its outcome.

Prior AI work is useful context but is not an admission requirement. A candidate may be valuable precisely because no public AI attempt is known. Conversely, an existing AI attempt does not establish that the target is tractable, novel, or appropriate.

## Admission gates

A candidate can enter the active shortlist only when the available evidence supports all of these gates:

1. **Current status:** a dated scholarly, maintained, or authoritative source supports the claim that the exact target remains open. A famous open parent problem is not enough.
2. **Bounded target:** the proposed experiment has a precise success contract, non-solution boundary, and useful stopping rule.
3. **Independent verification:** a result can be checked by a public proof obligation, exact certificate, deterministic test, or reproducible artifact. Same-model agreement is not independent verification.
4. **Open inputs:** the required statement, baselines, data, and checking method do not depend on proprietary data, a closed verifier, a mutable private service, or a laboratory.
5. **Consumer-scale envelope:** a serious first experiment is plausible for an independent researcher with an advanced AI subscription and ordinary laptop, workstation, or modest rented compute. Industrial-scale search is not rescued by a cheap final checker.
6. **Reasoning leverage:** there is a credible role for decomposition, conjecture formation, invariant discovery, proof repair, algorithm design, or another reasoning-led method beyond undirected brute force.
7. **Research value:** success would be new relative to the recorded baseline, and an unsuccessful but well-instrumented attempt could still leave reusable counterexamples, reductions, route failures, or verifier improvements.

Safety, rights, privacy, and publication constraints can override a favorable technical assessment.

## Review states

- `pilot-ready`: the source and feasibility screen supports the gates, so a prompt-design dossier and baseline reproduction can begin. It is not ready to launch until its recorded promotion blockers are cleared.
- `strong-needs-scope`: the parent problem fits, but a source-backed bounded subproblem must be fixed before a run.
- `conditional`: promising, with a named status, verifier, or resource question still unresolved.
- `watch`: status or baseline is changing too quickly for a stable launch target.
- `defer`: interesting but currently fails a practical gate.
- `exclude`: a hard gate fails for the proposed use, with the reason retained to avoid rediscovery.

These states are editorial triage, not estimates of solution probability.

A multi-candidate scan can summarize leads and provisional ratings without instantiating every field in the schema. A candidate-specific dossier must complete the schema and justify every rating before promotion or launch.

## Workflow

1. Record searches and exclusions in [`research/search-log/`](../search-log/).
2. Screen each lead with the [candidate schema](SCHEMA.md), separating open-status confidence from verifier strength.
3. Recheck the exact target immediately before investing compute. Live tables and preprints can change between review and launch.
4. For a `pilot-ready` target, use the [problem selection and prompt-design playbook](../../playbooks/problem-selection-and-prompt-design.md) to create a problem-specific dossier outside this repository.
5. Promote a candidate to [`problems/`](../../problems/README.md) only after editorial review. Submit an actual attempt through the repository's contribution workflow rather than depositing a private run here.

## Current research notes

- [Initial repo-contextualized scan, 2026-07-18](2026-07-18-initial-scan.md)
- [Search log, 2026-07-18](../search-log/2026-07-18-open-problem-scan.md)
