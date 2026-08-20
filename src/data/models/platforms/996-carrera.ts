import type { Platform } from "../types";

/**
 * Reviewed research, August 2026. First pass for this platform — built
 * via web search across specialist/enthusiast sources (LN Engineering,
 * Rennlist, PCA, Pelican Parts, RennTech, Repasi Motorwerks, classic.com
 * aggregate pricing). Note on sourcing quality: WebFetch (direct page
 * retrieval) was blocked in this research pass for every domain tried,
 * so every claim below traces to WebSearch's synthesized result
 * snippets rather than a full primary-source page read. Treat specific
 * numbers as "reported by X," not independently re-verified — flagged
 * per-item below where sources genuinely disagreed.
 *
 * This is the base 996 Carrera — the 996 generation never had a
 * rear-wheel-drive "Carrera S" the way later generations did (that
 * badge debuted with the 997). Its closest AWD analog, the Carrera 4S
 * (widebody, Turbo brakes/suspension, same naturally-aspirated M96
 * engine as base), isn't covered here; this platform and its one trim
 * so far are RWD Carrera only.
 *
 * The 996 generation spans two meaningfully different engine specs
 * under one M96 architecture — 996.1 (1999–2001 US, 3.4L) and the 2002
 * facelift 996.2 (3.6L) — rather than the kind of full engine-family
 * swap that split the 997.1 and 997.2 into separate platforms on this
 * site. IMS bearing design (dual-row vs. single-row) tracks this same
 * model-year line, and sources disagree on the exact cutoff — one pass
 * says "1999–2000 dual-row, 2000–2005 single-row," another says the
 * transition happened mid-year 2000. Rather than assert a hard year
 * boundary, this is flagged as something to verify via engine serial
 * number, not model year alone.
 */
export const carrera996: Platform = {
  slug: "996-carrera",
  chassisCode: "996",
  name: "996 Carrera",
  shortName: "996 Carrera",
  teaser:
    "The first water-cooled 911, and the car most associated with the IMS bearing conversation — now a 20+ year old classic with most of the fleet already addressed.",
  contentStatus: "reviewed",

  overview: {
    years: "1999–2004",
    layout: "Rear-engine, rear-wheel drive",
    body: "2dr coupe / cabriolet",
    summary:
      "The 996 was the first water-cooled 911 — a major architectural break from the air-cooled cars that came before it, and the generation that introduced the M96 engine family this platform's known issues center on. It's also the entry point to 911 ownership on this site: 996 Carrera prices sit meaningfully below every other generation covered here. The M96 IMS (intermediate shaft) bearing is the defining ownership conversation for this car, but it's a well-understood one at this point — LN Engineering reports over 35,000 IMS Retrofit and 3,000 IMS Solution kits installed since 2008, meaning a large share of the surviving fleet has plausibly already had it addressed. The facelift at 2002 (996.2) brought a larger 3.6L engine and revised headlights, but stayed on the same M96 architecture — this platform covers both 996.1 and 996.2 rather than splitting them, since the IMS-relevant engine family didn't change the way it did between the 997.1 and 997.2.",
    quickFacts: [
      { label: "Production", value: "1999–2004" },
      { label: "Chassis code", value: "996" },
      { label: "Layout", value: "Rear-engine, RWD" },
    ],
  },

  sharedKnownIssues: [
    {
      id: "ims-bearing-failure",
      title: "IMS (intermediate shaft) bearing failure",
      severity: "watch",
      summary:
        "The defining 996 ownership risk — a bearing that can fail without warning and destroy the engine. Real, well-documented, and largely addressable, but confirm the specific car's history rather than assuming.",
      detail:
        "The M96 engine's intermediate shaft runs on a bearing that can fail catastrophically with no warning. Design changed across the production run: early cars (roughly 1999–2000) used a dual-row bearing with a cited failure rate around 1–2%; from roughly 2000/2001 onward, a single-row 6204 bearing was used, with a cited failure rate closer to 8% (up to 10% by some warranty-period data). Sources disagree on the exact model-year cutoff for this transition — don't rely on model year alone; LN Engineering publishes an engine-serial-number-based bearing identification lookup that's the more reliable way to confirm which bearing generation a specific car has. Those failure-rate percentages come from warranty-period data only, and real-world lifetime failure rate outside the warranty window is believed to run meaningfully higher. Cost of a catastrophic failure varies widely by shop and what's found — figures cited range from roughly $8,000–$20,000 for a repair/rebuild, up to $40,000+ if the engine is destroyed beyond economical rebuild. Preventive replacement is far cheaper: LN Engineering's IMS Retrofit kit runs under $1,000 in parts (roughly $2,000–$3,500 all-in with labor), and the IMS Solution kit (a more thorough fix) runs under $2,000 in parts; the job takes 10–14 hours of labor either way. Don't reject a 996 outright for an unaddressed bearing — budget for the retrofit and prioritize cars with documented replacement.",
      whatToCheck: [
        "Ask for documentation (receipts, invoice) of any prior IMS bearing retrofit or replacement — don't take a seller's word alone",
        "If undocumented, have a specialist confirm the bearing generation via engine serial number, not model year alone",
        "Budget roughly $2,000–$3,500 for a preventive retrofit if none has been done, and factor that into your offer",
      ],
    },
    {
      id: "rear-main-seal",
      title: "Rear main seal (RMS) leaks",
      severity: "watch",
      summary:
        "A common, persistent nuisance leak across the whole run — rarely catastrophic, but worth checking on any car, including later ones.",
      detail:
        "Porsche redesigned the rear main seal a number of times across the 996's production, improving but never fully solving the leak. A revised flange/seal for the intermediate shaft bearing area arrived by roughly model-year 2002, but the older-style seal wasn't used consistently even after that point. In the field, RMS leaks and intermediate-shaft-flange leaks get conflated — proper diagnosis matters before assuming which is actually leaking. Because addressing either requires separating the engine and transmission, RMS replacement is commonly bundled into an IMS retrofit job rather than done on its own.",
      whatToCheck: [
        "Inspect the rear main seal / engine-transmission junction area for oil seepage",
        "Ask about any oil spots left under the car when parked, and how long it typically sits between drives",
        "If an IMS retrofit is being planned anyway, ask about bundling an RMS replacement into the same job",
      ],
    },
    {
      id: "bore-scoring",
      title: "Bore scoring — real on the M96, but the strongest documentation ties to later/higher-output engines",
      severity: "watch",
      summary:
        "A genuine risk on this engine family tied to its open-deck design and cylinder coating, though sourcing suggests it may be more common on the later 3.8L M97 than the base 996's 3.4L/3.6L M96.",
      detail:
        "The M96's open-deck crankcase design runs hotter on one bank, and the Alusil/Lokasil aluminum-silicon cylinder coating can deteriorate over time; resulting particles get trapped between piston and bore, causing scoring. Repairing bore scoring alone runs roughly $5,000–$6,000, and it's often bundled into a full engine rebuild running $15,000–$30,000+. One source specifically attributes bore scoring more to the 3.8L M97 engine used in the later 997.1 Carrera S/4S (and some late 996 GT3 engines) than to the base 996 Carrera's smaller-displacement M96 — a real disagreement in how the sourcing frames this risk. Treat bore scoring as a documented M96-family risk worth checking for, not as a base-Carrera-specific certainty at the same rate cited for later, higher-output engines.",
      whatToCheck: [
        "Get a borescope inspection of the cylinder bores during PPI",
        "Cold start the car yourself and listen for excessive piston slap or rattle that clears within ~30 seconds",
        "Ask about oil-change frequency and whether the car has regularly been driven hard on a cold engine",
      ],
    },
    {
      id: "d-chunk-cylinder-liner",
      title: "\"D-chunk\" cylinder liner failure — rare, catastrophic, concentrated on early engines",
      severity: "watch",
      summary:
        "A rare but serious failure where a section of cast-in cylinder liner cracks off, reported mostly on early (996.1, 3.4L) engines.",
      detail:
        "Porsche cast the M96's cylinder liners directly into the engine case using an insert-mold process, with the liners \"floating\" in a coolant-filled area. Vibration and twisting during normal operation can crack the liner, almost exclusively in the two middle cylinders, with a section (\"the D-chunk\") breaking off. One source ties this mostly to the smaller-displacement early engines (Boxster 2.5L and the 996.1's 3.4L Carrera), suggesting it's more a concern on 1999–2001 cars than the 2002+ facelift's 3.6L — this wasn't independently cross-confirmed by a second source. Counterintuitively, it's reported as occurring mostly on gently-driven cars rather than track-driven ones. Rare, but a confirmed case typically means the engine needs to come apart for a liner repair.",
      whatToCheck: [
        "No specific pre-purchase test exists for this — it's a rare failure that doesn't reliably show warning signs beforehand",
        "Ask about the car's use history and how it's typically been driven",
        "Treat as a small residual risk on early (1999–2001) 3.4L cars specifically, not a reason to avoid the platform",
      ],
    },
    {
      id: "coolant-pipe-failures",
      title: "Coolant pipe / connection failures",
      severity: "watch",
      summary:
        "An ongoing maintenance item across the whole M96 lifetime, not a one-time old-car problem — factory pipe joints and plastic coolant elbows can crack or fail with age.",
      detail:
        "Porsche's factory coolant pipe joints (six to eight per engine) are glued rather than welded, and can fail eventually under normal use; a specific sub-issue involves molded plastic coolant elbow pipes to the oil cooler/heat exchanger with thin walls at the O-ring seal groove that crack over time and mileage. Unlike IMS and RMS, this isn't limited to the oldest examples — it's described as an ongoing risk across the platform's life, and ignoring a leak risks overheating and serious engine damage. Common fixes range from \"pinning\" a leaking joint as a cheap patch, to replacing the plastic elbows with aftermarket metal coolant pipes as a preventive upgrade.",
      whatToCheck: [
        "Check the cooling system for leaks or evidence of prior repairs, including at pipe joints and the oil-cooler elbow",
        "Ask whether any coolant pipes have been replaced (factory plastic vs. aftermarket metal) and when",
        "Don't assume a leak-free car today stays that way — this is presented as an ongoing wear item, not a fix-once-and-done job",
      ],
    },
    {
      id: "headlight-adjustment-recall",
      title: "Headlight adjustment screw cover recall",
      severity: "watch",
      summary:
        "A minor safety recall (NHTSA campaign 22V-656 / Porsche code ANB4) covering a missing cover over a headlight adjustment screw — confirm completion via VIN.",
      detail:
        "NHTSA campaign 22V-656 (Porsche internal code ANB4) addressed a missing cover over a headlight adjustment screw, with owner notification beginning October 2022. This campaign covers a large multi-model, multi-year Porsche population, not just the 996, so confirm applicability to a specific VIN rather than assuming. Research for this platform could not retrieve a full itemized recall list beyond this campaign (page access was blocked) — run an independent VIN-based NHTSA lookup for any specific car under consideration rather than treating this as the complete recall history.",
      whatToCheck: [
        "Run the VIN through NHTSA's recall lookup to confirm completion of campaign 22V-656, if applicable",
        "Don't assume this is the only recall that applies — do a fresh VIN-based lookup rather than relying on this list alone",
      ],
    },
  ],

  checklist: {
    documentsToRequest: [
      "Full service history — independent Porsche specialist records preferred over generic shop records",
      "Documentation of any IMS bearing retrofit, replacement, or inspection — receipts/invoices, not just a seller's claim",
      "VIN-based recall confirmation from NHTSA",
      "Title history / accident or salvage check (Carfax or equivalent)",
    ],
    questionsForSeller: [
      "Has the IMS bearing been inspected, retrofitted, or replaced? Do you have documentation?",
      "Any history of coolant loss, overheating, or pipe/joint repairs?",
      "Any oil spots under the car, particularly near the engine/gearbox junction?",
      "Has a pre-purchase inspection ever been done, and can you share the results?",
    ],
    ppiAdvice: [
      "Confirm IMS bearing generation via engine serial number, not model year alone, if no retrofit documentation exists",
      "Get a borescope inspection of the cylinder bores during PPI",
      "Check the cooling system thoroughly, including pipe joints and the oil-cooler elbow",
      "Inspect the rear main seal area for oil seepage",
      "Use a shop that specializes in Porsche, and ideally has specific 996/M96 experience",
      "Budget for a preventive IMS retrofit (~$2,000–$3,500) in your offer if the car doesn't already have documented work",
    ],
  },
};
