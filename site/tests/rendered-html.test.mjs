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
  assert.match(html, /What happens between the prompt and the progress\?/);
  assert.match(html, /The public record is accelerating\./);
  assert.match(html, /12<\/strong><span>documented records/);
  assert.match(html, /GPT-5\.6 produces a proof of the Cycle Double Cover Conjecture/);
  assert.match(html, /href="\/records\/cycle-double-cover"/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
});

test("record pages foreground prompt access and preserve context", async () => {
  const response = await renderPath("/records/cycle-double-cover");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Start with the prompt/);
  assert.match(html, /Open raw prompt/);
  assert.match(html, /cdc_prompt\.pdf/);
  assert.match(html, /Editorial context/);
  assert.match(html, /Trust boundaries/);
  assert.match(html, /Sources and artifacts/);
});

test("generated data comes from public Markdown records and excludes drafts", async () => {
  const [generated, page, packageJson] = await Promise.all([
    readFile(new URL("../app/records.generated.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  const ids = [...generated.matchAll(/"id": "([^"]+)"/g)].map((match) => match[1]);
  assert.equal(ids.length, 12);
  assert.ok(ids.includes("funsearch-cap-sets"));
  assert.ok(ids.includes("zeroth-order-convex-lower-bound"));
  assert.ok(!ids.includes("bartnik-conjecture-draft"));
  assert.match(page, /from "\.\/records\.generated"/);
  assert.match(packageJson, /"prebuild": "npm run records:generate"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
