// Generated from ../records/*.md. Do not edit by hand.
export const records = [
  {
    "schemaVersion": "0.1",
    "id": "aletheia-erdos-sweep",
    "title": "Aletheia scans 700 open-labeled Erdős problems",
    "recordType": "campaign",
    "domain": "mathematics",
    "field": "combinatorics and number theory",
    "outcome": "mixed",
    "contributionMode": "agentic search",
    "summary": "A batch campaign narrowed 700 problems to 200 graded candidate outputs; 63 were technically correct but only 13 were judged meaningfully correct, while 137 were fundamentally flawed.",
    "people": [
      "Tony Feng",
      "Aletheia collaborators and expert graders"
    ],
    "organizations": [
      "Google DeepMind"
    ],
    "systems": [
      "Aletheia",
      "Gemini Deep Think"
    ],
    "promptAvailability": "partial",
    "timeline": [
      {
        "date": "2025-12-02",
        "precision": "day",
        "type": "attempt",
        "label": "Batch runs began"
      },
      {
        "date": "2025-12-09",
        "precision": "day",
        "type": "attempt",
        "label": "Batch runs ended"
      },
      {
        "date": "2026-01-29",
        "precision": "day",
        "type": "preprint",
        "label": "Case-study preprint posted"
      }
    ],
    "validation": [
      {
        "type": "expert-review",
        "status": "mixed",
        "note": "Multiple-stage human review examined correctness, statement fidelity, and novelty."
      }
    ],
    "sources": [
      {
        "label": "Paper and appendices",
        "url": "https://arxiv.org/abs/2601.22401",
        "kind": "paper"
      }
    ],
    "caveat": "Many technically correct outputs exploited unintended readings or rediscovered literature; the system configuration and raw outputs were not fully reproducible from the paper alone.",
    "editorialNote": "# Aletheia scans 700 open-labeled Erdős problems\n\nThis campaign is central to the archive because it preserves a denominator and exposes failure modes that disappear when only successful cases are publicized."
  },
  {
    "schemaVersion": "0.1",
    "id": "alphaproof-nexus",
    "title": "AlphaProof Nexus searches open Erdős and OEIS problems",
    "recordType": "campaign",
    "domain": "mathematics",
    "field": "formal mathematics",
    "outcome": "mixed",
    "contributionMode": "agentic search",
    "summary": "A Lean-guided campaign reported nine Erdős results and 44 OEIS conjecture proofs, while also documenting failure modes such as restating the hard step behind a new unproved lemma.",
    "people": [
      "George Tsoukalas",
      "AlphaProof Nexus collaborators"
    ],
    "organizations": [
      "Google DeepMind"
    ],
    "systems": [
      "AlphaProof Nexus",
      "Gemini prover and rater agents",
      "Lean"
    ],
    "promptAvailability": "representative",
    "timeline": [
      {
        "date": "2026-05-21",
        "precision": "day",
        "type": "preprint",
        "label": "Formal-proof-search paper posted"
      }
    ],
    "validation": [
      {
        "type": "formal",
        "status": "passed",
        "note": "Lean checks the formal statements; experts reportedly audited correspondence to the intended problems."
      }
    ],
    "sources": [
      {
        "label": "Paper with agent prompts",
        "url": "https://arxiv.org/abs/2605.22763",
        "kind": "paper"
      },
      {
        "label": "Formal result repository",
        "url": "https://github.com/google-deepmind/alphaproof-nexus-results",
        "kind": "code"
      }
    ],
    "caveat": "Results for stronger or related variants must not be counted as literal resolutions of the canonical problems; full per-run transcripts are unavailable.",
    "editorialNote": "# AlphaProof Nexus searches open Erdős and OEIS problems\n\nThe campaign illustrates why formal verification, statement fidelity, novelty, and mathematical significance must remain distinct fields."
  },
  {
    "schemaVersion": "0.1",
    "id": "cycle-double-cover",
    "title": "GPT-5.6 produces a proof of the Cycle Double Cover Conjecture",
    "recordType": "case",
    "domain": "mathematics",
    "field": "graph theory",
    "outcome": "complete",
    "contributionMode": "autonomous",
    "summary": "A long-running 64-agent search produced a claimed complete proof, followed by a public Lean formalization and a separate model-assisted write-up.",
    "people": [
      "OpenAI researchers and formalization contributors"
    ],
    "organizations": [
      "OpenAI"
    ],
    "systems": [
      "GPT-5.6 Sol Ultra",
      "GPT-5.6 Sol",
      "Codex",
      "Lean"
    ],
    "promptAvailability": "full",
    "timeline": [
      {
        "date": "2026-07-09",
        "precision": "day",
        "type": "disclosure",
        "label": "Proof and prompt released"
      },
      {
        "date": "2026-07",
        "precision": "month",
        "type": "verification",
        "label": "Lean formalization released"
      }
    ],
    "validation": [
      {
        "type": "formal",
        "status": "passed",
        "note": "Public Lean project kernel-checks an unconditional theorem; statement-faithfulness and extremely recent status should remain visible."
      }
    ],
    "sources": [
      {
        "label": "Full prompt",
        "url": "https://cdn.openai.com/pdf/04d1d1e4-bc75-476a-97cf-49055cd98d31/cdc_prompt.pdf",
        "kind": "prompt"
      },
      {
        "label": "Proof",
        "url": "https://cdn.openai.com/pdf/04d1d1e4-bc75-476a-97cf-49055cd98d31/cdc_proof.pdf",
        "kind": "paper"
      },
      {
        "label": "Lean formalization",
        "url": "https://github.com/openai/cdc-lean",
        "kind": "code"
      }
    ],
    "caveat": "No complete run transcript was located, and the result was extremely recent at the research cutoff.",
    "editorialNote": "# GPT-5.6 produces a proof of the Cycle Double Cover Conjecture\n\nThe two-page prompt is primarily a research-management and adversarial-validation protocol: portfolio diversity, approach registries, independent agents, cross-pollination, and repeated audits are more central than domain hints."
  },
  {
    "schemaVersion": "0.1",
    "id": "erdos-848",
    "title": "GPT-5 contributes the key idea for Erdős problem 848",
    "recordType": "case",
    "domain": "mathematics",
    "field": "combinatorial number theory",
    "outcome": "complete",
    "contributionMode": "human-ai collaboration",
    "summary": "GPT-5 proposed a stability or density idea that Mehtaab Sawhney and Mark Sellke corrected, tightened, and developed into a full solution.",
    "people": [
      "Mehtaab Sawhney",
      "Mark Sellke"
    ],
    "organizations": [
      "OpenAI"
    ],
    "systems": [
      "GPT-5 Pro"
    ],
    "promptAvailability": "full",
    "timeline": [
      {
        "date": "2025-10",
        "precision": "month",
        "type": "attempt",
        "label": "Preserved human–AI research chat"
      },
      {
        "date": "2025-11-20",
        "precision": "day",
        "type": "disclosure",
        "label": "Early-science report released"
      }
    ],
    "validation": [
      {
        "type": "expert-review",
        "status": "passed",
        "note": "Expert collaborators corrected and completed the proof; community checking followed."
      }
    ],
    "sources": [
      {
        "label": "Full shared chat",
        "url": "https://chatgpt.com/share/68ec50da-cf00-8005-b5f6-b683506e5853",
        "kind": "transcript"
      },
      {
        "label": "Problem page",
        "url": "https://www.erdosproblems.com/848",
        "kind": "announcement"
      },
      {
        "label": "OpenAI research report",
        "url": "https://cdn.openai.com/pdf/4a25f921-e4e0-479a-9b38-5367b47e8fd0/early-science-acceleration-experiments-with-gpt-5.pdf",
        "kind": "paper"
      }
    ],
    "caveat": "Substantial human correction and proof development were required; this was not an autonomous resolution.",
    "editorialNote": "# GPT-5 contributes the key idea for Erdős problem 848\n\nThe full chat makes the division of labor unusually inspectable and supports later prompt-method analysis."
  },
  {
    "schemaVersion": "0.1",
    "id": "funsearch-cap-sets",
    "title": "FunSearch improves cap-set constructions",
    "recordType": "case",
    "domain": "mathematics",
    "field": "combinatorics",
    "outcome": "partial",
    "contributionMode": "agentic search",
    "summary": "An evolutionary LLM-and-evaluator loop found larger cap sets in several dimensions and new online bin-packing heuristics.",
    "people": [
      "Bernardino Romera-Paredes",
      "Alhussein Fawzi",
      "DeepMind collaborators"
    ],
    "organizations": [
      "Google DeepMind"
    ],
    "systems": [
      "FunSearch",
      "PaLM 2"
    ],
    "promptAvailability": "partial",
    "timeline": [
      {
        "date": "2023-12-14",
        "precision": "day",
        "type": "peer-review",
        "label": "Nature paper published"
      }
    ],
    "validation": [
      {
        "type": "peer-review",
        "status": "passed",
        "note": "Peer-reviewed paper with executable evaluators and reproducible constructions."
      }
    ],
    "sources": [
      {
        "label": "Nature paper",
        "url": "https://www.nature.com/articles/s41586-023-06924-6",
        "kind": "paper"
      },
      {
        "label": "DeepMind account",
        "url": "https://deepmind.google/blog/funsearch-making-new-discoveries-in-mathematical-sciences-using-large-language-models/",
        "kind": "announcement"
      }
    ],
    "caveat": "The prompt is an evolving program scaffold plus exemplars, not a single natural-language research prompt.",
    "editorialNote": "# FunSearch improves cap-set constructions\n\nThis is an early workflow-level case: a language model proposes programs, an automated evaluator scores them, and successful programs become context for later generations. The archive should preserve the scaffold and evaluator as prompt artifacts when licensing permits."
  },
  {
    "schemaVersion": "0.1",
    "id": "futurehouse-robin-amd",
    "title": "Robin proposes a dry-AMD drug-repurposing direction",
    "recordType": "case",
    "domain": "biology",
    "field": "ophthalmology and drug repurposing",
    "outcome": "partial",
    "contributionMode": "experimental loop",
    "summary": "FutureHouse's Robin connected ROCK inhibition to improved retinal pigment epithelium phagocytosis and guided two experimental rounds; Y-27632 and ripasudil improved phagocytosis in vitro.",
    "people": [
      "FutureHouse collaborators"
    ],
    "organizations": [
      "FutureHouse"
    ],
    "systems": [
      "Robin"
    ],
    "promptAvailability": "full",
    "timeline": [
      {
        "date": "2025-05",
        "precision": "month",
        "type": "preprint",
        "label": "Preprint posted"
      },
      {
        "date": "2026",
        "precision": "year",
        "type": "peer-review",
        "label": "Nature paper published"
      }
    ],
    "validation": [
      {
        "type": "wet-lab",
        "status": "passed",
        "note": "In-vitro validation included geriatric primary human RPE stem cells."
      },
      {
        "type": "peer-review",
        "status": "passed",
        "note": "Peer-reviewed Nature publication."
      }
    ],
    "sources": [
      {
        "label": "Nature paper",
        "url": "https://www.nature.com/articles/s41586-026-10652-y",
        "kind": "paper"
      },
      {
        "label": "Preprint",
        "url": "https://arxiv.org/abs/2505.13400",
        "kind": "paper"
      },
      {
        "label": "Prompts, trajectories, code, and data links",
        "url": "https://github.com/Future-House/robin",
        "kind": "code"
      }
    ],
    "caveat": "ROCK inhibition and phagocytosis were individually known; the novel contribution is chiefly the proposed dry-AMD connection, and evidence remains in vitro.",
    "editorialNote": "# Robin proposes a dry-AMD drug-repurposing direction\n\nExact prompts, sample trajectories, code, and the RNA-seq accession make this one of the strongest reproducibility records in agentic biology."
  },
  {
    "schemaVersion": "0.1",
    "id": "gpt4-breast-cancer-drug-pairs",
    "title": "GPT-4 proposes breast-cancer drug combinations",
    "recordType": "campaign",
    "domain": "biology",
    "field": "drug repurposing",
    "outcome": "mixed",
    "contributionMode": "experimental loop",
    "summary": "GPT-4 proposed drug pairs for breast-cancer cell lines; several showed positive synergy, while most first-round pairs did not clear the stated bar and one explanation was biologically wrong.",
    "people": [
      "Study authors"
    ],
    "organizations": [],
    "systems": [
      "GPT-4"
    ],
    "promptAvailability": "full",
    "timeline": [
      {
        "date": "2024-05",
        "precision": "month",
        "type": "preprint",
        "label": "Preprint released"
      },
      {
        "date": "2025",
        "precision": "year",
        "type": "peer-review",
        "label": "Journal of the Royal Society Interface publication"
      }
    ],
    "validation": [
      {
        "type": "wet-lab",
        "status": "mixed",
        "note": "Cell-line assays found both positive and negative combinations."
      },
      {
        "type": "peer-review",
        "status": "passed",
        "note": "Peer-reviewed publication; no clinical validation."
      }
    ],
    "sources": [
      {
        "label": "Paper and prompt supplement",
        "url": "https://arxiv.org/pdf/2405.12258",
        "kind": "paper"
      },
      {
        "label": "Peer-reviewed article",
        "url": "https://doi.org/10.1098/rsif.2024.0674",
        "kind": "paper"
      }
    ],
    "caveat": "Cell-line synergy is not equivalent to therapeutic efficacy or safety; the same campaign contains explicit model errors and failed combinations.",
    "editorialNote": "# GPT-4 proposes breast-cancer drug combinations\n\nThis campaign is valuable precisely because it preserves both positive and negative experimental outcomes, plus a confident but incorrect biological explanation."
  },
  {
    "schemaVersion": "0.1",
    "id": "nesterov-point-convergence",
    "title": "Point convergence of Nesterov accelerated gradient",
    "recordType": "case",
    "domain": "mathematics",
    "field": "optimization",
    "outcome": "complete",
    "contributionMode": "human-ai collaboration",
    "summary": "GPT-5 suggested a useful restructuring during a multi-session collaboration; Ernest Ryu recognized the key structure, corrected errors, and developed the complete proof with Uijeong Jang.",
    "people": [
      "Uijeong Jang",
      "Ernest K. Ryu"
    ],
    "organizations": [
      "UCLA",
      "OpenAI"
    ],
    "systems": [
      "GPT-5"
    ],
    "promptAvailability": "unavailable",
    "timeline": [
      {
        "date": "2025-07-22",
        "precision": "day",
        "type": "disclosure",
        "label": "First public account"
      },
      {
        "date": "2025-10-27",
        "precision": "day",
        "type": "preprint",
        "label": "Preprint posted"
      }
    ],
    "validation": [
      {
        "type": "expert-review",
        "status": "passed",
        "note": "Human authors checked and wrote the mathematical proof."
      }
    ],
    "sources": [
      {
        "label": "Preprint",
        "url": "https://arxiv.org/abs/2510.23513",
        "kind": "paper"
      },
      {
        "label": "First-person workflow account",
        "url": "https://openai.com/index/gpt-5-mathematical-discovery/",
        "kind": "announcement"
      }
    ],
    "caveat": "No complete transcript was located; the model made many incorrect suggestions and did not assemble the final proof autonomously.",
    "editorialNote": "# Point convergence of Nesterov accelerated gradient\n\nThe interaction reportedly lasted about twelve hours over three days. This record is a useful counterweight to one-shot narratives: researcher judgment selected and repaired a promising but initially incorrect model idea."
  },
  {
    "schemaVersion": "0.1",
    "id": "openai-first-proof",
    "title": "OpenAI attempts all ten First Proof problems",
    "recordType": "campaign",
    "domain": "mathematics",
    "field": "research mathematics",
    "outcome": "mixed",
    "contributionMode": "human-ai collaboration",
    "summary": "An internal model produced attempts for ten research-level problems; expert assessments varied, and one attempt initially thought likely correct was later acknowledged as incorrect.",
    "people": [
      "OpenAI researchers",
      "First Proof problem authors and evaluators"
    ],
    "organizations": [
      "OpenAI",
      "First Proof"
    ],
    "systems": [
      "Undisclosed OpenAI internal model",
      "ChatGPT"
    ],
    "promptAvailability": "representative",
    "timeline": [
      {
        "date": "2026-02-14",
        "precision": "day",
        "type": "disclosure",
        "label": "Ten proof attempts shared"
      },
      {
        "date": "2026-02-20",
        "precision": "day",
        "type": "disclosure",
        "label": "OpenAI report published"
      },
      {
        "date": "2026-04",
        "precision": "month",
        "type": "correction",
        "label": "Organizer comments and later assessments available"
      }
    ],
    "validation": [
      {
        "type": "expert-review",
        "status": "mixed",
        "note": "Problem authors supplied feedback, but organizers did not certify the bundle as a set of solved problems."
      }
    ],
    "sources": [
      {
        "label": "OpenAI overview",
        "url": "https://openai.com/index/first-proof-submissions/",
        "kind": "announcement"
      },
      {
        "label": "Full report and prompt patterns",
        "url": "https://cdn.openai.com/pdf/26177a73-3b75-4828-8c91-e8f1cf27aaa0/oai_first_proof.pdf",
        "kind": "paper"
      },
      {
        "label": "Organizer comments",
        "url": "https://cowles.yale.edu/sites/default/files/2026-04/d2511.pdf",
        "kind": "paper"
      }
    ],
    "caveat": "The prompt appendix simulates the interaction pattern but is not a complete raw transcript; validation status remains problem-specific and mutable.",
    "editorialNote": "# OpenAI attempts all ten First Proof problems\n\nThis should eventually become a parent campaign with ten child attempt records. Keeping it as one campaign in the prototype preserves the mixed result and avoids implying five settled breakthroughs."
  },
  {
    "schemaVersion": "0.1",
    "id": "unit-distance-conjecture",
    "title": "AI model disproves the planar unit-distance conjecture",
    "recordType": "case",
    "domain": "mathematics",
    "field": "discrete geometry",
    "outcome": "complete",
    "contributionMode": "autonomous",
    "summary": "An internal OpenAI model produced an infinite family contradicting Erdős's conjectured upper-bound behavior, followed by human simplification, context, and extensions.",
    "people": [
      "Mehtaab Sawhney",
      "Mark Sellke",
      "External mathematical reviewers"
    ],
    "organizations": [
      "OpenAI"
    ],
    "systems": [
      "Undisclosed OpenAI internal model"
    ],
    "promptAvailability": "full",
    "timeline": [
      {
        "date": "2026-05-20",
        "precision": "day",
        "type": "disclosure",
        "label": "Proof, prompt, and run materials released"
      },
      {
        "date": "2026-05",
        "precision": "month",
        "type": "verification",
        "label": "External expert remarks released"
      }
    ],
    "validation": [
      {
        "type": "expert-review",
        "status": "passed",
        "note": "Multiple independent mathematicians reviewed and contextualized the construction."
      }
    ],
    "sources": [
      {
        "label": "Announcement",
        "url": "https://openai.com/index/model-disproves-discrete-geometry-conjecture/",
        "kind": "announcement"
      },
      {
        "label": "Proof, exact prompt, and original response",
        "url": "https://cdn.openai.com/pdf/74c24085-19b0-4534-9c90-465b8e29ad73/unit-distance-proof.pdf",
        "kind": "prompt"
      },
      {
        "label": "Abridged run trace",
        "url": "https://cdn.openai.com/pdf/1625eff6-5ac1-40d8-b1db-5d5cf925de8b/unit-distance-cot.pdf",
        "kind": "transcript"
      },
      {
        "label": "Companion expert remarks",
        "url": "https://cdn.openai.com/pdf/74c24085-19b0-4534-9c90-465b8e29ad73/unit-distance-remarks.pdf",
        "kind": "paper"
      }
    ],
    "caveat": "The internal model identity, hidden system prompt, attempt count, and compute budget were not disclosed; the public trace is abridged.",
    "editorialNote": "# AI model disproves the planar unit-distance conjecture\n\nThis is one of the most completely documented headline cases: the initial prompt, original response, long abridged trace, proof, and external mathematical commentary are all public."
  },
  {
    "schemaVersion": "0.1",
    "id": "virtual-lab-nanobodies",
    "title": "Virtual Lab designs SARS-CoV-2 nanobody variants",
    "recordType": "case",
    "domain": "biology",
    "field": "protein engineering",
    "outcome": "partial",
    "contributionMode": "human-ai collaboration",
    "summary": "A GPT-4o PI agent and specialist agents designed 92 nanobody mutants; more than 90% expressed solubly and two improved binding against newer variants in wet-lab tests.",
    "people": [
      "James Zou",
      "Virtual Lab collaborators"
    ],
    "organizations": [
      "Stanford University"
    ],
    "systems": [
      "Virtual Lab",
      "GPT-4o"
    ],
    "promptAvailability": "full",
    "timeline": [
      {
        "date": "2025",
        "precision": "year",
        "type": "attempt",
        "label": "Agent discussions and design campaign"
      },
      {
        "date": "2025",
        "precision": "year",
        "type": "peer-review",
        "label": "Nature paper published"
      }
    ],
    "validation": [
      {
        "type": "wet-lab",
        "status": "passed",
        "note": "Expression and binding were experimentally tested."
      },
      {
        "type": "peer-review",
        "status": "passed",
        "note": "Peer-reviewed Nature publication."
      }
    ],
    "sources": [
      {
        "label": "Nature paper",
        "url": "https://www.nature.com/articles/s41586-025-09442-9",
        "kind": "paper"
      },
      {
        "label": "Prompts, discussions, code, and scoring artifacts",
        "url": "https://github.com/zou-group/virtual_lab",
        "kind": "code"
      }
    ],
    "caveat": "The work mutated known scaffolds and measured binding, not viral neutralization; humans supplied high-level feedback and ran the experiments.",
    "editorialNote": "# Virtual Lab designs SARS-CoV-2 nanobody variants\n\nThe public repository contains unusually rich multi-agent discussion and scoring traces, making this a strong non-mathematical prompt-provenance case."
  },
  {
    "schemaVersion": "0.1",
    "id": "zeroth-order-convex-lower-bound",
    "title": "GPT-5.6 closes a zeroth-order convex-optimization gap",
    "recordType": "case",
    "domain": "mathematics",
    "field": "convex optimization",
    "outcome": "complete",
    "contributionMode": "human-ai collaboration",
    "summary": "A 148-minute run using a CDC-style prompt produced the main quadratic lower-bound argument; Phillip Kerger checked and formally verified it, then obtained a stronger refinement in a later chat.",
    "people": [
      "Phillip Kerger"
    ],
    "organizations": [
      "UC Berkeley"
    ],
    "systems": [
      "GPT-5.6 Sol Pro",
      "Lean"
    ],
    "promptAvailability": "full",
    "timeline": [
      {
        "date": "2026-07-15",
        "precision": "day",
        "type": "attempt",
        "label": "Original uninterrupted 148-minute run"
      },
      {
        "date": "2026-07-16",
        "precision": "day",
        "type": "disclosure",
        "label": "Preprint, prompts, chats, and Lean repository shared"
      }
    ],
    "validation": [
      {
        "type": "formal",
        "status": "passed",
        "note": "Author-reviewed Lean formalization; not yet peer reviewed at cutoff."
      }
    ],
    "sources": [
      {
        "label": "Repository, preprint, prompts, and Lean project",
        "url": "https://github.com/PhillipKerger/zero-order-bounds-lean-verification",
        "kind": "code"
      },
      {
        "label": "Original chat",
        "url": "https://chatgpt.com/share/6a55aa50-b484-83ea-85c0-c7e7b4bda41c",
        "kind": "transcript"
      },
      {
        "label": "Refinement chat",
        "url": "https://chatgpt.com/share/6a55ad10-7644-83ea-859e-5483d2e0dff0",
        "kind": "transcript"
      }
    ],
    "caveat": "The result was new and not peer reviewed at the research cutoff; the human researcher selected the problem, authored the elaborate prompt, checked the proof, and formalized it.",
    "editorialNote": "# GPT-5.6 closes a zeroth-order convex-optimization gap\n\nThis is a particularly strong prompt-transfer case: a researcher explicitly adapted the Cycle Double Cover orchestration style to a different mathematical domain and preserved the resulting run."
  }
] as const;
