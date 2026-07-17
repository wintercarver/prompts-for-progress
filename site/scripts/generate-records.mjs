import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const siteDir = path.resolve(scriptDir, "..");
const recordsDir = path.resolve(siteDir, "..", "records");
const outputPath = path.resolve(siteDir, "app", "records.generated.ts");

const files = (await readdir(recordsDir))
  .filter((file) => file.endsWith(".md") && !file.endsWith("-draft.md"))
  .sort();

const records = [];

for (const file of files) {
  const source = await readFile(path.join(recordsDir, file), "utf8");
  const match = source.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) continue;

  try {
    const metadata = JSON.parse(match[1]);
    const editorialNote = source
      .slice(match[0].length)
      .replace(/^# .+\n+/, "")
      .trim();
    records.push({ ...metadata, editorialNote });
  } catch (error) {
    throw new Error(`Invalid JSON metadata in ${file}: ${error.message}`);
  }
}

const output = `// Generated from ../records/*.md. Do not edit by hand.\nexport const records = ${JSON.stringify(records, null, 2)} as const;\n`;
await writeFile(outputPath, output);
console.log(`Generated ${records.length} public records.`);
