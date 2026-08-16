import type { Trim } from "../types";

/**
 * PLACEHOLDER CONTENT — structure/shape reference only.
 * Replace every field below with reviewed research before this trim's
 * `contentStatus` is flipped to "reviewed".
 */
export const carrera9971S: Trim = {
  slug: "s",
  platformSlug: "997-1-carrera",
  name: "Carrera S",
  shortName: "Carrera S",
  teaser:
    "The larger 3.8L flat-six over base Carrera's 3.6L — bigger power, and its own bore-scoring conversation.",
  contentStatus: "placeholder",

  overview: {
    engine: "3.8L flat-six, naturally aspirated (M97)",
    power: "355 hp @ 6,600 rpm",
    zeroToSixty: "4.8s (manual)",
    transmission: "6MT or 5-speed Tiptronic S",
    curbWeight: "~3,175 lb",
    summary:
      "Placeholder trim blurb. The S trim steps up from base Carrera's 3.6L to a 3.8L flat-six with more power, larger brakes, and PASM as part of the package. This should be replaced with real detail on what specifically differentiates the S within the 997.1 Carrera lineup.",
    quickFacts: [
      { label: "Engine code", value: "M97.01 (placeholder)" },
      { label: "Power", value: "355 hp @ 6,600 rpm" },
      { label: "0–60 mph", value: "4.8s (manual)" },
      { label: "Transmission", value: "6MT or 5-speed Tiptronic S" },
      { label: "Curb weight", value: "~3,175 lb" },
    ],
  },

  knownIssues: [
    {
      id: "bore-scoring-997",
      title: "Bore scoring on 3.8L variants",
      severity: "watch",
      summary:
        "Placeholder — describe the reported pattern of cylinder bore wear specific to this trim's 3.8L displacement/variant.",
      detail:
        "Placeholder detail copy on how this differs from IMS failure, typical symptoms (excessive oil consumption, blue smoke on startup), and diagnostic approach.",
      whatToCheck: [
        "Placeholder — ask about oil consumption between changes",
        "Placeholder — borescope inspection during PPI, same as IMS check",
      ],
    },
  ],

  marketContext: {
    currency: "USD",
    priceLow: 42000,
    priceHigh: 65000,
    rangeNote: "clean, sub-70k-mile examples with documented IMS history",
    trendSummary:
      "Placeholder trend copy. Describe recent value trends for the S trim, the price premium commanded by cars with a documented IMS bearing upgrade versus unknown history, and how manual vs. Tiptronic affects demand.",
    asOf: "2026-08-16",
  },
};
