import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About · Prompts for Progress",
  description: "About the Prompts for Progress archive and its maintainer.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
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

      <article className="about-content">
        <p className="eyebrow">About</p>
        <h1>About Prompts for Progress</h1>
        <p className="about-intro">I’m Kevin Connolly, and Prompts for Progress is a personal project to make AI-assisted work in mathematics and the sciences easier to find, inspect, and learn from.</p>

        <p>The project grew out of an essay I wrote, <a href="https://www.kvncnnlly.com/2026-07-11-seti-for-ai-assisted-research/" target="_blank" rel="noreferrer">“SETI for AI-Assisted Research”</a>. Research attempts are increasingly happening through AI systems, but their prompts, workflows, failures, and intermediate lessons are often scattered or never documented. This archive is a small effort to improve that record.</p>

        <h2>About me</h2>
        <p>My background is in physics research, and I now work in the technology sector. I remain interested in how new tools might make serious research more open, legible, and collaborative. This archive is one small experiment in that direction.</p>

        <p className="about-contact">Questions, corrections, and suggestions are welcome. You can reach me at <a href="mailto:hbar@uw.edu">hbar@uw.edu</a> or <a href="https://x.com/wintercarver" target="_blank" rel="noreferrer">@wintercarver on X</a>.</p>
      </article>

      <footer>
        <span>Prompts for Progress</span>
        <p>A personal research archive.</p>
        <Link href="/">Archive home ↑</Link>
      </footer>
    </main>
  );
}
