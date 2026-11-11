// Column classes for a card grid, picked from its count so every row is full
// at every width: t2 = 2 across from 640px, m3 = 3 across from 860px, d4 = 4
// across from 1140px, each only when it divides the count. Those widths keep a
// card at least 255px wide, so one-line card titles still fit.
export function evenCols(count: number): string {
  return [count % 2 === 0 && 't2', count % 3 === 0 && 'm3', count % 4 === 0 && 'd4'].filter(Boolean).join(' ');
}

