/**
 * Export the question bank to JSON.
 * Run with:  npm run db:export
 *
 * Outputs: questions-export.json  (git-ignored)
 *
 * Image fields are normalised to their original asset filename
 * (e.g. "sakerhet-olycka-forklaring.png") so the JSON stays
 * human-readable and portable.
 */

import path from "path";
import { writeFileSync } from "fs";
import { questionGroups } from "../src/data/questionBank";

/**
 * Normalise an image value coming from the PNG loader.
 * The loader already returns the bare filename (e.g. "sakerhet-olycka-forklaring.png"),
 * so we only need to strip any leading path in case the runtime added one.
 */
function normaliseImage(raw: unknown): string | undefined {
  if (typeof raw !== "string" || !raw) return undefined;
  return path.basename(raw);
}

function normaliseImages(raw: unknown): string | string[] | undefined {
  if (Array.isArray(raw)) return raw.map(normaliseImage).filter(Boolean) as string[];
  return normaliseImage(raw);
}

// Deep-clone + normalise image references
const exportData = questionGroups.map((group) => ({
  id: group.id,
  name: group.name,
  categories: group.categories.map((cat) => ({
    id: cat.id,
    name: cat.name,
    sections: cat.sections.map((sec) => ({
      id: sec.id,
      name: sec.name,
      questions: sec.questions.map((q) => {
        const out: Record<string, unknown> = {
          id: q.id,
          text: q.text,
          options: q.options,
          correctIndex: q.correctIndex,
        };
        const qi = normaliseImages(q.questionImage);
        if (qi) out.questionImage = qi;
        const ei = normaliseImages(q.explanationImage);
        if (ei && (!Array.isArray(ei) || ei.length > 0)) out.explanationImage = ei;
        return out;
      }),
    })),
  })),
}));

const json = JSON.stringify(exportData, null, 2);
writeFileSync("questions-export.json", json, "utf-8");

const totalQuestions = exportData.reduce(
  (sum, g) =>
    sum + g.categories.reduce(
      (cs, c) => cs + c.sections.reduce((ss, s) => ss + s.questions.length, 0),
      0
    ),
  0
);

console.log("✓ Exported to questions-export.json");
console.log(`  Groups    : ${exportData.length}`);
console.log(`  Questions : ${totalQuestions}`);
