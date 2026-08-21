import type { KnownIssue } from "@/data/models";
import { SeverityTag } from "./severity-tag";

/**
 * Card body intentionally shows only `issue.detail`, not
 * `issue.summary` — the two were being rendered as separate stacked
 * paragraphs, but `summary` is consistently a shorter version of the
 * same point `detail` goes on to make in full, so showing both read as
 * repeating itself. `summary` stays in the data model (every known
 * issue across every platform/trim file still has one) for any future
 * short-form use — a tooltip, a meta description — just not here.
 */
export function KnownIssueRow({ issue }: { issue: KnownIssue }) {
  return (
    <article
      id={issue.id}
      className="shadow-card grid grid-cols-1 gap-4 rounded-2xl bg-surface p-6 md:grid-cols-[9rem_1fr] md:p-7"
    >
      <div className="flex items-start md:justify-start">
        <SeverityTag severity={issue.severity} />
      </div>
      <div>
        <h3 className="font-display text-lg font-medium text-ink">
          {issue.title}
        </h3>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink/80">
          {issue.detail}
        </p>
        {issue.whatToCheck.length > 0 ? (
          <div className="mt-4 rounded-xl bg-surface-recessed p-4">
            <h4 className="label-mono mb-3 text-steel-dim">
              What to check
            </h4>
            <ul className="space-y-2">
              {issue.whatToCheck.map((check, i) => (
                <li
                  key={i}
                  className="flex gap-2.5 text-sm leading-relaxed text-ink/90"
                >
                  <span aria-hidden className="font-mono text-steel-dim">
                    →
                  </span>
                  <span>{check}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </article>
  );
}
