import type { Trim } from "../types";

/**
 * Reviewed research, August 2026. First pass for this trim — built
 * directly from owner-supplied curated research (see PR discussion for
 * the source document).
 *
 * Deliberately incomplete in a couple of spots rather than filled in
 * with plausible-sounding numbers: the source explicitly flagged the
 * torque figure as "not independently verified... confirm from an
 * official spec sheet before publishing rather than relying on a
 * general web figure," so it's omitted from quickFacts entirely rather
 * than guessed at. 0–60 time and curb weight went unmentioned by the
 * source too (no caution attached, but also no figure) — same
 * treatment: the required `TrimOverview.zeroToSixty`/`.curbWeight`
 * fields are set to an explicit "not yet confirmed" string so the type
 * is satisfied, but neither is surfaced in `quickFacts`, so nothing
 * unverified reaches the page. Engine code is shown as "9A1-family
 * DFI" since the source itself notes sources vary between that and
 * MA1.75/9A2 — reflecting the ambiguity rather than picking one.
 *
 * Vehicle image: a user-supplied illustration (silver, 3/4-front,
 * parked in a garage), used as-is — no background removal or
 * cropping, matching the treatment settled on for the other three
 * trims with real photos. `image.fit` is set to "cover" so it fills
 * its box edge-to-edge rather than letterboxing inside it.
 *
 * `marketContext.priceLow`/`priceHigh` (the "typical asking price"
 * band) are this project's own synthesis around the source's average/
 * record figures, not a figure the source stated directly — same
 * treatment given to the two existing trims' typical-range values.
 */
export const carrera9911S: Trim = {
  slug: "s",
  platformSlug: "991-1-carrera",
  name: "Carrera S",
  shortName: "Carrera S",
  teaser:
    "The most popular 911 variant globally — the last naturally aspirated Carrera S before turbocharging arrived.",
  contentStatus: "reviewed",
  image: {
    src: "/vehicles/991-1-carrera/s.png",
    alt: "991.1 Carrera S, silver, three-quarter front view, parked in a garage",
    fit: "cover",
  },

  overview: {
    engine: "3.8L flat-six, naturally aspirated (direct injection)",
    power: "395 hp @ 7,400 rpm",
    zeroToSixty: "Not yet confirmed — verify against an official spec sheet before publishing",
    transmission: "7-speed manual or 7-speed PDK",
    curbWeight: "Not yet confirmed — verify against an official spec sheet before publishing",
    summary:
      "The most popular 911 variant globally, per market data, and the last naturally aspirated Carrera S before the 991.2 brought turbocharging. Widely seen as the generation where the 911 became noticeably more refined and modern without losing the character of the naturally aspirated flat-six. There's no widely documented catastrophic mechanical weak point specific to this trim beyond the platform-wide watch items — this generation is generally regarded as one of the more reliable in recent 911 history.",
    quickFacts: [
      { label: "Engine code", value: "9A1-family DFI" },
      { label: "Power", value: "395 hp @ 7,400 rpm" },
      { label: "Transmission", value: "7MT or 7-speed PDK" },
    ],
  },

  knownIssues: [
    {
      id: "no-dominant-failure-pattern",
      title: "No dominant, well-documented trim-specific failure pattern",
      severity: "clear",
      summary:
        "Beyond the platform-wide watch items, there's no widely documented catastrophic mechanical weak point specific to the Carrera S trim on this generation — one of the more reliable recent 911 generations.",
      detail:
        "With no strongly documented catastrophic mechanical weak point on this generation, negotiation leverage comes mostly from standard PPI findings (brakes, tires, clutch if manual, suspension wear), confirming recall/service-campaign completion, and a clean diagnostic scan for changeover-valve fault codes — not a major engine-risk discount the way older M96/M97-engined Porsches carry.",
      whatToCheck: [
        "Treat this as a standard, thorough PPI rather than one targeting a known trim-specific failure",
        "Review the platform-wide watch items (bore scoring, AOS, changeover valve, recalls, rear main seal) as your checklist baseline",
      ],
    },
  ],

  checklistAdditions: {
    questionsForSeller: [
      "Manual or PDK? Manual cars are harder to find on this generation with real buyer demand behind them, and command a modest but real price premium.",
    ],
  },

  popularOptions: [
    {
      id: "manual-transmission",
      name: "7-speed manual transmission",
      tag: "popular",
      note: "The Carrera S is the most popular 911 variant globally, and manual cars specifically are harder to find on this generation with real buyer demand behind them — forum buyers report struggling to find good manual examples. Pricing data shows a modest real premium for manual coupes over the overall trim average, though it's not dramatic.",
    },
    {
      id: "sport-chrono",
      name: "Sport Chrono Package",
      tag: "popular",
      note: "Named specifically as one of several \"very popular equipment options\" in enthusiast community discussion of this generation's option list. Adds Sport/Sport Plus drive modes and launch control on PDK cars.",
    },
    {
      id: "pccb",
      name: "PCCB (Porsche Ceramic Composite Brakes)",
      tag: "rare",
      note: "Availability and specification varies by model and market — a genuine but uncommon option on Carrera S examples. Confirm what a specific car actually has rather than assuming from the trim alone.",
    },
  ],
  optionsNote:
    "This generation's option list is more sparsely documented in what we found than the 981/997.2 lists — deliberately kept shorter rather than padded with plausible-sounding but unverified items. Rear-axle steering and PASM Sport both exist on the 991 platform generally, but source material didn't clearly confirm availability specifically on the Carrera S trim as opposed to Turbo/GT variants, so they're left out until confirmed rather than guessed at.",

  marketContext: {
    currency: "USD",
    priceLow: 55000,
    priceHigh: 115000,
    rangeNote: "clean, good-condition examples, PDK or manual",
    trendSummary:
      "Average sale price sits around $84,300, with manual coupes averaging slightly higher (~$87,000) — a modest but real premium, consistent with buyer forum sentiment that manual cars are harder to find on this generation. A 2011 manual example sold for $43,500 in May 2022, and a recorded low of $32,501 was reached by a 2013 cabriolet in October 2024 — treat both as floor outliers, not shopping targets. The recorded high, $318,500 for a 2013 \"Club Coupe\" limited/special edition in January 2026, is a clear collector-market outlier and not representative of a typical example. Manually curated from public sale-price aggregators, cross-checked against enthusiast/owner forum discussion — refresh periodically rather than treating as current-day pricing.",
    asOf: "2026-08-19",
    averagePrice: 84260,
    recordLow: { price: 32501, note: "2013 model year cabriolet, October 2024 sale" },
    recordHigh: {
      price: 318500,
      note: "2013 model year \"Club Coupe\" limited/special edition, January 2026 sale — a collector-market outlier",
    },
  },
};
