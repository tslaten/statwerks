import type { Model } from "./types";

/**
 * PLACEHOLDER CONTENT — structure/shape reference only.
 * Replace every field below with reviewed research before this model's
 * `contentStatus` is flipped to "reviewed".
 */
export const cayman981S: Model = {
  slug: "981-cayman-s",
  chassisCode: "981",
  name: "981 Cayman S / Boxster S",
  shortName: "981 Cayman S",
  teaser:
    "The last naturally-aspirated, non-turbo mid-engine Cayman/Boxster before the 718 switched to flat-fours.",
  contentStatus: "placeholder",

  overview: {
    years: "2013–2016",
    engine: "3.4L flat-six, naturally aspirated (direct injection)",
    layout: "Mid-engine, rear-wheel drive",
    body: "2dr coupe (Cayman) / 2dr convertible (Boxster)",
    summary:
      "Placeholder overview copy. The 981-generation Cayman S and Boxster S are widely regarded as a high point for chassis balance in the mid-engine lineup, running the last of Porsche's naturally-aspirated flat-sixes before the 718 moved to turbocharged flat-fours. This paragraph should be replaced with real positioning: what makes this generation desirable, where it sits relative to the 987 before it and 718 after it, and who it's typically cross-shopped against.",
    quickFacts: [
      { label: "Production", value: "2012–2016" },
      { label: "Engine code", value: "MA1.74 (placeholder)" },
      { label: "Power", value: "325 hp @ 7,400 rpm" },
      { label: "0–60 mph", value: "4.6s (PDK w/ Sport Chrono)" },
      { label: "Transmission", value: "6MT or 7-speed PDK" },
      { label: "Curb weight", value: "~2,974 lb (Cayman S, PDK)" },
    ],
  },

  knownIssues: [
    {
      id: "bore-scoring",
      title: "Engine bore scoring",
      severity: "critical",
      summary:
        "Placeholder — describe the bore-scoring risk pattern reported on this engine family, which years/conditions are most implicated, and typical repair cost.",
      detail:
        "Placeholder detail copy. This section should explain the failure mechanism in plain language (cold-start cylinder wall wear, etc.), reference how widespread it actually is versus forum anecdote, and give a realistic cost range for a shortblock replacement if confirmed.",
      whatToCheck: [
        "Placeholder — cold start listen for excessive piston slap/rattle that clears after ~30s",
        "Placeholder — request a borescope inspection of cylinder walls during PPI",
        "Placeholder — pull oil analysis / check for metal content if seller has recent history",
      ],
    },
    {
      id: "convertible-top",
      title: "Convertible top motor & hydraulics (Boxster only)",
      severity: "critical",
      summary:
        "Placeholder — summarize known convertible-top actuation issues on Boxster variants of this chassis.",
      detail:
        "Placeholder detail copy covering hydraulic pump wear, torn top material, and misalignment sensor faults, with an approximate repair cost range.",
      whatToCheck: [
        "Placeholder — cycle the top up and down twice during inspection, listen for pump strain",
        "Placeholder — check for stored fault codes related to top control module",
      ],
    },
    {
      id: "clutch-dmf",
      title: "Clutch & dual-mass flywheel wear (manual cars)",
      severity: "watch",
      summary:
        "Placeholder — normal wear item on manual cars, but replacement is costly enough to factor into negotiation.",
      detail:
        "Placeholder detail copy on expected clutch/DMF life, symptoms of a failing dual-mass flywheel (rattle at idle in neutral), and replacement cost range.",
      whatToCheck: [
        "Placeholder — listen for rattle at idle in neutral with clutch engaged",
        "Placeholder — ask for clutch replacement history and mileage at replacement",
      ],
    },
    {
      id: "coolant-lines",
      title: "Coolant pipes & plastic tank aging",
      severity: "watch",
      summary:
        "Placeholder — plastic coolant components can become brittle with age regardless of mileage.",
      detail:
        "Placeholder detail copy on which coolant system components are known to age out, typical symptoms (seepage, sweet smell), and replacement cost.",
      whatToCheck: [
        "Placeholder — inspect visible coolant lines for staining or crustiness",
        "Placeholder — check coolant reservoir level and color",
      ],
    },
    {
      id: "pasm-suspension",
      title: "PASM shock wear (if equipped)",
      severity: "watch",
      summary:
        "Placeholder — active suspension dampers can leak or fail over time on higher-mileage cars.",
      detail:
        "Placeholder detail copy on PASM shock lifespan, symptoms of failure (harsh ride, warning light), and replacement cost per corner.",
      whatToCheck: [
        "Placeholder — check for PASM warning light on dash after startup",
        "Placeholder — inspect shock bodies for visible fluid seepage",
      ],
    },
    {
      id: "di-carbon",
      title: "Direct-injection carbon buildup",
      severity: "clear",
      summary:
        "Placeholder — expected characteristic of direct-injection engines, manageable with routine maintenance, not a red flag by itself.",
      detail:
        "Placeholder detail copy explaining that DI carbon buildup on intake valves is a normal maintenance item across the segment (not unique to Porsche) and how it's typically addressed (walnut blasting) on a normal service interval.",
      whatToCheck: [
        "Placeholder — ask when/if a valve cleaning service was last performed",
        "Placeholder — note as a maintenance planning item, not a deal-breaker",
      ],
    },
  ],

  marketContext: {
    currency: "USD",
    priceLow: 38000,
    priceHigh: 58000,
    rangeNote: "clean, sub-60k-mile examples, PDK or manual",
    trendSummary:
      "Placeholder trend copy. Describe where this generation currently sits in the market relative to the 987.2 before it and 718 after it, whether values have been flat/appreciating/softening over the trailing 12–24 months, and any notable variance between manual and PDK cars or Cayman vs. Boxster body styles.",
    asOf: "2026-08-16",
  },

  checklist: {
    documentsToRequest: [
      "Full service history / dealer or independent-shop invoices",
      "Records of any clutch, flywheel, or top-related repairs",
      "Confirmation of factory warranty / CPO status if still in force",
      "Title history / accident or salvage check (Carfax or equivalent)",
    ],
    questionsForSeller: [
      "Has the car ever thrown a check-engine or PASM warning light?",
      "Any history of engine work, oil consumption complaints, or bore-scoring discussion with a shop?",
      "Is the convertible top (Boxster) fully operational with no fault codes?",
      "Has a pre-purchase inspection ever been done, and can you share the results?",
    ],
    ppiAdvice: [
      "Use a shop that specializes in Porsche or mid-engine sports cars, not a generic mechanic",
      "Ask specifically for a borescope inspection of the cylinder bores, not just a visual under the hood",
      "Get a compression and/or leak-down test on all six cylinders",
      "Budget for the PPI even on a car you're excited about — treat it as non-negotiable, not optional",
    ],
  },
};
