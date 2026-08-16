import type { Trim } from "../types";

/**
 * Reviewed research, August 2026. Curated content supplied directly by
 * the site owner (engine specs, pricing aggregation, forum consensus on
 * S-specific reliability), incorporated verbatim where possible.
 * Pricing is manually curated from public sale-price aggregators (e.g.
 * classic.com), cross-checked against enthusiast press coverage — not
 * live data. Supersedes an earlier auto-researched pass that flagged
 * bore scoring as a Critical, trim-specific risk; this pass found no
 * documented S-specific failure pattern, so that entry was replaced —
 * see PR/commit history for the full discussion.
 */
export const cayman981S: Trim = {
  slug: "s",
  platformSlug: "981-cayman",
  name: "Cayman S",
  shortName: "Cayman S",
  teaser:
    "The larger 3.4L flat-six over base — the sweet spot most buyers cross-shop first.",
  contentStatus: "reviewed",

  overview: {
    engine: "3.4L flat-six, naturally aspirated (direct injection)",
    power: "321 hp @ 7,400 rpm",
    zeroToSixty: "4.4s (PDK w/ Sport Chrono) · 4.7s (manual)",
    transmission: "6-speed manual or 7-speed PDK",
    curbWeight: "2,910 lb (manual) / 2,980 lb (PDK)",
    summary:
      "A mid-tier trim above base Cayman and below GTS and GT4 — widely considered the sweet spot of the 981 range, meaningfully quicker than base without GT4-level cost or rarity. There's no documented S-specific mechanical weak point beyond the platform-wide items every 981 shares (see Known Issues), so negotiation leverage mostly comes from standard wear items and PPI findings rather than a known catastrophic-failure pattern like older air-cooled or M96/M97-engined Porsches.",
    quickFacts: [
      { label: "Engine code", value: "MA1.23" },
      { label: "Power", value: "321 hp @ 7,400 rpm" },
      { label: "Torque", value: "273 lb-ft" },
      { label: "0–60 mph", value: "4.4s (PDK w/ Sport Chrono)" },
      { label: "Transmission", value: "6MT or 7-speed PDK" },
      { label: "Curb weight", value: "2,910–2,980 lb" },
    ],
  },

  knownIssues: [
    {
      id: "no-dominant-failure-pattern",
      title: "No dominant trim-specific failure pattern identified",
      severity: "clear",
      summary:
        "Beyond the platform-wide issues every 981 shares, owner and forum consensus doesn't point to an S-specific mechanical weak point — including bore scoring, which sometimes comes up in enthusiast discussion but isn't a documented pattern on this engine.",
      detail:
        "Most reported problems on the Cayman S are isolated/one-off rather than a documented pattern tied to the 3.4L MA1.23 engine specifically. This is worth stating explicitly rather than leaving it implied: it means most of your PPI budget and attention should go toward the platform-wide items and standard wear-and-tear checks (brakes, tires, clutch if manual), not chasing a rumored engine-specific defect.",
      whatToCheck: [
        "Focus PPI time on the platform-wide known issues and standard mechanical/wear checks rather than one specific engine fear",
        "Be skeptical of a shop or seller who leads with a dramatic engine-specific warning not reflected in the platform's known issues",
      ],
    },
  ],

  checklistAdditions: {
    documentsToRequest: [
      "Full-service history specifically covering the 3.4L engine — oil/filter intervals and coolant service",
    ],
    questionsForSeller: [
      "Which transmission does this car have — manual or PDK? It meaningfully affects resale demand and driving character, and listings aren't always clear.",
    ],
    ppiAdvice: [
      "If PDK-equipped, test shift quality specifically — hesitation or harsh shifts warrant a transmission-focused PPI item",
      "No IMS bearing concern on this engine — don't pay for an \"IMS inspection\" upsell; it doesn't apply here",
    ],
  },

  marketContext: {
    currency: "USD",
    priceLow: 35000,
    priceHigh: 65000,
    rangeNote: "good-condition examples, PDK or manual",
    trendSummary:
      "Average sale price sits around $49,900, with good-condition examples starting around $35,000 and exceptional or well-documented cars reaching into the mid-$70s at auction — the current recorded high is $76,500 (2014 model year, August 2025). The recorded low, $22,895 for a 2013 model year car in April 2023, reflects a rough or high-mile outlier rather than a typical clean example, so treat it as a floor for problem cars, not a shopping target. Considered a relative bargain against the newer 718 generation — used 981 S pricing sits well below entry pricing on a new or lightly used 718 Cayman. Manually curated from public sale-price aggregators, cross-checked against enthusiast press coverage — refresh periodically rather than treating as current-day pricing.",
    asOf: "2026-08-16",
  },
};
