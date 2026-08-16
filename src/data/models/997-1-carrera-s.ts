import type { Model } from "./types";

/**
 * PLACEHOLDER CONTENT — structure/shape reference only.
 * Replace every field below with reviewed research before this model's
 * `contentStatus` is flipped to "reviewed".
 */
export const carrera9971S: Model = {
  slug: "997-1-carrera-s",
  chassisCode: "997.1",
  name: "997.1 Carrera S",
  shortName: "997.1 Carrera S",
  teaser:
    "The first-generation 997 — widely cross-shopped with the 981, and carrying its own well-documented engine risk to budget for.",
  contentStatus: "placeholder",

  overview: {
    years: "2005–2008",
    engine: "3.8L flat-six, naturally aspirated (M97)",
    layout: "Rear-engine, rear-wheel drive",
    body: "2dr coupe / cabriolet",
    summary:
      "Placeholder overview copy. The 997.1 Carrera S marked a return to more analog styling after the 996, while carrying over the IMS bearing architecture that defines this generation's biggest ownership consideration. This paragraph should be replaced with real positioning: how it compares to the 996 before it and 997.2 after it, and why the IMS question dominates most buying conversations for this car.",
    quickFacts: [
      { label: "Production", value: "2004–2008" },
      { label: "Engine code", value: "M97.01 (placeholder)" },
      { label: "Power", value: "355 hp @ 6,600 rpm" },
      { label: "0–60 mph", value: "4.8s (manual)" },
      { label: "Transmission", value: "6MT or 5-speed Tiptronic S" },
      { label: "Curb weight", value: "~3,175 lb" },
    ],
  },

  knownIssues: [
    {
      id: "ims-bearing",
      title: "Intermediate shaft (IMS) bearing failure",
      severity: "critical",
      summary:
        "Placeholder — the defining known issue for this generation. Summarize failure mode, rough odds, and why it matters so much to buyers.",
      detail:
        "Placeholder detail copy explaining what the IMS bearing does, how failure can lead to catastrophic engine damage, which specific bearing variant this chassis/year uses, and typical preventive-replacement cost during a clutch job.",
      whatToCheck: [
        "Placeholder — ask directly whether the IMS bearing has been replaced/upgraded, and request paperwork",
        "Placeholder — request oil analysis or a magnetic drain plug check for ferrous debris",
        "Placeholder — factor a preventive IMS replacement into your offer if unconfirmed",
      ],
    },
    {
      id: "rms-leak",
      title: "Rear main seal (RMS) leaks",
      severity: "watch",
      summary:
        "Placeholder — common oil-seepage point on this engine family, usually addressed alongside clutch/IMS work.",
      detail:
        "Placeholder detail copy on symptoms, how to distinguish a minor seep from an active leak, and typical repair cost when bundled with other work at the transmission.",
      whatToCheck: [
        "Placeholder — inspect for oil seepage around the bellhousing area",
        "Placeholder — check for oil spots under the car after it's sat overnight",
      ],
    },
    {
      id: "bore-scoring-997",
      title: "Bore scoring on 3.8L variants",
      severity: "watch",
      summary:
        "Placeholder — describe the reported pattern of cylinder bore wear on this specific engine displacement/variant.",
      detail:
        "Placeholder detail copy on how this differs from IMS failure, typical symptoms (excessive oil consumption, blue smoke on startup), and diagnostic approach.",
      whatToCheck: [
        "Placeholder — ask about oil consumption between changes",
        "Placeholder — borescope inspection during PPI, same as IMS check",
      ],
    },
    {
      id: "coolant-tank",
      title: "Coolant expansion tank cracking",
      severity: "watch",
      summary:
        "Placeholder — plastic coolant tank known to crack with age, independent of mileage.",
      detail:
        "Placeholder detail copy on symptoms (low coolant warnings, visible cracking) and replacement cost.",
      whatToCheck: [
        "Placeholder — visually inspect the coolant tank for hairline cracks or repairs",
      ],
    },
    {
      id: "airbag-recall",
      title: "Takata airbag recall coverage",
      severity: "clear",
      summary:
        "Placeholder — verify whether the outstanding safety recall on this VIN has already been completed, not a mechanical red flag.",
      detail:
        "Placeholder detail copy pointing buyers to check recall status by VIN and noting that remedy parts/labor are typically covered.",
      whatToCheck: [
        "Placeholder — check recall status via VIN before or during PPI",
      ],
    },
  ],

  marketContext: {
    currency: "USD",
    priceLow: 42000,
    priceHigh: 65000,
    rangeNote: "clean, sub-70k-mile examples with documented IMS history",
    trendSummary:
      "Placeholder trend copy. Describe recent value trends for this generation, the price premium commanded by cars with a documented IMS bearing upgrade versus unknown history, and how manual vs. Tiptronic affects demand.",
    asOf: "2026-08-16",
  },

  checklist: {
    documentsToRequest: [
      "Full service history / dealer or independent-shop invoices",
      "IMS bearing replacement documentation, if performed",
      "Clutch replacement history (often bundled with IMS work)",
      "Title history / accident or salvage check (Carfax or equivalent)",
    ],
    questionsForSeller: [
      "Has the IMS bearing ever been inspected, replaced, or upgraded — and do you have paperwork?",
      "Any history of oil consumption concerns or bore-scoring discussion with a shop?",
      "Has the Takata airbag recall been completed on this VIN?",
      "Has a pre-purchase inspection ever been done, and can you share the results?",
    ],
    ppiAdvice: [
      "Use a shop that specializes in Porsche, ideally one that performs IMS work regularly",
      "Ask for a borescope inspection of the cylinder bores in addition to any IMS-specific check",
      "Get a compression and/or leak-down test on all six cylinders",
      "If IMS history is unknown, price in a preventive replacement rather than treating it as optional",
    ],
  },
};
