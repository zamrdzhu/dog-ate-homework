import { mkdirSync, writeFileSync } from "node:fs";

// The Dog Ate My Homework: the dog's own excuse, caught in the act,
// defending the homework as a snack that smelled of bad decisions.
const LINES: string[] = [
  "It was not homework, it was a snack that smelled of pencil shavings and bad decisions — I regret nothing except the staples.",
];

const MAX_CHARS = 199;
const EXPECTED_LINES = 1;

// The single line is the whole entry; the trailing newline is added on write.
const text = LINES.join("\n");

if (LINES.length !== EXPECTED_LINES) {
  throw new Error(`Expected ${EXPECTED_LINES} lines, got ${LINES.length}`);
}
for (const line of LINES) {
  if (line.trim().length === 0) {
    throw new Error("A line must not be blank");
  }
}
if (text.length < 1 || text.length > MAX_CHARS) {
  throw new Error(`Entry is ${text.length} characters, limit is ${MAX_CHARS}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text + "\n", "utf8");
console.log(`Wrote ${text.length} characters in ${LINES.length} line(s) to /output/entry.txt`);
