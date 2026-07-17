# Erdős campaigns and cases

Research cutoff: 2026-07-16

The primary discovery index is the [AI contributions to Erdős problems wiki](https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems). Its classifications are provisional and its maintainers explicitly warn against treating it as a benchmark or definitive verdict. Trace every selected case to its problem thread, paper, prompt or run artifact, and validation evidence.

## Individual cases with strong provenance value

### Erdős #1196 — primitive-set conjecture

- People: Liam Price; Boris Alexeev, Kevin Barreto, Yanyang Li, Jared Duker Lichtman, Jibran Iqbal Shah, Quanyu Tang, Terence Tao, and collaborators.
- System: GPT-5.4 Pro.
- Dates: initial work 2026-04-13 to 2026-04-16; paper posted 2026-05.
- Contribution: the model proposed a von Mangoldt / Markov-chain method; human collaborators developed and generalized the research line.
- Artifacts: [initial chat](https://chatgpt.com/share/69e1f007-3704-83eb-8c83-16565be09758), [provenance audit](https://chatgpt.com/share/69e208a2-decc-83eb-be4d-796a0a2160fd), [paper](https://arxiv.org/abs/2605.00301), [chronological forum thread](https://www.erdosproblems.com/forum/thread/1196?order=oldest).
- Why it matters here: unusually good evidence for separating model-originated method, human development, final paper, and downstream results.

### Erdős #650 — matching integers to distinct multiples

- People: Yixin He, Yanyang Li, Quanyu Tang, Wouter van Doorn, and collaborators.
- Systems: GPT-5.4 Pro and Aristotle.
- Dates: 2026-03-06 to 2026-03-30.
- Contribution: GPT proposed the main strategy; Aristotle formalized the argument and repaired a genuine gap in the informal lower bound.
- Artifacts: [problem](https://www.erdosproblems.com/650), [thread](https://www.erdosproblems.com/forum/thread/650?order=oldest), [paper](https://arxiv.org/abs/2603.28636).
- Why it matters here: multiple AI reviews reportedly accepted the flawed informal proof, while the formal proof silently used a corrected construction. This is a strong validation-history case.

### Erdős #728 — factorial divisibility

- People: Kevin Barreto and Liam Price.
- Systems: GPT-5.2 Pro / Thinking and Aristotle.
- Dates: 2026-01-04 to 2026-01-06.
- Contribution: full resolution in the problem's intended spirit, with a Lean proof.
- Artifacts: [project history and reusable prompt pattern](https://www.erdosproblems.com/forum/thread/blog%3A2), [paper](https://arxiv.org/abs/2601.07421), [problem](https://www.erdosproblems.com/728), [discussion](https://www.erdosproblems.com/forum/thread/728).
- Caveat: the original statement was ambiguous and the exact full transcript was not preserved.

### Erdős #848

- People: Mehtaab Sawhney and Mark Sellke with GPT-5 Pro.
- Dates: 2025-10 / 2025-11.
- Contribution: model supplied a key stability or density idea; humans corrected and completed it.
- Artifacts: [full shared chat](https://chatgpt.com/share/68ec50da-cf00-8005-b5f6-b683506e5853), [problem](https://www.erdosproblems.com/848), and the [early-science report](https://cdn.openai.com/pdf/4a25f921-e4e0-479a-9b38-5367b47e8fd0/early-science-acceleration-experiments-with-gpt-5.pdf).
- Why it matters here: preserved full chat and explicit human correction make it a strong collaboration record.

## Campaigns that preserve failure denominators

### Aletheia 700-problem sweep

- Runs: 2025-12-02 to 2025-12-09; published 2026-01 / 2026-02.
- Funnel reported in the paper: 700 problems to 212 candidates to 200 graded outputs; 63 technically correct, but only 13 considered meaningfully correct. The remaining reviewed outputs included fundamental flaws, vacuous readings, rediscoveries, and literature identification.
- Source: [paper](https://arxiv.org/abs/2601.22401).
- Archival value: a rare denominator-bearing campaign that should remain linked to its child cases.

### AlphaProof Nexus

- Parent campaign: open Erdős and OEIS formal-proof search.
- Systems: Gemini provers and raters, Lean, AlphaProof, and evolutionary selection.
- Artifacts: [paper](https://arxiv.org/abs/2605.22763), [result repository](https://github.com/google-deepmind/alphaproof-nexus-results).
- Prompt evidence: full basic-agent prompt and condensed full-featured prover/rater prompts are printed in the paper.
- Caveat: results for variants must not be counted as literal resolutions of the canonical problems.

### GPT-Erdos controlled attempt collection

- Researcher: Neel Somani.
- Date: 2026-01 snapshot.
- Design: each problem sent to GPT-5.2 Pro and Deep Research using an identical prompt.
- Outcomes include alleged new proofs, literature findings, partial extensions, malformed statements, literal hidden-constraint exploits, valid non-improvements, conditional results, and subtle errors.
- Artifact: [repository](https://github.com/neelsomani/gpt-erdos).
- Archival value: unusually valuable controlled attempt set; exact prompt must be confirmed from the data or scripts before publication.

### GPT-5 literature-search sweep

- People: Mehtaab Sawhney, Mark Sellke, and OpenAI collaborators.
- Dates: 2025-09 to 2025-10.
- Activity: searched the then-open Erdős collection, finding prior full and partial results, a misprint, and the path to the #848 contribution.
- Artifacts: [example search chat](https://chatgpt.com/share/68f124d4-30b4-8005-b2d9-fcb64fc1e4ea), [report](https://cdn.openai.com/pdf/4a25f921-e4e0-479a-9b38-5367b47e8fd0/early-science-acceleration-experiments-with-gpt-5.pdf).
- Why it matters here: public “solved” descriptions were corrected when most outputs proved to recover earlier literature. This is an essential provenance and novelty-checking record.

### Star Fleet Math

- Public date: 2026-07-15.
- Activity: parallel AI/Lean campaign reporting multiple proposed Erdős solutions.
- Artifacts: [site](https://www.starfleetmath.com/), [announcement discussion](https://www.reddit.com/r/math/comments/1ux34wp/star_fleet_math_ai_system_using_lean_4_solving_20/).
- Caveat: mutable, extremely recent, and the observed site count differed from the announcement count. Preserve as a retrieval-dated snapshot and label all results proposed until independently assessed.

## Modeling implications

1. Campaigns and their child attempts must both exist; otherwise success and failure denominators disappear.
2. Records need lineage such as `derived from`, `follow-up to`, `formalizes`, and `corrects`.
3. The archive must distinguish the literal stated problem, its intended interpretation, and stronger or weaker variants.
4. Validation events can reveal that a proof passed informal AI checks but failed formalization; do not collapse validation to one timeless label.
5. A model finding prior literature is useful progress but is not a new mathematical result.
