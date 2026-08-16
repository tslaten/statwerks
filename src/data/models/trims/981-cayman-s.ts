import type { Trim } from "../types";

/**
 * Reviewed research, August 2026. Specs cross-checked against Porsche's
 * own published technical specifications, Wikipedia's 981 chassis
 * article, and independent spec aggregators (encycarpedia, auto-data,
 * fastestlaps). Bore-scoring assessment follows LN Engineering's
 * technical notes and the Rennlist "is it common" consensus thread.
 * Pricing grounded in classic.com/theclassicvaluer listings and recent
 * BaT/Cars & Bids sale results — see git history/PR discussion for
 * links. Treat as a living document: update as better data arrives.
 */
export const cayman981S: Trim = {
  slug: "s",
  platformSlug: "981-cayman",
  name: "Cayman S",
  shortName: "Cayman S",
  teaser:
    "The larger 3.4L flat-six over base — the sweet spot most buyers cross-shop first.",
  contentStatus: "reviewed",

  overview: {
    engine: "3.4L flat-six, naturally aspirated (direct injection)",
    power: "325 hp @ 7,400 rpm",
    zeroToSixty: "4.4s (PDK w/ Sport Chrono) · 4.7s (manual)",
    transmission: "6-speed manual or 7-speed PDK",
    curbWeight: "2,910 lb (manual) / 2,980 lb (PDK)",
    summary:
      "The S steps up from base Cayman's 2.7L flat-six to a 3.4L unit making 325 hp, and brings PASM active suspension and larger brakes on as standard equipment rather than options. It's the trim most buyers cross-shop first — enough power to feel genuinely quick without stepping up to GTS or GT4 pricing, and the 3.4L is the engine most of the model's bore-scoring conversation is actually about (see Known Issues).",
    quickFacts: [
      { label: "Engine code", value: "MA1.23" },
      { label: "Power", value: "325 hp @ 7,400 rpm" },
      { label: "Torque", value: "272 lb-ft @ 4,500 rpm" },
      { label: "0–60 mph", value: "4.4s (PDK w/ Sport Chrono)" },
      { label: "Transmission", value: "6MT or 7-speed PDK" },
      { label: "Curb weight", value: "2,910–2,980 lb" },
    ],
  },

  knownIssues: [
    {
      id: "bore-scoring",
      title: "Engine bore scoring (3.4L)",
      severity: "critical",
      summary:
        "Rare on this specific engine, not a widespread defect — but when it happens the fix is a shortblock or full engine replacement, so it's still worth a hard look at PPI given the cost if you're unlucky.",
      detail:
        "Bore scoring is wear/scratching on the cylinder walls that shows up as rising oil consumption and blue smoke on a cold start. Specialist shops (LN Engineering, who literally manufacture the sleeve repair kits) and long-running Rennlist threads on this specific question both describe it as uncommon on 981/987.2-generation MA1 engines compared to earlier or later Porsche flat-sixes, and the cases that do occur skew toward cars driven hard from cold in cold climates — short trips that never let the engine reach full operating temperature before high load. It is not the same failure as IMS bearing wear on earlier 996/997/987.1 cars (this engine doesn't have an IMS bearing at all); it's a cold-start wear pattern with a real but low incidence rate. A confirmed case means a shortblock rebuild or replacement, which is a five-figure repair — the reason this stays flagged Critical despite being statistically uncommon.",
      whatToCheck: [
        "Cold start the car yourself and listen for excessive piston slap or rattle that clears within ~30 seconds",
        "Request a borescope inspection of all six cylinder walls during the PPI — a visual under the hood won't catch this",
        "Ask about the car's usage pattern: garage-kept and driven on longer trips is lower-risk than short-hop city driving in a cold climate",
        "Pull an oil analysis or check for elevated metal content if the seller has recent oil-change history",
      ],
    },
  ],

  marketContext: {
    currency: "USD",
    priceLow: 42000,
    priceHigh: 62000,
    rangeNote: "clean, sub-60k-mile examples, PDK or manual",
    trendSummary:
      "Values have held up better than the typical sports-car depreciation curve, largely on the back of the 981's reputation as one of the more reliable used Porsches you can buy. Clean, well-documented 2014–2016 cars mostly trade in the low-to-mid $40s through the $50s; manual cars and PDK cars with Sport Chrono tend to command a premium over base PDK cars with no options, and exceptional low-mile or single-owner examples have reached into the mid-$70s at auction (Bring a Trailer, Cars & Bids). Base Cayman remains the relative bargain of the lineup — the S premium buys real power, not just a badge.",
    asOf: "2026-08-16",
  },
};
