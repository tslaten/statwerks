import type { OptionTag, PopularOption } from "@/data/models";

/**
 * Weight, not hue, carries the distinction here — filled > outlined > ghost
 * — so this reads as its own "desirability" language rather than
 * borrowing the critical/watch/clear severity colors, which mean
 * something different (risk, not popularity).
 */
const TAG_STYLE: Record<OptionTag, string> = {
  popular: "bg-ink text-canvas",
  rare: "border border-line-strong text-steel",
  standard: "bg-surface-recessed text-steel-dim",
};

const TAG_LABEL: Record<OptionTag, string> = {
  popular: "Popular",
  rare: "Rare",
  standard: "Standard",
};

export function PopularOptionsGrid({
  options,
  note,
}: {
  options: PopularOption[];
  note?: string;
}) {
  if (options.length === 0) return null;

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {options.map((option) => (
          <div
            key={option.id}
            className="shadow-card rounded-2xl bg-surface p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-base font-medium text-ink">
                {option.name}
              </h3>
              <span
                className={`label-mono shrink-0 rounded-full px-2.5 py-1 ${TAG_STYLE[option.tag]}`}
              >
                {TAG_LABEL[option.tag]}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-steel">
              {option.note}
            </p>
          </div>
        ))}
      </div>
      {note ? (
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-steel-dim">
          {note}
        </p>
      ) : null}
    </div>
  );
}
