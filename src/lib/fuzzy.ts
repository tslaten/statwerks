/**
 * Small, dependency-free fuzzy matcher — the site's whole search
 * dataset (platforms + trims + roadmap placeholders) is a few dozen
 * short strings, so a hand-rolled subsequence scorer is plenty; no
 * need to pull in a search library for this. Same "plain
 * implementation over a new dependency" call as the price-range chart
 * and severity-mix bar elsewhere in this codebase.
 *
 * Scoring is a simplified version of the fzf/VS Code command-palette
 * approach: every query character must appear in the target in order
 * (not necessarily adjacent), and the score rewards runs of
 * consecutive matches and matches that land on a word boundary (start
 * of string, or right after a space/hyphen/dot) — so "97gt3" scores
 * much higher against "997.2 GT3" than an equal-length but scattered
 * match would, and results read as genuinely relevant, not just
 * technically possible.
 */

export interface FuzzyMatch {
  score: number;
  /** Character indices in `target` that matched, for highlighting. */
  indices: number[];
}

export function fuzzyMatch(query: string, target: string): FuzzyMatch | null {
  const q = query.trim().toLowerCase();
  const t = target.toLowerCase();
  if (q.length === 0) return { score: 0, indices: [] };

  const indices: number[] = [];
  let qi = 0;
  let score = 0;
  let prevMatchIndex = -1;
  let consecutiveRun = 0;

  for (let ti = 0; ti < t.length && qi < q.length; ti++) {
    if (t[ti] !== q[qi]) continue;

    indices.push(ti);
    if (prevMatchIndex === ti - 1) {
      consecutiveRun += 1;
      score += 5 + consecutiveRun;
    } else {
      consecutiveRun = 0;
      score += 1;
    }
    if (ti === 0 || /[\s\-./]/.test(t[ti - 1])) {
      score += 8;
    }
    prevMatchIndex = ti;
    qi += 1;
  }

  if (qi < q.length) return null; // not every query character matched, in order

  score -= indices[0] * 0.1; // prefer matches that start earlier
  score -= t.length * 0.02; // prefer shorter, more precise targets

  return { score, indices };
}

/** Fuzzy-matches `query` against every item's derived text, best first. */
export function fuzzySearch<T>(
  query: string,
  items: T[],
  getText: (item: T) => string
): Array<{ item: T; match: FuzzyMatch }> {
  if (!query.trim()) return [];
  const results: Array<{ item: T; match: FuzzyMatch }> = [];
  for (const item of items) {
    const match = fuzzyMatch(query, getText(item));
    if (match) results.push({ item, match });
  }
  results.sort((a, b) => b.match.score - a.match.score);
  return results;
}
