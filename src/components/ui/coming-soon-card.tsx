import { Sparkles } from "lucide-react";

/**
 * Trailing placeholder card for a full model grid (the /models index —
 * every platform currently on the site, not a curated subset), signaling
 * more generations are on the way rather than letting the grid just stop.
 * Matches SpecPlateCard's footprint so it sits flush in the same grid,
 * but isn't a link — there's nowhere to send anyone yet.
 */
export function ComingSoonCard() {
  return (
    <div className="shadow-card flex flex-col overflow-hidden rounded-2xl">
      <div className="flex aspect-[3/2] w-full flex-col items-center justify-center gap-2 rounded-t-2xl border border-dashed border-line-strong bg-surface-recessed">
        <Sparkles size={28} strokeWidth={1.25} className="text-steel-dim" aria-hidden />
        <span className="label-mono text-steel-dim">Coming soon</span>
      </div>
      <div className="bg-surface p-4">
        <h3 className="text-stretch font-display text-lg font-semibold text-ink">
          More models coming soon
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-steel">
          New generations and trims get added over time — check back, or
          browse what&apos;s live now.
        </p>
      </div>
    </div>
  );
}
