import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { problems, records } from "../../records.generated";
import { displayDate, outcomeLabels, strongestEvidence, type ArchiveRecord } from "../../record-utils";

type ProblemPageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return problems.map((problem) => ({ id: problem.id }));
}

export async function generateMetadata({ params }: ProblemPageProps): Promise<Metadata> {
  const { id } = await params;
  const problem = problems.find((item) => item.id === id);
  return problem ? { title: `${problem.title} · Prompts for Progress`, description: problem.summary } : {};
}

export default async function ProblemPage({ params }: ProblemPageProps) {
  const { id } = await params;
  const problem = problems.find((item) => item.id === id);
  if (!problem) notFound();

  const attempts = (records as readonly ArchiveRecord[])
    .filter((record) => record.problemIds?.includes(problem.id))
    .sort((a, b) => a.timeline[0].date.localeCompare(b.timeline[0].date));

  return (
    <main className="detail-page problem-detail-page">
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

      <div className="detail-breadcrumb">
        <Link href="/problems">← Problems index</Link>
        <span>{problem.kind.replaceAll("-", " ")}</span>
      </div>

      <section className="problem-detail-hero">
        <div>
          <p className="eyebrow">{problem.domain} · {problem.field}</p>
          <h1>{problem.title}</h1>
          <p>{problem.summary}</p>
        </div>
        <aside>
          <span className={`problem-status status-${problem.status}`}>{problem.statusLabel}</span>
          <strong>{attempts.length}</strong>
          <p>documented attempt{attempts.length === 1 ? "" : "s"}</p>
          <small>Status recorded as of {problem.statusAsOf}</small>
        </aside>
      </section>

      <section className="problem-description">
        <p>{problem.editorialNote}</p>
        <a href={problem.authoritativeUrl} target="_blank" rel="noreferrer">Open reference source ↗</a>
      </section>

      <section className="problem-attempts">
        <div className="section-heading light-heading">
          <div><p className="eyebrow">Attempt ledger</p><h2>What has been tried?</h2></div>
          <p>A complete attempt outcome does not automatically change the editorial status of the underlying problem.</p>
        </div>
        <div className="attempt-list">
          {attempts.map((record, index) => (
            <article key={record.id}>
              <Link className="attempt-link" href={`/records/${record.id}`} aria-label={`View attempt: ${record.title}`} />
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><small>{displayDate(record.timeline[0].date)} · {record.recordType}</small><strong>{record.title}</strong><p>{record.summary}</p></div>
              <div><span className={`status-pill outcome-${record.outcome}`}>{outcomeLabels[record.outcome]}</span><small>{strongestEvidence(record)} evidence</small></div>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <span>Prompts for Progress</span>
        <p>Problem status and attempt outcome remain separate.</p>
        <Link href="/problems">All problems ↑</Link>
      </footer>
    </main>
  );
}
