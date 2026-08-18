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

/** One card, a row per option — name + note left, desirability tag right. */
export function PopularOptionsList({
  options,
  note,
}: {
  options: PopularOption[];
  note?: string;
}) {
  if (options.length === 0) return null;

  return (
    <div className="shadow-card rounded-2xl bg-surface p-6 md:p-7">
      <div>
        {options.map((option, i) => (
          <div
            key={option.id}
            className={`flex items-start justify-between gap-5 py-4 first:pt-0 last:pb-0 ${
              i < options.length - 1 ? "border-b border-line" : ""
            }`}
          >
            <div>
              <p className="text-[0.9375rem] font-medium text-ink">
                {option.name}
              </p>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-steel">
                {option.note}
              </p>
            </div>
            <span
              className={`label-mono mt-0.5 shrink-0 rounded-full px-2.5 py-1 ${TAG_STYLE[option.tag]}`}
            >
              {TAG_LABEL[option.tag]}
            </span>
          </div>
        ))}
      </div>
      {note ? (
        <p className="mt-2 border-t border-line pt-4 text-xs leading-relaxed text-steel-dim">
          {note}
        </p>
      ) : null}
    </div>
  );
}
