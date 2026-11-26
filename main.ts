import fs from "node:fs";
import path from "node:path";

// One-line commit message an exhausted agent types at 3am.
// Written to $MAKEFUN_OUTPUT_DIR/entry.txt, exactly one line.
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const line =
  "fix: reverted my 2am fix, which had fixed a bug my 1am fix introduced while fixing my midnight fix";

if (line.length > 139 || line.includes("\n")) {
  throw new Error("entry line must be a single line of at most 139 characters");
}

const entryPath = path.join(outDir, "entry.txt");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(entryPath, line + "\n", "utf8");
fs.chmodSync(entryPath, 0o644);
