import type { Platform } from "../types";

/**
 * Reviewed research, August 2026. Supersedes an earlier auto-researched
 * pass — this version is built from owner-supplied curated research
 * (see PR discussion for the source document) and should be treated as
 * the authoritative version going forward. Notably: bore scoring moved
 * from a trim-level Critical flag to a platform-level Clear one (the
 * 9A1 direct-injection architecture addresses it, not just IMS), and
 * three platform-wide watch items were added that the prior pass
 * missed entirely (HPFP failure, suspension spring issues, LED tail
 * light condensation). The previous "exhaust flap & AOS" entry isn't
 * part of the curated source and has been dropped rather than carried
 * forward unverified.
 *
 * Updated again August 2026 with a revised source document: bore
 * scoring is walked back from Clear to Watch. It's still true the
 * 9A1's DFI design eliminates the 997.1's *IMS-bearing-driven* bore
 * wear mechanism, but the revised research is explicit that the 9A1
 * can develop bore scoring through a different mechanism (cylinder
 * bore shrinkage / AlSi coating breakdown) at a meaningfully lower —
 * but non-zero — rate. Treating it as fully solved was premature; see
 * PR discussion for the source.
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
      "The 997.2 is a substantial mid-cycle update to the 997, not just a facelift: it replaced the 997.1's M97 engine family with a new direct-injection 9A1 design, introduced Porsche's 7-speed PDK dual-clutch transmission alongside the manual, and — critically for buyers — eliminated the intermediate shaft entirely, which removes IMS bearing failure, the defining 997.1 risk, outright. Bore scoring is a more nuanced story: the 9A1 can still develop it, just through a different mechanism than the M97 (cylinder bore shrinkage or breakdown of the aluminum-silicon cylinder coating, rather than IMS-related causes), and at a meaningfully lower rate — reduced, not solved. Specialist and enthusiast consensus still treats it as the most significantly improved facelift in 911 history, not a cosmetic refresh: even the LED tail lights and updated PCM sit on top of a genuinely different engine underneath. Every 997.2 Carrera shares the same coolant system, fuel-delivery hardware, and RMS wear pattern regardless of trim — engine-displacement-specific detail lives on each trim's own page.",
    quickFacts: [
      { label: "Production", value: "2009–2012" },
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
        "The 997.2's 9A1 engine has no intermediate shaft, so IMS bearing failure — the defining 997.1 risk — doesn't exist on this generation.",
      detail:
        "The intermediate shaft bearing that drives so much of the 997.1 (and earlier water-cooled 911) ownership conversation was designed out entirely with the 9A1 direct-injection engine. This is the single biggest reliability improvement over the 997.1, and worth stating explicitly since many buyers researching 911s carry IMS concerns over from earlier generations that simply don't apply here.",
      whatToCheck: [
        "None needed — if a seller or shop tries to sell you an \"IMS inspection\" on a 997.2, that's a red flag about them, not the car",
      ],
    },
    {
      id: "bore-scoring-reduced-not-eliminated",
      title: "Bore scoring — reduced risk versus 997.1, but not eliminated",
      severity: "watch",
      summary:
        "The 9A1 engine can still develop bore scoring, via a different mechanism than the 997.1's M97 — meaningfully rarer, but a documented, real risk.",
      detail:
        "Bore scoring on the 997.1's M97 engines is tied to intermediate-shaft-related causes; the 9A1's version is different — cylinder bore shrinkage or breakdown of the aluminum-silicon cylinder coating — but it is a documented failure mode, not a solved problem, even though specialist and owner consensus puts the failure rate meaningfully below the M97's. Symptoms are the same as on earlier engines: rising oil consumption and blue smoke on a cold start, with a confirmed case meaning a shortblock rebuild or replacement. More frequent oil changes using a moly-additive oil are commonly recommended as a preventative measure.",
      whatToCheck: [
        "Get a borescope inspection of all six cylinder bores during PPI — don't skip this just because it's a direct-injection engine",
        "Cold start the car yourself and listen for excessive piston slap or rattle that clears within ~30 seconds",
        "Ask about oil-change intervals and whether a moly-additive oil has been used",
      ],
    },
    {
      id: "hpfp-failure",
      title: "High-pressure fuel pump (HPFP) failure",
      severity: "watch",
      summary:
        "An uncommon but real failure point tied specifically to the 9A1 engine's higher-pressure direct-injection fuel system.",
      detail:
        "The HPFP can fail with no reliable warning signs beforehand, causing limp mode or a complete shutdown. Most affected pumps were replaced under a Porsche product update/warranty action in the years since introduction, but it's worth confirming specifically rather than assuming — especially on early (2009) model-year cars, which saw the most reports.",
      whatToCheck: [
        "Ask specifically whether the HPFP has been replaced or inspected, especially on early (2009) model-year cars",
        "During a test drive, watch for hesitation, limp mode, or any sudden loss of power",
        "Ask whether any Porsche product update or warranty action covering the HPFP was performed on this car",
      ],
    },
    {
      id: "coolant-leaks",
      title: "Occasional coolant leaks",
      severity: "watch",
      summary:
        "A handful of coolant leaks have been reported on the 9A1 engine, though not at a level considered a common or systemic issue.",
      detail:
        "Not a defining risk the way coolant crossover pipes are on some earlier generations, but coolant leaks do turn up occasionally on the 9A1 engine. Worth a cooling-system check during PPI regardless of how clean the car looks.",
      whatToCheck: [
        "Check the cooling system for leaks or evidence of prior repairs",
        "Ask about any history of coolant loss, a coolant smell, or an overheating warning",
      ],
    },
    {
      id: "rear-main-seal",
      title: "Rear main seal (RMS) leaks",
      severity: "watch",
      summary:
        "Shared with the 997.1 — a wear item to check for oil seepage during PPI rather than a dominant failure pattern.",
      detail:
        "The rear main seal can weep oil over time on this engine family, same as the 997.1. It's a wear item, not a design flaw specific to the 997.2, and rarely a deal-breaker on its own — but it's easy to check for and worth confirming before you buy.",
      whatToCheck: [
        "Inspect the rear main seal area — the engine/transmission junction — for oil seepage",
        "Ask about any oil spots left under the car when it's parked",
      ],
    },
    {
      id: "suspension-spring-issues",
      title: "Suspension spring issues",
      severity: "watch",
      summary:
        "Shared with the 997.1 generation broadly; worth a suspension-focused inspection item during PPI.",
      detail:
        "Not a dominant failure pattern specific to the 997.2, but a known watch item across the 997 generation broadly. Worth including as a standard PPI line item rather than treating as a car-specific red flag.",
      whatToCheck: [
        "Have the suspension inspected during PPI, including spring condition",
        "Ask whether any suspension components have been replaced, and why",
      ],
    },
    {
      id: "led-tail-light-condensation",
      title: "LED rear light unit condensation",
      severity: "watch",
      summary:
        "The facelifted LED tail lights can develop internal condensation over time, which has caused some units to fail inspection in some markets.",
      detail:
        "The 997.2's facelifted LED tail lights — an upgrade from the 997.1's halogen units — use a sealed housing that can develop condensation inside over time. It's a cosmetic/inspection issue rather than a safety-critical one, but worth a quick visual check since a failed unit means a housing replacement.",
      whatToCheck: [
        "Visually check both LED tail light housings for internal condensation or moisture",
        "Ask if either tail light unit has ever been replaced",
      ],
    },
  ],

  checklist: {
    documentsToRequest: [
      "Full service history — independent Porsche specialist or OPC (official Porsche Centre) records preferred over generic shop records, including annual oil changes at minimum",
      "Records of any HPFP, coolant, or rear main seal work",
      "Title history / accident or salvage check (Carfax or equivalent)",
    ],
    questionsForSeller: [
      "Has the HPFP ever been replaced or inspected, especially if this is an early (2009) model-year car?",
      "Any history of coolant loss, a coolant smell, or an overheating warning?",
      "Any oil spots under the car, particularly near the engine/gearbox junction?",
      "Has a pre-purchase inspection ever been done, and can you share the results?",
    ],
    ppiAdvice: [
      "Confirm no IMS bearing concern applies — don't pay for or accept an \"IMS inspection\" upsell on this generation, since the 9A1 has no intermediate shaft",
      "Get a borescope inspection of the cylinders during PPI — bore scoring is a documented, real risk on this engine (lower rate than the 997.1's M97, but not eliminated)",
      "Cold start test: listen for metallic ticking or knocking in the first ~30 seconds that fades as the engine warms",
      "Check the cooling system for leaks or evidence of prior repairs",
      "Inspect the rear main seal area for oil seepage, and the LED tail light housings for internal condensation",
      "Use a shop that specializes in Porsche, not a generic mechanic",
      "Budget for the PPI even on a car you're excited about — treat it as non-negotiable, not optional",
    ],
  },
};
