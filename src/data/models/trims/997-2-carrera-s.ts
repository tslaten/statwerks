import type { Trim } from "../types";

/**
 * Reviewed research, August 2026. Specs cross-checked across stuttcars,
 * fastestlaps, and Excellence magazine's spec archive. Bore-scoring
 * assessment follows the PCA tech Q&A specifically addressing whether
 * it's a real issue on 997.2 Carrera, plus RPM Technik/997dot2.com notes
 * that the 997.2's revised cylinder liners reduced (but didn't
 * eliminate) the risk seen on 997.1 3.8L engines. Pricing grounded in
 * classic.com listings. See git history/PR discussion for links. Treat
 * as a living document: update as better data arrives.
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
    transmission: "6-speed manual or 7-speed PDK",
    curbWeight: "3,208 lb (manual) / 3,274 lb (PDK)",
    summary:
      "The S steps up from base Carrera's 3.4L to a 3.8L version of the same direct-injection engine, with a meaningful jump in output and PASM as part of the package. It's the trim most cross-shopped against a 997.1 Carrera S of similar age — same rough money, but without the IMS bearing question hanging over it. The 3.8L is also the engine most of this generation's (reduced, but not zero) bore-scoring conversation is about.",
    quickFacts: [
      { label: "Engine code", value: "MA1 series (DFI)" },
      { label: "Power", value: "385 hp @ 6,500 rpm" },
      { label: "Torque", value: "310 lb-ft @ 4,400 rpm" },
      { label: "0–60 mph", value: "4.3s (PDK w/ Sport Chrono)" },
      { label: "Transmission", value: "6MT or 7-speed PDK" },
      { label: "Curb weight", value: "3,208–3,274 lb" },
    ],
  },

  knownIssues: [
    {
      id: "bore-scoring-997-2",
      title: "Engine bore scoring (3.8L)",
      severity: "critical",
      summary:
        "Less common than on the 997.1's 3.8L thanks to revised cylinder liners, but not eliminated — Porsche Club of America's own tech Q&A treats this as a real, if reduced, concern worth checking for.",
      detail:
        "Bore scoring is wear/scratching on the cylinder walls, showing up as rising oil consumption and blue smoke on a cold start. The 997.2's DFI engine uses revised cylinder liners compared to the 997.1's 3.8L, which appears to have meaningfully reduced — but not eliminated — the failure rate. It remains enough of a live question that PCA has published a dedicated tech article addressing whether it's a real issue on this specific car. A confirmed case is a shortblock rebuild or replacement, a five-figure repair, which is why this stays flagged Critical despite the improved odds relative to the 997.1.",
      whatToCheck: [
        "Cold start the car yourself and listen for excessive piston slap or rattle that clears within ~30 seconds",
        "Request a borescope inspection of all six cylinder walls during the PPI — a visual under the hood won't catch this",
        "Ask about oil consumption between changes and pull an oil analysis if recent history is available",
      ],
    },
  ],

  checklistAdditions: {
    documentsToRequest: [
      "Full-service history specifically covering the 3.8L engine — oil/filter intervals and any bore-related discussion with a shop",
    ],
    questionsForSeller: [
      "Which transmission does this car have — manual or PDK? It meaningfully affects resale demand and driving character.",
    ],
    ppiAdvice: [
      "Ask specifically for a borescope inspection of the cylinder bores, not just a visual under the hood",
      "No IMS bearing concern on this engine — don't pay for an \"IMS inspection\" upsell; it doesn't apply here",
    ],
  },

  marketContext: {
    currency: "USD",
    priceLow: 48000,
    priceHigh: 75000,
    rangeNote: "clean, good-condition examples, PDK or manual",
    trendSummary:
      "Average sale price sits around $59,300, with manual cars averaging noticeably higher (~$65,200) than PDK cars (~$57,400) — a bigger manual premium than on the 981 generation. Rough or high-mile examples have traded as low as the low-$20s, and exceptional or well-documented cars have reached six figures at auction, but treat both ends as outliers rather than shopping targets. Values sit close to, or slightly above, similarly-aged 997.1 Carrera S cars — the no-IMS peace of mind and extra power both support a premium over the 997.1.",
    asOf: "2026-08-17",
  },
};
