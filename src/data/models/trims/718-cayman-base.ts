import type { Trim } from "../types";

/**
 * Reviewed research, August 2026. First pass for this trim — a
 * deliberately deeper dive than the initial S trim pass, focused
 * specifically on what's different about the base 2.0L car rather than
 * re-covering the platform-wide known issues already documented on the
 * platform page. Built via web search across specialist/enthusiast
 * sources (Go-Parts, 718forum.com, Rennlist, Planet-9, Design911,
 * Edmunds, Car and Driver) and classic.com aggregate pricing. See the
 * platform file's header comment for the general sourcing-quality note
 * (WebFetch blocked this pass too; everything traces to WebSearch
 * result snippets).
 *
 * Torque-peak RPM (shown as "~1,950 rpm") could not be verified
 * against a primary Porsche press document — newsroom.porsche.com was
 * blocked to direct fetch — and a competing 2,150 rpm figure also
 * surfaced. Shown with an explicit "unverified" caveat rather than
 * picked confidently.
 *
 * Curb weight figures vary across sources by roughly 90 lb even within
 * the same transmission — shown as a range rather than a single
 * precise-looking number.
 *
 * Brake specs are a genuine sourcing disagreement, called out as its
 * own "clear" known-issue entry below: one source claims base has
 * smaller-diameter front rotors than the S, while a more specifically-
 * sourced pair (a dedicated forum comparison thread plus an OE parts
 * listing) says the diameter is identical and only rotor thickness
 * differs. The thickness-only version is treated as primary here since
 * it's corroborated by an actual part number, but the disagreement
 * itself is stated on the page rather than silently resolved.
 *
 * One claim researched and deliberately left out: a single-source,
 * uncorroborated figure that "~29% of reported 718 Cayman repairs are
 * electrical/AC-related," built from one aggregator citing one 2018
 * AC-blower failure case. Not confirmed as base-specific vs.
 * platform-wide, and not corroborated by a second source — omitted
 * rather than published as a headline statistic. General PCM/
 * infotainment software glitches (reboots, CarPlay drops) were found
 * too, but similarly not confirmed as base-specific, so they're left
 * off this trim's list rather than asserted without a stronger source.
 *
 * The "record high" pricing datapoint below ($100,500 for a base car)
 * is flagged directly in its own note as unusually high for this trim
 * and not independently re-verified — treat with real caution.
 *
 * No vehicle image supplied for this trim yet — the page renders the
 * standard "Image pending" placeholder until one is sourced.
 */
export const cayman718Base: Trim = {
  slug: "base",
  platformSlug: "718-cayman",
  name: "Cayman",
  shortName: "Cayman",
  teaser:
    "The entry point into 718 ownership — lighter than the S, a genuinely different (not just detuned) turbo and suspension, and a divisive engine note.",
  contentStatus: "reviewed",

  overview: {
    engine: "2.0L turbocharged flat-four (MA2.20, fixed-geometry turbo with a conventional internal wastegate)",
    power: "300 hp @ 6,500 rpm",
    zeroToSixty: "4.5s (PDK w/ Sport Chrono) · 4.9s (manual)",
    transmission: "6-speed manual or 7-speed PDK",
    curbWeight:
      "~2,943–3,034 lb manual / ~3,020 lb PDK (figures vary by source, treat as approximate)",
    summary:
      "The entry point into the 718 line, and genuinely different hardware from the S rather than just a software-limited version of it: the base 2.0L runs a smaller, simpler fixed-geometry turbo (versus the S's larger variable-turbine-geometry unit), rides on its own suspension tune with spring rates and stabilizer bars calibrated for the lighter car (not a detuned S setup), and comes standard on 18-inch wheels versus the S's more common 19s. That fixed-geometry turbo's low mounting position is also this trim's most-reported ownership issue — a wastegate actuator rattle described as the single most common 718-forum complaint, concentrated on base cars specifically (see known issues below). Engine sound is the other recurring theme: reviewers and owners consistently describe the base four-cylinder's idle and low-rev note as gruff or industrial compared to the six-cylinder GTS/GT4, though this is uniformly framed as a character/taste issue, not a defect. Contrary to a common assumption, braking hardware is close to identical to the S (see the known-issues entry on this) — the meaningful gap between base and S is turbo hardware, suspension tune, and standard wheel size, not stopping power.",
    quickFacts: [
      { label: "Engine code", value: "MA2.20" },
      { label: "Power", value: "300 hp @ 6,500 rpm" },
      { label: "Torque", value: "280 lb-ft (peak RPM cited as ~1,950, unverified against a primary source)" },
      { label: "Transmission", value: "6MT or 7-speed PDK" },
      { label: "Curb weight", value: "~2,943–3,034 lb depending on transmission" },
    ],
  },

  knownIssues: [
    {
      id: "wastegate-rattle-base-specific",
      title: "Wastegate actuator rattle — this trim's specific version of the platform-wide issue",
      severity: "watch",
      summary:
        "Described as the single most common complaint on 718 forums for base-engine cars specifically — the fixed-geometry turbo's low mounting position exposes the wastegate actuator to water and road debris more than the S's higher-mounted VTG unit.",
      detail:
        "The platform-wide wastegate rattle entry applies to this trim more than any other: the base 2.0L's turbo uses a conventional fixed-geometry, internally-wastegated design that sits low in the chassis, just under the belly pan, directly exposed to water and road debris. The S's larger variable-turbine-geometry (VTG) turbo is mounted higher in the engine bay, away from the elements — a genuine packaging difference, not just a different part. Symptom is a metallic buzz or rattle at idle or light throttle from play in the actuator arm, most concentrated on early (2017-era) cars, that can progress to boost-related issues if ignored. Porsche's official fix is full turbo assembly replacement (later production incorporated a revised, better-protected actuator); an unofficial but widely-reported independent-shop workaround is freeing the actuator with penetrant and re-greasing with high-temp copper grease. No hard failure-rate statistic was found — treat \"most common complaint\" as forum-consensus framing, not a warranty-data-backed percentage.",
      whatToCheck: [
        "Listen for a metallic buzz or rattle from the engine bay at idle or light throttle, especially on 2017-era cars",
        "Ask whether the turbo assembly has ever been replaced or serviced for this specific issue",
        "Don't assume a clean-sounding car at idle is fully in the clear — the rattle is described as progressive",
      ],
    },
    {
      id: "engine-sound-character",
      title: "Industrial/gruff idle and low-rev note — a character trait, not a defect",
      severity: "clear",
      summary:
        "Consistently described across reviews and owner discussion as a flat, industrial, or \"agricultural\" sound at idle and low revs — a genuine taste issue for some buyers, but not a sign anything's wrong.",
      detail:
        "This is one of the most consistent complaints found about the base engine, described variably as gruff, industrial, tappety, or \"like a poorly tuned Subaru\" at idle and low revs. Edmunds' own trim guide is direct about it, suggesting buyers who prioritize sound skip the turbo-four entirely and step up to the naturally-aspirated GTS 4.0's flat-six. Sport Exhaust (PSE) is the most commonly cited mitigation (see popular options below), though multiple owners note it makes less of a dramatic difference on this generation than it did on the previous naturally-aspirated 981. Worth test-driving with this expectation set rather than assuming a flat-sounding idle points to a mechanical problem.",
      whatToCheck: [
        "Listen to the car cold and at idle before judging — this is normal character for the base engine, not a fault to diagnose",
        "If sound matters a lot to you, drive a PSE-equipped car specifically before deciding whether the upgrade addresses it enough",
      ],
    },
    {
      id: "manual-clutch-feel",
      title: "Manual clutch engagement — genuinely stiff, harder to modulate in stop-and-go",
      severity: "clear",
      summary:
        "Multiple owners describe a stiff clutch with a high engagement point that's harder to drive smoothly in traffic than expected, attributed partly to how the engine delivers low-end torque.",
      detail:
        "Several forum threads describe the manual's clutch as stiff with a high engagement point, making smooth takeoff in stop-and-go traffic harder to feel out than on some other manual sports cars — attributed partly to how and where the turbo engine delivers its low-end torque. This is presented as a driving-character adjustment, not a wear item. Separately, a single isolated forum report described a persistent driveline clunk that reportedly survived a dealer clutch-and-gearbox replacement — worth being aware of, but this is one anecdotal case, not an established pattern, and shouldn't be treated as a documented known issue on its own.",
      whatToCheck: [
        "Drive the car in real stop-and-go conditions before buying, not just open road, to judge clutch feel for yourself",
        "Listen for any clunk on power on/off transitions during the test drive — not a confirmed pattern, but easy to check for",
      ],
    },
    {
      id: "brake-spec-vs-s",
      title: "Brakes are close to identical to the S — a common assumption gets this wrong",
      severity: "clear",
      summary:
        "Sources disagree on whether base has smaller front rotors than the S; the better-corroborated version says the diameter is the same and only rotor thickness differs.",
      detail:
        "One source claims the base's front rotors are smaller in diameter than the S's (298mm vs. 318mm). A more specifically-sourced pair — a dedicated forum brake-comparison thread plus an OE parts listing — states base and S actually share the same 330mm front / 299mm rear rotor diameter and the same 4-piston fixed calipers front and rear, with the real difference being rotor thickness only (28mm on base vs. 33–34mm on S). This research pass couldn't fully resolve the disagreement against an official Porsche spec sheet, so it's stated here rather than silently picked — but independent instrumented testing (Car and Driver's 70–0 mph test) found the S stopping only 2 feet shorter than base over repeated runs with no fade on either, which is consistent with the \"mostly the same hardware\" version rather than a meaningfully smaller base brake package.",
      whatToCheck: [
        "Don't assume the base car is meaningfully under-braked versus the S — treat brake condition (pad life, rotor wear, fluid age) as the real PPI item, not the trim badge",
      ],
    },
  ],

  checklistAdditions: {
    questionsForSeller: [
      "Has the turbo/wastegate actuator ever rattled, and if so, was it addressed with a turbo replacement or a workaround?",
      "What size wheels does this car have — factory 18-inch, or upgraded 19s or larger?",
    ],
    ppiAdvice: [
      "Listen closely at idle and light throttle for the wastegate actuator rattle common on this trim's turbo",
      "Test the manual clutch in real stop-and-go traffic, not just open-road driving, if manual-equipped",
    ],
  },

  popularOptions: [
    {
      id: "sport-exhaust",
      name: "Sport Exhaust (PSE)",
      tag: "popular",
      note: "The most frequently recommended option specifically for base buyers — widely described as compensation for the 2.0L's flat, industrial factory idle note. Multiple owners call it worth every penny for the acoustic payoff, but also caution it makes less of a dramatic difference on this generation than it did on the previous naturally-aspirated 981 — set expectations accordingly rather than assuming it fully transforms the sound.",
    },
    {
      id: "pasm",
      name: "PASM (Porsche Active Suspension Management)",
      tag: "popular",
      note: "Broadly recommended for base buyers specifically — owners describe Comfort mode as meaningfully better-riding than the fixed base suspension, with Sport mode still tightening things up when wanted. One long-distance owner reported a comfortable multi-thousand-mile road trip on PASM plus 19-inch wheels.",
    },
    {
      id: "ptv",
      name: "PTV (Porsche Torque Vectoring)",
      tag: "popular",
      note: "More divisive than PASM — some owners find it noticeably helps in fast corners or highway exit ramps, others call it unnecessary for normal street driving and see its real benefit mainly on track or in low-grip conditions. Important bundling detail: PTV cannot be ordered without PASM alongside it (and adds a 10mm lower ride height as a pair), so factor that into pricing a well-optioned base car.",
    },
    {
      id: "sport-chrono",
      name: "Sport Chrono Package",
      tag: "popular",
      note: "Mainly valued on PDK cars for the 0.2s 0-60 gain (via launch control) and the Sport Response button. Less emphasized in base-specific buying discussion than PASM or PSE, but nothing found suggests it's discouraged on base cars either.",
    },
    {
      id: "19-inch-wheels",
      name: "19-inch wheels",
      tag: "popular",
      note: "Base comes standard on 18-inch wheels (235/45R18 front, 265/45R18 rear); the S more commonly runs 19s. Upgrading is a genuine visual and stance differentiator from a stock base car, and is also a prerequisite for some aftermarket big-brake upgrades that need the extra wheel diameter for caliper clearance.",
    },
    {
      id: "manual-transmission",
      name: "6-speed manual transmission",
      tag: "popular",
      note: "Used-market manual premium is estimated around 5–15% depending on year and spec, driven by low manual take-rate (roughly 10% industry-wide) — this pricing-premium pattern is described platform-wide in the sourcing found, with nothing suggesting it differs meaningfully for base versus S specifically.",
    },
  ],
  optionsNote:
    "A genuinely unresolved, active debate in owner communities worth knowing about before you shop: whether a well-optioned base car (PASM + PTV + Sport Chrono + a mechanical LSD — essentially replicating a Cayman T's spec) delivers S-level street enjoyment for meaningfully less money, or whether the S is categorically preferable regardless of how the base is optioned, mainly for resale value and usable torque. Both positions show up repeatedly in forum discussion with no clear resolution — treat it as a genuine judgment call based on your own priorities, not a settled question this site can answer for you.",

  marketContext: {
    currency: "USD",
    priceLow: 36000,
    priceHigh: 68000,
    rangeNote: "clean, good-condition examples, manual or PDK",
    trendSummary:
      "Average sale price is reported around $49,900 (Classic.com aggregate data) — roughly $11,000 below the Cayman S's own average of $60,885 on the same source. A separately-cited, rougher secondhand-market estimate put the base-to-S gap closer to $8,000, which doesn't fully reconcile with the average-to-average comparison above; both are reported here rather than picking one, likely reflecting different sample windows or option mixes. Recorded low and high sales (also Classic.com, via web search rather than a direct page pull): $34,000 for a 2017 model year car (January 2025 sale), and $100,500 for a 2019 model year car (March 2026 sale) — that high figure is unusually elevated for a base trim, closer to well-optioned S/GTS territory, and wasn't independently re-verified against a primary listing, so treat it with real caution rather than as a confirmed record. Refresh periodically rather than treating any of this as live pricing.",
    asOf: "2026-08-21",
    averagePrice: 49942,
    recordLow: { price: 34000, note: "2017 model year, January 7, 2025 sale" },
    recordHigh: {
      price: 100500,
      note: "2019 model year, March 24, 2026 sale — unusually high for a base trim and not independently re-verified; may reflect a heavily-optioned outlier or a data-categorization quirk",
    },
  },
};
