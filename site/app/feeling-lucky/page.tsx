import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Feeling lucky? · Prompts for Progress",
  description: "A practical launch packet for using the Prompts for Progress archive to prepare an AI-assisted research attempt.",
};

const repositoryUrl = "https://github.com/wintercarver/prompts-for-progress";

const agentBrief = `Use the Prompts for Progress repository at its current checked-out commit to prepare a research-prompt package for me. This is a planning task, not a request to claim a solution.

First, read playbooks/problem-selection-and-prompt-design.md. Treat the archive as evidence about prior attempts and prompt design, not as evidence that a result is new or correct. Use the dated prompt-methods synthesis only where its rights boundary permits; otherwise make a compact, problem-specific evidence brief from relevant public cases.

Mode: [DESIGN FOR THE PRESELECTED PROBLEM: name and authoritative source / SCREEN THE ARCHIVE FOR A PROBLEM].
Preferences: [field, background, tools available, budget, and anything to avoid].

If screening, select only candidates with a stable statement, a realistic validation path, and a useful research leverage point. Keep an exclusion ledger. If I named a problem, skip broad screening and focus on its statement, prior attempts, and verification model.

Work in a separate local workspace. Do not add, commit, or alter files in the Prompts for Progress repository.

Return a reusable prompt package with four clearly labeled files:
1. research-dossier.md — statement, baseline, source links, claim boundaries, transferable methods, resource envelope, and stopping rules.
2. system-prompt.md — a complete prompt for a fresh local or cloud agent run. Require a route and artifact ledger, explicit hypotheses, cheap falsification checks, a validation plan, durable checkpoints, and an honest unresolved handoff.
3. run.md — exact instructions for starting the run in Codex, Claude Code, or a cloud agent, including the working directory and where to save artifacts.
4. validation-plan.md — success and non-success conditions, what can be checked independently, what needs expert or literature review, and what must not be claimed.

Do not start the research run yet. First show the candidate choice or dossier and the full system prompt for my approval. Do not promise a proof, a discovery, novelty, or independent verification that has not occurred.`;

const deliverables = [
  ["01", "Research dossier", "A concise statement, baseline, sources, claimed endpoint, non-claims, budget, and stopping rules."],
  ["02", "System prompt", "One complete, stored prompt for a fresh agent run—tailored to the problem rather than a generic command to solve it."],
  ["03", "Run instructions", "The exact local or cloud starting procedure, working directory, artifact locations, and human approval gate."],
  ["04", "Validation plan", "What counts as evidence, what can falsify a route, who or what can check it, and what remains uncertain."],
];

const designMoves = [
  ["A real target", "Define the statement, success condition, and non-solutions before a model begins to improvise around them."],
  ["Routes, not vibes", "Maintain competing hypotheses and a route ledger. Prefer a cheap calculation, counterexample search, or special case that can kill a weak direction early."],
  ["Artifacts over confidence", "Require a proof obligation, test, simulator result, certificate, or other durable checkpoint at each handoff."],
  ["A hard boundary", "Separate model critique from independent validation, preserve uncertainty, and stop when the useful budget is spent."],
];

export default function FeelingLuckyPage() {
  return (
    <main className="lucky-page">
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

      <section className="lucky-hero">
        <p className="eyebrow">A guide for an informed long shot</p>
        <h1>Feeling lucky?</h1>
        <p>You have an ambitious model, a token budget, and an open problem somewhere on the horizon. You, unfortunately, have no idea what&apos;s going on, which is why you are here. But your dedication to discovery and knowledge is commendable. You are taking an informed swing—not running a research program or solving a theorem by declaration. The archive helps your agent choose a target, borrow useful prompt structure, and make the guess explicit enough to inspect, check, and learn from.</p>
      </section>

      <section className="lucky-flow" aria-label="Feeling Lucky workflow">
        <span>Choose a problem</span><i>→</i><span>Study the archive</span><i>→</i><span>Build a prompt package</span><i>→</i><span>Run with a checkable plan</span>
      </section>

      <section className="lucky-brief" aria-labelledby="agent-brief-title">
        <div>
          <p className="eyebrow">The handoff</p>
          <h2 id="agent-brief-title">Point an agent at this repository.</h2>
          <p>Clone the archive, then give it the brief on the right. The result should be a stored system prompt and a small research dossier—not a premature claim that the problem is solved.</p>
          <a href={repositoryUrl} target="_blank" rel="noreferrer">Open the repository ↗</a>
        </div>
        <div className="lucky-code-stack">
          <pre><code>{`git clone ${repositoryUrl}.git\ncd prompts-for-progress`}</code></pre>
          <pre><code>{agentBrief}</code></pre>
        </div>
      </section>

      <section className="lucky-lanes">
        <div className="section-heading light-heading">
          <div><p className="eyebrow">Two ways in</p><h2>Bring a question, or let the archive suggest one.</h2></div>
          <p>The same prompt-design playbook supports both. A problem you already care about deserves a focused dossier; a speculative run deserves a screen before it spends a serious budget.</p>
        </div>
        <div className="lucky-lane-grid">
          <article>
            <span>01</span>
            <strong>I have a problem.</strong>
            <p>Name the conjecture or research question, include an authoritative source, and ask the agent to design around its actual success and validation conditions.</p>
            <code>DESIGN FOR THE PRESELECTED PROBLEM</code>
            <Link href="/problems">Browse indexed problems →</Link>
          </article>
          <article>
            <span>02</span>
            <strong>Pick for me.</strong>
            <p>Ask the agent to screen the archive using the problem-selection criteria, record exclusions, and recommend a target that can generate useful checkable artifacts even if it remains unresolved.</p>
            <code>SCREEN THE ARCHIVE FOR A PROBLEM</code>
            <Link href="/data">Inspect the corpus →</Link>
          </article>
        </div>
      </section>

      <section className="lucky-deliverables">
        <div className="section-heading">
          <div><p className="eyebrow">What you should get back</p><h2>A prompt package you can save, inspect, and run.</h2></div>
          <p>For a local agent, these are files in a separate working directory. For a cloud agent, ask for the same four Markdown blocks, save them locally, and approve the system prompt before spending the run budget.</p>
        </div>
        <div className="lucky-deliverable-grid">
          {deliverables.map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span>
              <strong>{title}</strong>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lucky-methods">
        <div>
          <p className="eyebrow">Why this is more than “solve it, make no mistakes”</p>
          <h2>A long prompt is not a research method.</h2>
          <p>The archive’s value is not a magic phrase. It is a record of practices that turn an open-ended request into state a person, model, or external tool can inspect. The playbook adapts those practices to the target you choose.</p>
        </div>
        <div className="lucky-method-grid">
          {designMoves.map(([title, description]) => (
            <article key={title}><strong>{title}</strong><p>{description}</p></article>
          ))}
        </div>
      </section>

      <section className="lucky-reality">
        <strong>This is a disciplined way to buy a lottery ticket, not a promise that one will win.</strong>
        <p>A better prompt cannot settle an open problem by itself. It can make a speculative attempt more legible, more falsifiable, and more useful if it fails. Any claim of novelty, correctness, or resolution still needs the appropriate prior-art check, validation, and often expert review.</p>
      </section>

      <section className="lucky-next">
        <p className="eyebrow">If something real happens</p>
        <h2>Keep the prompt, artifacts, and outcome.</h2>
        <p>Most runs should stay in your own workspace. If one becomes a documented, shareable attempt, the archive has a submission path for the problem, prompt, evidence, and outcome.</p>
        <Link className="primary-action" href="/submit">Read submission guidelines <span>→</span></Link>
      </section>

      <footer>
        <span>Prompts for Progress</span>
        <p>Use the archive to plan a careful attempt before you spend the tokens.</p>
        <Link href="/">Archive home ↑</Link>
      </footer>
    </main>
  );
}
