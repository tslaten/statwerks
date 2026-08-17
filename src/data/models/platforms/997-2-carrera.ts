import type { Platform } from "../types";

/**
 * Reviewed research, August 2026. Sources: stuttcars 997.2 model guides,
 * RPM Technik and 997dot2.com buyer's-guide notes on 997.1-vs-997.2
 * differences, PCA's "Is Bore Scoring a Real Issue on 997.2 Carrera"
 * tech Q&A, and Rennlist/911uk owner threads on coolant-pipe and
 * exhaust-flap failures. Cross-checked across multiple independent
 * sources before inclusion — see git history/PR discussion for links.
 * Treat as a living document: update as better data arrives.
 */
export const carrera9972: Platform = {
  slug: "997-2-carrera",
  chassisCode: "997.2",
  name: "997.2 Carrera",
  shortName: "997.2 Carrera",
  teaser:
    "The mid-cycle facelift that dropped the IMS bearing entirely — the reliability turning point for the 997 generation.",
  contentStatus: "reviewed",

  overview: {
    years: "2009–2012",
    layout: "Rear-engine, rear-wheel drive",
    body: "2dr coupe / cabriolet",
    summary:
      "The 997.2 is a substantial mid-cycle update to the 997, not just a facelift: it replaced the 997.1's M97 engine family with a new direct-injection 9A1/MA1 design, introduced Porsche's PDK dual-clutch gearbox alongside the manual, and — critically for buyers — eliminated the intermediate shaft bearing that defines the ownership conversation on every 997.1 and earlier water-cooled 911. It sits between the 997.1 before it and the 991 after it, and is widely considered the generation where 911 ownership stopped requiring an asterisk about engine risk. Every 997.2 Carrera shares the same coolant system, exhaust-flap hardware, and RMS wear pattern regardless of trim — engine-displacement-specific detail like bore scoring lives on each trim's own page.",
    quickFacts: [
      { label: "Production", value: "2008–2012" },
      { label: "Chassis code", value: "997.2" },
      { label: "Layout", value: "Rear-engine, RWD" },
    ],
  },

  sharedKnownIssues: [
    {
      id: "ims-bearing-not-applicable",
      title: "IMS bearing — not applicable to this generation",
      severity: "clear",
      summary:
        "The defining change of the 997.2: its direct-injection 9A1/MA1 engine has no intermediate shaft bearing at all, eliminating the failure mode that worries buyers of every earlier water-cooled 911.",
      detail:
        "IMS bearing failure is the headline ownership risk on 996 and 997.1-generation cars with M96/M97 engines. Porsche redesigned the engine internals for the 997.2 specifically to remove that architecture — there's no IMS bearing to fail. This is usually the first question buyers coming from a 997.1 or earlier 911 ask, and it's worth stating plainly: it doesn't apply here.",
      whatToCheck: [
        "None needed — if a seller or shop tries to sell you an \"IMS inspection\" on a 997.2, that's a red flag about them, not the car",
      ],
    },
    {
      id: "coolant-crossover-pipes",
      title: "Front coolant crossover pipe leaks",
      severity: "watch",
      summary:
        "The coolant pipes that cross over between the front wheels, near the steering rack, are a known age-related weak point — rubber sections perish and metal connectors corrode, independent of mileage.",
      detail:
        "Where the pipe sections meet the radiator and cross between the front wheels, the joints can leak as rubber perishes or aluminum connectors corrode. A slow leak shows up as coolant residue or a faint sweet smell under the front of the car; a joint that fully separates is the expensive version of the same problem. Worth checking even on a car with no current warning light.",
      whatToCheck: [
        "Check for coolant residue or corrosion on the front crossover pipes near the steering rack",
        "Ask if the car has ever shown a low-coolant or overheating warning",
        "Confirm whether the coolant pipes have ever been replaced (some owners preemptively upgrade to stainless)",
      ],
    },
    {
      id: "exhaust-flap-aos",
      title: "Exhaust flap & AOS (air-oil separator) faults",
      severity: "watch",
      summary:
        "A failed vacuum solenoid can cause the variable exhaust flaps to stick, and a failing air-oil separator shows up as rough idle and exhaust smoke — both are known wear items on this generation, not exclusive to one trim.",
      detail:
        "The exhaust flap's change-over valve (COV) solenoid is a common failure point across the 911 range, including the 997.2, and a stuck flap usually just changes the exhaust note rather than causing real damage. Separately, a failing AOS lets oil vapor into the intake, showing up as irregular idle (RPM hunting) and blue or white exhaust smoke after the car has idled for a while. Both are moderate-cost repairs, not structural concerns.",
      whatToCheck: [
        "Listen for irregular/hunting idle RPM, especially after letting the car idle for a few minutes",
        "Watch for blue or white exhaust smoke on startup or after extended idling",
        "Ask if the exhaust note has ever changed unexpectedly (possible stuck flap)",
      ],
    },
    {
      id: "rms-leak",
      title: "Rear main seal (RMS) leaks",
      severity: "watch",
      summary:
        "A common, low-grade oil-seepage point at the engine/gearbox junction across this engine family — usually a minor repair, occasionally a sign of more significant wear.",
      detail:
        "Some oil seepage at the rear main seal is common enough on cars in this mileage bracket that light staining alone isn't alarming. Heavier, active dripping is a different story and points to a seal that needs replacing soon. Best checked on a lift rather than a driveway walk-around.",
      whatToCheck: [
        "Ask for the car to be inspected on a lift at the engine/gearbox junction",
        "Distinguish light staining (common, low priority) from active dripping (needs attention soon)",
      ],
    },
  ],

  checklist: {
    documentsToRequest: [
      "Full service history — independent Porsche specialist or OPC (official Porsche Centre) records preferred over generic shop records",
      "Records of any coolant pipe, exhaust flap/AOS, or RMS work",
      "Title history / accident or salvage check (Carfax or equivalent)",
    ],
    questionsForSeller: [
      "Any history of coolant loss, a coolant smell, or an overheating warning?",
      "Has the exhaust note ever changed unexpectedly, or has idle ever felt rough/uneven?",
      "Any oil spots under the car, particularly near the engine/gearbox junction?",
      "Has a pre-purchase inspection ever been done, and can you share the results?",
    ],
    ppiAdvice: [
      "Use a shop that specializes in Porsche, not a generic mechanic",
      "Have the coolant crossover pipes inspected on a lift, not just a visual from above",
      "Check for AOS-related idle irregularity and exhaust smoke after an extended idle period",
      "Get a compression and/or leak-down test on all six cylinders",
      "Budget for the PPI even on a car you're excited about — treat it as non-negotiable, not optional",
    ],
  },
};
