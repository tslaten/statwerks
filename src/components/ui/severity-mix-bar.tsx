import { SEVERITY_LABEL, type Severity } from "@/data/models";
import type { SeverityCount } from "./spec-plate-card";

const barColor: Record<Severity, string> = {
  critical: "bg-critical",
  watch: "bg-watch",
  clear: "bg-clear",
};

/**
 * Known-issue severity mix as a proportional stacked bar + legend.
 * Plain CSS (flex widths), no charting library — the only numeric
 * series Phase 1 actually has is this small, static count-by-severity,
 * which doesn't warrant a dependency. Revisit if/when real numeric
 * series (e.g. price history) exist.
 */
export function SeverityMixBar({ counts }: { counts: SeverityCount[] }) {
  const total = counts.reduce((sum, c) => sum + c.count, 0);
  if (total === 0) return null;

  return (
    <div>
      <div className="flex h-2 overflow-hidden rounded-full bg-surface-recessed">
        {counts.map(({ severity, count }) => (
          <div
            key={severity}
            className={barColor[severity]}
            style={{ width: `${(count / total) * 100}%` }}
          />
        ))}
      </div>
      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
        {counts.map(({ severity, count }) => (
          <li
            key={severity}
            className="flex items-center gap-1.5 text-xs text-steel"
          >
            <span
              aria-hidden
              className={`size-1.5 rounded-full ${barColor[severity]}`}
            />
            <span className="font-mono">{count}</span>
            <span>{SEVERITY_LABEL[severity]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
