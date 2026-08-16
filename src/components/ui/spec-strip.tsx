import type { QuickFact } from "@/data/models";

/** Horizontal data readout — mimics a spec-plate / build-sheet strip. */
export function SpecStrip({ facts }: { facts: QuickFact[] }) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-6 border-y border-hairline bg-inset px-6 py-6 sm:grid-cols-3 md:flex md:flex-wrap md:gap-0 md:divide-x md:divide-hairline md:px-0">
      {facts.map((fact) => (
        <div key={fact.label} className="md:px-6 md:first:pl-0 md:last:pr-0">
          <dt className="label-mono text-steel-dim">{fact.label}</dt>
          <dd className="mt-1.5 font-mono text-sm text-ink md:text-base">
            {fact.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
