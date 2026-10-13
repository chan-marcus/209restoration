// Line-break control for long-form copy: binds the words either side of each
// sentence break, and the last words of a block, with no-break spaces, so no
// line ends a sentence one or two words in or starts one in its last two words,
// and no block ends on a stub. Runs are capped in length so they never force a
// phone-width line to overflow; past the cap it binds two words instead of three.

const NBSP = ' ';
const MAX_RUN = 34; // characters, inside a 375px line (about 38 fit)

function bind(words: string[], from: number, to: number): void {
  for (let i = from; i < to; i++) if (!words[i].endsWith(NBSP)) words[i] = words[i] + NBSP;
}

function runLength(words: string[], from: number, to: number): number {
  return words.slice(from, to + 1).join(' ').length;
}

export function tidy(text: string): string {
  const words = text.split(' ');
  const n = words.length;
  if (n < 4) return text;

  // Sentence breaks: word i ends a sentence, word i+1 starts the next.
  for (let i = 2; i < n - 3; i++) {
    if (!/[.?!]$/.test(words[i])) continue;
    const span = runLength(words, i - 2, i + 3) <= MAX_RUN ? 2 : 1;
    bind(words, i - span, i + span + 1); // span + 1 words up to the break, span + 1 after it
  }

  // End of block: keep the last three words together, or two if that runs long.
  const tail = runLength(words, n - 3, n - 1) <= MAX_RUN - 6 ? 3 : 2;
  bind(words, n - tail, n - 1);

  // bind() appended NBSP to words that are now joined; drop the plain space after them.
  return words.reduce((s, w, i) => s + (i === 0 || s.endsWith(NBSP) ? '' : ' ') + w, '');
}
