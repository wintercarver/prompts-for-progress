# Prompt artifacts

This directory is both a human-readable prompt archive and a machine-readable corpus. Each top-level Markdown file is a manifest. Verbatim source files, code, notebooks, configurations, and extracted transcripts live under `sources/`.

Run `npm run prompts:generate` in `site/` to rebuild:

- `corpus.jsonl`, with one JSON object per prompt artifact file
- `corpus-index.json`, with one entry per record, including known prompt gaps

The generated files make it possible to clone the repository and analyze the prompt collection without following every external link first. Public corpus generation includes only manifests marked `approved`.

## Completeness labels

- `exact`: the disclosed prompt or prompt sequence is locally preserved.
- `representative`: a documented template or source bundle reflects the system, but full per-run prompts are not public.
- `partial`: some prompt messages or components are preserved, with identified omissions.
- `unavailable`: primary sources were reviewed, but no exact prompt artifact was located.

Programmatic systems often have no single prose prompt. For those cases, the archive preserves the code, templates, configurations, problem payloads, and other files that actually construct the model input. `artifactType` explains what each bundle represents.

## Rights and provenance

Every mirrored artifact should record its author or originating organization, source URL, retrieval date, source commit or content hash when available, transcription mode, and permission or license basis.

Artifacts marked `approved` may be included in a public build. Artifacts marked `private-rights-review` may be inspected in this private prototype but must be excluded or cleared before public deployment. The original primary source remains linked in either case.

Set `PROMPTS_INCLUDE_PRIVATE=1` only in a private working copy to include rights-review artifacts in generated files. Never commit those generated outputs to the public repository.

An availability manifest may set `contentAvailable` to `false`. It will appear in `corpus-index.json` with zero artifacts, but its editorial gap note will not be inserted into `corpus.jsonl` as if it were prompt text.
