import type { Metadata } from "next";
import Link from "next/link";
import { problems, records } from "../records.generated";
import { outcomeLabels, outcomeOrder, type ArchiveRecord } from "../record-utils";

export const metadata: Metadata = {
  title: "Problems index · Prompts for Progress",
  description: "Research problems and questions indexed by their documented AI-assisted attempts.",
};

function attemptsFor(problemId: string) {
  return (records as readonly ArchiveRecord[]).filter((record) => record.problemIds?.includes(problemId));
}

export default function ProblemsPage() {
  const rows = [...problems].sort((a, b) => a.title.localeCompare(b.title));
  const linkedAttempts = rows.reduce((sum, problem) => sum + attemptsFor(problem.id).length, 0);

  return (
    <main className="index-page">
      <header className="masthead detail-masthead">
        <Link className="wordmark" href="/" aria-label="Prompts for Progress home">
          <span className="wordmark-mark">PƒP</span>
          <span>Prompts for Progress</span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/#records">Records</Link>
          <Link href="/problems">Problems</Link>
          <Link href="/data">Data</Link>
          <Link className="nav-cta" href="/feeling-lucky">Feeling lucky</Link>
          <Link href="/about">About</Link>
          <Link href="/submit">Submit</Link>
        </nav>
      </header>

      <section className="index-hero">
        <p className="eyebrow">Problems index</p>
        <h1>One question.<br />Every attempt.</h1>
        <p>{"A problem's status is separate from any attempt's outcome. Counts below describe this archive, not the totality of research activity."}</p>
      </section>

      <section className="index-stats" aria-label="Problem index summary">
        <article><strong>{problems.length}</strong><span>problems and collections</span></article>
        <article><strong>{linkedAttempts}</strong><span>record-to-problem links</span></article>
        <article><strong>{problems.filter((problem) => problem.status === "open").length}</strong><span>explicitly open problems</span></article>
      </section>

      <section className="problem-index" aria-labelledby="problem-index-title">
        <div className="section-heading light-heading">
          <div>
            <p className="eyebrow">Canonical targets</p>
            <h2 id="problem-index-title">Browse the research questions.</h2>
          </div>
          <p>Collections remain aggregated when a campaign spans many problems without enough statement-level evidence for individual pages.</p>
        </div>

        <div className="problem-table" role="list">
          <div className="problem-table-head" aria-hidden="true">
            <span>Problem</span><span>Status</span><span>Attempt outcomes</span><span>Total</span>
          </div>
          {rows.map((problem) => {
            const attempts = attemptsFor(problem.id);
            return (
              <article className="problem-row" role="listitem" key={problem.id}>
                <Link className="problem-row-link" href={`/problems/${problem.id}`} aria-label={`View problem: ${problem.title}`} />
                <div>
                  <small>{problem.kind.replaceAll("-", " ")} · {problem.field}</small>
                  <strong>{problem.title}</strong>
                  <p>{problem.summary}</p>
                </div>
                <div>
                  <span className={`problem-status status-${problem.status}`}>{problem.statusLabel}</span>
                  <small>As of {problem.statusAsOf}</small>
                </div>
                <div className="outcome-counts">
                  {outcomeOrder.map((outcome) => {
                    const count = attempts.filter((record) => record.outcome === outcome).length;
                    return count ? <span className={`outcome-${outcome}`} key={outcome}>{count} {outcomeLabels[outcome]}</span> : null;
                  })}
                </div>
                <div className="attempt-total"><strong>{attempts.length}</strong><span>attempt{attempts.length === 1 ? "" : "s"}</span></div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="submission-cta compact-cta">
        <p className="eyebrow">Missing an attempt?</p>
        <h2>Help us connect another documented run to the right problem.</h2>
        <Link className="primary-action" href="/submit">Review submission guidelines <span>→</span></Link>
      </section>

      <footer>
        <span>Prompts for Progress</span>
        <p>Documenting how AI-assisted research actually happens.</p>
        <Link href="/">Archive home ↑</Link>
      </footer>
    </main>
  );
}
