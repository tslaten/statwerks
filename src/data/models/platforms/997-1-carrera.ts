import type { Platform } from "../types";

/**
 * PLACEHOLDER CONTENT — structure/shape reference only.
 * Replace every field below with reviewed research before this platform's
 * `contentStatus` is flipped to "reviewed".
 */
export const carrera9971: Platform = {
  slug: "997-1-carrera",
  chassisCode: "997.1",
  name: "997.1 Carrera",
  shortName: "997.1 Carrera",
  teaser:
    "The first-generation 997 — widely cross-shopped with the 981, and carrying its own well-documented engine risk to budget for.",
  contentStatus: "placeholder",

  overview: {
    years: "2005–2008",
    layout: "Rear-engine, rear-wheel drive",
    body: "2dr coupe / cabriolet",
    summary:
      "Placeholder platform overview copy. The 997.1 Carrera marked a return to more analog styling after the 996, while carrying over the IMS bearing architecture that defines this generation's biggest ownership consideration across every trim. This paragraph should be replaced with real positioning: how it compares to the 996 before it and 997.2 after it, and what's shared across trims before trim-specific detail (displacement, output, pricing) takes over on each trim's page.",
    quickFacts: [
      { label: "Production", value: "2004–2008" },
      { label: "Chassis code", value: "997.1" },
      { label: "Layout", value: "Rear-engine, RWD" },
    ],
  },

  sharedKnownIssues: [
    {
      id: "ims-bearing",
      title: "Intermediate shaft (IMS) bearing failure",
      severity: "critical",
      summary:
        "Placeholder — the defining known issue for this generation, across both Carrera and Carrera S engines. Summarize failure mode, rough odds, and why it matters so much to buyers.",
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
      id: "coolant-tank",
      title: "Coolant expansion tank cracking",
      severity: "watch",
      summary:
        "Placeholder — plastic coolant tank known to crack with age, independent of mileage, across the platform.",
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

  checklist: {
    documentsToRequest: [
      "Full service history / dealer or independent-shop invoices",
      "IMS bearing replacement documentation, if performed",
      "Clutch replacement history (often bundled with IMS work)",
      "Title history / accident or salvage check (Carfax or equivalent)",
    ],
    questionsForSeller: [
      "Has the IMS bearing ever been inspected, replaced, or upgraded — and do you have paperwork?",
      "Any history of oil consumption concerns discussed with a shop?",
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
