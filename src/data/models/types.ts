/**
 * Content schema for a model buying dashboard (/models/[slug]).
 *
 * This is Phase 1's entire content model: everything on a model page is
 * data, not JSX. To add a model, create a new file in this directory that
 * satisfies the `Model` type and register it in `index.ts` — see
 * `src/data/models/README.md` for the full walkthrough.
 *
 * Kept in mind for later (not implemented in Phase 1, see AGENTS.md):
 * a paid VIN-specific report and PPI-inspector referrals will eventually
 * hang off this same model record (e.g. a `vin`-keyed report keyed by
 * `chassisCode`, or a referral list scoped by `slug`). Nothing here should
 * need to change shape to support that later — new top-level fields would
 * just be added.
 */

export type Severity = "critical" | "watch" | "clear";

export interface QuickFact {
  label: string;
  value: string;
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
}

export interface BuyingChecklist {
  documentsToRequest: string[];
  questionsForSeller: string[];
  ppiAdvice: string[];
}

export interface ModelOverview {
  /** e.g. "2013–2016" */
  years: string;
  engine: string;
  layout: string;
  /** e.g. "Coupe, 2dr" */
  body: string;
  /** 2-4 sentence intro paragraph for the model. */
  summary: string;
  quickFacts: QuickFact[];
}

export interface Model {
  slug: string;
  /** Internal factory chassis code, e.g. "981" — shown in mono readouts. */
  chassisCode: string;
  /** Display name, e.g. "981 Cayman S / Boxster S" */
  name: string;
  /** Short name for tight spaces (nav, breadcrumbs), e.g. "981 Cayman S" */
  shortName: string;
  /** One-line teaser shown on the /models index card. */
  teaser: string;
  /** Whether this entry has been reviewed with real research content yet. */
  contentStatus: "placeholder" | "reviewed";
  overview: ModelOverview;
  knownIssues: KnownIssue[];
  marketContext: MarketContext;
  checklist: BuyingChecklist;
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
