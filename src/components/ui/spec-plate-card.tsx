import Link from "next/link";
import type { ReactNode } from "react";
import type { Severity, VehicleImage } from "@/data/models";
import { SeverityDot } from "./severity-tag";
import { VehiclePhoto } from "./vehicle-photo";

export interface SeverityCount {
  severity: Severity;
  count: number;
}

/**
 * Shared spec-plate visual for platform and trim cards — a link styled
 * like a build-sheet entry: vehicle photo (or placeholder), kicker/meta
 * readout, teaser, severity preview, and a CTA row.
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
  image,
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
  image?: VehicleImage;
}) {
  return (
    <Link
      href={href}
      className="shadow-card hover:shadow-card-hover group relative block overflow-hidden rounded-2xl transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5"
    >
      {draft ? (
        <span className="label-mono glass absolute right-4 top-4 z-10 rounded-full px-2.5 py-1 text-watch">
          Draft
        </span>
      ) : null}
      <div className="relative">
        <VehiclePhoto
          image={image}
          fallbackLabel={title}
          className="aspect-square w-full"
          iconSize={32}
          bordered={false}
          objectPosition="center 38%"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-surface-recessed to-transparent"
        />
        <div className="glass absolute inset-x-0 bottom-0 p-4">
          <div className="flex items-start justify-between">
            <span className="text-stretch font-display text-lg font-semibold text-ink">
              {kicker}
            </span>
            {meta ? (
              <span className="label-mono pt-1 text-steel-dim">{meta}</span>
            ) : null}
          </div>
          <h3 className="mt-1.5 font-display text-lg font-medium text-ink">
            {title}
          </h3>
          <p className="mt-1.5 line-clamp-1 text-sm leading-relaxed text-steel">
            {teaser}
          </p>
          {extra}
          <div className="mt-4 flex items-center justify-between border-t border-line/70 pt-3">
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
        </div>
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
