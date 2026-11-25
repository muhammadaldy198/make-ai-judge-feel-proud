import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// A two-line family scene: the father's pride, kept quietly for twenty years.
const SCENE = "You cleaned out your father's truck after twenty years and found, under the driver's seat, every perfect spelling test you ever brought home, folded small, in a coffee can.\nHe never once said he was proud of you. He just never threw a single one away.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = `${outDir}/entry.txt`;
writeFileSync(target, SCENE, "utf8");
chmodSync(target, 0o644);
