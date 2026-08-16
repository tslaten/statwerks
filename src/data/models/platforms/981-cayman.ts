import type { Platform } from "../types";

/**
 * PLACEHOLDER CONTENT — structure/shape reference only.
 * Replace every field below with reviewed research before this platform's
 * `contentStatus` is flipped to "reviewed".
 */
export const cayman981: Platform = {
  slug: "981-cayman",
  chassisCode: "981",
  name: "981 Cayman",
  shortName: "981 Cayman",
  teaser:
    "The last naturally-aspirated, non-turbo mid-engine Cayman before the 718 switched to flat-fours.",
  contentStatus: "placeholder",

  overview: {
    years: "2013–2016",
    layout: "Mid-engine, rear-wheel drive",
    body: "2dr coupe",
    summary:
      "Placeholder platform overview copy. The 981-generation Cayman is widely regarded as a high point for chassis balance in the mid-engine lineup, running the last of Porsche's naturally-aspirated flat-sixes before the 718 moved to turbocharged flat-fours. This paragraph should be replaced with real positioning: how the generation compares to the 987 before it and 718 after it, and what's shared across every trim before trim-specific detail takes over on each trim's page.",
    quickFacts: [
      { label: "Production", value: "2012–2016" },
      { label: "Chassis code", value: "981" },
      { label: "Layout", value: "Mid-engine, RWD" },
    ],
  },

  sharedKnownIssues: [
    {
      id: "clutch-dmf",
      title: "Clutch & dual-mass flywheel wear (manual cars)",
      severity: "watch",
      summary:
        "Placeholder — normal wear item on manual cars across the platform, but replacement is costly enough to factor into negotiation.",
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
        "Placeholder — plastic coolant components can become brittle with age regardless of mileage, across the whole platform.",
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
        "Placeholder — active suspension dampers can leak or fail over time on higher-mileage cars of any trim.",
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
        "Placeholder — expected characteristic of this engine family's direct injection, manageable with routine maintenance, not a red flag by itself.",
      detail:
        "Placeholder detail copy explaining that DI carbon buildup on intake valves is a normal maintenance item across the segment (not unique to Porsche) and how it's typically addressed (walnut blasting) on a normal service interval.",
      whatToCheck: [
        "Placeholder — ask when/if a valve cleaning service was last performed",
        "Placeholder — note as a maintenance planning item, not a deal-breaker",
      ],
    },
  ],

  checklist: {
    documentsToRequest: [
      "Full service history / dealer or independent-shop invoices",
      "Records of any clutch, flywheel, or top-related repairs",
      "Confirmation of factory warranty / CPO status if still in force",
      "Title history / accident or salvage check (Carfax or equivalent)",
    ],
    questionsForSeller: [
      "Has the car ever thrown a check-engine or PASM warning light?",
      "Any history of engine work or oil consumption complaints?",
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
