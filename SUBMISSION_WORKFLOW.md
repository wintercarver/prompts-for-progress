# Submission workflow

Prompts for Progress uses a short GitHub issue form for initial submissions and pull requests for reviewed archive records. Opening an issue starts a conversation; it does not automatically add a record to the collection.

## Initial scope

The precise library scope will develop with the corpus. For the preliminary phase, the priority is an intentional use of an AI system on an identifiable open or research-level mathematical or scientific question. Complete results, partial progress, rediscoveries, disputed claims, and unsuccessful documented attempts may all be useful.

An initial submission only needs:

1. a clearly identifiable research problem or question;
2. the prompt, prompt link, or available prompt material;
3. a short description of what happened and any supporting artifact;
4. the submitter's relationship to the attempt and a way to follow up, usually their GitHub account.

Dates, model details, sources, attribution, validation, outcome classification, and mirroring permissions can be clarified afterward. Submissions that do not identify a research target or a documented attempt may remain unanswered or be closed as outside the project's developing scope.

## Review states

- `submission:pending` - newly opened and not yet screened.
- `submission:needs-info` - plausible and in scope, but missing required evidence.
- `submission:triage` - evidence collection and normalization are in progress.
- `submission:accepted-research` - accepted into the private candidate corpus, not yet published.
- `submission:declined` - outside the current scope, too limited to inspect, duplicative, or otherwise unsuitable for the archive; the reason is recorded when practical.
- `record:draft-pr` - a proposed archive record is under human review.
- `record:published` - the record was merged and generated into the site.

## Agent-assisted triage

After a quick human review, a local agent may:

1. parse the issue into the provisional schema;
2. check for duplicate problems, attempts, and sources;
3. retrieve and archive primary-source metadata;
4. distinguish attempt outcome from validation strength and problem status;
5. identify missing dates, model details, prompt rights, or attribution;
6. draft a short evidence note and a small set of follow-up questions;
7. create a candidate Markdown record or draft pull request after maintainer approval.

The agent does not publish directly, declare a scientific claim true, infer permission to mirror artifacts, or silently rewrite the submitter's claimed outcome. A human maintainer reviews every proposed record before merge.

## Publication check

Before merge, a maintainer confirms scope, provenance, permissions, neutral wording, duplicate handling, problem linkage, outcome category, validation category, caveats, and source accessibility. Site statistics are generated only from merged records.
