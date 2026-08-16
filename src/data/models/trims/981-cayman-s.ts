import type { Trim } from "../types";

/**
 * PLACEHOLDER CONTENT — structure/shape reference only.
 * Replace every field below with reviewed research before this trim's
 * `contentStatus` is flipped to "reviewed".
 */
export const cayman981S: Trim = {
  slug: "s",
  platformSlug: "981-cayman",
  name: "Cayman S",
  shortName: "Cayman S",
  teaser:
    "The larger 3.4L flat-six over base — the sweet spot most buyers cross-shop first.",
  contentStatus: "placeholder",

  overview: {
    engine: "3.4L flat-six, naturally aspirated (direct injection)",
    power: "325 hp @ 7,400 rpm",
    zeroToSixty: "4.6s (PDK w/ Sport Chrono)",
    transmission: "6MT or 7-speed PDK",
    curbWeight: "~2,974 lb (PDK)",
    summary:
      "Placeholder trim blurb. The S trim steps up from base Cayman's 2.7L to a 3.4L flat-six with meaningfully more power, plus PASM and larger brakes as part of the package. This should be replaced with real detail on what specifically differentiates the S within the 981 Cayman lineup.",
    quickFacts: [
      { label: "Engine code", value: "MA1.74 (placeholder)" },
      { label: "Power", value: "325 hp @ 7,400 rpm" },
      { label: "0–60 mph", value: "4.6s (PDK w/ Sport Chrono)" },
      { label: "Transmission", value: "6MT or 7-speed PDK" },
      { label: "Curb weight", value: "~2,974 lb (PDK)" },
    ],
  },

  knownIssues: [
    {
      id: "bore-scoring",
      title: "Engine bore scoring (3.4L)",
      severity: "critical",
      summary:
        "Placeholder — describe the bore-scoring risk pattern reported specifically on this trim's larger 3.4L engine, which years/conditions are most implicated, and typical repair cost.",
      detail:
        "Placeholder detail copy. This section should explain the failure mechanism in plain language (cold-start cylinder wall wear, etc.), reference how widespread it actually is versus forum anecdote on the S's specific engine code, and give a realistic cost range for a shortblock replacement if confirmed.",
      whatToCheck: [
        "Placeholder — cold start listen for excessive piston slap/rattle that clears after ~30s",
        "Placeholder — request a borescope inspection of cylinder walls during PPI",
        "Placeholder — pull oil analysis / check for metal content if seller has recent history",
      ],
    },
  ],

  marketContext: {
    currency: "USD",
    priceLow: 38000,
    priceHigh: 58000,
    rangeNote: "clean, sub-60k-mile examples, PDK or manual",
    trendSummary:
      "Placeholder trend copy. Describe where the S trim currently sits in the market relative to base Cayman and the 987.2 S before it, whether values have been flat/appreciating/softening over the trailing 12–24 months, and any notable variance between manual and PDK cars.",
    asOf: "2026-08-16",
  },
};
