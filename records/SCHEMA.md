# Provisional record format — v0.1

The format is intentionally permissive. Only `id`, `title`, `recordType`, `domain`, `field`, `outcome`, `summary`, `timeline`, `promptAvailability`, and `sources` are required for the private prototype.

## Design decisions derived from the initial corpus

- **Outcome and evidence are separate.** A complete claimed result can have weak evidence; a partial result can have formal or computational certification.
- **Cases and campaigns are separate.** Batch campaigns retain failed-attempt denominators and may link to individual child cases.
- **A timeline contains events, not one date.** Attempt, disclosure, preprint, verification, peer review, correction, and retraction are different events.
- **AI and human roles are explicit.** “AI-assisted” alone hides problem selection, prompting, experimentation, proof development, formalization, and writing.
- **Prompt availability is graded.** `full`, `partial`, `representative`, `linked`, `unavailable`, and `unknown` should not be collapsed.
- **Validation is plural and mutable.** Formal checking, computational certificates, expert review, wet-lab experiments, replication, and peer review answer different questions.
- **Lineage matters.** Records may derive from, correct, formalize, extend, or rediscover other work.

## Metadata shape

```json
{
  "schemaVersion": "0.1",
  "id": "stable-kebab-case-id",
  "problemIds": ["canonical-problem-id"],
  "promptId": "optional-locally-preserved-prompt-id",
  "title": "Human-readable title",
  "recordType": "case | campaign | attempt",
  "domain": "mathematics | biology | chemistry | physics | ...",
  "field": "More specific field",
  "outcome": "complete | partial | mixed | unsuccessful | rediscovery | disputed",
  "contributionMode": "autonomous | human-ai collaboration | agentic search | experimental loop",
  "summary": "Short factual summary",
  "people": ["Names when established"],
  "organizations": ["Organizations"],
  "systems": ["Reported systems or models"],
  "promptAvailability": "full | partial | representative | linked | unavailable | unknown",
  "timeline": [
    {
      "date": "YYYY-MM-DD or YYYY-MM",
      "precision": "day | month | year | approximate",
      "type": "attempt | disclosure | preprint | verification | peer-review | correction",
      "label": "What happened"
    }
  ],
  "validation": [
    {
      "type": "formal | certified-computation | expert-review | wet-lab | replication | peer-review",
      "status": "reported | passed | mixed | pending | disputed",
      "note": "Scope and trust boundary"
    }
  ],
  "sources": [
    { "label": "Primary source", "url": "https://...", "kind": "paper | prompt | transcript | code | announcement" }
  ],
  "caveat": "Most important limitation or uncertainty",
  "parent": "optional-parent-record-id",
  "related": ["optional-related-record-id"]
}
```

`problemIds` links attempts to the enduring questions in `problems/`. `promptId` may explicitly link to a locally preserved artifact in `prompts/`. When it is omitted, the site also matches a prompt manifest whose `recordId` equals the record `id`. Neither mechanism replaces the primary source or rights metadata.

Prompt manifests separately record `artifactType`, `completeness`, `rawSources`, `displayFiles`, rights status, and source hashes or commits. See `prompts/README.md` for the prompt-corpus format.

## Timeline interpretation

The website charts the first known attempt date when available; otherwise it uses first public disclosure and visibly marks that substitution. It must never imply that publication date equals run date.

## Evidence shorthand for the prototype

The interface uses a compact strongest-evidence label for filtering, while retaining the full `validation` list:

- **Formal:** kernel-checked proof, subject to statement-faithfulness audit.
- **Certified:** independently checkable computational certificate.
- **Experimental:** relevant wet-lab or physical experiment.
- **Expert-reviewed:** domain-expert mathematical or scientific assessment.
- **Reported:** author or organization report without stronger public validation yet.
