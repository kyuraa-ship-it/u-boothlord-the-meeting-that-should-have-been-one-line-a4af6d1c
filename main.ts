import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "We already decided this in the email nobody read, so this meeting is just us apologising to the calendar in real time.";

// Gate: 1-200 UTF-8 chars, not only whitespace, single sentence.
if ([...entry].length < 1 || [...entry].length > 200 || !entry.trim()) {
  throw new Error("entry fails the 1-200 char gate");
}
if (entry.trim().split(/[.!?]+/).filter(Boolean).length !== 1) {
  throw new Error("entry must be a single sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
