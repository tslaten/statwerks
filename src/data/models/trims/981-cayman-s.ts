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
 *
 * Updated again August 2026: bore scoring itself is now a genuine
 * platform-wide Watch item (see the 981 Cayman platform file) rather
 * than dismissed as forum noise. This trim's own copy is updated to
 * point at that item and note the still-open question of whether the
 * S's larger-bore engine carries materially higher relative risk than
 * base — real-world case data doesn't show a clear difference, so
 * this stays a Clear, no-dominant-trim-specific-pattern entry rather
 * than a trim-level flag of its own.
 */
export const cayman981S: Trim = {
  slug: "s",
  platformSlug: "981-cayman",
  name: "Cayman S",
  shortName: "Cayman S",
  teaser:
    "The larger 3.4L flat-six over base — the sweet spot most buyers cross-shop first.",
  contentStatus: "reviewed",
  image: {
    src: "/vehicles/981-cayman/s.png",
    alt: "981 Cayman S, white, side profile view",
  },

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
        "Beyond the platform-wide issues every 981 shares, owner and forum consensus doesn't point to an S-specific mechanical weak point — bore scoring included, though whether the S's larger bore carries extra relative risk is an open question, not a settled one.",
      detail:
        "Most reported problems on the Cayman S are isolated/one-off rather than a documented pattern tied to the 3.4L MA1.23 engine specifically. On bore scoring — a real, if rare, risk across the whole 981 platform (see the platform page) — some specialists suggest the S's larger-bore engine carries slightly higher relative risk than base by the same logic that applied to older M97 engines, but real-world case data collected on owner forums hasn't shown a clear base-vs-S difference in practice. Because there's no major, common, catastrophic-failure pattern specific to the S, negotiation leverage mostly comes from platform-wide wear items (strut mounts, condenser condition), confirming a clean borescope result, and standard PPI findings (brakes, tires, clutch if manual) rather than a documented widespread mechanical weak point.",
      whatToCheck: [
        "Get a borescope inspection of the cylinder bores during PPI — treat this as standard, not optional, given the open base-vs-S question",
        "Focus the rest of PPI time on the platform-wide known issues and standard mechanical/wear checks rather than a rumored engine-specific defect",
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
