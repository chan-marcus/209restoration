// Fails the build if an em dash appears anywhere on the site.
// House style: no em dashes, ever. Rewrite with a comma, colon, period, or
// parentheses instead. Runs after `astro build` and scans the built HTML as
// well as the source, so a dash introduced by a Markdown plugin is caught too.
// Also rejects typed stand-ins (" -- " or " --- ") in blog prose.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const ROOTS = ['src', 'public', 'dist'];
const EXTS = new Set(['.md', '.mdx', '.astro', '.ts', '.js', '.mjs', '.json', '.svg', '.html', '.xml', '.txt']);
const EM_DASH = /\u2014|&mdash;|&#8212;|&#x2014;/i;
const STANDIN = /\s-{2,3}\s/;
const isProse = (file) => /^src[\\/]content[\\/]/.test(file) && /\.mdx?$/.test(file);

function* walk(dir) {
  let entries;
  try { entries = readdirSync(dir); } catch { return; }
  for (const name of entries) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* walk(p);
    else if (EXTS.has(extname(name))) yield p;
  }
}

const hits = [];
for (const root of ROOTS) {
  for (const file of walk(root)) {
    readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
      // A line that is exactly "---" is frontmatter or a rule, and is fine.
      const standin = isProse(file) && line.trim() !== '---' && STANDIN.test(line);
      if (EM_DASH.test(line) || standin) hits.push(`${file}:${i + 1}: ${line.trim().slice(0, 140)}`);
    });
  }
}

if (hits.length) {
  console.error(`\n✖ ${hits.length} em dash(es) found. House style bans them; rewrite with a comma, colon, period, or parentheses.\n`);
  console.error(hits.join('\n') + '\n');
  process.exit(1);
}
console.log('✓ No em dashes found.');
