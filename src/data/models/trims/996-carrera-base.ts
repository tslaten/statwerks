import type { Trim } from "../types";

/**
 * Reviewed research, August 2026. First pass for this trim — built via
 * web search across specialist/enthusiast sources and classic.com
 * aggregate pricing. See the platform file's header comment for the
 * sourcing-quality note (WebFetch blocked this pass; everything traces
 * to WebSearch result snippets).
 *
 * Spans both 996.1 (1999–2001, 3.4L) and 996.2 (2002–2004 facelift,
 * 3.6L) rather than splitting into two trims — see the platform file's
 * header comment for why. Specs that differ by sub-generation are
 * given as both figures rather than picked/averaged.
 *
 * No "996 Carrera S" trim exists to compare against — the 996
 * generation never had a rear-wheel-drive S badge (that arrived with
 * the 997). This is stated explicitly as a known-issues entry below,
 * since it's an easy assumption to carry over from later generations.
 *
 * No vehicle image supplied for this trim yet — the page renders the
 * standard "Image pending" placeholder until one is sourced.
 *
 * Curb weight and 0–60 figures come from enthusiast spec-archive
 * sites (Excellence Magazine's spec tables, fastestlaps.com) rather
 * than a directly-fetched Porsche factory sheet — flagged as
 * period-road-test-derived rather than confirmed manufacturer-claimed
 * numbers.
 */
export const carrera996Base: Trim = {
  slug: "base",
  platformSlug: "996-carrera",
  name: "Carrera",
  shortName: "Carrera",
  teaser:
    "The first water-cooled 911 — where the IMS bearing conversation started, and today the most accessible entry point into 911 ownership.",
  contentStatus: "reviewed",

  overview: {
    engine:
      "3.4L flat-six, naturally aspirated (M96, water-cooled) — 3.6L from the 2002 facelift onward",
    power: "296–320 hp",
    zeroToSixty:
      "~5.2s (996.1, 3.4L) / ~4.8s (996.2, 3.6L) — period road-test figures, not confirmed factory-claimed numbers",
    transmission: "6-speed manual or Tiptronic S automatic",
    curbWeight:
      "2,901 lb manual / 3,009 lb Tiptronic (996.1 coupe) — 2,959 lb manual / 3,080 lb Tiptronic (996.2 coupe)",
    summary:
      "The base Carrera across the full 996 run — both the original 996.1 (1999–2001, 3.4L) and the 2002 facelift 996.2 (3.6L, revised headlights). It's the entry point to 911 ownership by price on this site: 996 Carrera pricing sits well below every later generation covered here, largely a function of age and the IMS bearing's reputation rather than the car being materially less capable. There's no separate \"Carrera S\" trim on this generation to compare against — that badge, and the distinct engine/bearing questions that can come with it on later cars, arrived with the 997. Within the 996, bearing generation tracks model year and engine revision, not trim.",
    quickFacts: [
      { label: "Engine code", value: "M96 (3.4L 1999–2001; 3.6L 2002–2004)" },
      { label: "Power", value: "296–320 hp depending on model year" },
      { label: "Transmission", value: "6MT or Tiptronic S" },
      { label: "Curb weight", value: "~2,900–3,080 lb depending on model year/transmission" },
    ],
  },

  knownIssues: [
    {
      id: "no-trim-specific-bearing-variant",
      title: "No distinct \"S\" IMS bearing variant to compare against",
      severity: "clear",
      summary:
        "Unlike some later 911 generations, the 996 never had a rear-wheel-drive Carrera S trim — bearing generation here tracks model year and engine revision, not trim.",
      detail:
        "It's an easy assumption to carry over from later generations, where a base-vs-S engine/bearing comparison sometimes matters: the 996 doesn't have that distinction. The closest AWD analog, the widebody Carrera 4S (2002–2005), uses the same naturally-aspirated M96 engine family as this base Carrera, not a different or uprated bearing. Base, Carrera 4, and Carrera 4S all share whichever IMS bearing generation applies to their specific model year — see the platform's known-issues list for that year-based (not trim-based) breakdown.",
      whatToCheck: [
        "Don't assume a base-vs-S bearing distinction on this generation the way you might on a later 911 — verify bearing generation by engine serial number regardless of trim",
      ],
    },
  ],

  checklistAdditions: {
    questionsForSeller: [
      "Manual or Tiptronic? Manual cars command a real, documented premium in the used market on this generation.",
    ],
  },

  popularOptions: [
    {
      id: "x51-power-kit",
      name: "X51 Power Kit",
      tag: "rare",
      note: "A factory power-upgrade package, named as the most sought-after performance option on this generation in specialist buying-guide discussion. Genuinely uncommon — a strong find rather than something to expect or hold out for.",
    },
    {
      id: "manual-transmission",
      name: "6-speed manual transmission",
      tag: "popular",
      note: "Explicitly documented as commanding a real price premium over Tiptronic in the resale market on this generation — consistent with the manual-vs-automatic pricing gap shown in market data (manual coupe averages running several thousand dollars above automatic).",
    },
    {
      id: "m030-sport-suspension",
      name: "M030 Sport Suspension",
      tag: "popular",
      note: "A lowered, firmer factory suspension tune, named among the desirable factory specs to look for on this generation.",
    },
    {
      id: "limited-slip-differential",
      name: "Limited-slip differential",
      tag: "popular",
      note: "Named as a desirable factory option in specialist buying-guide discussion, alongside M030 and the X51 kit.",
    },
    {
      id: "aerokit",
      name: "Aerokit (GT2-style front spoiler/rear wing)",
      tag: "rare",
      note: "A styling package borrowing GT3-derived front spoiler, rear wing, and revised bumpers/side skirts. Specifically called out in specialist marketplace listings as a desirable, uncommon factory spec.",
    },
    {
      id: "sport-seats",
      name: "Sport seats",
      tag: "popular",
      note: "More bolstered factory seating, valued for both comfort and appearance — named among the desirable options for this generation.",
    },
    {
      id: "hi-fi-sound-package",
      name: "Hi-Fi Sound Package (10-speaker amplified system)",
      tag: "standard",
      note: "A factory audio upgrade named in buying-guide discussion — a nice-to-have rather than a major value driver.",
    },
  ],
  optionsNote:
    "This list leans on a single Rennlist buying-guide thread and marketplace listing patterns rather than a broader cross-referenced source set — treat individual option desirability as directional, not definitive, and confirm what a specific car actually has rather than assuming from the trim alone.",

  marketContext: {
    currency: "USD",
    priceLow: 20000,
    priceHigh: 42000,
    rangeNote: "clean, good-condition manual coupes across both 996.1 and 996.2",
    trendSummary:
      "The cheapest entry point into 911 ownership covered on this site. Pricing splits meaningfully by sub-generation and transmission: 996.1 (1999–2001) coupes average around $27,300 across all transmissions ($29,800 manual / $23,400 automatic), while 996.2 (2002–2004) manual coupes average closer to $31,000–$31,200 depending on the data pull. Cars in the 30,000–60,000 mile range typically ask $20,000–$30,000; sub-10,000-mile survivor examples can exceed $80,000. One separately-cited figure claimed a $45,697 average reflecting 40% year-over-year auction growth — notably higher than the classic.com per-trim averages above, likely a different (auction-only or broader-model) dataset rather than a directly comparable number, so it's flagged here rather than blended in. Manually curated from classic.com aggregate sale data via web search — refresh periodically, and treat as directional rather than a live feed.",
    asOf: "2026-08-20",
    averagePrice: 29000,
    recordLow: {
      price: 7770,
      note: "1997 model year Carrera 2 coupe, manual, September 2021 sale — the model year and \"Carrera 2\" designation suggest this may be a Euro-market or pre-US-launch car rather than a typical US example; treat as an extreme low-end outlier, not a shopping target",
    },
    recordHigh: {
      price: 85000,
      note: "2004 model year (996.2) coupe, manual, August 18, 2022 sale",
    },
  },
};
