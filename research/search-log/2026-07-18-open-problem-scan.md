# Open-problem candidate scan, 2026-07-18

**Cutoff:** 2026-07-18, America/Los_Angeles

**Repository commit used for context:** `12643299e57ebc6fb559e466e2b20b74d13f602e`

**Output:** [`research/problem-candidates/2026-07-18-initial-scan.md`](../problem-candidates/2026-07-18-initial-scan.md)

## Scope and claim

This was a bounded discovery and screening scan, not a near-exhaustive census of open research. Its purpose was to find a first set of open questions suitable for scrutiny under the Prompts for Progress mission and to record why attractive-looking leads fail that profile.

The target profile required:

- a precise and current open target;
- reasoning or agentic leverage beyond undirected brute force;
- public inputs and no proprietary dataset, laboratory, or closed service dependency;
- an independently checkable proof, certificate, construction, or test;
- a plausible first experiment for an independent researcher with an advanced AI subscription and ordinary local or modest rented compute; and
- a useful artifact trail even if the attempt does not solve the target.

Prior AI attempts were searched when relevant but were not required.

## Repository context reviewed first

The following local files controlled the rerun's interpretation:

- [`PROJECT_CHARTER.md`](../../PROJECT_CHARTER.md): empirical records of AI-assisted research attempts, visible uncertainty, provenance, attribution, failures, rights, and privacy.
- [`problems/README.md`](../../problems/README.md) and [`problems/SCHEMA.md`](../../problems/SCHEMA.md): an enduring problem is separate from an attempt and has a dated editorial status.
- [`research/README.md`](../README.md): retain excluded, duplicate, and unsupported candidates so searches remain auditable.
- [`playbooks/problem-selection-and-prompt-design.md`](../../playbooks/problem-selection-and-prompt-design.md): favor stable statements, independent verification, public inputs, reasoning leverage, exact claim boundaries, route ledgers, controls, stopping rules, and fresh prior-art review.
- The latest prompt-method synthesis: prefer a loop of precise specification, candidate artifact, external feedback, localized diagnosis, minimal repair, and full re-verification.

This context led to a new prospective intake directory rather than immediate canonical `problems/` entries or attempt `records/`.

## Search procedure

### Discovery query families

Searches combined the following phrases with `open`, `unsolved`, `current bounds`, `smallest unknown`, `construction`, `certificate`, `SAT`, `formal verification`, `2025`, and `2026`:

- verifiable open mathematics problems with short witness or certificate;
- exact combinatorial construction records and maintained tables;
- sorting networks, degree-diameter graphs, subspace codes, packings, Costas arrays, superpermutations, and Hadamard matrices;
- Černý synchronizing automata, union-closed sets, graceful trees, Erdős-Straus, Erdős-Szekeres, Lonely Runner, Hadwiger-Nelson, and Ramsey numbers;
- open computational-geometry problems with exact integer coordinates;
- public-data open problems in chemistry, materials science, biology, and physics that do not require a laboratory;
- benchmark and registry collections of programmatically verifiable open problems; and
- recent AI-assisted or search-based attempts, used only as baselines and method evidence.

Representative direct follow-ups included:

- `13 input sorting network 44 45 current bounds`
- `no three in line 71 142 current record 2026`
- `degree diameter 4 3 41 current record`
- `A_2(9,7) 65 66 subspace code`
- `D(33,5,2) 48 51 packing`
- `Costas array order 32 open 2025`
- `shortest superpermutation n=6 872 current`
- `Černý conjecture open classes survey 2026`
- `union-closed minimum counterexample 2025`
- `ES(7) first open case SAT 2026`
- `Lonely Runner thirteen runners current 2026`
- `Hadamard order 668 smallest unknown 2025`
- `open molecules public dataset compute requirements`

### Source selection and citation chasing

Search results were treated as leads. Claims in the shortlist were checked against primary papers, maintained specialist tables, or authoritative project pages where available. Citation chasing focused on:

1. the exact statement and baseline;
2. the date and mutability of the status claim;
3. whether a public artifact or checker exists;
4. generation cost versus checking cost;
5. nearby formal or certificate precedents; and
6. recent work that made an earlier proposed target stale.

One consequential freshness check concerned the Lonely Runner case. An April 2026 preprint reports a computer-assisted proof through 13 total runners, making 14 total runners the next case at this cutoff. The no-three-in-line live table, updated five days before the scan, also exposed order 71 as a gap even though order 72 has a construction.

## Source ledger

| Source | Date or version checked | What it supported | Screening outcome |
| --- | --- | --- | --- |
| [Dobbelaere sorting-network list](https://bertdobbelaere.github.io/sorting_networks.html) | accessed 2026-07-18 | 13-input network size 45 and lower bound 44; incumbent networks | PC-001 `pilot-ready`, subject to live recheck |
| [Harder, sorting networks](https://arxiv.org/abs/2012.04400) | v1 2020-12-08 | formally verified nearby optimality for 11 and 12 channels | checker and certificate precedent |
| [Flammenkamp no-three-in-line table](https://wwwhomes.uni-bielefeld.de/~achim/no3in/table.html) | updated 2026-07-13 | known `2n` configurations through 70 and at 72; no entry at 71 | PC-002 `conditional` on baseline artifacts and generation cost |
| [Geometry-Aware MCTS](https://arxiv.org/abs/2606.26399) | submitted 2026-06-24 | current computational-geometry search baseline and known sparse-reward difficulties | prior AI context for PC-002 |
| [Volkov, Černý result list](https://arxiv.org/abs/2508.15655) | v4 2026-01-13 | classes known and unresolved as of January 2026 | PC-003 needs a freshly selected exact subcase |
| [Černý reduction, European Journal of Combinatorics](https://doi.org/10.1016/j.ejc.2026.104388) | 2026 | later change to the class frontier | lowers confidence in any unsourced subclass target |
| [Bouchard, union-closed lattice formulation](https://arxiv.org/abs/2503.00277) | submitted 2025-03-01 | necessary conditions for a minimum counterexample | PC-004 proof and falsification family |
| [Erdős problem 242](https://www.erdosproblems.com/242) | edited 2026-05-07 | current open statement, verification through `10^18`, known reductions | PC-005 only after a precise modular target is fixed |
| [Xu, Erdős-Straus congruence classes](https://arxiv.org/abs/2605.23601) | submitted 2026-05-22 | very recent congruence work and high rediscovery risk | reinforces the scoping blocker |
| [UPC degree-diameter table](https://combgraph.upc.edu/en/resources/delta-d-problem) | accessed 2026-07-18 | listed record 41 for maximum degree 4 and diameter 3 | PC-006 conditional because visible update history is old |
| [Bayreuth `A_2(n,d)` table](https://subspacecodes.uni-bayreuth.de/table/2/) | accessed 2026-07-18 | row `d=7`, column `n=9` displayed the bound 65 to 66 | PC-015 conditional on preserving and reproducing the dynamic baseline |
| [Kovař and Zhang, packing](https://arxiv.org/abs/2603.29548) | submitted 2026-03-31 | Section 8 states `48 <= D(33,5,2) <= 51` and gives SAT exclusions near the upper frontier | PC-016 conditional on a versioned full-paper baseline audit |
| [Hadwiger-Nelson lower-bound context](https://link.springer.com/article/10.1007/s10801-025-01493-5) | published 2026 from 2025 manuscript | current plane chromatic lower-bound context | supports the open parent problem |
| [Parts, 509-vertex unit-distance graph](https://arxiv.org/abs/2010.12665) | v2 2022-06-28 | exact 509-vertex construction and graph-minimization method | PC-007 conditional record-improvement target |
| [Superdock, graceful trees](https://arxiv.org/abs/1403.1564) | 2014 | constructive labeling precedent | too stale to identify a 2026 open class |
| [Drakakis et al., Costas arrays](https://link.springer.com/article/10.1007/s10013-020-00392-5) | published 2020 | order 32 identified as the smallest unknown existence case | PC-009 deferred for freshness and generation cost |
| [OEIS A180632](https://oeis.org/A180632) and [Houston, superpermutations](https://arxiv.org/abs/1408.5108) | OEIS accessed 2026-07-18; paper submitted 2014 | current registry entry and the primary length-872 construction for six symbols | PC-010 deferred for generation cost and lower-bound audit |
| [Suksmono, Hadamard search](https://www.nature.com/articles/s41598-025-18778-1) | published 2025-09-26 | unresolved orders below 1000 and impractical classical resource estimate | PC-011 fails resource gate |
| [Dumitru, `ES(7)` SAT notes](https://arxiv.org/abs/2512.24061) | submitted 2025-12-30 | first open case, anchored UNSAT results, heavy-tailed runtime | PC-012 deferred |
| [Sungkawichai and Trakulthongchai, Lonely Runner](https://arxiv.org/abs/2604.23906) | submitted 2026-04-26 | computer-assisted proof for `k` equal to 10, 11, and 12 | PC-013 watch; old target was stale |
| [Angeltveit and McKay, `R(5,5)`](https://onlinelibrary.wiley.com/doi/full/10.1002/jgt.70029) | 2026 | modern upper bound 46 | PC-014 excluded for resource scale |
| [FrontierMath: Open Problems methodology](https://epoch.ai/frontiermath/open-problems/about) | updated 2026-01-27 | automatic-verification model, caveats, 14-problem pilot, fee-based verifier access | useful selection precedent; collection fails open-verifier default |
| [Open Molecules 2025](https://arxiv.org/abs/2505.08762) | v2 2026-03-04 | public dataset built from more than 100 million DFT calculations and billions of CPU core-hours | representative cross-domain compute exclusion |

## Candidate and rejection decisions

The hard gates were applied before triage ratings.

- **Advance to baseline reproduction:** PC-001 sorting networks.
- **Retain, but scope an exact subquestion first:** PC-003 Černý, PC-004 union-closed, and PC-005 Erdős-Straus.
- **Retain conditionally:** PC-002 no-three-in-line, PC-006 degree-diameter, PC-007 unit-distance graph minimization, PC-015 subspace codes, and PC-016 packings.
- **Defer for stale status or generation cost:** graceful trees, Costas order 32, order-6 superpermutations, Hadamard order 668, and `ES(7)`.
- **Watch a moving frontier:** Lonely Runner at 14 total runners.
- **Exclude from the approachable shortlist:** `R(5,5)`, closed-verifier dependencies without a public replacement, large scientific data or simulation campaigns, and one-sided counterexample hunts whose failure would be uninformative. Sampled wet-lab-dependent leads were not advanced, but that cross-domain search was not deep enough to support a blanket domain exclusion.

## Coverage and blind spots

This scan covered several certificate-rich areas of discrete mathematics, theoretical computer science, combinatorial geometry, number theory, and finite design. It also probed benchmark registries and public-data questions in chemistry, materials, biology, and physics.

Known limitations:

- The search was English-language and web-index dependent.
- No subject-matter expert or problem maintainer was contacted.
- Some full papers were reviewed through abstracts, HTML extracts, or maintained tables rather than a line-by-line specialist audit.
- Dynamic tables can change after the cutoff, and some do not expose a clear last-updated date.
- No candidate verifier or baseline artifact was executed in this scan.
- The non-mathematical search was a broad exclusion probe, not a deep discipline-by-discipline review. Public-data theoretical targets in economics, security, ecology, and computational biology remain a future search lane.
- A cheap checker can hide an infeasible generation problem. Resource ratings are provisional until a baseline reproduction is timed.
- Current open status does not establish novelty for a new lemma, construction, or bound. Every launch needs a fresh prior-art search and, where appropriate, expert review.

The scan therefore supports research prioritization, not claims that any candidate is unsolved today beyond the named cutoff or likely to be solved by the proposed workflow.

## Rights and retention

Only bibliographic facts, short paraphrases, and links are stored here. Source papers, benchmark prompts, datasets, and verifier code were not mirrored. Exclusions and uncertainty are retained so later scans can update rather than rediscover them.
