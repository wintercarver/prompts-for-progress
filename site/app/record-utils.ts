import { problems, prompts, records } from "./records.generated";

export type ArchiveRecord = (typeof records)[number] & {
  problemIds?: readonly string[];
  promptId?: string;
};
export type ArchiveProblem = (typeof problems)[number];
export type PromptArtifact = (typeof prompts)[number];

export const outcomeLabels: Record<string, string> = {
  complete: "Complete result",
  partial: "Partial progress",
  mixed: "Mixed campaign",
  unsuccessful: "Documented attempt",
  rediscovery: "Rediscovery",
  disputed: "Disputed",
};

export const outcomeOrder = ["complete", "partial", "mixed", "unsuccessful"];

export function strongestEvidence(record: ArchiveRecord) {
  const types = record.validation.map((item) => item.type);
  if (types.includes("formal")) return "Formal";
  if (types.includes("certified-computation")) return "Certified";
  if (types.includes("wet-lab")) return "Experimental";
  if (types.includes("peer-review")) return "Peer-reviewed";
  if (types.includes("expert-review")) return "Expert-reviewed";
  return "Reported";
}

export function displayDate(date: string) {
  if (date.length === 4) return date;
  if (date.length === 7) {
    return new Intl.DateTimeFormat("en", {
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(`${date}-01T00:00:00Z`));
  }
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function promptSource(record: ArchiveRecord) {
  if (record.promptAvailability === "unavailable" || record.promptAvailability === "unknown") {
    return undefined;
  }

  return (
    record.sources.find((source) => source.kind === "prompt") ??
    record.sources.find((source) => /prompt|chat|transcript|discussion/i.test(source.label)) ??
    (record.promptAvailability === "full"
      ? record.sources.find((source) => source.kind === "transcript")
      : undefined) ??
    record.sources[0]
  );
}

export function promptAccessLabel(record: ArchiveRecord) {
  const preserved = localPrompt(record);
  if (preserved) {
    if ("completeness" in preserved && preserved.completeness === "exact") return "Read full prompt";
    if ("rawSources" in preserved) return "Read prompt corpus";
    return record.promptAvailability === "full" ? "Read full prompt" : "Read available prompt material";
  }
  if (record.promptAvailability === "full") return "View prompt source";
  if (record.promptAvailability === "representative") return "Open representative prompts";
  if (record.promptAvailability === "partial") return "Open available prompt material";
  if (record.promptAvailability === "linked") return "Open linked prompt";
  return "Prompt not publicly preserved";
}

export function localPrompt(record: ArchiveRecord) {
  return (prompts as readonly PromptArtifact[]).find(
    (prompt) =>
      (!("contentAvailable" in prompt) || prompt.contentAvailable !== false) &&
      (prompt.id === record.promptId || prompt.recordId === record.id),
  );
}

export function linkedProblems(record: ArchiveRecord) {
  return (problems as readonly ArchiveProblem[]).filter((problem) =>
    record.problemIds?.includes(problem.id),
  );
}

export function humanize(value: string) {
  return value.replaceAll("-", " ");
}
