import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Submit a record · Prompts for Progress",
  description: "Guidelines for proposing a documented AI-assisted research attempt.",
};

const requiredEvidence = [
  ["The problem", "Name the open problem, conjecture, benchmark, or research question. Include a reference link if one is easy to provide."],
  ["The prompt", "Share the prompt itself, a public link, or whatever prompt material you are permitted to provide. Model details are helpful but can be incomplete."],
  ["What happened", "Briefly describe the outcome and link any response, proof, code, experiment, transcript, or other artifact you have."],
  ["How to follow up", "Your GitHub account is usually enough. Add a preferred public contact method only if you want us to use something else."],
];

const submissionUrl = "https://github.com/wintercarver/prompts-for-progress/issues/new?template=record-submission.yml";

export default function SubmitPage() {
  return (
    <main className="submit-page">
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

      <section className="submit-hero">
        <p className="eyebrow">Submit a record</p>
        <h1>Share a documented<br />research attempt.</h1>
        <p>Start with the problem, the prompt, and what happened. We can follow up on dates, sources, validation, and other metadata.</p>
        <a className="primary-action" href="#issue-preview">See what to include <span>↓</span></a>
      </section>

      <section className="intake-principle">
        <strong>Submission</strong><span>→</span><strong>Quick review</strong><span>→</span><strong>Follow-up if needed</strong><span>→</span><strong>Draft record</strong>
      </section>

      <section className="submission-guidelines">
        <div className="section-heading light-heading">
          <div><p className="eyebrow">A short starting point</p><h2>Four things are enough to begin.</h2></div>
          <p>Submissions do not need to arrive as finished archive records. Specific links and artifacts are useful, but we can research and structure the remaining metadata afterward.</p>
        </div>
        <div className="evidence-grid">
          {requiredEvidence.map(([title, description], index) => (
            <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><strong>{title}</strong><p>{description}</p></article>
          ))}
        </div>
      </section>

      <section className="moderation-section">
        <p className="eyebrow">Preliminary scope</p>
        <h2>Keeping the first collection focused and useful.</h2>
        <div>
          <article><strong>Initial emphasis.</strong><p>For this early phase, priority goes to identifiable open or research-level problems in mathematics and science with a documented AI-assisted attempt.</p></article>
          <article><strong>Help with the details.</strong><p>After a quick review, an agent can locate sources, check for duplicates, organize metadata, and identify a few useful follow-up questions.</p></article>
          <article><strong>Scope is still developing.</strong><p>Not every submission will become a record, particularly when the research target or attempt cannot be identified clearly. Opening an issue is simply a starting point.</p></article>
        </div>
      </section>

      <section className="issue-preview" id="issue-preview">
        <div>
          <p className="eyebrow">GitHub issue intake</p>
          <h2>A brief submission form.</h2>
          <p>The form asks for enough information to start a review. You will need a GitHub account to open an issue.</p>
        </div>
        <ol>
          <li>Problem or research question</li>
          <li>Prompt or prompt link</li>
          <li>Outcome and any available artifacts</li>
          <li>Submitter relationship and a way to follow up</li>
        </ol>
        <div className="optional-fields">
          <strong>Helpful, but optional</strong>
          <span>Attempt date · model and configuration · duration · success criterion · validation · contributors · permission details</span>
        </div>
        <a className="primary-action issue-submit" href={submissionUrl} target="_blank" rel="noreferrer">
          Open submission issue <span>↗</span>
        </a>
      </section>

      <section className="submission-scope-note">
        <strong>Please do not post confidential prompts or private transcripts to a public issue.</strong>
        <p>A private intake path can be added later for sensitive cases. For the initial release, the GitHub form is intended only for material that can be discussed openly.</p>
      </section>

      <footer>
        <span>Prompts for Progress</span>
        <p>A lightweight archive of prompts and documented research attempts.</p>
        <Link href="/">Archive home ↑</Link>
      </footer>
    </main>
  );
}
