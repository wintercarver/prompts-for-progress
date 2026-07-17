import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { records } from "../../records.generated";
import {
  displayDate,
  humanize,
  outcomeLabels,
  promptAccessLabel,
  promptSource,
  strongestEvidence,
  type ArchiveRecord,
} from "../../record-utils";

type RecordPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return records.map((record) => ({ id: record.id }));
}

export async function generateMetadata({ params }: RecordPageProps): Promise<Metadata> {
  const { id } = await params;
  const record = records.find((item) => item.id === id);
  if (!record) return {};

  return {
    title: `${record.title} · Prompts for Progress`,
    description: record.summary,
  };
}

export default async function RecordPage({ params }: RecordPageProps) {
  const { id } = await params;
  const recordIndex = records.findIndex((item) => item.id === id);
  if (recordIndex < 0) notFound();

  const record = records[recordIndex] as ArchiveRecord;
  const prompt = promptSource(record);
  const previous = records[(recordIndex - 1 + records.length) % records.length];
  const next = records[(recordIndex + 1) % records.length];

  return (
    <main className="detail-page">
      <header className="masthead detail-masthead">
        <Link className="wordmark" href="/#top" aria-label="Prompts for Progress home">
          <span className="wordmark-mark">PƒP</span>
          <span>Prompts for Progress</span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/#timeline">Timeline</Link>
          <Link href="/#records">Records</Link>
          <Link href="/#method">Method</Link>
        </nav>
      </header>

      <div className="detail-breadcrumb">
        <Link href="/#records">← All records</Link>
        <span>{record.recordType}</span>
      </div>

      <section className="detail-hero">
        <div className="detail-title-block">
          <div className="detail-kicker">
            <span className={`status-pill outcome-${record.outcome}`}>{outcomeLabels[record.outcome]}</span>
            <span>{record.domain} · {record.field}</span>
          </div>
          <h1>{record.title}</h1>
          <p>{record.summary}</p>
        </div>

        <aside className="prompt-panel">
          <p className="eyebrow">Start with the prompt</p>
          <h2>{promptAccessLabel(record)}</h2>
          <p>
            {record.promptAvailability === "full"
              ? "The complete prompt or preserved research conversation is publicly available."
              : record.promptAvailability === "unavailable"
                ? "No complete public prompt or transcript was located during the research pass."
                : "The public source contains partial, representative, or method-level prompt material rather than a complete raw run."}
          </p>
          {prompt ? (
            <a className="prompt-button" href={prompt.url} target="_blank" rel="noreferrer">
              {promptAccessLabel(record)} <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span className="prompt-unavailable">Availability: {record.promptAvailability}</span>
          )}
          {prompt && <small>Source: {prompt.label}</small>}
        </aside>
      </section>

      <section className="quick-facts" aria-label="Record overview">
        <article><span>Outcome</span><strong>{outcomeLabels[record.outcome]}</strong></article>
        <article><span>Evidence</span><strong>{strongestEvidence(record)}</strong></article>
        <article><span>Mode</span><strong>{record.contributionMode}</strong></article>
        <article><span>Prompt</span><strong>{record.promptAvailability}</strong></article>
      </section>

      <div className="detail-content">
        <section className="detail-section detail-context">
          <p className="eyebrow">Editorial context</p>
          <h2>What happened</h2>
          <p className="large-copy">{record.editorialNote}</p>
          <div className="detail-caveat">
            <span>Keep in view</span>
            <p>{record.caveat}</p>
          </div>
        </section>

        <section className="detail-section">
          <p className="eyebrow">Chronology</p>
          <h2>Timeline</h2>
          <div className="record-timeline">
            {record.timeline.map((event, index) => (
              <article key={`${event.date}-${event.type}`}>
                <span className="timeline-index">{String(index + 1).padStart(2, "0")}</span>
                <time>{displayDate(event.date)}</time>
                <div>
                  <strong>{event.label}</strong>
                  <span>{humanize(event.type)} · {event.precision} date</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="detail-section">
          <p className="eyebrow">Trust boundaries</p>
          <h2>Validation</h2>
          <div className="validation-grid">
            {record.validation.map((item) => (
              <article key={`${item.type}-${item.status}`}>
                <span>{humanize(item.type)}</span>
                <strong>{humanize(item.status)}</strong>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="detail-section credits-section">
          <div>
            <p className="eyebrow">System</p>
            <h2>AI and tools</h2>
            <ul>{record.systems.map((system) => <li key={system}>{system}</li>)}</ul>
          </div>
          <div>
            <p className="eyebrow">People</p>
            <h2>Human contributors</h2>
            <ul>{record.people.map((person) => <li key={person}>{person}</li>)}</ul>
          </div>
          <div>
            <p className="eyebrow">Organizations</p>
            <h2>Affiliations</h2>
            {record.organizations.length ? (
              <ul>{record.organizations.map((organization) => <li key={organization}>{organization}</li>)}</ul>
            ) : <p>None recorded.</p>}
          </div>
        </section>

        <section className="detail-section sources-section">
          <p className="eyebrow">Primary materials</p>
          <h2>Sources and artifacts</h2>
          <div className="detail-sources">
            {record.sources.map((source, index) => (
              <a key={source.url} href={source.url} target="_blank" rel="noreferrer">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{source.label}</strong>
                <small>{humanize(source.kind)}</small>
                <i aria-hidden="true">↗</i>
              </a>
            ))}
          </div>
        </section>
      </div>

      <nav className="record-pagination" aria-label="Adjacent records">
        <Link href={`/records/${previous.id}`}>
          <span>← Previous record</span>
          <strong>{previous.title}</strong>
        </Link>
        <Link href={`/records/${next.id}`}>
          <span>Next record →</span>
          <strong>{next.title}</strong>
        </Link>
      </nav>

      <footer>
        <span>Prompts for Progress</span>
        <p>Documenting how AI-assisted research actually happens.</p>
        <Link href="/#records">All records ↑</Link>
      </footer>
    </main>
  );
}
