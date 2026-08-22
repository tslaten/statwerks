import type { Platform } from "../types";

/**
 * Reviewed research, August 2026. Curated content supplied directly by
 * the site owner (public sale/owner-forum aggregation), incorporated
 * verbatim where possible. Supersedes an earlier auto-researched pass —
 * see PR/commit history for what changed and why.
 *
 * Updated again August 2026: added "bore-scoring-rare" as a genuine
 * platform-wide Watch item. The earlier pass treated bore scoring as
 * enthusiast-forum noise with no documented pattern on this engine
 * family; the owner's revised research is explicit that it's rare but
 * real on the 981's MA1 direct-injection engine, correlated with
 * cold-engine hard driving and infrequent oil changes. Mirrors the
 * same walk-back already made on the 997.2 Carrera platform page.
 *
 * Updated again August 2026: added a platform-level `image` — a
 * user-supplied illustration of two 981 Cayman S cars (silver and
 * red), used as-is, shown on the platform hub page and platform-level
 * cards. This is deliberately separate from the Cayman S trim's own
 * `image` (a single white car) — the two fields can each change
 * independently.
 */
export const cayman981: Platform = {
  slug: "981-cayman",
  chassisCode: "981",
  name: "981 Cayman",
  shortName: "981 Cayman",
  teaser:
    "The last naturally-aspirated mid-engine Cayman before the 718 switched to turbocharged flat-fours.",
  contentStatus: "reviewed",
  image: {
    src: "/vehicles/981-cayman/platform.png",
    alt: "Two 981 Cayman S cars, silver and red, parked in front of a modern house at dusk",
    fit: "cover",
  },

  overview: {
    years: "2013–2016",
    layout: "Mid-engine, rear-wheel drive",
    body: "2dr coupe",
    summary:
      "Launched in Europe in late 2013 (U.S. model years run 2014–2016), the 981 was a meaningful step up from the 987 in chassis stiffness, styling, and interior quality — the first Cayman generation with styling distinct from its Boxster sibling, even though the two share the same platform. It's widely regarded by the enthusiast community as one of the best-driving Caymans, with generally strong reliability by Porsche standards, before giving way to the turbocharged 718 Cayman (982) in 2017. Every 981 Cayman shares the same platform-wide wear items below regardless of trim — engine-specific detail lives on each trim's own page.",
    quickFacts: [
      { label: "Production", value: "2012–2016" },
      { label: "Chassis code", value: "981" },
      { label: "Layout", value: "Mid-engine, RWD" },
    ],
  },

  sharedKnownIssues: [
    {
      id: "bonnet-catch-recall",
      title: "Front bonnet (frunk) catch recall — narrow build window",
      severity: "critical",
      summary:
        "Cars built May 5 – June 6, 2014 may have a front bonnet (frunk) catch that can fail and allow the hood to open at speed — a safety recall, not a cosmetic issue.",
      detail:
        "A narrow production window — May 5 to June 6, 2014 — is affected by a bonnet catch that can fail, allowing the front trunk lid to open unexpectedly at speed. If a car's build date falls in this window, confirm recall completion via VIN with a Porsche dealer before you rely on anything else about the car. This is a safety recall, not a wear item, and should be resolved (or clearly priced in) regardless of how clean the car is otherwise.",
      whatToCheck: [
        "Check the car's build date (not just model year) against the May 5 – June 6, 2014 window",
        "If in that window, run the VIN through a Porsche dealer or Porsche's recall lookup to confirm the recall has been completed",
        "Don't take a seller's word for it — get documented confirmation of recall completion",
      ],
    },
    {
      id: "padm-mount-failure",
      title: "PADM (Porsche Active Drivetrain Mounts) failure",
      severity: "watch",
      summary:
        "Electronically controlled engine mounts on cars so equipped commonly fail over time — a fault-code check and connector inspection during PPI can save you from paying for a mount you don't need.",
      detail:
        "PADM electronically varies engine mount stiffness — firm under load, soft at idle — on cars optioned with the feature. These mounts commonly fail with age. Before assuming a full mount replacement is needed, verify the wiring and connector first, since a bad connector can produce symptoms that mimic mount failure at a fraction of the repair cost.",
      whatToCheck: [
        "Confirm whether the car is actually equipped with PADM before pricing this in",
        "Check for PADM-related fault codes during PPI",
        "Verify wiring and connector condition before accepting a quote for mount replacement",
      ],
    },
    {
      id: "ac-condenser-corrosion",
      title: "A/C condenser corrosion from debris buildup",
      severity: "watch",
      summary:
        "Leaves and road debris can pack into the lower corner of the A/C condensers, trapping moisture that corrodes the aluminum until a leak develops — more common on cars from leafy or wet climates.",
      detail:
        "Debris collects in the lower corners of the condenser cores and holds moisture against the aluminum fins, slowly corroding them until a refrigerant leak develops. It's climate- and parking-dependent rather than universal, but worth a visual check during PPI regardless, since a failed condenser is a real if not huge repair.",
      whatToCheck: [
        "Visually inspect the A/C condenser's lower corners for corrosion or leaf/debris buildup during PPI",
        "Confirm the A/C blows cold during the test drive",
        "Ask where the car has typically been parked or driven — leafy or coastal climates raise the risk",
      ],
    },
    {
      id: "electrical-gremlins-general",
      title: "Scattered electrical faults (fuel door actuator, PSM, infotainment)",
      severity: "watch",
      summary:
        "Owner reports include isolated issues like fuel door actuator failure, PSM system faults, and infotainment quirks — no single dominant failure pattern, mostly one-off gremlins rather than a systemic issue.",
      detail:
        "These are best described as gremlins rather than a defect: isolated reports of fuel door actuator failure, PSM (Porsche Stability Management) faults, and infotainment quirks appear across the ownership base, but no single component stands out as a systemic weak point. Individually inexpensive to fix, but worth flushing out during a full electrical check rather than discovering them piecemeal after purchase.",
      whatToCheck: [
        "Run a full electrical function check during PPI: fuel door release, PSM on/off and warning lights, infotainment functions",
        "Note any dash warning lights that appear and clear inconsistently",
      ],
    },
    {
      id: "blower-motor-stick",
      title: "Blower motor sticks after periods of inactivity",
      severity: "watch",
      summary:
        "Common after the car sits for a few weeks — the blower fails to spin on startup. Not a wear item worth negotiating hard on, but worth testing HVAC on any car that's been sitting.",
      detail:
        "The blower motor can stick slightly after periods of inactivity and fail to spin when the HVAC is switched on. It's usually resolved by manually freeing the fan blades via the air filter box (ignition off) rather than a parts replacement, and isn't indicative of a deeper problem — just worth testing on any car that's been sitting for a while before you look at it.",
      whatToCheck: [
        "Run the HVAC blower on all speeds during the test drive, especially if the car has been sitting",
        "If it doesn't spin, ask about (or try) manually freeing the blades via the air filter box with the ignition off before assuming it needs replacement",
      ],
    },
    {
      id: "bore-scoring-rare",
      title: "Bore scoring — rare, but real on this engine family",
      severity: "watch",
      summary:
        "The 981's direct-injection MA1 engine can develop bore scoring — genuinely rare, but real, and correlated with hard driving on a cold engine plus infrequent oil changes.",
      detail:
        "Documented cases are rare relative to the IMS/bore-scoring problems that plagued older M96/M97-engined Porsches, but they do happen. Specialists differ on whether the S's larger-bore engine carries materially higher risk than the base Cayman's, and real-world case data collected on owner forums hasn't shown a clear difference between them in practice — treat that specific question as open rather than settled. A borescope inspection during PPI and a close look at oil-change history are the standard mitigations; this isn't a reason to avoid the car, but it shouldn't be dismissed as a nonissue either.",
      whatToCheck: [
        "Get a borescope inspection of all six cylinder bores during PPI",
        "Ask about oil-change frequency and whether the car has regularly been driven hard on a cold engine",
        "Cold start the car yourself and listen for excessive piston slap or rattle that clears within ~30 seconds",
      ],
    },
    {
      id: "strut-mount-bushing",
      title: "Front/rear strut mount bushing wear",
      severity: "clear",
      summary:
        "Drying or failure of the rubber bushing above the strut can cause a low-frequency thump or knock over bumps, especially at the rear — a normal wear item, not a red flag.",
      detail:
        "The rubber bushing above the strut dries out and fails with age and mileage, producing a low-frequency thump or knock over bumps that's most noticeable from the rear. Every car in this age bracket will eventually need this addressed — it isn't a sign of abuse — but it's worth budgeting for on a higher-mileage example rather than assuming it's included in the asking price.",
      whatToCheck: [
        "Listen for a low-frequency thump or knock over bumps, especially from the rear",
        "Ask whether strut/shock mounts have ever been replaced and at what mileage",
      ],
    },
    {
      id: "ims-bearing-not-applicable",
      title: "IMS bearing — not applicable to this generation",
      severity: "clear",
      summary:
        "The 981's direct-injection MA1-series engine has no intermediate shaft bearing — the IMS failure risk from earlier M96/M97 engines simply doesn't apply here.",
      detail:
        "IMS bearing failure is the defining ownership risk on 986/996 and 987.1/997.1-generation Porsches with M96/M97 engines, but the 981's direct-injection MA1-series engine doesn't have an intermediate shaft bearing at all — there's nothing here to fail in that way. Worth stating explicitly, since it's usually the first question buyers coming from an older 911 or Boxster/Cayman ask.",
      whatToCheck: [
        "None needed — if a seller or shop tries to sell you an \"IMS inspection\" on a 981, that's a red flag about them, not the car",
      ],
    },
  ],

  checklist: {
    documentsToRequest: [
      "Full service history — independent Porsche specialist or OPC (official Porsche Centre) records preferred over generic shop records",
      "Recall completion confirmation (VIN-checked with a Porsche dealer) if the build date falls between May 5 – June 6, 2014",
      "Title history / accident or salvage check (Carfax or equivalent)",
    ],
    questionsForSeller: [
      "Has the car ever had HVAC/blower issues, especially after sitting for a few weeks?",
      "Is the car equipped with PADM, and has it ever thrown a related fault code?",
      "Has the A/C system ever needed condenser or refrigerant work?",
      "Any history of electrical faults — fuel door actuator, PSM warnings, infotainment glitches?",
      "Has a pre-purchase inspection ever been done, and can you share the results?",
    ],
    ppiAdvice: [
      "Get a borescope inspection of the cylinders during PPI — bore scoring is rare on this engine but documented, and cold-start hard driving plus poor oil-change history are the main risk correlators",
      "Confirm bonnet catch recall completion via VIN if the build date falls between May 5 – June 6, 2014",
      "Test blower motor / HVAC function on all speeds, especially if the car has been sitting",
      "Check for PADM-related fault codes if the car is so equipped, and verify wiring/connectors before accepting a mount-replacement quote",
      "Visually inspect A/C condenser corners for corrosion, especially on cars from leafy or wet climates",
      "Run a full electrical function check: fuel door release, PSM, infotainment",
    ],
  },
};
