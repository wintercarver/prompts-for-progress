# Provisional problem format - v0.1

Required metadata:

```json
{
  "schemaVersion": "0.1",
  "id": "stable-kebab-case-id",
  "title": "Canonical problem or research question",
  "kind": "problem | research-question | collection | benchmark",
  "domain": "mathematics | biology | ...",
  "field": "Specific field",
  "status": "open | claimed-resolved | claimed-disproved | active-research | collection | benchmark",
  "statusLabel": "Human-readable status",
  "statusAsOf": "YYYY-MM-DD or YYYY-MM",
  "summary": "Concise description",
  "authoritativeUrl": "https://..."
}
```

`status` describes the problem, while an attached record's `outcome` describes one attempt. These must never be inferred from one another without editorial review.
