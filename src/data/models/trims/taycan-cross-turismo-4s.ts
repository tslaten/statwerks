import type { Trim } from "../types";

/**
 * Reviewed research, September 2026. First pass for this trim — see the
 * platform file's header comment for scope (pre-facelift 2021–2024
 * model years only) and the sourcing-quality note (WebFetch blocked
 * this pass; everything traces to WebSearch result snippets).
 *
 * `TrimOverview.engine` / `transmission` are ICE-shaped field names;
 * rather than reshape the schema for one car, they hold the EV
 * equivalents (motors, the front single-speed + rear two-speed
 * reduction gears). The quickFacts use "Motors" and "Range (EPA)"
 * labels in place of "Engine code".
 *
 * Porsche rates power as two numbers: a normal figure and a higher
 * "overboost" figure only available with launch control. `power` holds
 * just the normal figure because it's shown in tight single-line spots
 * (sidebar, search); the Power quickFact and summary carry both. Curb weight is approximate — the most-cited
 * figure is the EU DIN 2,245 kg (~4,950 lb), and US-market figures
 * run somewhat higher depending on equipment.
 *
 * EPA range (215 mi) is the original 2021 rating; later model years
 * got software and efficiency changes and were rated differently, and
 * this pass didn't pin down every year's figure — so it's labeled as
 * the 2021 number rather than presented as a trim-wide constant.
 *
 * Pricing caveat: classic.com's 4S Cross Turismo average ($83,028)
 * appears to include facelifted 2025+ cars, which sell for much more,
 * so `averagePrice` / `recordLow` / `recordHigh` are left unset (the
 * price chart needs all three, so it falls back to prose-only) and the
 * figures are stated in `trendSummary` with the caveat instead. The record-high sale ($112,500, 2022 model year, July
 * 2025) is above what most pre-facelift cars are listed for and wasn't
 * independently re-verified.
 *
 * Vehicle image: a user-supplied illustration (silver, side profile,
 * in front of a modern house), used as-is at `fit: "cover"` like the
 * other trim images. Kept as the supplied WebP rather than converted
 * to PNG.
 */
export const taycanCrossTurismo4S: Trim = {
  slug: "4s",
  platformSlug: "taycan-cross-turismo",
  name: "4S Cross Turismo",
  shortName: "4S CT",
  teaser:
    "The volume Cross Turismo — within a few tenths of the Turbo in real driving, for far less money, with the big battery as standard.",
  contentStatus: "reviewed",
  image: {
    src: "/vehicles/taycan-cross-turismo/4s.webp",
    alt: "Taycan 4S Cross Turismo, silver, side profile, parked in front of a modern house",
    fit: "cover",
  },

  overview: {
    engine: "Dual permanent-magnet synchronous motors (one per axle)",
    power: "482 hp",
    zeroToSixty: "3.8s (with launch control)",
    transmission: "Single-speed front, two-speed rear",
    curbWeight: "~4,950 lb (EU DIN figure; US figures vary with equipment)",
    summary:
      "The middle of the Cross Turismo range and the one most used buyers end up shopping: 482 hp (562 hp in launch-control overboost) and 479 lb-ft from the same 93.4 kWh Performance Battery Plus every Cross Turismo gets, with a 0–60 mph time of 3.8 seconds that's quicker than most buyers will ever use. The step up to the Turbo buys more power and more standard equipment rather than a different battery or drivetrain layout, so on the used market the 4S is where the value sits. The step down to the Taycan 4 Cross Turismo is less power with the same battery. The original 2021 EPA range rating was 215 miles — modest next to other EVs, and worth taking seriously if you plan road trips — though owner reports of real-world range often land above the EPA figure in mild weather.",
    quickFacts: [
      { label: "Motors", value: "Dual PMSM, AWD" },
      { label: "Power", value: "482 hp · 562 hp overboost" },
      { label: "Torque", value: "479 lb-ft (overboost)" },
      { label: "0–60 mph", value: "3.8s" },
      { label: "Transmission", value: "1-speed front / 2-speed rear" },
      { label: "Range (EPA)", value: "215 mi (2021 rating)" },
      { label: "Curb weight", value: "~4,950 lb" },
    ],
  },

  knownIssues: [
    {
      id: "range-expectations",
      title: "EPA range is modest — confirm it fits how you'll use the car",
      severity: "clear",
      summary:
        "The 2021 4S Cross Turismo was rated at 215 miles EPA — low for a car this price, though real-world results are often better in mild conditions. Not a defect, but the main practical tradeoff of the trim.",
      detail:
        "The Cross Turismo's taller body, AWD, and wider tires cost range relative to the sedan, and early EPA ratings for the whole Taycan family were conservative next to real-world testing. Cold weather, 21-inch wheels, and the Off-Road Design package's all-terrain tires all pull range down further. Degradation on these packs has been mild (see the platform's battery-health entry), so a car's range when new is a fair guide to what it delivers now — but plan around the EPA number, not the best-case owner report.",
      whatToCheck: [
        "Charge the car to a known percentage and compare the displayed range to what you'd expect — then ask for a proper battery health report rather than trusting the dash estimate",
        "Note the wheel and tire fitment — 21s and all-terrain tires both cost range",
      ],
    },
  ],

  checklistAdditions: {
    questionsForSeller: [
      "Does it have the Off-Road Design package, and what wheels and tires are on it now?",
    ],
    ppiAdvice: [
      "If it has the Off-Road Design package, check the underbody and lower cladding for signs the car was actually used off-road",
    ],
  },

  popularOptions: [
    {
      id: "off-road-design",
      name: "Off-Road Design package",
      tag: "rare",
      note: "Adds a further ~20mm of ride height over the standard Cross Turismo, extra body cladding and stone-chip flaps, mud flaps, and 20-inch Off-Road Design wheels on all-terrain tires. The visual signature of the Cross Turismo, but it's an option many cars were built without — and the all-terrain tires cost range and road noise.",
    },
    {
      id: "onboard-charger-19kw",
      name: "19.2 kW onboard AC charger",
      tag: "rare",
      note: "Doubles the standard 9.6 kW Level 2 charging rate — but only if you have (or will install) a home circuit that can supply it. Worth a premium only if you'll actually use it; irrelevant for DC fast charging.",
    },
    {
      id: "rear-axle-steering",
      name: "Rear-axle steering",
      tag: "popular",
      note: "Makes a long, heavy car noticeably easier to park and sharper on a back road. Commonly specified, but owners on the forums don't treat it as a must-have — don't overpay for it alone.",
    },
    {
      id: "adaptive-air-suspension",
      name: "Adaptive air suspension with PASM",
      tag: "standard",
      note: "Standard on every Cross Turismo, including the 4S — no need to hunt for it the way you would PASM on a 718.",
    },
    {
      id: "heat-pump",
      name: "Heat pump",
      tag: "popular",
      note: "Helps winter range by heating the cabin more efficiently. This research pass confirmed it's standard on the facelifted cars but couldn't pin down exactly which pre-facelift model years had it as an option vs. standard — check the specific car's build sheet if cold-weather range matters to you.",
    },
  ],
  optionsNote:
    "Taycans depreciated steeply from their original sticker prices, which dulls the resale value of most options. The practical ones for daily use are the charger, rear-axle steering, and heat pump; the Off-Road Design package is mostly an aesthetic choice. Option lists on these cars were long and expensive new, so an original window sticker is worth asking for.",

  marketContext: {
    currency: "USD",
    priceLow: 50000,
    priceHigh: 78000,
    rangeNote: "clean, pre-facelift (2021–2024) examples",
    trendSummary:
      "Taycans have taken some of the steepest depreciation of any recent Porsche, which is most of the used-market appeal. Dealer and marketplace listings for pre-facelift 4S Cross Turismos cluster roughly between the low $50,000s and mid-$70,000s depending on year, mileage, and options. Classic.com reports an overall average of about $83,000 for the 4S Cross Turismo, but that figure appears to include much pricier facelifted 2025+ cars, so it overstates what a 2021–2024 car costs — it isn't used as this page's average. Recorded low and high sales (also Classic.com, via web search rather than a direct page pull): $54,500 for a 2023 model year car (August 2024 sale) and $112,500 for a 2022 model year car (July 2025 sale) — that high is well above typical listings and wasn't independently re-verified. Refresh periodically rather than treating any of this as live pricing.",
    asOf: "2026-09-28",
  },
};
