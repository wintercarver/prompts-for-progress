import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const siteDir = path.resolve(scriptDir, "..");
const recordsDir = path.resolve(siteDir, "..", "records");
const promptsDir = path.resolve(siteDir, "..", "prompts");
const problemsDir = path.resolve(siteDir, "..", "problems");
const outputPath = path.resolve(siteDir, "app", "records.generated.ts");
const includePrivate = process.env.PROMPTS_INCLUDE_PRIVATE === "1";

async function readMarkdownCollection(directory, bodyKey, excludeDrafts = false) {
  const files = (await readdir(directory))
    .filter((file) => file.endsWith(".md") && !["README.md", "SCHEMA.md"].includes(file))
    .filter((file) => !excludeDrafts || !file.endsWith("-draft.md"))
    .sort();
  const collection = [];

  for (const file of files) {
    const source = await readFile(path.join(directory, file), "utf8");
    const match = source.match(/^---\n([\s\S]*?)\n---\n/);
    if (!match) continue;

    try {
      const metadata = JSON.parse(match[1]);
      let body = source
        .slice(match[0].length)
        .trim()
        .replace(/^# .+\n+/, "")
        .trim();

      if (bodyKey === "body" && Array.isArray(metadata.displayFiles)) {
        const sourceSections = [];
        for (const relativeFile of metadata.displayFiles) {
          const resolvedFile = path.resolve(directory, relativeFile);
          if (!resolvedFile.startsWith(`${directory}${path.sep}`)) {
            throw new Error(`Prompt source escapes prompts directory: ${relativeFile}`);
          }
          const sourceText = await readFile(resolvedFile, "utf8");
          sourceSections.push(`SOURCE FILE: ${relativeFile}\n\n${sourceText.trim()}`);
        }
        body = [body, ...sourceSections].filter(Boolean).join("\n\n========================================\n\n");
      }
      collection.push({ ...metadata, [bodyKey]: body });
    } catch (error) {
      throw new Error(`Invalid JSON metadata in ${file}: ${error.message}`);
    }
  }

  return collection;
}

const [records, problems, allPrompts] = await Promise.all([
  readMarkdownCollection(recordsDir, "editorialNote", true),
  readMarkdownCollection(problemsDir, "editorialNote"),
  readMarkdownCollection(promptsDir, "body"),
]);
const prompts = allPrompts.filter(
  (prompt) => includePrivate || prompt.publicationStatus === "approved",
);

const output = `// Generated from the Markdown archive. Do not edit by hand.\nexport const records = ${JSON.stringify(records, null, 2)} as const;\n\nexport const problems = ${JSON.stringify(problems, null, 2)} as const;\n\nexport const prompts = ${JSON.stringify(prompts, null, 2)} as const;\n`;
await writeFile(outputPath, output);
console.log(`Generated ${records.length} records, ${problems.length} problems, and ${prompts.length} public prompt artifacts.`);
