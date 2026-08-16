import type { Platform } from "../types";

/**
 * Reviewed research, August 2026. Sources consulted: LN Engineering
 * bore-scoring technical notes, Rennlist/PistonHeads/Planet-9 owner
 * threads, Design911 and pcarwise 981 buying guides, and Pelican Parts'
 * 981 coolant-system catalog notes. Cross-checked across multiple
 * independent sources before inclusion — see git history/PR discussion
 * for links. Treat as a living document: update as better data arrives.
 */
export const cayman981: Platform = {
  slug: "981-cayman",
  chassisCode: "981",
  name: "981 Cayman",
  shortName: "981 Cayman",
  teaser:
    "The last naturally-aspirated mid-engine Cayman before the 718 switched to turbocharged flat-fours.",
  contentStatus: "reviewed",

  overview: {
    years: "2013–2016",
    layout: "Mid-engine, rear-wheel drive",
    body: "2dr coupe",
    summary:
      "The 981 replaced the 987.2 in 2012 with a stiffer, mostly-aluminum unibody, a wider track, and electric power steering — the last Cayman generation to keep a naturally-aspirated flat-six before the 718 moved to turbocharged flat-fours in 2016. It's widely considered the sweet spot for chassis feel in the model line: heavier and more planted than the 987, more analog and better-sounding than the 718 that replaced it. Every 981 Cayman shares the same coolant system, PASM hardware, and clutch/flywheel wear pattern regardless of trim — engine-specific items like bore scoring live on each trim's own page.",
    quickFacts: [
      { label: "Production", value: "2012–2016" },
      { label: "Chassis code", value: "981" },
      { label: "Layout", value: "Mid-engine, RWD" },
    ],
  },

  sharedKnownIssues: [
    {
      id: "hpfp-failure",
      title: "High-pressure fuel pump (HPFP) failure",
      severity: "watch",
      summary:
        "A documented failure point on the direct-injection MA1 engine family used across the 981 lineup — not universal, but common enough to budget for on a higher-mileage car.",
      detail:
        "The HPFP pressurizes fuel for direct injection and tends to fail in the 100,000–120,000-mile range, though it can happen earlier. Symptoms range from a hard/weak start requiring multiple crank attempts to a sudden power drop and misfire codes under load. It most often throws a P0087 (low fuel rail pressure) code, but early on it can present with no fuel-specific code at all — sellers or shops may mistake it for a battery or starter issue. A new OEM pump runs roughly $1,500–$2,800 before labor; quality remanufactured units are available for less.",
      whatToCheck: [
        "Ask whether the car has ever been hard to start, especially cold, or needed multiple crank attempts",
        "Ask about any sudden power loss or misfire around 4,000 rpm under load",
        "Have the PPI shop scan for stored and pending codes, specifically P0087 and low fuel-rail-pressure faults",
      ],
    },
    {
      id: "coolant-lines",
      title: "Coolant pipes & reservoir aging",
      severity: "watch",
      summary:
        "The front coolant pipes transition between rubber, plastic, and metal sections, and those joints — plus the plastic expansion tank — are a known age-related weak point regardless of mileage.",
      detail:
        "Leaks typically show up as coolant staining or a faint sweet smell, often traced to a pipe joint near the front wheel wells or the plastic coolant reservoir, which can develop a hairline crack that grows into a sudden split. A slow leak is a minor repair; a car that's been driven with low coolant and no warning is the expensive outcome — check for a stored overheating or coolant-level fault even if the dash is currently clear.",
      whatToCheck: [
        "Inspect visible coolant pipes near the front wheel wells for staining, crustiness, or previous repairs",
        "Check the coolant reservoir for hairline cracks and confirm fluid level and color",
        "Ask if the car has ever shown a low-coolant or overheating warning",
      ],
    },
    {
      id: "pasm-suspension",
      title: "PASM faults & suspension top-mount wear (if equipped)",
      severity: "watch",
      summary:
        "PASM (Porsche Active Suspension Management) is generally reliable, but water can get into its connectors and trigger intermittent fault messages; separately, suspension top mounts and bushings age out on higher-mileage cars.",
      detail:
        "An intermittent PASM warning light is more often a corroded or water-intruded connector than a failed damper — worth ruling out before paying for shocks. Genuinely worn top mounts or bushings show up as a knock or thud from the rear over bumps, distinct from a PASM fault. Both are corner-by-corner repairs, not full-suspension jobs, but PASM dampers themselves aren't cheap if one has actually failed.",
      whatToCheck: [
        "Check for a PASM warning light on startup and ask if it's ever appeared intermittently",
        "Listen for a knock or thud from the rear suspension over bumps or speed humps",
        "Inspect shock bodies for visible fluid seepage, and top mounts/bushings for visible wear",
      ],
    },
    {
      id: "engine-mounts",
      title: "Dynamic engine mount wear (Sport Chrono cars)",
      severity: "watch",
      summary:
        "Cars fitted with the Sport Chrono package get hydraulic dynamic engine mounts, which firm up under load and soften at idle — they wear out like any hydraulic mount, and they're not cheap to replace.",
      detail:
        "Symptoms are a noticeable increase in idle vibration or drivetrain shunt on throttle tip-in as the mount loses its hydraulic damping. Because the mounts sit close to coolant hose routing on this generation, replacement labor runs longer than on older Caymans — factor that into any quote. Not every 981 has dynamic mounts; it depends on whether Sport Chrono was optioned, independent of trim.",
      whatToCheck: [
        "Confirm whether the car has Sport Chrono (and therefore dynamic engine mounts) before pricing this in",
        "Feel for excess idle vibration or a clunk on throttle tip-in/lift-off",
        "Ask for engine mount replacement history if the car is higher-mileage",
      ],
    },
    {
      id: "clutch-dmf",
      title: "Clutch & dual-mass flywheel wear (manual cars)",
      severity: "watch",
      summary:
        "A normal wear item on any manual 981, not a defect — but replacement is expensive enough that it belongs in the negotiation, not as a surprise after purchase.",
      detail:
        "A rattle or clatter at idle in neutral, which quiets when the clutch pedal is pressed, is the classic sign of a worn dual-mass flywheel rather than the clutch disc itself. Expect a combined clutch and DMF job together, since replacing one without the other is false economy. Ask specifically for mileage at replacement if it's already been done once.",
      whatToCheck: [
        "Listen for a rattle at idle in neutral that quiets when the clutch pedal is pressed",
        "Ask for clutch/DMF replacement history and mileage at replacement",
        "Feel for a soft, high, or inconsistent clutch bite point during the test drive",
      ],
    },
    {
      id: "di-carbon",
      title: "Direct-injection intake valve carbon buildup",
      severity: "clear",
      summary:
        "An expected characteristic of direct injection generally — not unique to Porsche, not a defect — that shows up as a rough idle or hesitation if it's gone unaddressed for a long time.",
      detail:
        "Because direct injection sprays fuel straight into the cylinder instead of over the intake valves, there's no fuel wash to keep carbon from building up on the valve backs over time. Left unchecked long enough it can cause a rough idle or a slight loss of low-end response; the fix is a walnut-blasting service, not an engine repair. This is a maintenance planning item to ask about, not a reason to walk away from an otherwise good car.",
      whatToCheck: [
        "Ask whether a valve-cleaning/walnut-blasting service has ever been performed, and at what mileage",
        "Note idle smoothness and low-rpm response during the test drive as a rough proxy",
      ],
    },
  ],

  checklist: {
    documentsToRequest: [
      "Full service history / dealer or independent-shop invoices",
      "A DME (digital motor electronics) report on manual cars — it can show whether the engine has been over-revved",
      "Records of any clutch/flywheel, coolant system, or engine mount work",
      "Title history / accident or salvage check (Carfax or equivalent)",
    ],
    questionsForSeller: [
      "Has the car ever thrown a check-engine or PASM warning light, and do you know which code?",
      "Any history of hard/weak starts, sudden power loss, or misfires under load?",
      "Any history of coolant loss, a coolant smell while driving, or an overheating warning?",
      "Has a pre-purchase inspection ever been done, and can you share the results?",
    ],
    ppiAdvice: [
      "Use a shop that specializes in Porsche or mid-engine sports cars, not a generic mechanic",
      "Ask specifically for a borescope inspection of the cylinder bores, not just a visual under the hood",
      "Get a compression and/or leak-down test on all six cylinders",
      "Have the shop pull stored and pending fault codes, including fuel-rail-pressure codes",
      "Budget for the PPI even on a car you're excited about — treat it as non-negotiable, not optional",
    ],
  },
};
