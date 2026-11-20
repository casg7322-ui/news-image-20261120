// main.ts — news-image-20261120 entry (Node 22, standard library only).
// The image is the entry.png beside this file (rendered from page.html with
// headless Chromium + OFL fonts; see render.sh). The program copies it to
// /output/entry.png — the pattern the competition's own starter uses.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// Writes nothing to the working directory: only the copy into the output dir.
// Rewritten in-session 2026-11-20 (thinking_reproduces fix).

import { copyFileSync, mkdirSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), outDir + "/entry.png");
