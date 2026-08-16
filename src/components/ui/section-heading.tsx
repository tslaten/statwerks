import type { ReactNode } from "react";

export function SectionHeading({
  index,
  title,
  aside,
}: {
  /** Section number as shown on a build sheet, e.g. "01" */
  index: string;
  title: string;
  aside?: ReactNode;
}) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4 border-b border-hairline pb-4">
      <div className="flex items-baseline gap-3">
        <span className="label-mono text-steel-dim">{index}</span>
        <h2 className="text-stretch font-display text-2xl font-semibold text-ink md:text-3xl">
          {title}
        </h2>
      </div>
      {aside ? (
        <div className="label-mono hidden text-steel-dim md:block">
          {aside}
        </div>
      ) : null}
    </div>
  );
}
