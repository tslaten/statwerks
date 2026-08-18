import type { QuickFact } from "@/data/models";
import { iconForFact } from "@/lib/spec-icons";

/**
 * KPI-tile spec readout — one small white card per fact, icon-led like a
 * dashboard stat card. Uses container queries (not viewport breakpoints)
 * since this renders both full-width and inside a narrow sidebar column —
 * its column count needs to react to its own box, not the screen.
 */
export function SpecStrip({ facts }: { facts: QuickFact[] }) {
  return (
    <div className="@container">
      <dl className="grid grid-cols-2 gap-3 @sm:grid-cols-3 @lg:grid-cols-4">
        {facts.map((fact) => {
          const Icon = iconForFact(fact.label);
          return (
            <div
              key={fact.label}
              className="shadow-card rounded-2xl bg-surface px-4 py-3.5"
            >
              <div className="flex items-center gap-2">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-surface-recessed text-steel">
                  <Icon size={15} strokeWidth={1.75} aria-hidden />
                </span>
                <dt className="label-mono text-steel-dim">{fact.label}</dt>
              </div>
              <dd className="mt-2 font-mono text-sm text-ink md:text-base">
                {fact.value}
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
