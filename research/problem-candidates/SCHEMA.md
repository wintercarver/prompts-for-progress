# Prospective problem candidate schema, v0.1

This schema is intentionally separate from the canonical [`problems/SCHEMA.md`](../../problems/SCHEMA.md). It records incomplete editorial research and should preserve uncertainty rather than force promotion-quality metadata.

## Required fields

```json
{
  "schemaVersion": "0.1",
  "candidateId": "PC-000",
  "title": "Short candidate title",
  "parentProblem": "Canonical parent problem, if any",
  "kind": "construction | bound | counterexample | theorem | algorithm | formalization",
  "domain": "mathematics | computer-science | ...",
  "field": "Specific field",
  "boundedTarget": "Exact result requested from a first experiment",
  "statusAsOf": "YYYY-MM-DD",
  "statusEvidence": [
    {
      "url": "https://...",
      "sourceDate": "YYYY-MM-DD or YYYY-MM",
      "supports": "Exact claim supported by this source"
    }
  ],
  "baseline": "Best known result or obstruction relevant to the target",
  "successContract": "Artifact and properties that count as success",
  "nonSolutions": ["Outputs or observations that do not count as progress"],
  "verificationPlan": "Independent checks and required certificates",
  "publicInputs": "Public statements, data, code, and licenses or access notes",
  "resourceEnvelope": "Expected hardware, software, time, and cost for a first run",
  "reasoningLeverageRationale": "Why a reasoning-led workflow could add value",
  "priorArtRisks": ["Novelty, saturation, or hidden-baseline risks"],
  "priorAIAttempts": "Known, none found, or not yet searched; never a gate",
  "ratings": {
    "statusConfidence": 1,
    "verifierStrength": 1,
    "accessFit": 1,
    "reasoningLeverage": 1,
    "attemptYield": 1
  },
  "ratingRationale": {
    "statusConfidence": "Why this rating follows from the exact-target evidence",
    "verifierStrength": "Why this rating follows from the proposed checks",
    "accessFit": "Why this rating follows from generation and checking costs",
    "reasoningLeverage": "Why this rating follows from the available methods",
    "attemptYield": "Why this rating follows from the planned artifacts and stopping rule"
  },
  "disposition": "pilot-ready | strong-needs-scope | conditional | watch | defer | exclude",
  "promotionBlockers": ["Questions that must be resolved before promotion"],
  "lastReviewed": "YYYY-MM-DD"
}
```

## Independent triage ratings

Each rating is ordinal from 1 to 5 and must be justified in `ratingRationale`. Do not add the numbers into a purported probability or objective fit score. A discovery scan may show provisional ratings compactly, but a candidate-specific dossier must complete the rationale before promotion or launch.

- `statusConfidence`: confidence that the exact bounded target, not merely its parent, is open at the cutoff date.
- `verifierStrength`: how decisive, public, reproducible, and independent the proposed check is.
- `accessFit`: fit to the intended independent-researcher resource envelope. A 5 is light local work; a 1 requires specialized or industrial resources.
- `reasoningLeverage`: credible opportunity for structured reasoning rather than scale alone.
- `attemptYield`: chance that a well-run non-solution still produces interpretable, reusable evidence.

Ratings compare review priorities. They do not measure mathematical importance, difficulty, or probability of success.

## Evidence rules

- Record what each citation supports. A verifier paper may not support current open status, and a status table may not establish novelty.
- Prefer a recent primary paper or a maintained specialist registry. When only a stale or secondary source is available, lower `statusConfidence` and name the fresh-audit blocker.
- Separate a verifiable witness from verifiable novelty. A checker can validate an object without proving that the object improves the literature.
- Treat exhaustive computation, SAT, and formal proof as methods, not automatic evidence of consumer feasibility. Record generation cost and checking cost separately.
- For proof-oriented targets, specify which lemmas can be falsified computationally and which claims still require expert or formal review.
- Record prior AI attempts when found, but use them as methodological evidence rather than an inclusion gate.

## Promotion checklist

Before creating a canonical problem record or launching a public attempt:

1. Re-run the status and prior-art search at a named cutoff.
2. Freeze the exact statement, baseline artifacts, checker version, and resource cap.
3. Validate the checker on positive, negative, malformed, and boundary controls.
4. Define success, partial progress, reproduction, rediscovery, and non-success separately.
5. Identify any expert review or formalization still required after the executable checks pass.
6. Preserve the prompt, route ledger, candidate artifacts, validation transcript, and stopping decision if an attempt proceeds.
