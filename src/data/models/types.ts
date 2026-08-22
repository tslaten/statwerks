/**
 * Content schema for model buying dashboards.
 *
 * Two tiers, matched to how Porsche generations actually work:
 *
 * - `Platform` — one per generation/chassis (e.g. "981 Cayman"). Holds
 *   facts and known issues common to every trim of that generation.
 * - `Trim` — one per trim within a platform (e.g. "Cayman S"). Extends
 *   its platform with trim-specific specs, known issues, and pricing.
 *   Points back at its platform via `platformSlug`.
 *
 * This is a many-to-one join by string slug, not nesting — adding a new
 * trim (GTS, Base, GT4, ...) is a new file in `trims/` that references an
 * existing `platformSlug`. Nothing about the platform file changes.
 *
 * Route: `/models/[platform]/[trim]`, e.g. `/models/981-cayman/s`.
 *
 * See `src/data/models/README.md` for the full walkthrough of adding a
 * platform or trim.
 *
 * Kept in mind for later (not implemented in Phase 1, see AGENTS.md): a
 * paid VIN-specific report and PPI-inspector referrals will eventually
 * hang off a specific trim (or VIN within a trim). Nothing here should
 * need to change shape to support that later — new top-level fields
 * would just be added to `Trim`.
 */

export type Severity = "critical" | "watch" | "clear";
export type ContentStatus = "placeholder" | "reviewed";

export interface QuickFact {
  label: string;
  value: string;
}

export interface VehicleImage {
  /** Path under /public, e.g. "/vehicles/981-cayman/s.png" */
  src: string;
  alt: string;
  /**
   * How the image should fill its box. "contain" (default) is for
   * background-removed cutout shots — the whole car stays visible with
   * empty space around it. "cover" is for full, unprocessed scene photos
   * that should fill the box edge-to-edge (cropping as needed) rather
   * than sit letterboxed inside it.
   */
  fit?: "contain" | "cover";
}

export interface KnownIssue {
  /** Stable id for anchors/links, e.g. "ims-bearing" */
  id: string;
  title: string;
  severity: Severity;
  /** One or two sentences — what the issue is. */
  summary: string;
  /** Longer explanation: why it happens, cost to fix, model years most affected. */
  detail: string;
  /** Concrete, actionable checks a buyer or PPI shop can perform. */
  whatToCheck: string[];
}

export interface PriceDatapoint {
  price: number;
  /** e.g. "2013 model year, April 2023 sale" */
  note: string;
}

export interface MarketContext {
  currency: "USD";
  priceLow: number;
  priceHigh: number;
  /** Free-text unit note shown next to the range, e.g. "clean, sub-70k mile examples". */
  rangeNote: string;
  /** A few sentences of written trend/context — not live data. */
  trendSummary: string;
  /** ISO date string — when this pricing copy was last reviewed. */
  asOf: string;
  /**
   * Structured pricing landmarks that feed the price-range chart on the
   * trim dashboard. All three are optional and only render the chart
   * when present together — omit to fall back to prose-only pricing.
   */
  averagePrice?: number;
  recordLow?: PriceDatapoint;
  recordHigh?: PriceDatapoint;
}

export interface BuyingChecklist {
  documentsToRequest: string[];
  questionsForSeller: string[];
  ppiAdvice: string[];
}

/**
 * How sought-after a factory option is among buyers/specialists — a
 * desirability signal, not a severity one. Deliberately does not reuse
 * `Severity`'s color language (critical/watch/clear), since "popular"
 * isn't "bad" and "rare" isn't "good" the way severity tags are.
 */
export type OptionTag = "popular" | "rare" | "standard";

export interface PopularOption {
  /** Stable id, e.g. "sport-chrono" */
  id: string;
  name: string;
  tag: OptionTag;
  /** Why it's tagged that way, and any nuance/dissent worth flagging. */
  note: string;
}

export interface PlatformOverview {
  /** Generation production span, e.g. "2013–2016" */
  years: string;
  layout: string;
  /** e.g. "2dr coupe" */
  body: string;
  /** 2-4 sentence intro paragraph for the generation. */
  summary: string;
  /** Platform-level spec readout (production years, chassis code, layout, ...). */
  quickFacts: QuickFact[];
}

export interface Platform {
  /** URL slug — first segment: /models/[slug] */
  slug: string;
  /** Internal factory chassis code, e.g. "981" — shown in mono readouts. */
  chassisCode: string;
  /** Display name, e.g. "981 Cayman" */
  name: string;
  /** Short name for tight spaces (nav, breadcrumbs). */
  shortName: string;
  /** One-line teaser shown on the /models index card. */
  teaser: string;
  /** Whether this entry has been reviewed with real research content yet. */
  contentStatus: ContentStatus;
  overview: PlatformOverview;
  /**
   * A photo representing the generation as a whole — shown on the
   * platform hub page and on platform-level cards (home, /models).
   * Deliberately separate from any trim's own `image`: a platform can
   * be reassigned a new representative photo without touching what
   * renders on that trim's own dashboard, and vice versa. Optional —
   * falls back to a trim's image (see callers) or a placeholder when
   * unset, same pattern as `Trim.image`.
   */
  image?: VehicleImage;
  /** Known issues that apply across every trim of this platform. */
  sharedKnownIssues: KnownIssue[];
  /** Buying guidance shared across every trim of this platform. */
  checklist: BuyingChecklist;
}

export interface TrimOverview {
  engine: string;
  power: string;
  zeroToSixty: string;
  transmission: string;
  curbWeight: string;
  /** Trim-level spec readout (engine, power, 0-60, transmission, weight, ...). */
  quickFacts: QuickFact[];
  /** Optional trim-specific blurb — what sets this trim apart within the platform. */
  summary?: string;
}

export interface Trim {
  /** URL slug — second segment: /models/[platformSlug]/[slug] */
  slug: string;
  /** Foreign key back to Platform.slug. */
  platformSlug: string;
  /** Display name, e.g. "Cayman S" */
  name: string;
  shortName: string;
  /** One-line teaser shown on the platform hub page's trim card. */
  teaser: string;
  contentStatus: ContentStatus;
  overview: TrimOverview;
  /**
   * Background-removed product shot, used as the hero image on the trim
   * page and as a card thumbnail on /models and the platform hub. Optional
   * — pages render a placeholder state when it's missing, so this can be
   * added whenever a real image is sourced without any other changes.
   */
  image?: VehicleImage;
  /** Known issues specific to this trim, in addition to the platform's shared list. */
  knownIssues: KnownIssue[];
  marketContext: MarketContext;
  /**
   * Trim-specific additions to the platform's buying checklist — e.g. "test
   * PDK shift quality" only matters on PDK-equipped trims. Optional: most
   * checklist content belongs on the platform since it's trim-agnostic.
   * Merged onto `Platform.checklist` via `mergedChecklist()` for display.
   */
  checklistAdditions?: Partial<BuyingChecklist>;
  /**
   * Notable factory options for this trim and how sought-after each is.
   * Optional — omit until researched; the section just doesn't render.
   */
  popularOptions?: PopularOption[];
  /**
   * Caveat/context paragraph about how much options actually move resale
   * value — shown under the options grid when present. Optional.
   */
  optionsNote?: string;
}

export const SEVERITY_LABEL: Record<Severity, string> = {
  critical: "Critical",
  watch: "Watch",
  clear: "Clear",
};

/** Sort order for known issues — most severe first. */
export const SEVERITY_ORDER: Record<Severity, number> = {
  critical: 0,
  watch: 1,
  clear: 2,
};
