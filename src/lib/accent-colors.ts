/*
 * The three EGM brand accents (blue, cyan/teal, purple), cycled through lists
 * such as the competence and service numbers. Teal is the text-safe shade of cyan.
 */
const ACCENTS = [
  { text: "text-egm-blue", border: "border-egm-blue", dot: "bg-egm-blue" },
  { text: "text-egm-teal", border: "border-egm-teal", dot: "bg-egm-cyan" },
  { text: "text-egm-purple", border: "border-egm-purple", dot: "bg-egm-purple" },
] as const;

export function accentFor(index: number) {
  return ACCENTS[index % ACCENTS.length];
}

export function formatIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}
