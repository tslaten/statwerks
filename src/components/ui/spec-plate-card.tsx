import Link from "next/link";
import type { ReactNode } from "react";
import type { Severity } from "@/data/models";
import { SeverityDot } from "./severity-tag";

export interface SeverityCount {
  severity: Severity;
  count: number;
}

/**
 * Shared spec-plate visual for platform and trim cards — a link styled
 * like a build-sheet entry: big kicker digit/badge, meta readout, teaser,
 * severity preview, and a CTA row.
 */
export function SpecPlateCard({
  href,
  kicker,
  meta,
  title,
  teaser,
  severityCounts,
  draft,
  ctaLabel = "View dashboard →",
  extra,
}: {
  href: string;
  kicker: string;
  meta?: string;
  title: string;
  teaser: string;
  severityCounts: SeverityCount[];
  draft?: boolean;
  ctaLabel?: string;
  extra?: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="shadow-card hover:shadow-card-hover group relative block rounded-2xl bg-surface p-6 transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5"
    >
      {draft ? (
        <span className="label-mono absolute right-6 top-6 text-watch">
          Draft
        </span>
      ) : null}
      <div className="flex items-start justify-between pr-14">
        <span className="text-stretch font-display text-4xl font-semibold text-ink">
          {kicker}
        </span>
        {meta ? (
          <span className="label-mono pt-2 text-steel-dim">{meta}</span>
        ) : null}
      </div>
      <h3 className="mt-5 font-display text-lg font-medium text-ink">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-steel">{teaser}</p>
      {extra}
      <div className="mt-6 flex items-center justify-between border-t border-line/70 pt-4">
        <div className="flex items-center gap-4">
          {severityCounts.map(({ severity, count }) => (
            <span
              key={severity}
              className="flex items-center gap-1.5 font-mono text-xs text-steel"
            >
              <SeverityDot severity={severity} />
              {count}
            </span>
          ))}
        </div>
        <span className="label-mono text-steel transition-colors group-hover:text-ink">
          {ctaLabel}
        </span>
      </div>
    </Link>
  );
}

/** Count known issues per severity, dropping zero-count severities. */
export function countBySeverity(
  issues: { severity: Severity }[]
): SeverityCount[] {
  const order: Severity[] = ["critical", "watch", "clear"];
  return order
    .map((severity) => ({
      severity,
      count: issues.filter((issue) => issue.severity === severity).length,
    }))
    .filter((c) => c.count > 0);
}
