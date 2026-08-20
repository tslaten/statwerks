import type { Trim } from "../types";

/**
 * Reviewed research, August 2026. First pass for this trim — built via
 * web search across specialist/enthusiast sources and classic.com
 * aggregate pricing data, not an owner-supplied document. See the
 * platform file's header comment for the full sourcing note.
 *
 * Engine code is described rather than given a single alphanumeric
 * code the way the Carrera's "9A1" is — sources consistently call
 * this "the Mezger engine" but didn't agree on one specific factory
 * code, so that ambiguity is stated plainly rather than picking one
 * to look more authoritative than the research supports.
 *
 * Vehicle image: a user-supplied illustration, used as-is at the
 * user's explicit request — no background removal or cropping (an
 * earlier pass had run it through the rembg pipeline used for other
 * trims; the user asked for the original scene, letterbox bars and
 * all, instead). It's a full scenic composition (mountain road
 * background) rather than the isolated-car cutout the other trim
 * images use — flagged as a visual inconsistency in the card grid,
 * not silently normalized, since the user supplied this image
 * directly and asked for it unprocessed. `image.fit` is set to
 * "cover" rather than the default "contain" so this full scene fills
 * its box edge-to-edge instead of letterboxing inside it — "contain"
 * is the right choice for the cutout-style trim images, not this one.
 */
export const gt39972Trim: Trim = {
  slug: "gt3",
  platformSlug: "997-2-gt3",
  name: "GT3",
  shortName: "GT3",
  teaser:
    "A purist's naturally aspirated 911 — the last GT3 built on the Mezger engine, manual-only and rear-wheel-drive only.",
  contentStatus: "reviewed",
  image: {
    src: "/vehicles/997-2-gt3/gt3.png",
    alt: "997.2 GT3, red, three-quarter front view, parked on a mountain road",
    fit: "cover",
  },

  overview: {
    engine: "3.8L flat-six, naturally aspirated (Mezger-derived, dry-sump lubrication)",
    power: "435 hp @ 7,600 rpm",
    zeroToSixty: "~4.1s 0–62 mph (manufacturer figure, requires skilled clutch control)",
    transmission: "6-speed manual only — no PDK on this generation",
    curbWeight: "3,075 lb (1,395 kg)",
    summary:
      "A purist's naturally aspirated 911 from the same chassis generation as the DFI-powered Carrera — the last GT3 to use the Mezger engine before the 991 generation switched architectures. Track-focused, rear-wheel drive only, manual-only, from a short run of just 2,256 units. The Mezger engine has a strong reliability reputation even under hard track use when properly maintained — 'near bulletproof' is a common description in ownership discussion. There's no documented engine-specific failure pattern beyond the platform-wide watch items (centerlock recall, front-axle-lift reliability if equipped, RMS weep).",
    quickFacts: [
      { label: "Engine code", value: "Mezger 3.8L (motorsport-derived)" },
      { label: "Power", value: "435 hp @ 7,600 rpm" },
      { label: "Torque", value: "317 lb-ft @ 6,250 rpm" },
      { label: "0–62 mph", value: "~4.1s" },
      { label: "Transmission", value: "6-speed manual only" },
      { label: "Curb weight", value: "3,075 lb" },
    ],
  },

  knownIssues: [
    {
      id: "no-dominant-failure-pattern",
      title: "No dominant engine-specific failure pattern beyond platform-wide items",
      severity: "clear",
      summary:
        "The Mezger-based GT3 engine is widely considered among the strongest, most track-durable engines Porsche makes — no documented engine-specific weak point beyond the platform-wide watch items.",
      detail:
        "'Near bulletproof' is a common description of this engine in ownership and reliability discussion, even accounting for GT3s typically being driven hard. The documented watch items (centerlock hub recall, front-axle-lift reliability on cars so equipped, RMS weep) are platform-wide rather than an engine-specific weak point. No documented bore-scoring concern turned up for this engine family in this research pass, unlike the M96/M97/9A1 engine family conversation that applies to Carrera models from either generation.",
      whatToCheck: [
        "Treat this as a standard, thorough PPI rather than one targeting a known engine-specific failure",
        "Review the platform-wide watch items (centerlock recall, front-axle lift, RMS, clutch feel) as your checklist baseline",
      ],
    },
  ],

  checklistAdditions: {
    questionsForSeller: [
      "Has this car seen track use, and if so how often? GT3s are commonly tracked, which affects clutch, brake, and tire wear more than mileage alone.",
    ],
    ppiAdvice: [
      "If PCCB-equipped, inspect disc wear and get a sense of remaining service life before finalizing price — replacement is expensive",
      "Check clutch engagement point and flywheel condition given this generation's typically harder use than a Carrera",
    ],
  },

  popularOptions: [
    {
      id: "clubsport-package",
      name: "Clubsport Package",
      tag: "popular",
      note: "Adds a rear roll cage, lightweight bucket seats sourced from the Carrera GT, harness belts, and a fire extinguisher. Named as one of the standout desirable specs for this generation in specialist buying guides — track-focused mods like this have been cited as boosting a car's value. That said, some buyers specifically prefer the more practical standard \"Comfort\" specification for daily usability, so treat this as a genuine preference split, not a universal must-have.",
    },
    {
      id: "pccb",
      name: "PCCB (Porsche Ceramic Composite Brakes)",
      tag: "popular",
      note: "An exclusive GT3-spec version of Porsche's ceramic-composite brakes, priced close to $8,000 when new. Named alongside the Clubsport package and front-axle lift as one of the most desirable specs to look for — saves roughly 10kg of unsprung weight per corner and offers fade-free track performance. The tradeoff: PCCB discs don't last forever and are expensive to replace, and converting back to steel brakes has been estimated at around £5,000 — factor rotor condition into your offer on a PCCB-equipped car.",
    },
    {
      id: "front-axle-lift",
      name: "Front-axle lift system",
      tag: "popular",
      note: "Raises the front of the car roughly 30mm — useful for driveways and speed bumps that would otherwise scrape the GT3's low front splitter. Named as one of the most desirable specs for this generation, but see the platform-level known issue: this option has a well-documented, unusually high failure rate, with repairs running well into four figures. Desirable to have, but budget for the real chance it needs expensive attention.",
    },
  ],
  optionsNote:
    "These three options (Clubsport package, PCCB, front-axle lift) are specifically and consistently named together across specialist buying guides as the standout desirable specs for a used 997.2 GT3 — this list is intentionally short and high-confidence rather than padded with every factory option code.",

  marketContext: {
    currency: "USD",
    priceLow: 120000,
    priceHigh: 220000,
    rangeNote: "clean, good-condition examples with unremarkable track history",
    trendSummary:
      "Average sale price sits around $166,600 — substantially pricier than the Carrera S trims from the same chassis generation, reflecting the GT3's low production volume (2,256 units total) and status as the last Mezger-engined GT3. The lowest recorded sale is $86,000 (2010 model year, March 2024), and the highest is $278,993 (2011 model year, November 2023) — treat both as edges of the range rather than typical shopping targets, since a low sale price on a GT3 often correlates with hard track use or accident history rather than simple depreciation. For comparison, the 997.2 GT3 RS runs meaningfully higher still (~$294,900 average), reflecting its added rarity and performance focus. Compiled from classic.com aggregate sale data — not live/real-time pricing.",
    asOf: "2026-08-19",
    averagePrice: 166604,
    recordLow: { price: 86000, note: "2010 model year, March 2024 sale — mileage not specified" },
    recordHigh: { price: 278993, note: "2011 model year, November 2023 sale" },
  },
};
