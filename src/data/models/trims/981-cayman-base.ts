import type { Trim } from "../types";

/**
 * Reviewed research, August 2026. First pass for this trim — built via
 * web search across specialist/enthusiast sources (Rennlist, Planet-9,
 * Go-Parts, U.S. News, Apex Wheels, Renndriver) and classic.com
 * aggregate pricing (via search-result snippets — direct fetch of
 * classic.com is blocked at the network level this pass, same as the
 * base 718 Cayman research). Deliberately focused on what's different
 * about the 2.7L base car rather than re-covering the platform-wide
 * known issues already documented on the platform page.
 *
 * Torque peak RPM could not be confidently corroborated across
 * sources — shown with an explicit "unverified" caveat rather than
 * picked confidently, same treatment as the base 718 Cayman's torque
 * figure.
 *
 * Brakes are a genuine, corroborated base-vs-S difference on this
 * platform — front rotor diameter is smaller on base (315mm vs the
 * S's 330mm; rears are the same 299mm on both). This is the opposite
 * finding from the base 718 Cayman, where the brake-spec difference
 * turned out to be mostly a myth (thickness only, not diameter) — a
 * reminder not to carry a conclusion from one generation over to
 * another that looks similar on paper.
 *
 * The intake-valve carbon buildup entry below applies to direct-
 * injection 9A1-family flat-sixes generally (so, in principle, to the
 * Cayman S's 3.4L too, not exclusively to this 2.7L) — included here
 * because it surfaced clearly in this pass's base-specific search
 * results, not because it's been confirmed unique to the base engine.
 * Stated plainly in the entry itself rather than implied as base-only.
 *
 * The record-high pricing datapoint below ($89,000 for a base car) is
 * flagged in its own note as unusually high for this trim — within
 * reach of well-optioned S/GTS territory — and wasn't independently
 * re-verified beyond the search snippet it came from.
 *
 * No vehicle image yet — the site owner will supply one later. Pages
 * render their existing placeholder state until then; nothing else
 * needs to change when it's added.
 */
export const cayman981Base: Trim = {
  slug: "base",
  platformSlug: "981-cayman",
  name: "Cayman",
  shortName: "Cayman",
  teaser:
    "The entry point into 981 ownership — a genuinely quick naturally-aspirated flat-six, smaller brakes and wheels than the S, and a used-market bargain relative to its own average sale price.",
  contentStatus: "reviewed",

  overview: {
    engine: "2.7L flat-six, naturally aspirated (direct injection, MA1.22)",
    power: "275 hp @ 7,400 rpm",
    zeroToSixty: "5.1s (PDK w/ Sport Chrono) · 5.4s (manual)",
    transmission: "6-speed manual or 7-speed PDK",
    curbWeight: "2,890 lb (manual) / 2,950 lb (PDK)",
    summary:
      "The entry point into the 981 range, and a meaningfully smaller car in a few concrete ways than the Cayman S rather than just a software-limited version of it: the 2.7L runs standard on 18-inch wheels (versus the S's more common 19s) and rides on genuinely smaller front brakes — 315mm rotors versus the S's 330mm, with identical 299mm rears on both. None of the S's usual must-have options (PASM, Sport Chrono) came standard on it either, so a well-equipped base and a bare-bones S can end up closer in day-to-day feel than the trim badge alone suggests. The base 2.7L flat-six is naturally aspirated, direct-injected, and shares its underlying 9A1 architecture with the S's larger 3.4L — meaning the direct-injection carbon-buildup consideration below isn't unique to this trim, even though it's documented here. Reliability by Porsche standards is generally strong; the most forum-visible base-specific complaint is a cylinder-4 misfire at idle with the A/C on (see known issues) rather than anything structural.",
    quickFacts: [
      { label: "Engine code", value: "MA1.22" },
      { label: "Power", value: "275 hp @ 7,400 rpm" },
      { label: "Torque", value: "213 lb-ft (peak RPM unverified against a primary source)" },
      { label: "0–60 mph", value: "5.1s (PDK w/ Sport Chrono)" },
      { label: "Transmission", value: "6MT or 7-speed PDK" },
      { label: "Curb weight", value: "2,890–2,950 lb" },
      { label: "Standard wheels", value: "18-inch (19s optional; S is 19-inch standard)" },
    ],
  },

  knownIssues: [
    {
      id: "misfire-idle-ac",
      title: "Cylinder-4 misfire at idle with A/C on — reported specifically on 2.7L cars",
      severity: "watch",
      summary:
        "A misfire that shows up mainly at idle with the A/C running, most visibly reported on cylinder 4 in forum diagnostics — attributed variously to worn plugs/coils, oil seeping past spark plug tube seals, or carbon buildup, not one confirmed single cause.",
      detail:
        "Owner reports (concentrated on the 2.7L base engine specifically, rather than the S's 3.4L) describe a misfire that's mild or absent under normal driving but becomes noticeable at idle once the A/C compressor engages, sometimes logged as roughly 60 misfires per 1,000 rpm on cylinder 4 after the car sits and is restarted. No single root cause is settled across the threads found — worn spark plugs, cracked ignition coils, oil leaking past spark plug tube seals, carbon buildup in the intake runners, and a stuck camshaft solenoid are all cited as plausible causes for similar symptoms, and different owners have resolved it different ways. Treat this as \"test for it specifically\" rather than \"expect one specific repair.\"",
      whatToCheck: [
        "Idle the car with the A/C on for several minutes during the test drive and listen/feel for roughness that isn't present with A/C off",
        "Ask whether a check-engine light or misfire code (e.g. P0300-series) has ever been logged, and if so, what was replaced to resolve it",
        "If a fault is present, don't assume a single cheap fix — plugs, coils, and injectors are all plausible culprits and PPI should isolate which one",
      ],
    },
    {
      id: "intake-valve-carbon-buildup",
      title: "Direct-injection carbon buildup on intake valves — routine maintenance, not a defect",
      severity: "clear",
      summary:
        "Like other direct-injection 9A1-family Porsche flat-sixes (including the Cayman S's 3.4L), the 2.7L can accumulate carbon on the backs of the intake valves over time — a maintenance item addressed with a walnut-blasting service, not a sign of a problem.",
      detail:
        "Direct fuel injection sprays fuel straight into the cylinder rather than over the intake valves, so there's no gasoline flow to keep carbon from building up on the valve backs the way it would on a port-injected engine. This is a known characteristic of the whole DFI 9A1 engine family the 981 uses (base and S alike), not something specific to the 2.7L — it's documented here because it surfaced clearly in this pass's base-focused research, not because the base engine is uniquely affected. Left unaddressed for a long time it can contribute to rough idle or misfire symptoms (compounding the cylinder-4 issue above); the fix is a walnut-blasting service to clean the valve backs, typically cited around $800–$1,500.",
      whatToCheck: [
        "Ask whether a walnut-blasting/intake-valve-cleaning service has ever been done and at what mileage",
        "Treat persistent rough idle or misfire symptoms as a reason to budget for this service if it hasn't been done recently",
      ],
    },
    {
      id: "smaller-brakes-vs-s",
      title: "Smaller front brakes than the S — a real difference, not a myth this time",
      severity: "clear",
      summary:
        "Base runs genuinely smaller front rotors than the S (315mm vs. 330mm) with identical 299mm rears on both — worth knowing plainly rather than assuming the two share brake hardware.",
      detail:
        "Unlike the base 718 Cayman (where a same-labeled brake-size difference from the S turned out to be mostly a thickness-only distinction once traced to an OE parts listing), the 981 base and S genuinely differ in front rotor diameter: 315mm on base versus 330mm on the S, with rear rotors identical between them at 299mm. Minimum wear thickness is also lower on base (26mm front / 18mm rear, versus the S's 28mm front / 20mm rear). This isn't a defect — it's a factory spec difference sized appropriately for a lighter, less powerful car — but it's worth stating plainly rather than assuming brake hardware carries over unchanged from one Porsche generation's base-vs-S pattern to another's.",
      whatToCheck: [
        "Don't assume base and S share front brake hardware on this platform — verify rotor condition and pad life during PPI on their own terms rather than by comparison to another generation",
      ],
    },
  ],

  checklistAdditions: {
    questionsForSeller: [
      "Does the A/C-on idle ever feel rough, or has a misfire code ever been logged?",
      "Has an intake-valve carbon-cleaning (walnut blasting) service ever been performed?",
      "What size wheels does this car have — factory 18-inch, or upgraded 19s or larger?",
    ],
    ppiAdvice: [
      "Idle the car with the A/C running specifically — this base-engine misfire pattern doesn't always show up in a quick idle check without it",
      "Check front brake pad and rotor wear against this trim's own (smaller than the S) spec, not the S's numbers",
    ],
  },

  popularOptions: [
    {
      id: "pasm",
      name: "PASM (Porsche Active Suspension Management)",
      tag: "popular",
      note: "Not standard on base or even on the S on this generation — only the GTS got it standard. Consistently named among the platform's must-have options for the driving-dynamics improvement it brings to any 981 trim, base included.",
    },
    {
      id: "sport-chrono",
      name: "Sport Chrono Package",
      tag: "popular",
      note: "Named alongside PASM as one of the platform's two most consistently recommended options, on base as much as on the S — sharper throttle response and added drive modes, more impactful on PDK cars via launch control.",
    },
    {
      id: "ptv",
      name: "PTV (Porsche Torque Vectoring)",
      tag: "popular",
      note: "Called out as especially desirable by owners alongside Sport Exhaust, though (as with the 718's version of this option) its real-world benefit is more noticeable in spirited or low-grip driving than in ordinary street use.",
    },
    {
      id: "sport-exhaust",
      name: "Sport Exhaust (PSE)",
      tag: "popular",
      note: "Named specifically alongside PTV as especially desirable on this generation. The 981's naturally-aspirated flat-six has a more universally-liked baseline sound than the turbocharged 718 that replaced it, so PSE here reads more as an enhancement than the compensation it's often described as on the base 718.",
    },
    {
      id: "sport-seats-ventilation",
      name: "Sport seats + seat ventilation",
      tag: "popular",
      note: "Named specifically as a must-have pairing by forum owners, alongside Sport Chrono and PASM — comfort and everyday-usability options that hold their desirability regardless of trim.",
    },
    {
      id: "19-inch-wheels",
      name: "19-inch wheels",
      tag: "popular",
      note: "Base comes standard on 18-inch wheels, which ride noticeably more compliantly than the optional (and S-standard) 19s. A genuine ride-quality tradeoff, not just a styling upgrade — buyers who want the base's comfort advantage intact should specifically look for a car that kept the factory 18s.",
    },
    {
      id: "pdls-bixenon",
      name: "PDLS (Porsche Dynamic Light System) / bi-xenon headlights",
      tag: "popular",
      note: "Optional dynamic-light bi-xenon headlights, listed as a desirable feature on this generation the same way it is on the Cayman S.",
    },
  ],
  optionsNote:
    "Because none of the S's usual must-have options (PASM, Sport Chrono) came standard on it either, a well-optioned base car and a lightly-optioned S can land closer together on actual driving experience than the trim badges suggest — the S's real, unambiguous advantages are the larger engine and genuinely bigger front brakes, not the option sheet.",

  marketContext: {
    currency: "USD",
    priceLow: 28000,
    priceHigh: 55000,
    rangeNote: "good-condition examples, manual or PDK",
    trendSummary:
      "Average sale price is reported around $38,500 (classic.com aggregate data, via search-result snippet — direct fetch was blocked this pass) — meaningfully below the Cayman S's own average of roughly $49,900–$60,900 depending on source, consistent with base's position as the entry point into 981 ownership. The recorded low, $19,688 for a 2013 model year car (October 2025 sale), reflects a rough or high-mile outlier rather than a typical clean example — treat it as a floor for problem cars, not a shopping target. The recorded high, $89,000 for a 2015 model year car (June 2022 sale), is unusually elevated for a base trim — within reach of well-optioned S or even GTS pricing — and wasn't independently re-verified beyond the search snippet it came from, so treat it with real caution rather than as a confirmed record. Refresh periodically rather than treating as current-day pricing.",
    asOf: "2026-08-30",
    averagePrice: 38542,
    recordLow: { price: 19688, note: "2013 model year, October 15, 2025 sale" },
    recordHigh: {
      price: 89000,
      note: "2015 model year, June 13, 2022 sale — unusually high for a base trim and not independently re-verified; may reflect a heavily-optioned outlier",
    },
  },
};
