"use client";

import { useState } from "react";
import Link from "next/link";
import { problems, prompts, records } from "./records.generated";
import {
  displayDate,
  outcomeLabels,
  outcomeOrder,
  strongestEvidence,
  type ArchiveRecord,
} from "./record-utils";

function anchorYear(record: ArchiveRecord) {
  const attempt = record.timeline.find((event) => event.type === "attempt");
  return Number((attempt ?? record.timeline[0]).date.slice(0, 4));
}

export default function Home() {
  const [domain, setDomain] = useState("All");
  const [outcome, setOutcome] = useState("All");

  const publicRecords = records as readonly ArchiveRecord[];
  const domains = ["All", ...Array.from(new Set(publicRecords.map((record) => record.domain))).sort()];
  const years = [2023, 2024, 2025, 2026];

  const filtered = publicRecords.filter(
    (record) =>
      (domain === "All" || record.domain === domain) &&
      (outcome === "All" || record.outcome === outcome),
  );

  const yearly = years.map((year) => {
    const inYear = publicRecords.filter((record) => anchorYear(record) === year);
    return {
      year,
      total: inYear.length,
      groups: outcomeOrder.map((status) => ({
        status,
        count: inYear.filter((record) => record.outcome === status).length,
      })),
    };
  });
  const maxYear = Math.max(...yearly.map((item) => item.total), 1);

  const completeCount = publicRecords.filter((record) => record.outcome === "complete").length;
  const documentedAttemptCount = publicRecords.filter((record) => record.outcome === "unsuccessful").length;

  return (
    <main>
      <header className="masthead">
        <a className="wordmark" href="#top" aria-label="Prompts for Progress home">
          <span className="wordmark-mark">PƒP</span>
          <span>Prompts for Progress</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#timeline">Timeline</a>
          <a href="#records">Records</a>
          <Link href="/problems">Problems</Link>
          <Link href="/data">Data</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">AI-assisted research in mathematics and the sciences</p>
        <h1>An archive of attempts to solve research problems with AI.</h1>
        <p className="hero-copy">
          AI-assisted research is accelerating, but its prompts, methods, and outcomes are scattered. Prompts for Progress collects them in context so researchers can study how the work is being done, learn from prior attempts, and plan better-informed work of their own.
        </p>
        <div className="hero-meta">
          <div className="hero-note">
            <span className="pulse" aria-hidden="true" />
            Private prototype · Research cutoff July 20, 2026
          </div>
          <a className="hero-browse" href="#records">Browse prompts and attempts <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="stats" aria-label="Archive summary">
        <article><strong>{publicRecords.length}</strong><span>documented records</span></article>
        <article><strong>{problems.length}</strong><span>tracked problems and collections</span></article>
        <article><strong>{completeCount}</strong><span>complete reported results</span></article>
        <article><strong>{documentedAttemptCount}</strong><span>documented attempts without a result</span></article>
        <article><strong>{prompts.length}</strong><span>locally preserved full prompts</span></article>
      </section>

      <section className="data-callout">
        <div>
          <p className="eyebrow">Use the complete archive</p>
          <h2>Clone the repository and work with every prompt at once.</h2>
        </div>
        <pre><code>git clone https://github.com/wintercarver/prompts-for-progress.git</code></pre>
        <Link href="/data">Work with the data <span>→</span></Link>
      </section>

      <section className="problems-callout">
        <div>
          <p className="eyebrow">Problems, not just announcements</p>
          <h2>Follow one question across every attempt.</h2>
        </div>
        <p>Use the problems index to see which approaches have been tried on a question and how their outcomes differ.</p>
        <Link href="/problems">Open problems index <span>→</span></Link>
      </section>

      <section className="timeline-section" id="timeline">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Documented activity</p>
            <h2>The public record is accelerating.</h2>
          </div>
          <p>
            The timeline shows documented activity using the known run date when available, otherwise the first dated public event. Counts reflect this archive rather than all AI-assisted research.
          </p>
        </div>

        <div className="chart-shell" role="img" aria-label="Stacked bars showing documented records increasing from 2023 through 2026">
          <div className="chart-grid" aria-hidden="true">
            <span /><span /><span /><span />
          </div>
          <div className="bars">
            {yearly.map((item) => (
              <div className="year-column" key={item.year}>
                <div className="bar-count">{item.total || "—"}</div>
                <div className="bar-track">
                  <div className="bar-stack" style={{ height: `${Math.max((item.total / maxYear) * 100, item.total ? 12 : 0)}%` }}>
                    {item.groups.map((group) =>
                      group.count ? (
                        <span
                          className={`bar-segment outcome-${group.status}`}
                          key={group.status}
                          style={{ flex: group.count }}
                          title={`${group.count} ${outcomeLabels[group.status]?.toLowerCase()}`}
                        />
                      ) : null,
                    )}
                  </div>
                </div>
                <strong>{item.year}</strong>
              </div>
            ))}
          </div>
          <div className="legend">
            {outcomeOrder.map((status) => (
              <span key={status}><i className={`outcome-${status}`} />{outcomeLabels[status]}</span>
            ))}
          </div>
        </div>

        <div className="event-strip" aria-label="Selected archive events">
          {publicRecords
            .flatMap((record) => record.timeline.map((event) => ({ ...event, title: record.title })))
            .filter((event) => event.date.length === 10)
            .sort((a, b) => a.date.localeCompare(b.date))
            .slice(-7)
            .map((event) => (
              <article key={`${event.title}-${event.date}-${event.type}`}>
                <time>{displayDate(event.date)}</time>
                <strong>{event.label}</strong>
                <span>{event.title}</span>
              </article>
            ))}
        </div>
      </section>

      <section className="records-section" id="records">
        <div className="section-heading records-heading">
          <div>
            <p className="eyebrow">Seed corpus</p>
            <h2>Study the prompts, methods, and outcomes together.</h2>
          </div>
          <p>Browse {filtered.length} of {publicRecords.length} records. Each full record keeps the prompt close to its context and evidence.</p>
        </div>

        <div className="filters" aria-label="Filter records">
          <div>
            <span>Domain</span>
            {domains.map((item) => (
              <button className={domain === item ? "active" : ""} key={item} onClick={() => setDomain(item)}>{item}</button>
            ))}
          </div>
          <div>
            <span>Outcome</span>
            {["All", ...outcomeOrder].map((item) => (
              <button className={outcome === item ? "active" : ""} key={item} onClick={() => setOutcome(item)}>
                {item === "All" ? "All" : outcomeLabels[item]}
              </button>
            ))}
          </div>
        </div>

        <div className="record-grid">
          {filtered.map((record, index) => (
            <article className="record-card" key={record.id}>
              <Link className="card-link" href={`/records/${record.id}`} aria-label={`View full record: ${record.title}`} />
              <div className="card-index">{String(index + 1).padStart(2, "0")}</div>
              <div className="card-meta">
                <span className={`status-pill outcome-${record.outcome}`}>{outcomeLabels[record.outcome]}</span>
                <span>{record.domain} · {record.field}</span>
              </div>
              <h3>{record.title}</h3>
              <p>{record.summary}</p>
              <dl>
                <div><dt>System</dt><dd>{record.systems.join(", ")}</dd></div>
                <div><dt>Prompt</dt><dd>{record.promptAvailability}</dd></div>
                <div><dt>Evidence</dt><dd>{strongestEvidence(record)}</dd></div>
                <div><dt>First dated event</dt><dd>{displayDate(record.timeline[0].date)}</dd></div>
              </dl>
              <p className="caveat"><strong>Keep in view:</strong> {record.caveat}</p>
              <div className="card-footer">
                <span>View full record</span>
                <span aria-hidden="true">→</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="method" id="method">
        <p className="eyebrow">About the archive</p>
        <h2>A reference set of research problems, prompts, attempts, and outcomes.</h2>
        <div>
          <p>Each record brings together the problem targeted, the prompt or workflow, the reported outcome, contributors, dates, source material, and available validation. Together, they make it easier to compare how researchers frame problems, direct AI systems, judge outputs, and report unsuccessful attempts.</p>
          <p>The collection includes successes, partial progress, disputed claims, rediscoveries, and documented attempts that produced no result.</p>
          <p>The metadata remains provisional while the corpus grows. Primary sources stay linked, and prompt text is mirrored only when permission or licensing allows it.</p>
        </div>
      </section>

      <section className="submission-cta">
        <p className="eyebrow">Contribute a record</p>
        <h2>Know of another documented problem, prompt, and outcome?</h2>
        <Link className="primary-action" href="/submit">Submission guidelines <span>→</span></Link>
      </section>

      <footer>
        <span>Prompts for Progress</span>
        <p>Documenting how AI-assisted research actually happens.</p>
        <Link href="/about">About the project →</Link>
      </footer>
    </main>
  );
}
