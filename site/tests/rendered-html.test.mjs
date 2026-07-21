import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

async function renderPath(pathname) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the archive home page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Prompts for Progress<\/title>/i);
  assert.match(html, /An archive of attempts to solve research problems with AI/);
  assert.match(html, /prompts, methods, and outcomes are scattered/);
  assert.match(html, /researchers can study how the work is being done/);
  assert.match(html, /Browse prompts and attempts/);
  assert.match(html, /href="#records"/);
  assert.doesNotMatch(html, /What happens between the prompt and the progress\?/);
  assert.match(html, /The public record is accelerating\./);
  assert.match(html, /24<\/strong><span>documented records/);
  assert.match(html, /A reference set of research problems, prompts, attempts, and outcomes/);
  assert.match(html, /Clone the repository and work with every prompt at once/);
  assert.match(html, /git clone https:\/\/github\.com\/wintercarver\/prompts-for-progress\.git/);
  assert.match(html, /href="\/data"/);
  assert.match(html, /Submission guidelines/);
  assert.doesNotMatch(html, /hero-actions/);
  assert.match(html, /GPT-5\.6 produces a proof of the Cycle Double Cover Conjecture/);
  assert.match(html, /A-Lab GPSS runs 352 spinel-electrolyte experiments/);
  assert.match(html, /href="\/records\/cycle-double-cover"/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
});

test("data and about routes explain how to reuse the archive and who maintains it", async () => {
  const [dataResponse, aboutResponse] = await Promise.all([
    renderPath("/data"),
    renderPath("/about"),
  ]);
  assert.equal(dataResponse.status, 200);
  assert.equal(aboutResponse.status, 200);

  const [dataHtml, aboutHtml] = await Promise.all([
    dataResponse.text(),
    aboutResponse.text(),
  ]);

  assert.match(dataHtml, /Fetch all the data/);
  assert.match(dataHtml, /git clone https:\/\/github\.com\/wintercarver\/prompts-for-progress\.git/);
  assert.match(dataHtml, /prompts\/corpus\.jsonl/);
  assert.match(dataHtml, /prompts\/corpus-index\.json/);
  assert.match(dataHtml, /contains only material marked/);
  assert.match(dataHtml, /approved/);
  assert.match(dataHtml, /jq -s/);

  assert.match(aboutHtml, /About Prompts for Progress/);
  assert.match(aboutHtml, /SETI for AI-Assisted Research/);
  assert.match(aboutHtml, /My background is in physics research/);
  assert.match(aboutHtml, /technology sector/);
  assert.doesNotMatch(aboutHtml, /PhD|University of Washington/);
  assert.match(aboutHtml, /mailto:hbar@uw\.edu/);
  assert.match(aboutHtml, /https:\/\/x\.com\/wintercarver/);
});

test("record pages foreground prompt access and preserve context", async () => {
  const response = await renderPath("/records/cycle-double-cover");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Start with the prompt/);
  assert.match(html, /View prompt source/);
  assert.doesNotMatch(html, /Preserved artifact/);
  assert.match(html, /cdc_prompt\.pdf/);
  assert.match(html, /Editorial context/);
  assert.match(html, /Trust boundaries/);
  assert.match(html, /Sources and artifacts/);
});

test("new campaign and documented-attempt records retain denominators and target misses", async () => {
  const [campaignResponse, attemptResponse] = await Promise.all([
    renderPath("/records/alab-gpss-spinel-campaign"),
    renderPath("/records/earthlink-atlantic-nino-attempt"),
  ]);
  assert.equal(campaignResponse.status, 200);
  assert.equal(attemptResponse.status, 200);

  const [campaignHtml, attemptHtml] = await Promise.all([
    campaignResponse.text(),
    attemptResponse.text(),
  ]);
  assert.match(campaignHtml, /352-experiment lithium-halide campaign/);
  assert.match(campaignHtml, /5\.33%/);
  assert.match(campaignHtml, /Code and workflow prompts/);
  assert.match(attemptHtml, /Documented attempt/);
  assert.match(attemptHtml, /missed the stated threshold/);
  assert.match(attemptHtml, /Original paper with exact research request/);
});

test("record pages expose exact, bundled, and unavailable prompt states", async () => {
  const [exactResponse, bundleResponse, unavailableResponse] = await Promise.all([
    renderPath("/records/gpt4-breast-cancer-drug-pairs"),
    renderPath("/records/sciexplorer-physics-models"),
    renderPath("/records/nesterov-point-convergence"),
  ]);

  assert.equal(exactResponse.status, 200);
  assert.equal(bundleResponse.status, 200);
  assert.equal(unavailableResponse.status, 200);

  const [exactHtml, bundleHtml, unavailableHtml] = await Promise.all([
    exactResponse.text(),
    bundleResponse.text(),
    unavailableResponse.text(),
  ]);

  assert.match(exactHtml, /Read full prompt/);
  assert.match(exactHtml, /Initial drug-combination hypotheses/);
  assert.match(exactHtml, /CC BY 4\.0/);
  assert.match(bundleHtml, /Read prompt corpus/);
  assert.match(bundleHtml, /computational physicist/);
  assert.doesNotMatch(bundleHtml, /1682522/);
  assert.match(unavailableHtml, /Prompt not publicly preserved/);
  assert.doesNotMatch(unavailableHtml, /href="#full-prompt"/);
});

test("problem and submission routes explain the archive workflow", async () => {
  const [problemsResponse, submitResponse] = await Promise.all([
    renderPath("/problems"),
    renderPath("/submit"),
  ]);
  assert.equal(problemsResponse.status, 200);
  assert.equal(submitResponse.status, 200);

  const [problemsHtml, submitHtml] = await Promise.all([
    problemsResponse.text(),
    submitResponse.text(),
  ]);
  assert.match(problemsHtml, /One question[\s\S]*Every attempt/);
  assert.match(problemsHtml, /Bartnik admissible-extension conjecture/);
  assert.match(problemsHtml, /Eight-month Atlantic Niño forecasting/);
  assert.match(problemsHtml, /Attempt outcomes/);
  assert.match(submitHtml, /Share a documented[\s\S]*research attempt/);
  assert.match(submitHtml, /Four things are enough to begin/);
  assert.match(submitHtml, /Keeping the first collection focused and useful/);
  assert.match(submitHtml, /A brief submission form/);
  assert.match(submitHtml, /Open submission issue/);
  assert.match(submitHtml, /https:\/\/github\.com\/wintercarver\/prompts-for-progress\/issues\/new\?template=record-submission\.yml/);
  assert.doesNotMatch(submitHtml, /Submission intake is not yet open/);
  assert.match(submitHtml, /Helpful, but optional/);
  assert.doesNotMatch(submitHtml, /not an open publishing platform/i);
});

test("generated data comes from Markdown records, problems, and prompts", async () => {
  const [generated, page, packageJson, corpusIndexSource, corpusSource, favicon] = await Promise.all([
    readFile(new URL("../app/records.generated.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../../prompts/corpus-index.json", import.meta.url), "utf8"),
    readFile(new URL("../../prompts/corpus.jsonl", import.meta.url), "utf8"),
    readFile(new URL("../app/icon.svg", import.meta.url), "utf8"),
  ]);

  const corpusIndex = JSON.parse(corpusIndexSource);
  const corpusRows = corpusSource.trim().split("\n").map((line) => JSON.parse(line));

  assert.match(generated, /export const records =/);
  assert.match(generated, /"id": "bartnik-admissible-extension-attempt"/);
  assert.match(generated, /export const problems =/);
  assert.match(generated, /"id": "bartnik-admissible-extension"/);
  assert.match(generated, /export const prompts =/);
  assert.match(generated, /"publicationStatus": "approved"/);
  assert.doesNotMatch(generated, /bartnik-conjecture-draft/);
  assert.match(page, /from "\.\/records\.generated"/);
  assert.match(packageJson, /"prebuild": "npm run records:generate"/);
  assert.match(packageJson, /"prompts:generate": "node scripts\/generate-prompt-corpus\.mjs"/);
  assert.equal(corpusIndex.length, 13);
  assert.equal(corpusRows.length, 132);
  assert.ok(corpusRows.some((row) => row.recordId === "bartnik-admissible-extension-attempt" && row.content.includes("Resolve the Bartnik admissible-extension conjecture completely")));
  assert.ok(corpusRows.some((row) => row.recordId === "gpt4-breast-cancer-drug-pairs" && row.content.includes("selectively target MCF7")));
  assert.ok(corpusRows.some((row) => row.recordId === "openai-jacobian-conjecture" && row.content.includes("Resolve the Jacobian Conjecture completely")));
  assert.ok(!corpusRows.some((row) => row.recordId === "zeroth-order-convex-lower-bound"));
  assert.deepEqual(
    corpusIndex.filter((entry) => entry.contentAvailable === false).map((entry) => entry.recordId).sort(),
    ["aletheia-erdos-sweep", "nesterov-point-convergence"],
  );
  assert.ok(corpusRows.every((row) => row.publicationStatus === "approved"));
  assert.doesNotMatch(generated, /private-rights-review/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(favicon, /<svg/);
  assert.match(favicon, /#184b35/);
});
