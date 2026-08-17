import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export function SectionHeading({
  index,
  title,
  aside,
  icon: Icon,
}: {
  /** Section number as shown on a build sheet, e.g. "01" */
  index: string;
  title: string;
  aside?: ReactNode;
  icon?: LucideIcon;
}) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4 border-b border-line pb-4">
      <div className="flex items-center gap-3">
        {Icon ? (
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-surface-recessed text-steel">
            <Icon size={16} strokeWidth={1.75} aria-hidden />
          </span>
        ) : null}
        <div className="flex items-baseline gap-3">
          <span className="label-mono text-steel-dim">{index}</span>
          <h2 className="text-stretch font-display text-2xl font-semibold text-ink md:text-3xl">
            {title}
          </h2>
        </div>
      </div>
      {aside ? (
        <div className="label-mono hidden text-steel-dim md:block">
          {aside}
        </div>
      ) : null}
    </div>
  );
}
