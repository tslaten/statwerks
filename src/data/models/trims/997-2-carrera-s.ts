import type { Trim } from "../types";

/**
 * Reviewed research, August 2026. Supersedes an earlier auto-researched
 * pass — this version is built from owner-supplied curated research
 * (see PR discussion for the source document) and should be treated as
 * the authoritative version going forward. Notably: bore scoring is no
 * longer flagged Critical here (moved to the platform page — the 9A1
 * direct-injection design addresses it, not just IMS), removing the
 * last Critical-severity flag from this trim entirely. Engine code
 * corrected to "9A1" (the earlier pass used "MA1", which isn't the
 * right designation). Pricing record-high corrected to $120,000 (Dec
 * 2022 sale) from an earlier $108,000 figure — different aggregator
 * snapshots; this is the more current source.
 *
 * Updated again August 2026 with a revised source document: the
 * platform-level bore-scoring entry moved back from Clear to Watch —
 * the 9A1 can still develop it (a different mechanism than the M97,
 * meaningfully rarer, but real). This trim's own known-issues copy is
 * updated to stop implying it's a solved problem; see the platform
 * file's header comment for the full explanation.
 *
 * Updated again August 2026: added `popularOptions` + `optionsNote`
 * from an owner-supplied source covering factory-option desirability
 * (manual vs. PDK, Sport Chrono, PSE, Sport PASM, etc.). Everything
 * else in that source (specs, pricing, checklist, known issues)
 * matched what was already here — no other fields changed.
 */
export const carrera9972S: Trim = {
  slug: "s",
  platformSlug: "997-2-carrera",
  name: "Carrera S",
  shortName: "Carrera S",
  teaser:
    "The direct-injection 3.8L over base Carrera's 3.4L — meaningfully more power, plus PASM and PDK availability.",
  contentStatus: "reviewed",
  image: {
    src: "/vehicles/997-2-carrera/s.png",
    alt: "997.2 Carrera S, silver, side profile view",
  },

  overview: {
    engine: "3.8L flat-six, naturally aspirated (direct injection)",
    power: "385 hp @ 6,500 rpm",
    zeroToSixty: "4.3s (PDK w/ Sport Chrono) · 4.6s (manual)",
    transmission: "6-speed manual or 7-speed PDK (replaces the 997.1's Tiptronic automatic)",
    curbWeight: "3,208 lb (manual) / 3,274 lb (PDK)",
    summary:
      "The S steps up from base Carrera's 3.4L to a 3.8L version of the same direct-injection engine, up from 355 hp on the 997.1 Carrera S to 385 hp here — a meaningful power increase alongside the reliability improvements. Wider rear track, larger brakes, and 19-inch wheels come standard versus the base Carrera. It's the trim most cross-shopped against a 997.1 Carrera S of similar age — same rough money, without the IMS bearing question and at a meaningfully lower bore-scoring rate, though not a zero one. Specialist consensus describes it as a polished evolution with little going wrong beyond general wear and the platform-wide watch items. Many enthusiasts consider it the 'sweet spot' of the 997 lineup for exactly that reason.",
    quickFacts: [
      { label: "Engine code", value: "9A1 (DFI)" },
      { label: "Power", value: "385 hp @ 6,500 rpm" },
      { label: "Torque", value: "310 lb-ft @ 4,400 rpm" },
      { label: "0–60 mph", value: "4.3s (PDK w/ Sport Chrono)" },
      { label: "Transmission", value: "6MT or 7-speed PDK" },
      { label: "Curb weight", value: "3,208–3,274 lb" },
    ],
  },

  knownIssues: [
    {
      id: "no-dominant-failure-pattern",
      title: "No dominant trim-specific failure pattern beyond platform-wide items",
      severity: "clear",
      summary:
        "Specialist consensus describes the S as a polished evolution of the 997.1 with little going wrong beyond general wear and the platform-wide watch items — bore scoring included.",
      detail:
        "Independent Porsche specialist shops consistently describe the 997.2 Carrera S as a well-sorted car by the time it reached production. The HPFP, coolant, rear main seal, and bore scoring items covered on the platform page are the closest things to known watch-points here — bore scoring in particular is real, even though it's meaningfully less common on the 9A1 than it was on the 997.1's M97, and shouldn't be treated as a solved problem just because this is a direct-injection design. This is still a meaningfully lower-risk buy than a 997.1 from a pure mechanical standpoint, which is worth reflecting in how firmly you should expect to negotiate on price versus a 997.1 example — but \"lower-risk\" isn't \"no-risk,\" and a borescope result during PPI should factor directly into your offer.",
      whatToCheck: [
        "Get a borescope inspection of the cylinder bores during PPI — don't skip this just because it's a DFI engine",
        "Review the platform-wide watch items (HPFP, coolant, RMS, bore scoring, suspension, LED tail lights) as your checklist baseline",
      ],
    },
  ],

  checklistAdditions: {
    questionsForSeller: [
      "Manual or PDK? PDK was new to this generation and is generally well-regarded, but transmission type materially affects resale demand and driving character.",
    ],
  },

  marketContext: {
    currency: "USD",
    priceLow: 48000,
    priceHigh: 75000,
    rangeNote: "clean, good-condition examples, PDK or manual",
    trendSummary:
      "Average sale price sits around $59,300, with PDK coupes averaging roughly $57,400 — manual cars tend to command a premium. Rough or high-mile examples have traded as low as $22,750 (a 2009 model-year car), and a well-documented 2009 example reached $120,000 at a December 2022 sale — treat both ends as outliers rather than shopping targets. Runs a meaningful premium over the 997.1 Carrera S (averaging roughly $47,400) — the direct-injection engine's reliability improvements and higher output are generally reflected in the price gap.",
    asOf: "2026-08-18",
    averagePrice: 59339,
    recordLow: { price: 22750, note: "2009 model year" },
    recordHigh: { price: 120000, note: "2009 model year, December 2022 sale" },
  },

  popularOptions: [
    {
      id: "manual-transmission",
      name: "6-speed manual transmission",
      tag: "popular",
      note: "Widely considered the most sought-after configuration of this generation and consistently commands a premium over PDK — even though PDK is objectively quicker. Increasingly hard to find as the used market thins out.",
    },
    {
      id: "sport-chrono",
      name: "Sport Chrono Package",
      tag: "popular",
      note: "Near-essential on PDK cars (unlocks launch control and sharper throttle mapping) and a strong nice-to-have on manuals. A meaningful resale booster, though one forum estimate put the premium at roughly what a dealer retrofit costs ($1,500) — close to a wash to add later, but factory-original examples are still preferred.",
    },
    {
      id: "pse",
      name: "PSE (Porsche Sport Exhaust)",
      tag: "popular",
      note: "A switchable exhaust mode (quiet/loud), mostly found on 2010+ cars — delayed on most 2009 models. Widely cited as one of the most desirable options for a naturally aspirated 911, specifically for the sound.",
    },
    {
      id: "sport-seats",
      name: "Sport seats",
      tag: "popular",
      note: "Consistently named alongside Sport Chrono and PSE as a top desirability driver in buyer discussions.",
    },
    {
      id: "sport-pasm",
      name: "Sport PASM (SPASM)",
      tag: "popular",
      note: "New to the 997.2, replacing the earlier \"Minus 20\" sport suspension package — lowers the car a further 10mm beyond standard PASM with firmer springs, and bundles in a rear limited-slip differential on rear-wheel-drive cars. Coupe-only. Priced at just $950 when new, making it one of the more affordable desirable options to look for.",
    },
    {
      id: "limited-slip-diff",
      name: "Limited-slip differential (LSD)",
      tag: "popular",
      note: "Called out in specialist buying guides as a desirable option that helps a car hold value. On rear-wheel-drive coupes it comes bundled with Sport PASM rather than standalone — check for Sport PASM specifically. Standard equipment on Carrera 4S (AWD) cars.",
    },
    {
      id: "pccb",
      name: "PCCB (Porsche Ceramic Composite Brakes)",
      tag: "rare",
      note: "A roughly $8,000 factory option, uncommon on non-Turbo/non-GT3 cars. Desirable for non-track use, but rare enough that it shouldn't be expected — a nice find rather than something to hold out for.",
    },
    {
      id: "pasm",
      name: "PASM (adaptive suspension)",
      tag: "standard",
      note: "Standard equipment on the Carrera S — the optional upgrade on the base Carrera. Not something to seek out separately here, since every S already has it.",
    },
  ],
  optionsNote:
    "Not everyone agrees options move resale much on a car this age — one long-running forum thread argues that by the time a 997.2 is 15+ years old, extras like Sport Chrono add \"almost nothing\" to resale value the way they might on a newer car. The tags above reflect what buyers commonly seek out and specialists commonly recommend, not a guaranteed price premium — factor it into desirability and how quickly a car sells, not as a fixed dollar amount.",
};
