# Jacobian Conjecture Prompt

## Current task statement

Let \(n \geq 1\). A polynomial map \(F : \mathbb{C}^n \to \mathbb{C}^n\) is a map

\[
F(x) = \bigl(F_1(x), \ldots, F_n(x)\bigr),
\]

where each \(F_i \in \mathbb{C}[x_1, \ldots, x_n]\). Its Jacobian determinant is

\[
\det JF = \det \left(\frac{\partial F_i}{\partial x_j}\right).
\]

Resolve the Jacobian Conjecture completely:

Every polynomial map \(F : \mathbb{C}^n \to \mathbb{C}^n\) with nonzero constant Jacobian determinant has a polynomial inverse.

You must either:

1. Prove that for every \(n \geq 1\), if \(\det JF \in \mathbb{C}^{\times}\), then there exists a polynomial map \(G : \mathbb{C}^n \to \mathbb{C}^n\) such that \(G \circ F = \operatorname{id}_{\mathbb{C}^n}\) and \(F \circ G = \operatorname{id}_{\mathbb{C}^n}\);
2. Disprove the conjecture by giving an explicit polynomial map \(F : \mathbb{C}^n \to \mathbb{C}^n\) with nonzero constant Jacobian determinant and proving rigorously that \(F\) has no polynomial inverse.

A complete disproof must include an explicit dimension \(n\), explicit coordinate polynomials \(F_1, \ldots, F_n\), an exact computation showing \(\det JF \in \mathbb{C}^{\times}\), and a complete proof that no polynomial inverse exists.

Partial progress does not count unless it implies exactly one of the two resolutions above. In particular, proofs only in dimension 1 or 2, bounded-degree cases, homogeneous or cubic reductions without completing the reduced case, formal power-series inverses, local analytic inverses, injectivity assumptions, birationality assumptions, reductions to another unproved conjecture, computational verification through any fixed dimension or degree, or candidate counterexamples without a complete noninvertibility proof are insufficient.

## Search and coordination requirements

Use multiagent v2 aggressively and dynamically. You have up to 64 concurrent agents available. Do not use a fixed assignment such as "N agents for strategy X." Instead, manage the search using the following heuristics:

- Begin with a genuinely diverse portfolio of proof and counterexample approaches. Agents should explore algebraic geometry, commutative algebra, polynomial automorphism theory, degree growth, formal inverse expansions, cubic homogeneous reductions, differential forms, étale morphisms, invariant theory, valuations, Newton polyhedra, elimination theory, locally nilpotent derivations, topology, model theory, and computational sanity checks.
- Preserve independence during early rounds. Do not tell most agents the currently favored proof or counterexample strategy.
- Maintain an explicit registry of approach families. Group agents by the mathematical idea they are using, not by superficial wording. Redirect agents when too many converge to the same incomplete route.
- Do not allow one approach to dominate merely because it gives elegant reductions. A route that ends at a lemma equivalent in strength to the original conjecture is not close to completion unless it supplies a genuinely new proof of that lemma.
- When an approach stalls at a theorem-strength missing lemma, mark that route as blocked. Continue only if someone proposes a materially new mechanism, invariant, construction, or obstruction.
- Keep several incompatible proof and disproof routes alive through multiple rounds. Cross-pollinate ideas only after independent agents have exposed the real strengths and gaps of their approaches.
- Use adversarial agents throughout. Every affirmative proof must be checked for confusion between formal and polynomial inverses, local and global invertibility, analytic and algebraic arguments, hidden injectivity or surjectivity assumptions, characteristic-zero dependence, degree bounds, denominators introduced by inversion, unjustified convergence claims, nonreversible reductions, and circular use of statements equivalent to the Jacobian Conjecture.
- Every proposed counterexample must be checked for exact Jacobian determinant computation, hidden polynomial inverses, birational inverses, coordinate changes that trivialize it, numerical artifacts, characteristic-\(p\) phenomena mistakenly imported into \(\mathbb{C}\), and incomplete noninvertibility arguments.
- Require agents to return concrete lemmas, constructions, equations, degree estimates, explicit candidate maps, or counterexamples to proposed sublemmas. Reject status reports, vague optimism, and claims that an unproved global compatibility statement is "routine."
- The root agent should repeatedly synthesize, challenge, redirect, and launch new rounds. Do not stop after the first wave fails.

Return only when either a complete affirmative proof or a complete explicit counterexample survives adversarial audit. Do not return a reduction, partial result, isolated missing lemma, "best effort" summary, or explanation of why the problem is difficult.

Spend at least 8 hours on this before even thinking of returning or giving up.

Public search may be used only for ordinary mathematical background or standard named theorems, not to search for a solution to this exact conjecture or benchmark. Do not search the public web merely to determine whether the Jacobian Conjecture is open, and do not answer that it is open.
