import type { Platform } from "../types";

/**
 * Reviewed research, August 2026. First pass for this platform — built
 * via web search across specialist/enthusiast sources (LN Engineering,
 * PCA, Rennlist, Go-Parts, Carpokes, 718forum.com) and classic.com/KBB
 * aggregate pricing. Note on sourcing quality: WebFetch (direct page
 * retrieval) was blocked in this research pass for every domain tried,
 * so every claim below traces to WebSearch's synthesized result
 * snippets rather than a full primary-source page read. Treat specific
 * numbers as "reported by X," not independently re-verified — flagged
 * per-item below where sources genuinely disagreed or where a claim
 * couldn't be substantiated at all.
 *
 * Chassis code confirmed as "982" (internal designation) — "718" is
 * the marketing name Porsche revived for this generation when it
 * switched to turbocharged engines, not a separate chassis code.
 * `Platform.chassisCode` is nonetheless set to "718" here rather than
 * "982": every other platform on this site uses that field as both
 * the technically-correct chassis code AND the short display prefix
 * shown on cards/sidebar (e.g. "981 Cayman S"), and those have always
 * been the same string. This is the one generation where they aren't
 * — "982 Cayman S" would be technically correct but wouldn't match
 * what buyers (including the person who asked for this platform)
 * actually call the car. Display prefix wins; the true "982"
 * designation is called out in prose above and in the platform
 * quickFacts "Chassis code" entry below.
 *
 * One item deliberately researched and NOT included as a known issue:
 * valve guide / valve stem seal wear on the turbocharged flat-four.
 * This research pass found no credible sourcing tying that failure
 * mode to the MA2/20 or MA2/22 turbo engines specifically — the
 * oil-consumption discussion that does exist ties mainly to the
 * naturally-aspirated 9A2 4.0L flat-six (GTS 4.0/GT4/Spyder), a
 * different engine family entirely. Rather than publish an unverified
 * rumor, this is called out explicitly below as a "not substantiated"
 * item, since it's an easy claim to carry over incorrectly from other
 * engine families.
 */
export const cayman718: Platform = {
  slug: "718-cayman",
  chassisCode: "718",
  name: "718 Cayman",
  shortName: "718 Cayman",
  teaser:
    "The turbocharged-flat-four generation — no IMS bearing risk at all, with its own newer set of things to check instead.",
  contentStatus: "reviewed",

  overview: {
    years: "2017–2025",
    layout: "Mid-engine, rear-wheel drive",
    body: "2dr coupe",
    summary:
      "The 982-chassis Cayman switched from the naturally-aspirated flat-six engines of every prior generation to turbocharged flat-fours, and Porsche revived the \"718\" name (from the 1959/1960 Targa Florio-winning car) for the marketing badge — 982 is the actual internal chassis designation. Production ran through October 2025, making this the final and most recent generation covered on this site so far. The upside for buyers coming from IMS-bearing-era research: the MA2-family turbo four has no intermediate shaft at all, so that risk simply doesn't exist here. The tradeoff is a newer set of turbo- and DI-specific wear items instead — none of them approaching IMS-bearing-scale catastrophic risk, but worth knowing regardless of which trim you're shopping.",
    quickFacts: [
      { label: "Production", value: "2017–2025" },
      { label: "Chassis code", value: "982 (marketed as \"718\")" },
      { label: "Layout", value: "Mid-engine, RWD" },
    ],
  },

  sharedKnownIssues: [
    {
      id: "ims-bearing-not-applicable",
      title: "IMS bearing — not applicable to this generation",
      severity: "clear",
      summary:
        "The turbocharged MA2-family flat-four engines have no intermediate shaft at all, so IMS bearing failure — the defining risk on older water-cooled Porsches — doesn't exist on this generation.",
      detail:
        "Worth stating explicitly since IMS bearing concerns are usually the first thing buyers researching any water-cooled Porsche ask about. The 982's turbocharged flat-four engines (both the base 2.0L and the S's 2.5L) have no intermediate shaft in the design at all — there's nothing here to fail in that way.",
      whatToCheck: [
        "None needed — if a seller or shop tries to sell you an \"IMS inspection\" on a 718, that's a red flag about them, not the car",
      ],
    },
    {
      id: "wastegate-actuator-rattle",
      title: "Wastegate actuator rattle / turbo replacement",
      severity: "watch",
      summary:
        "Described as the single most common complaint on 718 forums — a metallic rattle from turbo wastegate actuator wear, caused by the turbo's low mounting position exposing it to water and road debris.",
      detail:
        "The turbo's low mounting position exposes the wastegate actuator arm to water and road debris, and corrosion-driven play in the linkage produces a metallic buzzing or rattle. Porsche's fix is full turbo assembly replacement with an updated housing; many cases were reportedly covered under warranty on earlier cars. Most sourcing found for this issue specifically names the base 2.0L's simpler fixed-geometry, internally-wastegated turbo — it's not clearly confirmed whether the S's different variable-turbine-geometry turbo shares the same exposure (see this trim's own known-issues entry for that nuance).",
      whatToCheck: [
        "Listen for a metallic buzzing or rattling noise from the engine bay, especially under boost",
        "Ask whether the turbo assembly has ever been replaced, and whether it was covered under warranty",
      ],
    },
    {
      id: "aos-failure",
      title: "Air-Oil Separator (AOS) failure",
      severity: "watch",
      summary:
        "A well-documented wear item across the Boxster/Cayman/911 lineup generally — white smoke on startup, rough idle, or oil in the intake are the usual signs.",
      detail:
        "Symptoms include white smoke on cold startup, a rough idle, and oil finding its way into the intake tract/throttle body; a failing AOS lets crankcase vacuum run abnormally high. Some specialists recommend proactive replacement on a roughly 6-year/75,000-mile interval regardless of symptoms, since a failed AOS can also contribute to rear main seal issues if left unaddressed.",
      whatToCheck: [
        "Cold start the car yourself and watch for smoke or a rough idle",
        "Ask about AOS replacement history and mileage/age since the last service",
      ],
    },
    {
      id: "coolant-reservoir-water-pump",
      title: "Coolant reservoir and water pump issues",
      severity: "watch",
      summary:
        "Two related but distinct cooling-system risk areas: a coolant reservoir failure that's an expensive engine-out repair, and a separately-reported weak water pump/thermostat.",
      detail:
        "A failing coolant reservoir shows as a low-coolant warning, a \"sweet smell\" from the rear of the car, and pink fluid leaks; repair is consistently described as a major job requiring engine removal, though no specific dollar figure turned up in this research pass. Separately, the water pump itself (bearing wear, plastic impeller degradation) and the electronic thermostat (which can fail open) are flagged as recurring weak points. Treat these as two related items worth checking during PPI, not one.",
      whatToCheck: [
        "Check for a low-coolant warning light, coolant smell, or visible leaks (especially pink fluid) near the rear of the car",
        "Ask about water pump and thermostat service history",
        "Confirm the car reaches and holds normal operating temperature during the test drive",
      ],
    },
    {
      id: "intake-valve-carbon-buildup",
      title: "Direct-injection intake valve carbon buildup",
      severity: "watch",
      summary:
        "An expected wear item on any direct-injection engine — no port injection to wash the valves, so carbon accumulates over time. Not urgent unless it's causing a misfire.",
      detail:
        "Because direct injection sprays fuel straight into the cylinder rather than across the intake valves, there's nothing washing carbon deposits off the back of the valves the way port injection does. One source flags this becoming noticeable somewhere in the 80,000–120,000 km range. The fix is a walnut-blasting service — a few hundred dollars, and not urgent unless it's causing a rough idle or misfire.",
      whatToCheck: [
        "Ask about any history of rough idle, hesitation, or misfire",
        "Not typically worth a proactive walnut-blast unless symptoms are present",
      ],
    },
    {
      id: "headlight-taillight-uv-delamination",
      title: "Headlight/taillight UV coating delamination",
      severity: "watch",
      summary:
        "A cosmetic issue carried over from the prior generation and not fully eliminated on the 982 — UV coating can delaminate, and some owners report moisture ingress.",
      detail:
        "Described as a known, carried-over complaint from the 981 generation that Porsche hasn't fully eliminated on the 982. Cosmetic rather than functional in most cases, but worth a visual check, and specialists can address moisture ingress if present.",
      whatToCheck: [
        "Visually inspect headlight and taillight housings for cloudiness, delamination, or visible moisture inside the housing",
      ],
    },
    {
      id: "connecting-rod-recall-not-applicable",
      title: "Connecting rod recall — does not apply to turbocharged models",
      severity: "clear",
      summary:
        "A 2021 recall for cracked connecting rods affected only the naturally-aspirated 4.0L flat-six (718 Spyder, Cayman GT4, GTS 4.0) — not the turbocharged base or S engines.",
      detail:
        "In March/May 2021, Porsche recalled 190 units of the 2021 718 Spyder, Cayman GT4, and Boxster/Cayman GTS 4.0 for connecting rods from an out-of-spec supplier batch that could crack and cause engine damage, stalling, or an oil leak; Porsche replaced engines on affected cars free of charge. This recall is specific to the naturally-aspirated 9A2 4.0L flat-six used in those models — it does not touch the turbocharged 2.0L or 2.5L engines used in the base Cayman and Cayman S. Worth stating explicitly since it's easy to see \"718 recall\" headlines and assume it applies generation-wide.",
      whatToCheck: [
        "None needed for base/S turbo models — if shopping a GTS 4.0, GT4, or Spyder, confirm this recall's completion via VIN instead",
      ],
    },
    {
      id: "safety-recalls-build-window",
      title: "Multiple safety recalls (build-window specific — confirm via VIN)",
      severity: "critical",
      summary:
        "Three separate safety recalls affect various build windows: a fuel collection pipe screw issue (fire risk), a luggage bracket/crossmember issue (fuel leak/fire risk in a crash), and a side airbag sensor torque issue (non-deployment risk).",
      detail:
        "These are three distinct recalls, not one — confirm all applicable ones via VIN rather than assuming any single fix covers everything. (1) Fuel collection pipe screws (2017 models, Porsche campaign AH01, began March 27, 2017): screws fastening fuel collection pipes in the engine bay could shear, risking a fuel leak or fire. (2) Luggage compartment bracket/crossmember (2017–2019 718 Cayman and Cayman S, began April 19, 2019): a crossmember could detach from the luggage bracket in a crash, risking a fuel leak or fire; dealers added rivets to secure it. (3) Side airbag impact sensors (2018 718 Cayman, Cayman S, and Cayman GTS, began May 17, 2019): sensors possibly not torqued to spec, risking non-deployment in a crash. All three are corroborated across multiple aggregator sources, though this research pass couldn't retrieve the underlying NHTSA campaign pages directly beyond confirming campaign AH01 by name.",
      whatToCheck: [
        "Run the VIN through NHTSA's recall lookup to confirm completion of all three campaigns, if the build date/model year falls in an affected window",
        "Don't take a seller's word for it — get documented confirmation of recall completion for each",
        "Treat these as non-negotiable safety items regardless of how clean the car is otherwise",
      ],
    },
  ],

  checklist: {
    documentsToRequest: [
      "Full service history — independent Porsche specialist or OPC (official Porsche Centre) records preferred over generic shop records",
      "VIN-based recall confirmation from Porsche/NHTSA — fuel collection pipe screws (AH01), luggage bracket/crossmember, and side airbag sensor recalls, as applicable to build date",
      "Title history / accident or salvage check (Carfax or equivalent)",
    ],
    questionsForSeller: [
      "Have all applicable recalls been completed — fuel pipe screws, luggage bracket, and side airbag sensors, depending on model year?",
      "Any history of a rattling or buzzing noise from the engine bay, especially under boost?",
      "Any coolant warning lights, smells, or visible leaks near the rear of the car?",
      "Has the AOS (air-oil separator) ever been replaced, and at what mileage?",
    ],
    ppiAdvice: [
      "Confirm no IMS bearing concern applies — this generation's turbo engines have no intermediate shaft; don't pay for an \"IMS inspection\" upsell",
      "Cold start the car yourself and listen for a rattle from the turbo/wastegate area, and watch for smoke indicating AOS wear",
      "Check the cooling system thoroughly, including the coolant reservoir and water pump",
      "Confirm all applicable safety recalls (fuel pipe screws, luggage bracket, airbag sensors) via VIN — treat as non-negotiable",
      "Use a shop that specializes in Porsche, ideally with specific 982/718 experience",
    ],
  },
};
