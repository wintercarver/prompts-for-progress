# Initial repo-contextualized open-problem scan

**Research cutoff:** 2026-07-18

**Repository baseline:** `12643299e57ebc6fb559e466e2b20b74d13f602e`

**State:** prospective editorial research, not canonical problems or documented attempts

## Result in brief

This scan found one certificate-first construction target ready for baseline reproduction, three proof-oriented problem families worth scoping, five conditional construction leads, and seven watch, defer, or exclude cases. The strongest immediate target is a 44-comparator sorting network on 13 inputs. A 142-point no-three-in-line configuration on a 71 by 71 grid is equally crisp to verify but remains conditional because its baseline artifacts and generation cost have not been reproduced.

The shortlist is intentionally concentrated in discrete mathematics and theoretical computer science. Cross-domain searches found many valuable public scientific tasks, but the examples reviewed generally depended on large empirical datasets, simulation campaigns, laboratory validation, or domain-specific infrastructure. Those failures of fit are retained below instead of weakening the gates to manufacture domain diversity.

No score depends on whether an AI system has tried the problem before. Known AI attempts are recorded because they inform controls, baselines, and method selection.

## Triage table

Ratings are independent ordinal judgments from 1 to 5: `S` is exact-target status confidence, `V` verifier strength, `A` access and resource fit, `R` reasoning leverage, and `Y` useful attempt yield. They are not added into a solution probability or objective rank.

| ID | Bounded target or required scoping decision | S | V | A | R | Y | Disposition |
| --- | --- | ---: | ---: | ---: | ---: | ---: | --- |
| PC-001 | Construct a 13-input sorting network with 44 comparators | 5 | 5 | 4 | 4 | 4 | `pilot-ready` |
| PC-002 | Place 142 points on a 71 by 71 grid with no three collinear | 5 | 5 | 3 | 4 | 4 | `conditional` on artifacts and generation cost |
| PC-003 | Select and prove one named open Černý-class reset bound | 2 | 3 | 4 | 5 | 5 | `strong-needs-scope` |
| PC-004 | Select one source-backed union-closed reduction or minimum-counterexample lemma | 2 | 3 | 4 | 5 | 5 | `strong-needs-scope` |
| PC-005 | Define a genuinely new Erdős-Straus residue family or parametric identity | 1 | 3 | 4 | 5 | 4 | `strong-needs-scope` |
| PC-006 | Construct a graph on at least 42 vertices with maximum degree 4 and diameter 3 | 3 | 5 | 4 | 4 | 4 | `conditional` on a fresh record audit |
| PC-007 | Improve the size record for an exact 5-chromatic unit-distance graph | 4 | 4 | 3 | 4 | 4 | `conditional` on record and checker audit |
| PC-008 | Prove graceful labelings for a currently uncovered natural tree class | 1 | 4 | 4 | 4 | 4 | `defer` pending a current survey |
| PC-009 | Construct a Costas array of order 32 | 3 | 5 | 1 | 3 | 2 | `defer` for generation cost and status freshness |
| PC-010 | Construct an order-6 superpermutation shorter than 872 | 4 | 5 | 1 | 3 | 2 | `defer` for search cost |
| PC-011 | Construct a Hadamard matrix of order 668 | 5 | 5 | 1 | 5 | 3 | `defer` for resource fit |
| PC-012 | Prove `ES(7)=33`, or raise its lower bound with a realizable 33-point counterexample | 5 | 3 | 1 | 4 | 3 | `defer` for proof and compute scale |
| PC-013 | Extend the finite Lonely Runner result to 14 total runners | 5 | 3 | 1 | 4 | 3 | `watch` because the frontier is fast-moving |
| PC-014 | Improve the current bounds for `R(5,5)` | 5 | 4 | 1 | 3 | 2 | `exclude` from the approachable shortlist |
| PC-015 | Construct 66 binary subspaces for the reported `A_2(9,7)` gap | 3 | 5 | 3 | 4 | 4 | `conditional` on a table and artifact audit |
| PC-016 | Construct 49 five-subsets for the reported `D(33,5,2)` gap | 3 | 5 | 3 | 4 | 4 | `conditional` on a baseline audit |

## Leading certificate-first construction targets

### PC-001: 13-input sorting network of size 44

**Parent problem.** Determine the minimum number `S(n)` of compare-exchange elements in a sorting network on `n` inputs.

**Status and baseline.** The maintained [sorting-network list](https://bertdobbelaere.github.io/sorting_networks.html) reports a 45-comparator network for 13 inputs and the bound `44 <= S(13) <= 45`. Harder's [formally verified work for 11 and 12 channels](https://arxiv.org/abs/2012.04400) supplies a nearby proof and certificate precedent. Both sources were checked on 2026-07-18.

**Success contract.** Produce an ordered list of exactly 44 wire pairs. A small independent program must confirm that applying those comparators sorts every one of the `2^13` Boolean inputs. By the zero-one principle, this checks the sorting property for arbitrary totally ordered inputs. A live baseline check must still confirm that no 44-comparator network was published after the cutoff.

**Non-solutions.** A 45-comparator network, success on random inputs, an unverified heuristic score, or an improvement in depth alone does not meet this target. Failure to find a network does not prove that 45 is optimal.

**Resource and method fit.** Verification is light local computation. Generation is combinatorial but small enough to support counterexample-guided synthesis, symmetry reduction, mutation around the 45-comparator incumbent, SAT-guided local repair, and diverse route comparison on a workstation or modest rented compute. The prior-art density makes novelty checking essential.

**Prompt-method value.** This is a clean test of the repository's favored loop: freeze a valid incumbent, generate a minimally changed candidate, expose a counterexample input, localize the failed comparator region, repair, and re-run the full verifier. Positive and deliberately corrupted network controls are easy to construct.

**Promotion blockers.** Freeze a public checker and the current 45-comparator incumbent, reproduce both, recheck the live record, and set a generation budget and stopping rule.

### PC-002: no-three-in-line at grid order 71

**Parent problem.** Let `M(n)` be the maximum number of lattice points in an `n` by `n` grid with no three collinear.

**Status and baseline.** Achim Flammenkamp's maintained [configuration table](https://wwwhomes.uni-bielefeld.de/~achim/no3in/table.html), updated 2026-07-13, records configurations of size `2n` through 70 and at 72, but has no entry at 71. A June 2026 [geometry-aware search paper](https://arxiv.org/abs/2606.26399) describes the recent exact and AI-search frontier through 70. Since each row contains at most two chosen points, 142 is also the elementary upper bound for `M(71)`.

**Success contract.** Provide 142 distinct integer coordinate pairs in a fixed 71 by 71 coordinate convention. An independent exact-integer checker must confirm the bounds, uniqueness, and a nonzero cross-product determinant for every triple. Passing the checker would establish `M(71)=142`, subject to a final live-record and literature check.

**Non-solutions.** A smaller configuration, floating-point geometry, probabilistic sampling, or a candidate with only sampled triples checked is not success. A capped search that finds nothing gives no upper bound.

**Resource and method fit.** Checking is light, but generation may require sustained local or rented compute. The recent paper reports severe sparse-reward and scaling challenges, so the pilot should test structured representations, geometric conflict explanations, valid-incumbent preservation, and local repair under a hard compute cap. This is not an invitation to an open-ended GPU search.

**Prior AI context.** The 2026 geometry-aware search paper is directly relevant. That does not disqualify the target; it supplies a concrete baseline and known failure modes that a new prompt workflow must beat or illuminate.

**Promotion blockers.** Obtain the actual order-70 and order-72 artifacts, independently reproduce the checker, confirm the order-71 blank with the maintainer or another current source, and define a compute cap.

## Proof-oriented families that need a bounded target

### PC-003: Černý reset thresholds for a named open class

A synchronizing deterministic finite automaton with `n` states is conjectured to admit a reset word of length at most `(n-1)^2`. Volkov's [state-of-the-art list](https://arxiv.org/abs/2508.15655), revised 2026-01-13, separates automaton classes where the conjecture is known from classes where only a quadratic upper bound is known. A [July 2026 reduction](https://doi.org/10.1016/j.ejc.2026.104388) changed that class map again, which is why exact-target status confidence remains low until a specific subcase is re-audited.

The opportunity is not to rerun tiny automata and label the result research. Before launch, select one explicitly open class or intermediate lemma from the survey, record its best bound, and define the proposed improvement. Candidate automata and reset words are exactly checkable; a universal class theorem still requires a rigorous proof, formalization, or expert review. Small exhaustive searches are valuable as falsifiers and negative-example generators, not as a substitute for the theorem.

This family fits hypothesis led decomposition, extremal-example mining, invariant discovery, and minimal proof repair. Its main blocker is choosing a subquestion narrow enough for a consumer-scale study and new enough to matter.

### PC-004: union-closed minimum-counterexample reductions

Frankl's union-closed sets conjecture says that every finite nontrivial union-closed family contains an element appearing in at least half its sets. Bouchard's [2025 lattice formulation](https://arxiv.org/abs/2503.00277) derives necessary conditions for a minimum-size counterexample.

A viable run should select one source-posed structural condition, reduction, or strengthening and state exactly what would count as progress. Finite families can be checked for union closure and element frequencies, and SAT or exhaustive search can rapidly falsify overstrong lemmas. Surviving a finite search range is not a proof. The best artifact set would combine a ledger of conjectured lemmas, minimal counterexamples to failed lemmas, and a proof or formal proof obligation for any surviving claim.

This is a strong prompt-method candidate because failed conjectures remain useful and because different proof routes can be compared. It is not `pilot-ready` until the exact lemma, known finite-enumeration frontier, and novelty boundary are frozen.

### PC-005: a bounded Erdős-Straus modular advance

The [maintained Erdős problem entry](https://www.erdosproblems.com/242), last edited 2026-05-07, records the conjecture that `4/n` is a sum of three positive unit fractions for every `n > 2`, verification through `10^18`, and several known congruence reductions.

The full conjecture is too broad for an initial prompt. A suitable target would be one new infinite congruence family, parametric identity, or rigorously quantified reduction in the unresolved residue set, chosen only after a source-locked prior-art audit. Symbolic substitution and exact modular checks can validate a proposed identity, while theorem-level novelty still needs literature and expert review. Extending finite verification alone is excluded because it is compute-led and adds weak explanatory value.

This family has high reasoning leverage but also an unusually dense rediscovery risk. It should be scoped only after PC-001 establishes the executable research workflow.

## Conditional construction leads

### PC-006: degree-diameter graph at `(4,3)`

The Universitat Politècnica de Catalunya's [degree-diameter table](https://combgraph.upc.edu/en/resources/delta-d-problem) lists 41 vertices for maximum degree 4 and diameter 3. A 42-vertex graph would be a direct record improvement if that baseline is still current. The artifact is an adjacency list; an independent checker can verify simplicity, vertex count, maximum degree, connectivity, and all-pairs distance at most 3.

The target is attractive because generation can combine algebraic constructions, graph lifts, local search, symmetry, and counterexample-guided repair while verification remains trivial. The table's visible update history is old, however. A current specialist source and record artifact must be located before this moves beyond `conditional`.

### PC-007: smaller exact 5-chromatic unit-distance graph

The Hadwiger-Nelson problem asks for the chromatic number of the plane under the rule that points at unit distance receive different colors. A recent [Journal of Algebraic Combinatorics paper](https://link.springer.com/article/10.1007/s10801-025-01493-5) retains the lower bound 5, while de Grey's [original construction](https://arxiv.org/abs/1804.02385) provides the breakthrough precedent.

A bounded construction target is a smaller exact-coordinate unit-distance graph that is not 4-colorable, measured against a freshly audited vertex record. The artifact must also provide a proper 5-coloring if the claim is that the graph is exactly 5-chromatic. Verification must check every claimed unit edge in exact algebraic arithmetic, validate the 5-coloring, and validate non-4-colorability with a proof-producing SAT or exhaustive certificate plus an independent checker. An ordinary failed coloring search is insufficient. A smaller obstruction would be a meaningful partial result, not a solution of the full plane-coloring problem.

This remains `conditional` because record definitions, coordinate encodings, and proof-certificate size need a specialist audit. It is distinct from the repository's existing maximum-unit-distances problem.

### PC-015: binary subspace code at the reported `A_2(9,7)` gap

The row `d=7`, column `n=9` in the University of Bayreuth's maintained [`A_2(n,d)` table](https://subspacecodes.uni-bayreuth.de/table/2/) displayed the narrow bound 65 to 66 when checked on 2026-07-18. If that dynamic entry and its notation are independently confirmed, a collection of 66 subspaces of `F_2^9` with pairwise subspace distance at least 7 would settle the value.

The artifact can be represented by reduced row-echelon basis matrices. Exact binary Gaussian elimination can check dimensions, duplicates, and every pairwise distance. The construction invites finite-geometry reasoning, orbit methods, and SAT or clique search. Before promotion, capture the exact parameterized table response, reproduce the 65-code baseline, confirm whether mixed dimensions are allowed, and estimate the clique-search resource envelope.

### PC-016: a 49-block packing for `D(33,5,2)`

Section 8 of a March 2026 [SAT-based packing paper](https://arxiv.org/abs/2603.29548) states that the open `D(33,5,2)` problem lies between 48 and 51 and rules out natural leave structures near the upper frontier. The numerical baseline should still be confirmed from the versioned full paper or a maintained design table before launch.

Conditional on that audit, a bounded success target is 49 distinct five-subsets of a 33-element ground set such that no pair occurs in more than one block. A checker only needs to enumerate the ten pairs in each block. Structured exact-cover reasoning and leave-graph analysis could provide leverage beyond random packing, but the recent SAT result also warns that neighboring instances can be computationally difficult.

## Deferred, watched, and excluded targets

| ID | Evidence at the cutoff | Reason not to launch |
| --- | --- | --- |
| PC-008 | A 2014 [graceful-tree construction paper](https://arxiv.org/abs/1403.1564) shows the quality of the witness model. | The source is too old for 2026 scoping, and several natural candidate classes overlap known work. Obtain a current survey first. |
| PC-009 | A 2020 [Costas-array paper](https://link.springer.com/article/10.1007/s10013-020-00392-5) identifies order 32 as the smallest unresolved existence case. | The status source needs refreshing, and prior enumeration consumed enormous distributed CPU time. A cheap checker does not make generation consumer-scale. |
| PC-010 | The [current OEIS entry](https://oeis.org/A180632) retains Houston's [872-symbol construction](https://arxiv.org/abs/1408.5108) as the order-6 upper bound. | Prior searches report extreme compute without a shorter result. The generation problem is search-dominated and the exact current lower bound needs a scholarly audit. |
| PC-011 | A 2025 [Scientific Reports article](https://www.nature.com/articles/s41598-025-18778-1) lists 668, 716, and 892 as the unresolved orders below 1000. | The same paper says present classical resources are insufficient in practical time and estimates specialized quantum requirements. Verification is easy; discovery is not accessible. |
| PC-012 | A December 2025 [SAT study](https://arxiv.org/abs/2512.24061) identifies `ES(7)` as the first open Erdős-Szekeres case and reports heavy-tailed computation. | Proving `ES(7)=33` requires an exhaustive upper-bound argument that rules out every relevant 33-point counterexample. A realizable 33-point counterexample would instead prove only `ES(7) >= 34`. Either route is beyond a first consumer pilot. |
| PC-013 | An April 2026 [computer-assisted proof](https://arxiv.org/abs/2604.23906) reaches `k=12`, or 13 total runners. | The next finite case is moving quickly, specialist, and compute-heavy. Recheck before any scoping work. |
| PC-014 | The 2026 paper [R(5,5) <= 46](https://onlinelibrary.wiley.com/doi/full/10.1002/jgt.70029) establishes the modern upper-bound computation. | The current `43 <= R(5,5) <= 46` gap is a major specialized computation. It fails the intended resource envelope even though graph certificates are conceptually clear. |

## Collection and cross-domain non-advances

| Source or lead family | Decision | Reason |
| --- | --- | --- |
| [FrontierMath: Open Problems](https://epoch.ai/frontiermath/open-problems/about) | Do not import as active candidates by default. | Its automatic-verification philosophy is relevant, but the benchmark offers verifier access for a fee. A candidate would need a separately public, independently reproduced checker and public baseline artifacts. |
| [Open Molecules 2025](https://arxiv.org/abs/2505.08762) and related molecular benchmarks | Exclude from this intake profile. | The data are public, but the source describes more than 100 million DFT calculations and billions of CPU core-hours. The task class is data and compute dominated. |
| Experimental biology, chemistry, and materials discovery leads sampled in this scan | Not advanced in this pass. | The sampled leads required wet-lab replication, new measurement, or high-fidelity simulation. A deeper domain-specific search may find public synthetic or archival targets that do pass the gates. |
| Counterexample-only targets to conjectures believed true | Exclude as first experiments. | A witness would be decisive, but a capped failure would say almost nothing and leave little diagnostic evidence. |

These decisions are profile-specific and limited by the depth of this scan. They are not judgments about scientific importance or whether AI can contribute in those domains.

## Recommended sequence

1. **Reproduce PC-001's baseline and checker.** Use known 12- and 13-input networks plus deliberately corrupted controls. Freeze the live record and resource cap.
2. **Run PC-001 as the first construction pilot.** It best combines an exact success certificate, manageable checker, valid incumbent, localized counterexamples, and minimal-repair loop.
3. **Scope PC-003 or PC-004 as a contrasting proof pilot.** Choose one source-backed lemma only after mapping known results and finite-search baselines.
4. **Use PC-002 as the next certificate-search stress test.** Proceed only if the prior artifacts and order-71 status are independently confirmed and the compute budget is fixed.
5. **Keep every negative route and exclusion.** A useful attempt should improve the route ledger or falsifier corpus even when it produces no publishable result.

Promotion into [`problems/`](../../problems/README.md) should wait for editorial review. Any actual run belongs in a separate workspace until it meets the repository's documented-attempt and contribution requirements.
