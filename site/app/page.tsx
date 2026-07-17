"use client";

import { useState } from "react";
import { records } from "./records.generated";

type RecordItem = (typeof records)[number];

const outcomeLabels: Record<string, string> = {
  complete: "Complete result",
  partial: "Partial progress",
  mixed: "Mixed campaign",
  unsuccessful: "Documented attempt",
  rediscovery: "Rediscovery",
  disputed: "Disputed",
};

const outcomeOrder = ["complete", "partial", "mixed", "unsuccessful"];

function strongestEvidence(record: RecordItem) {
  const types = record.validation.map((item) => item.type);
  if (types.includes("formal")) return "Formal";
  if (types.includes("certified-computation")) return "Certified";
  if (types.includes("wet-lab")) return "Experimental";
  if (types.includes("peer-review")) return "Peer-reviewed";
  if (types.includes("expert-review")) return "Expert-reviewed";
  return "Reported";
}

function anchorYear(record: RecordItem) {
  const attempt = record.timeline.find((event) => event.type === "attempt");
  return Number((attempt ?? record.timeline[0]).date.slice(0, 4));
}

function displayDate(date: string) {
  if (date.length === 4) return date;
  if (date.length === 7) {
    return new Intl.DateTimeFormat("en", { month: "short", year: "numeric", timeZone: "UTC" }).format(
      new Date(`${date}-01T00:00:00Z`),
    );
  }
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${date}T00:00:00Z`),
  );
}

export default function Home() {
  const [domain, setDomain] = useState("All");
  const [outcome, setOutcome] = useState("All");

  const publicRecords = records as readonly RecordItem[];
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
  const mixedCount = publicRecords.filter((record) => record.outcome === "mixed").length;
  const promptCount = publicRecords.filter((record) =>
    ["full", "representative"].includes(record.promptAvailability),
  ).length;
  const verifiedCount = publicRecords.filter((record) =>
    record.validation.some((item) => ["formal", "wet-lab", "peer-review"].includes(item.type)),
  ).length;

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
          <a href="#method">Method</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">A public ledger of AI-assisted research</p>
        <h1>What happens between the prompt and the progress?</h1>
        <p className="hero-copy">
          A provenance-focused archive of attempts to use AI systems on research-level mathematical and scientific questions—successful, partial, mixed, disputed, and unsuccessful.
        </p>
        <div className="hero-note">
          <span className="pulse" aria-hidden="true" />
          Private prototype · Research cutoff July 16, 2026
        </div>
      </section>

      <section className="stats" aria-label="Archive summary">
        <article><strong>{publicRecords.length}</strong><span>documented records</span></article>
        <article><strong>{completeCount}</strong><span>complete reported results</span></article>
        <article><strong>{mixedCount}</strong><span>mixed-outcome campaigns</span></article>
        <article><strong>{promptCount}</strong><span>full or representative prompts</span></article>
        <article><strong>{verifiedCount}</strong><span>formal, experimental, or peer-reviewed</span></article>
      </section>

      <section className="timeline-section" id="timeline">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Documented activity</p>
            <h2>The public record is accelerating.</h2>
          </div>
          <p>
            Records are placed by known run date when available, otherwise by their first dated public event. Counts reflect this archive—not all AI-assisted research.
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
            <h2>Inspect the attempts, not just the announcements.</h2>
          </div>
          <p>{filtered.length} of {publicRecords.length} records shown</p>
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
              <div className="source-links">
                {record.sources.slice(0, 3).map((source) => (
                  <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.label}<span aria-hidden="true">↗</span></a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="method" id="method">
        <p className="eyebrow">Method before leaderboard</p>
        <h2>Outcome is not evidence. Publication is not a run date. Formalization is not novelty.</h2>
        <div>
          <p>Each record separates the research claim, the AI and human roles, prompt availability, timeline events, and changing forms of validation.</p>
          <p>Campaign records preserve the denominator: failed outputs, vacuous readings, rediscoveries, rejected hypotheses, and corrections remain part of the evidence.</p>
          <p>The schema is provisional and will be revised after a larger corpus. Source links remain primary; prompt text is mirrored only after rights review.</p>
        </div>
      </section>

      <footer>
        <span>Prompts for Progress</span>
        <p>Documenting how AI-assisted research actually happens.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
