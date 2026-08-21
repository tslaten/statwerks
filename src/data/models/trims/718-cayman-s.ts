import type { Trim } from "../types";

/**
 * Reviewed research, August 2026. First pass for this trim — built via
 * web search across specialist/enthusiast sources and KBB/classic.com
 * aggregate pricing. See the platform file's header comment for the
 * sourcing-quality note (WebFetch blocked this pass; everything traces
 * to WebSearch result snippets).
 *
 * Curb weight is genuinely disputed across sources — the ~2,987–3,053
 * lb figures (manual/PDK, DIN unladen) were the most consistently
 * corroborated set, but one source cited 3,153 lb and another (likely
 * a mismatched pre-production or different-market figure) cited 3,219
 * lb for a "2016" car. Shown here as a range with the caveat kept in
 * the summary rather than silently picking one number to look more
 * precise than the research supports.
 *
 * 0–62/60 mph and power/torque RPM peaks: torque-peak RPM specifically
 * could not be confirmed in this research pass and is omitted rather
 * than guessed at.
 *
 * One record-high pricing datapoint (a "2016 model year" sale) is
 * flagged as suspect in marketContext.recordHigh's note — US Cayman S
 * sales are generally described as starting model-year 2017, so a
 * 2016 model year is unusual and wasn't independently re-verified.
 *
 * Vehicle image: a user-supplied illustration (silver, 3/4-front, in a
 * showroom), used as-is — no background removal or cropping, matching
 * the treatment settled on for every other trim image on this site.
 * `image.fit` is set to "cover" so it fills its box edge-to-edge
 * rather than letterboxing inside it.
 */
export const cayman718S: Trim = {
  slug: "s",
  platformSlug: "718-cayman",
  name: "Cayman S",
  shortName: "Cayman S",
  teaser:
    "The 2.5L turbo step up from base — a variable-turbine-geometry turbo and a genuine hardware difference, not just a tune.",
  contentStatus: "reviewed",
  image: {
    src: "/vehicles/718-cayman/s.png",
    alt: "718 Cayman S, silver, three-quarter front view, in a showroom",
    fit: "cover",
  },

  overview: {
    engine: "2.5L turbocharged flat-four (MA2/22, variable-turbine-geometry turbo)",
    power: "350 hp",
    zeroToSixty: "4.0s (PDK w/ Sport Chrono) · 4.4s (manual w/ Sport Chrono)",
    transmission: "6-speed manual or 7-speed PDK",
    curbWeight:
      "~2,987 lb manual / ~3,053 lb PDK (DIN unladen — figures vary by source, treat as approximate)",
    summary:
      "The step up from base within the 718 Cayman line, and a genuine hardware difference rather than just a software tune: the S runs a 2.5L variable-turbine-geometry (VTG) turbo (engine code MA2/22) versus the base 2.0L's simpler fixed-geometry, internally-wastegated unit (MA2/20). That VTG hardware difference is also the open question for this trim specifically — the platform's well-documented wastegate-actuator rattle issue is consistently reported on base cars, but it's not clearly confirmed whether the S's different turbo shares the same exposure (see this trim's own known-issues entry below). Otherwise, this trim shares the platform's full known-issues list — no IMS bearing risk, AOS wear, coolant reservoir/water pump concerns, and the applicable safety recalls all apply here too.",
    quickFacts: [
      { label: "Engine code", value: "MA2/22" },
      { label: "Power", value: "350 hp" },
      { label: "Torque", value: "309 lb-ft" },
      { label: "0–60 mph", value: "4.0s (PDK w/ Sport Chrono)" },
      { label: "Transmission", value: "6MT or 7-speed PDK" },
      { label: "Curb weight", value: "~2,987–3,053 lb" },
    ],
  },

  knownIssues: [
    {
      id: "vtg-turbo-rattle-uncertain",
      title: "VTG turbo — unclear whether it shares base's wastegate rattle exposure",
      severity: "watch",
      summary:
        "The S's variable-turbine-geometry turbo is genuinely different hardware from base's fixed-geometry unit — whether it shares the same actuator corrosion exposure that causes the platform's well-known rattle issue isn't clearly confirmed either way.",
      detail:
        "The platform-wide wastegate actuator rattle (see platform known issues) is described in sourcing found for this research pass as affecting mainly the base 2.0L's simpler fixed-geometry, internally-wastegated turbo. The S's 2.5L uses a variable-turbine-geometry (VTG) turbo instead — genuinely different hardware, not just a different tune of the same part. The stated root cause of the base-car rattle (the turbo's low mounting position exposing the actuator to water and road debris) would plausibly apply to the S's turbo too, given similar packaging, but this research pass found nothing definitively confirming or ruling out the same failure mode on the VTG unit specifically. Treat this as an open question for your PPI rather than either a confirmed S-specific risk or a confirmed non-issue.",
      whatToCheck: [
        "Listen for the same metallic buzzing/rattle described for base cars, even though it's not confirmed to affect the S's turbo the same way",
        "Ask whether the turbo assembly has ever needed replacement",
      ],
    },
    {
      id: "valve-guide-wear-not-substantiated",
      title: "Valve guide / valve stem seal wear — not substantiated on this engine",
      severity: "clear",
      summary:
        "A claim sometimes seen online about the turbo flat-four — this research pass found no credible sourcing tying valve guide or valve stem seal wear to the MA2/20 or MA2/22 engines specifically.",
      detail:
        "Extensive oil-consumption discussion does exist for 718-generation cars, but the most substantive threads and parts-fitment data found trace to the naturally-aspirated 9A2 4.0L flat-six (718 GTS 4.0, GT4, Spyder) — a different engine family entirely from this trim's turbocharged MA2/22. A direct \"718 flat four reliability\" discussion found in this research states no clear trend has been noted on owner forums, and cites successful stage-1 tunes adding 80–100 hp with no physical modification as informal evidence the stock engine has real margin. What early oil-consumption reports do exist for turbo-four cars seem to point more toward normal break-in/ring-seating variance on early (2017–2018) cars, or AOS failure symptoms being mistaken for genuine oil consumption, rather than a valve-guide-specific failure mode. Not stated as a confirmed non-issue — just not something this research could substantiate as real, so it isn't presented as a known risk here.",
      whatToCheck: [
        "If a seller or shop specifically claims valve guide wear as a known issue on this engine, ask for a source — this research couldn't confirm one",
        "Standard oil-consumption and AOS checks (see platform known issues) remain worth doing regardless",
      ],
    },
  ],

  checklistAdditions: {
    questionsForSeller: [
      "Has the turbo assembly ever needed replacement or repair, and if so, was a cause identified?",
    ],
    ppiAdvice: [
      "Listen closely for turbo/wastegate rattle even though it's not confirmed whether the S's VTG turbo shares the same exposure as base cars",
    ],
  },

  popularOptions: [
    {
      id: "sport-chrono",
      name: "Sport Chrono Package",
      tag: "popular",
      note: "Adds a Sport Response button, drive-mode dial, launch control on PDK cars, upgraded transmission mounts, and a dash-top stopwatch. Named among the most desirable options for this generation, and effectively required to hit the quoted 4.0s 0-60 figure on PDK cars.",
    },
    {
      id: "pasm",
      name: "PASM (Porsche Active Suspension Management)",
      tag: "popular",
      note: "Switchable comfort/sport damping. Named alongside Sport Chrono and PTV as one of the combination that buying-guide sources specifically call out as giving \"the greatest return in enjoyment and resale.\"",
    },
    {
      id: "ptv",
      name: "PTV (Porsche Torque Vectoring)",
      tag: "popular",
      note: "Brake-based torque vectoring that functions like a mechanical differential via individual brake application. Part of the specifically-named Sport Chrono + PASM + PTV combination cited as most desirable for this generation.",
    },
    {
      id: "manual-transmission",
      name: "6-speed manual transmission",
      tag: "popular",
      note: "Manual-transmission cars are documented as commanding a real price premium in the used market on this generation — an intensification of a similar trend already seen on the prior 981 generation.",
    },
    {
      id: "adaptive-sport-seats",
      name: "Adaptive sport seats",
      tag: "popular",
      note: "Named among the desirable factory options for this generation in specialist buying-guide discussion.",
    },
    {
      id: "pdls-plus",
      name: "PDLS+ (LED headlights with dynamic light system)",
      tag: "popular",
      note: "LED headlights with adaptive/dynamic lighting, named among the desirable options for this generation.",
    },
  ],
  optionsNote:
    "Well-optioned examples are described in buying-guide sourcing as selling faster and holding value better — Sport Chrono, PASM, and PTV together are the specific combination named as giving the best return, more than any single option in isolation.",

  marketContext: {
    currency: "USD",
    priceLow: 56800,
    priceHigh: 95795,
    rangeNote: "asking-price range across clean, current listings",
    trendSummary:
      "Average sale price is reported around $60,900 (Classic.com aggregate data, which includes auction platforms like Bring a Trailer) — though the underlying date range for that average wasn't confirmed, so treat it as directional rather than a precise current snapshot. Current asking prices for clean listings run roughly $56,800–$95,800, spanning higher-mileage early (2017) cars up through very-low-mile late-model examples — as one reference point, a 2024 example with under 11,000 miles was recently listed around $86,000. Recorded low and high sales (also Classic.com, via web search rather than a direct page pull): $30,500 for a 2017 model year car (June 2024 sale), and $86,000 for a car listed as 2016 model year (November 2025 sale) — that 2016 model year is unusual since US Cayman S sales are generally described as starting for model-year 2017, so it's flagged here as unverified rather than treated as a confirmed record. One clearly erroneous scraped figure (an implausible ~$149,700 \"average\") was found and discarded rather than used. Refresh periodically rather than treating any of this as live pricing.",
    asOf: "2026-08-20",
    averagePrice: 60885,
    recordLow: { price: 30500, note: "2017 model year, June 5, 2024 sale" },
    recordHigh: {
      price: 86000,
      note: "Listed as 2016 model year, November 3, 2025 sale — model year is unverified and unusual for this trim; treat with caution",
    },
  },
};
