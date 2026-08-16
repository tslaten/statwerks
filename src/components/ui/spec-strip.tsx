import type { QuickFact } from "@/data/models";

/**
 * KPI-tile spec readout — one small white card per fact. Uses container
 * queries (not viewport breakpoints) since this renders both full-width
 * and inside a narrow sidebar column — its column count needs to react
 * to its own box, not the screen.
 */
export function SpecStrip({ facts }: { facts: QuickFact[] }) {
  return (
    <div className="@container">
      <dl className="grid grid-cols-2 gap-3 @sm:grid-cols-3 @lg:grid-cols-4">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="shadow-card rounded-xl bg-surface px-4 py-3.5"
          >
            <dt className="label-mono text-steel-dim">{fact.label}</dt>
            <dd className="mt-1.5 font-mono text-sm text-ink md:text-base">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
