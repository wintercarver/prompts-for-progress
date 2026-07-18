import { readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const promptsDir = path.resolve(scriptDir, "..", "..", "prompts");
const corpusPath = path.join(promptsDir, "corpus.jsonl");
const indexPath = path.join(promptsDir, "corpus-index.json");
const includePrivate = process.env.PROMPTS_INCLUDE_PRIVATE === "1";

async function walk(entryPath) {
  const entryStat = await stat(entryPath);
  if (entryStat.isFile()) return [entryPath];

  const entries = await readdir(entryPath, { withFileTypes: true });
  const nested = await Promise.all(
    entries
      .filter((entry) => !entry.name.startsWith("."))
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((entry) => walk(path.join(entryPath, entry.name))),
  );
  return nested.flat();
}

function parsePrompt(source, file) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) throw new Error(`Missing JSON frontmatter in ${file}`);
  return {
    metadata: JSON.parse(match[1]),
    body: source.slice(match[0].length).replace(/^# .+\n+/, "").trim(),
  };
}

const manifestFiles = (await readdir(promptsDir))
  .filter((file) => file.endsWith(".md") && file !== "README.md")
  .sort();

const rows = [];
const index = [];

for (const manifestFile of manifestFiles) {
  const source = await readFile(path.join(promptsDir, manifestFile), "utf8");
  const { metadata, body } = parsePrompt(source, manifestFile);
  if (!includePrivate && metadata.publicationStatus !== "approved") continue;
  const rawSources = metadata.rawSources ?? [];
  const artifactRows = [];

  if (metadata.contentAvailable === false) {
    // Keep a gap record in the index without adding editorial notes to the
    // machine-readable prompt corpus.
  } else if (rawSources.length === 0) {
    artifactRows.push({ sourcePath: `${manifestFile}#body`, content: body });
  } else {
    for (const relativeSource of rawSources) {
      const resolvedSource = path.resolve(promptsDir, relativeSource);
      if (!resolvedSource.startsWith(`${promptsDir}${path.sep}`)) {
        throw new Error(`Prompt source escapes prompts directory: ${relativeSource}`);
      }
      for (const sourceFile of await walk(resolvedSource)) {
        artifactRows.push({
          sourcePath: path.relative(promptsDir, sourceFile),
          content: await readFile(sourceFile, "utf8"),
        });
      }
    }
  }

  for (const artifact of artifactRows) {
    rows.push({
      promptId: metadata.id,
      recordId: metadata.recordId,
      title: metadata.title,
      artifactType: metadata.artifactType ?? "transcription",
      completeness: metadata.completeness ?? "unspecified",
      publicationStatus: metadata.publicationStatus,
      sourceUrl: metadata.sourceUrl,
      sourcePath: artifact.sourcePath,
      content: artifact.content,
    });
  }

  index.push({
    promptId: metadata.id,
    recordId: metadata.recordId,
    title: metadata.title,
    artifactType: metadata.artifactType ?? "transcription",
    completeness: metadata.completeness ?? "unspecified",
    publicationStatus: metadata.publicationStatus,
    sourceUrl: metadata.sourceUrl,
    sourceCommit: metadata.sourceCommit ?? null,
    contentAvailable: metadata.contentAvailable !== false,
    artifactCount: artifactRows.length,
    sourcePaths: artifactRows.map((artifact) => artifact.sourcePath),
  });
}

await writeFile(corpusPath, `${rows.map((row) => JSON.stringify(row)).join("\n")}\n`);
await writeFile(indexPath, `${JSON.stringify(index, null, 2)}\n`);
console.log(`Generated ${rows.length} prompt corpus artifacts from ${index.length} ${includePrivate ? "private and public" : "public"} manifests.`);
