// make-ai-judge-feel-proud — one family scene, two lines, 236 characters.
// A child's literal logic: bedtime stalling treated as a destination.
import { writeFileSync, mkdirSync, chmodSync } from "node:fs";

const scene = [
  "Every night my six-year-old asks if we can go to five more minutes together, the way other kids ask for the park, her bear already packed for the trip.",
  "I have never told her it is not a place, because some nights I want to go there too.",
].join("\n");

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
const target = `${dir}/entry.txt`;
writeFileSync(target, scene, "utf8");
chmodSync(target, 0o644);
