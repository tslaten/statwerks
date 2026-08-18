import type { MarketContext } from "@/data/models";
import { formatUSD } from "@/lib/format";

/**
 * Single-series price-range plot: a track spanning the recorded low to
 * the recorded high, a filled segment marking the typical asking-price
 * range (the numbers already shown in the stat tile above), and a
 * marker for the average sale price. Plain CSS — no time series exists
 * to justify a charting dependency; this is one static distribution
 * summary per trim, not a live feed. Direct labels only (record low,
 * average, record high); no legend needed for a single series.
 *
 * Each row below is its own `relative` box at the same width, so a
 * given percentage lines up vertically across rows without fragile
 * pixel math.
 */
export function PriceRangeChart({ context }: { context: MarketContext }) {
  const { priceLow, priceHigh, averagePrice, recordLow, recordHigh } = context;
  if (!averagePrice || !recordLow || !recordHigh) return null;

  const min = recordLow.price;
  const max = recordHigh.price;
  const span = Math.max(max - min, 1);
  const pct = (value: number) =>
    Math.min(100, Math.max(0, ((value - min) / span) * 100));

  const typicalLeft = pct(priceLow);
  const typicalRight = pct(priceHigh);
  const avgPct = pct(averagePrice);
  // Keep the average label's own text centered within the card even when
  // the value sits near an edge — the tick + dot stay at the true position.
  const avgLabelPct = Math.min(90, Math.max(10, avgPct));

  return (
    <div className="mt-6 border-t border-line/70 pt-6">
      <div className="flex items-baseline justify-between">
        <p className="label-mono text-steel-dim">Price range</p>
        <p className="text-xs text-steel-dim">
          Shaded band = typical range shown above · marker = average sale
        </p>
      </div>

      <div className="mt-8">
        {/* Average label */}
        <div className="relative h-8">
          <div
            className="absolute top-0 flex -translate-x-1/2 flex-col items-center"
            style={{ left: `${avgLabelPct}%` }}
          >
            <span className="whitespace-nowrap font-mono text-xs text-ink">
              {formatUSD(averagePrice)}
            </span>
            <span className="mt-0.5 text-[10px] uppercase tracking-wide text-steel-dim">
              Average
            </span>
          </div>
        </div>

        {/* Connecting tick from label to track */}
        <div className="relative h-3">
          <div
            aria-hidden
            className="absolute bottom-0 h-full w-px -translate-x-1/2 bg-line-strong"
            style={{ left: `${avgPct}%` }}
          />
        </div>

        {/* Track */}
        <div className="relative h-2 rounded-full bg-surface-recessed">
          <div
            className="absolute inset-y-0 rounded-full bg-ink/80"
            style={{
              left: `${typicalLeft}%`,
              width: `${Math.max(typicalRight - typicalLeft, 2)}%`,
            }}
          />
          {/* Record low / high end-dots */}
          <span
            aria-hidden
            className="absolute top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-surface bg-ink"
            style={{ left: "0%" }}
          />
          <span
            aria-hidden
            className="absolute top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-surface bg-ink"
            style={{ left: "100%" }}
          />
          {/* Average marker dot, sitting on the track */}
          <span
            aria-hidden
            className="absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-surface bg-ink"
            style={{ left: `${avgPct}%` }}
          />
        </div>

        {/* Record low / high end-labels */}
        <div className="relative mt-3 h-10">
          <div className="absolute left-0 top-0 flex flex-col items-start">
            <span className="font-mono text-xs text-ink">
              {formatUSD(recordLow.price)}
            </span>
            <span className="mt-0.5 max-w-[10rem] text-[11px] leading-snug text-steel-dim">
              Record low · {recordLow.note}
            </span>
          </div>
          <div className="absolute right-0 top-0 flex flex-col items-end text-right">
            <span className="font-mono text-xs text-ink">
              {formatUSD(recordHigh.price)}
            </span>
            <span className="mt-0.5 max-w-[10rem] text-[11px] leading-snug text-steel-dim">
              Record high · {recordHigh.note}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
