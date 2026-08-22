import type { Platform } from "../types";

/**
 * Reviewed research, August 2026. First pass for this platform — built
 * via web search across specialist/enthusiast sources (RPM Technik,
 * Rennlist, LN Engineering, elferspot, Car & Classic, 9werks,
 * renndriver) rather than owner-supplied curated content. The
 * IMS-bearing-not-applicable claim was specifically cross-checked
 * against LN Engineering (a dedicated IMS-bearing specialist) given
 * how consequential getting that one wrong would be.
 *
 * Deliberately modeled as its own platform rather than a trim of
 * `997-2-carrera`: despite sharing the same "997.2" chassis code, the
 * GT3 uses a completely different, motorsport-derived Mezger engine
 * (no relation to the Carrera's 9A1 direct-injection engine), so none
 * of the Carrera platform's known issues (HPFP, coolant leaks, bore
 * scoring, LED tail light condensation) apply here. Nesting it under
 * that platform would have meant it silently inheriting all of that
 * — factually wrong.
 *
 * No documented bore-scoring concern was found for this engine family
 * in this research pass, so no entry was added for it — that
 * conversation appears specific to the M96/M97/9A1 engine lineage.
 *
 * Updated again August 2026: added a platform-level `image` — a
 * user-supplied illustration of two 997.2 GT3s (white, on a wooded
 * roadside pull-off), used as-is, shown on the platform hub page and
 * platform-level cards. Deliberately separate from the GT3 trim's own
 * `image` (a single red car on a mountain road) — the two fields can
 * each change independently.
 */
export const gt39972: Platform = {
  slug: "997-2-gt3",
  chassisCode: "997.2",
  name: "997.2 GT3",
  shortName: "997.2 GT3",
  teaser:
    "The last GT3 to use the legendary Mezger engine — a purist's naturally aspirated 911 from the same chassis generation as the DFI-powered Carrera, with an entirely different (and entirely separate) risk profile.",
  contentStatus: "reviewed",
  image: {
    src: "/vehicles/997-2-gt3/platform.png",
    alt: "Two 997.2 GT3 cars, white, parked on a wooded roadside pull-off",
    fit: "cover",
  },

  overview: {
    years: "2010–2011",
    layout: "Rear-engine, rear-wheel drive",
    body: "2dr coupe",
    summary:
      "The 997.2 GT3 shares its chassis generation with the 997.2 Carrera, but it isn't mechanically related to it the way a Carrera trim would be — it's powered by a completely different, motorsport-derived Mezger engine rather than the Carrera's 9A1 direct-injection unit, and it's the last GT3 generation to use that engine before the 991 generation switched architectures entirely. Widely regarded as one of the best naturally aspirated GT3s: track-focused, rear-wheel drive only, manual-only (PDK didn't arrive on GT3 until the 991 generation), from a short, low-volume run of just 2,256 units built across the 2010–2011 model years. Critically for buyers coming from IMS-bearing-era research: the Mezger engine's intermediate shaft runs on oil-pressure-fed plain bearings rather than the sealed ball bearing design that causes M96/M97 IMS failures — GT3, Turbo, and GT2 models across the 996 and 997 generations simply aren't affected by that failure mode. Every 997.2 GT3 shares the same recall history, front-axle-lift behavior (on cars so equipped), and RMS wear pattern — engine-displacement-specific detail doesn't apply here since there's only the one GT3 spec.",
    quickFacts: [
      { label: "Production", value: "2010–2011" },
      { label: "Chassis code", value: "997.2" },
      { label: "Layout", value: "Rear-engine, RWD" },
    ],
  },

  sharedKnownIssues: [
    {
      id: "ims-bearing-not-applicable",
      title: "IMS bearing — not applicable to this engine family",
      severity: "clear",
      summary:
        "The Mezger engine's intermediate shaft runs on oil-pressure-fed plain bearings, not the sealed ball bearing design that causes IMS failures on M96/M97 engines. GT3, Turbo, and GT2 models across the 996 and 997 generations aren't affected.",
      detail:
        "Worth stating explicitly since many buyers researching any 911 from this era carry IMS bearing concerns over from the M96/M97-engined Carrera/Boxster/Cayman lineup. The Mezger engine technically has an intermediate shaft too, but it's a fundamentally different, more robust design — oil-pressure-fed plain bearings on both ends rather than a sealed ball bearing that can fail without warning. This is the same engine family used in the 996/997 Turbo and GT2, none of which carry IMS bearing risk either.",
      whatToCheck: [
        "None needed — if a seller or shop tries to sell you an \"IMS inspection\" on a Mezger-engined GT3, that's a red flag about them, not the car",
      ],
    },
    {
      id: "centerlock-hub-recall",
      title: "Centerlock wheel hub recall (build-window specific)",
      severity: "watch",
      summary:
        "Two related recalls affect cars with centerlock wheels — a rear hub/bearing recall for a narrow 2009–2010 build window, and a separate 2011 recall for a locking-mechanism design flaw. Confirm both via VIN.",
      detail:
        "NHTSA campaign 11V285000 covers cars built May 15, 2009 – February 11, 2010 (455 units) — in rare circumstances the rear wheel hub or bearing could break, risking loss of control; Porsche replaced hubs free of charge and revised the maintenance schedule. A separate June 2011 recall covered 1,702 911s with centerlock wheels for a locking-mechanism design flaw that could cause premature hub wear. These are two distinct recalls, not one — confirm completion of both via VIN if the car has centerlock wheels.",
      whatToCheck: [
        "Run the VIN through Porsche's recall lookup to confirm completion of NHTSA campaign 11V285000 if the build date falls in the May 2009–Feb 2010 window",
        "Confirm completion of the separate June 2011 centerlock hub-wear recall as well",
        "Get documented confirmation rather than taking a seller's word for it",
      ],
    },
    {
      id: "front-axle-lift-failure",
      title: "Front-axle lift system failure (on cars so equipped)",
      severity: "watch",
      summary:
        "The optional front-axle lift system has an unusually high failure rate. Repairs are expensive — roughly €3,000–€18,000 depending on what's failed.",
      detail:
        "The optional front-axle lift system (option code I474) raises the nose about 30mm for clearing driveways and speed bumps, but it's a well-documented weak point. Common symptoms: the system raises the nose but won't lower it again, or operates intermittently. Repair estimates range roughly €3,000–€18,000 depending on what's failed, with a replacement pump alone running around £8,000 from some specialists. Only relevant to cars actually equipped with the option, but since it's one of the more desirable specs to shop for, it's worth testing thoroughly rather than assuming it works because the car looks clean.",
      whatToCheck: [
        "If equipped, raise and lower the front-axle lift system multiple times during the test drive",
        "Watch for it failing to lower fully, or operating intermittently",
        "Budget for a real chance of an expensive repair even on a system that tests fine at the moment of purchase",
      ],
    },
    {
      id: "rear-main-seal",
      title: "Rear main seal (RMS) weep",
      severity: "watch",
      summary:
        "The rear main seal can weep oil, especially after the car has sat for several days or longer — a few drops per day is considered normal.",
      detail:
        "Same wear-item profile seen across most water-cooled 911 generations: the rear main seal can weep oil over time, particularly noticeable after the car has been parked for a while. Porsche considers a few drops per day normal, and many specialists recommend waiting to address a minor weep until clutch replacement time, since the transmission is already out for that job anyway.",
      whatToCheck: [
        "Inspect the rear main seal area — the engine/transmission junction — for oil seepage",
        "Ask about any oil spots left under the car when it's parked, and how long the car typically sits between drives",
      ],
    },
    {
      id: "clutch-stiff-when-cold",
      title: "Stiff clutch / balky cold engagement — a character trait, not a defect",
      severity: "clear",
      summary:
        "The standard dual-mass flywheel and genuinely stiff clutch can feel balky when cold or in stop-and-go traffic. Normal for this car, not a sign of a problem.",
      detail:
        "Worth knowing before buying one as a daily driver rather than discovering it on the test drive and assuming something's wrong: the 997.2 GT3's clutch is deliberately heavy, and combined with the standard dual-mass flywheel it can be reluctant to engage smoothly when cold or crawling in traffic. The heavy pedal effort makes more sense once the car is warmed up and driven the way it's meant to be driven. Not a failure mode, not something a PPI needs to flag as a defect — just genuine GT3 character.",
      whatToCheck: [
        "Drive the car cold and judge clutch feel against this expectation, not against a Carrera's",
        "Don't mistake normal stiffness for a failing clutch — assess actual engagement point and any slip/judder separately",
      ],
    },
  ],

  checklist: {
    documentsToRequest: [
      "Full service history — independent Porsche GT specialist or OPC (official Porsche Centre) preferred over generic shop records",
      "VIN-based recall confirmation from Porsche — both the 2009–2010 centerlock hub recall (11V285000) and the separate June 2011 centerlock hub-wear recall, if the car has centerlock wheels",
      "Track-day/PPI history if available — GT3s are commonly tracked, which affects wear items more than mileage alone",
    ],
    questionsForSeller: [
      "Have both centerlock hub recalls been completed, if this car has centerlock wheels?",
      "Is the car equipped with the front-axle lift system, and has it ever needed repair?",
      "Any oil spots under the car, particularly near the engine/gearbox junction?",
      "Has this car seen track use, and if so, how often?",
    ],
    ppiAdvice: [
      "Confirm no IMS bearing concern applies — this is a Mezger engine; don't pay for an \"IMS inspection\" upsell",
      "If equipped, test the front-axle lift system thoroughly — raise and lower it multiple times",
      "Inspect the rear main seal area for oil seepage",
      "Drive the car cold and expect clutch stiffness/balkiness — normal GT3 character, not a fault, but assess engagement point and any slip separately",
      "Use a shop that specializes in Porsche GT cars specifically, not just Porsche generally",
    ],
  },
};
