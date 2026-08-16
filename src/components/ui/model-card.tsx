import Link from "next/link";
import type { Model, Severity } from "@/data/models";
import { SeverityDot } from "./severity-tag";

const SEVERITIES: Severity[] = ["critical", "watch", "clear"];

export function ModelCard({ model }: { model: Model }) {
  const counts = SEVERITIES.map((severity) => ({
    severity,
    count: model.knownIssues.filter((issue) => issue.severity === severity)
      .length,
  })).filter((c) => c.count > 0);

  return (
    <Link
      href={`/models/${model.slug}`}
      className="group relative block border border-hairline bg-raised p-6 transition-colors hover:border-hairline-strong hover:bg-[#1f2226]"
    >
      {model.contentStatus === "placeholder" ? (
        <span className="label-mono absolute right-6 top-6 text-watch">
          Draft
        </span>
      ) : null}
      <div className="flex items-start justify-between pr-14">
        <span className="text-stretch font-display text-4xl font-semibold text-ink">
          {model.chassisCode}
        </span>
        <span className="label-mono pt-2 text-steel-dim">
          {model.overview.years}
        </span>
      </div>
      <h3 className="mt-5 font-display text-lg font-medium text-ink">
        {model.shortName}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-steel">
        {model.teaser}
      </p>
      <div className="mt-6 flex items-center justify-between border-t border-hairline pt-4">
        <div className="flex items-center gap-4">
          {counts.map(({ severity, count }) => (
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
          View dashboard →
        </span>
      </div>
    </Link>
  );
}
