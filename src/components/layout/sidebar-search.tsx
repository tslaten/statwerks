"use client";

import { forwardRef, useMemo, useState, type KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { fuzzySearch } from "@/lib/fuzzy";
import { buildSearchIndex, type SearchResult } from "@/data/models/search-index";

const RESULT_LIMIT = 8;

/** Renders `label` with matched characters (from a FuzzyMatch's `indices`) emphasized. */
function HighlightedLabel({ label, indices }: { label: string; indices: number[] }) {
  const matched = new Set(indices);
  return (
    <>
      {label.split("").map((char, i) => (
        <span
          key={i}
          className={matched.has(i) ? "text-ink font-semibold" : undefined}
        >
          {char}
        </span>
      ))}
    </>
  );
}

/**
 * Fuzzy-search box for the sidebar — filters platforms, trims, and
 * not-yet-covered generations by name as you type, with keyboard nav
 * (arrows to move, Enter to go, Escape to dismiss) and an autosuggest
 * dropdown. The dataset is small enough (a few dozen records) to
 * rebuild and re-score on every keystroke with no debouncing needed.
 *
 * Forwards its ref to the `<input>` so a parent (the sidebar, for its
 * Cmd/Ctrl+K shortcut) can focus it programmatically — including after
 * expanding the sidebar out of its collapsed icon-rail state, where
 * this component doesn't render at all.
 */
export const SidebarSearch = forwardRef<
  HTMLInputElement,
  { onNavigate?: () => void }
>(function SidebarSearch({ onNavigate }, ref) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const index = useMemo(() => buildSearchIndex(), []);

  const results = useMemo(
    () => fuzzySearch(query, index, (r) => r.label).slice(0, RESULT_LIMIT),
    [query, index]
  );

  const showDropdown = open && query.trim().length > 0;

  const go = (result: SearchResult) => {
    if (!("href" in result)) return; // "coming soon" rows aren't navigable
    router.push(result.href);
    setQuery("");
    setOpen(false);
    onNavigate?.();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!showDropdown || results.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const active = results[activeIndex];
      if (active) go(active.item);
    } else if (e.key === "Escape") {
      setOpen(false);
      e.currentTarget.blur();
    }
  };

  return (
    <div className="relative px-3">
      <div className="relative">
        <Search
          size={15}
          strokeWidth={1.75}
          aria-hidden
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-steel-dim"
        />
        <input
          ref={ref}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActiveIndex(0);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => {
            // Let a result's onClick register before the dropdown unmounts.
            setTimeout(() => setOpen(false), 120);
          }}
          onKeyDown={onKeyDown}
          placeholder="Search models & trims…"
          aria-label="Search models and trims"
          aria-expanded={showDropdown}
          aria-controls="sidebar-search-results"
          aria-autocomplete="list"
          role="combobox"
          className="w-full rounded-xl border border-line bg-surface-recessed py-2 pl-9 pr-3 text-sm text-ink placeholder:text-steel-dim focus:border-line-strong focus:outline-none"
        />
      </div>

      {showDropdown ? (
        <div
          id="sidebar-search-results"
          role="listbox"
          className="shadow-card absolute inset-x-3 top-full z-10 mt-1.5 max-h-96 overflow-y-auto rounded-xl bg-surface p-1.5"
        >
          {results.length === 0 ? (
            <p className="px-3 py-3 text-sm text-steel-dim">
              No matches for &ldquo;{query}&rdquo;
            </p>
          ) : (
            results.map(({ item, match }, i) => {
              const disabled = !("href" in item);
              const active = i === activeIndex;
              return (
                <button
                  key={`${item.kind}-${item.label}`}
                  role="option"
                  aria-selected={active}
                  type="button"
                  disabled={disabled}
                  onMouseDown={(e) => e.preventDefault()} // keep input focused through the click
                  onClick={() => go(item)}
                  onMouseEnter={() => setActiveIndex(i)}
                  className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                    disabled
                      ? "cursor-not-allowed opacity-60"
                      : active
                        ? "bg-surface-recessed text-ink"
                        : "text-steel hover:bg-surface-recessed hover:text-ink"
                  }`}
                >
                  <span className="truncate">
                    <HighlightedLabel label={item.label} indices={match.indices} />
                  </span>
                  <span className="label-mono shrink-0 text-steel-dim">
                    {disabled ? "Coming soon" : item.subtitle}
                  </span>
                </button>
              );
            })
          )}
        </div>
      ) : null}
    </div>
  );
});
