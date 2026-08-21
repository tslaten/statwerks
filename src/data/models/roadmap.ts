/**
 * The full 911 and Boxster/Cayman generation lineup — not just the
 * platforms this site currently covers. Drives the sidebar's "every
 * Porsche model" list: generations with a live platform on the site
 * render as a normal expandable entry (see `platformSlugs`, matched
 * against `Platform.slug` in `./index.ts`); generations without one
 * render as a disabled "Coming soon" row instead of being omitted.
 *
 * Deliberately scoped to the two model lines this site already covers
 * (911, and Cayman/Boxster) rather than every Porsche model ever made
 * (Cayenne, Macan, Panamera, Taycan, 918 Spyder, Carrera GT, 959,
 * 924/944/968, 928, ...) — those are different ownership categories
 * with a completely different known-issues profile than the sports
 * cars this site is built around, and nothing here suggests the site
 * is expanding into SUVs/sedans/EVs. If that scope ever changes, this
 * is the file to extend.
 *
 * A generation can map to more than one live platform — e.g. 997.2
 * covers both "997.2 Carrera" and "997.2 GT3" as separate platforms
 * on this site (different engine architecture, see that platform
 * file's own header comment), so `platformSlugs` is an array, in the
 * order they should display.
 *
 * Years are widely-known generation spans, not independently
 * fact-checked against a primary Porsche source the way trim-level
 * specs elsewhere in this data model are — these are "coming soon"
 * placeholders with no clickable content behind them yet, so the bar
 * for precision is lower than for a published dashboard's numbers.
 */

export type ModelLine = "911" | "Cayman / Boxster";

export interface RoadmapGeneration {
  /** Generation label shown in the sidebar, e.g. "993" or "996". */
  label: string;
  years: string;
  modelLine: ModelLine;
  /**
   * Slugs of this site's live `Platform`s that belong to this
   * generation, in display order. Omitted or empty = not yet covered
   * — renders as a disabled "Coming soon" row.
   */
  platformSlugs?: string[];
}

export const roadmap: RoadmapGeneration[] = [
  // 911, chronological
  { label: "911 (901/912)", years: "1964–1973", modelLine: "911" },
  { label: "911 G-Series / 930 Turbo", years: "1974–1989", modelLine: "911" },
  { label: "964", years: "1989–1994", modelLine: "911" },
  { label: "993", years: "1994–1998", modelLine: "911" },
  { label: "996", years: "1997–2004", modelLine: "911", platformSlugs: ["996-carrera"] },
  { label: "997.1", years: "2005–2008", modelLine: "911" },
  {
    label: "997.2",
    years: "2009–2012",
    modelLine: "911",
    platformSlugs: ["997-2-carrera", "997-2-gt3"],
  },
  { label: "991.1", years: "2012–2016", modelLine: "911", platformSlugs: ["991-1-carrera"] },
  { label: "991.2", years: "2016–2019", modelLine: "911" },
  { label: "992.1", years: "2019–2023", modelLine: "911" },
  { label: "992.2", years: "2023–present", modelLine: "911" },

  // Cayman / Boxster, chronological
  { label: "986 Boxster", years: "1996–2004", modelLine: "Cayman / Boxster" },
  { label: "987.1 Boxster / Cayman", years: "2005–2008", modelLine: "Cayman / Boxster" },
  { label: "987.2 Boxster / Cayman", years: "2009–2012", modelLine: "Cayman / Boxster" },
  {
    label: "981 Cayman",
    years: "2012–2016",
    modelLine: "Cayman / Boxster",
    platformSlugs: ["981-cayman"],
  },
  {
    label: "718 Cayman",
    years: "2016–present",
    modelLine: "Cayman / Boxster",
    platformSlugs: ["718-cayman"],
  },
  { label: "718 Boxster", years: "2016–present", modelLine: "Cayman / Boxster" },
];
