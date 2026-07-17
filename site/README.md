# Prompts for Progress site

Private static-site prototype generated from the Markdown records in `../records`.

## Local development

```sh
npm install
npm run dev
```

`predev` and `prebuild` regenerate `app/records.generated.ts`. Draft files ending in `-draft.md` are deliberately excluded from the site and aggregate statistics.

## Checks

```sh
npm run lint
npm test
```

The prototype remains local and private. `.openai/hosting.json` has no project ID and no deployment has been created.
