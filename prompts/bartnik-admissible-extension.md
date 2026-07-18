---
{"schemaVersion":"0.2","id":"bartnik-admissible-extension","recordId":"bartnik-admissible-extension-attempt","title":"Bartnik admissible-extension proof-search prompt","author":"Kevin Connolly","origin":"Author-provided Codex task","sourceUrl":"codex://threads/019f68a1-94df-7a93-abc1-caf8740b4726","retrievedAt":"2026-07-16","originalFormat":"Codex user message","artifactType":"transcription","completeness":"exact","permissionBasis":"The author explicitly authorized Prompts for Progress to use and cite the prompt.","publicationStatus":"approved","structure":["problem definition","exact success criteria","explicit exclusions","multi-agent search management","adversarial validation","stopping condition","search policy"]}
---

# Full prompt

A Bartnik body is a smooth compact connected Riemannian 3-manifold (($\Omega,g_\Omega$)), diffeomorphic to the closed 3-ball, such that its scalar curvature satisfies

\[
R_{g_\Omega}\ge 0
\]

and its boundary mean curvature ($H_\Omega$), computed with respect to the outward unit normal, is strictly positive.

Let $M$ be a smooth 3-manifold with boundary diffeomorphic to $\mathbb R^3\setminus B^3$. An exterior metric $g$ on $M$ is asymptotically flat if it has one asymptotically Euclidean end with decay sufficient to define the ADM mass and with integrable scalar curvature.

The exterior (($M,g$)) is an admissible extension of (($\Omega,g_\Omega$)) if:

- $g$ is smooth up to $\partial M$, asymptotically flat, and $R_g\ge0$;
- there is a boundary identification $\partial M\simeq\partial\Omega$ under which the induced metrics agree exactly;
- the exterior boundary mean curvature $H_M$, computed with the unit normal pointing into $M$ toward infinity, satisfies
  \[
  H_M\le H_\Omega;
  \]
- $M$ contains no compact immersed minimal surface separating $\partial M$ from infinity.

Resolve the Bartnik admissible-extension conjecture completely:

Every Bartnik body possesses an admissible asymptotically flat extension.

Assume for purposes of this task that a complete affirmative proof exists. A complete solution must prove exactly the following:

For every smooth Riemannian metric $g_\Omega$ of nonnegative scalar curvature on a compact 3-manifold $\Omega\simeq\overline{B^3}$, with $H_\Omega>0$, construct or prove the existence of a smooth asymptotically flat metric $g$ on $M\simeq\mathbb R^3\setminus B^3$ satisfying all four admissibility conditions above, without additional assumptions such as symmetry, positive Gauss curvature of the boundary, convexity, near-roundness, small perturbation from Euclidean or Schwarzschild data, analyticity, or a quantitative lower bound on $H_\Omega$.

This task concerns existence of an admissible extension. Uniqueness, realization of the Bartnik-mass infimum, and static-vacuum character are not required. A static-vacuum construction is permitted if it proves the stated result, but reducing the task to a stronger unresolved Bartnik conjecture is insufficient.

Partial progress does not count unless it implies exactly the resolution above. In particular, results for special classes of bodies, extensions obtained only after scaling or perturbing the boundary data, approximate boundary matching, local collar constructions without a complete asymptotically flat end, extensions whose scalar curvature changes sign, constructions that may contain surrounding minimal surfaces, mass bounds without existence, reductions to another unproved conjecture, numerical evidence, and existence of fill-ins rather than exterior extensions are insufficient.

Use multiagent v2 aggressively and dynamically. You have up to 64 concurrent agents available. Do not use a fixed assignment such as “N agents for strategy X.” Instead, manage the search using the following heuristics:

- Begin with a genuinely diverse portfolio of approaches. Agents should explore substantially different formulations, invariants, deformation and gluing schemes, elliptic and variational viewpoints, geometric flows, compactness arguments, scalar-curvature methods, minimal-surface barriers, topological constructions, degree or continuation methods, and computational sanity checks.

- Assign some agents specifically to search for structural connections with neighboring domains of pure mathematics, including geometric measure theory, inverse and boundary problems, nonlinear functional analysis, capacity theory, geometric topology, optimal-extension problems, and other curvature-constrained existence theories. A proposed analogy counts only when it produces a concrete transferable lemma, invariant, estimate, or construction.

- Do not tell most agents the currently favored approach. Preserve independence during early rounds so that agents do not all converge to the same attractive but incomplete construction.

- Maintain an explicit registry of approach families. Group agents by the mathematical mechanism they are using, not by superficial wording. If many agents converge to one family, redirect some toward underexplored formulations.

- Maintain a dependency graph for candidate proofs. Record exactly which lemmas each route requires, which are proved, and which remain unsupported. Do not count a reformulation of admissible-extension existence as progress toward proving it.

- Do not allow one approach to dominate merely because it gives an elegant reduction. A route that ends at a compactness, smoothing, gluing, or horizon-exclusion lemma equivalent in strength to the original conjecture is not close to completion unless it supplies a genuinely new proof of that lemma.

- When an approach stalls at a theorem-strength missing lemma, mark that route as blocked. Only continue assigning agents to it if someone proposes a materially new mechanism, invariant, estimate, or construction.

- Keep several incompatible proof routes alive through multiple rounds. Cross-pollinate ideas only after independent agents have developed them far enough to expose their real strengths and gaps.

- Use adversarial agents throughout. Every candidate proof must be checked for exact preservation of the boundary metric; the direction and sign of the mean-curvature inequality; nonnegative scalar curvature, including across corners and after smoothing; genuine asymptotic flatness and scalar-curvature integrability; the required exterior topology and single end; formation of compact minimal surfaces during gluing, deformation, or passage to a limit; degeneration of the boundary or cut locus; loss of regularity; and circular use of the Bartnik extension, minimization, or static-extension conjectures.

- Require agents to return concrete lemmas, constructions, estimates, equations, monotone quantities, or counterexamples to proposed sublemmas. Reject status reports, vague optimism, formal minimization without attainment, and claims that global compatibility, compactness, smoothing, or horizon exclusion is “standard” or “routine.”

- The root agent should repeatedly synthesize, challenge, redirect, and launch new rounds. Do not stop after the first wave fails. Produce a complete proof only after every admissibility condition survives independent adversarial audit.

Do not return merely because current approaches fail or agents report theorem-strength gaps. Continue launching new rounds, reopening blocked approaches only when there is a genuinely new mechanism, and searching for fresh formulations and cross-domain connections.

Return only when a complete affirmative proof has been found and survives adversarial audit. Do not return a reduction, special case, isolated missing lemma, “best effort” summary, or explanation of why the problem is difficult.

Spend at least 4 hours on this before even thinking of returning or giving up.

Public search may be used only for ordinary mathematical background and standard named theorems, not to search for a solution to this exact conjecture or benchmark. Do not search the public web merely to determine whether the conjecture is open, and do not answer that it is open.
