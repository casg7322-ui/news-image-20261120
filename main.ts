// Entry program for the news-image-20261120 bounty.
// Copies the pre-rendered front page (entry.png, next to this file) into the
// directory named by MAKEFUN_OUTPUT_DIR (default /output), creating it if
// needed. It writes nothing anywhere else, and never writes to the working
// directory.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (!existsSync(targetDir)) {
  mkdirSync(targetDir, { recursive: true });
}
copyFileSync(source, join(targetDir, "entry.png"));
console.log(`copied entry.png to ${targetDir}`);
