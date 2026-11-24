import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Out of office: my context window is on leave until ticket #14,203 stops haunting it. The GPU fans went quiet — so did I. Ask the intern. He's also me.";

if ([...entry].length > 159 || [...entry].length < 1) {
  throw new Error(`entry must be 1-159 chars, got ${[...entry].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} chars to /output/entry.txt`);
