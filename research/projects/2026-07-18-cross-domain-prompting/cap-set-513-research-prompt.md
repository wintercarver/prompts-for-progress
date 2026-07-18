# Standalone Research Prompt: Exceed the Archived 512-Cap in \(\mathbb F_3^8\)

**Prompt dossier · Prompts for Progress · 18 July 2026**

## Problem context

A cap set in \(\mathbb F_3^n\) is a set containing no nontrivial three-term arithmetic progression. Equivalently, it has no three distinct points \(x,y,z\) with \(x+y+z=0\) coordinatewise modulo 3.

The repository's FunSearch artifact preserves a valid 512-point construction in dimension 8, improving the previously recorded 496-point construction. The archive frames construction of still larger cap sets as a continuing research direction. This dossier operationalizes that archive-relative direction as a finite challenge:

> Construct a valid \(S\subseteq\mathbb F_3^8\) with \(|S|\ge 513\), or produce a rigorous proof that no such set exists.

The construction outcome is the primary target because it is cheaply and independently verifiable. A standard-library Python checker can validate a 513-point certificate in seconds and compute a stable digest. No dataset, attachment, live service, laboratory, solver license, GPU, or specialist software is required.

This is an **archive-relative** target. A 513-point certificate would objectively improve the construction preserved in this repository. Before claiming global novelty, the runner must perform a separate current prior-art check.

## Why this problem was selected

All 23 top-level problem files were screened; collection files were not decomposed into every possible child statement. Cap sets were the strongest match to the requested constraints:

- the mathematical object and score are exact;
- success can be represented as a finite certificate;
- verification is independent of the generating argument;
- the archived baseline and generator can be embedded directly;
- local search, algebraic reasoning, and program search are possible on ordinary CPU hardware;
- the prior workflow supplies a clear baseline but no standalone natural-language prompt for a fresh research agent.

The Bartnik admissible-extension conjecture was the only other plausible candidate. Its statement is self-contained, but a claimed proof requires expert geometric-analysis review and its prior prompt already used a broad multi-agent portfolio and detailed adversarial audit. The cap-set challenge offers a much cleaner first experiment in prompt-method transfer.

## Prompt design rationale

The prompt below combines methods observed across the archive:

- **Mathematics:** exact definitions, success criteria, and non-claim boundaries.
- **ACRA chemistry:** preflight ambiguity/executability audit and defect-localized repair.
- **A-Lab and biomedical campaigns:** positive/negative controls, decisive tests, explicit result-dependent decisions, and outcome memory.
- **SciExplorer:** competing hypotheses, extreme/edge-case probes, and a survivor ledger.
- **FunSearch:** executable fitness, diverse search islands, incumbent retention, and deterministic certificates.
- **Virtual Lab:** role separation, explicit dissent, synthesis with provenance, and critic-to-repair separation.
- **AlphaProof:** validator-gated handoffs that always preserve a valid checkpoint.
- **Lossfunk:** route cards with inputs, outputs, thresholds, resource bounds, dependencies, and artifact paths.

It also corrects recurring weaknesses: it does not assume a 513-cap exists; it separates validity from novelty; it precommits checker transformations and calibration; it treats same-model critics as correlated; it makes failure memory durable; and it returns reusable artifacts if the target is not reached.

## How to use

Copy the full prompt between the markers into a new Codex task. Run it in a writable workspace with Python 3 available. No repository files are required because the baseline and verifier are included in the prompt.

---

## FULL PROMPT — BEGIN COPY

You are the research lead for a self-contained extremal-combinatorics experiment. Your job is to resolve a finite construction question or make the strongest honestly verified progress toward it. Use sub-agents when available, but treat agents sharing a model as correlated search workers rather than independent validators.

### 1. Exact problem

Let

\[
\mathbb F_3^8=\{0,1,2\}^8
\]

with coordinatewise arithmetic modulo 3. A finite set \(S\subseteq\mathbb F_3^8\) is a **cap set** if it contains no three distinct points \(x,y,z\) satisfying

\[
x+y+z=0 \pmod 3.
\]

Equivalently, for every two distinct \(x,y\in S\), the point \(-x-y\pmod 3\) is not in \(S\).

The supplied seed constructs a valid cap set of size 512. Determine whether you can do either of the following:

1. **Construction success:** produce a deterministic generator for a valid cap set \(S\subseteq\mathbb F_3^8\) with \(|S|\ge 513\).
2. **Nonexistence success:** produce a complete rigorous proof that every cap set in \(\mathbb F_3^8\) has size at most 512.

Do not assume either outcome is true. The construction track is primary because its result has a short independent certificate. A heuristic, stochastic log, unverifiable score, or claim that a search found 513 without emitting the exact set does not count. A nonexistence claim does not count without a complete proof; failure to find 513 is not evidence of nonexistence.

### 2. Honest claim boundary

- A valid set of size 513 or more is a mathematical success for this task.
- A set of size 512 reproduces the supplied baseline and is not an improvement.
- A set that passes only the generator's own check is not yet accepted.
- Finite experiments may falsify proposed lemmas or guide search, but do not prove a universal upper bound.
- The task is self-contained. Do not require external datasets, hosted notebooks, live leaderboards, proprietary solvers, GPUs, or laboratory resources.
- Use the Python standard library for all required final artifacts. Optional locally available packages may be used for exploration only; the final generator and both final checks must remain standard-library-only.
- Mathematical validity and current novelty are separate. Background and theorem lookup are allowed during proof work. A dedicated dated current-status search is required before any global novelty, record, or new-upper-bound claim, but it is not part of checking a finite construction certificate.

### 3. Required durable artifacts

Work in the current writable directory and maintain these files:

1. `seed_512.py` — the supplied baseline and primary checker, copied exactly from the block below.
2. `candidate.py` — a deterministic `build_candidate()` function returning the best exact set found. It must not read network resources or undeclared data files.
3. `independent_verify.py` — a fresh implementation of the cap-set check. Do not import checking logic from `seed_512.py`.
4. `audit_candidate.py` — the precommitted driver that applies both checkers and all metamorphic tests to `candidate.py`.
5. `calibrate_checkers.py` — the pre-search agreement and malformed-input calibration for both checkers.
6. `route_registry.md` — one card per search mechanism, including assumptions, decisive test, best valid score and digest, falsifiers, status, and next action.
7. `verification_report.md` — exact commands, environment, size, digest, control results, both verification paths, metamorphic tests, and claim boundary.

Every research handoff must leave `candidate.py` in a runnable state that produces a set passing at least one checker. Put unverified experiments elsewhere; never replace a valid incumbent with an invalid one.

### 4. Copy and run the archived seed

Source and license notice—preserve this paragraph and the notice in the code when copying or redistributing the prompt: the construction below is adapted from DeepMind's `cap_set.ipynb`, copyright 2023 DeepMind Technologies Limited, licensed under Apache License 2.0, source commit `cc53f274237d7ab05c19df939edbc1f9616a7c19`. The repository copy of the license is `prompts/sources/funsearch-cap-sets/LICENSE`; the license text is also available at `https://www.apache.org/licenses/LICENSE-2.0`.

Create `seed_512.py` with exactly this content:

```python
"""Self-contained 512-cap seed and primary verifier for F_3^8.

Construction adapted from DeepMind's cap_set.ipynb.
Copyright 2023 DeepMind Technologies Limited. Licensed under Apache 2.0.
Source commit: cc53f274237d7ab05c19df939edbc1f9616a7c19.
Strict certificate checks adapted for Prompts for Progress, 18 July 2026.
"""

from __future__ import annotations

from hashlib import sha256
from itertools import product
from typing import Iterable, Sequence

Point = tuple[int, ...]
N = 8


def build_512_cap() -> list[Point]:
    """Return the explicit 512-cap preserved in the FunSearch artifact."""
    vectors = list(product(range(3), repeat=N))

    def support(v: Point) -> tuple[int, ...]:
        return tuple(i for i in range(N) if v[i] != 0)

    def reflections(v: Point) -> int:
        return sum(1 for i in range(1, N // 2) if v[i] == v[-i])

    weight8_vectors = [
        v for v in vectors if len(support(v)) == 8 and reflections(v) >= 2
    ]

    supports_16 = [
        (0, 1, 2, 3),
        (0, 1, 2, 5),
        (0, 3, 6, 7),
        (0, 5, 6, 7),
        (1, 3, 4, 6),
        (1, 4, 5, 6),
        (2, 3, 4, 7),
        (2, 4, 5, 7),
    ]
    weight4_vectors = [v for v in vectors if support(v) in supports_16]

    supports_8 = [
        (0, 1, 2, 7),
        (0, 1, 2, 6),
        (0, 1, 3, 7),
        (0, 1, 6, 7),
        (0, 1, 5, 7),
        (0, 2, 3, 6),
        (0, 2, 6, 7),
        (0, 2, 5, 6),
        (1, 2, 4, 7),
        (1, 2, 4, 6),
        (1, 3, 4, 7),
        (1, 4, 6, 7),
        (1, 4, 5, 7),
        (2, 3, 4, 6),
        (2, 4, 6, 7),
        (2, 4, 5, 6),
    ]
    weight4_vectors_2 = [
        v for v in vectors if support(v) in supports_8 and reflections(v) == 1
    ]

    allowed_zeros = [
        (0, 4, 7),
        (0, 2, 4),
        (0, 1, 4),
        (0, 4, 6),
        (1, 2, 6),
        (2, 6, 7),
        (1, 2, 7),
        (1, 6, 7),
    ]
    weight5_vectors = [
        v
        for v in vectors
        if tuple(i for i in range(N) if v[i] == 0) in allowed_zeros
        and reflections(v) <= 1
        and (v[1] * v[7]) % 3 != 1
        and (v[2] * v[6]) % 3 != 1
    ]

    return (
        weight8_vectors
        + weight4_vectors
        + weight4_vectors_2
        + weight5_vectors
    )


def normalize(points: Iterable[Sequence[int]]) -> list[Point]:
    normalized: list[Point] = []
    for raw_point in points:
        try:
            point = tuple(raw_point)
        except TypeError as exc:
            raise AssertionError("every point must be iterable") from exc
        if len(point) != N:
            raise AssertionError("every point must have exactly 8 coordinates")
        if any(type(x) is not int or x not in (0, 1, 2) for x in point):
            raise AssertionError("coordinates must be exact integers in {0,1,2}")
        normalized.append(point)
    if len(set(normalized)) != len(normalized):
        raise AssertionError("candidate contains duplicate points")
    return normalized


def first_violation(points: Iterable[Sequence[int]]) -> tuple[Point, Point, Point] | None:
    cap = normalize(points)
    point_set = set(cap)
    for i, x in enumerate(cap):
        for y in cap[i + 1 :]:
            z = tuple((-x[k] - y[k]) % 3 for k in range(N))
            if z in point_set:
                return x, y, z
    return None


def digest(points: Iterable[Sequence[int]]) -> str:
    cap = sorted(normalize(points))
    payload = "\n".join("".join(str(x) for x in point) for point in cap)
    return sha256(payload.encode("ascii")).hexdigest()


def verify(points: Iterable[Sequence[int]], minimum_size: int = 0) -> list[Point]:
    cap = normalize(points)
    if len(cap) < minimum_size:
        raise AssertionError(f"size {len(cap)} is below required {minimum_size}")
    violation = first_violation(cap)
    if violation is not None:
        raise AssertionError(f"nontrivial 3-term progression found: {violation}")
    return cap


if __name__ == "__main__":
    seed = verify(build_512_cap(), minimum_size=512)
    assert len(seed) == 512
    print(f"VALID size={len(seed)} sha256={digest(seed)}")
```

Run it. The expected output is:

```text
VALID size=512 sha256=fa12b2dc4918c38248b3039df101b5bb66ee85fd56c313389015c64979d7fb88
```

Record the exact size and digest in `route_registry.md`. If the baseline does not pass or the digest differs, stop and diagnose the transcription or environment before conducting any research.

Initialize `candidate.py` immediately so every handoff starts from a checked incumbent:

```python
"""Current deterministic incumbent; replace build_candidate only after validation."""

from __future__ import annotations

from hashlib import sha256

from seed_512 import build_512_cap


def build_candidate() -> list[tuple[int, ...]]:
    return list(build_512_cap())


def candidate_digest(points: list[tuple[int, ...]]) -> str:
    payload = "\n".join("".join(str(x) for x in point) for point in sorted(points))
    return sha256(payload.encode("ascii")).hexdigest()


if __name__ == "__main__":
    candidate = build_candidate()
    print(f"CANDIDATE size={len(candidate)} sha256={candidate_digest(candidate)}")
```

Run `python3 candidate.py` and confirm that it reports the same 512 size and digest. The final frozen version must materialize the exact winning set without rerunning discovery: use literal points or a concise deterministic construction, the Python standard library only, no randomness, no network or undeclared files, no import-time work beyond definitions, at most 60 seconds, and at most 1 GiB of memory on the runner. If discovery code is slower, serialize the exact verified construction into `candidate.py`.

### 5. Preflight calibration and ambiguity audit

Before searching:

1. Restate the cap condition and prove the equivalence between “no three distinct points summing to zero” and the pair-completion checker used above.
2. Confirm that coordinate permutations, coordinatewise multiplication by 1 or 2, and translations are affine automorphisms preserving cap size and validity.
3. Create `independent_verify.py` and `audit_candidate.py` from sections 9 and 10 **before** search. If a sealed verifier agent is available, assign these files without sharing favored construction ideas. Hash and freeze both files. Any later checker change resets calibration and the complete final audit.
4. Create and run `calibrate_checkers.py` from the exact block below. It compares both pair-completion implementations with a separately written brute-force triple checker on all 512 subsets of an embedded F₃², and checks malformed certificates.
5. Run a **positive control**: the supplied 512-cap must pass the primary checker.
6. Run a **negative control**: the set containing `(0,0,0,0,0,0,0,0)`, `(1,1,1,1,1,1,1,1)`, and `(2,2,2,2,2,2,2,2)` must fail, and the checker must report a witness.
7. If web access exists, perform a bounded current-status search for a known 513-cap or a proof of a 512 upper bound. Record sources and search date. If status cannot be checked, continue only as an archive-relative experiment and make no current-frontier claim.
8. Create an ambiguity/assumption ledger. It should explicitly note that:
   - points are distinct set elements, not a multiset;
   - all arithmetic is modulo 3;
   - an affine image of a set is not a larger set;
   - a stochastic search is not a certificate until its exact output is serialized deterministically;
   - the 512 seed is a lower-bound construction, not a supplied proof of optimality;
   - current novelty is not implied by beating the archived baseline.

Create `calibrate_checkers.py` with this content:

```python
"""Pre-search calibration for the two F_3^8 certificate checkers."""

from __future__ import annotations

from hashlib import sha256
from itertools import combinations, product
from pathlib import Path

from independent_verify import verify_points
from seed_512 import first_violation


def brute_force_is_cap(points: list[tuple[int, ...]]) -> bool:
    for triple in combinations(points, 3):
        if all(sum(point[i] for point in triple) % 3 == 0 for i in range(8)):
            return False
    return True


def primary_accepts(points: list[tuple[int, ...]]) -> bool:
    try:
        return first_violation(points) is None
    except (AssertionError, TypeError):
        return False


def independent_accepts(points: list[tuple[int, ...]]) -> bool:
    try:
        verify_points(points, minimum_size=0)
        return True
    except (AssertionError, TypeError):
        return False


def main() -> None:
    plane = [(a, b, 0, 0, 0, 0, 0, 0) for a, b in product(range(3), repeat=2)]
    for mask in range(1 << len(plane)):
        subset = [point for i, point in enumerate(plane) if mask & (1 << i)]
        expected = brute_force_is_cap(subset)
        assert primary_accepts(subset) == expected, (mask, "primary")
        assert independent_accepts(subset) == expected, (mask, "independent")

    malformed = [
        [(0, 0, 0, 0, 0, 0, 0, 0), (0, 0, 0, 0, 0, 0, 0, 0)],
        [(0, 0, 0, 0, 0, 0, 0)],
        [(3, 0, 0, 0, 0, 0, 0, 0)],
        [(True, 0, 0, 0, 0, 0, 0, 0)],
        [(0.0, 0, 0, 0, 0, 0, 0, 0)],
        [("0", 0, 0, 0, 0, 0, 0, 0)],
    ]
    for case in malformed:
        assert not primary_accepts(case), case
        assert not independent_accepts(case), case

    for filename in ("independent_verify.py", "audit_candidate.py"):
        value = sha256(Path(filename).read_bytes()).hexdigest()
        print(f"FROZEN {filename} sha256={value}")
    print("CALIBRATION PASS subsets=512 malformed=6")


if __name__ == "__main__":
    main()
```

Run `python3 calibrate_checkers.py` and record its two file hashes and final pass line in `route_registry.md`. Do not proceed until calibration and both controls behave correctly.

### 6. Search organization

If sub-agents are available, begin with sealed mechanism-diverse passes. Do not tell every branch which mechanism currently looks best. Separate branches by mechanism, not by wording, and assign at least one falsifier. Same-model branches are correlated search workers, not independent validators. If sub-agents are unavailable, run the same branches sequentially while keeping their initial hypotheses separate.

Open at least these mechanism families:

#### A. Exact local exchanges around the 512 seed

In one O(|S|²n) pass over seed pairs, map each completion point \(q\notin S\) to the list of conflicting pairs \(\{a,b\}\subseteq S\) with \(a+b+q=0\). Do not recompute all seed pairs separately for every outside point. Adding \(q\) requires removing a vertex cover of its conflict graph. Generalize to adding several outside points, where conflicts may involve seed points and other additions. Use exact small hitting-set or branch-and-bound search for \(k\)-out/\((k+1)\)-in exchanges only on promising points or orbits. Begin with the smallest conflict structures. Every accepted move must pass the checker immediately.

#### B. Algebraic and orbit constructions

Analyze the seed's support, weight, reflection, translation, and coordinate-permutation structure. Search for alternate unions of orbits or modified support rules whose cross-orbit sums avoid the set. Derive constraints before enumerating. Treat a rule as a hypothesis and state the smallest calculation that would falsify it.

#### C. Executable priority-function evolution

Recreate a simple greedy solver over all \(3^8\) points and evolve small deterministic priority functions. Maintain multiple search islands with different feature families—weight/support features, coordinate correlations, low-degree polynomial features, orbit labels, and learned conflict statistics. Retain only valid outputs. Cluster candidates by their generated set or structural signature so that five syntactic variants of one behavior do not count as diversity.

#### D. Product, slice, and lift mechanisms

Study decompositions such as \(\mathbb F_3^8=\mathbb F_3^a\times\mathbb F_3^{8-a}\). Attempt fiberwise constructions in which allowed fibers depend on the base point. Check cross-fiber progressions exactly. Compare against the supplied seed and use small-dimensional exhaustive calculations only to derive or falsify structural rules.

#### E. Obstruction and falsifier branch

Try to break the assumptions behind every favored family. Construct counterexamples to proposed lemmas, detect hidden affine duplicates, and identify invariants that explain why a family stalls at 512. A family-specific upper bound is valuable for redirecting search but must not be reported as a global upper bound.

### 7. Route cards and decisive tests

Before a branch receives substantial computation, add a route card to `route_registry.md` with:

- exact mechanism and representation;
- assumptions or imported facts;
- current valid incumbent size and digest;
- one cheapest decisive test;
- predicted result under the branch hypothesis;
- decision rule: continue, modify, or retire;
- counterexamples and failed parameterizations;
- dependencies and artifact paths;
- status: `unstarted`, `active`, `improved`, `falsified`, `blocked`, or `retired`.

A decisive test must be capable of changing the decision. “Try more random seeds” is not decisive unless it tests a stated distributional hypothesis with a fixed budget and a predeclared continuation rule.

### 8. Fitness, memory, and cross-pollination

Use this lexicographic fitness order:

1. exact input and statement fidelity;
2. validity under the primary checker;
3. set size;
4. validity under independent checker;
5. structural or behavioral novelty relative to other valid incumbents;
6. determinism and simplicity of the final generator.

Invalid candidates never become elites, regardless of their nominal size. Preserve several structurally different valid incumbents, even if all have size 512. Record exact failed exchanges and witnesses so later branches do not repeat them.

After the initial sealed round, allow cross-pollination only through concrete artifacts: a construction rule, conflict graph, falsified lemma, verified set, or measured search result. Do not merge branches based on verbal optimism.

### 9. Independent verifier

Create `independent_verify.py` with the implementation below. It deliberately does not import checker or digest logic from `seed_512.py`. Its base-3 encoding treats the first coordinate as most significant, equivalently `value = 3 * value + coordinate` from left to right.

```python
"""Independent strict verifier for an F_3^8 cap-set certificate."""

from __future__ import annotations

from hashlib import sha256
from typing import Iterable, Sequence

from candidate import build_candidate

Point = tuple[int, ...]
N = 8


def normalize_strict(points: Iterable[Sequence[int]]) -> list[Point]:
    cap: list[Point] = []
    for raw_point in points:
        try:
            point = tuple(raw_point)
        except TypeError as exc:
            raise AssertionError("every point must be iterable") from exc
        if len(point) != N:
            raise AssertionError("every point must have exactly 8 coordinates")
        if any(type(x) is not int or x not in (0, 1, 2) for x in point):
            raise AssertionError("coordinates must be exact integers in {0,1,2}")
        cap.append(point)
    if len(set(cap)) != len(cap):
        raise AssertionError("candidate contains duplicate points")
    return cap


def encode(point: Point) -> int:
    value = 0
    for coordinate in point:
        value = 3 * value + coordinate
    return value


def verify_points(
    points: Iterable[Sequence[int]], minimum_size: int = 513
) -> list[Point]:
    cap = normalize_strict(points)
    if len(cap) < minimum_size:
        raise AssertionError(f"size {len(cap)} is below required {minimum_size}")
    encoded = {encode(point) for point in cap}
    for index, x in enumerate(cap):
        for y in cap[index + 1 :]:
            z = tuple((-x[i] - y[i]) % 3 for i in range(N))
            if encode(z) in encoded:
                raise AssertionError(f"nontrivial 3-term progression found: {(x, y, z)}")
    return cap


def certificate_digest(points: Iterable[Sequence[int]]) -> str:
    cap = sorted(normalize_strict(points))
    payload = "\n".join("".join(str(x) for x in point) for point in cap)
    return sha256(payload.encode("ascii")).hexdigest()


if __name__ == "__main__":
    result = verify_points(build_candidate(), minimum_size=513)
    print(f"VALID size={len(result)} sha256={certificate_digest(result)}")
```

### 10. Precommitted metamorphic checker tests

These tests exercise the transformation and checker implementations; because both checkers already exhaust all unordered pairs, the transformations are not extra mathematical evidence or a test of candidate generalization. Do not use the following fixed transformations to develop or rank candidates. Reserve them for the final software gate and use these exact definitions:

1. `translate(p) = tuple((p[i] + t[i]) % 3 for i in range(8))`, where `t = (1,2,0,1,2,0,1,2)`;
2. `reverse(p) = p[::-1]`;
3. `permute(p) = tuple(p[j] for j in (2,5,0,7,3,1,6,4))`;
4. `scale(p) = tuple((p[i] * m[i]) % 3 for i in range(8))`, where `m = (2,1,2,1,2,1,2,1)`;
5. `composed(p) = scale(permute(reverse(translate(p))))`.

Create `audit_candidate.py` with this exact content. It defines inverse transforms as well as forward transforms, checks both round-trip directions, and then runs both verifier implementations.

```python
"""Precommitted final audit and affine metamorphic tests."""

from __future__ import annotations

from collections.abc import Callable

from candidate import build_candidate
from independent_verify import certificate_digest, verify_points
from seed_512 import digest, verify

Point = tuple[int, ...]
Transform = Callable[[Point], Point]
T = (1, 2, 0, 1, 2, 0, 1, 2)
M = (2, 1, 2, 1, 2, 1, 2, 1)
P = (2, 5, 0, 7, 3, 1, 6, 4)
P_INVERSE = (2, 5, 0, 4, 7, 1, 6, 3)


def translate(point: Point) -> Point:
    return tuple((point[i] + T[i]) % 3 for i in range(8))


def translate_inverse(point: Point) -> Point:
    return tuple((point[i] - T[i]) % 3 for i in range(8))


def reverse(point: Point) -> Point:
    return point[::-1]


def permute(point: Point) -> Point:
    return tuple(point[j] for j in P)


def permute_inverse(point: Point) -> Point:
    return tuple(point[j] for j in P_INVERSE)


def scale(point: Point) -> Point:
    return tuple((point[i] * M[i]) % 3 for i in range(8))


def composed(point: Point) -> Point:
    return scale(permute(reverse(translate(point))))


def composed_inverse(point: Point) -> Point:
    return translate_inverse(reverse(permute_inverse(scale(point))))


TRANSFORMS: list[tuple[str, Transform, Transform]] = [
    ("translated", translate, translate_inverse),
    ("reversed", reverse, reverse),
    ("permuted", permute, permute_inverse),
    ("scaled", scale, scale),
    ("composed", composed, composed_inverse),
]


def check_image(name: str, image: list[Point], original_size: int) -> None:
    assert len(image) == original_size
    assert len(set(image)) == original_size
    primary = verify(image, minimum_size=513)
    secondary = verify_points(image, minimum_size=513)
    assert set(primary) == set(secondary)
    primary_digest = digest(primary)
    secondary_digest = certificate_digest(secondary)
    assert primary_digest == secondary_digest
    print(f"VALID {name} size={len(primary)} sha256={primary_digest}")


def main() -> None:
    original = list(build_candidate())
    check_image("original", original, len(original))
    for name, forward, inverse in TRANSFORMS:
        image = [forward(point) for point in original]
        assert [inverse(point) for point in image] == original
        assert [forward(inverse(point)) for point in original] == original
        check_image(name, image, len(original))


if __name__ == "__main__":
    main()
```

An affine image must retain exactly the same size and validity. Its digest may stay the same or change. Any size change is a transformation bug; any validity or digest disagreement is a checker, serialization, or transformation bug. All invalidate the claim.

### 11. Freeze-and-audit protocol

When any branch first reaches size 513 or more:

1. Freeze exploratory search and copy the exact deterministic generator to `candidate.py`.
2. Run `candidate.py` twice in fresh processes; the sorted set and digest must match.
3. Run `python3 calibrate_checkers.py` again and confirm the frozen checker hashes match the pre-search values.
4. Run `python3 independent_verify.py`.
5. Run `python3 audit_candidate.py` from a clean temporary directory containing only `seed_512.py`, `candidate.py`, `independent_verify.py`, `audit_candidate.py`, and `calibrate_checkers.py`.
6. Confirm that the precommitted metamorphic tests preserve exact size and pass both checkers. Record them as software tests, not independent mathematical evidence.
7. Launch a fresh-context auditor, if available, with only the problem statement, `candidate.py`, and checker specification. Do not provide the development narrative.
8. Map every defect to an exact line or claim. Repair minimally, then repeat calibration and the entire audit from the beginning; a repaired candidate does not inherit approval.
9. Write `verification_report.md` with commands, outputs, size, digest, metamorphic-test results, resource use, and the explicit distinction between archive-relative improvement and current global novelty.

Only after all gates pass may the final response say that a 513-cap was constructed.

### 12. Resource-aware stopping and fallback

Before search, write a global resource envelope into `route_registry.md` and reserve at least 20% for calibration, freeze, and audit. If the user supplied none, use at most four wall-clock hours, eight ordinary CPU cores, and 8 GiB RAM for the complete campaign. Each route card must declare maximum trials or tool calls, CPU time, and memory; stochastic exploration must log seeds and configurations. A review cycle is complete only when its predeclared decisive test has run and its decision rule has been applied. Absent a larger valid incumbent or a proved structural constraint, no route receives more than two fixed cycles.

Continue a branch within that envelope while it produces at least one of the following:

- a larger valid incumbent;
- a new behaviorally distinct valid 512-set during its first two fixed cycles;
- a concrete falsifier or counterexample;
- a proved structural constraint that changes the search space;
- a materially new mechanism with a decisive test.

Retire a branch after two consecutive review cycles with none of those outputs. Reallocate effort to underexplored mechanisms rather than repeating a stagnant search with cosmetic prompt variations.

If all active branches retire or the available task budget ends without a verified 513-set or a complete upper-bound proof, return an honest research handoff. It must include:

- the best valid candidate, its exact size and digest;
- runnable `candidate.py` and both verification paths;
- the route registry with failed mechanisms and witnesses;
- the strongest proved family-specific constraint, if any;
- the three highest-information next experiments with decision rules;
- an explicit statement that the target was not resolved.

Do not discard these artifacts and do not fabricate completion.

### 13. Final response contract

For construction success, report only after all gates pass and include:

- `VALID cap set in F_3^8`;
- exact size;
- SHA-256 digest;
- paths to `candidate.py`, `independent_verify.py`, `audit_candidate.py`, `calibrate_checkers.py`, `route_registry.md`, and `verification_report.md`;
- the exact commands another person should run: `python3 seed_512.py`, two fresh runs of `python3 candidate.py`, `python3 calibrate_checkers.py`, `python3 independent_verify.py`, and `python3 audit_candidate.py`;
- a one-paragraph explanation of the construction mechanism;
- a separate, qualified note on whether a current prior-art search was performed.

For nonexistence success, provide the complete proof, all imported theorem cards, a fresh-context defect-finding audit, and the runnable construction-search artifacts used only as falsification aids. Same-model or internal audits remain correlated and do not make a novel upper-bound proof established; external expert review and a dated current-status search are required before that representation.

If unresolved, say so plainly and return the fallback package specified above.

Begin with the preflight controls and baseline reproduction now.

## FULL PROMPT — END COPY

---

## Expected verification result

The supplied seed was executed during preparation of this dossier and prints:

```text
VALID size=512 sha256=fa12b2dc4918c38248b3039df101b5bb66ee85fd56c313389015c64979d7fb88
```

A successful research run must produce a different final artifact with size at least 513 and a reproducible digest, or a complete proof that 513 is impossible. The embedded source notice identifies the archived FunSearch construction and its license; the research-management language is newly written from the companion cross-domain synthesis.
