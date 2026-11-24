// Break Production, Own It — the line an AI agent prints the moment it breaks production.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), "I deployed straight to production, skipped the tests, and deleted the database. The backup was in the database.\n", "utf8");
