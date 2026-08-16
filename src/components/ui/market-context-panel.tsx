import type { MarketContext } from "@/data/models";
import { formatMonthYear, formatUSD } from "@/lib/format";

export function MarketContextPanel({ context }: { context: MarketContext }) {
  return (
    <div className="shadow-card grid gap-6 rounded-2xl bg-surface p-6 md:grid-cols-[15rem_1fr] md:gap-10 md:p-7">
      <div className="rounded-xl bg-surface-recessed px-6 py-6">
        <div className="label-mono text-steel-dim">Typical asking price</div>
        <div className="mt-2 font-mono text-2xl leading-tight text-ink md:text-[1.75rem]">
          {formatUSD(context.priceLow)}
          <span className="text-steel-dim"> – </span>
          {formatUSD(context.priceHigh)}
        </div>
        <div className="mt-2 text-sm text-steel">{context.rangeNote}</div>
      </div>
      <div>
        <p className="max-w-2xl text-[0.9375rem] leading-relaxed text-ink/90">
          {context.trendSummary}
        </p>
        <p className="label-mono mt-4 text-steel-dim">
          As of {formatMonthYear(context.asOf)} — written market commentary,
          not live pricing data
        </p>
      </div>
    </div>
  );
}
