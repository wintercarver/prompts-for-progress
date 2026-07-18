import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work with the data · Prompts for Progress",
  description: "Clone and analyze the Prompts for Progress research-attempt and prompt corpus.",
};

const repositoryUrl = "https://github.com/wintercarver/prompts-for-progress";
const cloneCommand = `git clone ${repositoryUrl}.git\ncd prompts-for-progress`;

const files = [
  ["prompts/corpus.jsonl", "One JSON object per locally preserved prompt artifact. This is the simplest starting point for aggregate analysis."],
  ["prompts/corpus-index.json", "One summary per prompt manifest, including completeness, publication status, artifact count, and known gaps."],
  ["records/*.md", "Structured record metadata in JSON frontmatter, followed by short editorial context in Markdown."],
  ["prompts/sources/", "The underlying prompt files, code, notebooks, configurations, and normalized transcripts."],
];

export default function DataPage() {
  return (
    <main className="data-page">
      <header className="masthead detail-masthead">
        <Link className="wordmark" href="/" aria-label="Prompts for Progress home">
          <span className="wordmark-mark">PƒP</span>
          <span>Prompts for Progress</span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/#records">Records</Link>
          <Link href="/problems">Problems</Link>
          <Link href="/data">Data</Link>
          <Link href="/about">About</Link>
          <Link href="/submit">Submit</Link>
        </nav>
      </header>

      <section className="data-hero">
        <p className="eyebrow">Work with the archive</p>
        <h1>Fetch all the data.</h1>
        <p>The website is one view of the collection. The repository is the archive itself, designed to be cloned, searched, transformed, and analyzed by people or agents.</p>
      </section>

      <section className="clone-panel" aria-labelledby="clone-title">
        <div>
          <p className="eyebrow">Clone the repository</p>
          <h2 id="clone-title">One command, then local files.</h2>
          <p>The repository will be available at this address when the public release is published.</p>
          <a href={repositoryUrl} target="_blank" rel="noreferrer">Open on GitHub ↗</a>
        </div>
        <pre><code>{cloneCommand}</code></pre>
      </section>

      <section className="data-guide">
        <div className="section-heading light-heading">
          <div><p className="eyebrow">Repository map</p><h2>Start with the generated corpus.</h2></div>
          <p>The Markdown remains the editable source of truth. The JSONL and JSON indexes are generated views intended for analysis.</p>
        </div>
        <div className="data-file-grid">
          {files.map(([path, description], index) => (
            <article key={path}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <code>{path}</code>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="parse-section">
        <div>
          <p className="eyebrow">Command line</p>
          <h2>Inspect the corpus with jq.</h2>
          <pre><code>{`# Count prompt artifacts by completeness\njq -s 'group_by(.completeness) | map({completeness: .[0].completeness, artifacts: length})' prompts/corpus.jsonl\n\n# List exact prompt artifacts\njq -r 'select(.completeness == "exact") | [.recordId, .sourcePath] | @tsv' prompts/corpus.jsonl`}</code></pre>
        </div>
        <div>
          <p className="eyebrow">Python</p>
          <h2>Load every artifact.</h2>
          <pre><code>{`import json\nfrom pathlib import Path\n\npath = Path("prompts/corpus.jsonl")\nrows = [json.loads(line) for line in path.read_text().splitlines()]\n\nexact = [row for row in rows if row["completeness"] == "exact"]\nprint(len(rows), len(exact))`}</code></pre>
        </div>
      </section>

      <section className="data-note">
        <strong>Check rights metadata before republishing prompt text.</strong>
        <p>Each corpus row includes a publication status. The public corpus contains only material marked <code>approved</code>. Known prompt artifacts awaiting rights review are omitted while their original sources remain linked from archive records.</p>
      </section>

      <footer>
        <span>Prompts for Progress</span>
        <p>Clone the archive and ask new questions of it.</p>
        <Link href="/">Archive home ↑</Link>
      </footer>
    </main>
  );
}
