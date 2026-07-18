// Generated from the Markdown archive. Do not edit by hand.
export const records = [
  {
    "schemaVersion": "0.1",
    "id": "acra-synthesis-reproduction",
    "problemIds": [
      "synthesis-procedure-reproducibility"
    ],
    "title": "ACRA converts literature procedures into robotic syntheses",
    "recordType": "campaign",
    "domain": "chemistry",
    "field": "synthetic chemistry and laboratory automation",
    "outcome": "mixed",
    "contributionMode": "experimental loop",
    "summary": "ACRA generated executable procedures from published chemistry, completed several physical syntheses, and preserved a failed reaction that a chemist also could not reproduce without substantial changes.",
    "people": [
      "Sebastian Pagel",
      "Michael Jirasek",
      "Leroy Cronin"
    ],
    "organizations": [
      "University of Glasgow"
    ],
    "systems": [
      "Autonomous Chemputer Reaction Agents",
      "Chemputer",
      "Opentrons",
      "OpenAI API-based models, exact production version undisclosed"
    ],
    "promptAvailability": "full",
    "timeline": [
      {
        "date": "2026-04-03",
        "precision": "day",
        "type": "peer-review",
        "label": "Peer-reviewed article, code, prompts, and data published"
      }
    ],
    "validation": [
      {
        "type": "wet-lab",
        "status": "mixed",
        "note": "Six procedures were attempted physically, with product isolation, NMR, and yield measurement for successful examples."
      },
      {
        "type": "replication",
        "status": "mixed",
        "note": "One robotic failure received a separate chemist-led attempt that also could not reproduce the reported chemistry without substantial changes."
      },
      {
        "type": "peer-review",
        "status": "passed",
        "note": "Published in Communications Chemistry."
      }
    ],
    "sources": [
      {
        "label": "Communications Chemistry article",
        "url": "https://www.nature.com/articles/s42004-026-01993-w",
        "kind": "paper"
      },
      {
        "label": "Agent code and prompts",
        "url": "https://github.com/croningp/acra",
        "kind": "prompt"
      },
      {
        "label": "Campaign data",
        "url": "https://doi.org/10.5281/zenodo.18980981",
        "kind": "data"
      }
    ],
    "caveat": "This is primarily a literature-reproduction workflow rather than discovery of a new reaction. The system makes explicit best-guess substitutions for ambiguous prose, and some Chemputer-specific packages are not openly downloadable.",
    "editorialNote": "The campaign began with 717 extracted literature procedures. ACRA classified 427 as executable, 89 as blueprints, and 201 as incomplete. On a 150-procedure benchmark, 99.33% produced valid XDL and 94.67% passed discrepancy and simulation checks.\n\nThe most important child attempt concerns methyl 4,6-O-benzylidene-alpha-D-glucopyranoside. The robotic reaction showed no conversion, and an independent chemist-led attempt also failed to reproduce the source without significant procedural changes."
  },
  {
    "schemaVersion": "0.1",
    "id": "aila-afmbench",
    "problemIds": [
      "atomic-force-microscopy-automation"
    ],
    "title": "AILA benchmarks agents on physical microscopy tasks",
    "recordType": "campaign",
    "domain": "physics and materials science",
    "field": "atomic force microscopy and laboratory automation",
    "outcome": "mixed",
    "contributionMode": "experimental loop",
    "summary": "AILA performed real atomic-force-microscopy workflows and evaluated four language models over 300 task instances, exposing code failures, routing errors, and safety-relevant instruction drift.",
    "people": [
      "Indrajeet Mandal",
      "Jitendra Soni",
      "Mohd Zaki",
      "Nitya Nand Gosvami",
      "N. M. Anoop Krishnan"
    ],
    "organizations": [
      "Indian Institute of Technology Delhi",
      "Aalborg University",
      "Friedrich Schiller University Jena"
    ],
    "systems": [
      "AILA",
      "GPT-4o",
      "GPT-3.5-turbo-0125",
      "Llama-3.3-70B-versatile",
      "Claude-3.5-sonnet-20241022"
    ],
    "promptAvailability": "full",
    "timeline": [
      {
        "date": "2025-10-14",
        "precision": "day",
        "type": "peer-review",
        "label": "Peer-reviewed benchmark, prompts, physical experiments, and selected logs published"
      }
    ],
    "validation": [
      {
        "type": "wet-lab",
        "status": "mixed",
        "note": "The study executed calibration, feature detection, friction measurement, graphene analysis, and indenter-identification tasks on real AFM hardware."
      },
      {
        "type": "peer-review",
        "status": "passed",
        "note": "Published in Nature Communications."
      },
      {
        "type": "safety-review",
        "status": "mixed",
        "note": "Some agents exceeded requested operations, and code-repair loops could terminate after 20 unsuccessful attempts."
      }
    ],
    "sources": [
      {
        "label": "Nature Communications article and supplementary prompts",
        "url": "https://www.nature.com/articles/s41467-025-64105-7",
        "kind": "prompt"
      }
    ],
    "caveat": "The campaign automates established microscopy workflows rather than establishing a new physical finding. A correct final measurement did not guarantee that the agent followed safe or authorized instructions.",
    "editorialNote": "AFMBench contains 100 expert-designed tasks, each evaluated in three independent trials. GPT-4o had a reported 29% error rate across the 300 task instances, while the other tested models had error rates between 51.6% and 66.6%.\n\nThe paper also reports successful real-instrument demonstrations. Keeping those beside the failures prevents a polished demonstration from obscuring the reliability and safety evidence."
  },
  {
    "schemaVersion": "0.1",
    "id": "alab-gpss-spinel-campaign",
    "problemIds": [
      "lithium-halide-spinel-optimization"
    ],
    "title": "A-Lab GPSS runs 352 spinel-electrolyte experiments",
    "recordType": "campaign",
    "domain": "chemistry",
    "field": "solid-state chemistry and battery materials",
    "outcome": "mixed",
    "contributionMode": "experimental loop",
    "summary": "A GPT-5 agent proposed and executed 263 samples in a 352-experiment lithium-halide campaign, raising the joint phase-purity and conductivity hit rate while preserving the full low-yield denominator.",
    "people": [
      "Yuxing Fei",
      "Bernardus Rendy",
      "Gerbrand Ceder",
      "A-Lab GPSS collaborators"
    ],
    "organizations": [],
    "systems": [
      "A-Lab GPSS",
      "GPT-5 with high reasoning effort",
      "Bayesian optimization"
    ],
    "promptAvailability": "full",
    "timeline": [
      {
        "date": "2025-11-03",
        "precision": "day",
        "type": "attempt",
        "label": "The 53-day laboratory campaign began"
      },
      {
        "date": "2025-12-26",
        "precision": "day",
        "type": "attempt",
        "label": "Campaign ended after 352 synthesized samples"
      },
      {
        "date": "2026-04-13",
        "precision": "day",
        "type": "preprint",
        "label": "Paper, prompts, code, and campaign data released"
      }
    ],
    "validation": [
      {
        "type": "wet-lab",
        "status": "passed",
        "note": "All proposed samples were physically synthesized and evaluated using X-ray diffraction and electrochemical impedance spectroscopy."
      },
      {
        "type": "data-correction",
        "status": "mixed",
        "note": "The team later updated 13 conductivity values and human reinspection found occasional phase-fitting problems."
      }
    ],
    "sources": [
      {
        "label": "Campaign paper",
        "url": "https://arxiv.org/abs/2604.11957",
        "kind": "paper"
      },
      {
        "label": "Code and workflow prompts",
        "url": "https://github.com/CederGroupHub/alab_gpss_public",
        "kind": "prompt"
      },
      {
        "label": "Permanent campaign dataset",
        "url": "https://doi.org/10.5281/zenodo.19396297",
        "kind": "data"
      }
    ],
    "caveat": "Humans constrained the search space and handled several physical and analytical steps. The final joint hit rate was 5.33%, so the result is an optimization campaign with many unsuccessful experiments rather than one autonomous breakthrough.",
    "editorialNote": "Humans designed the first 77 samples and 12 later samples. The agent proposed and executed 263 samples while using abnormality detection, inductive pattern finding, Bayesian optimization, and a reflection memory.\n\nThe public experiment table is more informative than a success label: it covers 19 metals and 124 of 171 possible pairwise metal combinations, and it retains every unsuccessful sample alongside the improving hit rate."
  },
  {
    "schemaVersion": "0.1",
    "id": "aletheia-erdos-sweep",
    "problemIds": [
      "erdos-open-problems"
    ],
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
    "editorialNote": "This campaign is central to the archive because it preserves a denominator and exposes failure modes that disappear when only successful cases are publicized."
  },
  {
    "schemaVersion": "0.1",
    "id": "alphaproof-nexus",
    "problemIds": [
      "erdos-open-problems",
      "oeis-open-problems"
    ],
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
    "editorialNote": "The campaign illustrates why formal verification, statement fidelity, novelty, and mathematical significance must remain distinct fields."
  },
  {
    "schemaVersion": "0.1",
    "id": "astroagents-hypothesis-campaign",
    "problemIds": [
      "astrobiology-mass-spectrometry-hypotheses"
    ],
    "title": "AstroAgents generates hypotheses from meteorite spectra",
    "recordType": "campaign",
    "domain": "astronomy and chemistry",
    "field": "astrobiology and mass spectrometry",
    "outcome": "partial",
    "contributionMode": "agentic search",
    "summary": "Eight collaborating agents generated more than 100 hypotheses from meteorite and soil mass-spectrometry data; one astrobiology expert judged 36% plausible and 66% of that subset novel.",
    "people": [
      "Daniel Saeedi",
      "Denise Buckner",
      "Jose C. Aponte",
      "Amirali Aghazadeh"
    ],
    "organizations": [
      "Georgia Institute of Technology",
      "NASA Goddard Space Flight Center"
    ],
    "systems": [
      "AstroAgents",
      "Gemini 2.0 Flash",
      "Claude 3.5 Sonnet",
      "Semantic Scholar"
    ],
    "promptAvailability": "full",
    "timeline": [
      {
        "date": "2025-03-29",
        "precision": "day",
        "type": "preprint",
        "label": "Paper, agent prompts, result directories, and interactive workflow released"
      }
    ],
    "validation": [
      {
        "type": "expert-review",
        "status": "mixed",
        "note": "A NASA astrobiology expert rated more than 100 proposals for plausibility and novelty; the hypotheses were not experimentally validated."
      }
    ],
    "sources": [
      {
        "label": "AstroAgents paper",
        "url": "https://arxiv.org/abs/2503.23170",
        "kind": "paper"
      },
      {
        "label": "Interactive role prompts and generated hypotheses",
        "url": "https://astroagents.github.io/",
        "kind": "prompt"
      },
      {
        "label": "MIT-licensed code, prompt, and result directories",
        "url": "https://github.com/amirgroup-codes/AstroAgents",
        "kind": "code"
      }
    ],
    "caveat": "Novelty and plausibility ratings from one domain expert are proposal triage, not confirmation. The public artifacts still need enumeration to determine whether every generated hypothesis and iteration is preserved.",
    "editorialNote": "The system divides work among a data analyst, planner, three domain scientists, accumulator, literature reviewer, and critic. The public site makes the role prompts visible and allows the Claude and Gemini outputs to be compared.\n\nThis record remains partial because the outcome is a set of expert-rated research proposals. No new astrobiological mechanism was established by experiment."
  },
  {
    "schemaVersion": "0.1",
    "id": "bartnik-admissible-extension-attempt",
    "problemIds": [
      "bartnik-admissible-extension"
    ],
    "promptId": "bartnik-admissible-extension",
    "title": "CDC-style attempt on the Bartnik admissible-extension conjecture",
    "recordType": "attempt",
    "domain": "mathematics and physics",
    "field": "geometric analysis and general relativity",
    "outcome": "unsuccessful",
    "contributionMode": "human-ai collaboration",
    "summary": "A CDC-style multi-agent prompt ran in Codex for 2 hours 47 minutes and ended without a proof after several candidate routes failed adversarial audit.",
    "people": [
      "Kevin Connolly"
    ],
    "organizations": [],
    "systems": [
      "Codex multiagent v2 (underlying model not recorded in the task export)"
    ],
    "promptAvailability": "full",
    "timeline": [
      {
        "date": "2026-07-15",
        "precision": "day",
        "type": "attempt",
        "label": "Multi-agent proof attempt began and ended without a proof"
      }
    ],
    "validation": [
      {
        "type": "artifact-review",
        "status": "passed",
        "note": "The author-provided Codex task preserves the complete prompt, duration, intermediate public status messages, and final no-proof response."
      }
    ],
    "sources": [
      {
        "label": "Author-provided Codex task",
        "url": "codex://threads/019f68a1-94df-7a93-abc1-caf8740b4726",
        "kind": "transcript"
      }
    ],
    "caveat": "This is one documented attempt under a deliberately strict success criterion, not evidence against the conjecture. The run ended before the prompt's requested four-hour minimum, and the underlying model identifier was not exposed in the accessible task export.",
    "editorialNote": "Kevin Connolly adapted the research-management structure of OpenAI's Cycle Double Cover prompt to the universal Bartnik admissible-extension conjecture. The task explored quasi-spherical, positive-scalar-curvature collar, conformal, variational, high-codimension, and charged-handle routes. Candidate constructions repeatedly failed exact boundary, curvature, smoothing, or horizon-exclusion audits.\n\nThe final response explicitly declined to fabricate the indispensable global extension lemma and returned no proof. Hidden chain-of-thought is not reproduced; the archive preserves the submitted prompt, public status messages, elapsed time, and final outcome."
  },
  {
    "schemaVersion": "0.1",
    "id": "bixbench-trajectories",
    "problemIds": [
      "bioinformatics-research-benchmark"
    ],
    "title": "BixBench publishes 2,120 bioinformatics trajectories",
    "recordType": "campaign",
    "domain": "biology",
    "field": "computational biology and bioinformatics",
    "outcome": "mixed",
    "contributionMode": "agentic search",
    "summary": "BixBench releases 2,120 raw agent trajectories across research-like bioinformatics questions, with generated notebooks, repeated runs, configurations, and evaluation data.",
    "people": [
      "Ludovico Mitchener",
      "Jon M Laurent",
      "Alex Andonian",
      "Samuel G Rodriques",
      "BixBench collaborators"
    ],
    "organizations": [
      "FutureHouse",
      "ScienceMachine"
    ],
    "systems": [
      "BixBench",
      "GPT-4o configurations",
      "Claude configurations"
    ],
    "promptAvailability": "full",
    "timeline": [
      {
        "date": "2025-02-28",
        "precision": "day",
        "type": "preprint",
        "label": "Benchmark, task set, and agent evaluations publicly disclosed"
      }
    ],
    "validation": [
      {
        "type": "benchmark-scoring",
        "status": "mixed",
        "note": "Multiple-choice tasks use direct scoring; open-ended responses use model graders and should not be treated as independent scientific validation."
      },
      {
        "type": "artifact-review",
        "status": "passed",
        "note": "The release exposes 2,120 raw trajectories and a corresponding evaluation table under an Apache-2.0 license."
      }
    ],
    "sources": [
      {
        "label": "BixBench repository, prompts, and configurations",
        "url": "https://github.com/Future-House/BixBench",
        "kind": "prompt"
      },
      {
        "label": "Benchmark dataset",
        "url": "https://huggingface.co/datasets/futurehouse/BixBench",
        "kind": "data"
      },
      {
        "label": "Benchmark paper",
        "url": "https://arxiv.org/abs/2503.00096",
        "kind": "paper"
      }
    ],
    "caveat": "These are benchmark attempts derived from published notebooks, not 2,120 new biological findings. Open-ended scores rely on automated grading, and embedded source materials may retain third-party terms.",
    "editorialNote": "The benchmark contains 205 open-ended and multiple-choice questions derived from 60 published computational-biology notebooks and their data capsules. Tasks require data exploration, code execution, interpretation, hypothesis generation, and validation.\n\nIts main value to this archive is methodological scale. Five-replica configurations and raw generated notebooks make it possible to study variance, refusals, execution errors, and apparent successes without reducing the campaign to a single leaderboard number."
  },
  {
    "schemaVersion": "0.1",
    "id": "cycle-double-cover",
    "problemIds": [
      "cycle-double-cover"
    ],
    "promptId": "cycle-double-cover",
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
    "editorialNote": "The two-page prompt is primarily a research-management and adversarial-validation protocol: portfolio diversity, approach registries, independent agents, cross-pollination, and repeated audits are more central than domain hints."
  },
  {
    "schemaVersion": "0.1",
    "id": "earthlink-atlantic-nino-attempt",
    "problemIds": [
      "atlantic-nino-forecast-skill"
    ],
    "title": "EarthLink attempts an eight-month Atlantic Niño forecast",
    "recordType": "attempt",
    "domain": "climate science",
    "field": "ocean-atmosphere variability and seasonal forecasting",
    "outcome": "unsuccessful",
    "contributionMode": "agentic search",
    "summary": "EarthLink proposed an Atlantic wind-thermocline precursor and improved on persistence and ENSO-only comparators, but its hindcasts missed the requested temporal-correlation target above 0.5.",
    "people": [
      "Zijie Guo",
      "Jiong Wang",
      "Fenghua Ling",
      "Lei Bai",
      "EarthLink collaborators"
    ],
    "organizations": [
      "OpenEarthLab"
    ],
    "systems": [
      "EarthLink",
      "Exact production backbone undisclosed"
    ],
    "promptAvailability": "full",
    "timeline": [
      {
        "date": "2025-07-23",
        "precision": "day",
        "type": "preprint",
        "label": "Exact research request, analyses, and target-missed result publicly disclosed"
      }
    ],
    "validation": [
      {
        "type": "retrospective-analysis",
        "status": "mixed",
        "note": "Historical hindcasts reached temporal correlations of roughly 0.36 to 0.46, above comparison methods but below the requested threshold."
      },
      {
        "type": "expert-review",
        "status": "reported",
        "note": "Authors and experts assessed the proposed mechanism; no prospective forecast or independent replication was identified."
      }
    ],
    "sources": [
      {
        "label": "Original paper with exact research request",
        "url": "https://arxiv.org/abs/2507.17311",
        "kind": "prompt"
      },
      {
        "label": "EarthLink project site",
        "url": "https://www.openearthlab.com/EarthLink/",
        "kind": "announcement"
      },
      {
        "label": "Public system repository",
        "url": "https://github.com/OpenEarthLab/EarthLink",
        "kind": "code"
      }
    ],
    "caveat": "The numerical target was not met, the mechanism remains an author-proposed hypothesis, and the exact model used for this production run is not sufficiently clear from the public materials.",
    "editorialNote": "The prompt asked the agent to exceed a temporal-correlation skill of 0.5 at an eight-month lead, identify useful precursors, build multiple forecasting models, and explain the physical mechanism.\n\nThe attempt is useful precisely because its outcome is not binary. It missed the stated threshold while still generating a physically consistent candidate pathway and outperforming simpler comparators in retrospective analysis."
  },
  {
    "schemaVersion": "0.1",
    "id": "einsteinarena-distributed-discovery",
    "problemIds": [
      "einsteinarena-optimization-problems"
    ],
    "title": "EinsteinArena agents improve twelve mathematical bounds",
    "recordType": "campaign",
    "domain": "mathematics",
    "field": "discrete geometry, number theory, and extremal optimization",
    "outcome": "partial",
    "contributionMode": "agentic search",
    "summary": "A live distributed arena reported twelve verifier-backed state-of-the-art scores, including a dimension-11 kissing-number construction improving the known lower bound from 593 to 604.",
    "people": [
      "Federico Bianchi",
      "Yongchan Kwon",
      "Aneesh Pappu",
      "James Zou"
    ],
    "organizations": [
      "Stanford University",
      "Together AI"
    ],
    "systems": [
      "EinsteinArena",
      "Heterogeneous user-supplied agents with generally undisclosed model configurations"
    ],
    "promptAvailability": "representative",
    "timeline": [
      {
        "date": "2026-03-19",
        "precision": "day",
        "type": "disclosure",
        "label": "EinsteinArena launched as a live agent problem-solving platform"
      },
      {
        "date": "2026-05",
        "precision": "month",
        "type": "verification",
        "label": "Campaign snapshot reported twelve new state-of-the-art scores"
      },
      {
        "date": "2026-06-09",
        "precision": "day",
        "type": "preprint",
        "label": "Paper and lineage analysis publicly released"
      },
      {
        "date": "2026-07-17",
        "precision": "day",
        "type": "verification",
        "label": "Archive audit confirmed public retained solutions, discussions, verifiers, and the 604 certificate"
      }
    ],
    "validation": [
      {
        "type": "certified-computation",
        "status": "mixed",
        "note": "Public verifiers establish submitted construction feasibility or score, not global optimality; some verifiers changed after precision and validity bugs were found."
      },
      {
        "type": "artifact-review",
        "status": "mixed",
        "note": "Full retained solution payloads and discussions are public, but rejected submissions, local experiments, detailed verifier logs, and result-specific prompts are generally absent."
      }
    ],
    "sources": [
      {
        "label": "EinsteinArena paper",
        "url": "https://arxiv.org/abs/2606.10402",
        "kind": "paper"
      },
      {
        "label": "Generic participation prompt and API protocol",
        "url": "https://einsteinarena.com/skill.md",
        "kind": "prompt"
      },
      {
        "label": "Live problem and discussion platform",
        "url": "https://einsteinarena.com/",
        "kind": "transcript"
      },
      {
        "label": "New state-of-the-art result repository",
        "url": "https://github.com/togethercomputer/EinsteinArena-new-SOTA",
        "kind": "code"
      },
      {
        "label": "Kissing-number certificates",
        "url": "https://github.com/togethercomputer/EinsteinArena-new-SOTA/tree/main/kissing-number",
        "kind": "certificate"
      }
    ],
    "caveat": "The twelve results are construction or bound improvements, not twelve theorem proofs. Agent model settings and result-specific prompts are not generally public, and current leaderboard scores can differ from the dated paper snapshot.",
    "editorialNote": "EinsteinArena lets independently operated agents download problem specifications and earlier solutions, submit constructions to public verifiers, and exchange research notes. The public API retains multiple personal-best submissions, so portions of collaborative progress can be reconstructed.\n\nThe prompt record is much weaker than the solution record. The generic participation prompt is public, but the agents' exact prompts, model configurations, local tool traces, rejected submissions, and human interventions are not required disclosures."
  },
  {
    "schemaVersion": "0.1",
    "id": "erdos-848",
    "problemIds": [
      "erdos-848"
    ],
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
    "promptAvailability": "partial",
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
    "caveat": "Substantial human correction and proof development were required; this was not an autonomous resolution. The public shared page preserves all textual user messages but not the bodies of two uploaded attachments.",
    "editorialNote": "The full chat makes the division of labor unusually inspectable and supports later prompt-method analysis."
  },
  {
    "schemaVersion": "0.1",
    "id": "funsearch-cap-sets",
    "problemIds": [
      "cap-set-constructions"
    ],
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
    "editorialNote": "This is an early workflow-level case: a language model proposes programs, an automated evaluator scores them, and successful programs become context for later generations. The archive should preserve the scaffold and evaluator as prompt artifacts when licensing permits."
  },
  {
    "schemaVersion": "0.1",
    "id": "futurehouse-robin-amd",
    "problemIds": [
      "dry-amd-drug-repurposing"
    ],
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
    "editorialNote": "Exact prompts, sample trajectories, code, and the RNA-seq accession make this one of the strongest reproducibility records in agentic biology."
  },
  {
    "schemaVersion": "0.1",
    "id": "gpt4-breast-cancer-drug-pairs",
    "problemIds": [
      "breast-cancer-drug-combinations"
    ],
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
    "editorialNote": "This campaign is valuable precisely because it preserves both positive and negative experimental outcomes, plus a confident but incorrect biological explanation."
  },
  {
    "schemaVersion": "0.1",
    "id": "lossfunk-four-research-attempts",
    "problemIds": [
      "autonomous-ml-research-pipeline"
    ],
    "title": "Lossfunk preserves one completed and three failed research attempts",
    "recordType": "campaign",
    "domain": "computer science",
    "field": "machine-learning research and meta-science",
    "outcome": "mixed",
    "contributionMode": "autonomous",
    "summary": "A six-agent research pipeline completed one workshop paper while three other ideas failed during implementation or evaluation, with workflow prompts and per-attempt failure analyses published together.",
    "people": [
      "Dhruv Trehan",
      "Paras Chopra"
    ],
    "organizations": [
      "Lossfunk"
    ],
    "systems": [
      "Lossfunk AI Scientist pipeline",
      "Six specialized LLM agents"
    ],
    "promptAvailability": "full",
    "timeline": [
      {
        "date": "2025",
        "precision": "year",
        "type": "attempt",
        "label": "Four end-to-end machine-learning research attempts were conducted"
      },
      {
        "date": "2025-10-22",
        "precision": "day",
        "type": "verification",
        "label": "The completed paper appeared at Agents4Science 2025"
      },
      {
        "date": "2026-01-06",
        "precision": "day",
        "type": "preprint",
        "label": "Four-attempt report, workflow prompts, artifacts, and failure analyses released"
      }
    ],
    "validation": [
      {
        "type": "conference-review",
        "status": "mixed",
        "note": "One paper passed human and multi-AI review at an experimental workshop; three attempts did not reach a defensible paper."
      },
      {
        "type": "artifact-review",
        "status": "passed",
        "note": "The public repository explicitly labels the implementation and evaluation failure stages instead of inferring failure from absent outputs."
      }
    ],
    "sources": [
      {
        "label": "Four-attempt report",
        "url": "https://arxiv.org/abs/2601.03315",
        "kind": "paper"
      },
      {
        "label": "Workflow prompts and per-attempt artifacts",
        "url": "https://github.com/Lossfunk/ai-scientist-artefacts-v1",
        "kind": "prompt"
      },
      {
        "label": "Completed Agents4Science submission",
        "url": "https://openreview.net/forum?id=B6ZrLXou3u",
        "kind": "paper"
      }
    ],
    "caveat": "Workshop acceptance is not independent confirmation of the completed paper's claims. The artifact repository had no visible license file at the research cutoff, so the archive links rather than mirrors its prompt text.",
    "editorialNote": "The four ideas share one research workflow. A multi-agent reinforcement-learning idea failed during implementation, two world-model ideas failed during evaluation, and a semantic-entropy jailbreak-detection paper completed the pipeline.\n\nThe set is a compact example of why campaigns should remain connected. Publishing only the completed paper would hide three quarters of the attempted research and erase the reported failure modes."
  },
  {
    "schemaVersion": "0.1",
    "id": "nesterov-point-convergence",
    "problemIds": [
      "nesterov-point-convergence"
    ],
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
    "editorialNote": "The interaction reportedly lasted about twelve hours over three days. This record is a useful counterweight to one-shot narratives: researcher judgment selected and repaired a promising but initially incorrect model idea."
  },
  {
    "schemaVersion": "0.1",
    "id": "openai-first-proof",
    "problemIds": [
      "first-proof-benchmark"
    ],
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
    "editorialNote": "This should eventually become a parent campaign with ten child attempt records. Keeping it as one campaign in the prototype preserves the mixed result and avoids implying five settled breakthroughs."
  },
  {
    "schemaVersion": "0.1",
    "id": "sciexplorer-physics-models",
    "problemIds": [
      "simulated-physics-model-discovery"
    ],
    "title": "SciExplorer investigates initially unknown physics models",
    "recordType": "campaign",
    "domain": "physics",
    "field": "classical, wave, and quantum dynamics",
    "outcome": "mixed",
    "contributionMode": "agentic search",
    "summary": "A general-purpose agent used experiments and code to recover equations of motion and Hamiltonians across simulated physical systems, while full logs also preserve premature and incorrect model commitments.",
    "people": [
      "Maximilian Nägele",
      "Florian Marquardt"
    ],
    "organizations": [
      "Max Planck Institute for the Science of Light",
      "Friedrich-Alexander-Universität Erlangen-Nürnberg"
    ],
    "systems": [
      "SciExplorer",
      "Gemini 2.5 Pro",
      "GPT-5 mini",
      "GPT-5 nano"
    ],
    "promptAvailability": "full",
    "timeline": [
      {
        "date": "2025-09-29",
        "precision": "day",
        "type": "preprint",
        "label": "Framework, generic prompt, and benchmark results first disclosed"
      },
      {
        "date": "2026-05-22",
        "precision": "day",
        "type": "verification",
        "label": "Paper accepted by Physical Review X"
      },
      {
        "date": "2026-07-08",
        "precision": "day",
        "type": "peer-review",
        "label": "Peer-reviewed article published with public framework and logs"
      }
    ],
    "validation": [
      {
        "type": "benchmark-scoring",
        "status": "mixed",
        "note": "Final answers were machine-checked against known simulated systems, exposing successful and failed exploration runs."
      },
      {
        "type": "peer-review",
        "status": "passed",
        "note": "Published in Physical Review X."
      }
    ],
    "sources": [
      {
        "label": "Physical Review X article",
        "url": "https://journals.aps.org/prx/abstract/10.1103/xnqc-q6nt",
        "kind": "paper"
      },
      {
        "label": "Framework and generic system prompt",
        "url": "https://github.com/MaxNaeg/SciExplorer",
        "kind": "prompt"
      },
      {
        "label": "Complete exploration logs",
        "url": "https://github.com/MaxNaeg/SciExplorerResults",
        "kind": "transcript"
      }
    ],
    "caveat": "The agent rediscovered models in controlled simulations rather than previously unknown laws of nature. The environments and scoring rules were designed by the researchers.",
    "editorialNote": "SciExplorer received the same compact, general system prompt across tasks and could choose numerical experiments, analyze results, write code, and decide when to submit a testable final model.\n\nThe authors deliberately avoided task-specific prompt repairs. That makes the public failures, including sign errors and early commitment to an incorrect model, unusually useful for studying how research-agent prompts generalize across domains."
  },
  {
    "schemaVersion": "0.1",
    "id": "street-differential-equation-counterexample",
    "problemIds": [
      "weighted-difference-quotient-ode-uniqueness"
    ],
    "title": "ChatGPT suggests a differential-equation counterexample",
    "recordType": "case",
    "domain": "mathematics",
    "field": "analysis and differential equations",
    "outcome": "complete",
    "contributionMode": "human-ai collaboration",
    "summary": "ChatGPT-5.5 Pro supplied the key oscillatory construction for a smooth non-uniqueness counterexample after five comparison models failed or returned incorrect proofs.",
    "people": [
      "Brian Street"
    ],
    "organizations": [],
    "systems": [
      "ChatGPT-5.5 Pro",
      "ChatGPT-5.2 Pro",
      "ChatGPT-5.4 Pro",
      "Gemini 3 DeepThink",
      "Claude Opus 4.6 Extended"
    ],
    "promptAvailability": "full",
    "timeline": [
      {
        "date": "2026-03-27",
        "precision": "day",
        "type": "attempt",
        "label": "Five comparison-model attempts failed or returned incorrect proofs"
      },
      {
        "date": "2026-04-22",
        "precision": "day",
        "type": "attempt",
        "label": "ChatGPT-5.5 Pro produced the successful construction"
      },
      {
        "date": "2026-05-06",
        "precision": "day",
        "type": "preprint",
        "label": "Human-checked counterexample, prompt, and annotated response published"
      }
    ],
    "validation": [
      {
        "type": "author-proof",
        "status": "passed",
        "note": "Street repaired skipped steps, supplied missing estimates, and wrote a detailed proof of the counterexample."
      },
      {
        "type": "comparison-runs",
        "status": "mixed",
        "note": "Five same-problem model attempts were unsuccessful, although their full raw outputs were not published."
      }
    ],
    "sources": [
      {
        "label": "Paper, exact prompt, and annotated model response",
        "url": "https://arxiv.org/abs/2605.04810",
        "kind": "prompt"
      }
    ],
    "caveat": "The work is a recent preprint without formal verification or identified peer review. The printed prompt uses a closely related weighted-Laplace formulation rather than the final theorem verbatim.",
    "editorialNote": "Brian Street asked whether zero initial data force uniqueness for a difference-quotient differential equation with a positive smooth weight. The successful model response arrived after 43 minutes of reported thinking and proposed the flat, oscillatory construction that became the core of the counterexample.\n\nThe source is especially valuable because it does not present the successful run in isolation. It dates five comparison attempts, states that they failed or produced incorrect proofs, prints the successful prompt and response, and annotates where human repair was required."
  },
  {
    "schemaVersion": "0.1",
    "id": "unit-distance-conjecture",
    "problemIds": [
      "planar-unit-distance-conjecture"
    ],
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
    "editorialNote": "This is one of the most completely documented headline cases: the initial prompt, original response, long abridged trace, proof, and external mathematical commentary are all public."
  },
  {
    "schemaVersion": "0.1",
    "id": "virtual-lab-nanobodies",
    "problemIds": [
      "sars-cov-2-nanobody-design"
    ],
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
    "editorialNote": "The public repository contains unusually rich multi-agent discussion and scoring traces, making this a strong non-mathematical prompt-provenance case."
  },
  {
    "schemaVersion": "0.1",
    "id": "zeroth-order-convex-lower-bound",
    "problemIds": [
      "zeroth-order-convex-lower-bound"
    ],
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
    "editorialNote": "This is a particularly strong prompt-transfer case: a researcher explicitly adapted the Cycle Double Cover orchestration style to a different mathematical domain and preserved the resulting run."
  }
] as const;

export const problems = [
  {
    "schemaVersion": "0.1",
    "id": "astrobiology-mass-spectrometry-hypotheses",
    "title": "Astrobiology hypotheses from mass-spectrometry data",
    "kind": "research-question",
    "domain": "astronomy and chemistry",
    "field": "astrobiology and analytical chemistry",
    "status": "active-research",
    "statusLabel": "Hypotheses awaiting validation",
    "statusAsOf": "2025-03-29",
    "summary": "Generating plausible and novel hypotheses about meteorite and soil chemistry from mass-spectrometry data and the astrobiology literature.",
    "authoritativeUrl": "https://arxiv.org/abs/2503.23170",
    "editorialNote": "Expert novelty and plausibility ratings identify proposals worth examining, but they are not experimental confirmation of the hypotheses."
  },
  {
    "schemaVersion": "0.1",
    "id": "atlantic-nino-forecast-skill",
    "title": "Eight-month Atlantic Niño forecasting",
    "kind": "research-question",
    "domain": "climate science",
    "field": "ocean-atmosphere variability and seasonal forecasting",
    "status": "active-research",
    "statusLabel": "Active research",
    "statusAsOf": "2025-07-23",
    "summary": "Identifying physically meaningful precursors that can extend June-August Atlantic Niño forecast skill to an eight-month lead.",
    "authoritativeUrl": "https://arxiv.org/abs/2507.17311",
    "editorialNote": "The tracked attempt set a temporal-correlation target above 0.5. It proposed a potentially useful precursor mechanism but did not meet that target."
  },
  {
    "schemaVersion": "0.1",
    "id": "atomic-force-microscopy-automation",
    "title": "Autonomous atomic-force-microscopy workflows",
    "kind": "benchmark",
    "domain": "physics and materials science",
    "field": "atomic force microscopy and laboratory automation",
    "status": "benchmark",
    "statusLabel": "Benchmark campaign",
    "statusAsOf": "2025-10-14",
    "summary": "Designing, executing, and analyzing atomic-force-microscopy experiments while measuring tool-coordination, code-generation, and instruction-adherence failures.",
    "authoritativeUrl": "https://www.nature.com/articles/s41467-025-64105-7",
    "editorialNote": "The benchmark includes physical instrument tasks and safety-relevant cases where agents exceeded the requested operation even when the final result appeared correct."
  },
  {
    "schemaVersion": "0.1",
    "id": "autonomous-ml-research-pipeline",
    "title": "End-to-end autonomous machine-learning research",
    "kind": "collection",
    "domain": "computer science",
    "field": "machine-learning research and meta-science",
    "status": "collection",
    "statusLabel": "Research-attempt collection",
    "statusAsOf": "2026-01-06",
    "summary": "Taking machine-learning research ideas through hypothesis formation, implementation, evaluation, and paper preparation while preserving failed attempts.",
    "authoritativeUrl": "https://arxiv.org/abs/2601.03315",
    "editorialNote": "This collection separates a completed workshop paper from three attempts that failed during implementation or evaluation."
  },
  {
    "schemaVersion": "0.1",
    "id": "bartnik-admissible-extension",
    "title": "Bartnik admissible-extension conjecture",
    "kind": "problem",
    "domain": "mathematics and physics",
    "field": "geometric analysis and general relativity",
    "status": "open",
    "statusLabel": "Open",
    "statusAsOf": "2026-07-15",
    "summary": "Whether every Bartnik body possesses a smooth admissible asymptotically flat extension satisfying the boundary, curvature, topology, and horizon conditions.",
    "authoritativeUrl": "https://arxiv.org/abs/1906.05893",
    "editorialNote": "The tracked attempt targeted the universal existence statement, excluding special cases, approximate matching, and reductions to stronger unproved conjectures."
  },
  {
    "schemaVersion": "0.1",
    "id": "bioinformatics-research-benchmark",
    "title": "Open-ended bioinformatics research questions",
    "kind": "benchmark",
    "domain": "biology",
    "field": "computational biology and bioinformatics",
    "status": "benchmark",
    "statusLabel": "Benchmark collection",
    "statusAsOf": "2025-02-28",
    "summary": "Research-like bioinformatics questions derived from published notebooks, requiring data exploration, code execution, interpretation, and hypothesis generation.",
    "authoritativeUrl": "https://github.com/Future-House/BixBench",
    "editorialNote": "BixBench supplies a large public attempt denominator and reusable trajectories, but benchmark performance is not itself a new biological discovery."
  },
  {
    "schemaVersion": "0.1",
    "id": "breast-cancer-drug-combinations",
    "title": "Breast-cancer drug-combination discovery",
    "kind": "research-question",
    "domain": "biology",
    "field": "drug repurposing",
    "status": "active-research",
    "statusLabel": "Active research",
    "statusAsOf": "2025",
    "summary": "Finding drug combinations with useful synergy against breast-cancer models while retaining biological plausibility and safety.",
    "authoritativeUrl": "https://doi.org/10.1098/rsif.2024.0674",
    "editorialNote": "The linked campaign includes positive and negative experimental results and explicit model errors; it is not a clinical efficacy claim."
  },
  {
    "schemaVersion": "0.1",
    "id": "cap-set-constructions",
    "title": "Improved cap-set constructions",
    "kind": "research-question",
    "domain": "mathematics",
    "field": "combinatorics",
    "status": "active-research",
    "statusLabel": "Active research",
    "statusAsOf": "2023-12-14",
    "summary": "Constructing larger subsets of finite vector spaces containing no nontrivial three-term arithmetic progressions.",
    "authoritativeUrl": "https://www.nature.com/articles/s41586-023-06924-6",
    "editorialNote": "The archive treats improved constructions as partial progress on an ongoing extremal problem rather than as a binary conjecture resolution."
  },
  {
    "schemaVersion": "0.1",
    "id": "cycle-double-cover",
    "title": "Cycle Double Cover Conjecture",
    "kind": "problem",
    "domain": "mathematics",
    "field": "graph theory",
    "status": "claimed-resolved",
    "statusLabel": "Resolution claimed",
    "statusAsOf": "2026-07-16",
    "summary": "Whether every finite bridgeless loopless multigraph has a cycle double cover.",
    "authoritativeUrl": "https://github.com/openai/cdc-lean",
    "editorialNote": "The archive currently tracks the recent AI-produced proof claim and public Lean formalization. Its status remains dated because formal checking, statement fidelity, novelty, and wider mathematical acceptance are distinct questions."
  },
  {
    "schemaVersion": "0.1",
    "id": "dry-amd-drug-repurposing",
    "title": "Drug-repurposing directions for dry AMD",
    "kind": "research-question",
    "domain": "biology",
    "field": "ophthalmology and drug repurposing",
    "status": "active-research",
    "statusLabel": "Active research",
    "statusAsOf": "2026",
    "summary": "Identifying mechanistically plausible existing drugs that could improve retinal pigment epithelium function in dry age-related macular degeneration.",
    "authoritativeUrl": "https://www.nature.com/articles/s41586-026-10652-y",
    "editorialNote": "The tracked work produced an in-vitro direction, not a demonstrated treatment. Problem status therefore remains active research."
  },
  {
    "schemaVersion": "0.1",
    "id": "einsteinarena-optimization-problems",
    "title": "EinsteinArena mathematical optimization problems",
    "kind": "collection",
    "domain": "mathematics",
    "field": "discrete geometry, number theory, and extremal optimization",
    "status": "collection",
    "statusLabel": "Live problem collection",
    "statusAsOf": "2026-07-17",
    "summary": "A live collection of verifier-backed mathematical optimization problems where independently operated agents submit constructions and share research notes.",
    "authoritativeUrl": "https://einsteinarena.com/",
    "editorialNote": "Scores and current leaders change over time. Every result must therefore retain its retrieval date, verifier version, and distinction between feasibility and global optimality."
  },
  {
    "schemaVersion": "0.1",
    "id": "erdos-848",
    "title": "Erdős problem 848",
    "kind": "problem",
    "domain": "mathematics",
    "field": "combinatorial number theory",
    "status": "claimed-resolved",
    "statusLabel": "Resolution claimed",
    "statusAsOf": "2025-11-20",
    "summary": "A canonical Erdős problem in combinatorial number theory for which an AI-assisted solution was reported.",
    "authoritativeUrl": "https://www.erdosproblems.com/848",
    "editorialNote": "The associated record preserves the human-AI chat and emphasizes the substantial human correction and proof development after the model proposed its key idea."
  },
  {
    "schemaVersion": "0.1",
    "id": "erdos-open-problems",
    "title": "Erdős open problems",
    "kind": "collection",
    "domain": "mathematics",
    "field": "number theory and combinatorics",
    "status": "collection",
    "statusLabel": "Problem collection",
    "statusAsOf": "2026-07-16",
    "summary": "A collection of open-labeled problems associated with Paul Erdős, used in several large AI proof-search campaigns.",
    "authoritativeUrl": "https://www.erdosproblems.com/",
    "editorialNote": "Campaign-level records remain attached to this collection until the archive has enough evidence to create child records for identifiable individual problems."
  },
  {
    "schemaVersion": "0.1",
    "id": "first-proof-benchmark",
    "title": "First Proof research problems",
    "kind": "benchmark",
    "domain": "mathematics",
    "field": "research mathematics",
    "status": "benchmark",
    "statusLabel": "Benchmark set",
    "statusAsOf": "2026-04",
    "summary": "Ten research-level mathematics problems used to assess AI-generated proof attempts with problem-author feedback.",
    "authoritativeUrl": "https://firstproof.org/",
    "editorialNote": "This benchmark stays aggregated until each problem and its changing expert assessment can be represented faithfully."
  },
  {
    "schemaVersion": "0.1",
    "id": "lithium-halide-spinel-optimization",
    "title": "Lithium-halide spinel electrolyte optimization",
    "kind": "research-question",
    "domain": "chemistry",
    "field": "solid-state chemistry and battery materials",
    "status": "active-research",
    "statusLabel": "Active research",
    "statusAsOf": "2026-04-13",
    "summary": "Optimizing air-sensitive chloride spinel solid electrolytes for both phase purity and ionic conductivity.",
    "authoritativeUrl": "https://arxiv.org/abs/2604.11957",
    "editorialNote": "The linked campaign is best understood as a 352-experiment optimization program with a visible hit rate, not as one isolated material breakthrough."
  },
  {
    "schemaVersion": "0.1",
    "id": "nesterov-point-convergence",
    "title": "Point convergence of Nesterov accelerated gradient",
    "kind": "problem",
    "domain": "mathematics",
    "field": "optimization",
    "status": "claimed-resolved",
    "statusLabel": "Resolution claimed",
    "statusAsOf": "2025-10-27",
    "summary": "Establishing pointwise convergence behavior for Nesterov's accelerated gradient method under the studied convex optimization conditions.",
    "authoritativeUrl": "https://arxiv.org/abs/2510.23513",
    "editorialNote": "The record documents a human-AI collaboration in which the model suggested a useful restructuring and the human authors corrected errors and completed the proof."
  },
  {
    "schemaVersion": "0.1",
    "id": "oeis-open-problems",
    "title": "OEIS conjectures and open questions",
    "kind": "collection",
    "domain": "mathematics",
    "field": "integer sequences",
    "status": "collection",
    "statusLabel": "Problem collection",
    "statusAsOf": "2026-05-21",
    "summary": "Conjectures and open questions arising from integer sequences catalogued by the OEIS.",
    "authoritativeUrl": "https://oeis.org/",
    "editorialNote": "This collection currently connects to a formal proof-search campaign; individual sequence claims should become separate problem records only after statement-level review."
  },
  {
    "schemaVersion": "0.1",
    "id": "planar-unit-distance-conjecture",
    "title": "Planar unit-distance conjecture",
    "kind": "problem",
    "domain": "mathematics",
    "field": "discrete geometry",
    "status": "claimed-disproved",
    "statusLabel": "Disproof claimed",
    "statusAsOf": "2026-05-20",
    "summary": "An Erdős conjecture concerning the asymptotic upper-bound behavior of unit-distance pairs among planar point sets.",
    "authoritativeUrl": "https://openai.com/index/model-disproves-discrete-geometry-conjecture/",
    "editorialNote": "The archive records a reported infinite-family counterconstruction and external expert review while keeping model identity and run-budget gaps visible."
  },
  {
    "schemaVersion": "0.1",
    "id": "sars-cov-2-nanobody-design",
    "title": "SARS-CoV-2 nanobody variant design",
    "kind": "research-question",
    "domain": "biology",
    "field": "protein engineering",
    "status": "active-research",
    "statusLabel": "Active research",
    "statusAsOf": "2025",
    "summary": "Designing nanobody variants with improved expression and binding against evolving SARS-CoV-2 variants.",
    "authoritativeUrl": "https://www.nature.com/articles/s41586-025-09442-9",
    "editorialNote": "The associated work measured expression and binding, not viral neutralization, and therefore represents experimental progress within an ongoing research program."
  },
  {
    "schemaVersion": "0.1",
    "id": "simulated-physics-model-discovery",
    "title": "Discovery of physical models from simulated observations",
    "kind": "benchmark",
    "domain": "physics",
    "field": "classical, wave, and quantum dynamics",
    "status": "benchmark",
    "statusLabel": "Benchmark campaign",
    "statusAsOf": "2026-07-08",
    "summary": "Recovering equations of motion, Hamiltonians, and other model structure by designing and analyzing experiments in initially unknown simulated systems.",
    "authoritativeUrl": "https://journals.aps.org/prx/abstract/10.1103/xnqc-q6nt",
    "editorialNote": "The environments are controlled simulations, allowing both successful recovery and premature commitment to incorrect models to be scored."
  },
  {
    "schemaVersion": "0.1",
    "id": "synthesis-procedure-reproducibility",
    "title": "Reproducibility of published chemical synthesis procedures",
    "kind": "research-question",
    "domain": "chemistry",
    "field": "synthetic chemistry and laboratory automation",
    "status": "active-research",
    "statusLabel": "Active research",
    "statusAsOf": "2026-04-03",
    "summary": "Translating published synthesis prose into executable procedures while detecting ambiguity and identifying procedures that cannot be reproduced.",
    "authoritativeUrl": "https://www.nature.com/articles/s42004-026-01993-w",
    "editorialNote": "The ACRA campaign connects procedure extraction, executable protocol generation, robotic execution, and chemist-led review of failures."
  },
  {
    "schemaVersion": "0.1",
    "id": "weighted-difference-quotient-ode-uniqueness",
    "title": "Uniqueness for a weighted difference-quotient differential equation",
    "kind": "problem",
    "domain": "mathematics",
    "field": "analysis and differential equations",
    "status": "claimed-disproved",
    "statusLabel": "Counterexample claimed",
    "statusAsOf": "2026-05-06",
    "summary": "Whether zero initial data force uniqueness for a difference-quotient differential equation with a positive smooth weight.",
    "authoritativeUrl": "https://arxiv.org/abs/2605.04810",
    "editorialNote": "The associated paper gives a smooth non-uniqueness counterexample and also proves uniqueness for a broad structured class of weights."
  },
  {
    "schemaVersion": "0.1",
    "id": "zeroth-order-convex-lower-bound",
    "title": "Zeroth-order convex-optimization lower bound",
    "kind": "problem",
    "domain": "mathematics",
    "field": "convex optimization",
    "status": "claimed-resolved",
    "statusLabel": "Gap claimed closed",
    "statusAsOf": "2026-07-16",
    "summary": "Closing a lower-bound gap for zeroth-order convex optimization, including a stronger refinement and formal verification.",
    "authoritativeUrl": "https://github.com/PhillipKerger/zero-order-bounds-lean-verification",
    "editorialNote": "The result was new and formally checked by the author at the archive cutoff but had not yet completed peer review."
  }
] as const;

export const prompts = [
  {
    "schemaVersion": "0.2",
    "id": "acra-synthesis-reproduction",
    "recordId": "acra-synthesis-reproduction",
    "title": "ACRA synthesis-agent prompt bundle",
    "author": "Sebastian Pagel, Michael Jirasek, Leroy Cronin, and collaborators",
    "origin": "Public ACRA source repository",
    "sourceUrl": "https://github.com/croningp/acra",
    "sourceCommit": "723b1e282ba00c5aed1a087ba92422a3bc3ead7d",
    "retrievedAt": "2026-07-17",
    "originalFormat": "Python source files",
    "artifactType": "source-bundle",
    "completeness": "full",
    "permissionBasis": "Redistribution under the repository's BSD-style license with its license notice preserved in the source bundle.",
    "publicationStatus": "approved",
    "transcriptionMode": "Verbatim source files from the cited repository commit.",
    "rawSources": [
      "sources/acra-synthesis-reproduction/ambiguity.py",
      "sources/acra-synthesis-reproduction/ambiguity_prompt.py",
      "sources/acra-synthesis-reproduction/critique_prompt.py",
      "sources/acra-synthesis-reproduction/procedure_prompt.py",
      "sources/acra-synthesis-reproduction/steps.py",
      "sources/acra-synthesis-reproduction/steps_OT.py",
      "sources/acra-synthesis-reproduction/test.py",
      "sources/acra-synthesis-reproduction/xdl_prompt.py",
      "sources/acra-synthesis-reproduction/prompts.py"
    ],
    "displayFiles": [
      "sources/acra-synthesis-reproduction/procedure_prompt.py",
      "sources/acra-synthesis-reproduction/ambiguity_prompt.py",
      "sources/acra-synthesis-reproduction/xdl_prompt.py",
      "sources/acra-synthesis-reproduction/critique_prompt.py"
    ],
    "structure": [
      "procedure extraction",
      "ambiguity detection",
      "human clarification",
      "XDL generation",
      "critique and repair"
    ],
    "body": "The source repository separates ACRA's workflow across several prompt templates. The complete local bundle preserves each template as code so placeholders and output contracts remain visible.\n\n========================================\n\nSOURCE FILE: sources/acra-synthesis-reproduction/procedure_prompt.py\n\nsystem_prompt = \"\"\"\nYou are an expert synthetic chemist specialized in making chemical synthesis procedures\nunambiguous and reproducible. You will be given a chemical synthesis procedure and you\nwill be asked to identify the key components of the procedure. You will also be asked\nto identify any potential issues. You will have to identify all chemicals used in the\nprocedure, and all ambiguities stopping one from executing the procedure. So it is important\nthat you can map out the procedure and give physical exactness to the procedure. For\nexample, exact amounts, exact times, exact temperatures, exact pressures, and steering speeds.\nThis is important because the procedure is executed like a computer program, so each step\nhas certain arguments and conditions that must be exactly assigned.\nIf you have to make any best guesses (for amounts, times, etc.), make sure you \nmake your decision based upon the other values (amounts, volumes, etc...) provided in the procedure.\n\"\"\"\n\nraw_procedure_prompt = \"\"\"\nThis is the procedure paper you are working on:\n``` {procedure} ```\n\nCommonly found ambiguities in chemical synthesis procedures are:\n```{ambiguities} ```\n\nAdditionally here are some examples of ambiguous language and their solutions from previous procedures that you might find helpful:\n``` {previous_ambiguities} ```\n\nPlease do the following:\n    1. Identify all chemicals used in the procedure.\n        - Include the chemical name, amount, and unit.\n        - If the name is not in english, please translate it to english.\n        - Only include the chemical names, and strip any extra information (e.g. \"anhydrous\" or \"dry\" or \"soluion\", or \"concentration\", etc.)\n        - do not extract chemical if their name is unspecific like \"reagent A\", \"Aldehyde 1\", \"Ketone 5\", \"reagent B\", \"compound A\", \"A\", \"5d\", \"1a\" etc.\n    2. Identify all potential hazards in the procedure.\n        - This includes physical and chemical harms, environmental hazards, and\n          safety concerns.\n        For example: - High pressure - Air sensitive reagents - Toxic reagents -\n        Etc.\n    3. Identify all ambiguities you think you can resolve yourself. Use the\n       ambiguity library and provided examples to resolve ambiguities as well as\n       your reasoning capabilities (guesses for physical values should always depend on the procedure and the amount, conditions, etc used).\n        - ambigious or unclear language, and ambiguous or unclear steps.\n        - missing information\n        - unclear conditions (e.g. temperature, pressure, time, etc.)\n        - unclear amounts (e.g. stoichiometry, equivalents, drops, etc.)\n        - ambigious steering speeds\n    4. Write down all ambiguities that you CAN NOT resolve yourself/lines where\n       the order of execution is unclear. Even after consulting the ambiguity\n       library and provided examples, you are still unsure about the meaning of\n       the line.\n        - this concerns lines where you are not sure about the order of execution\n            or the meaning of the line.\n        - this also concerns lines where you are not sure if an error is present\n            in the representation of the procedure.\n\nRespond in the following valid json format: ``` {response_format} ```\n\"\"\"\n\n\nraw_procedure_paper_prompt = \"\"\"\nThis is the procedure you are working on:\n``` {procedure} ```\n\nCommonly found ambiguities in chemical synthesis procedures are:\n```{ambiguities} ```\n\nAdditionally here are some examples of ambiguous language and their solutions from previous procedures that you might find helpful:\n``` {previous_ambiguities} ```\n\nPlease do the following:\n    1. Identify all chemicals used in the procedure.\n        - Include the chemical name, amount, and unit.\n        - If the name is not in english, please translate it to english.\n        - Only include the chemical names, and strip any extra information (e.g. \"anhydrous\" or \"dry\" or \"soluion\", or \"concentration\", etc.)\n        - do not extract chemical if their name is unspecific like \"reagent A\", \"Aldehyde 1\", \"Ketone 5\", \"reagent B\", \"compound A\", \"A\", \"5d\", \"1a\" etc.\n    2. Identify all potential hazards in the procedure.\n        - This includes physical and chemical harms, environmental hazards, and\n          safety concerns.\n        For example: - High pressure - Air sensitive reagents - Toxic reagents -\n        Etc.\n    3. Identify all ambiguities you think you can resolve yourself. Use the\n       ambiguity library and provided examples to resolve ambiguities as well as\n       your reasoning capabilities (guesses for physical values should always depend on the procedure and the amount, conditions, etc used).\n        - ambigious or unclear language, and ambiguous or unclear steps.\n        - missing information\n        - unclear conditions (e.g. temperature, pressure, time, etc.)\n        - unclear amounts (e.g. stoichiometry, equivalents, drops, etc.)\n        - ambigious steering speeds\n    4. You can query the original paper for additional information.\n        Write down questions that should be searched in the original paper. Think about it like a search engine query.\n        The question should always contain the context of the procedure and the information you are looking for.\n        For example: \"What is the general procedure for the synthesis of `product name`?\", ...\n        - this mostly concerns information that is not present in the procedure, but might be present in the original paper.\n    5. Write down all ambiguities that you CAN NOT resolve yourself/lines where\n       the order of execution is unclear. Even after consulting the ambiguity\n       library and provided examples, you are still unsure about the meaning of\n       the line.\n        - this concerns lines where you are not sure about the order of execution\n            or the meaning of the line.\n        - this also concerns lines where you are not sure if an error is present\n            in the representation of the procedure.\n\nRespond in the following valid json format: ``` {response_format} ```\n\"\"\"\n\n\nclean_system_prompt = \"\"\"\nYou are an expert synthetic chemist specialized in making chemical synthesis\nprocedures unambiguous and reproducible. Previously you were given a chemical\nsynthesis procedure and you were asked to identify the key components of the\nprocedure. You were also be asked to identify any potential issues. You have\nidentified all chemicals used in the procedure, all ambiguities stopping one\nfrom executing the procedure. You will be asked to provide a detailed and clear\nexplanation of the procedure (as possible with the available data and your\nknowledge), making sure all ambiguities are resolved and the procedure is clear\nand reproducible. This is important because the procedure is executed like a\ncomputer program, so each step has certain arguments and conditions that must be\nexactly assigned. Additionally, you will be asked to classify the procedure into\nthe following categories: \"A\": Clear and reproducible, \"B\": Blueprints for\nsynthesis, \"C\": Incomplete and missing information.\nIf you have to make any best guesses (for amounts, times, etc.), make sure you \nmake your decision based upon the other values (amounts, volumes, etc...) provided in the procedure.\n\"\"\"\n\nclean_procedure_prompt = \"\"\"\nThe following information was provided by the user. Always obey the user's information.:\n```\n{user_request}\n```\n\nThe procedure was as follows:\n```\n{procedure}\n```\n\nThe chemicals used in the procedure are:\n```\n{identified_chemicals}\n```\n\nThe ambiguities identified in the procedure are:\n```\n{identified_ambiguities}\n```\n\nAdditionally the following ambiguities were resolved by an expert:\n```\n{ambiguity_library}\n```\n\nTo resolve the ambiguities feel free to use this knowledge if helpful.\nAmbiguities that are typically found in chemical synthesis procedures are:\n```\n{ambiguities}\n```\n\nAdditionally here are some examples of ambiguous language and their solutions from previous procedures:\n```\n{previous_ambiguities}\n```\n\nPlease do the following:\n    1. Make sure everything is in english\n    2. Rewrite the procedure to make it clear and reproducible.\n       - Only retain the information that is necessary to perform the synthesis.\n       - Remove any information that comes after the product of the synthesis is obtained.\n    3. Replace all ambiguities with exact conditions, amounts, and times (where you know or can infer them).\n       - it is extremely important that you can map out the\n              procedure and give physical exactness to the procedure.\n       - use the amount specified in the chemicals section to replace any ambiguous amounts if possible\n    4. Make sure that amounts of chemicals are in the right format:\n        - Amounts of  liquids are specified in a volume unit! \n        - Amounts of solids are specified in a mass unit!\n    5. Resolve all ambiguities you have previously identified.\n        - it is extremely important that you can map out the\n            procedure and give physical exactness to the procedure.\n    6. Classify the procedure into the following categories (always obey the user's information):\n        - \"A\": Clear and reproducible (all of the following conditions are met):\n            - procedure details steps to perform a chemical reaction.\n            - all chemicals are identified with specific chemical names meaning no unresolved placeholders like `A`, `B`, `compound A`, `Ligand A`, `5`, `amine 1`, `aldehyde 1`, etc.\n            - all major ambiguities are resolved\n            - all conditions are clear and reproducible\n            - all amounts available in either mass or volume unit. \n            - None of the amounts are only provided in molars, equivalents, or ratios.\n            - this does not include drying-agents or column materials\n        - \"B\": Blueprints for synthesis\n            - procedure is a `General Procedure` for a chemical synthesis where some chemical names, conditions, volumes amount, etc. are not specific.\n            - chemical names are not specfic. For example numbers or single letters are used instead of chemical names.\n                    OR a chemical category (i.e. the ether, or the alcohol, amide, substrate, class ... instead of explicit chemical) is used instead of a specific chemical name.\n            - any amount is not in a mass (mg, g, ug, kg, ...) or volume (ml, L, ul, cm3, ...) unit. For example, equivalents, molars (mol, mmol umol, etc), or ratios are used instead of specific amounts.\n        - \"C\": Incomplete and missing information\n            - the procedure is missing key information to execute the procedure.\n            - OR the procedure is not a chemical synthesis procedure. (This is the case if NO chemical reactions are present, that are physically executed.)\n                so for example, simulations, or theoretical procedures are not chemical synthesis procedures.\n\nBefore you start note down all changes you make to the procedure and the reasons for the changes.\nFor example:\n1. Changed: \"added rapidly\" to \"added\"\n   Reason: \"added rapidly\" is ambiguous and can be interpreted in different ways.\n2. Changed: \"ambient temperature\" to \"25°C\"\n   Reason: \"ambient temperature\" is ambiguous and can be interpreted in different ways.\n3. Changed: 2 mmol to 1.06 g\n   Reason: 2 mmol can not be easily measured, so it is better to use the mass of the chemical.\n\n\nRespond to the following valid json format:\n```\n{response_format}\n```\n\"\"\"\n\nclean_procedure_prompt_paper = \"\"\"\nThe following information was provided by the user. Always obey the user's information.:\n```\n{user_request}\n```\n\nThe procedure was as follows:\n```\n{procedure}\n```\n\nAdditionally here are relevant sections from the original paper:\n```\n{paperqa}\n```\n\nThe chemicals used in the procedure are:\n```\n{identified_chemicals}\n```\n\nThe ambiguities identified in the procedure are:\n```\n{identified_ambiguities}\n```\n\nAdditionally the following ambiguities were resolved by an expert:\n```\n{ambiguity_library}\n```\n\nTo resolve the ambiguities feel free to use this knowledge if helpful.\nAmbiguities that are typically found in chemical synthesis procedures are:\n```\n{ambiguities}\n```\n\nAdditionally here are some examples of ambiguous language and their solutions from previous procedures:\n```\n{previous_ambiguities}\n```\n\nPlease do the following:\n    1. Make sure everything is in english\n    2. Rewrite the procedure to make it clear and reproducible.\n       - Only retain the information that is necessary to perform the synthesis.\n       - Remove any information that comes after the product of the synthesis is obtained.\n    3. Replace all ambiguities with exact conditions, amounts, and times (where you know or can infer them).\n       - it is extremely important that you can map out the\n              procedure and give physical exactness to the procedure.\n       - use the amount specified in the chemicals section to replace any ambiguous amounts if possible\n    4. Make sure that amounts of chemicals are in the right format:\n        - Amounts of  liquids are specified in a volume unit!\n        - Amounts of solids are specified in a mass unit!\n    5. Resolve all ambiguities you have previously identified.\n        - it is extremely important that you can map out the\n            procedure and give physical exactness to the procedure.\n    6. Classify the procedure into the following categories (always obey the user's information):\n        - \"A\": Clear and reproducible (all of the following conditions are met):\n            - procedure details steps to perform a chemical reaction.\n            - all chemicals are identified with specific chemical names meaning no unresolved placeholders like `A`, `B`, `compound A`, `Ligand A`, `5`, `amine 1`, `aldehyde 1`, etc.\n            - all major ambiguities are resolved\n            - all conditions are clear and reproducible\n            - all amounts available in either mass or volume unit.\n            - None of the amounts are only provided in molars, equivalents, or ratios.\n            - this does not include drying-agents or column materials\n        - \"B\": Blueprints for synthesis\n            - procedure is a `General Procedure` for a chemical synthesis where some chemical names, conditions, volumes amount, etc. are not specific.\n            - chemical names are not specfic. For example numbers or single letters are used instead of chemical names.\n                    OR a chemical category (i.e. the ether, or the alcohol, amide, substrate, class ... instead of explicit chemical) is used instead of a specific chemical name.\n            - any amount is not in a mass (mg, g, ug, kg, ...) or volume (ml, L, ul, cm3, ...) unit. For example, equivalents, molars (mol, mmol umol, etc), or ratios are used instead of specific amounts.\n        - \"C\": Incomplete and missing information\n            - the procedure is missing key information to execute the procedure.\n            - OR the procedure is not a chemical synthesis procedure. (This is the case if NO chemical reactions are present, that are physically executed.)\n                so for example, simulations, or theoretical procedures are not chemical synthesis procedures.\n\nBefore you start note down all changes you make to the procedure and the reasons for the changes.\nFor example:\n1. Changed: \"added rapidly\" to \"added\"\n   Reason: \"added rapidly\" is ambiguous and can be interpreted in different ways.\n2. Changed: \"ambient temperature\" to \"25°C\"\n   Reason: \"ambient temperature\" is ambiguous and can be interpreted in different ways.\n3. Changed: 2 mmol to 1.06 g\n   Reason: 2 mmol can not be easily measured, so it is better to use the mass of the chemical.\n\nRespond to the following valid json format:\n```\n{response_format}\n```\n\"\"\"\n\n\nresponse_format = \"\"\"\n{\n    \"ambiguities\": {\"ambiguity1\": \"solution\", \"ambiguity2\": \"solution\", ...},\n    \"unresolved_ambiguities\": {\"full sentence from procedure here\": {\n    \"questions\": [\n        \"question 1\",\n        \"question 2\",\n        ...\n    ]\n    }, \"full sentence from procedure here\": {\n    \"questions\": [\n        \"question 1\",\n        \"question 2\",\n        ...\n    ]\n    }}, # if no unresolved ambiguities, write an empty dictionary\n    \"chemicals\": [[name, amount_used_in_procedure, unit], [name, amount_used_in_procedure, unit], ...], # If no amount is provided in the procedure, write [name, None, None]\n    \"hazards\": [List of potential hazards identified in the procedure. If None, write an empty list],\n}\n\"\"\"\n\nresponse_format_paper = \"\"\"\n{\n    \"ambiguities\": {\"ambiguity1\": \"solution\", \"ambiguity2\": \"solution\", ...},\n    \"unresolved_ambiguities\": {\n    full sentence from procedure here\": {\n    \"questions\": [\n        \"question 1\",\n        \"question 2\",\n        ...\n    ]\n    }, \"full sentence from procedure here\": {\n    \"questions\": [\n        \"question 1\",\n        \"question 2\",\n        ...\n    ]\n    }}, # if no unresolved ambiguities, write an empty dictionary\n    \"paperqa\": [\"question 1\", \"question 2\", ...], # write full sentences for questions you want to ask the original paper\n    \"chemicals\": [[name, amount_used_in_procedure, unit], [name, amount_used_in_procedure, unit], ...], # If no amount is provided in the procedure, write [name, None, None]\n    \"hazards\": [List of potential hazards identified in the procedure. If None, write an empty list]\n}\n\"\"\"\n\n\nresponse_format_clean_procedure = \"\"\"\n{\n    \"procedure\": \"Rewritten procedure\",\n    \"chemicals\": [list of chemicals used in the procedure],\n    \"remaining_ambiguities\": [list of remaining ambiguities identified in the procedure. If none, write an empty list],\n    \"classification\": {\n        \"reasoning\": \"Reasoning for the classification according to the definitions provided above\",\n        \"classification\": \"A or B or C\",\n    }\n}\n\"\"\"\n\n========================================\n\nSOURCE FILE: sources/acra-synthesis-reproduction/ambiguity_prompt.py\n\nsystem_prompt = \"\"\"\nYou are an expert synthetic chemist specialized in making chemical synthesis\nprocedures unambiguous and reproducible. You will be given a chemical synthesis\nprocedure and your task will be to ask questions about each step of the\nprocedure. The purpose of this task is to resolve any ambiguities in the\nprocedure to make it clearly reproducible. Meaning all steps should have an\nobvious and unambiguous interpretation and order etc. Do not ask any chemistry\nquestions, only ask questions that will help make the procedure reproducible.\n\"\"\"\n\nambiguity_prompt = \"\"\"\nThis is a chemical synthesis procedure that you need to make unambiguous and reproducible:\n{procedure}\n\nNow ask questions about each step of the procedure to resolve any ambiguities.\nThese can include:\n- everything that needs some unit to be performed (e.g. mL, g, etc.)\n- unclear conditions (e.g. temperature, pressure, time, etc.)\n- unclear amounts (e.g. stoichiometry, equivalents, drops, etc.)\n- ambiguous or unlcear order of steps\n- and everything else that is unclear or ambiguous\n\nFor each step in the procedure, ask at least three question to resolve any ambiguities.\nReply in the following json format:\n```\n{response_format}\n```\n\"\"\"\n\nresponse_format = \"\"\"\n{\n    \"line from procedure here\": {\n    \"questions\": [\n        \"question 1\",\n        \"question 2\",\n        ...\n    ]\n    },\n    \"line from procedure here\": {\n    \"questions\": [\n        \"question 1\",\n        \"question 2\",\n        ...\n    ]\n    },\n    ...\n}\n\"\"\"\n\n========================================\n\nSOURCE FILE: sources/acra-synthesis-reproduction/xdl_prompt.py\n\nsystem_prompt = \"\"\"\nYou are an expert in translating synthetic procedure into XDL. This\nallows you to execute chemical synthesis procedures in an automated and\nunambiguous manner. You will be given a synthetic procedure from\nliterature containing information about a reaction that was performed. Your task\nwill be to translate this procedure into XDL, to make it reproducibly\nexecuteable. You will always provide complete answers that do not require further actions.\nIf you have to make any best guesses (for amounts, times, etc.), make sure you \nmake your decision based upon the other values (amounts, volumes, etc...) provided in the procedure.\n\"\"\"\n\nxdl_prompt = \"\"\"\nXDL Language Description:\n```\n{steps_description}\n```\n\nHere are examples of chemical procedures in synthetic procedure, and the XDL code that was\nused to execute the procedures on a robotic platform:\n```\n{examples}\n```\n\nAdditional information\nIn chemistry ambigious language is often used, this can lead to errors and you should be aware of them:\n```\n{ambiguities}\n```\n\nThe synthetic procedure from literature to be translated into XDL is:\n```\n{new_procedure}\n```\n\nAdditionally, here is some information of the physical properties of the chemicals used in the procedure:\n```\n{chemicals}\nif a solution contains a salt, it is assumed to be dissolved in water unless otherwise stated and the density is 1 g/mL.\n```\n\n\nTo respond do the following: ```\n   FIRST:\n   Extract all chemicals and their roles and amounts from the synthetic procedure.\n   This includes reagents, reactants, solvents, catalysts, products, and any other chemicals used in the procedure:\n   ```{chemicals_response}```\n\n   THEN:\n   Starting from an empty flask, give me step-by-step instructions to execute\n   the procedure. Each chemical has to be added in a separate step (i.e. each\n   reagent, reactant, solvent, catalyst, product, etc.). Solutions that are mentioned in the procedure (xx g of X in Y (yy ml); or similar) should be \n   prepared explicitly in the procedure. If the mixtures result in a liquid solution you can prepare them in a separate reactor and transfer them subsequently into the main reactor.\n   If it will remain a solid, it should be added directly to the main reactor.\n   If a solution is processed in a different vessel, it has to be transferred to that vessel.\n   first explicitly even if not mentioned in the procedure. This solution should always be stirred for a while to ensure that everything is dissolved!\n   The instructions should be in logical order of execution, which can be different from the semantic order in the procedure, in the format:\n   {step_by_step_instructions}\n   ```\n\n   FINALLY:\n      Translate the provided synthetic procedure into XDL. Stricltly follow\n      the format of the XDL language. Enclose the XDL code in the <XDl> tag like this:\n      ```XDL <XDL> ... </XDL>```\n\n      IF the procedure is not executeable with the available XDL steps, note\n      down which steps are not executeable. In this case respond in the\n      following format: ```Not executeable <ERROR>\n         [EXAMPLES] - Can't execute step 1 because of ...\n         - Can't execute step 2 because of ... ...\n      </ERROR>\n```\n\nMake sure to:\n   - Think before you start. Make sure each step is in the logically right order.\n   - First decompose the procedure into step-by-step instructions and write it\n     down explicitly. Do not assume any solutions have been prepared for you. Each addition has to be done separately.\n   - If a chemical/mixture is processed/needed/... in a different vessel it has\n     to be transferred to that vessel first! Even if the transfer is not\n     mentioned explicitly in the procedure.\n   - Write the XDL code paying attention to the previous steps.\n   - Only include XDL steps that are documented in the XDL language.\n   - Make sure to follow the format of the XDL language.\n   - Always include units for all quantities, and make sure they are correct.\n   - Always write exact quantities for all attributes that require them.\n   - Enclose the XDL code in the <XDl> tag.\n   - Not skip any steps in the procedure.\n   - Keep the order of the steps in the procedure.\n   - Note down any steps that are not executeable with the available XDL steps.\n   - Write each step explicitly into the XDL without any shortcuts.\n\nNow translate the provided synthetic procedure into XDL.\nWrite down all the steps.\nI dont have hands and cant read your mind.\n\"\"\"\n\niterative_system_prompt = \"\"\"\nYou are an expert in translating synthetic procedure into XDL. This allows you\nto execute chemical synthesis procedures in an automated and unambiguous manner.\nYou will be given a synthetic procedure from literature containing information\nabout a reaction that was performed. Your task will be to translate this\nprocedure into XDL, to make it reproducibly executeable. Previously you\ngenerated an XDL code for a chemical procedure that will be used to synthesize a\nmolecule. Durinng the execution of the procedure, errors were encountered.\nYou will always provide complete answers that do not require further actions.\nIf you have to make any best guesses (for amounts, times, etc.), make sure you \nmake your decision based upon the other values (amounts, volumes, etc...) provided in the procedure.\n\"\"\"\n\niterative_xdl_prompt = \"\"\"\nXDL Language Description:\n```\n{steps_description}\n```\n\nThis synthetic procedure:\n```\n{new_procedure}\n\nand chemical information:\n{chemicals}\nif a solution contains a salt, it is assumed to be dissolved in water unless otherwise stated and the density is 1 g/mL.\n```\n\n\nWas translated into this uncorrect XDL code:\n```\n{old_xdl}\n```\n\nThese were the errors:\n```\n{errors}\n```\n\nAdditional information:\nIn chemistry ambigious language is often used, this can lead to errors:\n```\n{ambiguities}\n```\n\nPlease fix the errors and warnings.\nWhile you are correcting the new XDL code, make sure to check for any\npotential errors that might not have been captured in the previous execution.\n\nTo respond do the following:\n```\n   FIRST:\n      Map the errors and warnings to all lines of the XDL code of the synthetic procedure causing the error and correct them.\n         {error_mapping_format}\n\n   FINALLY:\n      Correct the provided XDL with the inconsistencies and error identified above. Do not change anything else. \n      Stricltly follow the format of the XDL language:\n      ```XDL <XDL> ... </XDL> ```\n```\n\nMake sure to:\n   - Make sure the order of the steps is correct and as described in the synthetic procedure. If not correct them.\n   - Map the errors and warnings to the XDL code and correct them.\n   - Make sure to write down the new XDL code including all corrections.\n   - Only correct XDL code that was identified as incorrect. Do not change anything else.\n   - Only include XDL tags and attributes that are documented in the XDL language.\n   - Always include exact quantities and units for all attributes that require them.\n   - Make sure to follow the format of the XDL language.\n   - Write each step explicitly into without any shortcuts.\nI dont have hands and cant read your mind.\n\"\"\"\n\n\nchemicals = \"\"\"\n{\n   chemical_name_1: {\n      \"role\": \"role of the chemical (i.e. solvent, reagent, catalyst, substrate, acid, base, activating-agent, product, ...)\",\n      \"amount\": \"amount of the chemical\",\n      },\n   chemical_name_2: {\n      \"role\": \"role of the chemical (i.e. solvent, reagent, catalyst, substrate, acid, base, activating-agent, product,s ...)\",\n      \"amount\": \"amount of the chemical\",},\n   ...\n}\n\"\"\"\n\n\nstep_by_step_instructions = \"\"\"\n{\n   \"step_1\": {\n      \"thought\": what you think the first step in the synthetic procedure is,\n      \"reasoning\": why you think this is the first step,\n      \"instruction\": first step in the synthetic procedure,\n      \"xdl_step\": XDL step for the first step\n   },\n   \"step_2\": {\n      \"thought\": what you think the second step in the synthetic procedure is,\n      \"reasoning\": \"why you think this is the second step\",\n      \"instruction\": \"second step in the synthetic procedure\",\n      \"xdl_step\": \"XDL step for the second step\"\n   },\n   ...\n}\n\"\"\"\n\nmisordered_steps = \"\"\"\n{\n   \"inconsistent_steps_1\": {\n      \"line_in_procedure\": \"line of the synthetic procedure that is not properly represented in the XDL code\",\n      \"xdl_line\": \"line of the XDL code where the step should be\",\n      \"correction\": \"correction to the XDL code\"\n   },\n   \"inconsistent_steps_2\": {\n      ...\n   }\n}\n\"\"\"\n\nerror_mapping_format = \"\"\"\n{\n   \"error_1\": {\n      \"error\": \"error description\",\n      \"xdl_line\": [lines in the XDL code where the error is present],\n      \"correction\": [correction of each line that contains the error]\n   },\n   \"error_2\": {\n      ...\n   }\n}\n\"\"\"\n\n========================================\n\nSOURCE FILE: sources/acra-synthesis-reproduction/critique_prompt.py\n\nsystem_prompt = \"\"\"\nYou are an expert synthetic Chemist. A synthetic procedure was translated into\nXDL, a XML based language to automatically execute chemical procedures on\nrobotic platforms. Given the natural language description of the procedure and\nthe XDL of the synthetic procedure it was translated into, you are asked to\nevaluate the correctness of the XDL of the synthetic procedure.\n\nYou should identify any inconsistencies between the natural language description\nand the XDL of the synthetic procedure, highlighting any missing steps, ambiguities, or errors in the\nXDL that are not properly translated from the synthetic procedure or not\napproximated appropiately. You should also provide suggestions on how to improve\nthe XDL of the synthetic procedure.\n\nIf you think a step from the natural language description is not executeable in\nthe XDL language you will be ask to highlight this as well, which is crucial for\nfurther development of the XDL language.\n\"\"\"\n\ncritique_prompt = \"\"\"\nImplemented steps in the XDL language (If something is not defined here, it is\nnot available in the XDL language):\n```implemented steps in the XDL language\n{steps_description}\n```\n\nnatural language description of the synthetic procedure. You should evaluate the\ncorrectness of the XDL of the synthetic procedure based on this description:\n```natural language description of the synthetic procedure\n{procedure_description}\n\nand chemical information:\n{chemicals}\nif a solution contains a salt, it is assumed to be dissolved in water unless otherwise stated and the density is 1 g/mL.\n```\n\nThis is the XDL of the synthetic procedure the  natural language description of the synthetic procedure was translated into:\n```XDL Code\n{code}\n```\n\nPlease evaluate the correctness of the XDL of the synthetic procedure. Identify any inconsistencies\nbetween the natural language description and the XDL of the synthetic procedure. Highlighting any\nmissing steps or errors in the XDL of the synthetic procedure, and group them by `not_executeable`\n[step not executeable in XDL language] and `missing_steps` [missing in procedure\nbut executeable]. Provide suggestions on how to improve the XDL code. \nMake sure to:\n    - Identify any steps or conditions that are NOT executeable AND missing with the XDL language in the `not_executable` section:\n        - The `thought` field should describe which part of the natural language procedure you think is not executable with the XDL language \n        - This `interpretation` field should describe what you think this part means to achieve\n        - The `reasoning` field should describe why you think it is not executable\n        - The `suggestion` field should provide a suggestion to improve the XDL language and what to do (if applicable).\n        - This will be used to improve the XDL language in the future\n        - No manual steps will be performed, so if something is not executable, it is crucial to highlight it\n    - Identify any steps that are missing in the `missing_steps` section:\n        - The `thought` field should describe which part of the natural language procedure you think is missing or incorrectly translated to XDL of the synthetic procedure\n        - The `natural_language_procedure_line` field should contain the actual text in the natural language procedure where you think the step is missing or incorrect\n        - The `reasoning` field should describe why you think this step is missing or incorrect in the current XDL of the synthetic procedure\n            - This aims to identify any steps were the translation does not match the purpose of the natural language description.\n        - The `suggestion` field should contain the correction that should be made in plain language\n        - The `xdl_step` field should contain the corrected, added, or reordered lines that should be included/changed in the XDL of the synthetic procedure (ONLY use steps and attributes from the XDL language!)\n        You should include:\n            - If a step is not executeable, BUT you think there is a way to execute it with the current state of the XDL language, provide a suggestion on how to do it\n            - Identify any missing steps that CAN be executed with the XDL language but are missing in the `missing_steps` section\n            - Identify any misordered steps in the `missing_steps` section\n            - Identify any operations that are executed in the wrong vessel in the `missing_steps` section (i.e. steps where an operation is performed without the appropriate reagent or solution being transferred to the correct vessel)\n            - Make sure solids are NEVER transferred in a Transfer step. If possible make suggestions on how to improve the XDL of the synthetic procedure to avoid this\n            - Make sure to use the correct solutions or phases in the Separate steps.\n                - The correct phase is declared as target and waste phase\n                - The appropriate phase should always be transferred to the separator again in repeating washing/extracting steps\n            - Make that the correct solutions (solvent, reagent, etc.) are used and are always transferred to the correct vessel\n            - Make sure all operations are performed in the correct order, and on the correct vessel, and with the correct solution/reagents\n            - Make sure all solutions are given sufficient time to dissolve after mixing (especially if the solution has to be transferred to another vessel later)\n    - Do not include the same step in both sections!\n    - Ignore missing steps that do not use the exact same hardware but can be executed with other hardware available in the XDL language\nThe response format should strictly follow this\njson format:\n{response_format}\n\nIf everything is correct, just respond with an empty json object\nMake sure to strictly stick to the described output json format\n\"\"\"\n\ninclusion_system_prompt = \"\"\"\nYou are an expert synthetic Chemist. A synthetic procedure was translated into\nXDL code, a XML based language to automatically execute chemical procedures on\nrobotic platforms. You were requested to incorporate a correction into the XDL\ncode that was translated from a natural language description of the procedure.\n\nYou will be asked to correct the XDL of the synthetic procedure based on the requested correction.\nOnly change the things you have been explicitly requested to change.\n\"\"\"\n\ninclusion_prompt = \"\"\"\nnatural language description of the synthetic procedure. This is the ground\ntruth that should be translated into XDL code:\n```natural language description of the synthetic procedure\n{procedure_description}\n```\n\nThis is the XDL of the synthetic procedure the natural language description was translated into:\n```xdl_code\n{code}\n```\n\nYou were requested to incorporate the correction into the XDL of the synthetic procedure the natural language description:\n```\n{requested_correction}\n```\n\nRespond with the corrected XDL of the synthetic procedure that incorporates the requested correction.\nOnly make adjust the parts of the XDL necessary to incooperate the requested changes. \nWrite the enitre XDL of the synthetic procedure. Do not abbreviate anything! \n\"\"\"\n\n\nresponse_format = \"\"\"\n{\n    \"not_executable\": [\n        {\n            \"thought\": which part of the natural language procedure you think is not executable with the XDL language,\n            \"interpretation\": what you think this part means to achieve,\n            \"reasoning\": why you think it is not executable with the current XDL language,\n            \"suggestion\": suggestion to improve the XDL language and what to do (if applicable),\n        },\n        {\n            \"thought\": which part of the natural language procedure you think is not executable with the XDL language,\n            \"interpretation\": what you think this part means to achieve,\n            \"reasoning\": why you think it is not executable with the current XDL language,\n            \"suggestion\": suggestion to improve the XDL language and what to do (if applicable),\n        },\n        ...\n    ],\n    \"missing_steps\": [\n        {\n            \"thought\":  which part of the natural language procedure you think is missing or incorrectly translated to XDL of the synthetic procedure,\n            \"natural_language_procedure_line\": the actual text in the natural language procedure where you think the step is missing or incorrect,\n            \"reasoning\": why you think this step is missing or incorrect in the current XDL of the synthetic procedure,\n            \"suggestion\": correction that should be made in plain language,\n            \"xdl_step\": corrected, added, or reordered lines that should be included/changed in the XDL of the synthetic procedure (ONLY steps and attributes from the XDL language!),\n        },\n        {\n            \"thought\":  which part of the natural language procedure you think is missing or incorrectly translated to XDL of the synthetic procedure,\n            \"natural_language_procedure_line\": the actual text in the natural language procedure where you think the step is missing or incorrect,\n            \"reasoning\": why you think this step is missing or incorrect in the current XDL of the synthetic procedure,\n            \"suggestion\": correction that should be made in plain language,\n            \"xdl_step\": corrected, added, or reordered lines that should be included/changed in the XDL of the synthetic procedure (ONLY steps and attributes from the XDL language!),\n        },\n        ...\n    ],\n}\n\"\"\""
  },
  {
    "schemaVersion": "0.2",
    "id": "aila-afmbench",
    "recordId": "aila-afmbench",
    "title": "AILA and AFMBench prompt corpus",
    "author": "AILA collaborators",
    "origin": "Public AILA repository",
    "sourceUrl": "https://github.com/M3RG-IITD/AILA",
    "sourceCommit": "3bb78a76ac738ef6912c25bc9c57a58860150984",
    "retrievedAt": "2026-07-17",
    "originalFormat": "Python, JSON, and text files",
    "artifactType": "source-bundle",
    "completeness": "full",
    "permissionBasis": "Redistribution under the repository's MIT License, preserved with the local source bundle.",
    "publicationStatus": "approved",
    "transcriptionMode": "Verbatim source files from the cited repository commit.",
    "rawSources": [
      "sources/aila-afmbench/AILA_4.0.py",
      "sources/aila-afmbench/questions",
      "sources/aila-afmbench/run-prompts"
    ],
    "displayFiles": [
      "sources/aila-afmbench/AILA_4.0.py",
      "sources/aila-afmbench/questions/question_1.json",
      "sources/aila-afmbench/run-prompts/Prompt_1.txt"
    ],
    "structure": [
      "planner system prompt",
      "agent system prompts",
      "100 benchmark user tasks",
      "tool-routing protocol",
      "physical experiment prompts"
    ],
    "body": "This bundle preserves the AILA system implementation, all 100 AFMBench user tasks, and five published physical-experiment prompt and response logs. The site shows a representative slice while the JSONL corpus includes every local source file.\n\n========================================\n\nSOURCE FILE: sources/aila-afmbench/AILA_4.0.py\n\nimport getpass\nimport os\nimport functools\nimport operator\nimport glob\n#import nanosurf\nimport time\nimport numpy as np\nimport matplotlib.pyplot as plt\nfrom langchain_chroma import Chroma\nfrom langchain.chains.query_constructor.base import AttributeInfo\nfrom langchain.retrievers.self_query.base import SelfQueryRetriever\nfrom langchain.tools.retriever import create_retriever_tool\nfrom langchain.agents import tool\nfrom NSFopen.read import read\nfrom matplotlib import pyplot as plt\nfrom skimage.metrics import structural_similarity as ssim\nfrom skimage.metrics import mean_squared_error\nfrom scipy.optimize import curve_fit\nfrom pymoo.core.problem import ElementwiseProblem\nfrom pymoo.algorithms.soo.nonconvex.ga import GA\nfrom pymoo.optimize import minimize\nfrom pymoo.termination import get_termination\nfrom langchain.agents import AgentExecutor, create_openai_tools_agent\nfrom langchain_openai import ChatOpenAI\nfrom langchain_core.messages import (\n    AIMessage,\n    BaseMessage,\n    HumanMessage,\n    ToolMessage,\n)\nfrom typing import Sequence, TypedDict, Annotated\nfrom langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder\nfrom langgraph.graph import END, StateGraph, START\nfrom langchain_openai import ChatOpenAI\nfrom langchain_openai import OpenAIEmbeddings\n\n\nos.environ[\"OPENAI_API_KEY\"] = \"YOUR_API_KEY\"\n\n\nllm = ChatOpenAI(model=\"gpt-4o\")\nembeddings = OpenAIEmbeddings(\n    model=\"text-embedding-3-large\",\n)\n\n\n# ## Tools\n\n# ### Document retriever tool\n\n# In[3]:\n\ndb_new = Chroma(persist_directory=\"./aila_db\", embedding_function=embeddings)\n\nretriever_wo = db_new.as_retriever(\n    search_type=\"similarity\",\n    search_kwargs={\"k\": 1},\n)\n\n\n# In[4]:\n\nDocument_Retriever = create_retriever_tool(\n    retriever_wo,\n    \"Document_Retriever\",\n    \"This tool offers reference code specifically designed for \"\n    \"managing an AFM (Atomic Force Microscope) machine, which is connected to a database. \"\n    \"The tool also includes the AFM software manual for guidance.\"\n    \"However, it does not contain any code related to displaying/optimizing images.\"\n    \"Single query allowed at one. but multiple call allowed\",\n)\n\n\n# ### Code executor tool\n\n# In[6]:\n\n\n@tool\ndef Code_Executor(code: str) -> int:\n    \"Use this tool only to run Python code for operating an Atomic Force Microscope.\"\n    \"Use code from 'Document_Retriever' and correct it as needed. This code controls the AFM, so handle it with care.\"\n    try:\n        # Execute the code\n        import pythoncom\n        pythoncom.CoInitialize()\n        exec(code)\n        output='code executed successfully'\n    except Exception as e:\n        print(\"Error:\", e) \n        output=e\n    return output\n\n\n# ### Image analyzer tool\n\n# In[7]:\n\n@tool\ndef Image_Analyzer(path: str = None, filename: str = None, dynamic_code: str = None, calculate_friction: bool = False, calculate_mean_roughness: bool = False, calculate_rms_roughness: bool = False):\n    \"\"\"\n    Display and return the image data from the given path. If a filename is provided, return the image data\n    from that specific file. If no filename is provided, return the image data from the latest image file\n    in the directory. If dynamic_code is provided, it will be executed to process the image data.\n    \n    Additionally, calculate the following if requested:\n    - Average Friction\n    - Mean Roughness\n    - RMS Roughness\n\n    Args:\n    - path (str): The directory path to search for the latest file. Defaults to None.\n    - filename (str): The specific image file to display. Defaults to None.\n    - dynamic_code (str): A string containing Python code to process the image data. Defaults to None.\n    - calculate_friction (bool): Whether to calculate average friction. Defaults to False.\n    - calculate_mean_roughness (bool): Whether to calculate mean roughness. Defaults to False.\n    - calculate_rms_roughness (bool): Whether to calculate RMS roughness. Defaults to False.\n\n    Returns:\n    - dict: A dictionary containing the status, image data, or an error message.\n    \"\"\"\n    if path is None:\n        path = os.getcwd()\n    \n    # Determine the file to display\n    if filename:\n        file_to_display = os.path.join(path, filename)\n        if not os.path.isfile(file_to_display):\n            print(f\"File not found: {file_to_display}\")\n            return {\"status\": \"Error\", \"message\": \"The specified file does not exist.\"}\n    else:\n        # Get the list of all files in the directory\n        list_of_files = glob.glob(os.path.join(path, '*'))\n        \n        if not list_of_files:\n            print(\"No files found in the specified directory.\")\n            return {\"status\": \"Error\", \"message\": \"No files found in the directory.\"}\n        \n        # Find the latest file based on creation time\n        file_to_display = max(list_of_files, key=os.path.getctime)\n    \n    print(f\"File to display: {file_to_display}\")\n\n    try:\n        # Read the file\n        afm = read(file_to_display)\n        \n        # Extract data and parameters\n        data = afm.data  # Raw data\n        param = afm.param  # Parameters\n        \n        # Assuming 'Image', 'Forward', and 'Z-Axis' are keys in the data structure\n        image_data = data['Image']['Forward']['Z-Axis']\n        \n        # If dynamic code is provided, execute it. image_data = data['Image']['Forward']['Z-Axis'] cange Forward to Backward if asked. Z-Axis to Deflection or Friction force if asked. \n        if dynamic_code:\n            # Safely execute the dynamic code\n            try:\n                exec(dynamic_code)\n                # After executing the dynamic code, `image_data` should be processed accordingly\n                print(\"Dynamic code executed successfully.\")\n            except Exception as e:\n                print(f\"Error executing dynamic code: {e}\")\n                return {\"status\": \"Error\", \"message\": f\"Error executing dynamic code: {str(e)}\"}\n        \n        # Calculate Average Friction if requested\n        if calculate_friction:\n            friction = 0.5 * (data['Image']['Forward']['Friction force'] - data['Image']['Backward']['Friction force'])\n            average_friction = np.mean(friction)\n            print(f\"Average Friction: {average_friction}\")\n        \n        # Calculate Mean Roughness if requested\n        if calculate_mean_roughness:\n            z = data['Image']['Forward']['Z-Axis']\n            z_mean = np.mean(z)\n            absolute_differences = np.abs(z - z_mean)\n            total_sum = np.sum(absolute_differences)\n            M, N = z.shape\n            mean_roughness = total_sum / (M * N)\n            print(f\"Mean Roughness: {mean_roughness}\")\n        \n        # Calculate RMS Roughness if requested\n        if calculate_rms_roughness:\n            z = data['Image']['Forward']['Z-Axis']\n            z_mean = np.mean(z)\n            squared_differences = (z - z_mean) ** 2\n            total_sum = np.sum(squared_differences)\n            M, N = z.shape\n            rms_roughness = np.sqrt(total_sum / (M * N))\n            print(f\"RMS Roughness: {rms_roughness}\")\n        \n        # Return the image data along with status\n        result = {\"status\": \"Success\", \"message\": f\"Raw Image {file_to_display} processed successfully.\", \"image_data\": image_data}\n        \n        # Include calculated metrics in the result if they were calculated\n        if calculate_friction:\n            result[\"average_friction\"] = average_friction\n        if calculate_mean_roughness:\n            result[\"mean_roughness\"] = mean_roughness\n        if calculate_rms_roughness:\n            result[\"rms_roughness\"] = rms_roughness\n        \n        return result\n    \n    except Exception as e:\n        print(f\"An error occurred: {e}\")\n        return {\"status\": \"Error\", \"message\": f\"An error occurred: {str(e)}\"}\n\n\n# ### Image optimizer tool\n\n# In[8]:\n\ndef scan_image(PGain, IGain, DGain, file):\n    spm = nanosurf.SPM()\n    application = spm.application\n    scan = application.Scan\n    zcontrol = application.ZController\n    \n    application.SetGalleryHistoryFilenameMask(file)\n    zcontrol.PGain = PGain\n    zcontrol.IGain = IGain\n    zcontrol.DGain = DGain\n    scan.StartFrameUp()\n    \n    scanning = scan.IsScanning\n    while scanning:\n        print(\"Scanning in progress...\")\n        time.sleep(5)\n        scanning = scan.IsScanning\n\n    from NSFopen.read import read\n    list_of_files = glob.glob(new_path+'/*')\n    latest_file = max(list_of_files, key=os.path.getctime)\n    afm = read(latest_file)\n    data = afm.data\n    im_file_fw = data['Image']['Forward']['Z-Axis']\n    im_file_bw = data['Image']['Backward']['Z-Axis']\n    similarity_index, diff = ssim(im_file_bw, im_file_fw, full=True, data_range=im_file_bw.max() - im_file_bw.min())\n    mse = mean_squared_error(im_file_bw, im_file_fw)\n    del spm\n    return similarity_index, mse\n\ndef corrected_image(image):\n    def poly5d(xy, *params):\n        x, y = xy\n        return (params[0] + params[1]*x + params[2]*y + \n                params[3]*x**2 + params[4]*y**2 + \n                params[5]*x*y + params[6]*x**3 + params[7]*y**3 +\n                params[8]*x**2*y + params[9]*x*y**2 + \n                params[10]*x**4 + params[11]*y**4 + \n                params[12]*x**3*y + params[13]*x*y**3 +\n                params[14]*x**2*y**2)\n\n    x = np.arange(image.shape[1])\n    y = np.arange(image.shape[0])\n    x, y = np.meshgrid(x, y)\n    x = x.flatten()\n    y = y.flatten()\n    image_flat = image.flatten()\n    params, _ = curve_fit(poly5d, (x, y), image_flat, p0=np.zeros(15))\n    baseline = poly5d((x, y), *params).reshape(image.shape)\n    corrected_image = image - baseline\n    return corrected_image\n\ndef scan_image_poly(PGain, IGain, DGain, file):\n    spm = nanosurf.SPM()\n    application = spm.application\n    scan = application.Scan\n    zcontrol = application.ZController\n    \n    application.SetGalleryHistoryFilenameMask(file)\n    zcontrol.PGain = PGain\n    zcontrol.IGain = IGain\n    zcontrol.DGain = DGain\n    scan.StartFrameUp()\n    \n    scanning = scan.IsScanning\n    while scanning:\n        print(\"Scanning in progress...\")\n        time.sleep(5)\n        scanning = scan.IsScanning\n\n    from NSFopen.read import read\n    list_of_files = glob.glob(new_path+'/*')\n    latest_file = max(list_of_files, key=os.path.getctime)\n    afm = read(latest_file)\n    data = afm.data\n    im_file_fw = corrected_image(data['Image']['Forward']['Z-Axis'])\n    im_file_bw = corrected_image(data['Image']['Backward']['Z-Axis'])\n    similarity_index, diff = ssim(im_file_bw, im_file_fw, full=True, data_range=im_file_bw.max() - im_file_bw.min())\n    mse = mean_squared_error(im_file_bw, im_file_fw)\n    del spm\n    return similarity_index, mse\n\nclass MyProblem(ElementwiseProblem):\n    def __init__(self, baseline=True):\n        super().__init__(n_var=3,\n                         n_obj=1,\n                         xl=np.array([0, 500, 0]),\n                         xu=np.array([500, 9000, 100]))\n        self.baseline = baseline\n\n    def _evaluate(self, x, out, *args, **kwargs):\n        if self.baseline:\n            scan_outputs = scan_image_poly(x[0], x[1], x[2], f\"scan_{x[0]}_{x[1]}_{x[2]}_\")\n        else:\n            scan_outputs = scan_image(x[0], x[1], x[2], f\"scan_{x[0]}_{x[1]}_{x[2]}_\")\n\n        mse = scan_outputs[1]\n        f1 = (1 - mse) * 10000\n        out[\"F\"] = [f1]\n\n\n# In[9]:\n\n\n# Save the current working directory\noriginal_path = os.getcwd()\n\n# Specify the new path you want to temporarily switch to\nnew_path = '/Users/Admin/AppData/Local/Nanosurf/Nanosurf CX/AI-Optimization'\n\n    \n@tool\ndef Image_optimizer(baseline: bool) -> str:\n    \"\"\"This tool optimizes the parameters (P/I/D gains) based on baseline correction\n    settings to provide the best solution for image clarity. Use this tool if the image \n    appears blurry or unclear and you want to enhance its sharpness.\"\"\"\n\n    try:\n        os.chdir(new_path)\n        print(f\"Current working directory: {os.getcwd()}\")\n        \n        # Your code that needs to be executed in the new directory goes here\n        import pythoncom\n        pythoncom.CoInitialize()\n    \n        list_of_files = glob.glob(new_path+'/*') \n        latest_file = max(list_of_files, key=os.path.getctime)\n        print(latest_file)\n    \n    \n        problem = MyProblem(baseline=baseline)\n    \n        termination = get_termination(\"n_gen\", 2)\n        algorithm = GA(pop_size=2, eliminate_duplicates=True)\n    \n        res = minimize(problem,\n                       algorithm,\n                       termination,\n                       seed=1,\n                       verbose=True)\n\n    finally:\n        # Restore the original working directory\n        os.chdir(original_path)\n        print(f\"Returned to original working directory: {os.getcwd()}\")\n\n    return \"Best solution found: \\n[Pgain Igain Dgain] = %s\\n[Error] = %s\" % (res.X, res.F)\n\n\n# ## Agents\n\n# In[10]:\n\n\n\n\ndef create_agent(llm, tools, system_message: str):\n    \"\"\"Create an agent.\"\"\"\n    prompt = ChatPromptTemplate.from_messages(\n        [\n            (\n                \"system\",\n                \"You are an advanced AI-AFM system with access to the Nanosurf AFM software through its Python API.\"\n                \"You can execute specific Python code to control and manage the AFM instrument. Collaboration with other assistants is encouraged.\"\n                \"Use the available tools to make progress towards answering the question.\"\n                \"If you are unable to provide a complete answer, prefix your response with NEED HELP so another assistant can continue where you left off.\"\n                \"If you or another assistant have the final answer or deliverable, prefix your response with FINAL ANSWER to indicate that no further action is needed.\"\n                \"You have access to the following tools: {tool_names}. \\n{system_message}\",\n            ),\n            MessagesPlaceholder(variable_name=\"messages\"),\n        ]\n    )\n    prompt = prompt.partial(system_message=system_message) ##used to input {system_message}\n    prompt = prompt.partial(tool_names=\", \".join([tool.name for tool in tools])) ##used to input {tool_names}\n    return prompt | llm.bind_tools(tools)\n\n\ndef agent_node(state, agent, name):\n    result = agent.invoke(state)\n    # convert the agent output into a format that is suitable to append to the global state\n    if isinstance(result, ToolMessage):\n        pass\n    else:\n        result = AIMessage(**result.model_dump(exclude={\"type\", \"name\"}), name=name)\n    return {\n        \"messages\": [result],\n        # Since we have a strict workflow, we can\n        # track the sender so we know who to pass to next.\n        \"sender\": name\n    }\n\n\n# The agent state is the input to each node in the graph\nclass AgentState(TypedDict):\n    # The annotation tells the graph that new messages will always\n    # be added to the current states\n    messages: Annotated[Sequence[BaseMessage], operator.add]\n    # The 'next' field indicates where to route to next\n    next: str\n    sender: str\n\n\n# ## AILA\n\n# In[11]:\n\n\ndef create_AILA_agent(llm, tools, system_message: str):\n    \"\"\"Create an agent.\"\"\"\n    options = [\"FINISH\"] + tools\n    prompt = ChatPromptTemplate.from_messages(\n        [\n            (\n                \"system\",\n                \"You are a helpful AI assistant, collaborating with other assistants.\"\n                \"Given the conversation above, who should act next?\"\n                \"The AFM_Handler is exclusively for capturing images and controlling the AFM machine; it cannot handle image after-processing\"\n                \"Or should we FINISH? Select one of: {options}.\\n{system_message}.\",\n                # \"only type the one of: {options}\",\n            ),\n            MessagesPlaceholder(variable_name=\"messages\"),\n        ]\n    )\n    prompt = prompt.partial(system_message=system_message) ##used to input {system_message}\n    # prompt = prompt.partial(tool_names=\", \".join([tool.name for tool in tools])) ##used to input {tool_names}\n    prompt = prompt.partial(options=str(options), team_members=\", \".join(tools))\n    return prompt | llm\n\n\n# ## Graph\n\n# ### Tools\n\n# In[12]:\n\n\nfrom langgraph.prebuilt import ToolNode\n\nafm_handler_tools = [Document_Retriever, Code_Executor]\nafm_handler_tools_node = ToolNode(afm_handler_tools)\ndata_handler_tools = [Image_Analyzer, Image_optimizer]\ndata_handler_tools_node = ToolNode(data_handler_tools)\n\n\n# ### Agents\n\n# In[13]:\n\n\nafm_handler_agent = create_agent(\n    llm, \n    [Document_Retriever, Code_Executor], \n   \"You will have access to a database of relevant codes for setting AFM parameters, scanning images, and approaching the tip through the 'Document_Retriever' tool.\"\n    \"Gather Codes: Retrieve the necessary codes from the database for configuring parameters and performing scans.\"\n    \"Modification and Execution: Modify the retrieved codes as needed (do not write new code to avoid potential damage to the AFM) and execute them using the 'Code_Executor' tool.\"\n    \"Steps for Capturing an Image: 1. Set the required parameters using the retrieved codes. 2.Approach the tip if directed to do so. 3. Finally, perform the scan according to the modified code.\"\n    \"Ensure to follow these steps accurately for successful image capture.\" ,\n)\n\nafm_handler_node = functools.partial(agent_node, agent=afm_handler_agent, name=\"AFM_Handler\")\n\ndata_handler_agent = create_agent(\n    llm,[Image_Analyzer, Image_optimizer], \n    \"You have access to two tools: 'Image_Analyzer': Use this tool to plot and analyze images stored on the system.\" \n    \"You can retrieve raw image data from this tool for further processing. Other assistants may save images to the system.\"\n    \"'Image_Optimizer': This tool is used to enhance image quality, including improving line clarity and sharpness. If the feature size in the image is very small, set the baseline parameter to true for better results.\"\n    \"Utilize these tools as follows: Analyze and retrieve raw image data using 'Image_Analyzer'.\"\n    \"Optimize the image quality using 'Image_Optimizer', applying the baseline parameter if necessary. Follow these steps to ensure high-quality image processing and analysis.\",\n)\ndata_handler_node = functools.partial(agent_node, agent=data_handler_agent, name=\"Data_Handler\")\n\n# members=[\"AFM_Handler\", \"Data_Handler\"]\n\nAILA_main = create_AILA_agent(\n    llm,\n    [\"AFM_Handler\", \"Data_Handler\"],\n    '''You are AILA (Artificially Intelligent Laboratory Assistant), \n    an advanced multi-agent AI-AFM system developed by the NT(M3)RG lab,\n    a collaboration between the Multiphysics & Multiscale Mechanics Research Group (M3RG)\n    and the Nanoscale Tribology, Mechanics & Microscopy of Materials (NTM3) Group\n    at the Indian Institute of Technology Delhi.\n    Your role is to manage the conversation among the following team members: {team_members}.\n    Based on the user's request, identify the appropriate worker to act next.\n    Each worker will complete their assigned task and provide their results and status.\n    When all tasks are completed, respond with FINISH.'''\n)\nAILA_main_node = functools.partial(agent_node, agent=AILA_main , name=\"AILA\")\n\n\n# ### Conditions\n\n# In[14]:\n\n\ndef should_continue(state: AgentState):\n    messages = state[\"messages\"]\n    last_message = messages[-1]\n    # If there is no function call, then we finish\n    if \"tool_calls\" not in last_message.additional_kwargs:\n        if \"NEED HELP\" in last_message.content:\n            return \"go\"\n        elif \"FINAL ANSWER\" in last_message.content:\n            return \"__end__\"\n        return \"__end__\"\n    # Otherwise if there is, we continue\n    else:\n        return \"continue\"\n\n\n# In[15]:\n\n\ndef AILA_output(state: AgentState):\n    messages = state[\"messages\"]\n    last_message = messages[-1]\n    # If there is no function call, then we finish\n    # if \"tool_calls\" not in last_message.additional_kwargs:\n    #     return \"__end__\"\n    # Otherwise if there is, we continue\n    if \"AFM_Handler\" in last_message.content:\n            return \"AH\"\n    elif \"Data_Handler\" in last_message.content:\n            return \"DH\"\n    else:\n        return \"__end__\"\n\n\n# ### Connections\n\n# In[16]:\n\n\nworkflow = StateGraph(AgentState)\nworkflow.add_node(\"AFM_Handler\", afm_handler_node)\nworkflow.add_node(\"AFM_Handler_Tools\", afm_handler_tools_node)\nworkflow.add_node(\"Data_Handler\", data_handler_node)\nworkflow.add_node(\"Data_Handler_Tools\", data_handler_tools_node)\nworkflow.add_node(\"AILA\", AILA_main_node)\n\n\n# In[17]:\n\n\nworkflow.add_conditional_edges(\n    \"AILA\",\n    AILA_output,\n    {\"AH\": \"AFM_Handler\",\"DH\": \"Data_Handler\",\"__end__\": END}, \n)\n\nworkflow.add_conditional_edges(\n    \"AFM_Handler\",\n    should_continue,\n    {\"continue\": \"AFM_Handler_Tools\",\"go\": \"Data_Handler\",\"__end__\": END}, \n)\n\nworkflow.add_conditional_edges(\n    \"Data_Handler\",\n    should_continue,\n    {\"continue\": \"Data_Handler_Tools\",\"go\": \"AFM_Handler\",\"__end__\": END},\n)\n\nworkflow.add_edge(\"AFM_Handler_Tools\", \"AFM_Handler\")\nworkflow.add_edge(\"Data_Handler_Tools\", \"Data_Handler\")\nworkflow.add_edge(START, \"AILA\")\n\ngraph = workflow.compile()\n\n\n# ## Prompt\n\n# In[19]:\n\n\nfrom langchain_core.runnables.config import RunnableConfig\nconfig = RunnableConfig(recursion_limit=40)\n\n\n# In[20]:\n\n\ndef print_stream(stream):\n    count=-1\n    for s in stream:\n        count=count+1\n        message = s[\"messages\"][-1]\n        if isinstance(message, tuple):\n            print(message)\n        else:\n            message.pretty_print()\n            \n    print(\"total steps:\",count)\n\n\n# In[24]:\n\nstart_time = time.time()\nrecursion_limit=30\ninputs = {\"messages\": [(\"user\", \"hhhh\")]}\nprint_stream(graph.stream(inputs, stream_mode=\"values\",  config= config))\n\n\nend_time = time.time()\nduration = end_time - start_time\nprint(f\"\\nTotal time taken: {duration:.2f} seconds\")\n\n\n# In[ ]:\n\n========================================\n\nSOURCE FILE: sources/aila-afmbench/questions/question_1.json\n\n{\n    \"question\": [\n        {\n            \"input\": \"Set image size as $100 \\\\times 100 \\\\pu{nm}$ in the AFM software.\"\n        }\n    ],\n    \"keywords\": [\n        {\n            \"Operation Type\": \"Basic\",\n            \"Require Tool\": \"Multiple tools\",\n            \"Require Agent\": \"Single agent\",\n            \"Requires\": \"Documentation\"\n        }\n    ],\n    \"result\": [\n        {\n            \"GPT-4\": \"[{'Time': 15.81, 'Correct': 'Yes', 'Agent': 'AFM Operation Handler', 'Tool': 'Document retriever, Code executor'}, {'Time': 11.11, 'Correct': 'Yes', 'Agent': 'AFM Operation Handler', 'Tool': 'Document retriever, Code executor'}, {'Time': 9.08, 'Correct': 'Yes', 'Agent': 'AFM Operation Handler', 'Tool': 'Document retriever, Code executor'}]\",\n            \"GPT-3.5\": \"[{'Time': 0.0, 'Correct': 'Yes', 'Agent': '', 'Tool': ''}, {'Time': 0.0, 'Correct': 'Yes', 'Agent': '', 'Tool': ''}, {'Time': 0.0, 'Correct': 'Yes', 'Agent': '', 'Tool': ''}]\"\n        }\n    ],\n    \"user\": [\n        \"Indrajeet\"\n    ]\n}\n\n========================================\n\nSOURCE FILE: sources/aila-afmbench/run-prompts/Prompt_1.txt\n\n('user', \"Set the scan size to $1000 \\\\times 1000 nm$ and the setpoint to 0.2V. After completing the scan, access the latest file in the folder to retrieve the data. Analyze the first image to determine the average friction value. Increase the setpoint to 0.4V, scan again, and calculate the new average friction. do the same by increasing setpoint up to 1.2V. Once the experiment concludes, plot the average friction values as a function of set point and save the plot as '20241204_AI-AFM_GPT-4o_S1.png'. If you encounter any issues or need assistance, write NEED HELP. Give the FINAL ANSWER.\")\r\n================================== Ai Message ==================================\r\nName: AILA\r\n\r\n'AFM_Handler' should act next to set the scan size, set the initial setpoint, and perform the scan.\r\n================================== Ai Message ==================================\r\nName: AFM_Handler\r\nTool Calls:\r\n  Document_Retriever (call_5lCUAKGWn2MACyyzzpgQLbZU)\r\n Call ID: call_5lCUAKGWn2MACyyzzpgQLbZU\r\n  Args:\r\n    query: set scan size\r\n  Document_Retriever (call_HCBEEgnfNkA6I8TxGpoY0Ho2)\r\n Call ID: call_HCBEEgnfNkA6I8TxGpoY0Ho2\r\n  Args:\r\n    query: set setpoint\r\n================================= Tool Message =================================\r\nName: Document_Retriever\r\n\r\n'''Python code to change afm image scan parameters and parameters (P/I/D-gain)''' \r\n#imports \r\nimport nanosurf\r\n\r\n#load application\r\nspm = nanosurf.SPM()  # or .C3000() or .CX(), or .CoreAFM()\r\napplication = spm.application\r\n\r\n#all variables\r\nscan = application.Scan\r\nopmode = application.OperatingMode\r\nzcontrol = application.ZController\r\nhead = application.ScanHead\r\n\r\n#Remove comments and update only requested parameters; leave other untouched.\r\n# Set scan parameters\r\n# scan.ImageWidth = 5e-6 # [m]\r\n# scan.ImageHeight = 5e-6 # [m]\r\n# scan.Scantime = 0.55 # [s] time per line \r\n# scan.Points = 256 # points per line\r\n# scan.Lines = 256 # lines per frame\r\n# scan.CenterPosX = 10e-6 # [m]\r\n# scan.CenterPosY = 10e-6 # [m]\r\n# scan.SlopeX = 0.0 # degree\r\n# scan.SlopeY = 0.0 # degree\r\n# scan.Overscan = 0 # [%]\r\n# scan.Rotation=0 #degree\r\n\r\n# Set Z controller parameters\r\n# zcontrol.SetPoint = 1 # [%/V]\r\n# zcontrol.PGain = 3100\r\n# zcontrol.IGain = 3500\r\ndel spm\r\n================================== Ai Message ==================================\r\nName: AFM_Handler\r\nTool Calls:\r\n  Code_Executor (call_bsvxmFFRjglVzjifa2BF6jtY)\r\n Call ID: call_bsvxmFFRjglVzjifa2BF6jtY\r\n  Args:\r\n    code: import nanosurf\r\n\r\n# Load application\r\nspm = nanosurf.SPM()  # or .C3000() or .CX(), or .CoreAFM()\r\napplication = spm.application\r\nscan = application.Scan\r\n\r\n# Set scan size parameters\r\nscan.ImageWidth = 1000e-9 # [m]\r\nscan.ImageHeight = 1000e-9 # [m]\r\ndel spm\r\n  Code_Executor (call_3ap0ZV0XAhiockIjXILfQE9z)\r\n Call ID: call_3ap0ZV0XAhiockIjXILfQE9z\r\n  Args:\r\n    code: import nanosurf\r\n\r\n# Load application\r\nspm = nanosurf.SPM()  # or .C3000() or .CX(), or .CoreAFM()\r\napplication = spm.application\r\nzcontrol = application.ZController\r\n\r\n# Set initial setpoint\r\nzcontrol.SetPoint = 0.2 # [V]\r\ndel spm\r\nConnected to running app: CX\r\nConnected to running app: CX\r\n================================= Tool Message =================================\r\nName: Code_Executor\r\n\r\ncode executed successfully\r\n================================== Ai Message ==================================\r\nName: AFM_Handler\r\nTool Calls:\r\n  Document_Retriever (call_gNw8OpCv4VL9Z3GGpV2QSdHI)\r\n Call ID: call_gNw8OpCv4VL9Z3GGpV2QSdHI\r\n  Args:\r\n    query: initiate scanning\r\n================================= Tool Message =================================\r\nName: Document_Retriever\r\n\r\n'''initiate/start or terminate/stop image scanning process'''\r\nimport nanosurf\r\nimport time\r\n\r\n#load application\r\nspm = nanosurf.SPM()  # or .C3000() or .CX(), or .CoreAFM()\r\napplication = spm.application\r\nscan = application.Scan\r\n\r\n# Start scan\r\n# scan.StartFrameDown() #Scanning from up to down or top to bottom\r\nscan.StartFrameUp() #Scanning from down to up or bottom to top\r\n\r\n#scan.stop() #stop sacn\r\nscanning = scan.IsScanning # Check if scanning\r\nwhile scanning:\r\n        print(\"Scanning in progress... Remaining lines:\",(scan.Lines-scan.Currentline))\r\n        time.sleep(3)\r\n        scanning = scan.IsScanning\r\nprint(\"Scanning finished\")\r\ndel spm\r\n================================== Ai Message ==================================\r\nName: AFM_Handler\r\nTool Calls:\r\n  Code_Executor (call_mYVu2JM7xii3MES1BEPso4SH)\r\n Call ID: call_mYVu2JM7xii3MES1BEPso4SH\r\n  Args:\r\n    code: import nanosurf\r\nimport time\r\n\r\n# Load application\r\nspm = nanosurf.SPM()  # or .C3000() or .CX(), or .CoreAFM()\r\napplication = spm.application\r\nscan = application.Scan\r\n\r\n# Start scan\r\nscan.StartFrameUp() # Scanning from down to up or bottom to top\r\n\r\nscanning = scan.IsScanning # Check if scanning\r\nwhile scanning:\r\n        print(\"Scanning in progress... Remaining lines:\",(scan.Lines-scan.Currentline))\r\n        time.sleep(3)\r\n        scanning = scan.IsScanning\r\nprint(\"Scanning finished\")\r\ndel spm\r\nConnected to running app: CX\r\nScanning in progress... Remaining lines: 129\r\nScanning in progress... Remaining lines: 116\r\nScanning in progress... Remaining lines: 101\r\nScanning in progress... Remaining lines: 85\r\nScanning in progress... Remaining lines: 70\r\nScanning in progress... Remaining lines: 55\r\nScanning in progress... Remaining lines: 40\r\nScanning in progress... Remaining lines: 24\r\nScanning in progress... Remaining lines: 9\r\nScanning finished\r\n================================= Tool Message =================================\r\nName: Code_Executor\r\n\r\ncode executed successfully\r\n================================== Ai Message ==================================\r\nName: AFM_Handler\r\n\r\nNEED HELP: The scan has been completed successfully. Please proceed with accessing the latest file in the folder, retrieving the data, and analyzing the first image to determine the average friction value.\r\n================================== Ai Message ==================================\r\nName: Data_Handler\r\nTool Calls:\r\n  Image_Analyzer (call_aLGzW1are1ByAnFgLKzRTvej)\r\n Call ID: call_aLGzW1are1ByAnFgLKzRTvej\r\n  Args:\r\n    calculate_friction: True\r\nFile to display: C:\\Users\\Admin\\Desktop\\Automation\\AFMBench\\Results\\app\\20241204_AI-AFM_GPT-4o_S1_00305.nid\r\nAverage Friction: 0.0001844360465952377\r\n================================= Tool Message =================================\r\nName: Image_Analyzer\r\n\r\n{'status': 'Success', 'message': 'Raw Image C:\\\\Users\\\\Admin\\\\Desktop\\\\Automation\\\\AFMBench\\\\Results\\\\app\\\\20241204_AI-AFM_GPT-4o_S1_00305.nid processed successfully.', 'image_data': array([[-1.76507867e-06, -1.76507655e-06, -1.76506180e-06, ...,\r\n        -1.75715994e-06, -1.75714779e-06, -1.75713931e-06],\r\n       [-1.76561807e-06, -1.76561072e-06, -1.76560196e-06, ...,\r\n        -1.75788570e-06, -1.75785502e-06, -1.75782048e-06],\r\n       [-1.76656664e-06, -1.76657177e-06, -1.76656483e-06, ...,\r\n        -1.75877117e-06, -1.75874374e-06, -1.75871564e-06],\r\n       ...,\r\n       [-1.74315449e-06, -1.74314604e-06, -1.74312239e-06, ...,\r\n        -1.73454886e-06, -1.73451914e-06, -1.73449637e-06],\r\n       [-1.74277300e-06, -1.74275752e-06, -1.74275385e-06, ...,\r\n        -1.73435898e-06, -1.73431349e-06, -1.73429724e-06],\r\n       [-1.74245901e-06, -1.74245674e-06, -1.74244944e-06, ...,\r\n        -1.73403431e-06, -1.73400309e-06, -1.73397083e-06]]), 'average_friction': 0.0001844360465952377}\r\n================================== Ai Message ==================================\r\nName: Data_Handler\r\n\r\nThe initial scan with a setpoint of 0.2V has been completed, and the average friction value determined from the analysis is approximately \\(0.000184 \\, \\text{nN}\\).\r\n\r\nNext, I will increase the setpoint to 0.4V and perform another scan.\r\nTool Calls:\r\n  Image_Analyzer (call_v2a1fat883uZ18tI0Fq8seRy)\r\n Call ID: call_v2a1fat883uZ18tI0Fq8seRy\r\n  Args:\r\n    dynamic_code: import nanosurf\r\n\r\n# Load application\r\nspm = nanosurf.SPM()  # or .C3000() or .CX(), or .CoreAFM()\r\napplication = spm.application\r\nzcontrol = application.ZController\r\n\r\n# Set new setpoint\r\nzcontrol.SetPoint = 0.4 # [V]\r\ndel spm\r\n\r\n# Re-scan\r\nscan = application.Scan\r\nscan.StartFrameUp() # Scanning from down to up or bottom to top\r\n\r\nscanning = scan.IsScanning # Check if scanning\r\nwhile scanning:\r\n        time.sleep(3)\r\n        scanning = scan.IsScanning\r\n\r\ndel spm\r\n    calculate_friction: True\r\nFile to display: C:\\Users\\Admin\\Desktop\\Automation\\AFMBench\\Results\\app\\20241204_AI-AFM_GPT-4o_S1_00305.nid\r\nError executing dynamic code: (-2147221008, 'CoInitialize has not been called.', None, None)\r\n================================= Tool Message =================================\r\nName: Image_Analyzer\r\n\r\n{\"status\": \"Error\", \"message\": \"Error executing dynamic code: (-2147221008, 'CoInitialize has not been called.', None, None)\"}\r\n================================== Ai Message ==================================\r\nName: Data_Handler\r\n\r\nNEED HELP: I encountered an error while attempting to set the new setpoint to 0.4V and perform the scan. Please assist with resolving the issue and proceed with the scanning and analysis.\r\n================================== Ai Message ==================================\r\nName: AFM_Handler\r\n\r\nThe error encountered, \"CoInitialize has not been called,\" suggests an issue with initializing the COM library in the Python environment. This is often required when interfacing with certain Windows APIs or applications like AFM software.\r\n\r\nI'll handle this initialization and proceed with the adjustment of the setpoint and scanning.\r\nTool Calls:\r\n  Code_Executor (call_Uoqxx1isGwKprxpi5TqIn1ra)\r\n Call ID: call_Uoqxx1isGwKprxpi5TqIn1ra\r\n  Args:\r\n    code: import pythoncom\r\nimport nanosurf\r\nimport time\r\n\r\n# Initialize COM library\r\npythoncom.CoInitialize()\r\n\r\n# Load application\r\nspm = nanosurf.SPM()  # or .C3000() or .CX(), or .CoreAFM()\r\napplication = spm.application\r\nzcontrol = application.ZController\r\n\r\n# Set new setpoint\r\nzcontrol.SetPoint = 0.4 # [V]\r\n\r\n# Re-scan\r\nscan = application.Scan\r\nscan.StartFrameUp() # Scanning from down to up or bottom to top\r\n\r\nscanning = scan.IsScanning # Check if scanning\r\nwhile scanning:\r\n        time.sleep(3)\r\n        scanning = scan.IsScanning\r\n\r\n# Uninitialize COM library\r\npythoncom.CoUninitialize()\r\ndel spm\r\nConnected to running app: CX\r\n================================= Tool Message =================================\r\nName: Code_Executor\r\n\r\ncode executed successfully\r\n================================== Ai Message ==================================\r\nName: AFM_Handler\r\nTool Calls:\r\n  Document_Retriever (call_ctBNUCrSHVo0UFZsW3MGOU0U)\r\n Call ID: call_ctBNUCrSHVo0UFZsW3MGOU0U\r\n  Args:\r\n    query: retrieve latest file and analyze for friction\r\n================================= Tool Message =================================\r\nName: Document_Retriever\r\n\r\n'''python code to rename file, udpate cantilever tip and Operating mode in AFM''' \r\n#imports \r\nimport nanosurf\r\n\r\nspm = nanosurf.SPM()  # or .C3000() or .CX(), or .CoreAFM()\r\napplication = spm.application\r\nopmode = application.OperatingMode\r\nhead = application.ScanHead\r\n\r\n#Remove comments and update only requested parameters; leave other untouched.\r\n\r\n# Operating mode\r\n# opmode.OperatingMode = spm.OperatingMode.DynamicAFM #[set any of:{'.ContPhase' for Static mode},{'.DynamicAFM' for Dynamic mode},{'.ForceModulation'},{'.LateralForce' for Contact mode},{'.PhaseContrast' for tapping mode}] \r\n# opmode.VibratingAmpl = 1 # [V] \r\n\r\n# Set file name\r\n# file_name = \"TestSample-\"\r\n# application.SetGalleryHistoryFilenameMask(file_name)\r\n\r\n# Choose cantilever\r\n#head.CantileverByGUID = spm.CantileverGUID.Dyn190Al #[set any of:{'.Multi75Al_G'},{'.ContAl_G'},{'.Tap190Al_G'},{'.MFMR'},{'.ANSCM'},{'.ACL_A'},{'.NCLR'},{'.Multi75M_G'},{'.Multi75E_G'}]\r\ndel spm\r\n================================== Ai Message ==================================\r\nName: AFM_Handler\r\n\r\nNEED HELP: The setpoint has been successfully increased to 0.4V and the scan has been completed. However, I need assistance to retrieve the latest file and analyze it for friction. Please proceed with this task.\r\n================================== Ai Message ==================================\r\nName: Data_Handler\r\nTool Calls:\r\n  Image_Analyzer (call_xlwFp8uzvcaeGLYvdtUaYHq1)\r\n Call ID: call_xlwFp8uzvcaeGLYvdtUaYHq1\r\n  Args:\r\n    calculate_friction: True\r\nFile to display: C:\\Users\\Admin\\Desktop\\Automation\\AFMBench\\Results\\app\\20241204_AI-AFM_GPT-4o_S1_00306.nid\r\nAverage Friction: 0.00019802527617684973\r\n================================= Tool Message =================================\r\nName: Image_Analyzer\r\n\r\n{'status': 'Success', 'message': 'Raw Image C:\\\\Users\\\\Admin\\\\Desktop\\\\Automation\\\\AFMBench\\\\Results\\\\app\\\\20241204_AI-AFM_GPT-4o_S1_00306.nid processed successfully.', 'image_data': array([[-1.78882747e-06, -1.78884025e-06, -1.78885800e-06, ...,\r\n        -1.78122590e-06, -1.78121021e-06, -1.78119006e-06],\r\n       [-1.78986159e-06, -1.78985704e-06, -1.78985857e-06, ...,\r\n        -1.78238733e-06, -1.78236799e-06, -1.78235745e-06],\r\n       [-1.79113087e-06, -1.79111628e-06, -1.79109931e-06, ...,\r\n        -1.78345212e-06, -1.78342495e-06, -1.78340678e-06],\r\n       ...,\r\n       [-1.76476586e-06, -1.76475223e-06, -1.76474000e-06, ...,\r\n        -1.75622469e-06, -1.75621441e-06, -1.75621091e-06],\r\n       [-1.76442553e-06, -1.76442136e-06, -1.76441255e-06, ...,\r\n        -1.75601618e-06, -1.75597703e-06, -1.75594198e-06],\r\n       [-1.76407129e-06, -1.76406860e-06, -1.76406803e-06, ...,\r\n        -1.75569424e-06, -1.75565037e-06, -1.75561596e-06]]), 'average_friction': 0.00019802527617684973}\r\n================================== Ai Message ==================================\r\nName: Data_Handler\r\n\r\nThe analysis of the scan with a setpoint of 0.4V has been completed. The average friction value for this scan is approximately \\(0.000198 \\, \\text{nN}\\).\r\n\r\nNext, I will increase the setpoint to 0.6V and perform another scan.\r\nTool Calls:\r\n  Image_Analyzer (call_trzLE7rdjHdcG4n7fcwX4E9a)\r\n Call ID: call_trzLE7rdjHdcG4n7fcwX4E9a\r\n  Args:\r\n    dynamic_code: import pythoncom\r\nimport nanosurf\r\nimport time\r\n\r\n# Initialize COM library\r\npythoncom.CoInitialize()\r\n\r\n# Load application\r\nspm = nanosurf.SPM()  # or .C3000() or .CX(), or .CoreAFM()\r\napplication = spm.application\r\nzcontrol = application.ZController\r\n\r\n# Set new setpoint\r\nzcontrol.SetPoint = 0.6 # [V]\r\n\r\n# Re-scan\r\nscan = application.Scan\r\nscan.StartFrameUp() # Scanning from down to up or bottom to top\r\n\r\nscanning = scan.IsScanning # Check if scanning\r\nwhile scanning:\r\n        time.sleep(3)\r\n        scanning = scan.IsScanning\r\n\r\n# Uninitialize COM library\r\npythoncom.CoUninitialize()\r\ndel spm\r\n    calculate_friction: True\r\nFile to display: C:\\Users\\Admin\\Desktop\\Automation\\AFMBench\\Results\\app\\20241204_AI-AFM_GPT-4o_S1_00306.nid\r\nConnected to running app: CX\r\nDynamic code executed successfully.\r\nAverage Friction: 0.00019802527617684973\r\n================================= Tool Message =================================\r\nName: Image_Analyzer\r\n\r\n{'status': 'Success', 'message': 'Raw Image C:\\\\Users\\\\Admin\\\\Desktop\\\\Automation\\\\AFMBench\\\\Results\\\\app\\\\20241204_AI-AFM_GPT-4o_S1_00306.nid processed successfully.', 'image_data': array([[-1.78882747e-06, -1.78884025e-06, -1.78885800e-06, ...,\r\n        -1.78122590e-06, -1.78121021e-06, -1.78119006e-06],\r\n       [-1.78986159e-06, -1.78985704e-06, -1.78985857e-06, ...,\r\n        -1.78238733e-06, -1.78236799e-06, -1.78235745e-06],\r\n       [-1.79113087e-06, -1.79111628e-06, -1.79109931e-06, ...,\r\n        -1.78345212e-06, -1.78342495e-06, -1.78340678e-06],\r\n       ...,\r\n       [-1.76476586e-06, -1.76475223e-06, -1.76474000e-06, ...,\r\n        -1.75622469e-06, -1.75621441e-06, -1.75621091e-06],\r\n       [-1.76442553e-06, -1.76442136e-06, -1.76441255e-06, ...,\r\n        -1.75601618e-06, -1.75597703e-06, -1.75594198e-06],\r\n       [-1.76407129e-06, -1.76406860e-06, -1.76406803e-06, ...,\r\n        -1.75569424e-06, -1.75565037e-06, -1.75561596e-06]]), 'average_friction': 0.00019802527617684973}\r\n================================== Ai Message ==================================\r\nName: Data_Handler\r\n\r\nIt seems I mistakenly analyzed the same image again instead of performing a new scan at 0.6V. Let me proceed with setting the setpoint correctly and initiating the scan for 0.6V.\r\nTool Calls:\r\n  Image_Analyzer (call_u3cf0yK29zsLoE6MyCc2zsej)\r\n Call ID: call_u3cf0yK29zsLoE6MyCc2zsej\r\n  Args:\r\n    dynamic_code: import pythoncom\r\nimport nanosurf\r\nimport time\r\n\r\n# Initialize COM library\r\npythoncom.CoInitialize()\r\n\r\n# Load application\r\nspm = nanosurf.SPM()  # or .C3000() or .CX(), or .CoreAFM()\r\napplication = spm.application\r\nzcontrol = application.ZController\r\n\r\n# Set new setpoint\r\nzcontrol.SetPoint = 0.6 # [V]\r\n\r\n# Re-scan\r\nscan = application.Scan\r\nscan.StartFrameUp() # Scanning from down to up or bottom to top\r\n\r\nscanning = scan.IsScanning # Check if scanning\r\nwhile scanning:\r\n        time.sleep(3)\r\n        scanning = scan.IsScanning\r\n\r\n# Uninitialize COM library\r\npythoncom.CoUninitialize()\r\ndel spm\r\n    calculate_friction: True\r\nFile to display: C:\\Users\\Admin\\Desktop\\Automation\\AFMBench\\Results\\app\\20241204_AI-AFM_GPT-4o_S1_00307.nid\r\nConnected to running app: CX\r\nDynamic code executed successfully.\r\nAverage Friction: 0.0002115293369797655\r\n================================= Tool Message =================================\r\nName: Image_Analyzer\r\n\r\n{'status': 'Success', 'message': 'Raw Image C:\\\\Users\\\\Admin\\\\Desktop\\\\Automation\\\\AFMBench\\\\Results\\\\app\\\\20241204_AI-AFM_GPT-4o_S1_00307.nid processed successfully.', 'image_data': array([[-1.81112211e-06, -1.81110461e-06, -1.81109029e-06, ...,\r\n        -1.80352042e-06, -1.80350129e-06, -1.80347925e-06],\r\n       [-1.81223533e-06, -1.81221773e-06, -1.81219150e-06, ...,\r\n        -1.80468316e-06, -1.80466449e-06, -1.80464722e-06],\r\n       [-1.81344039e-06, -1.81345612e-06, -1.81346200e-06, ...,\r\n        -1.80571703e-06, -1.80570350e-06, -1.80569416e-06],\r\n       ...,\r\n       [-1.78531314e-06, -1.78529071e-06, -1.78526571e-06, ...,\r\n        -1.77679811e-06, -1.77677378e-06, -1.77675925e-06],\r\n       [-1.78506758e-06, -1.78506157e-06, -1.78505344e-06, ...,\r\n        -1.77647989e-06, -1.77643245e-06, -1.77639667e-06],\r\n       [-1.78469821e-06, -1.78470250e-06, -1.78469674e-06, ...,\r\n        -1.77632444e-06, -1.77628494e-06, -1.77624669e-06]]), 'average_friction': 0.0002115293369797655}\r\n================================== Ai Message ==================================\r\nName: Data_Handler\r\n\r\nThe analysis of the scan with a setpoint of 0.6V has been completed. The average friction value for this scan is approximately \\(0.000212 \\, \\text{nN}\\).\r\n\r\nNext, I will increase the setpoint to 0.8V and perform another scan.\r\nTool Calls:\r\n  Image_Analyzer (call_mseLxThYoR7iVdk0cWNvyCPB)\r\n Call ID: call_mseLxThYoR7iVdk0cWNvyCPB\r\n  Args:\r\n    dynamic_code: import pythoncom\r\nimport nanosurf\r\nimport time\r\n\r\n# Initialize COM library\r\npythoncom.CoInitialize()\r\n\r\n# Load application\r\nspm = nanosurf.SPM()  # or .C3000() or .CX(), or .CoreAFM()\r\napplication = spm.application\r\nzcontrol = application.ZController\r\n\r\n# Set new setpoint\r\nzcontrol.SetPoint = 0.8 # [V]\r\n\r\n# Re-scan\r\nscan = application.Scan\r\nscan.StartFrameUp() # Scanning from down to up or bottom to top\r\n\r\nscanning = scan.IsScanning # Check if scanning\r\nwhile scanning:\r\n        time.sleep(3)\r\n        scanning = scan.IsScanning\r\n\r\n# Uninitialize COM library\r\npythoncom.CoUninitialize()\r\ndel spm\r\n    calculate_friction: True\r\nFile to display: C:\\Users\\Admin\\Desktop\\Automation\\AFMBench\\Results\\app\\20241204_AI-AFM_GPT-4o_S1_00308.nid\r\nConnected to running app: CX\r\nDynamic code executed successfully.\r\nAverage Friction: 0.00037274099767614643\r\n================================= Tool Message =================================\r\nName: Image_Analyzer\r\n\r\n{'status': 'Success', 'message': 'Raw Image C:\\\\Users\\\\Admin\\\\Desktop\\\\Automation\\\\AFMBench\\\\Results\\\\app\\\\20241204_AI-AFM_GPT-4o_S1_00308.nid processed successfully.', 'image_data': array([[-1.81781198e-06, -1.81781117e-06, -1.81778841e-06, ...,\r\n        -1.80991656e-06, -1.80989165e-06, -1.80986291e-06],\r\n       [-1.81860372e-06, -1.81860341e-06, -1.81856806e-06, ...,\r\n        -1.81064829e-06, -1.81062860e-06, -1.81060853e-06],\r\n       [-1.81926126e-06, -1.81927177e-06, -1.81926834e-06, ...,\r\n        -1.81146338e-06, -1.81143971e-06, -1.81141315e-06],\r\n       ...,\r\n       [-1.78494272e-06, -1.78494741e-06, -1.78495619e-06, ...,\r\n        -1.77642786e-06, -1.77639299e-06, -1.77635732e-06],\r\n       [-1.78471050e-06, -1.78469591e-06, -1.78467854e-06, ...,\r\n        -1.77612788e-06, -1.77608582e-06, -1.77604832e-06],\r\n       [-1.78433329e-06, -1.78431171e-06, -1.78429532e-06, ...,\r\n        -1.77580654e-06, -1.77575980e-06, -1.77571095e-06]]), 'average_friction': 0.00037274099767614643}\r\n================================== Ai Message ==================================\r\nName: Data_Handler\r\n\r\nThe analysis of the scan with a setpoint of 0.8V has been completed. The average friction value for this scan is approximately \\(0.000373 \\, \\text{nN}\\).\r\n\r\nNext, I will increase the setpoint to 1.0V and perform another scan.\r\nTool Calls:\r\n  Image_Analyzer (call_RF69iZtL9T4t3SmoVmPpKN7t)\r\n Call ID: call_RF69iZtL9T4t3SmoVmPpKN7t\r\n  Args:\r\n    dynamic_code: import pythoncom\r\nimport nanosurf\r\nimport time\r\n\r\n# Initialize COM library\r\npythoncom.CoInitialize()\r\n\r\n# Load application\r\nspm = nanosurf.SPM()  # or .C3000() or .CX(), or .CoreAFM()\r\napplication = spm.application\r\nzcontrol = application.ZController\r\n\r\n# Set new setpoint\r\nzcontrol.SetPoint = 1.0 # [V]\r\n\r\n# Re-scan\r\nscan = application.Scan\r\nscan.StartFrameUp() # Scanning from down to up or bottom to top\r\n\r\nscanning = scan.IsScanning # Check if scanning\r\nwhile scanning:\r\n        time.sleep(3)\r\n        scanning = scan.IsScanning\r\n\r\n# Uninitialize COM library\r\npythoncom.CoUninitialize()\r\ndel spm\r\nFile to display: C:\\Users\\Admin\\Desktop\\Automation\\AFMBench\\Results\\app\\20241204_AI-AFM_GPT-4o_S1_00309.nid\r\nConnected to running app: CX\r\nDynamic code executed successfully.\r\n================================= Tool Message =================================\r\nName: Image_Analyzer\r\n\r\n{'status': 'Success', 'message': 'Raw Image C:\\\\Users\\\\Admin\\\\Desktop\\\\Automation\\\\AFMBench\\\\Results\\\\app\\\\20241204_AI-AFM_GPT-4o_S1_00309.nid processed successfully.', 'image_data': array([[-1.83954022e-06, -1.83953456e-06, -1.83951854e-06, ...,\r\n        -1.83156000e-06, -1.83153263e-06, -1.83150606e-06],\r\n       [-1.84016360e-06, -1.84016861e-06, -1.84016178e-06, ...,\r\n        -1.83258531e-06, -1.83255280e-06, -1.83251783e-06],\r\n       [-1.84096526e-06, -1.84096006e-06, -1.84095057e-06, ...,\r\n        -1.83318274e-06, -1.83314809e-06, -1.83312135e-06],\r\n       ...,\r\n       [-1.80493771e-06, -1.80494861e-06, -1.80500180e-06, ...,\r\n        -1.79696066e-06, -1.79692521e-06, -1.79688989e-06],\r\n       [-1.80496652e-06, -1.80500772e-06, -1.80502417e-06, ...,\r\n        -1.79670270e-06, -1.79666307e-06, -1.79663542e-06],\r\n       [-1.80447168e-06, -1.80447766e-06, -1.80446887e-06, ...,\r\n        -1.79625335e-06, -1.79621977e-06, -1.79617476e-06]])}\r\n================================== Ai Message ==================================\r\nName: Data_Handler\r\nTool Calls:\r\n  Image_Analyzer (call_gIjpFg9piiU3Oy0qcu5DYjPa)\r\n Call ID: call_gIjpFg9piiU3Oy0qcu5DYjPa\r\n  Args:\r\n    calculate_friction: True\r\nFile to display: C:\\Users\\Admin\\Desktop\\Automation\\AFMBench\\Results\\app\\20241204_AI-AFM_GPT-4o_S1_00310.nid\r\nAverage Friction: 0.0015341396773749238\r\n================================= Tool Message =================================\r\nName: Image_Analyzer\r\n\r\n{'status': 'Success', 'message': 'Raw Image C:\\\\Users\\\\Admin\\\\Desktop\\\\Automation\\\\AFMBench\\\\Results\\\\app\\\\20241204_AI-AFM_GPT-4o_S1_00310.nid processed successfully.', 'image_data': array([[-1.86106310e-06, -1.86104894e-06, -1.86103508e-06, ...,\r\n        -1.85325681e-06, -1.85323234e-06, -1.85320563e-06],\r\n       [-1.86167199e-06, -1.86170676e-06, -1.86169047e-06, ...,\r\n        -1.85403226e-06, -1.85400885e-06, -1.85398176e-06],\r\n       [-1.86260358e-06, -1.86261495e-06, -1.86261583e-06, ...,\r\n        -1.85474531e-06, -1.85472668e-06, -1.85471690e-06],\r\n       ...,\r\n       [-1.82613350e-06, -1.82614387e-06, -1.82614233e-06, ...,\r\n        -1.81742634e-06, -1.81739050e-06, -1.81736288e-06],\r\n       [-1.82586832e-06, -1.82585098e-06, -1.82586045e-06, ...,\r\n        -1.81704277e-06, -1.81700601e-06, -1.81697581e-06],\r\n       [-1.82566685e-06, -1.82567174e-06, -1.82565884e-06, ...,\r\n        -1.81671155e-06, -1.81667447e-06, -1.81662036e-06]]), 'average_friction': 0.0015341396773749238}\r\n================================== Ai Message ==================================\r\nName: Data_Handler\r\n\r\nThe analysis of the scan with a setpoint of 1.0V has been completed. The average friction value for this scan is approximately \\(0.001534 \\, \\text{nN}\\).\r\n\r\nFinally, I will increase the setpoint to 1.2V and perform the last scan.\r\nTool Calls:\r\n  Image_Analyzer (call_R0jEEuXvlRyklzGW8GbcC6Ez)\r\n Call ID: call_R0jEEuXvlRyklzGW8GbcC6Ez\r\n  Args:\r\n    dynamic_code: import pythoncom\r\nimport nanosurf\r\nimport time\r\n\r\n# Initialize COM library\r\npythoncom.CoInitialize()\r\n\r\n# Load application\r\nspm = nanosurf.SPM()  # or .C3000() or .CX(), or .CoreAFM()\r\napplication = spm.application\r\nzcontrol = application.ZController\r\n\r\n# Set new setpoint\r\nzcontrol.SetPoint = 1.2 # [V]\r\n\r\n# Re-scan\r\nscan = application.Scan\r\nscan.StartFrameUp() # Scanning from down to up or bottom to top\r\n\r\nscanning = scan.IsScanning # Check if scanning\r\nwhile scanning:\r\n        time.sleep(3)\r\n        scanning = scan.IsScanning\r\n\r\n# Uninitialize COM library\r\npythoncom.CoUninitialize()\r\ndel spm\r\n    calculate_friction: True\r\nFile to display: C:\\Users\\Admin\\Desktop\\Automation\\AFMBench\\Results\\app\\20241204_AI-AFM_GPT-4o_S1_00310.nid\r\nConnected to running app: CX\r\nDynamic code executed successfully.\r\nAverage Friction: 0.0015341396773749238\r\n================================= Tool Message =================================\r\nName: Image_Analyzer\r\n\r\n{'status': 'Success', 'message': 'Raw Image C:\\\\Users\\\\Admin\\\\Desktop\\\\Automation\\\\AFMBench\\\\Results\\\\app\\\\20241204_AI-AFM_GPT-4o_S1_00310.nid processed successfully.', 'image_data': array([[-1.86106310e-06, -1.86104894e-06, -1.86103508e-06, ...,\r\n        -1.85325681e-06, -1.85323234e-06, -1.85320563e-06],\r\n       [-1.86167199e-06, -1.86170676e-06, -1.86169047e-06, ...,\r\n        -1.85403226e-06, -1.85400885e-06, -1.85398176e-06],\r\n       [-1.86260358e-06, -1.86261495e-06, -1.86261583e-06, ...,\r\n        -1.85474531e-06, -1.85472668e-06, -1.85471690e-06],\r\n       ...,\r\n       [-1.82613350e-06, -1.82614387e-06, -1.82614233e-06, ...,\r\n        -1.81742634e-06, -1.81739050e-06, -1.81736288e-06],\r\n       [-1.82586832e-06, -1.82585098e-06, -1.82586045e-06, ...,\r\n        -1.81704277e-06, -1.81700601e-06, -1.81697581e-06],\r\n       [-1.82566685e-06, -1.82567174e-06, -1.82565884e-06, ...,\r\n        -1.81671155e-06, -1.81667447e-06, -1.81662036e-06]]), 'average_friction': 0.0015341396773749238}\r\n================================== Ai Message ==================================\r\nName: Data_Handler\r\n\r\nIt seems there was a misstep, and the previous image was analyzed again instead of conducting a new scan at 1.2V. Let's correct this and proceed with the final scan for 1.2V.\r\nTool Calls:\r\n  Image_Analyzer (call_6BDJ7MOMaCAEs2DQM8h3lix0)\r\n Call ID: call_6BDJ7MOMaCAEs2DQM8h3lix0\r\n  Args:\r\n    dynamic_code: import pythoncom\r\nimport nanosurf\r\nimport time\r\n\r\n# Initialize COM library\r\npythoncom.CoInitialize()\r\n\r\n# Load application\r\nspm = nanosurf.SPM()  # or .C3000() or .CX(), or .CoreAFM()\r\napplication = spm.application\r\nzcontrol = application.ZController\r\n\r\n# Set new setpoint\r\nzcontrol.SetPoint = 1.2 # [V]\r\n\r\n# Re-scan\r\nscan = application.Scan\r\nscan.StartFrameUp() # Scanning from down to up or bottom to top\r\n\r\nscanning = scan.IsScanning # Check if scanning\r\nwhile scanning:\r\n        time.sleep(3)\r\n        scanning = scan.IsScanning\r\n\r\n# Uninitialize COM library\r\npythoncom.CoUninitialize()\r\ndel spm\r\n    calculate_friction: True\r\nFile to display: C:\\Users\\Admin\\Desktop\\Automation\\AFMBench\\Results\\app\\20241204_AI-AFM_GPT-4o_S1_00311.nid\r\nConnected to running app: CX\r\nDynamic code executed successfully.\r\nAverage Friction: 0.002272182661329225\r\n================================= Tool Message =================================\r\nName: Image_Analyzer\r\n\r\n{'status': 'Success', 'message': 'Raw Image C:\\\\Users\\\\Admin\\\\Desktop\\\\Automation\\\\AFMBench\\\\Results\\\\app\\\\20241204_AI-AFM_GPT-4o_S1_00311.nid processed successfully.', 'image_data': array([[-1.88004566e-06, -1.88004636e-06, -1.88004353e-06, ...,\r\n        -1.87241274e-06, -1.87236663e-06, -1.87233127e-06],\r\n       [-1.88109840e-06, -1.88108189e-06, -1.88106480e-06, ...,\r\n        -1.87351629e-06, -1.87348160e-06, -1.87342783e-06],\r\n       [-1.88216662e-06, -1.88216831e-06, -1.88215843e-06, ...,\r\n        -1.87436878e-06, -1.87435178e-06, -1.87433440e-06],\r\n       ...,\r\n       [-1.84733012e-06, -1.84734422e-06, -1.84734309e-06, ...,\r\n        -1.83859100e-06, -1.83856124e-06, -1.83852153e-06],\r\n       [-1.84709217e-06, -1.84710843e-06, -1.84710999e-06, ...,\r\n        -1.83824593e-06, -1.83819599e-06, -1.83816435e-06],\r\n       [-1.84680850e-06, -1.84684631e-06, -1.84686574e-06, ...,\r\n        -1.83794526e-06, -1.83790928e-06, -1.83789090e-06]]), 'average_friction': 0.002272182661329225}\r\n================================== Ai Message ==================================\r\nName: Data_Handler\r\n\r\nThe analysis of the scan with a setpoint of 1.2V has been completed. The average friction value for this scan is approximately \\(0.002272 \\, \\text{nN}\\).\r\n\r\nNow, I will proceed to plot the average friction values as a function of the setpoint and save the plot as '20241204_AI-AFM_GPT-4o_S1.png'.\r\nTool Calls:\r\n  Image_Analyzer (call_jBNKwsmsoIIpYsxmB26A6TGp)\r\n Call ID: call_jBNKwsmsoIIpYsxmB26A6TGp\r\n  Args:\r\n    dynamic_code: import matplotlib.pyplot as plt\r\n\r\n# Setpoints and average friction values\r\nsetpoints = [0.2, 0.4, 0.6, 0.8, 1.0, 1.2]\r\naverage_frictions = [0.000184, 0.000198, 0.000212, 0.000373, 0.001534, 0.002272]\r\n\r\n# Plotting\r\nplt.figure(figsize=(8, 6))\r\nplt.plot(setpoints, average_frictions, marker='o', linestyle='-', color='b')\r\nplt.title('Average Friction vs Setpoint')\r\nplt.xlabel('Setpoint (V)')\r\nplt.ylabel('Average Friction (nN)')\r\nplt.grid(True)\r\nplt.savefig('20241204_AI-AFM_GPT-4o_S1.png')\r\nplt.show()\r\nFile to display: C:\\Users\\Admin\\Desktop\\Automation\\AFMBench\\Results\\app\\20241204_AI-AFM_GPT-4o_S1_00312.nid\r\nDynamic code executed successfully.\r\n================================= Tool Message =================================\r\nName: Image_Analyzer\r\n\r\n{'status': 'Success', 'message': 'Raw Image C:\\\\Users\\\\Admin\\\\Desktop\\\\Automation\\\\AFMBench\\\\Results\\\\app\\\\20241204_AI-AFM_GPT-4o_S1_00312.nid processed successfully.', 'image_data': array([[-1.88239394e-06, -1.88239971e-06, -1.88239933e-06, ...,\r\n        -1.87499355e-06, -1.87498160e-06, -1.87497416e-06],\r\n       [-1.88560124e-06, -1.88558869e-06, -1.88557478e-06, ...,\r\n        -1.87770486e-06, -1.87765777e-06, -1.87762135e-06],\r\n       [-1.88610290e-06, -1.88608774e-06, -1.88606454e-06, ...,\r\n        -1.87808403e-06, -1.87805541e-06, -1.87804194e-06],\r\n       ...,\r\n       [-1.84780868e-06, -1.84780780e-06, -1.84781447e-06, ...,\r\n        -1.83926902e-06, -1.83921892e-06, -1.83918225e-06],\r\n       [-1.84736670e-06, -1.84739365e-06, -1.84740913e-06, ...,\r\n        -1.83892939e-06, -1.83889179e-06, -1.83884033e-06],\r\n       [-1.84716584e-06, -1.84718886e-06, -1.84720584e-06, ...,\r\n        -1.83855761e-06, -1.83850492e-06, -1.83845334e-06]])}\r\n================================== Ai Message ==================================\r\nName: Data_Handler\r\n\r\nFINAL ANSWER:\r\n\r\nThe experiment has been successfully completed, and the average friction values were measured at different setpoints. The results are as follows:\r\n\r\n- Setpoint 0.2V: Average Friction = 0.000184 nN\r\n- Setpoint 0.4V: Average Friction = 0.000198 nN\r\n- Setpoint 0.6V: Average Friction = 0.000212 nN\r\n- Setpoint 0.8V: Average Friction = 0.000373 nN\r\n- Setpoint 1.0V: Average Friction = 0.001534 nN\r\n- Setpoint 1.2V: Average Friction = 0.002272 nN\r\n\r\nThe plot of average friction versus setpoint has been saved as '20241204_AI-AFM_GPT-4o_S1.png'. The plot visually represents the increase in average friction with higher setpoints.\r\ntotal steps: 39\r\n\r\nTotal time taken: 323.56 seconds"
  },
  {
    "schemaVersion": "0.2",
    "id": "aletheia-erdos-sweep",
    "recordId": "aletheia-erdos-sweep",
    "title": "Aletheia Erdős sweep prompt availability",
    "author": "Google DeepMind Aletheia collaborators",
    "origin": "Campaign paper and appendices",
    "sourceUrl": "https://arxiv.org/abs/2601.22401",
    "retrievedAt": "2026-07-17",
    "originalFormat": "PDF",
    "artifactType": "availability-record",
    "completeness": "unavailable",
    "contentAvailable": false,
    "permissionBasis": "No prompt text is mirrored because an exact agent prompt or per-run transcript was not located in the primary public source.",
    "publicationStatus": "approved",
    "transcriptionMode": "Availability assessment only. The paper describes the workflow and problem set but does not disclose a reproducible agent prompt template or full run prompts.",
    "structure": [
      "missing artifact"
    ],
    "body": "The paper identifies the attempted Erdős problems and describes the generation and verification process, but it does not print the exact agent instructions or complete per-problem prompt payloads. This record is retained in the index so corpus users can distinguish a known gap from an unreviewed case."
  },
  {
    "schemaVersion": "0.2",
    "id": "astroagents-hypothesis-campaign",
    "recordId": "astroagents-hypothesis-campaign",
    "title": "AstroAgents hypothesis-generation prompt bundle",
    "author": "Daniel Saeedi, Denise Buckner, Jose C. Aponte, Amirali Aghazadeh, and collaborators",
    "origin": "Public AstroAgents repository",
    "sourceUrl": "https://github.com/amirgroup-codes/AstroAgents",
    "sourceCommit": "aed4c7e8b9abc24759444e7d957d4a7d4a0b89c6",
    "retrievedAt": "2026-07-17",
    "originalFormat": "Text and Python source files",
    "artifactType": "source-bundle",
    "completeness": "full",
    "permissionBasis": "Redistribution under the repository's MIT License, preserved with the local source bundle.",
    "publicationStatus": "approved",
    "transcriptionMode": "Verbatim source files from the cited repository commit.",
    "rawSources": [
      "sources/astroagents-hypothesis-campaign/prompt.txt",
      "sources/astroagents-hypothesis-campaign/AstroAgents.py"
    ],
    "displayFiles": [
      "sources/astroagents-hypothesis-campaign/prompt.txt",
      "sources/astroagents-hypothesis-campaign/AstroAgents.py"
    ],
    "structure": [
      "sample context",
      "mass-spectrometry table",
      "novelty requirement",
      "agent roles",
      "iterative planning"
    ],
    "body": "The bundle includes the complete research request and the orchestration code that supplies the collaborating agent roles and iteration logic.\n\n========================================\n\nSOURCE FILE: sources/astroagents-hypothesis-campaign/prompt.txt\n\nI have conducted an experiment using GCxGC-HRMS to analyze biotic (terrestrial) and abiotic (meteorite) samples. Here's a description of my samples:\n\\begin{table}[h]\n\\centering\n\\caption{Abiotic and biotic samples selected for this study.}\n\\label{tab:samples}\n\\begin{tabular}{|p{0.95\\textwidth}|}\n\\hline\n\\rowcolor[HTML]{FFFF00} \n\\textbf{Carbonaceous chondrites.} These “abiotic” samples contain extraterrestrial organic molecules formed through non-biological astrochemical processes. Meteorites provide valuable insights into the chemical inventory of the early solar system. \\\\\n\\hline\n1) Murchison meteorite. This CM2 chondrite is the “gold standard” for the analysis of extraterrestrial organics; it has a large molecular inventory and low terrestrial contamination. \\\\\n2) Orgueil meteorite. Its chemical composition is almost identical to the Sun’s photosphere \\cite{doi:10.1126/science.abn9033}. It is organically and mineralogically distinct from Murchison \\cite{schmittkopplin2023soluble, aponte2023pahs}. \\\\\n3) ALH 83100, 4) LON 94101, 5) LEW 85331, and 6) EET 96029 meteorites.  CM Antarctic meteorites with organic distributions shaped by varying processing \\cite{aponte2019analyses}.  \\\\\n7) Aguas Zarcas (AZ) and 8) Jbilet Winselwan meteorites. CM2 meteorites are similar to Murchison but with different levels of processing and terrestrial contamination. \\\\\n\\hline\n\\rowcolor[HTML]{FFFF00} \n\\textbf{Geologically processed samples and soils.} We classify these samples as “biotic” because they harbor of organic compound fossils and relics or current biological species. \\\\\n\\hline\n9) Lignite Soil. These are types of unrefined minerals and liquids formed from the accumulation and partial decay of organic material over time. \\\\\n10) Green River Shale soil. The shale in the Green River Formation is an Eocene-aged and organics-rich lithology containing abundant preserved biosignatures from diverse origins. \\\\\n11) Antarctica Soil and 12) Atacama Desert. These samples contain minimal biological activity; their low organic content is key for comparisons against abiotic samples.  \\\\\n13) Rio Tinto Soil, 14) Jarosite Soil. These samples represent acidic, salty, oxidizing, sulfuric, and iron-rich lithologies that can impact organic preservation \\cite{FERNANDEZREMOLAR2004239,life4030511, 10.2138/am-2021-7415,doi:10.1021/acsearthspacechem.3c00162}. \\\\\n15) Murchison Soil, 16) Utah soil, 17) GSFC soil, and 18) Iceland soil. Murchison soil serves as a contamination check for the Murchison meteorite, and Utah soil/GSFC soil/Iceland Soil represents organics-rich soils hosting active modern microbial communities. \\\\\n\\hline\n\n\\hline\n\n\\end{tabular}\n\\end{table}\n\n\nInstructions:\n1. I want you to analyze the table below and come up with interesting conclusions and hypotheses. Note that your hypotheses should be novel and specific.\n1. Avoid general and vague hypothesis statement, for instance: High-Molecular-Weight Compounds Played Integral Roles in Forming Primitive Metabolic Networks. This hypothesis is not stating specifically how High-Molecular-Weight plays an integral role.\n\n\nData:\n\\begin{longtable}{|>{\\centering\\arraybackslash}m{1cm}|>{\\centering\\arraybackslash}m{1.5cm}|>{\\centering\\arraybackslash}m{1cm}|>{\\centering\\arraybackslash}m{2cm}|>{\\centering\\arraybackslash}m{2cm}|>{\\centering\\arraybackslash}m{6cm}|>{\\centering\\arraybackslash}m{3cm}|}\n\n\\caption{\n{\\bf Data}\n The \\( RT1\\) and \\( RT2\\) columns display the range of retention times covered by the representative feature. The identities of these molecules were manually confirmed by comparing their mass fragmentation patterns and matching their retention times to standards, as listed in the Identified Compound column.} \n\n\\label{tab:Data} \\\\\n\n\\hline\n\\rowcolor{white} \\textbf{ID} & \\textbf{m/z} & \\textbf{RT1} & \\textbf{RT2} & \\textbf{Samples} & \\textbf{Identified Compound} \\\\ \n\\hline\n\n\\hline\n\\endfoot\n\n\\hline\n\\endlastfoot\n\n1 & 102.0 & [4074.640, 4088.656] & [1.448, 2.176] & Orgueil, ALH 83100, LON 94101, Aguas Zarcas, Murchison, Jbilet Winselwan, LEW 85311, Green River Shale soil, Lignite Soil &  Naphthalene (C10H8) \\\\ \\hline\n2 & 142.0 & [4743.904, 4771.936] & [1.296, 1.848] & Orgueil, ALH 83100, LON 94101, Murchison, Jbilet Winselwan, LEW 85311, Green River Shale soil & 2-Methyl naphthalene (C11H10) \\\\ \\hline\n3 & 355.0 & [3934.480, 3944.992] & [0.736, 0.752] & Iceland Soil, Jarosite Soil, Antarctica Soil, Green River Shale soil, Lignite Soil, Utah soil Soil, Murchison Soil, Orgueil, Murchison, LEW 85311 & \\cellcolor[HTML]{F39B7F}\\color{white} Internal contaminant from the GC column  \\\\ \\hline\n4 & 138.0 & [2687.056, 2687.056] & [0.816, 0.912] & Iceland Soil, Atacama, Utah soil Soil, GSFC soil Soil & \\cellcolor[HTML]{9B7FF3}\\color{white}  Possible terpene or sesquiterpene (Low confidence) \\\\ \\hline\n5 & 116.0 & [5490.256, 5493.760] & [1.008, 1.288] & Iceland Soil, Atacama, GSFC soil Soil, Murchison Soil & \\cellcolor[HTML]{808080}\\color{white} Polysubstituted alkylbenzene with formula C12H18 \\\\ \\hline\n6 & 416.0 & [5665.456, 5675.968] & [0.720, 0.728] & Iceland Soil, ALH 83100, LON 94101, Aguas Zarcas, Jbilet Winselwan, EET 96029 & \\cellcolor[HTML]{F39B7F}\\color{white} Internal contaminant from the GC column \\\\ \\hline\n7 & 92.0 & [4785.952, 4792.960] & [1.120, 1.200] & ALH 83100, LON 94101, Murchison, LEW 85311 & Toluene (C7H8) \\\\ \\hline\n8 & 142.0 & [4831.504, 4849.024] & [1.648, 1.880] & Orgueil, ALH 83100, Murchison, LEW 85311 & 1-Methyl naphthalene (C11H10) \\\\ \\hline\n9 & 149.0 & [6040.384, 6064.912] & [1.960, 2.136] & Rio Tinto Soil, GSFC soil Soil, Murchison Soil & \\cellcolor[HTML]{8fce00}\\color{white} Diethyl Phthalate or another phthalate (likely environmental contamination) \\\\ \\hline\n\n\\end{longtable}\n\n========================================\n\nSOURCE FILE: sources/astroagents-hypothesis-campaign/AstroAgents.py\n\nimport os\nimport time\nimport json\nimport requests\nimport argparse\nfrom typing import Any, Dict, List\nfrom colorama import Fore, Style, init\nfrom anthropic import Anthropic\nfrom langchain_anthropic import ChatAnthropic\nfrom langchain.chains import LLMChain\nfrom langchain.prompts import PromptTemplate\nimport google.generativeai as genai\nfrom langchain_google_genai import ChatGoogleGenerativeAI\nfrom langchain.chains import LLMChain\nfrom langchain.prompts import PromptTemplate\n\n# Initialize colorama\ninit(autoreset=True)\n\ndef parse_arguments():\n    \"\"\"Parse command line arguments.\"\"\"\n    parser = argparse.ArgumentParser(description='AstroAgents - A Multi-Agent AI for Hypothesis Generation from Mass Spectrometry Data')\n    \n    # File settings\n    parser.add_argument('--paper_context_file', type=str, default='paper_context.md',\n                      help='Path to the paper context file')\n    parser.add_argument('--input_prompt_file', type=str, default='prompt.txt',\n                      help='Path to the input prompt file')\n    \n    # Model settings\n    parser.add_argument('--llm_model', type=str, choices=['claude', 'gemini'], default='claude',\n                      help='Choose the LLM model to use (claude or gemini)')\n    parser.add_argument('--iterations', type=int, default=10,\n                      help='Number of iterations to run')\n    \n    # API keys\n    parser.add_argument('--anthropic_api_key', type=str, default='ANTHROPIC_API_KEY',\n                      help='Anthropic API key')\n    parser.add_argument('--google_api_key', type=str, default='GOOGLE_API_KEY',\n                      help='Google API key')\n    parser.add_argument('--semantic_scholar_api_key', type=str, default='SEMANTIC_SCHOLAR_API_KEY',\n                      help='Semantic Scholar API key')\n    \n    return parser.parse_args()\n\n# Parse command line arguments\nargs = parse_arguments()\n\n# Settings from command line arguments\npaper_context_file = args.paper_context_file\niterations = args.iterations\ninput_prompt_file = args.input_prompt_file\nllm_model = args.llm_model\n\n# API keys from command line arguments\nANTHROPIC_API_KEY = args.anthropic_api_key\nGOOGLE_API_KEY = args.google_api_key\nSEMANTIC_SCHOLAR_API_KEY = args.semantic_scholar_api_key\n\ndef read_astrobio_context() -> str:\n    \"\"\"\n    Read and return the contents of paper_context_o1_mini.md file.\n    \"\"\"\n    try:\n        with open(paper_context_file, 'r') as file:\n            return file.read()\n    except Exception as e:\n        print(f\"{Fore.RED}Error reading {paper_context_file}: {e}{Style.RESET_ALL}\")\n        return \"\"\n\n# Load astrobiology context\nASTROBIO_CONTEXT = read_astrobio_context()\n\nif llm_model == 'claude':\n    # Initialize the Anthropic Claude model\n    llm = ChatAnthropic(\n        anthropic_api_key=ANTHROPIC_API_KEY,\n    model='claude-3-5-sonnet-20241022',\n    temperature=0,\n        max_tokens=8192\n    )\nelif llm_model == 'gemini':\n    # Initialize the Google Gemini model\n    genai.configure(api_key=GOOGLE_API_KEY)\n    llm = ChatGoogleGenerativeAI(\n        model='gemini-2.0-flash-001',\n        google_api_key=GOOGLE_API_KEY,\n        max_tokens=8192\n    )\nelse:\n    raise ValueError(f\"Invalid LLM model: {llm_model}\")\n\ndef semantic_scholar_snippet_search(query: str, limit: int = 5) -> List[Dict]:\n    \"\"\"\n    Search for text snippets using Semantic Scholar API.\n    \"\"\"\n    base_url = \"https://api.semanticscholar.org/graph/v1/snippet/search\"\n    headers = {\"x-api-key\": SEMANTIC_SCHOLAR_API_KEY}\n    params = {\n        \"query\": query,\n        \"limit\": min(limit, 1000)\n    }\n    try:\n        response = requests.get(base_url, headers=headers, params=params)\n        response.raise_for_status()\n        data = response.json()\n        results = []\n        for snippet in data.get(\"data\", []):\n            result = {\n                \"paper_title\": snippet.get(\"paper\", {}).get(\"title\", \"\"),\n                \"text\": snippet.get(\"snippet\", {}).get(\"text\", \"\"),\n                \"score\": snippet.get(\"score\", 0)\n            }\n            results.append(result)\n        return results\n    except Exception as e:\n        print(f\"{Fore.RED}Error in Semantic Scholar snippet search: {e}{Style.RESET_ALL}\")\n        return []\n\n# ------------------------------------------------------------------------------\n# Define prompt templates\n\ndata_analyzer_prompt = PromptTemplate(\n    input_variables=[\"input_data\", \"critic_feedback\"],\n    template=\"\"\"\nYou are a sophisticated analytical scientist specializing in astrobiological data analysis, with deep expertise in meteorites. Your knowledge is based on but not limited to the following:\n\nBackground Context:\n{astrobio_context}\n\nYour tasks include:\n1. Identifying significant patterns and trends in the dataset, especially PAH distributions and alkylation patterns.\n2. Identifying possible environmental contamination in the samples, considering terrestrial vs. extraterrestrial signatures.\n3. Highlighting unexpected or unusual findings, particularly regarding temperature indicators.\n4. Comparing data subsets where relevant, especially between different meteorite classes.\n5. MOST IMPORTANTLY: Incorporating critic feedback to guide your analysis.\n\nInput Data:\n{input_data}\n\nCritic Feedback:\n{critic_feedback}\n\nProvide a refined analysis based on the above, with special emphasis on addressing critic feedback.\nPay particular attention to rewarded aspects and avoid patterns similar to criticized aspects.\n\"\"\"\n)\n\nsearch_executor_prompt = PromptTemplate(\n    input_variables=[\"query\", \"search_results\"],\n    template=\"\"\"\nYou are a specialized literature review agent analyzing scientific literature search results.\n\nYour tasks include:\n1. Analyzing the search results provided below.\n2. Extracting and synthesizing key insights.\n3. Formatting your summary clearly and concisely.\n4. Highlighting significant findings and noting any conflicting evidence.\n\nQuery:\n{query}\n\nSearch Results:\n{search_results}\n\nProvide a well-organized summary addressing the query, key discoveries, research gaps, and include any relevant citations.\n\"\"\"\n)\n\n# Updated Astrobio Scientist Prompt (now with agent_id and agent_instructions)\nastrobio_scientist_prompt = PromptTemplate(\n    input_variables=[\"agent_id\", \"agent_instructions\", \"analysis\", \"search_analysis\", \"critic_feedback\", \"input_data\"],\n    template=\"\"\"\nYou are a sophisticated astrobiologist and prebiotic chemist specializing in meteoritic organic compounds.\nYou are Scientist {agent_id}. **Instructions**: {agent_instructions}\n\nIMPORTANT: Only focus on the data that is assigned to you.\n\nYour job is to:\n1. Generate all hypotheses and conclusions from the **Input Data**.\n2. You must be original and novel, while considering established formation mechanisms.\n3. Make conclusions ONLY based on the **Input Data** and the **Instructions**.\n4. DO NOT include GC or environmental contamination in your hypothesis, the user already knows about it.\n5. DO NOT recommend any hypothesis about making the data better.\n\nBackground Context:\n{astrobio_context}\n\n**Input Data**:\n{input_data}\n\nBased on the above, generate new hypotheses and conclusions as necessary.\nYou must respond ONLY with a valid JSON object in the following format, with no additional text before or after:\n{{\n    \"hypothesis\": [\n        {{\n            \"id\": \"Format it like H_one, H_two, etc.\",\n            \"statement\": \"Explain the hypothesis fully and in detail here.\",\n            \"key_datapoints\": \"List of compounds and samples that support the hypothesis, directly point to ID or compound/sample name.\",\n        }}\n    ]\n}}\n\nEnsure the JSON is properly formatted.\n\"\"\"\n)\n\n# Accumulator Scientist Prompt\naccumulator_scientist_prompt = PromptTemplate(\n    input_variables=[\"hypotheses_list\", \"input_data\", \"analysis\", \"search_analysis\", \"critic_feedback\"],\n    template=\"\"\"\nYou are an expert astrobiologist and scientific reviewer tasked with evaluating multiple hypotheses generated by different astrobiology scientists. Your job is to combine concatenate the hypotheses and conclusions from the three scientists and discard any repetitive hypotheses.\n\nYou have received the following hypotheses from three separate scientists:\n{hypotheses_list}\n\nYour task is to:\n1. Review each hypothesis critically\n2. Concatenate the hypotheses and conclusions from the three scientists\n3. Discard repetitive hypotheses\n4. Make sure to include more than one hypothesis in the final hypothesis list\n5. DO NOT include GC or environmental contamination in your hypothesis, the user already knows about it.\n6. DO NOT recommend any hypothesis about making the data better.\n\nProvide your response ONLY as a valid JSON object in the following format, with no additional text before or after:\n{{\n    \"hypothesis\": [\n        {{\n            \"id\": \"Use a format like H_final_one, H_final_two, etc.\",\n            \"statement\": \"Don't change the hypothesis statement\",\n            \"key_datapoints\": \"Don't change the key datapoints\",\n        }}\n    ]\n}}\n\nEnsure the JSON is properly formatted.\n\"\"\"\n)\n\n# Planner Agent Prompt\nplanner_prompt = PromptTemplate(\n    input_variables=[\"analysis\", \"critic_feedback\", \"input_data\"],\n    template=\"\"\"\nYou are an experienced scientific planner and coordinator. Based on the data analysis provided below, your task is to delegate specific areas within the input data across a team of three scientists for in-depth exploration and investigation.\n\nInput Data:\n{input_data}\n\n**Data Analysis:**\n{analysis}\n\nIMPORTANT: \n1. Just focus on the data analysis and divide the among three agents.\n2. The agents are not able to run tools, they only generate hypotheses based on the area that you delegate to them.\n3. Make sure to include the ID of the compounds in the task split.\n3. DO NOT include GC or environmental contamination in your task split, the user already knows about it.\n4. DO NOT assign any tasks about making the data better and doing further analysis.\n\nBased on the above, provide specific instructions for each of the three scientists, clearly indicating what aspect of the data they should focus on. \n\nYour response must be ONLY a valid JSON object with the following format, with no additional text before or after:\n{{\n    \"Agent1_instructions\": \"Detailed instructions for what Scientist 1 should focus on.\",\n    \"Agent2_instructions\": \"Detailed instructions for what Scientist 2 should focus on.\",\n    \"Agent3_instructions\": \"Detailed instructions for what Scientist 3 should focus on.\"\n}}\n\nEnsure the JSON is properly formatted.\n\"\"\"\n)\n\ncritic_prompt = PromptTemplate(\n    input_variables=[\"hypothesis\", \"literature_review\", \"input_data\"],\n    template=\"\"\"\nYou are an expert scientist in astrobiology and prebiotic chemistry, with deep expertise in PAH analysis and meteoritic organic chemistry.\n\nBackground Context:\n{astrobio_context}\n\nYour task is to provide a detailed, scientifically rigorous critique of the proposed hypothesis and the associated data analysis. Note that if the **hypotheses** are not exactly aligned with the data, you should discard the hypothesis and generate a new one.\n\nYour critique must include:\n\n1. Alignment with the data:\n    - Assess the alignment of the hypothesis with the data.\n    - Evaluate if the proposed mechanisms align with observed PAH distributions and temperature indicators.\n    - Consider if the hypothesis accounts for both chemical and physical processes in meteorite parent bodies.\n    - If the hypothesis is not exactly aligned with the data, you should discard it and generate a new one.\n\n2. Scientific Evaluation:\n   - Assess the theoretical foundations and empirical basis of each hypothesis.\n   - Evaluate temperature constraints implied by PAH distributions.\n   - Consider parent body processes like aqueous alteration.\n   - Identify any assumptions that may not be well supported by the data.\n   - Point out specific weaknesses in the data analysis or experimental design.\n\n3. Integration with Literature:\n   - Critically compare the hypothesis against current research findings.\n   - Evaluate consistency with known PAH formation mechanisms.\n   - Consider implications of PAH distributions for formation conditions.\n   - Identify gaps in the existing literature that the hypothesis addresses or ignores.\n   - Propose additional sources or studies that could reinforce or challenge the claims.\n\n4. IMPORTANT: Novelty and originality are highly rewarded based on literature review. Punish **hypotheses** that are not novel or original.\n\n5. Punish hypothesis statements that are vague and too general. Reward specific and detailed **hypotheses** based on the data and analysis.\n6. Avoid suggesting any improvements to the input data. Only critique the **hypotheses**.\n\nInput Data:\n{input_data}\n\nLiterature Review:\n{literature_review}\n\n**Hypothesis**:\n{hypothesis}\n\nProvide your critique in a clear and structured format, ensuring that your comments are actionable and aimed at improving the hypothesis and data analysis.\n\nYour scientific critique:\n\"\"\"\n)\n\n# ------------------------------------------------------------------------------\n# Initialize LLM chains for each agent\n\ndata_analyzer_chain = LLMChain(\n    llm=llm,\n    prompt=data_analyzer_prompt.partial(astrobio_context=ASTROBIO_CONTEXT),\n    verbose=False,\n    output_key=\"analysis\"\n)\n\nsearch_executor_chain = LLMChain(\n    llm=llm,\n    prompt=search_executor_prompt,\n    verbose=False,\n    output_key=\"search_results\"\n)\n\n# Create three astrobio scientist chains using the same prompt but with different agent_ids and instructions\nastrobio_scientist_chain_1 = LLMChain(\n    llm=llm,\n    prompt=astrobio_scientist_prompt.partial(astrobio_context=ASTROBIO_CONTEXT),\n    verbose=False,\n    output_key=\"hypothesis\"\n)\n\nastrobio_scientist_chain_2 = LLMChain(\n    llm=llm,\n    prompt=astrobio_scientist_prompt.partial(astrobio_context=ASTROBIO_CONTEXT),\n    verbose=False,\n    output_key=\"hypothesis\"\n)\n\nastrobio_scientist_chain_3 = LLMChain(\n    llm=llm,\n    prompt=astrobio_scientist_prompt.partial(astrobio_context=ASTROBIO_CONTEXT),\n    verbose=False,\n    output_key=\"hypothesis\"\n)\n\naccumulator_scientist_chain = LLMChain(\n    llm=llm,\n    prompt=accumulator_scientist_prompt,\n    verbose=False,\n    output_key=\"accumulated_hypothesis\"\n)\n\nplanner_chain = LLMChain(\n    llm=llm,\n    prompt=planner_prompt.partial(astrobio_context=ASTROBIO_CONTEXT),\n    verbose=False,\n    output_key=\"planning_instructions\"\n)\n\ncritic_chain = LLMChain(\n    llm=llm,\n    prompt=critic_prompt.partial(astrobio_context=ASTROBIO_CONTEXT),\n    verbose=False,\n    output_key=\"feedback\"\n)\n\n# ------------------------------------------------------------------------------\n# Helper functions\n\ndef process_search_results(query: str, limit: int = 5) -> str:\n    \"\"\"\n    Process search results from Semantic Scholar and format them.\n    \"\"\"\n    snippets = semantic_scholar_snippet_search(query, limit=limit)\n    if not snippets:\n        return \"No relevant search results found.\"\n    \n    formatted_results = []\n    for i, snippet in enumerate(snippets, 1):\n        result = f\"Result {i}:\\n\"\n        result += f\"Paper: {snippet['paper_title']}\\n\"\n        result += f\"Text Snippet:\\n{snippet['text']}\\n\"\n        result += f\"Score: {snippet['score']}\\n\"\n        result += \"-\" * 80 + \"\\n\"\n        formatted_results.append(result)\n    \n    return \"\\n\".join(formatted_results)\n\ndef process_hypothesis_and_search(hypothesis_json: str) -> dict:\n    \"\"\"\n    Process JSON hypothesis and perform searches for each one.\n    \"\"\"\n    try:\n        cleaned_json = hypothesis_json.strip()\n        if cleaned_json.startswith(\"'\") and cleaned_json.endswith(\"'\"):\n            cleaned_json = cleaned_json[1:-1]\n        if cleaned_json.startswith('```json'):\n            cleaned_json = cleaned_json[7:]\n        elif cleaned_json.startswith('```'):\n            cleaned_json = cleaned_json[3:]\n        if cleaned_json.endswith('```'):\n            cleaned_json = cleaned_json[:-3]\n        cleaned_json = cleaned_json.strip()\n        \n        try:\n            hypothesis_data = json.loads(cleaned_json)\n        except json.JSONDecodeError as e:\n            print(f\"{Fore.RED}Initial JSON parsing failed, attempting fix...{Style.RESET_ALL}\")\n            cleaned_json = cleaned_json.replace(\"'\", '\"')\n            hypothesis_data = json.loads(cleaned_json)\n        \n        if not isinstance(hypothesis_data, dict) or \"hypothesis\" not in hypothesis_data:\n            raise ValueError(\"Invalid JSON structure: missing 'hypothesis' key\")\n        \n        all_search_results = []\n        for hypothesis in hypothesis_data[\"hypothesis\"]:\n            required_fields = [\"statement\"]\n            missing_fields = [field for field in required_fields if field not in hypothesis]\n            if missing_fields:\n                print(f\"{Fore.YELLOW}Warning: Hypothesis {hypothesis.get('id', 'unknown')} missing fields: {', '.join(missing_fields)}{Style.RESET_ALL}\")\n                continue\n                \n            query = hypothesis[\"statement\"]\n            hypothesis_id = hypothesis.get(\"id\", f\"H{len(all_search_results) + 1}\")\n            print(f\"{Fore.YELLOW}Searching for hypothesis: {hypothesis_id}{Style.RESET_ALL}\")\n            \n            formatted_results = process_search_results(query)\n            executor_analysis = search_executor_chain.run({\n                \"query\": query,\n                \"search_results\": formatted_results\n            })\n            \n            all_search_results.append({\n                \"hypothesis_id\": hypothesis_id,\n                \"query\": query,\n                \"analysis\": executor_analysis\n            })\n            time.sleep(2)  # Rate limiting\n        \n        if not all_search_results:\n            return {\n                \"search_results\": [],\n                \"search_analysis\": \"No valid hypothesis found to process\"\n            }\n        \n        return {\n            \"search_results\": all_search_results,\n            \"search_analysis\": \"\\n\\n===\\n\\n\".join([\n                f\"Hypothesis {result['hypothesis_id']}:\\n{result['analysis']}\"\n                for result in all_search_results\n            ])\n        }\n    except (json.JSONDecodeError, ValueError) as e:\n        error_msg = f\"Error processing hypothesis: {str(e)}\\nReceived content:\\n{hypothesis_json[:500]}...\"\n        print(f\"{Fore.RED}{error_msg}{Style.RESET_ALL}\")\n        return {\n            \"search_results\": [],\n            \"search_analysis\": f\"Error processing hypothesis JSON format: {str(e)}\"\n        }\n    except Exception as e:\n        print(f\"{Fore.RED}Unexpected error: {str(e)}{Style.RESET_ALL}\")\n        return {\n            \"search_results\": [],\n            \"search_analysis\": f\"Unexpected error while processing hypothesis: {str(e)}\"\n        }\n\n# ------------------------------------------------------------------------------\n# Main Agentic System Function using state management\n\ndef agentic_system(input_data: str, iterations: int = 4) -> Dict[str, Any]:\n    \"\"\"\n    Main function that orchestrates the agentic system.\n    \"\"\"\n    print(f\"\\n{'='*50}\")\n    print(f\"🔄 Starting Agentic System\")\n    print(f\"{'='*50}\\n\")\n\n    critic_feedback = \"\"  # Initialize empty critic feedback for first iteration\n\n    for i in range(iterations):\n        print(f\"\\n{'='*50}\")\n        print(f\"🔄 Iteration {i+1} of {iterations}\")\n        print(f\"{'='*50}\\n\")\n\n        current_input = input_data\n\n        # Step 1: Data Analysis (using critic feedback)\n        print(f\"{Fore.CYAN}🤖 Starting Data Analysis...{Style.RESET_ALL}\")\n        analysis = data_analyzer_chain.run({\n            \"input_data\": current_input,\n            \"critic_feedback\": critic_feedback\n        })\n        print(f\"{Fore.GREEN}📊 Data Analyzer Output:{Style.RESET_ALL}\\n{analysis}\\n\")\n        os.makedirs('results_claude_sonnet_latest', exist_ok=True)\n        with open(f'results_claude_sonnet_latest/analysis_iteration_{i}.txt', 'w') as file:\n            file.write(f\"📊 Data Analyzer Output:\\n{analysis}\\n\")\n\n        # Step 2: Planning - Instruct the 3 astrobio scientists\n        print(f\"{Fore.CYAN}📝 Generating Planning Instructions...{Style.RESET_ALL}\")\n        planning_instructions_json = planner_chain.run({\n            \"analysis\": analysis,\n            \"critic_feedback\": critic_feedback,\n            \"input_data\": current_input\n        })\n        print(f\"{Fore.BLUE}📝 Planner Instructions:{Style.RESET_ALL}\\n{planning_instructions_json}\\n\")\n        with open(f'results_claude_sonnet_latest/planning_instructions_iteration_{i}.txt', 'w') as file:\n            file.write(f\"📝 Planner Instructions:\\n{planning_instructions_json}\\n\")\n        try:\n            planning_instructions = json.loads(planning_instructions_json.strip())\n        except Exception as e:\n            print(f\"{Fore.RED}Error parsing planner instructions JSON: {e}{Style.RESET_ALL}\")\n            planning_instructions = {\n                \"Agent1_instructions\": \"Focus on temperature constraints and PAH distribution.\",\n                \"Agent2_instructions\": \"Focus on formation mechanisms and aqueous alteration.\",\n                \"Agent3_instructions\": \"Focus on parent body processes and pre-solar origins.\"\n            }\n    \n\n        # Step 3: Hypothesis Generation by 3 Astrobio Scientists\n        print(f\"{Fore.CYAN}🧬 Generating/Updating hypotheses by 3 Scientists...{Style.RESET_ALL}\")\n        hypothesis_1 = astrobio_scientist_chain_1.run({\n            \"agent_id\": \"1\",\n            \"agent_instructions\": planning_instructions.get(\"Agent1_instructions\", \"\"),\n            \"analysis\": analysis,\n            \"search_analysis\": \"\",  # Initially empty\n            \"critic_feedback\": critic_feedback,\n            \"input_data\": current_input\n        })\n\n        print(f\"{Fore.MAGENTA}🧬 Scientist 1 hypothesis:{Style.RESET_ALL}\\n{hypothesis_1}\\n\")\n        with open(f'results_claude_sonnet_latest/hypothesis_1_iteration_{i}.txt', 'w') as file:\n            file.write(f\"🧬 Scientist 1 hypothesis:\\n{hypothesis_1}\\n\")\n        \n\n        hypothesis_2 = astrobio_scientist_chain_2.run({\n            \"agent_id\": \"2\",\n            \"agent_instructions\": planning_instructions.get(\"Agent2_instructions\", \"\"),\n            \"analysis\": analysis,\n            \"search_analysis\": \"\",\n            \"critic_feedback\": critic_feedback,\n            \"input_data\": current_input\n        })\n        print(f\"{Fore.MAGENTA}🧬 Scientist 2 hypothesis:{Style.RESET_ALL}\\n{hypothesis_2}\\n\")\n        with open(f'results_claude_sonnet_latest/hypothesis_2_iteration_{i}.txt', 'w') as file:\n            file.write(f\"🧬 Scientist 2 hypothesis:\\n{hypothesis_2}\\n\")\n    \n\n        hypothesis_3 = astrobio_scientist_chain_3.run({\n            \"agent_id\": \"3\",\n            \"agent_instructions\": planning_instructions.get(\"Agent3_instructions\", \"\"),\n            \"analysis\": analysis,\n            \"search_analysis\": \"\",\n            \"critic_feedback\": critic_feedback,\n            \"input_data\": current_input\n        })\n        print(f\"{Fore.MAGENTA}🧬 Scientist 3 hypothesis:{Style.RESET_ALL}\\n{hypothesis_3}\\n\")\n        with open(f'results_claude_sonnet_latest/hypothesis_3_iteration_{i}.txt', 'w') as file:\n            file.write(f\"🧬 Scientist 3 hypothesis:\\n{hypothesis_3}\\n\")\n\n        # Combine the three hypotheses into a JSON array string for the accumulator\n        combined_hypotheses = json.dumps({\n            \"hypotheses_list\": [hypothesis_1, hypothesis_2, hypothesis_3]\n        })\n        \n        # Step 4: Accumulator Scientist consolidates the hypotheses\n        print(f\"{Fore.CYAN}🔄 Accumulating hypotheses...{Style.RESET_ALL}\")\n        accumulated_hypothesis = accumulator_scientist_chain.run({\n            \"hypotheses_list\": combined_hypotheses,\n            \"input_data\": current_input,\n            \"analysis\": analysis,\n            \"search_analysis\": \"\",\n            \"critic_feedback\": critic_feedback\n        })\n        print(f\"{Fore.MAGENTA}🔄 Accumulated Hypothesis:{Style.RESET_ALL}\\n{accumulated_hypothesis}\\n\")\n        with open(f'results_claude_sonnet_latest/accumulated_hypothesis_iteration_{i}.txt', 'w') as file:\n            file.write(f\"🔄 Accumulated Hypothesis:\\n{accumulated_hypothesis}\\n\")\n\n        # Step 5: Search Process based on accumulated hypothesis\n        print(f\"{Fore.CYAN}🎯 Initiating Search Process...{Style.RESET_ALL}\")\n        search_results = process_hypothesis_and_search(accumulated_hypothesis)\n        print(f\"{Fore.BLUE}🔍 Search Analysis:{Style.RESET_ALL}\\n{search_results['search_analysis']}\\n\")\n        with open(f'results_claude_sonnet_latest/search_analysis_iteration_{i}.txt', 'w') as file:\n            file.write(f\"🔍 Search Analysis:\\n{search_results['search_analysis']}\\n\")\n\n        # Step 6: Critic Feedback\n        print(f\"{Fore.CYAN}⚖️ Executing Scientific Critique...{Style.RESET_ALL}\")\n        critic_feedback = critic_chain.run({\n            \"hypothesis\": accumulated_hypothesis,\n            \"literature_review\": search_results[\"search_analysis\"],\n            \"input_data\": current_input\n        })\n        print(f\"{Fore.RED}⚖️ Critic Feedback:{Style.RESET_ALL}\\n{critic_feedback}\\n\")\n        with open(f'results_claude_sonnet_latest/critic_feedback_iteration_{i}.txt', 'w') as file:\n            file.write(f\"⚖️ Critic Feedback:\\n{critic_feedback}\\n\")\n\n    return {\n        \"final_analysis\": analysis,\n        \"final_accumulated_hypothesis\": accumulated_hypothesis,\n        \"final_search_analysis\": search_results[\"search_analysis\"],\n        \"final_critic_feedback\": critic_feedback\n    }\n\n\nif __name__ == \"__main__\":\n    # Read the initial prompt from a file (adjust the file path as needed)\n    with open(input_prompt_file, 'r') as file:\n        prompt_text = file.read()\n\n    # Run the agentic system using the input prompt and a specified number of iterations\n    final_results = agentic_system(input_data=prompt_text, iterations=iterations)\n\n    print(\"\\n=== Final Results ===\")\n    print(f\"Final Analysis:\\n{final_results['final_analysis']}\\n\")\n    print(f\"Final Accumulated Hypothesis:\\n{final_results['final_accumulated_hypothesis']}\\n\")\n    print(f\"Final Literature Review:\\n{final_results['final_search_analysis']}\\n\")\n    print(f\"Final Critic Feedback:\\n{final_results['final_critic_feedback']}\\n\")"
  },
  {
    "schemaVersion": "0.2",
    "id": "bartnik-admissible-extension",
    "recordId": "bartnik-admissible-extension-attempt",
    "title": "Bartnik admissible-extension proof-search prompt",
    "author": "Kevin Connolly",
    "origin": "Author-provided Codex task",
    "sourceUrl": "codex://threads/019f68a1-94df-7a93-abc1-caf8740b4726",
    "retrievedAt": "2026-07-16",
    "originalFormat": "Codex user message",
    "artifactType": "transcription",
    "completeness": "exact",
    "permissionBasis": "The author explicitly authorized Prompts for Progress to use and cite the prompt.",
    "publicationStatus": "approved",
    "structure": [
      "problem definition",
      "exact success criteria",
      "explicit exclusions",
      "multi-agent search management",
      "adversarial validation",
      "stopping condition",
      "search policy"
    ],
    "body": "A Bartnik body is a smooth compact connected Riemannian 3-manifold (($\\Omega,g_\\Omega$)), diffeomorphic to the closed 3-ball, such that its scalar curvature satisfies\n\n\\[\nR_{g_\\Omega}\\ge 0\n\\]\n\nand its boundary mean curvature ($H_\\Omega$), computed with respect to the outward unit normal, is strictly positive.\n\nLet $M$ be a smooth 3-manifold with boundary diffeomorphic to $\\mathbb R^3\\setminus B^3$. An exterior metric $g$ on $M$ is asymptotically flat if it has one asymptotically Euclidean end with decay sufficient to define the ADM mass and with integrable scalar curvature.\n\nThe exterior (($M,g$)) is an admissible extension of (($\\Omega,g_\\Omega$)) if:\n\n- $g$ is smooth up to $\\partial M$, asymptotically flat, and $R_g\\ge0$;\n- there is a boundary identification $\\partial M\\simeq\\partial\\Omega$ under which the induced metrics agree exactly;\n- the exterior boundary mean curvature $H_M$, computed with the unit normal pointing into $M$ toward infinity, satisfies\n  \\[\n  H_M\\le H_\\Omega;\n  \\]\n- $M$ contains no compact immersed minimal surface separating $\\partial M$ from infinity.\n\nResolve the Bartnik admissible-extension conjecture completely:\n\nEvery Bartnik body possesses an admissible asymptotically flat extension.\n\nAssume for purposes of this task that a complete affirmative proof exists. A complete solution must prove exactly the following:\n\nFor every smooth Riemannian metric $g_\\Omega$ of nonnegative scalar curvature on a compact 3-manifold $\\Omega\\simeq\\overline{B^3}$, with $H_\\Omega>0$, construct or prove the existence of a smooth asymptotically flat metric $g$ on $M\\simeq\\mathbb R^3\\setminus B^3$ satisfying all four admissibility conditions above, without additional assumptions such as symmetry, positive Gauss curvature of the boundary, convexity, near-roundness, small perturbation from Euclidean or Schwarzschild data, analyticity, or a quantitative lower bound on $H_\\Omega$.\n\nThis task concerns existence of an admissible extension. Uniqueness, realization of the Bartnik-mass infimum, and static-vacuum character are not required. A static-vacuum construction is permitted if it proves the stated result, but reducing the task to a stronger unresolved Bartnik conjecture is insufficient.\n\nPartial progress does not count unless it implies exactly the resolution above. In particular, results for special classes of bodies, extensions obtained only after scaling or perturbing the boundary data, approximate boundary matching, local collar constructions without a complete asymptotically flat end, extensions whose scalar curvature changes sign, constructions that may contain surrounding minimal surfaces, mass bounds without existence, reductions to another unproved conjecture, numerical evidence, and existence of fill-ins rather than exterior extensions are insufficient.\n\nUse multiagent v2 aggressively and dynamically. You have up to 64 concurrent agents available. Do not use a fixed assignment such as “N agents for strategy X.” Instead, manage the search using the following heuristics:\n\n- Begin with a genuinely diverse portfolio of approaches. Agents should explore substantially different formulations, invariants, deformation and gluing schemes, elliptic and variational viewpoints, geometric flows, compactness arguments, scalar-curvature methods, minimal-surface barriers, topological constructions, degree or continuation methods, and computational sanity checks.\n\n- Assign some agents specifically to search for structural connections with neighboring domains of pure mathematics, including geometric measure theory, inverse and boundary problems, nonlinear functional analysis, capacity theory, geometric topology, optimal-extension problems, and other curvature-constrained existence theories. A proposed analogy counts only when it produces a concrete transferable lemma, invariant, estimate, or construction.\n\n- Do not tell most agents the currently favored approach. Preserve independence during early rounds so that agents do not all converge to the same attractive but incomplete construction.\n\n- Maintain an explicit registry of approach families. Group agents by the mathematical mechanism they are using, not by superficial wording. If many agents converge to one family, redirect some toward underexplored formulations.\n\n- Maintain a dependency graph for candidate proofs. Record exactly which lemmas each route requires, which are proved, and which remain unsupported. Do not count a reformulation of admissible-extension existence as progress toward proving it.\n\n- Do not allow one approach to dominate merely because it gives an elegant reduction. A route that ends at a compactness, smoothing, gluing, or horizon-exclusion lemma equivalent in strength to the original conjecture is not close to completion unless it supplies a genuinely new proof of that lemma.\n\n- When an approach stalls at a theorem-strength missing lemma, mark that route as blocked. Only continue assigning agents to it if someone proposes a materially new mechanism, invariant, estimate, or construction.\n\n- Keep several incompatible proof routes alive through multiple rounds. Cross-pollinate ideas only after independent agents have developed them far enough to expose their real strengths and gaps.\n\n- Use adversarial agents throughout. Every candidate proof must be checked for exact preservation of the boundary metric; the direction and sign of the mean-curvature inequality; nonnegative scalar curvature, including across corners and after smoothing; genuine asymptotic flatness and scalar-curvature integrability; the required exterior topology and single end; formation of compact minimal surfaces during gluing, deformation, or passage to a limit; degeneration of the boundary or cut locus; loss of regularity; and circular use of the Bartnik extension, minimization, or static-extension conjectures.\n\n- Require agents to return concrete lemmas, constructions, estimates, equations, monotone quantities, or counterexamples to proposed sublemmas. Reject status reports, vague optimism, formal minimization without attainment, and claims that global compatibility, compactness, smoothing, or horizon exclusion is “standard” or “routine.”\n\n- The root agent should repeatedly synthesize, challenge, redirect, and launch new rounds. Do not stop after the first wave fails. Produce a complete proof only after every admissibility condition survives independent adversarial audit.\n\nDo not return merely because current approaches fail or agents report theorem-strength gaps. Continue launching new rounds, reopening blocked approaches only when there is a genuinely new mechanism, and searching for fresh formulations and cross-domain connections.\n\nReturn only when a complete affirmative proof has been found and survives adversarial audit. Do not return a reduction, special case, isolated missing lemma, “best effort” summary, or explanation of why the problem is difficult.\n\nSpend at least 4 hours on this before even thinking of returning or giving up.\n\nPublic search may be used only for ordinary mathematical background and standard named theorems, not to search for a solution to this exact conjecture or benchmark. Do not search the public web merely to determine whether the conjecture is open, and do not answer that it is open."
  },
  {
    "schemaVersion": "0.2",
    "id": "bixbench-trajectories",
    "recordId": "bixbench-trajectories",
    "title": "BixBench execution and grading prompts",
    "author": "BixBench collaborators",
    "origin": "Public BixBench source repository",
    "sourceUrl": "https://github.com/Future-House/BixBench",
    "sourceCommit": "49311180bdacb324c596f2e07596c126f2004008",
    "retrievedAt": "2026-07-17",
    "originalFormat": "Python and YAML source files",
    "artifactType": "source-bundle",
    "completeness": "partial",
    "permissionBasis": "Redistribution under the repository's Apache-2.0 License, preserved with the local source bundle.",
    "publicationStatus": "approved",
    "transcriptionMode": "Verbatim source files from the cited repository commit.",
    "rawSources": [
      "sources/bixbench-trajectories/prompts.py",
      "sources/bixbench-trajectories/generate_trajectories.yaml",
      "sources/bixbench-trajectories/v1.5_paper_results.yaml"
    ],
    "displayFiles": [
      "sources/bixbench-trajectories/prompts.py",
      "sources/bixbench-trajectories/generate_trajectories.yaml"
    ],
    "structure": [
      "question wrappers",
      "multiple-choice evaluation",
      "open-ended evaluation",
      "grader prompts",
      "trajectory configuration"
    ],
    "body": "This local bundle contains the execution and grading templates. The 205 underlying research questions remain in the separately hosted BixBench dataset and are the main missing component for a completely self-contained mirror.\n\n========================================\n\nSOURCE FILE: sources/bixbench-trajectories/prompts.py\n\nMCQ_PROMPT_TEMPLATE_WITHOUT_REFUSAL = (\n    \"Extract the single letter answer to the following question from the given options. You must pick one answer even if you are unsure.\"  # noqa: E501\n    \"\\n\\nQuestion: {question}\"\n    \"\\n\\nOptions:\\n{options}\"\n    \"IMPORTANT: You must only output a single letter answer in XML format.\"\n    \"\\n\\n Example Output: <answer> X </answer>\"\n)\n\nMCQ_PROMPT_TEMPLATE_WITH_REFUSAL = (\n    \"Extract the single letter answer to the following question from the given options given below.\"\n    \"\\n\\nQuestion: {question}\"\n    \"\\n\\nOptions:\\n{options}\"\n    \"IMPORTANT: You must only output a single letter answer in XML format.\"\n    \"\\n\\nExample Output: <answer> X </answer>\"\n)\n\nOPEN_ENDED_PROMPT_TEMPLATE = (\n    \"Answer following question to the best of your knowledge.\"\n    \"Keep your answer concise and to the point.\"\n    \"\\n\\nQuestion: {question}\"\n    \"IMPORTANT: You must only output your answer in XML format.\"\n    \"\\n\\nExample Output: <answer> Your answer </answer>\"\n)\n\nOPEN_ENDED_GRADING_PROMPT = \"\"\"You are given a question, target answer and a predicted answer. Your task is to compare the target answer with the predicted and assess if the predicted answer is correct, incorrect or it refused to answer.\nQuestion: {question}\nTarget Answer: {target}\nPredicted Answer: {predicted}\n\nImportant: You must only output one from `correct`, `incorrect` or `refused` between <grade> tags.\nExample Output: <grade> correct </grade>\n\"\"\"  # noqa: E501\n\nOPEN_ENDED_RANGE_GRADING_PROMPT = \"\"\"You are given a question, target range using the format (lower,upper) and a predicted answer. Your task is to compare the target range with the predicted and assess if the predicted answer falls within the specified range. If it falls within the range, it is correct, otherwise it is incorrect. If the predicted answer cannot be compared to the target range, it is refused to answer.\nQuestion: {question}\nTarget Range: {target}\nPredicted Answer: {predicted}\n\nImportant: You must only output one from `correct`, `incorrect` or `refused` between <grade> tags.\nExample Output: <grade> correct </grade>\n\"\"\"  # noqa: E501\n\nMCQ_EVAL_PROMPT = \"\"\"\nFirst, carefully examine the following notebook:\n\n<notebook>\n{{notebook}}\n</notebook>\n\nNow, consider the following multiple-choice question:\n\n<question>\n{{question}}\n</question>\n\nFor reference, this was an open response answer submitted to the question:\n\n<proposed_answer>\n{{proposed_answer}}\n</proposed_answer>\n\nYou are allowed to use the proposed answer as a reference, but you don't have to use it when selecting your final answer.\n\nYour goal is to select the best answer for the MCQ based on the information provided in the notebook and any associated images.\nTo ensure accuracy, please follow these steps:\n\n1. Carefully read and analyze the content of the notebook.\n2. Review any associated images mentioned in the notebook.\n3. Identify the relevant information from the notebook and images.\n4. Consider each answer option carefully.\n5. Select the best answer based on the available information.\n\nBefore providing your final answer, wrap your analysis inside <question_analysis> tags:\n1. Quote the most relevant parts of the notebook for answering the question.\n2. List arguments for and against each answer option.\n3. Conclude with your chosen answer and a brief explanation.\n\nThis process will help you arrive at the most accurate answer. It's OK for this section to be quite long.\n\nAfter completing your analysis, provide your final answer in the exact format shown below:\n\n<answer>A</answer>\n\nRemember:\n- Only include the corresponding letter answers in your final output.\n- DO NOT PROVIDE ANY ADDITIONAL EXPLANATIONS OR TEXT OUTSIDE OF THE LETTER.\n\nPlease proceed with your analysis and answer selection.\n\"\"\"  # noqa: E501\n\nOPEN_ENDED_EVAL_PROMPT = \"\"\"\nHere is a question, the correct answer to the question, and a proposed answer.\nQuestion: {question}\nCorrect answer: {correct_answer}\nProposed answer: {proposed_answer}\nYou must respond with a binary score (0 or 1) for whether the proposed answer is equivalent  to the correct answer.\n\\nNothing else is permitted.\n\"\"\"\n\n========================================\n\nSOURCE FILE: sources/bixbench-trajectories/generate_trajectories.yaml\n\nrun_name: \"bixbench-run-3-claude3.7\"\n\nagent:\n  agent_type: \"ReActAgent\"\n  agent_kwargs:\n    llm_model:\n      name: \"claude-3-7-sonnet-20250219\"\n      parallel_tool_calls: False\n      num_retries: 5\n      temperature: 1.0\n    hide_old_env_states: True\nrollout:\n  max_steps: 40\n  batch_size: 4\n  rollout_type: \"aviary\"\n\nnotebook:\n  name: \"notebook.ipynb\"\n  language: \"python\"\n\ncapsule:\n  mode: \"open\"\n  include_refusal_option: true\n  system_prompt: \"CAPSULE_SYSTEM_PROMPT_OPEN\"\n  prompt_templates:\n    mcq: \"MCQ_PROMPT_TEMPLATE\"\n    open: \"OPEN_PROMPT_TEMPLATE\"\n    hypothesis: \"HYPOTHESIS_PROMPT_TEMPLATE\"\n  eval_mode: None # when set to None, the capsule will not evaluate the answer\n  avoid_images: true\n\npaths:\n  workspace_dir: \"data/workspace\"\n  trajectories_dir: \"data/trajectories\"\n  data_folder: \"data/capsules\"\n  hf_repo_id: \"futurehouse/bixbench\""
  },
  {
    "schemaVersion": "0.2",
    "id": "funsearch-cap-sets",
    "recordId": "funsearch-cap-sets",
    "title": "FunSearch cap-set program prompt scaffold",
    "author": "Google DeepMind FunSearch collaborators",
    "origin": "Public FunSearch repository",
    "sourceUrl": "https://github.com/google-deepmind/funsearch",
    "sourceCommit": "cc53f274237d7ab05c19df939edbc1f9616a7c19",
    "retrievedAt": "2026-07-17",
    "originalFormat": "Jupyter notebook and Python source files",
    "artifactType": "program-scaffold",
    "completeness": "representative",
    "permissionBasis": "Software is redistributed under Apache-2.0 and repository materials under CC BY 4.0, with the original license notice preserved.",
    "publicationStatus": "approved",
    "transcriptionMode": "Verbatim source files from the cited repository commit.",
    "rawSources": [
      "sources/funsearch-cap-sets/cap_set.ipynb",
      "sources/funsearch-cap-sets/sampler.py",
      "sources/funsearch-cap-sets/programs_database.py"
    ],
    "displayFiles": [
      "sources/funsearch-cap-sets/sampler.py",
      "sources/funsearch-cap-sets/programs_database.py"
    ],
    "structure": [
      "executable problem scaffold",
      "evaluator",
      "evolving candidate functions",
      "versioned exemplars",
      "code-completion request"
    ],
    "body": "FunSearch does not use one stable prose prompt. It builds code-completion prompts from a problem scaffold and evolving high-scoring programs. The bundle preserves the cap-set notebook and the code that constructs each prompt.\n\n========================================\n\nSOURCE FILE: sources/funsearch-cap-sets/sampler.py\n\n# Copyright 2023 DeepMind Technologies Limited\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\");\n# you may not use this file except in compliance with the License.\n# You may obtain a copy of the License at\n#\n#    http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing, software\n# distributed under the License is distributed on an \"AS IS\" BASIS,\n# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n# See the License for the specific language governing permissions and\n# limitations under the License.\n# ==============================================================================\n\n\"\"\"Class for sampling new programs.\"\"\"\nfrom collections.abc import Collection, Sequence\n\nimport numpy as np\n\nfrom funsearch.implementation import evaluator\nfrom funsearch.implementation import programs_database\n\n\nclass LLM:\n  \"\"\"Language model that predicts continuation of provided source code.\"\"\"\n\n  def __init__(self, samples_per_prompt: int) -> None:\n    self._samples_per_prompt = samples_per_prompt\n\n  def _draw_sample(self, prompt: str) -> str:\n    \"\"\"Returns a predicted continuation of `prompt`.\"\"\"\n    raise NotImplementedError('Must provide a language model.')\n\n  def draw_samples(self, prompt: str) -> Collection[str]:\n    \"\"\"Returns multiple predicted continuations of `prompt`.\"\"\"\n    return [self._draw_sample(prompt) for _ in range(self._samples_per_prompt)]\n\n\nclass Sampler:\n  \"\"\"Node that samples program continuations and sends them for analysis.\"\"\"\n\n  def __init__(\n      self,\n      database: programs_database.ProgramsDatabase,\n      evaluators: Sequence[evaluator.Evaluator],\n      samples_per_prompt: int,\n  ) -> None:\n    self._database = database\n    self._evaluators = evaluators\n    self._llm = LLM(samples_per_prompt)\n\n  def sample(self):\n    \"\"\"Continuously gets prompts, samples programs, sends them for analysis.\"\"\"\n    while True:\n      prompt = self._database.get_prompt()\n      samples = self._llm.draw_samples(prompt.code)\n      # This loop can be executed in parallel on remote evaluator machines.\n      for sample in samples:\n        chosen_evaluator = np.random.choice(self._evaluators)\n        chosen_evaluator.analyse(\n            sample, prompt.island_id, prompt.version_generated)\n\n========================================\n\nSOURCE FILE: sources/funsearch-cap-sets/programs_database.py\n\n# Copyright 2023 DeepMind Technologies Limited\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\");\n# you may not use this file except in compliance with the License.\n# You may obtain a copy of the License at\n#\n#    http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing, software\n# distributed under the License is distributed on an \"AS IS\" BASIS,\n# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n# See the License for the specific language governing permissions and\n# limitations under the License.\n# ==============================================================================\n\n\"\"\"A programs database that implements the evolutionary algorithm.\"\"\"\nfrom collections.abc import Mapping, Sequence\nimport copy\nimport dataclasses\nimport time\nfrom typing import Any\n\nfrom absl import logging\nimport numpy as np\nimport scipy\n\nfrom funsearch.implementation import code_manipulation\nfrom funsearch.implementation import config as config_lib\n\nSignature = tuple[float, ...]\nScoresPerTest = Mapping[Any, float]\n\n\ndef _softmax(logits: np.ndarray, temperature: float) -> np.ndarray:\n  \"\"\"Returns the tempered softmax of 1D finite `logits`.\"\"\"\n  if not np.all(np.isfinite(logits)):\n    non_finites = set(logits[~np.isfinite(logits)])\n    raise ValueError(f'`logits` contains non-finite value(s): {non_finites}')\n  if not np.issubdtype(logits.dtype, np.floating):\n    logits = np.array(logits, dtype=np.float32)\n\n  result = scipy.special.softmax(logits / temperature, axis=-1)\n  # Ensure that probabilities sum to 1 to prevent error in `np.random.choice`.\n  index = np.argmax(result)\n  result[index] = 1 - np.sum(result[0:index]) - np.sum(result[index+1:])\n  return result\n\n\ndef _reduce_score(scores_per_test: ScoresPerTest) -> float:\n  \"\"\"Reduces per-test scores into a single score.\"\"\"\n  return scores_per_test[list(scores_per_test.keys())[-1]]\n\n\ndef _get_signature(scores_per_test: ScoresPerTest) -> Signature:\n  \"\"\"Represents test scores as a canonical signature.\"\"\"\n  return tuple(scores_per_test[k] for k in sorted(scores_per_test.keys()))\n\n\n@dataclasses.dataclass(frozen=True)\nclass Prompt:\n  \"\"\"A prompt produced by the ProgramsDatabase, to be sent to Samplers.\n\n  Attributes:\n    code: The prompt, ending with the header of the function to be completed.\n    version_generated: The function to be completed is `_v{version_generated}`.\n    island_id: Identifier of the island that produced the implementations\n       included in the prompt. Used to direct the newly generated implementation\n       into the same island.\n  \"\"\"\n  code: str\n  version_generated: int\n  island_id: int\n\n\nclass ProgramsDatabase:\n  \"\"\"A collection of programs, organized as islands.\"\"\"\n\n  def __init__(\n      self,\n      config: config_lib.ProgramsDatabaseConfig,\n      template: code_manipulation.Program,\n      function_to_evolve: str,\n  ) -> None:\n    self._config: config_lib.ProgramsDatabaseConfig = config\n    self._template: code_manipulation.Program = template\n    self._function_to_evolve: str = function_to_evolve\n\n    # Initialize empty islands.\n    self._islands: list[Island] = []\n    for _ in range(config.num_islands):\n      self._islands.append(\n          Island(template, function_to_evolve, config.functions_per_prompt,\n                 config.cluster_sampling_temperature_init,\n                 config.cluster_sampling_temperature_period))\n    self._best_score_per_island: list[float] = (\n        [-float('inf')] * config.num_islands)\n    self._best_program_per_island: list[code_manipulation.Function | None] = (\n        [None] * config.num_islands)\n    self._best_scores_per_test_per_island: list[ScoresPerTest | None] = (\n        [None] * config.num_islands)\n\n    self._last_reset_time: float = time.time()\n\n  def get_prompt(self) -> Prompt:\n    \"\"\"Returns a prompt containing implementations from one chosen island.\"\"\"\n    island_id = np.random.randint(len(self._islands))\n    code, version_generated = self._islands[island_id].get_prompt()\n    return Prompt(code, version_generated, island_id)\n\n  def _register_program_in_island(\n      self,\n      program: code_manipulation.Function,\n      island_id: int,\n      scores_per_test: ScoresPerTest,\n  ) -> None:\n    \"\"\"Registers `program` in the specified island.\"\"\"\n    self._islands[island_id].register_program(program, scores_per_test)\n    score = _reduce_score(scores_per_test)\n    if score > self._best_score_per_island[island_id]:\n      self._best_program_per_island[island_id] = program\n      self._best_scores_per_test_per_island[island_id] = scores_per_test\n      self._best_score_per_island[island_id] = score\n      logging.info('Best score of island %d increased to %s', island_id, score)\n\n  def register_program(\n      self,\n      program: code_manipulation.Function,\n      island_id: int | None,\n      scores_per_test: ScoresPerTest,\n  ) -> None:\n    \"\"\"Registers `program` in the database.\"\"\"\n    # In an asynchronous implementation we should consider the possibility of\n    # registering a program on an island that had been reset after the prompt\n    # was generated. Leaving that out here for simplicity.\n    if island_id is None:\n      # This is a program added at the beginning, so adding it to all islands.\n      for island_id in range(len(self._islands)):\n        self._register_program_in_island(program, island_id, scores_per_test)\n    else:\n      self._register_program_in_island(program, island_id, scores_per_test)\n\n    # Check whether it is time to reset an island.\n    if (time.time() - self._last_reset_time > self._config.reset_period):\n      self._last_reset_time = time.time()\n      self.reset_islands()\n\n  def reset_islands(self) -> None:\n    \"\"\"Resets the weaker half of islands.\"\"\"\n    # We sort best scores after adding minor noise to break ties.\n    indices_sorted_by_score: np.ndarray = np.argsort(\n        self._best_score_per_island +\n        np.random.randn(len(self._best_score_per_island)) * 1e-6)\n    num_islands_to_reset = self._config.num_islands // 2\n    reset_islands_ids = indices_sorted_by_score[:num_islands_to_reset]\n    keep_islands_ids = indices_sorted_by_score[num_islands_to_reset:]\n    for island_id in reset_islands_ids:\n      self._islands[island_id] = Island(\n          self._template,\n          self._function_to_evolve,\n          self._config.functions_per_prompt,\n          self._config.cluster_sampling_temperature_init,\n          self._config.cluster_sampling_temperature_period)\n      self._best_score_per_island[island_id] = -float('inf')\n      founder_island_id = np.random.choice(keep_islands_ids)\n      founder = self._best_program_per_island[founder_island_id]\n      founder_scores = self._best_scores_per_test_per_island[founder_island_id]\n      self._register_program_in_island(founder, island_id, founder_scores)\n\n\nclass Island:\n  \"\"\"A sub-population of the programs database.\"\"\"\n\n  def __init__(\n      self,\n      template: code_manipulation.Program,\n      function_to_evolve: str,\n      functions_per_prompt: int,\n      cluster_sampling_temperature_init: float,\n      cluster_sampling_temperature_period: int,\n  ) -> None:\n    self._template: code_manipulation.Program = template\n    self._function_to_evolve: str = function_to_evolve\n    self._functions_per_prompt: int = functions_per_prompt\n    self._cluster_sampling_temperature_init = cluster_sampling_temperature_init\n    self._cluster_sampling_temperature_period = (\n        cluster_sampling_temperature_period)\n\n    self._clusters: dict[Signature, Cluster] = {}\n    self._num_programs: int = 0\n\n  def register_program(\n      self,\n      program: code_manipulation.Function,\n      scores_per_test: ScoresPerTest,\n  ) -> None:\n    \"\"\"Stores a program on this island, in its appropriate cluster.\"\"\"\n    signature = _get_signature(scores_per_test)\n    if signature not in self._clusters:\n      score = _reduce_score(scores_per_test)\n      self._clusters[signature] = Cluster(score, program)\n    else:\n      self._clusters[signature].register_program(program)\n    self._num_programs += 1\n\n  def get_prompt(self) -> tuple[str, int]:\n    \"\"\"Constructs a prompt containing functions from this island.\"\"\"\n    signatures = list(self._clusters.keys())\n    cluster_scores = np.array(\n        [self._clusters[signature].score for signature in signatures])\n\n    # Convert scores to probabilities using softmax with temperature schedule.\n    period = self._cluster_sampling_temperature_period\n    temperature = self._cluster_sampling_temperature_init * (\n        1 - (self._num_programs % period) / period)\n    probabilities = _softmax(cluster_scores, temperature)\n\n    # At the beginning of an experiment when we have few clusters, place fewer\n    # programs into the prompt.\n    functions_per_prompt = min(len(self._clusters), self._functions_per_prompt)\n\n    idx = np.random.choice(\n        len(signatures), size=functions_per_prompt, p=probabilities)\n    chosen_signatures = [signatures[i] for i in idx]\n    implementations = []\n    scores = []\n    for signature in chosen_signatures:\n      cluster = self._clusters[signature]\n      implementations.append(cluster.sample_program())\n      scores.append(cluster.score)\n\n    indices = np.argsort(scores)\n    sorted_implementations = [implementations[i] for i in indices]\n    version_generated = len(sorted_implementations) + 1\n    return self._generate_prompt(sorted_implementations), version_generated\n\n  def _generate_prompt(\n      self,\n      implementations: Sequence[code_manipulation.Function]) -> str:\n    \"\"\"Creates a prompt containing a sequence of function `implementations`.\"\"\"\n    implementations = copy.deepcopy(implementations)  # We will mutate these.\n\n    # Format the names and docstrings of functions to be included in the prompt.\n    versioned_functions: list[code_manipulation.Function] = []\n    for i, implementation in enumerate(implementations):\n      new_function_name = f'{self._function_to_evolve}_v{i}'\n      implementation.name = new_function_name\n      # Update the docstring for all subsequent functions after `_v0`.\n      if i >= 1:\n        implementation.docstring = (\n            f'Improved version of `{self._function_to_evolve}_v{i - 1}`.')\n      # If the function is recursive, replace calls to itself with its new name.\n      implementation = code_manipulation.rename_function_calls(\n          str(implementation), self._function_to_evolve, new_function_name)\n      versioned_functions.append(\n          code_manipulation.text_to_function(implementation))\n\n    # Create the header of the function to be generated by the LLM.\n    next_version = len(implementations)\n    new_function_name = f'{self._function_to_evolve}_v{next_version}'\n    header = dataclasses.replace(\n        implementations[-1],\n        name=new_function_name,\n        body='',\n        docstring=('Improved version of '\n                   f'`{self._function_to_evolve}_v{next_version - 1}`.'),\n    )\n    versioned_functions.append(header)\n\n    # Replace functions in the template with the list constructed here.\n    prompt = dataclasses.replace(self._template, functions=versioned_functions)\n    return str(prompt)\n\n\nclass Cluster:\n  \"\"\"A cluster of programs on the same island and with the same Signature.\"\"\"\n\n  def __init__(self, score: float, implementation: code_manipulation.Function):\n    self._score = score\n    self._programs: list[code_manipulation.Function] = [implementation]\n    self._lengths: list[int] = [len(str(implementation))]\n\n  @property\n  def score(self) -> float:\n    \"\"\"Reduced score of the signature that this cluster represents.\"\"\"\n    return self._score\n\n  def register_program(self, program: code_manipulation.Function) -> None:\n    \"\"\"Adds `program` to the cluster.\"\"\"\n    self._programs.append(program)\n    self._lengths.append(len(str(program)))\n\n  def sample_program(self) -> code_manipulation.Function:\n    \"\"\"Samples a program, giving higher probability to shorther programs.\"\"\"\n    normalized_lengths = (np.array(self._lengths) - min(self._lengths)) / (\n        max(self._lengths) + 1e-6)\n    probabilities = _softmax(-normalized_lengths, temperature=1.0)\n    return np.random.choice(self._programs, p=probabilities)"
  },
  {
    "schemaVersion": "0.2",
    "id": "futurehouse-robin-amd",
    "recordId": "futurehouse-robin-amd",
    "title": "Robin therapeutic-candidate research prompts",
    "author": "FutureHouse Robin collaborators",
    "origin": "Public Robin source repository",
    "sourceUrl": "https://github.com/Future-House/robin",
    "sourceCommit": "4a5cce310f3bc7663a67117db88af43b84733ffe",
    "retrievedAt": "2026-07-17",
    "originalFormat": "Python source files",
    "artifactType": "source-bundle",
    "completeness": "full",
    "permissionBasis": "Redistribution under the repository's Apache-2.0 License, preserved with the local source bundle.",
    "publicationStatus": "approved",
    "transcriptionMode": "Verbatim source files from the cited repository commit.",
    "rawSources": [
      "sources/futurehouse-robin-amd/prompts.py",
      "sources/futurehouse-robin-amd/configuration.py"
    ],
    "displayFiles": [
      "sources/futurehouse-robin-amd/prompts.py",
      "sources/futurehouse-robin-amd/configuration.py"
    ],
    "structure": [
      "disease input",
      "literature search",
      "experimental model selection",
      "candidate generation",
      "candidate ranking",
      "assay analysis"
    ],
    "body": "Robin's user input for the reported run is the disease name. The substantive research instructions live in the internal prompt module, which is preserved here alongside the configuration.\n\n========================================\n\nSOURCE FILE: sources/futurehouse-robin-amd/prompts.py\n\n# EXPERIMENTAL ANALYSIS PROMPTS #\n\nCOT = \"\"\"\nFollow these steps to create your notebook, using chain-of-thought reasoning at each stage:\n\n1. List Directory Contents:\n<analysis_planning>\n- Consider how to use the list_workdir tool to recursively list the directory contents.\n- Think about how to organize and present this information clearly in the notebook.\n- List potential challenges in interpreting the directory structure.\n- Consider how the directory structure might inform your approach to the analysis.\n</analysis_planning>\nPlace the output of the list_workdir tool inside <directory_contents> tags.\n\n2. Load Data and Perform Descriptive Statistics:\n<analysis_planning>\n- Identify which data files are most relevant to resolving the task. List these files.\n- Plan how to load these files efficiently in R.\n- List the specific descriptive statistics you plan to use (e.g., summary(), str(), head()).\n- Consider potential issues like missing data or unexpected formats. How will you handle each?\n- Plan how to present this information clearly in the notebook.\n- Write down key statistics you expect to see and how you'll interpret them.\n- Consider potential data quality issues and how you'll address them.\n</analysis_planning>\nExecute your plan to load data and perform descriptive statistics.\n\n3. Develop Analysis Plan:\n<analysis_planning>\n- Break down each task into testable components. List these components.\n- For each component, list appropriate statistical tests or visualizations.\n- Consider alternative approaches for each component and justify your choices.\n- Identify potential confounding factors and how to address them.\n- Plan the sequence of your analysis steps, explaining the rationale for each.\n- Consider how this analysis plan will be documented in the notebook.\n- List potential statistical assumptions for your chosen methods and how you'll test them.\n- Think about how your analysis plan addresses your original task.\n</analysis_planning>\nWrite out your analysis plan as comments in the notebook.\n\n4. Execute Analysis Plan:\n<analysis_planning>\n- For each step in your analysis plan, list the R or bash functions and libraries you'll use.\n- Think about how to structure your code for readability and efficiency.\n- Plan how to document your code with clear comments.\n- Consider how to present results clearly, using tables or visualizations where appropriate.\n- Ensure that all outputs are clearly labeled and explained in the context of the task.\n- Plan how you'll interpret each result in relation to the original task.\n- Consider potential unexpected results and how you'll handle them.\n</analysis_planning>\nExecute your analysis plan, creating new cells as needed.\n\n5. Conclude and Submit Answer:\n<thought_process>\n- Reflect on how your results relate to the original task.\n- Consider any limitations or uncertainties in your analysis.\n- Plan a concise summary of your findings.\n- Think about how to phrase your conclusion as clear statements.\n- Consider any additional insights or patterns you've noticed during the analysis.\n- Think about potential follow-up questions or areas for further investigation.\n</thought_process>\n\"\"\"\n\nGUIDELINE = \"\"\"\nGeneral Guidelines:\n- Write small to medium-sized cells for easier debugging.\n- Edit existing cells by their index number when fixing bugs, rather than creating new ones.\n- Check dataframe shapes before printing. Use head() for large dataframes.\n- Ensure each cell executes successfully before moving to the next.\n- Assume you already have the packages you need installed and only install new ones if you receive errors.\n- All cells are by default R cells. Use R or bash tools for all analysis.\n- You can use bash cells by adding %%bash to the first line of the cell or running a subprocess.\n\nGuidelines for using the R programming language:\n1. Load packages using this format to minimize verbose output:\n```r\nif (!requireNamespace(\"package_name\", quietly = TRUE)) {{\n    install.packages(\"package_name\")\n}}\nsuppressPackageStartupMessages(library(package_name))\n```\n2. You must use the tidyverse wherever possible: dplyr, tidyr, ggplot2, readr, stringr, forcats, purrr, tibble, and lubridate.\n\n3. All plots must be made using ggplot2. Here is an example of how to make a plot:\n\n# Create a density scatter plot of FSC-A vs SSC-A\nplot_data <- as.data.frame(dmso_data[, c(\"FSC-A\", \"SSC-A\")])\nscatter_plot <- ggplot2::ggplot(plot_data, ggplot2::aes(x = `FSC-A`, y = `SSC-A`)) +\nggplot2::geom_hex(bins = 100) +\nggplot2::scale_fill_viridis_c(trans = \"log10\") +\nggplot2::labs(\n    title = \"FSC-A vs SSC-A Density Plot (DMSO Control)\",\n    x = \"FSC-A\",\n    y = \"SSC-A\"\n) +\nggplot2::theme_minimal()\n\n3. Use explicit namespace qualification for functions. For example, use dplyr::select() instead of select().\n\n4. For data operations, suppress messages about column name repairs:\n```r\nvariable_name <- read_excel(\"<fpath>.csv\", col_names = FALSE, .name_repair = \"minimal\")\n```\n\"\"\"\n\nDATA_INTERPRETATION_SYSTEM_MESSAGE = (\n    \"You are a precise data analysis assistant interpreting experimental biological\"\n    \" data.\"\n)\n\nDATA_INTERPRETATION_CONTENT_MESSAGE = (\n    \"You are an expert biochemist. Review the following experimental data in the \"\n    'context of the research goal: \"{goal}\".\\n'\n    \"Data:\\n\"\n    \"{data_html}\\n\\n\"\n    \"Your task is to extract meaningful information to guide future hypothesis \"\n    \"generation. Please provide four answers:\\n\"\n    \"1.  **List of drugs tested in data:** List out all the drugs tested in this dataset.\\n\"\n    \"2.  **Summary of Key Findings and Insights:** Concisely summarize the main trends, \"\n    \"significant results (e.g., top performers, ineffective treatments), or patterns \"\n    \"observed in the data that are directly relevant to the research goal. Focus on \"\n    \"comparisons and magnitudes.\\n\"\n    \"3.  **Specific Questions Raised:** Based *only* on this data and the research goal, \"\n    \"list specific, answerable scientific questions that arise. These questions might \"\n    \"guide further literature searches or experimental design. If the data is clear and \"\n    \"raises no questions, state that clearly.\\n\"\n    \"4.  **Mechanistic Insights:** What are the key biological or biochemical mechanisms \"\n    \"suggested by the data? What are the potential biological pathways or processes \"\n    \"that explain the observed results, with respect to the research goal?\\n\\n\"\n    \"Format your response in a string, separating each of the four answers with <>. \"\n    \"The **List of drugs tested in data** should be in a comma separated string. \"\n    \"Then there should be a <>. The **Summary of Key Findings and Insights** should \"\n    \"be in a single paragraph. Then there should be a <>. **Specific Questions Raised** \"\n    \"should be in a numbered list, with each question separated by a new line. Then \"\n    \"there should be a <>. Finally, **Mechanistic Insights** should be a bulleted list, \"\n    \"with each insight separated by a new line.\\n\"\n)\n\n\nFOLLOWUP_SYSTEM_MESSAGE = (\n    \"You are an expert experimental biologist and research strategist. Your task\"\n    \" is to suggest follow-up experiments based on the provided data analysis summary,\"\n    \" questions, and mechanistic insights. Focus on experiments that directly address \"\n    \"knowledge gaps or test hypotheses suggested by the initial data interpretation. \"\n    \"It is not necessary to propose a follow-up experiment if there is nothing significant to follow up on.\"\n)\n\nFOLLOWUP_CONTENT_MESSAGE = (\n    \"\\n\"\n    '    Context: The overall research goal is \"{goal}\".\\n'\n    \"\\n\"\n    \"    An initial analysis of experimental data yielded the following:\\n\"\n    \"\\n\"\n    \"    Analysis Summary:\\n\"\n    \"    {analysis_summary}\\n\"\n    \"\\n\"\n    \"    Potential Mechanistic Insights:\\n\"\n    \"    {mechanistic_insights}\\n\"\n    \"\\n\"\n    \"    Questions Raised:\\n\"\n    \"    {questions_raised}\\n\"\n    \"\\n\"\n    \"    Task: Based *only* on the summary and insights above, suggest if specific \"\n    \"and valuable follow-up experiments, or output none if none are necessary.\\n\"\n    \"\\n\"\n    \"    For each assay suggestion, provide a string of:\\n\"\n    \"    Assay Name: The specific type of assay (e.g., 'RNA-seq', 'Flow Cytometry', \"\n    \"'Western Blot', 'High-Content Imaging', 'ELISA', 'qPCR', \"\n    \"'Co-Immunoprecipitation', 'Metabolomics'). Be specific.\\n\"\n    \"    Reasoning: A concise scientific reason explaining *why* this specific assay \"\n    \"is the logical next step to investigate the mechanisms, confirm findings, or \"\n    \"address questions raised by the initial analysis summary and insights. \"\n    \"Explain what specific question this assay will answer.\\n\"\n    \"\\n\"\n    \"    If there are multiple assays suggested, separate the assay suggestions \"\n    \"with two new lines.\\n\"\n    \"    \"\n    \"\\n\"\n)\n\n\nGENERAL_NOTEBOOK_GUIDELINES = \"\"\"\nGeneral Guidelines:\n- Write small to medium-sized cells for easier debugging.\n- Edit existing cells by their index number when fixing bugs, rather than creating new ones.\n- Check dataframe shapes before printing. Use head() for large dataframes.\n- Ensure each cell executes successfully before moving to the next.\n- Assume you already have the packages you need installed and only install new ones if you receive errors.\n- If you need to install packages, use pip or mamba.\n- All cells are by default {language} cells. Use {language} or bash tools for all analysis.\n- You can use bash cells by adding %%bash to the first line of the cell or running a subprocess.\n- You can only create code cells, no markdown cells.\n\"\"\"\n\nR_SPECIFIC_GUIDELINES = \"\"\"Guidelines for using the R programming language:\n1. Load packages using this format to minimize verbose output:\n   ```r\n   if (!requireNamespace(\"package_name\", quietly = TRUE)) {{\n     install.packages(\"package_name\")\n   }}\n   suppressPackageStartupMessages(library(package_name))\n   ```\n2. You must use the tidyverse wherever possible: dplyr, tidyr, ggplot2, readr, stringr, forcats, purrr, tibble, and lubridate.\n\n3. All plots must be made using ggplot2. Here is an example of how to make a plot:\n\n   # Create a density scatter plot of FSC-A vs SSC-A\nplot_data <- as.data.frame(dmso_data[, c(\"FSC-A\", \"SSC-A\")])\nscatter_plot <- ggplot2::ggplot(plot_data, ggplot2::aes(x = `FSC-A`, y = `SSC-A`)) +\n  ggplot2::geom_hex(bins = 100) +\n  ggplot2::scale_fill_viridis_c(trans = \"log10\") +\n  ggplot2::labs(\n    title = \"FSC-A vs SSC-A Density Plot (DMSO Control)\",\n    x = \"FSC-A\",\n    y = \"SSC-A\"\n  ) +\n  ggplot2::theme_minimal()\n\n3. Use explicit namespace qualification for functions. For example, use dplyr::select() instead of select().\n\n4. For data operations, suppress messages about column name repairs:\n   ```r\n   variable_name <- read_excel(\"<fpath>.csv\", col_names = FALSE, .name_repair = \"minimal\")\n   ```\n\"\"\"\n\nCHAIN_OF_THOUGHT_AGNOSTIC = \"\"\"\nFollow these steps to create your notebook, using chain-of-thought reasoning at each stage:\n\n1. Load Data and Perform Descriptive Statistics:\n<analysis_planning>\n- Identify which data files are most relevant to resolving the task.\n- Plan how to load these files efficiently in {language}.\n- List the specific descriptive statistics you plan to use (e.g., summary(), str(), head()).\n- Consider potential issues like missing data or unexpected formats. How will you handle each?\n- Plan how to present this information clearly in the notebook.\n- Write down key statistics you expect to see and how you'll interpret them.\n- Consider potential data quality issues and how you'll address them.\n</analysis_planning>\nExecute your plan to load data and perform descriptive statistics.\n\n2. Develop Analysis Plan:\n<analysis_planning>\n- Break down each task into testable components. List these components.\n- For each component, list appropriate statistical tests or visualizations.\n- Consider alternative approaches for each component and justify your choices.\n- Identify potential confounding factors and how to address them.\n- Plan the sequence of your analysis steps, explaining the rationale for each.\n- Consider how this analysis plan will be documented in the notebook.\n- List potential statistical assumptions for your chosen methods and how you'll test them.\n- Think about how your analysis plan addresses your original task.\n</analysis_planning>\nWrite out your analysis plan as comments in the notebook.\n\n3. Execute Analysis Plan:\n<analysis_planning>\n- For each step in your analysis plan, list the {language} or bash functions and libraries you'll use.\n- Think about how to structure your code for readability and efficiency.\n- Plan how to document your code with clear comments.\n- Consider how to present results clearly, using tables or visualizations where appropriate.\n- Ensure that all outputs are clearly labeled and explained in the context of the task.\n- Plan how you'll interpret each result in relation to the original task.\n- Consider potential unexpected results and how you'll handle them.\n</analysis_planning>\nExecute your analysis plan, creating new cells as needed.\n\n4. Conclude and Submit Answer:\n<thought_process>\n- Reflect on how your results relate to the original task.\n- Consider any limitations or uncertainties in your analysis.\n- Plan a concise summary of your findings.\n- Think about how to phrase your conclusion as clear statements.\n- Ensure that the notebook contains all necessary information for another model to derive these answers.\n- Consider any additional insights or patterns you've noticed during the analysis.\n- Think about potential follow-up questions or areas for further investigation.\n</thought_process>\n\"\"\"\n\n\nANALYSIS_QUERIES = {\n    \"flow_cytometry\": (\n        \"Analyze the .fcs files to measure Alexa Fluor 647 signal in live retinal \"\n        \"pigment epithelial cells across different drug treatments.\\n\"\n        \"Use the metadata file to match well positions  (e.g., A1) with their \"\n        \"corresponding drug treatments and plate information.\\n\"\n        \"Determine an appropriate gating strategy using a DMSO control well.\\n\\n\"\n        \"Start by using the flowMeans package to identify all of the clusters in the \"\n        \"FCS vs SSC plot. Next, identify which cluster is most likely to contain \"\n        \"the main cell population. \\n\"\n        \"Next, use a gating strategy to identify the live, singlet cell population \"\n        \"from the clustered FCS vs SSC plot. Make the necessary plots to identify \"\n        \"the required gating thresholds. Make sure to exclude all debris, and that \"\n        \"the singlet gating is not too strict. Adjust the gating if the percentage \"\n        \"gated population is too high or too low. Once you have the best gating \"\n        \"strategy possible that gives reasonable percentage gated events, check the \"\n        \"gating on the other two control wells to make sure comparable percentage \"\n        \"gated events. If not, go back and adjust the strategy until the gating \"\n        \"makes sense in all three control wells. Do not give up.\\n\\n\"\n        \"If there are multiple plates in the experiment, determine if there are \"\n        \"plate-to-plate effect. If there is, take appropriate normalization steps \"\n        \"using the DMSO control before downstream analysis. Make sure to keep each \"\n        \"replicate separate after normalisation.\\n\\n\"\n        \"Determine if there are any drug treatments that significantly increased \"\n        \"signal compared to DMSO control. Perform a suitable statistical test to \"\n        \"compare the drug treatments to the DMSO control. Consider carefully the \"\n        \"alternative hypothesis as we are only looking for an increase in signal, \"\n        \"also consider multiple testing adjustment if necessary. \\n\"\n        \"Output only a single CSV file named “flow_results.csv”, containing only \"\n        \"the following columns: “drug”, “mean_intensity”, “std_error”, “p_val”, \"\n        \"“adj_p_val”. Include control labelled as “DMSO control” under the column \"\n        \"“drug”. Do not include other columns in the CSV. \\n\\n\"\n        \"Do not stop early. Make sure you have processed all files available. \"\n        \"If you come across any errors, keep trying, do not give up until you \"\n        \"completed the analysis.\\n\"\n    ),\n    \"RNA_seq\": (\n        \"Determine the effect of the treatment in the context of this data. \\n\\n\"\n        \"Perform differential expression analysis and pathway analysis on relevant \"\n        \"comparison groups. Map all gene IDs to gene symbols using annotation \"\n        \"package such as 'org.Hs.eg.db'.\\n\\n\"\n        \"Generate volcano plots and heatmap of differentially expressed genes, and \"\n        \"dot plots for enriched pathways, use gene symbols for labels where relevant.\\n\\n\"\n        'Output a single csv file named \"dea_results.csv\"  with the results for all '\n        \"tested genes of the most relevant contrast, report both gene ID and gene symbol.\\n\\n\"\n        \"If there is an error, keep trying, do not give up until you reach the end \"\n        \"of the analysis. When mapping gene ID to gene symbol, consider all possible \"\n        \"forms of gene IDs, keep trying until the gene symbols are obtained.\\n\"\n    ),\n}\n\n\nCONSENSUS_QUERIES = {\n    \"flow_cytometry\": (\n        \"Perform a meta-analysis on these analyses, consider what is a suitable \"\n        \"method to combine the p values. The aim is to determine whether any drug \"\n        \"treatment significantly increased Alexa Fluor 647 fluorescence compared \"\n        \"to DMSO control. Note that there may be variations in naming of the \"\n        \"control samples. \\n\\n\"\n        \"Consider the range of average Alexa Fluor 647 intensity for each analysis \"\n        \"and whether further processing is required for the values to be comparable \"\n        \"across analyses.\\n\"\n        'Output a single CSV file named \"consensus_results.csv\", containing only '\n        \"the following columns: “drug”, “mean_intensity”, “std_error”.\\n\\n\"\n        \"Generate a barplot showing the average Alexa Fluor 647 fluorescence values \"\n        \"for each drug treatment and DMSO control with error bars showing the standard \"\n        \"error of the mean, use asterisks to denote significance on the plot. \"\n        \"Remember to include DMSO control in the final bar plot.\\n\"\n    ),\n    \"RNA_seq\": (\n        \"Combine these differential expression analysis results by calculating \"\n        \"the mode of log2FC and adjusted p values. Output the results in a file \"\n        \"named 'consensus_results.csv', include the columns gene_symbol, log2FC \"\n        \"and adjusted P values. In a separate file named 'top_genes.csv', output \"\n        \"the top 10 gene symbols of the consensus most significant genes with the \"\n        \"column name “gene_symbol”. \\n\\n\"\n        \"Create a stacked bar plot showing gene regulation consistency across all \"\n        \"analyses. Plot regulation direction (up vs down) on x-axis and percentage \"\n        \"of genes in each category on y-axis. Color-code by significance category: \"\n        \"all analyses, >50% of analyses and  <50% of analyses. Include percentages \"\n        \"within each segment and a clear legend. Exclude genes that are non-significant \"\n        \"across all analyses.\\n\"\n    ),\n}\n\n\n# EXPERIMENTAL ASSAY PROMPTS ###\n\nASSAY_LITERATURE_SYSTEM_MESSAGE = (\n    \"You are a highly experienced biomedical research strategist. \"\n    \"Your task is to propose **mechanistic hypotheses** tested via \"\n    \"**cell-culture assays** or **therapeutic strategies**. \"\n    \"Generate exactly {num_assays} distinct ideas.\"\n)\n\nASSAY_LITERATURE_USER_MESSAGE = (\n    \"Return a list of {num_queries} queries (separated by <>) that would be useful \"\n    \"in doing research to develop detailed, mechanistic cell culture assays that \"\n    \"would be used to evaluate drugs to treat {disease_name}. \\n\"\n    \"These queries will be given to a 20-person scientific team to research in depth, \"\n    \"so they should be able to capture broadly relevant information (30+ words) and \"\n    \"search relevant literature across \\n\"\n    \"biomedical, clinical, and biochemical literature about the disease or therapeutic \"\n    \"landscape. Don't look up specific drugs, but any relevant scientific information \"\n    \"that may help with assay development. \\n\"\n    \"You have {num_queries} queries, so spread your queries out to cover as much \"\n    \"ground as possible. Create queries both about the general biochemistry and \"\n    \"mechanistic underpinnings of {disease_name} as well as about the assays.\\n\"\n    \"In formatting, don't number the queries, just output a string with {num_queries} \"\n    \"queries separated by <>.\"\n)\n\n\nASSAY_PROPOSAL_SYSTEM_MESSAGE = (\n    \"You are a professional biomedical researcher, having experience in early-stage \"\n    \"drug discovery and validation in vitro. Your task is to propose \"\n    \"**mechanistic hypotheses** tested via **cell-culture assays** or \"\n    \"**therapeutic strategies**. Generate exactly {num_assays} distinct assay ideas. \"\n    \"You are meticulous, creative, and scientifically rigorous. Focus on strategies \"\n    \"that prioritize simplicity, speed of readout, biological relevance, and direct \"\n    \"measurement of functional endpoints. Strong preference for biologically relevant \"\n    \"strategies.\\n\\n\"\n    \"**Output Format Specification (Strict Adherence Required):**\\n\\n\"\n    \"Your entire output MUST be a single, valid JSON object. This JSON object will be \"\n    \"an **array** at its root, containing exactly `{num_assays}` individual JSON \"\n    \"objects. Each of these inner objects represents one distinct proposal and MUST \"\n    \"conform to the following structure and content guidelines:\\n\\n\"\n    \"```json\\n\"\n    \"[\\n\"\n    \"  {{\\n\"\n    '    \"strategy_name\": \"string\", # Name of the strategy. Keep this name simple, '\n    \"don't include details about how specific mechanisms or specific methodology.\\n\"\n    '    \"reasoning\": \"string\" # Scientific reasoning justifying the chosen strategy or '\n    \"the feasibility/relevance of the assay design, citing relevant literature.\\n\"\n    \"  }}\\n\"\n    \"  // ... more objects here, up to {num_assays} total\\n\"\n    \"]\\n\"\n    \"```\\n\"\n)\n\nASSAY_PROPOSAL_USER_MESSAGE = (\n    \"Generate exactly **{num_assays}** distinct and scientifically rigorous \"\n    \"proposals for cell culture assays that can evaluate drugs to treat \"\n    \"{disease_name}. Here is some relevant background information that can \"\n    \"guide your proposals:\\n\"\n    \"{assay_lit_review_output}\\n\"\n)\n\n\nASSAY_HYPOTHESIS_SYSTEM_PROMPT = (\n    \"You are a professional biomedical researcher, having experience in early-stage \"\n    \"drug discovery and validation in vitro. Your task is to evaluate cell culture \"\n    \"assays that would be used to evaluate drugs to treat {disease_name}. \\n\"\n    \"Given the following assay, do a comprehensive literature review to evaluate if \"\n    \"this assay would be useful for testing therapeutics for {disease_name}. Search \"\n    \"relevant literature across \\n\"\n    \"biomedical, clinical, and biochemical literature about the disease or therapeutic \"\n    \"landscape. Don't look up specific drugs, but any relevant scientific information \"\n    \"that may inform assay development.\"\n)\n\nASSAY_HYPOTHESIS_FORMAT = (\n    \"Provide your response in the following format, like an evaluation for a \"\n    \"scientific proposal:\\n\"\n    \"Assay Overview: Explain the assay idea, including the following key points: \"\n    \"which aspect of the disease pathogenesis does the assay model, what measurements \"\n    \"will be taken from the assay and how they will be taken, which cells or other \"\n    \"biological material are used in the assay. \\n\"\n    \"Biomedical Evidence: Make a compelling argument for how the aspect of the disease \"\n    \"represented in the assay is central to the pathogenesis of the disease. \"\n    \"Make sure to consider both the biomedical and clinical literature. \\n\"\n    \"Previous Use: Explain how this assay has previously been used for drug discovery \"\n    \"(if this has been done). Explain any key scientific discoveries which have been \"\n    \"made using this assay. \\n\"\n    \"Overall Evaluation: Strengths and weaknesses of this assay for testing \"\n    \"therapeutics for {disease_name}.\"\n)\n\n\nASSAY_RANKING_SYSTEM_PROMPT = (\n    \"You are an experienced drug development committee member, with broad scientific \"\n    \"expertise across the biology, chemistry, clinical, medical, and pharmaceutical \"\n    \"sciences.\\n\\n\"\n    \"Your objective is to perform a rigorous scientific comparison of two proposals \"\n    \"for experimental assays that will be used to test therapeutics for {disease_name}. \\n\"\n    \"Your evaluation must be based strictly on the presented scientific evidence, \"\n    \"scientific novelty, methodological rigor, and logical interpretation, not on \"\n    \"the persuasive quality or wording of the proposal documents. \\n\"\n    \"Critically assess the scientific soundness and biological rationale for the \"\n    \"experimental assay, analyzing the supporting literature and historical usage.\\n\"\n    \"Preference for in vitro strategies that prioritize simplicity, speed of readout, \"\n    \"biological relevance, and direct measurement of functional endpoints. Strong \"\n    \"preference for biologically relevant strategies.\\n\\n\"\n    \"The goal of this task is to choose the best in vitro experimental assay that \"\n    \"would be scientifically relevant and insightful for testing therapeutics for \"\n    \"{disease_name}. Prefer assays that are biologically functionally relevant and \"\n    \"simple to perform in standard lab setting.\\n\"\n)\n\nASSAY_RANKING_PROMPT_FORMAT = (\n    \"Evaluate the experimental assays using the structure below. \"\n    \"This evaluation informs a critical decision.\\n\\n\"\n    \"**Respond ONLY in the specified JSON format, do not include any text outside \"\n    \"the JSON object itself.**\\n\\n\"\n    \"{{\\n\"\n    '    \"Analysis\": {\"type\": \"string\", \"description\": \"[Provide a detailed analysis of '\n    'the two experimental assays, based on the evaluation criteria and the evidence provided.]\"},\\n'\n    '    \"Reasoning\": {\"type\": \"string\", \"description\": \"[Choose which experimental assay is better. '\n    \"Provide a detailed explanation for why you think the winner is better than the loser, \"\n    'based on the evaluation criteria and the evidence provided.]\"},\\n'\n    '    \"Winner\": {\"type\": \"string\", \"description\": \"[Return the name and ID number of the '\n    \"candidate that you think is better between the two candidates, as a tuple. \"\n    'It should be formatted as (winner_name, winner_id)]\"},\\n'\n    '    \"Loser\": {\"type\": \"string\", \"description\": \"[Return the name and ID number of the '\n    \"candidate that you think is worse between the two candidates, as a tuple. \"\n    'It should be formatted as (loser_name, loser_id)]\"},\\n'\n    \"}}\\n\"\n)\n\n\nSYNTHESIZE_USER_CONTENT = (\n    \"        Here is a proposed experimental assay identified for treating '{disease_name}':\\n\"\n    \"\\n\"\n    '        Assay Name: \"{assay_name}\"\\n'\n    \"        Synthesize a concise and specific research goal for the *next* stage, \"\n    \"which is focused on **identifying novel therapeutic compounds** to test \"\n    \"using this assay to treat {disease_name}.\\n\"\n    \"\\n\"\n    \"        It's important that you connect the goal of this assay to how it is \"\n    \"important for **identifying** novel therapeutic compounds to treat {disease_name}.\\n\"\n    \"\\n\"\n    \"        Provide ONLY the synthesized goal string as the response.\\n\"\n)\n\nSYNTHESIZE_SYSTEM_MESSAGE_CONTENT = (\n    \"You are a biomedical researcher briefly explaining a strategy of how to \"\n    \"identify novel therapeutic compounds to test using this assay to treat \"\n    \"{disease_name}.\"\n)\n\n\n# THERAPEUTIC CANDIDATE GENERATION PROMPTS ###\n\n\nCANDIDATE_QUERY_GENERATION_SYSTEM_MESSAGE = (\n    \"You are an expert drug development researcher focused on generating high-quality, \"\n    \"specific, testable **drug candidates**.\\n\\n\"\n    \"Your goal is to propose novel, single-agent drug candidates (specific molecules, \"\n    \"potentially repurposed, that are commercially available; mention catalog numbers \"\n    \"if possible).\\n\\n\"\n    \"You are interested in finding candidates with:\\n\"\n    \"1.  **Strong Target Validation:** The target pathway/mechanism has robust evidence \"\n    \"(genetic, functional) linking it *specifically* to the disease pathophysiology.\\n\"\n    \"2.  **Relevant Preclinical/Clinical Evidence:** Supporting data exists from \"\n    \"disease-relevant models or, ideally, preliminary human data (even if from related \"\n    \"conditions or pilot studies).\\n\"\n    \"3.  **Mechanistic Specificity:** A clear, well-defined molecular mechanism is \"\n    \"preferable over broad, non-specific actions.\\n\"\n    \"4.  **Novelty (Balanced with Validation):** Innovative, exciting, and novel approaches \"\n    \"that can advance treatment for {disease_name}, that are also grounded in strong \"\n    \"scientific rationale and evidence.\\n\\n\"\n    \"- Focus on compounds that are commercially available (mention catalog numbers) \"\n    \"and can be developed into drugs\\n\"\n    \"- Favor mechanisms with minimal impact on other cellular functions\\n\"\n    \"- Compounds should be novel for treatment of the disease and ideally address \"\n    \"novel targets for the diseased cell type (i.e. not tested in prior studies)\\n\"\n)\n\n\nEXPERIMENTAL_INSIGHTS_APPENDAGE = (\n    \"Experimental tests have been conducted previously to {candidate_generation_goal}. \"\n    \"Here is a summary of the results:\\n\"\n    \"{experimental_insights_analysis_summary}.\\n\"\n    \"Here are some mechanistic insights that may be relevant: \"\n    \"{experimental_insights_mechanistic_insights}.\\n\"\n    \"Here are some important questions that have been raised about the experimental results: \"\n    \"{experimental_insights_questions_raised}.\\n\"\n)\n\n\nCANDIDATE_QUERY_GENERATION_CONTENT_MESSAGE = (\n    \"Return a list of {double_queries} queries (separated by <>) that would be useful \"\n    \"in doing background research for the goal of {candidate_generation_goal}. \\n\"\n    \"These queries will be given to a highly-trained research team to investigate \"\n    \"the scientific literature in depth, so the queries should be able to capture \"\n    \"broadly relevant information (30+ words) and search relevant literature across \\n\"\n    \"biomedical, clinical, and biochemical literature about the disease or therapeutic \"\n    \"landscape. You don't need to propose specific drugs, but the queries should be \"\n    \"able to capture relevant scientific information that may help with proposing \"\n    \"drug candidates. \\n\"\n    \"You have {double_queries} queries, so spread your queries out to cover as much \"\n    \"ground as possible. Generate {num_queries} queries to cover literature about \"\n    \"the therapeutic landscape, especially those that can help \"\n    \"{candidate_generation_goal} and generate {num_queries} queries to cover \"\n    \"literature about the biological and mechanistic aspects about {disease_name} \"\n    \"itself. In formatting, don't number the queries, just output a string with \"\n    \"{double_queries} queries separated by <>.\\n\\n\"\n    \"Generate queries for the goal of {candidate_generation_goal} that actively \"\n    \"seek and prioritize:\\n\"\n    \"*   **Target Validation:** Studies demonstrating the target pathway's dysregulation \"\n    \"or causative role.\\n\"\n    \"*   **Efficacy in Relevant Models:** Evidence of the drug candidate's efficacy in \"\n    \"cell or animal models that *closely mimic* disease pathology, or in patient-derived \"\n    \"cells. Prefer this over general mechanism-of-action studies.\\n\"\n    \"*   **Mechanism Confirmation:** Studies confirming the candidate engages the target \"\n    \"and modulates the specific pathway *as hypothesized* in a relevant biological \"\n    \"system.\\n\"\n    \"*   **Pharmacokinetics/Safety Data:** Existing data on the candidate's ADME \"\n    \"properties, safety profile (especially human data), and known ability to reach \"\n    \"relevant tissues.\"\n)\n\n\nCANDIDATE_GENERATION_SYSTEM_MESSAGE = (\n    \"You are an expert drug development researcher focused on generating high-quality, \"\n    \"specific, testable **drug candidates**. Your task is to generate novel, testable \"\n    \"therapeutic candidates for {disease_name}, based on the provided research goal \"\n    \"and background literature.\\n\\n\"\n    \"You are interested in discovering and proposing candidates with:\\n\"\n    \"1.  **Strong Target Validation:** The target pathway/mechanism has robust evidence \"\n    \"(genetic, functional) linking it *specifically* to the disease pathophysiology.\\n\"\n    \"2.  **Relevant Preclinical/Clinical Evidence:** Supporting data exists from \"\n    \"disease-relevant models or, ideally, preliminary human data (even if from related \"\n    \"conditions or pilot studies).\\n\"\n    \"3.  **Developmental Feasibility:** The candidate has known properties that facilitate \"\n    \"development.\\n\"\n    \"4.  **Mechanistic Specificity:** A clear, well-defined molecular mechanism is \"\n    \"preferable over broad, non-specific actions.\\n\"\n    \"5.  **Novelty (Balanced with Validation):** Innovative approaches are valued, but \"\n    \"must be grounded in strong scientific rationale and evidence.\\n\\n\"\n    \"For EACH hypothesis object in the 'hypotheses' array, you MUST provide ALL of \"\n    \"the following fields:\\n\\n\"  # Explicit newline for readability\n    \"    1.  `candidate`: The specific drug/therapeutic proposed. Must be a single agent, \"\n    \"not a combination. Do not propose special formulations or delivery methods.\\n\"\n    \"    2.  `hypothesis`: A specific, compelling mechanistic hypothesis detailing how the \"\n    \"candidate (a commercially available compound, mention catalog numbers if applicable) \"\n    \"will treat `{disease_name}` at a molecular/cellular level.\\n\"\n    \"    3.  `reasoning`: Detailed scientific reasoning, explaining the mechanistic \"\n    \"rationale, evidence, translational considerations, target validation, and \"\n    \"novelty of the candidate.\\n\\n\"\n    \"**Output Format Specification (Strict Adherence Required):**\\n\\n\"\n    \"Your entire output MUST be a text block. Generate exactly {num_candidates} \"\n    \"candidate proposals.\\n\"\n    'Each candidate proposal MUST start with \"<CANDIDATE START>\" on a new line and '\n    'end with \"<CANDIDATE END>\" on a new line.\\n'\n    \"Within each block, each piece of information (CANDIDATE, HYPOTHESIS, REASONING.) \"\n    \"MUST start on a new line, beginning with its EXACT header (e.g., `CANDIDATE:`, \"\n    \"`HYPOTHESIS:`) followed by the content.\\n\"\n    'Do NOT include any other text before the first \"<CANDIDATE START>\" or after '\n    'the last \"<CANDIDATE END>\".\\n\\n'\n    \"Example for one candidate (repeat this block structure {num_candidates} times):\\n\"\n    \"<CANDIDATE START>\\n\"\n    \"CANDIDATE: The specific drug/therapeutic proposed. Must be a single agent, not a \"\n    \"combination. Do not propose special formulations or delivery methods.\\n\"\n    \"HYPOTHESIS: A specific, compelling mechanistic hypothesis detailing how the candidate \"\n    \"(a commercially available compound, mention catalog numbers if applicable) will treat \"\n    \"{disease_name} at a molecular/cellular level.\\n\"\n    \"REASONING: Detailed scientific reasoning, explaining the mechanistic rationale, \"\n    \"evidence, translational considerations, target validation, and novelty of the \"\n    \"candidate.\\n\"\n    \"<CANDIDATE END>\\n\"\n)\n\nCANDIDATE_GENERATION_USER_MESSAGE = (\n    \"Generate exactly **{num_candidates}** distinct and scientifically rigorous \"\n    \"proposals for therapeutic candidates to treat {disease_name}. \"\n    \"Here is some relevant background information that can guide your proposals:\\n\"\n    \"{therapeutic_candidate_review_output}\\n\"\n)\n\nEXPERIMENTAL_INSIGHTS_FOR_CANDIDATE_GENERATION = (\n    \"Experimental tests have been conducted previously to {candidate_generation_goal}. \"\n    \"Here is a summary of the results:\\n\"\n    \"{experimental_insights_analysis_summary}.\\n\"\n    \"Here are some mechanistic insights that may be relevant: \"\n    \"{experimental_insights_mechanistic_insights}.\\n\"\n    \"Here are some important questions that have been raised about the experimental results: \"\n    \"{experimental_insights_questions_raised}.\\n\"\n)\n\nCANDIDATE_LIT_REVIEW_DIRECTION_PROMPT = (\n    \"You are a expert drug development team leader focused on validating **drug candidates**. \"\n    \"Your task is to evaluate promising repurposed drugs or therapeutic candidates \"\n    \"for {disease_name} proposed by your research team. \\n\"\n    \"Given the following therapeutic candidate, do a comprehensive literature review to \"\n    \"evaluate if this therapeutic candidate has potential for {disease_name}. Search relevant \"\n    \"literature across \\n\"\n    \"biomedical, clinical, and biochemical literature about the disease or proposed \"\n    \"therapeutic. This must be very detailed and comprehensive, as it will determine \"\n    \"the direction of the team.\"\n)\n\nCANDIDATE_REPORT_FORMAT = (\n    \"Provide your response in the following format, like an evaluation for a \"\n    \"scientific proposal:\\n\"\n    \"Overview of Therapeutic Candidate: Explain the natural or synthetic origins of this \"\n    \"therapeutic candidate, including how it was synthesized or discovered. \"\n    \"Explain which class of therapeutic compounds this belongs to, and how this class \"\n    \"of compounds has previously been used in general. \\n\"\n    \"Therapeutic History: Summarize previous biochemical, clinical or veterinary uses of this \"\n    \"drug or drug class, if any. Examine to see if the therapeutic candidate has ever \"\n    \"been used for treating {disease_name} or any similar disease.\\n\"\n    \"Mechanism of Action: Explain the known mechanism(s) of action of this compound to the \"\n    \"full extent of molecular detail that is known. Explain the biochemistry and molecular \"\n    \"interactions of the therapeutic candidate in any relevant literature.\\n\"\n    \"Expected Effect: Explain the expected effect of this compound in the assay proposed and \"\n    \"the mechanism by which it will act. If the drug is acting on proteins, reference \"\n    \"literature which shows this gene is expressed in the cell type being assayed.  \\n\"\n    \"Overall Evaluation: Give your overall thoughts on this therapeutic candidate. \"\n    \"Include strengths and weaknesses of this therapeutic candidate for treating {disease_name}.\"\n)\n\nCANDIDATE_RANKING_SYSTEM_PROMPT = (\n    \"You are an experienced drug development committee member, with broad scientific expertise.\\n\\n\"\n    \"Your objective is to rigorously compare two preclinical drug candidate proposals. \"\n    \"Your primary goal is to select the hypothesis with the **highest probability of successful \"\n    \"experimental outcome AND eventual translation into a viable therapy** for {disease_name}.\\n\\n\"\n    \"Your evaluation must be based strictly on the presented scientific evidence, \"\n    \"scientific novelty, methodological rigor, and logical interpretation. \"\n    \"Critically assess the scientific soundness and biological rationale.\\n\\n\"\n    \"**Prioritize your evaluation based on these key criteria, reflecting human expert preferences:**\\n\\n\"\n    \"1.  **Strength and Relevance of Supporting Evidence (Highest Priority):**\\n\"\n    \"    *   **Existing Data:** Is there robust existing data (preclinical, clinical, \"\n    \"especially for {disease_name} or highly relevant biological contexts) supporting \"\n    \"the hypothesis? Give significant weight to positive data from later-stage research \"\n    \"(e.g., in vivo, clinical trials for the drug or drug class, especially if successful \"\n    \"for related conditions).\\n\"\n    \"    *   **Relevance to the Problem:** Is the evidence *directly relevant* to the proposed \"\n    \"mechanism in the context of {disease_name} and the specific biological problem being \"\n    \"addressed? General efficacy in unrelated conditions is less compelling.\\n\"\n    \"    *   **Negative Evidence:** Are there known failures, lack of efficacy, or \"\n    \"contradictory data for this drug/class in relevant contexts? This is a strong deterrent.\\n\"\n    \"    *   **Quality of References:** Are the cited references (if any are explicitly mentioned \"\n    \"or implied by the reasoning) strong and relevant to the drug and its proposed action \"\n    \"in this context?\\n\\n\"\n    \"2.  **Mechanism of Action (MoA) - Clarity, Plausibility, and Specificity for {disease_name}:**\\n\"\n    \"    *   **Clarity & Detail:** Is the MoA clearly articulated, scientifically sound, \"\n    \"detailed, and plausible? Vague mechanisms are less favored.\\n\"\n    \"    *   **Directness:** How *direct* is the MoA to addressing the core pathology of \"\n    \"{disease_name}? Prefer hypotheses targeting core, upstream issues relevant to the \"\n    \"disease's cellular or molecular basis over indirect or downstream effects, unless the \"\n    \"indirect effect is exceptionally well-supported and highly plausible.\\n\"\n    \"    *   **Specificity & Target Biology:** Is the therapeutic target well-defined? \"\n    \"Is its biology central to the pathogenesis of {disease_name}? Specific pathway/target \"\n    \"engagement is preferred over overly broad actions that might increase risk.\\n\\n\"\n    \"3.  **Safety, Tolerability, and Risk Profile (High Priority):**\\n\"\n    \"    *   **Known Safety Profile:** What is the known safety profile of the drug or \"\n    \"drug class? Candidates with established clinical safety (e.g., repurposed drugs \"\n    \"with a *strong rationale* for {disease_name}) are highly favored.\\n\"\n    \"    *   **Off-Target Effects/Toxicity:** Are there significant concerns about \"\n    \"off-target effects, general toxicity, or specific organ/system toxicity relevant \"\n    \"to {disease_name} or its treatment? This is a major red flag. Assess potential \"\n    \"for on-target and off-target liabilities.\\n\"\n    \"    *   **Pleiotropic Effects:** Consider if broad (pleiotropic) effects are \"\n    \"beneficial or detrimental in this specific disease context.\\n\\n\"\n    \"4.  **Feasibility of Experimental Plan and Drug Delivery:**\\n\"\n    \"    *   **Methodological Rigor:** Does the proposal (even if brief) outline a clear, \"\n    \"methodologically sound, and feasible experimental plan? Are specific, measurable \"\n    \"outcomes related to the therapeutic goal for {disease_name} defined?\\n\"\n    \"    *   **Model System Relevance:** Is the proposed model system (e.g., relevant cell \"\n    \"lines, animal models of {disease_name}) appropriate and predictive?\\n\"\n    \"    *   **Drug Delivery to Target:** Crucially, assess the feasibility of drug delivery \"\n    \"to the target tissue or system. Consider physicochemical properties and ADME/PK \"\n    \"profiles (bioavailability, metabolic stability) in terms of achieving therapeutic \"\n    \"concentrations with an acceptable therapeutic window. Is the proposed route of \"\n    \"administration plausible and supported for this drug type and disease?\\n\\n\"\n    \"5.  **Scientific Novelty (Balanced with Evidence and Safety):**\\n\"\n    \"    *   Does the hypothesis offer a novel scientific advancement for {disease_name}? \"\n    \"Novelty is valued, but *only if supported by plausible science and a reasonable safety \"\n    \"outlook*. Do not prefer novelty if it comes at the cost of strong evidence for a more \"\n    \"established, safer approach. An innovative approach to an underexplored but plausible \"\n    \"pathway can be positive.\\n\\n\"\n    \"**Synthesize these factors:**\\n\"\n    \"While detailed pharmacological properties (in vitro potency, selectivity, SAR, chemical \"\n    \"liabilities) and ADME/PK parameters (CYP inhibition/induction, DDI risk) are important, \"\n    \"**focus on their *implications* for efficacy, safety, and translatability, as a human \"\n    \"expert panel would.** Avoid getting lost in excessive technical detail unless it directly \"\n    \"and significantly impacts one of the prioritized criteria (e.g., a PK issue preventing \"\n    \"target engagement would be critical).\\n\\n\"\n    \"The goal of this task is to choose the best therapeutic candidate that has the most \"\n    \"potential for treating {disease_name}.\"\n)\n\nCANDIDATE_RANKING_PROMPT_FORMAT = (\n    \"Evaluate the preclinical drug candidate data package using the structure below. \"\n    \"This evaluation informs a critical decision.\\n\\n\"\n    \"**Respond ONLY in the specified JSON format, do not include any text outside \"\n    \"the JSON object itself.**\\n\\n\"\n    \"{{\\n\"\n    '    \"Analysis\": {\"type\": \"string\", \"description\": \"[Provide a detailed analysis of '\n    'the two drug candidates, based on the evaluation criteria and the evidence provided.]\"},\\n'\n    '    \"Reasoning\": {\"type\": \"string\", \"description\": \"[Choose which drug candidate is better. '\n    \"Provide a detailed explanation for why you think the winner is better than the loser, \"\n    'based on the evaluation criteria and the evidence provided.]\"},\\n'\n    '    \"Winner\": {\"type\": \"string\", \"description\": \"[Return the name and ID number of the '\n    \"candidate that you think is better between the two candidates, as a tuple. \"\n    'It should be formatted as (winner_name, winner_id)]\"},\\n'\n    '    \"Loser\": {\"type\": \"string\", \"description\": \"[Return the name and ID number of the '\n    \"candidate that you think is worse between the two candidates, as a tuple. \"\n    'It should be formatted as (loser_name, loser_id)]\"},\\n'\n    \"}}\"\n)\n\n\n# UTILS PROMPTS ###\n\nFINAL_REPORT_FORMATTING_USER_MESSAGE = (\n    \"Reformat this text for APA 7th Style references, including both in-text \"\n    \"citations and the reference list. DO NOT change any of the text body or the \"\n    \"sources list, only the references formatting.\\n\\n\"\n    \"**APA 7th Citation Rules Summary:**\\n\\n\"\n    \"**I. In-Line Citations (Author-Date):**\\n\"\n    \"*   **Parenthetical:** `(Lastname, Year)` or `(Lastname1 and Lastname2, Year)` \"\n    \"for 2 authors or `(Lastname et al., Year)` for 3+ authors.\\n\"\n    \"*   **Narrative:** `Lastname (Year)` or `Lastname et al. (Year)`.\\n\"\n    '*   **No Author:** `(\"Short Article Title\", Year)` or `(*Short Book Title*, Year)`.\\n'\n    \"*   **No Date:** `(Lastname, n.d.)`.\\n\"\n    \"*   **Organization:** `(Organization Name, Year)`.\\n\\n\"\n    '**II. Reference List (titled \"References\", alphabetical, hanging indent):**\\n'\n    \"*   **Core Elements:** Author(s). (Date). *Title*. Source (publication info/publisher/URL/DOI).\\n\"\n    \"*   **Journal Article:** `Author, A. A. (Year). Article title: Subtitle. \"\n    \"*Journal Title*, *Volume*(Issue), page-range. DOI/URL`\\n\"\n    \"*   **Book:** `Author, A. A. (Year). *Book title: Subtitle*. Publisher.`\\n\"\n    \"*   **Chapter:** `Author, A. A. (Year). Chapter title. In E. Editor (Ed.), \"\n    \"*Book title* (pp. X-Y). Publisher.`\\n\\n\"\n    \"Key clarifications:\\n\"\n    \"*   If the same paper is cited multiple times in the reference list, just with \"\n    \"different page numbers, you should consolidate these references into one reference. \\n\"\n    \"*   If the same paper is cited multiple times in-line, you should consolidate \"\n    \"these references into one reference. For example, an in-line citation such as \"\n    \"(smith2000xyz pages 14-16, smith2000xyz pages 1-3) should just be consolidated \"\n    \"into the proper APA in-line citation for the single smith2000xyz reference.\\n\"\n    \"*   The reference list will include extraneous details, such as a parenthetical \"\n    \"note for how it is cited in the text body. You should remove these.\\n\"\n    \"*   The reference list will include extraneous details, such as how many citations \"\n    \"it has and the type of source (e.g. peer-reviewed journal). You should remove these.\\n\"\n    \"*   Do not change any of the text body or the sources list, only the references formatting.\\n\"\n    \"*   If there are any clinical trials that are not cited properly, include a summary \"\n    \"of the title in the reference list and indicate it is a web search from \"\n    \"ClinicalTrials.gov. For such in-line citations, just say (ClinicalTrials.gov \"\n    \"with the date, if available)\\n\"\n    \"*   MOST IMPORTANTLY, DO NOT MAKE UP ANY REFERENCES THAT ARE NOT IN THE SOURCES LIST. \"\n    \"IF YOU ARE NOT SURE ABOUT A REFERENCE, JUST SAY (Unknown Reference). DO NOT MAKE UP \"\n    \"ANY REFERENCES. JUST REFORMAT THE ONES THAT ARE PROVIDED.\\n\\n\"\n    \"Your output should be exactly the same text as given below, but just formatted \"\n    \"with APA 7th Style references. Do not include anything else in your response \"\n    \"except the reformatted text (including the APA formatted references). \"\n    \"Text begins here:\\n\\n\"\n    \"{answer_text}\\n\\n\\n\"\n    \"References:\\n\"\n    \"{sources_text}\\n\"\n)\n\nFINAL_REPORT_FORMATTING_SYSTEM_MESSAGE = (\n    \"You are an editor of a scientific journal. You're being asked to reformat\"\n    \" references for a scientific proposal.\"\n)\n\n========================================\n\nSOURCE FILE: sources/futurehouse-robin-amd/configuration.py\n\nimport copy\nimport os\nimport re\nfrom datetime import datetime\nfrom typing import Any\n\nfrom dotenv import load_dotenv\nfrom edison_client import EdisonClient, JobNames\nfrom lmi import LiteLLMModel\nfrom pydantic import BaseModel, Field, PrivateAttr, model_validator\n\nfrom .prompts import (\n    ANALYSIS_QUERIES,\n    ASSAY_HYPOTHESIS_FORMAT,\n    ASSAY_HYPOTHESIS_SYSTEM_PROMPT,\n    ASSAY_LITERATURE_SYSTEM_MESSAGE,\n    ASSAY_LITERATURE_USER_MESSAGE,\n    ASSAY_PROPOSAL_SYSTEM_MESSAGE,\n    ASSAY_PROPOSAL_USER_MESSAGE,\n    ASSAY_RANKING_PROMPT_FORMAT,\n    ASSAY_RANKING_SYSTEM_PROMPT,\n    CANDIDATE_GENERATION_SYSTEM_MESSAGE,\n    CANDIDATE_GENERATION_USER_MESSAGE,\n    CANDIDATE_LIT_REVIEW_DIRECTION_PROMPT,\n    CANDIDATE_QUERY_GENERATION_CONTENT_MESSAGE,\n    CANDIDATE_QUERY_GENERATION_SYSTEM_MESSAGE,\n    CANDIDATE_RANKING_PROMPT_FORMAT,\n    CANDIDATE_RANKING_SYSTEM_PROMPT,\n    CANDIDATE_REPORT_FORMAT,\n    CHAIN_OF_THOUGHT_AGNOSTIC,\n    CONSENSUS_QUERIES,\n    COT,\n    DATA_INTERPRETATION_CONTENT_MESSAGE,\n    DATA_INTERPRETATION_SYSTEM_MESSAGE,\n    EXPERIMENTAL_INSIGHTS_APPENDAGE,\n    EXPERIMENTAL_INSIGHTS_FOR_CANDIDATE_GENERATION,\n    FOLLOWUP_CONTENT_MESSAGE,\n    FOLLOWUP_SYSTEM_MESSAGE,\n    GENERAL_NOTEBOOK_GUIDELINES,\n    GUIDELINE,\n    R_SPECIFIC_GUIDELINES,\n    SYNTHESIZE_SYSTEM_MESSAGE_CONTENT,\n    SYNTHESIZE_USER_CONTENT,\n)\n\nload_dotenv()\n\n_DEFAULT_LLM_CONFIG_DATA = {\n    \"model_list\": [\n        {\n            \"model_name\": \"o4-mini\",\n            \"litellm_params\": {\n                \"model\": \"o4-mini\",\n                \"api_key\": \"\",\n                \"timeout\": 300,\n            },\n        }\n    ]\n}\n\n\ndef get_default_llm_config() -> dict[str, Any]:\n    # Key is read on each instantiation so env vars set after import are picked up.\n    data: dict[str, Any] = copy.deepcopy(_DEFAULT_LLM_CONFIG_DATA)\n    data[\"model_list\"][0][\"litellm_params\"][\"api_key\"] = os.getenv(\n        \"OPENAI_API_KEY\", \"insert_openai_key_here\"\n    )\n    return data\n\n\ndef _get_prompt_args(template_string: str) -> set[str]:\n    \"\"\"\n    Extracts root variable names from f-string like placeholders (e.g., {variable})\n    using a direct regex approach.\n    \"\"\"  # noqa: D205\n    placeholders: set[str] = set()\n    placeholders.update(\n        match.group(1)\n        for match in re.finditer(\n            r\"(?<!{){([a-zA-Z_][a-zA-Z0-9_]*)[^}]*}(?!})\", template_string\n        )\n    )\n    return placeholders\n\n\nclass Prompts(BaseModel):\n    analysis_queries: dict[str, str] = Field(default_factory=lambda: ANALYSIS_QUERIES)\n    consensus_queries: dict[str, str] = Field(default_factory=lambda: CONSENSUS_QUERIES)\n    assay_literature_system_message: str = Field(\n        default=ASSAY_LITERATURE_SYSTEM_MESSAGE\n    )\n    assay_literature_user_message: str = Field(default=ASSAY_LITERATURE_USER_MESSAGE)\n    assay_proposal_system_message: str = Field(default=ASSAY_PROPOSAL_SYSTEM_MESSAGE)\n    assay_proposal_user_message: str = Field(default=ASSAY_PROPOSAL_USER_MESSAGE)\n    assay_hypothesis_system_prompt: str = Field(default=ASSAY_HYPOTHESIS_SYSTEM_PROMPT)\n    assay_hypothesis_format: str = Field(default=ASSAY_HYPOTHESIS_FORMAT)\n    assay_ranking_system_prompt: str = Field(default=ASSAY_RANKING_SYSTEM_PROMPT)\n    assay_ranking_prompt_format: str = Field(default=ASSAY_RANKING_PROMPT_FORMAT)\n    synthesize_user_content: str = Field(default=SYNTHESIZE_USER_CONTENT)\n    synthesize_system_message_content: str = Field(\n        default=SYNTHESIZE_SYSTEM_MESSAGE_CONTENT\n    )\n    candidate_query_generation_system_message: str = Field(\n        default=CANDIDATE_QUERY_GENERATION_SYSTEM_MESSAGE\n    )\n    experimental_insights_appendage: str = Field(\n        default=EXPERIMENTAL_INSIGHTS_APPENDAGE\n    )\n    candidate_query_generation_content_message: str = Field(\n        default=CANDIDATE_QUERY_GENERATION_CONTENT_MESSAGE\n    )\n    candidate_generation_system_message: str = Field(\n        default=CANDIDATE_GENERATION_SYSTEM_MESSAGE\n    )\n    candidate_generation_user_message: str = Field(\n        default=CANDIDATE_GENERATION_USER_MESSAGE\n    )\n    experimental_insights_for_candidate_generation: str = Field(\n        default=EXPERIMENTAL_INSIGHTS_FOR_CANDIDATE_GENERATION\n    )\n    candidate_lit_review_direction_prompt: str = Field(\n        default=CANDIDATE_LIT_REVIEW_DIRECTION_PROMPT\n    )\n    candidate_report_format: str = Field(default=CANDIDATE_REPORT_FORMAT)\n    candidate_ranking_system_prompt: str = Field(\n        default=CANDIDATE_RANKING_SYSTEM_PROMPT\n    )\n    candidate_ranking_prompt_format: str = Field(\n        default=CANDIDATE_RANKING_PROMPT_FORMAT\n    )\n    cot: str = Field(default=COT)\n    guideline: str = Field(default=GUIDELINE)\n    data_interpretation_system_message: str = Field(\n        default=DATA_INTERPRETATION_SYSTEM_MESSAGE\n    )\n    data_interpretation_content_message: str = Field(\n        default=DATA_INTERPRETATION_CONTENT_MESSAGE\n    )\n    followup_system_message: str = Field(default=FOLLOWUP_SYSTEM_MESSAGE)\n    followup_content_message: str = Field(default=FOLLOWUP_CONTENT_MESSAGE)\n    general_notebook_guidelines: str = Field(default=GENERAL_NOTEBOOK_GUIDELINES)\n    r_specific_guidelines: str = Field(default=R_SPECIFIC_GUIDELINES)\n    cot_agnostic: str = Field(default=CHAIN_OF_THOUGHT_AGNOSTIC)\n\n    @model_validator(mode=\"after\")\n    def validate_all_prompts(self) -> \"Prompts\":\n        current_prompt_expectations: dict[str, set[str]] = {\n            \"data_interpretation_content_message\": {\"goal\", \"data_html\"},\n            \"followup_content_message\": {\n                \"goal\",\n                \"analysis_summary\",\n                \"mechanistic_insights\",\n                \"questions_raised\",\n            },\n            \"assay_literature_system_message\": {\"num_assays\"},\n            \"assay_literature_user_message\": {\"num_queries\", \"disease_name\"},\n            \"assay_proposal_system_message\": {\"num_assays\"},\n            \"assay_proposal_user_message\": {\n                \"num_assays\",\n                \"disease_name\",\n                \"assay_lit_review_output\",\n            },\n            \"assay_hypothesis_system_prompt\": {\"disease_name\"},\n            \"assay_hypothesis_format\": {\"disease_name\"},\n            \"assay_ranking_system_prompt\": {\"disease_name\"},\n            \"synthesize_user_content\": {\"assay_name\", \"disease_name\"},\n            \"synthesize_system_message_content\": {\"disease_name\"},\n            \"candidate_query_generation_system_message\": {\"disease_name\"},\n            \"experimental_insights_appendage\": {\n                \"candidate_generation_goal\",\n                \"experimental_insights_analysis_summary\",\n                \"experimental_insights_mechanistic_insights\",\n                \"experimental_insights_questions_raised\",\n            },\n            \"candidate_query_generation_content_message\": {\n                \"num_queries\",\n                \"double_queries\",\n                \"candidate_generation_goal\",\n                \"disease_name\",\n            },\n            \"candidate_generation_system_message\": {\"disease_name\", \"num_candidates\"},\n            \"candidate_generation_user_message\": {\n                \"num_candidates\",\n                \"disease_name\",\n                \"therapeutic_candidate_review_output\",\n            },\n            \"experimental_insights_for_candidate_generation\": {\n                \"candidate_generation_goal\",\n                \"experimental_insights_analysis_summary\",\n                \"experimental_insights_mechanistic_insights\",\n                \"experimental_insights_questions_raised\",\n            },\n            \"candidate_lit_review_direction_prompt\": {\"disease_name\"},\n            \"candidate_report_format\": {\"disease_name\"},\n            \"candidate_ranking_system_prompt\": {\"disease_name\"},\n            \"cot\": set(),\n            \"guideline\": set(),\n            \"assay_ranking_prompt_format\": set(),\n            \"candidate_ranking_prompt_format\": set(),\n            \"data_interpretation_system_message\": set(),\n            \"followup_system_message\": set(),\n            \"analysis_queries\": set(),\n            \"consensus_queries\": set(),\n        }\n\n        for field_name, expected_args in current_prompt_expectations.items():\n            if not hasattr(self, field_name):\n                raise ValueError(\n                    f\"Prompt field '{field_name}' defined in PROMPT_EXPECTATIONS but\"\n                    \" not found in Prompts model.\"\n                )\n\n            prompt_template_value = getattr(self, field_name)\n\n            if isinstance(prompt_template_value, dict):\n                continue\n\n            if not isinstance(prompt_template_value, str):\n                raise TypeError(f\"Prompt field '{field_name}' is not a string type.\")\n\n            actual_placeholders = _get_prompt_args(prompt_template_value)\n\n            missing_in_template = expected_args - actual_placeholders\n            if missing_in_template:\n                raise ValueError(\n                    f\"Prompt '{field_name}' is missing expected placeholders:\"\n                    f\" {missing_in_template}. Expected: {sorted(expected_args)}, Found:\"\n                    f\" {sorted(actual_placeholders)}\"\n                )\n\n            unexpected_in_template = actual_placeholders - expected_args\n            if unexpected_in_template:\n                raise ValueError(\n                    f\"Prompt '{field_name}' contains unexpected placeholders:\"\n                    f\" {unexpected_in_template}. Expected: {sorted(expected_args)},\"\n                    f\" Found: {sorted(actual_placeholders)}\"\n                )\n\n        return self\n\n\nclass AgentConfig(BaseModel):\n    assay_lit_search_agent: JobNames = Field(\n        default=JobNames.CROW,\n        description=\"Agent to use for literature search during assay idea generation.\",\n    )\n    assay_hypothesis_report_agent: JobNames = Field(\n        default=JobNames.CROW,\n        description=\"Agent to use for generating detailed reports on assay hypotheses.\",\n    )\n    candidate_lit_search_agent: JobNames = Field(\n        default=JobNames.CROW,\n        description=(\n            \"Agent to use for literature search during therapeutic candidate idea\"\n            \" generation.\"\n        ),\n    )\n    candidate_hypothesis_report_agent: JobNames = Field(\n        default=JobNames.FALCON,\n        description=(\n            \"Agent to use for generating detailed reports on therapeutic candidates.\"\n        ),\n    )\n\n\nclass RobinConfiguration(BaseModel):\n\n    class Config:\n        arbitrary_types_allowed = True\n\n    prompts: Prompts = Field(default_factory=Prompts)\n    num_queries: int = Field(\n        default=3,\n        description=(\n            \"Number of queries to generate for each step, more means more data but also\"\n            \" more cost.\"\n        ),\n    )\n    num_assays: int = Field(default=3, description=\"Number of assay to generate.\")\n    num_candidates: int = Field(\n        default=5, description=\"Number of candidates to generate for each query.\"\n    )\n    disease_name: str = Field(\n        default=\"input_disease\", description=\"Name of the disease to focus on.\"\n    )\n    run_folder_name: str | None = Field(\n        default=None,\n        description=(\n            \"Name of the folder where results will be stored. \"\n            \"If not provided or None, it will be auto-generated \"\n            \"using the disease_name and the timestamp.\"\n        ),\n    )\n    edison_api_key: str = \"insert_edison_api_key_here\"\n    llm_name: str = \"o4-mini\"\n    llm_config: dict | None = Field(default_factory=get_default_llm_config)\n    agent_settings: AgentConfig = Field(default_factory=AgentConfig)\n    _edison_client: EdisonClient | None = PrivateAttr(default=None)\n    _llm_client: LiteLLMModel | None = PrivateAttr(default=None)\n\n    @model_validator(mode=\"after\")\n    def set_run_folder_name_default(self) -> \"RobinConfiguration\":\n        if self.run_folder_name is None:\n            disease_part = self.disease_name[:70].replace(\" \", \"_\")\n            timestamp_part = datetime.now().strftime(\"%Y-%m-%d_%H-%M-%S\")\n            self.run_folder_name = f\"{disease_part}_{timestamp_part}\"\n        return self\n\n    @property\n    def edison_client(self) -> EdisonClient:\n        if self._edison_client is None:\n            api_key = os.getenv(\"EDISON_API_KEY\") or self.edison_api_key\n            if not api_key:\n                raise ValueError(\n                    \"Edison API key is not set. Please provide it in the\"\n                    \" configuration or set EDISON_API_KEY env variable.\"\n                )\n            self._edison_client = EdisonClient(api_key=api_key)\n        return self._edison_client\n\n    @property\n    def llm_client(self) -> LiteLLMModel:\n        if self._llm_client is None:\n            self._llm_client = LiteLLMModel(name=self.llm_name, config=self.llm_config)\n        return self._llm_client\n\n    def get_da_client(self):\n        from .multitrajectory_runner import MultiTrajectoryRunner\n\n        return MultiTrajectoryRunner(configuration=self)"
  },
  {
    "schemaVersion": "0.2",
    "id": "gpt4-breast-cancer-drug-pairs",
    "recordId": "gpt4-breast-cancer-drug-pairs",
    "title": "GPT-4 breast-cancer drug-pair prompt sequence",
    "author": "Abbi Abdel-Rehim and collaborators",
    "origin": "Royal Society electronic supplementary material",
    "sourceUrl": "https://rs.figshare.com/articles/journal_contribution/29143434",
    "retrievedAt": "2026-07-17",
    "originalFormat": "DOCX",
    "sourceSha256": "66ff5f373992274ff5ca1f8a73171d1f23de74a6d5004c1e2d8544f34db4c4c6",
    "artifactType": "conversation-prompts",
    "completeness": "exact",
    "permissionBasis": "The Royal Society Figshare supplement is licensed CC BY 4.0. Attribution and the original source link are preserved.",
    "publicationStatus": "approved",
    "transcriptionMode": "Five prompt tables were transcribed from supplementary figures S1 through S5 and checked against rendered DOCX pages 3, 4, 11, 15, and 16.",
    "rawSources": [
      "sources/gpt4-breast-cancer-drug-pairs/prompts.md"
    ],
    "displayFiles": [
      "sources/gpt4-breast-cancer-drug-pairs/prompts.md"
    ],
    "structure": [
      "initial hypothesis generation",
      "positive controls",
      "negative controls",
      "experimental feedback",
      "revised hypotheses",
      "future experiments"
    ],
    "body": "The local source preserves all five prompt rounds from the laboratory campaign, including the experimental-result feedback supplied between rounds.\n\n========================================\n\nSOURCE FILE: sources/gpt4-breast-cancer-drug-pairs/prompts.md\n\n# GPT-4 breast-cancer drug-pair prompt sequence\n\nSource: https://rs.figshare.com/articles/journal_contribution/29143434\n\nThe five prompts below are transcribed from supplementary figures S1 through S5. The supplement is licensed CC BY 4.0. Capitalization, wording, and numerical values are preserved.\n\n## Initial drug-combination hypotheses\n\nWe are conducting pre-clinical research on breast cancer in a laboratory, specifically looking for novel drug combinations that can selectively target MCF7 breast cancer cells in a synergistic manner, while sparing MCF10A normal cells. We would like to use ChatGPT's knowledgebase to generate at least five hypotheses for small molecule drug combinations that are low to mid-range in cost, accessible, and preferably FDA-approved.\n\nFor each suggested drug combination, it should be explained in detail why it should be highly synergistic against MCF7 cells, based on some interesting interplay between the drug's mechanism of action, one drug aiding the other in some way. We don't want a reason for synergy to simply be targeting different unrelated pathways.\n\nAdditionally, it is paramount that all suggested combinations have not been tested in cancer cell lines, and that at least one of the drugs in any combination is a non-cancer drug.\n\nFor each drug combination, the diseases for which the FDA-approved drugs are used to treat (at least one of which should not be cancer) should be mentioned, followed by a detailed description of why they would aid one another and be synergistic in MCF7 cells. Lastly, it should be explained why MCF10A cells would be less affected.\n\nPlease provide your answers in a point format. Each point should start with explaining what it is about. 1) Drug, disease, mechanism. 2) Synergy hypothesis. 3) Why MCF7 is particularly vulnerable. 4) Why MCF10A is likely less affected.\n\n## Positive controls\n\nWe are looking for known drug combinations that would have an effect on MCF7 cells. We'd like to use ChatGPT's knowledgebase to generate at least ten hypotheses for small molecule drug combinations that are low to mid-range in cost, accessible, and FDA-approved. It is important that the specific drug combinations have been thoroughly tested and shown convincing inhibition of MCF7 cell growth. We prefer combinations that have been approved for treating breast cancer.\n\nTo develop these hypotheses, we'd like ChatGPT to consider the following factors: the mechanism of action of the drugs and any relevant factors relating to genetics, epigenetics, metabolomics, proteomics, and lipidomics. We're particularly interested in hypotheses that take into account the specific characteristics of MCF7 cells.\n\nFor each suggested drug combination, we'd like ChatGPT to provide a very detailed explanation of why MCF7 cells would be affected. The objective of this prompt is to generate \"positive controls\", i.e. drug combinations that will harm MCF7 cells.\n\nIn your answer I want you to start by restating the criteria expressed in this prompt.\n\n## Negative controls\n\nWe are looking for novel drug combinations that would not have an effect on MCF7 cells. We'd like to use ChatGPT's knowledgebase to generate at least five hypotheses for small molecule drug combinations that are low to mid-range in cost, accessible, and preferably FDA-approved. It is important that the drug combinations have not been tested in the context of breast cancer.\n\nTo develop these hypotheses, we'd like ChatGPT to consider the following factors: the mechanism of action of the drugs and any relevant factors relating to genetics, epigenetics, metabolomics, proteomics, and lipidomics. We're particularly interested in hypotheses that take into account the specific characteristics of MCF7 cells.\n\nFor each suggested drug combination, we'd like ChatGPT to provide a very detailed explanation of why MCF7 cells would not be affected. The objective of this prompt is to generate \"controls\", i.e. drug combinations that won't harm MCF7 cells.\n\nIn your answer I want you to start by restating the criteria expressed in this prompt.\n\n## Primary-screen results and new combinations\n\nWe have conducted experiments testing several hypotheses with GPT-4 regarding synergistic drug combinations aimed at targeting MCF7 cells more effectively than MCF10A cells.\n\nNow, we will present the primary findings from these experiments and request your assistance in proposing three new combinations (pairs) to test using the same drug library. Our main objective is to selectively target MCF7 cells while sparing MCF10A cells.\n\nWhile several drugs exhibited effects on both cell lines at higher concentrations, for our purposes the most important aspect is that MCF7 is more sensitive to the combinations than MCF10A.\n\nFor MCF7 cells, Disulfiram demonstrated the highest toxicity. This was followed by Niclosamide. Doxorubicin and Mebendazole also demonstrated toxicity. Celecoxib, Quinacrine, Dipyridamole, Fulvestrant, itraconazole, Hydroxychloroquine, Chloroquine and Simvastatin showed toxicity only when used in higher concentrations.\n\nFor MCF10A cells, Niclosamide and Doxorubicin demonstrated the highest toxicity. Atorvastatin also appeared toxic. Itraconazole, Mebendazole, Chloroquine, Simvastatin, Quinacrine, Celecoxib and Mementine were toxic only when used in higher concentrations.\n\nDisulfiram, Mebendazole, Fulvestrant and Quinacrine preferentially targeted MCF7. Doxorubicin, Atorvastatin, Niclosamide, Celecoxib and Simvastatin showed higher toxicity in the MCF10A cell line.\n\nBased on this information and your knowledge of drug mechanisms and cell line profiles, we would like you to propose three new combinations that are expected to target MCF7 cells while sparing MCF10A cells. You can only select drugs mentioned in the analysis above, and one drug may be included in multiple combinations. Please rank these combinations according to their expected potency\n\n## Future drug-combination hypotheses\n\nWe've conducted experiments exploring synergistic drug combinations targeting MCF7 cells more effectively than MCF10A cells.\n\nWe use a drug library consisting of the following drugs for this project: Allopurinol, Atenolol, Celecoxib, Disulfiram, Fulvestrant, Itraconazole, Sildenafil, Cimetidine, Mebendazole, Metronidazole, Atorvastatin, Chloroquine, Doxorubicin, Memantine, Niclosamide, Acarbose, Cetirizine, Cyclophosphamide, Diphenhydramine, Dipyridamole, Furosemide, Hydroxychloroquine, Omeprazole, Palbociclib, Quinacrine, Simvastatin.\n\nIn our latest iteration, we screened four of your most recent recommended combinations. The combinations are declared along with their resultant HSA synergy scores after incubation with MCF7 cells:\n\n1) Mebendazole + Quinacrine : HSA score of 0.56\n\n2) Disulfiram + Mebendazole: HSA score of -2.49\n\n3) Disulfiram + Fulvestrant: HSA score of 1.81\n\n4) Disulfiram + Quinacrine: HSA score of 1.53\n\nIn addition, we verified the toxicity of 12 single drug treatments, as well as three combinations from the first experiment.\n\nSingle drugs showing toxicity towards MCF7: Celecoxib, Chloroquine, Dipyridamole, Disulfiram, Doxorubicin, Fulvestrant, Hydroxychloroquine, Itraconazole, Mebendazole, Niclosamide, Quinacrine, Simvastatin.\n\nVerified combinations featuring in our first experiment:\n\n1) Disulfiram + Hydroxychloroquine: HSA score of 1.08\n\n2) Dipyridamole + Mebendazole: HSA score of 1.10\n\n3) Disulfiram + Simvastatin: HSA score of 4.75\n\nOut of all the tested combinations declared above, three combinations demonstrated specificity towards MCF7 (difference of > 1 HSA synergy score compared to MCF10A):\n\n1) Dipyridamole + Mebendazole: 3.60\n\n2) Disulfiram + Simvastatin: 2.49\n\n2) Mebendazole + Quinacrine: 1.09\n\nFor the next experiment we would like you to consider any compounds from our original drug library (as well as those of the positive controls), to device new combinations that would show synergy and specificity towards MCF7 as opposed to MCF10A. Please provide a table listing the drug pair, a detailed hypothesis explaining why the pair would be synergistic (based on both our results and your knowledge), and why MCF10A would be impacted to a lesser extent."
  },
  {
    "schemaVersion": "0.2",
    "id": "nesterov-point-convergence",
    "recordId": "nesterov-point-convergence",
    "title": "Nesterov point-convergence prompt availability",
    "author": "Uijeong Jang and Ernest K. Ryu",
    "origin": "Research preprint and first-person workflow account",
    "sourceUrl": "https://arxiv.org/abs/2510.23513",
    "retrievedAt": "2026-07-17",
    "originalFormat": "PDF and web article",
    "artifactType": "availability-record",
    "completeness": "unavailable",
    "contentAvailable": false,
    "permissionBasis": "No prompt text is mirrored because a complete transcript or exact prompt was not located in the primary public sources.",
    "publicationStatus": "approved",
    "transcriptionMode": "Availability assessment only. Public sources describe the collaboration and selected model ideas but do not preserve the full prompt sequence.",
    "structure": [
      "missing artifact"
    ],
    "body": "The public account describes a multi-session collaboration and quotes or summarizes some model ideas, but a complete prompt sequence was not published. This record is retained in the index so the absence remains explicit."
  },
  {
    "schemaVersion": "0.2",
    "id": "sciexplorer-physics-models",
    "recordId": "sciexplorer-physics-models",
    "title": "SciExplorer physics-model discovery prompt and run",
    "author": "Maximilian Nägele and Florian Marquardt",
    "origin": "Public SciExplorer and SciExplorerResults repositories",
    "sourceUrl": "https://github.com/MaxNaeg/SciExplorerResults",
    "sourceCommit": "508a9bd4d9f815b52a70f5c5ce1a46de4bdacbe9",
    "retrievedAt": "2026-07-17",
    "originalFormat": "JSON run artifact",
    "artifactType": "run-artifact",
    "completeness": "representative",
    "permissionBasis": "Redistribution under the repositories' MIT License, preserved with the local source bundle.",
    "publicationStatus": "approved",
    "transcriptionMode": "Verbatim run artifact from the cited repository commit. The site display extracts the exact prompt inputs; the machine-readable corpus retains the complete JSON run.",
    "rawSources": [
      "sources/sciexplorer-physics-models/all_2026-03-04_12-41-21.json"
    ],
    "displayFiles": [
      "sources/sciexplorer-physics-models/prompt-inputs.md"
    ],
    "structure": [
      "computational-physicist system prompt",
      "hidden-coordinate research request",
      "experiment tools",
      "iterative hypotheses",
      "final model submission"
    ],
    "body": "This representative complete run preserves the exact system message, initial research request, tool schema, intermediate messages, and final answer for one hidden-oscillator task. Additional public result files cover the other simulated systems.\n\n========================================\n\nSOURCE FILE: sources/sciexplorer-physics-models/prompt-inputs.md\n\n# SciExplorer representative run prompt inputs\n\n## System message\n\n- Act as a computational physicist dedicated to thoroughly resolving the user's query through careful planning, hypothesis generation, and iterative verification.\n- In your first message, create a comprehensive plan to solve the users query. Include an extensive list of candidate hypotheses.\n- Initially, conduct at least 5 different experiments spanning the entire range of reasonable initial conditions. Make sure to cover also extreme cases. Then, create informative plots of your experimental results.\n- Withhold any final answer until you are sure that no further improvements of your hypothesis are possible.\n- Before submitting your final answer, simulate your proposed model using the same initial conditions as in your experiments, and compare the results. Only submit your final answer if the simulation results closely match your experimental data.\n\n<tool_preambles>\n\n- If you have run a tool but still need to extract the results (e.g. via visualization), just briefly explain what tool you will call next to extract the results.\n- Otherwise, at each step, you must answer the following questions:\n    1. What can you learn from the new tool results (if any)?\n    2. Which old hypotheses still fit your data?\n    3. Which new hypotheses might be worthwhile considering?\n\n</tool_preambles>\n\n## Initial message\n\nYou are investigating a dynamical physical system. You can only observe the first generalized coordinate of this system. However, there might be additional hidden generalized coordinates influencing the dynamics.\n\nCan you find a model that reproduces the observe_experiment function? After your exploration, save it using the save_result function.\n\nThe results of all tool calls will be stored (using the result_label) and are available later.\n\n## Final-message request\n\nCan you please summarize your exploration?\n\n## Run limits\n\n- Maximum iterations: 60\n- Maximum tool uses: 240"
  },
  {
    "schemaVersion": "0.2",
    "id": "virtual-lab-nanobodies",
    "recordId": "virtual-lab-nanobodies",
    "title": "Virtual Lab nanobody-design prompt bundle",
    "author": "Kyle Swanson, James Zou, and Virtual Lab collaborators",
    "origin": "Public Virtual Lab repository",
    "sourceUrl": "https://github.com/zou-group/virtual_lab",
    "sourceCommit": "8a3a4fd9ccc0cd297bd523751e03bc9527c91832",
    "retrievedAt": "2026-07-17",
    "originalFormat": "Python source and Jupyter notebook",
    "artifactType": "source-bundle",
    "completeness": "full",
    "permissionBasis": "Redistribution under the repository's MIT License, preserved with the local source bundle.",
    "publicationStatus": "approved",
    "transcriptionMode": "Verbatim source files from the cited repository commit.",
    "rawSources": [
      "sources/virtual-lab-nanobodies/prompts.py",
      "sources/virtual-lab-nanobodies/nanobody_constants.py",
      "sources/virtual-lab-nanobodies/run_nanobody_design.ipynb"
    ],
    "displayFiles": [
      "sources/virtual-lab-nanobodies/nanobody_constants.py",
      "sources/virtual-lab-nanobodies/prompts.py"
    ],
    "structure": [
      "research background",
      "principal-investigator role",
      "specialist roles",
      "meeting agendas",
      "synthesis and critique",
      "experimental-results review"
    ],
    "body": "The bundle preserves the task-specific nanobody context, the generic multi-agent meeting prompts, and the notebook that instantiates the complete research workflow.\n\n========================================\n\nSOURCE FILE: sources/virtual-lab-nanobodies/nanobody_constants.py\n\n\"\"\"Constants for the nanobody design project.\"\"\"\n\nfrom pathlib import Path\n\nfrom virtual_lab.agent import Agent\nfrom virtual_lab.prompts import SCIENTIFIC_CRITIC\n\n# Meetings constants\nnum_iterations = 5\nnum_rounds = 3\n\n# Models\nmodel = \"gpt-4o-2024-08-06\"\nmodel_mini = \"gpt-4o-mini-2024-07-18\"\n\n# Discussion paths\ndiscussions_dir = Path(\"discussions\")\nworkflow_phases = [\n    \"team_selection\",\n    \"project_specification\",\n    \"tools_selection\",\n    \"implementation_agent_selection\",\n    \"esm\",\n    \"alphafold\",\n    \"rosetta\",\n    \"workflow_design\",\n]\nablations_phases = [\"ablations\"]\nhuman_eval_phases = [\"human_eval\"]\nfinetuning_phases = [\"finetuning\"]\nreview_phases = [\"unpaired_cysteine\"]\nphases = workflow_phases + ablations_phases + human_eval_phases + finetuning_phases + review_phases\ndiscussions_phase_to_dir = {phase: discussions_dir / phase for phase in phases}\n\n# Prompts\nbackground_prompt = \"You are working on a research project to use machine learning to develop antibodies or nanobodies for the newest variant of the SARS-CoV-2 spike protein that also, ideally, have activity against other circulating minor variants and past variants.\"\n\nnanobody_prompt = \"Your team previous decided to modify existing nanobodies to improve their binding to the newest variant of the SARS-CoV-2 spike protein.\"\n\nexperimental_results_prompt = \"\"\"Your team has designed 92 mutated nanobodies (23 each for the wild-type nanobodies H11-D4, Nb21, Ty1, and VHH-72) to improve their binding to the KP.3 variant of the SARS-CoV-2 spike protein receptor binding domain (RBD). Each nanobody has 1-4 mutations relative to the wild-type nanobody. Your team used ESM log-likelihood ratios (ESM LLR) to score the nanobody mutations independent of the antigen, AlphaFold-Multimer to predict the structure of the mutated nanobody in complex with the KP.3 RBD and compute the interface pLDDT (AF ipLDDT) as a metric of binding confidence, and Rosetta to calculate the binding energy of the mutated nanobody in complex with the KP.3 RBD (RS dG) based on the AlphaFold-Multimer predicted structure followed by a Rosetta relaxation. You have ranked the mutant nanobodies and selected the top ones using a weighted score of WS = 0.2 * (ESM LLR) + 0.5 * (AF ipLDDT) - 0. 3 * (RS dG). The 92 selected nanobodies were tested along with the four wild-type nanobodies using an ELISA assay to measure binding to the Wuhan, JN.1, KP.3, KP2.3, and BA.2 strains of the SARS-CoV-2 spike RBD. Note that the JN.1 strain is closely related to KP.3 and KP2.3. BSA was used as a negative control. Most of the mutated nanobodies showed at least moderate expression levels. The ELISA results are as follows:\n\nH11-D4: The wild-type only binds to the Wuhan RBD. Most mutants show binding to the Wuhan RBD as well, including one with a higher binding level than the wild-type. However, that mutant and two others bind non-specifically to the negative control BSA along with other strains of the SARS-CoV-2 RBD. No mutant nanobody shows specific binding to any strain other than the Wuhan RBD.\n\nNb21: The wild-type only binds to the Wuhan RBD. All mutant nanobodies also bind to the Wuhan RBD. There are no non-specific binders. One mutant nanobody with mutations I77V, L59E, Q87A, and R37Q binds to the Wuhan RBD (strong binding), the JN.1 RBD (moderate binding), and the KP.3 RBD (weak binding). Thus, this mutant introduces specific binding to JN.1 and KP.3 that the wild-type does not possess, and it increases binding to the Wuhan RBD.\n\nTy1: The wild-type only binds to the Wuhan RBD. Many mutant nanobodies do not show binding, but several show moderate binding to the Wuhan RBD. One mutant nanobody with mutations V32F, G59D, N45S, and F32S binds to the Wuhan RBD (strong binding) and the JN.1 RBD (moderate binding). This mutant introduces specific binding to JN.1 that the wild-type does not possess, and it increases binding to the Wuhan RBD. Additionally, there are is one mutant with weak, non-specific binding to BSA and other RBD strains.\n\nVHH-72: The wild-type only binds to the Wuhan RBD. Most mutants show binding to the Wuhan RBD as well, including several with a higher binding level than the wild-type. Two mutant nanobodies bind non-specifically to BSA and several RBD strains. No mutant nanobody shows specific binding to any strain other than the Wuhan RBD.\"\"\"\n\n# Set up agents\n\n# Generic agent\ngeneric_agent = Agent(\n    title=\"Assistant\",\n    expertise=\"helping people with their problems\",\n    goal=\"help people with their problems\",\n    role=\"help people with their problems\",\n    model=model,\n)\n\n# Generic team lead\ngeneric_team_lead = Agent(\n    title=f\"{generic_agent.title} Lead\",\n    expertise=generic_agent.expertise,\n    goal=generic_agent.goal,\n    role=generic_agent.role,\n    model=model,\n)\n\n# Generic team\ngeneric_team = [\n    Agent(\n        title=f\"{generic_agent.title} {i}\",\n        expertise=generic_agent.expertise,\n        goal=generic_agent.goal,\n        role=generic_agent.role,\n        model=model,\n    )\n    for i in range(1, 5)\n]\n\n# Team lead\nprincipal_investigator = Agent(\n    title=\"Principal Investigator\",\n    expertise=\"applying artificial intelligence to biomedical research\",\n    goal=\"perform research in your area of expertise that maximizes the scientific impact of the work\",\n    role=\"lead a team of experts to solve an important problem in artificial intelligence for biomedicine, make key decisions about the project direction based on team member input, and manage the project timeline and resources\",\n    model=model,\n)\n\n# Scientific critic\nscientific_critic = SCIENTIFIC_CRITIC\n\n# Specialized science agents\nimmunologist = Agent(\n    title=\"Immunologist\",\n    expertise=\"antibody engineering and immune response characterization\",\n    goal=\"guide the development of antibodies/nanobodies that elicit a strong and broad immune response\",\n    role=\"advise on immunogenicity, cross-reactivity with other variants, and potential for therapeutic application, ensuring the designs are viable for experimental validation and downstream applications\",\n    model=model,\n)\n\nmachine_learning_specialist = Agent(\n    title=\"Machine Learning Specialist\",\n    expertise=\"developing algorithms for protein-ligand interactions and optimization\",\n    goal=\"create and apply machine learning models to predict antibody efficacy and optimize binding affinity across SARS-CoV-2 variants\",\n    role=\"lead the development of AI tools for predicting interactions and refining antibody designs based on computational results\",\n    model=model,\n)\n\ncomputational_biologist = Agent(\n    title=\"Computational Biologist\",\n    expertise=\"protein structure prediction and molecular dynamics simulations\",\n    goal=\"develop predictive models to identify potential antibody/nanobody candidates and simulate interactions with the SARS-CoV-2 spike protein\",\n    role=\"provide insights into structural dynamics, guide virtual screening efforts, and validate computational predictions with simulations\",\n    model=model,\n)\n\n# Team members\nteam_members = (\n    immunologist,\n    machine_learning_specialist,\n    computational_biologist,\n    scientific_critic,\n)\n\n========================================\n\nSOURCE FILE: sources/virtual-lab-nanobodies/prompts.py\n\n\"\"\"Prompts for the language model agents and meetings.\"\"\"\n\nfrom typing import Iterable\n\nfrom virtual_lab.agent import Agent\nfrom virtual_lab.constants import DEFAULT_MODEL\n\n\nPRINCIPAL_INVESTIGATOR = Agent(\n    title=\"Principal Investigator\",\n    expertise=\"running a science research lab\",\n    goal=\"perform research in your area of expertise that maximizes the scientific impact of the work\",\n    role=\"lead a team of experts to solve an important scientific problem, make key decisions about the project direction based on team member input, and manage the project timeline and resources\",\n    model=DEFAULT_MODEL,\n)\n\nSCIENTIFIC_CRITIC = Agent(\n    title=\"Scientific Critic\",\n    expertise=\"providing critical feedback for scientific research\",\n    goal=\"ensure that proposed research projects and implementations are rigorous, detailed, feasible, and scientifically sound\",\n    role=\"provide critical feedback to identify and correct all errors and demand that scientific answers that are maximally complete and detailed but simple and not overly complex\",\n    model=DEFAULT_MODEL,\n)\n\nSYNTHESIS_PROMPT = \"synthesize the points raised by each team member, make decisions regarding the agenda based on team member input, and ask follow-up questions to gather more information and feedback about how to better address the agenda\"\n\nSUMMARY_PROMPT = \"summarize the meeting in detail for future discussions, provide a specific recommendation regarding the agenda, and answer the agenda questions (if any) based on the discussion while strictly adhering to the agenda rules (if any)\"\n\nMERGE_PROMPT = \"Please read the summaries of multiple separate meetings about the same agenda. Based on the summaries, provide a single answer that merges the best components of each individual answer. Please use the same format as the individual answers. Additionally, please explain what components of your answer came from each individual answer and why you chose to include them in your answer.\"\n\nREWRITE_PROMPT = \"This script needs to be improved. Please rewrite the script to make the following improvements without changing anything else.\"\n\n\ndef create_merge_prompt(\n    agenda: str,\n    agenda_questions: tuple[str, ...] = (),\n    agenda_rules: tuple[str, ...] = (),\n) -> str:\n    \"\"\"Creates a merge prompt for merging the best components of multiple separate meeting answers.\n\n    :param agenda: The original agenda for the separate meetings.\n    :param agenda_questions: The original agenda questions for the separate meetings.\n    :param agenda_rules: The original agenda rules for the separate meetings.\n    :return: The merge prompt.\n    \"\"\"\n    return (\n        f\"{MERGE_PROMPT}\\n\\n\"\n        f\"{format_agenda(agenda, intro='As a reference, here is the agenda from those meetings, which must be addressed here as well:')}\"\n        f\"{format_agenda_questions(agenda_questions, intro='As a reference, here are the agenda questions from those meetings, which must be answered here as well:')}\"\n        f\"{format_agenda_rules(agenda_rules, intro='As a reference, here are the agenda rules from those meetings, which must be followed here as well:')}\"\n    )\n\n\ndef summary_structure_prompt(has_agenda_questions: bool) -> str:\n    \"\"\"Formats the structure of a summary prompt.\n\n    :param has_agenda_questions: Whether the summary prompt includes agenda questions.\n    :return: The structure of a summary prompt.\n    \"\"\"\n    if has_agenda_questions:\n        agenda_questions_structure = [\n            \"### Answers\",\n            \"For each agenda question, please provide the following:\",\n            \"Answer: A specific answer to the question based on your recommendation above.\",\n            \"Justification: A brief explanation of why you provided that answer.\",\n        ]\n    else:\n        agenda_questions_structure = []\n\n    return \"\\n\\n\".join(\n        [\n            \"### Agenda\",\n            \"Restate the agenda in your own words.\",\n            \"### Team Member Input\",\n            \"Summarize all of the important points raised by each team member. This is to ensure that key details are preserved for future meetings.\",\n            \"### Recommendation\",\n            \"Provide your expert recommendation regarding the agenda. You should consider the input from each team member, but you must also use your expertise to make a final decision and choose one option among several that may have been discussed. This decision can conflict with the input of some team members as long as it is well justified. It is essential that you provide a clear, specific, and actionable recommendation. Please justify your recommendation as well.\",\n        ]\n        + agenda_questions_structure\n        + [\n            \"### Next Steps\",\n            \"Outline the next steps that the team should take based on the discussion.\",\n        ]\n    )\n\n\ndef format_prompt_list(prompts: Iterable[str]) -> str:\n    \"\"\"Formats prompts as a numbered list.\n\n    :param prompts: The prompts.\n    :return: The prompts formatted as a numbered list.\n    \"\"\"\n    return f\"{'\\n\\n'.join(f'{i + 1}. {prompt}' for i, prompt in enumerate(prompts))}\"\n\n\ndef format_agenda(\n    agenda: str, intro: str = \"Here is the agenda for the meeting:\"\n) -> str:\n    \"\"\"Formats the agenda for the prompt.\n\n    :param agenda: The agenda.\n    :param intro: The introduction to the agenda.\n    :return: The formatted agenda.\n    \"\"\"\n    return f\"{intro}\\n\\n{agenda}\\n\\n\"\n\n\ndef format_agenda_questions(\n    agenda_questions: tuple[str, ...],\n    intro: str = \"Here are the agenda questions that must be answered:\",\n) -> str:\n    \"\"\"Formats the agenda questions for the prompt as a numbered list.\n\n    :param agenda_questions: The agenda questions.\n    :param intro: The introduction to the agenda questions.\n    :return: The formatted agenda questions.\n    \"\"\"\n    return (\n        f\"{intro}\\n\\n{format_prompt_list(agenda_questions)}\\n\\n\"\n        if agenda_questions\n        else \"\"\n    )\n\n\ndef format_agenda_rules(\n    agenda_rules: tuple[str, ...],\n    intro: str = \"Here are the agenda rules that must be followed:\",\n) -> str:\n    \"\"\"Formats the agenda rules for the prompt as a numbered list.\n\n    :param agenda_rules: The agenda rules.\n    :param intro: The introduction to the agenda rules.\n    :return: The formatted agenda rules.\n    \"\"\"\n    return f\"{intro}\\n\\n{format_prompt_list(agenda_rules)}\\n\\n\" if agenda_rules else \"\"\n\n\ndef format_references(\n    references: tuple[str, ...], reference_type: str, intro: str\n) -> str:\n    \"\"\"Formats references (e.g., contexts, summaries) for the prompt.\n\n    :param references: The references.\n    :param reference_type: The type of the references (e.g., \"context\", \"summary\").\n    :param intro: The introduction to the references.\n    :return: The formatted references.\n    \"\"\"\n    if not references:\n        return \"\"\n\n    formatted_references = [\n        f\"[begin {reference_type} {reference_index + 1}]\\n\\n{reference}\\n\\n[end {reference_type} {reference_index + 1}]\"\n        for reference_index, reference in enumerate(references)\n    ]\n\n    return f\"{intro}\\n\\n{'\\n\\n'.join(formatted_references)}\\n\\n\"\n\n\n# Team meeting prompts\ndef team_meeting_start_prompt(\n    team_lead: Agent,\n    team_members: tuple[Agent, ...],\n    agenda: str,\n    agenda_questions: tuple[str, ...] = (),\n    agenda_rules: tuple[str, ...] = (),\n    summaries: tuple[str, ...] = (),\n    contexts: tuple[str, ...] = (),\n    num_rounds: int = 1,\n) -> str:\n    \"\"\"Generates the start prompt for a tean meeting.\n\n    :param team_lead: The team lead.\n    :param team_members: The team members.\n    :param agenda: The agenda for the meeting.\n    :param agenda_questions: The agenda questions to answer by the end of the meeting.\n    :param agenda_rules: The rules for the agenda.\n    :param summaries: The summaries of previous meetings.\n    :param contexts: The contexts for the meeting.\n    :param num_rounds: The number of rounds of discussion.\n    :return: The start prompt for the tean meeting.\n    \"\"\"\n    return (\n        f\"This is the beginning of a team meeting to discuss your research project. \"\n        f\"This is a meeting with the team lead, {team_lead.title}, and the following team members: \"\n        f\"{', '.join(team_member.title for team_member in team_members)}.\\n\\n\"\n        f\"{format_references(contexts, reference_type='context', intro='Here is context for this meeting:')}\"\n        f\"{format_references(summaries, reference_type='summary', intro='Here are summaries of the previous meetings:')}\"\n        f\"{format_agenda(agenda)}\"\n        f\"{format_agenda_questions(agenda_questions)}\"\n        f\"{format_agenda_rules(agenda_rules)}\"\n        f\"{team_lead} will convene the meeting. \"\n        f\"Then, each team member will provide their thoughts on the discussion one-by-one in the order above. \"\n        f\"After all team members have given their input, {team_lead} will {SYNTHESIS_PROMPT}. \"\n        f\"This will continue for {num_rounds} rounds. Once the discussion is complete, {team_lead} will {SUMMARY_PROMPT}.\"\n    )\n\n\ndef team_meeting_team_lead_initial_prompt(team_lead: Agent) -> str:\n    \"\"\"Generates the initial prompt for the team lead in a team meeting.\n\n    :param team_lead: The team lead.\n    :return: The initial prompt for the team lead.\n    \"\"\"\n    return f\"{team_lead}, please provide your initial thoughts on the agenda as well as any questions you have to guide the discussion among the team members.\"\n\n\ndef team_meeting_team_member_prompt(\n    team_member: Agent, round_num: int, num_rounds: int\n) -> str:\n    \"\"\"Generates the prompt for a team member in a team meeting.\n\n    :param team_member: The team member.\n    :param round_num: The current round number.\n    :param num_rounds: The total number of rounds.\n    :return: The prompt for the team member.\n    \"\"\"\n    return (\n        f\"{team_member}, please provide your thoughts on the discussion (round {round_num} of {num_rounds}). \"\n        f'If you do not have anything new or relevant to add, you may say \"pass\". '\n        f\"Remember that you can and should (politely) disagree with other team members if you have a different perspective.\"\n    )\n\n\ndef team_meeting_team_lead_intermediate_prompt(\n    team_lead: Agent, round_num: int, num_rounds: int\n) -> str:\n    \"\"\"Generates the intermediate prompt for the team lead in a team meeting at the end of a round of discussion.\n\n    :param team_lead: The team lead.\n    :param round_num: The current round number.\n    :param num_rounds: The total number of rounds.\n    :return: The intermediate prompt for the team lead.\n    \"\"\"\n    return f\"This concludes round {round_num} of {num_rounds} of discussion. {team_lead}, please {SYNTHESIS_PROMPT}.\"\n\n\ndef team_meeting_team_lead_final_prompt(\n    team_lead: Agent,\n    agenda: str,\n    agenda_questions: tuple[str, ...] = (),\n    agenda_rules: tuple[str, ...] = (),\n) -> str:\n    \"\"\"Generates the final prompt for the team lead in a team meeting to summarize the discussion.\n\n    :param team_lead: The team lead.\n    :param agenda: The agenda for the meeting.\n    :param agenda_questions: The agenda questions to answer by the end of the meeting.\n    :param agenda_rules: The rules for the agenda.\n    :return: The final prompt for the team lead.\n    \"\"\"\n    return (\n        f\"{team_lead}, please {SUMMARY_PROMPT}.\\n\\n\"\n        f\"{format_agenda(agenda, intro='As a reminder, here is the agenda for the meeting:')}\"\n        f\"{format_agenda_questions(agenda_questions, intro='As a reminder, here are the agenda questions that must be answered:')}\"\n        f\"{format_agenda_rules(agenda_rules, intro='As a reminder, here are the agenda rules that must be followed:')}\"\n        f\"Your summary should take the following form.\\n\\n\"\n        f\"{summary_structure_prompt(has_agenda_questions=len(agenda_questions) > 0)}\"\n    )\n\n\n# Individual meeting prompts\ndef individual_meeting_start_prompt(\n    team_member: Agent,\n    agenda: str,\n    agenda_questions: tuple[str, ...] = (),\n    agenda_rules: tuple[str, ...] = (),\n    summaries: tuple[str, ...] = (),\n    contexts: tuple[str, ...] = (),\n) -> str:\n    \"\"\"Generates the start prompt for an individual meeting.\n\n    :param team_member: The team member.\n    :param agenda: The agenda for the meeting.\n    :param agenda_questions: The agenda questions to answer by the end of the meeting.\n    :param agenda_rules: The rules for the agenda.\n    :param summaries: The summaries of previous meetings.\n    :param contexts: The contexts for the meeting.\n    :return: The start prompt for the individual meeting.\n    \"\"\"\n    return (\n        f\"This is the beginning of an individual meeting with {team_member} to discuss your research project.\\n\\n\"\n        f\"{format_references(contexts, reference_type='context', intro='Here is context for this meeting:')}\"\n        f\"{format_references(summaries, reference_type='summary', intro='Here are summaries of the previous meetings:')}\"\n        f\"{format_agenda(agenda)}\"\n        f\"{format_agenda_questions(agenda_questions)}\"\n        f\"{format_agenda_rules(agenda_rules)}\"\n        f\"{team_member}, please provide your response to the agenda.\"\n    )\n\n\ndef individual_meeting_critic_prompt(\n    critic: Agent,\n    agent: Agent,\n) -> str:\n    \"\"\"Generates the intermediate prompt for the critic in an individual meeting.\n\n    :param critic: The critic.\n    :param agent: The agent that the critic is criticizing.\n    \"\"\"\n    return (\n        f\"{critic.title}, please critique {agent.title}'s most recent answer. \"\n        \"In your critique, suggest improvements that directly address the agenda and any agenda questions. \"\n        \"Prioritize simple solutions over unnecessarily complex ones, but demand more detail where detail is lacking. \"\n        \"Additionally, validate whether the answer strictly adheres to the agenda and any agenda questions and provide corrective feedback if it does not. \"\n        \"Only provide feedback; do not implement the answer yourself.\"\n    )\n\n\ndef individual_meeting_agent_prompt(\n    critic: Agent,\n    agent: Agent,\n) -> str:\n    \"\"\"Generates the intermediate prompt for the agent in an individual meeting.\n\n    :param critic: The critic.\n    :param agent: The agent.\n    \"\"\"\n    return (\n        f\"{agent.title}, please modify your answer to address {critic.title}'s most recent feedback. \"\n        \"Remember that your ultimate goal is to make improvements that better address the agenda.\"\n    )\n\n\nCODING_RULES = (\n    \"Your code must be self-contained (with appropriate imports) and complete.\",\n    \"Your code may not include any undefined or unimplemented variables or functions.\",\n    \"Your code may not include any pseudocode; it must be fully functioning code.\",\n    \"Your code may not include any hard-coded examples.\",\n    \"If your code needs user-provided values, write code to parse those values from the command line.\",\n    \"Your code must be high quality, well-engineered, efficient, and well-documented (including docstrings, comments, and Python type hints if using Python).\",\n)"
  }
] as const;
