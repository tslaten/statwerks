import type { Platform } from "../types";

/**
 * Reviewed research, August 2026. First pass for this platform — built
 * directly from owner-supplied curated research (see PR discussion for
 * the source document), not an auto-researched draft being superseded.
 * The source was explicit about a genuinely unsettled question (bore
 * scoring on this generation — see that issue's detail for the
 * two-sided treatment) rather than picking a side, and that nuance is
 * preserved here rather than flattened into a confident one-way claim.
 */
export const carrera9911: Platform = {
  slug: "991-1-carrera",
  chassisCode: "991.1",
  name: "991.1 Carrera",
  shortName: "991.1 Carrera",
  teaser:
    "An all-new platform over the 997 — more refined, more modern, and the last naturally aspirated 911 generation before turbocharging.",
  contentStatus: "reviewed",

  overview: {
    years: "2012–2016",
    layout: "Rear-engine, RWD or AWD (Carrera 4/4S)",
    body: "2dr coupe / cabriolet",
    summary:
      "The 991.1 is an all-new platform, not a facelift of the 997 — a longer wheelbase, wider track, and a significant refinement step forward: more spacious, more modern electronics (PCM, driver-assist features), and generally excellent build quality. It's naturally aspirated across the whole Carrera range, with turbocharging arriving only in the following 991.2. Introduced for the 2012 model year and replaced by the turbocharged 991.2 for 2017, this generation is widely regarded as a major refinement over the 997 — and the Carrera S from this generation is, per market data, the most popular 911 variant globally. Every 991.1 Carrera shares the same recall/service-campaign history, AOS wear pattern, and changeover-valve behavior regardless of trim — engine-displacement-specific detail lives on each trim's own page.",
    quickFacts: [
      { label: "Production", value: "2012–2016" },
      { label: "Chassis code", value: "991.1" },
      { label: "Layout", value: "Rear-engine, RWD/AWD" },
    ],
  },

  sharedKnownIssues: [
    {
      id: "bore-scoring-disputed",
      title: "Bore scoring — sources disagree on whether it's a real risk here",
      severity: "watch",
      summary:
        "Genuinely unsettled: one specialist source lists the 991.1's DFI engine as theoretically susceptible, but no confirmed real-world case turned up on the 991.1 specifically in this research pass.",
      detail:
        "Worth stating plainly rather than picking a side: one specialist engine-parts supplier lists the 991.1's DFI engine family as theoretically susceptible to bore scoring — the same underlying mechanism seen on the 997.2 — while other technical sources report no confirmed real-world cases on the 991.1 specifically, describing the risk as effectively resolved by this point in Porsche's engine evolution. Unlike the 997.2, where a real documented case exists, this research pass did not turn up a confirmed 991.1 case. Treat this as a lower-probability watch item than on the 997.2 — worth a borescope check for peace of mind, not something to be alarmed about.",
      whatToCheck: [
        "Get a borescope inspection of the cylinder bores during PPI as routine due diligence — a clean result costs little and settles a genuinely open question",
        "Cold start the car yourself and listen for excessive piston slap or rattle that clears within ~30 seconds",
      ],
    },
    {
      id: "aos-failure",
      title: "Air-oil separator (AOS) failure",
      severity: "watch",
      summary:
        "Regulates crankcase pressure and separates oil from blow-by gases; a failed AOS causes oil consumption, blue smoke at startup, and rough idle. Common enough past 100,000 miles to be treated as close to a maintenance item.",
      detail:
        "The AOS is more of a wear part than a rare failure on this generation — common enough past 100,000 miles that many owners and specialists treat replacement as close to routine maintenance rather than a red flag. Replacement is relatively inexpensive, roughly $400–700 in parts.",
      whatToCheck: [
        "Watch for blue smoke at cold start and listen for a rough idle",
        "Ask about oil consumption between changes, especially on higher-mileage cars",
        "Ask whether the AOS has already been replaced, and at what mileage",
      ],
    },
    {
      id: "changeover-valve",
      title: "Changeover valve (COV) fault codes",
      severity: "watch",
      summary:
        "A separate, real issue from bore scoring — request a full diagnostic scan for changeover-valve fault codes during PPI.",
      detail:
        "Multiple stored changeover-valve fault codes indicate ongoing valve failures rather than a one-off glitch, so this is worth a dedicated diagnostic scan rather than assuming a clean dash means a clean system.",
      whatToCheck: [
        "Request a full diagnostic scan specifically checking for changeover-valve fault codes during PPI",
        "Ask whether any COV-related codes have appeared in prior service history, even if since cleared",
      ],
    },
    {
      id: "exhaust-tailpipe-fracture",
      title: "Exhaust tailpipe fracture risk — service campaign (2012–2013)",
      severity: "watch",
      summary:
        "Affects standard-exhaust 2012–2013 Carrera/Carrera 4 models. Confirm via VIN whether this service campaign has been completed.",
      detail:
        "A factory service campaign addressing a tailpipe fracture risk on standard-exhaust 2012–2013 Carrera and Carrera 4 models. Not every car in this build window is necessarily still affected if the campaign has already been completed, but it's a quick, free VIN check worth doing before you buy.",
      whatToCheck: [
        "Check the car's build date/VIN against Porsche's service-campaign records for the 2012–2013 exhaust tailpipe fracture campaign",
        "Confirm completion in writing rather than taking a seller's word for it",
      ],
    },
    {
      id: "hood-lock-bracket",
      title: "Front hood lock bracket replacement — service campaign (2014–2015)",
      severity: "watch",
      summary:
        "Affects 2014–2015 model year cars. Confirm completion via VIN.",
      detail:
        "A factory service campaign covering the front hood lock bracket on 2014–2015 model year cars. Like the exhaust campaign, this is a free VIN check worth running regardless of how clean the car looks.",
      whatToCheck: [
        "Check the car's VIN against Porsche's service-campaign records for the 2014–2015 hood lock bracket campaign",
        "Confirm completion in writing rather than taking a seller's word for it",
      ],
    },
    {
      id: "takata-airbag",
      title: "Takata airbag inflator recall",
      severity: "watch",
      summary:
        "An industry-wide recall, not Porsche-specific, affecting various model years across this generation. Confirm completion via VIN using Porsche's official recall lookup tool.",
      detail:
        "The Takata inflator recall is an industry-wide safety issue that affected many manufacturers, not something specific to Porsche or this platform — but it's still a safety-relevant open recall worth ruling out before buying, since a defective inflator is a real injury risk in a crash.",
      whatToCheck: [
        "Run the VIN through Porsche's official recall lookup tool to confirm Takata airbag completion status",
        "Don't accept a seller's assurance alone — get documented confirmation",
      ],
    },
    {
      id: "rear-main-seal",
      title: "Rear main seal concerns",
      severity: "watch",
      summary:
        "A wear item shared across recent 911 generations — check for oil seepage during PPI rather than treating it as a common failure pattern.",
      detail:
        "Same wear-item profile seen on the 997.2 and other recent generations: the rear main seal can weep oil over time. It's not a design flaw specific to this generation, and rarely a deal-breaker on its own, but easy to check for and worth confirming before you buy.",
      whatToCheck: [
        "Inspect the rear main seal area — the engine/transmission junction — for oil seepage",
        "Ask about any oil spots left under the car when it's parked",
      ],
    },
  ],

  checklist: {
    documentsToRequest: [
      "VIN-based recall/service-campaign confirmation from Porsche — exhaust tailpipe fracture (2012–13), hood lock bracket (2014–15), and Takata airbag inflator",
      "Full service history — independent Porsche specialist or OPC (official Porsche Centre) records preferred over generic shop records",
    ],
    questionsForSeller: [
      "Have all recall and service campaigns been completed — specifically exhaust tailpipe fracture, hood lock bracket, and Takata airbag?",
      "Any history of oil consumption, blue smoke at cold start, or rough idle?",
      "Any oil spots under the car, particularly near the engine/gearbox junction?",
    ],
    ppiAdvice: [
      "Request a full diagnostic scan for changeover valve (COV) fault codes",
      "Get a borescope inspection of the cylinders as routine due diligence — bore-scoring evidence for this generation is thin, but a clean result costs little and settles the question",
      "Check for AOS-related symptoms: oil consumption, blue smoke at cold start, rough idle",
      "Inspect the rear main seal area for oil seepage",
      "Use a shop that specializes in Porsche, not a generic mechanic",
    ],
  },
};
