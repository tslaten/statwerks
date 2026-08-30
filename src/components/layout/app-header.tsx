"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import { SidebarSearch } from "./sidebar-search";

/**
 * Persistent top bar, above the content column, on every page at every
 * screen width — search lives here now rather than nested inside the
 * (collapsible, off-canvas-on-mobile) sidebar, so it's reachable
 * without expanding anything first. Cmd/Ctrl+K focuses it from
 * anywhere; unlike the sidebar's now-removed version of that shortcut,
 * this one doesn't need to coordinate with sidebar collapse state at
 * all — the header renders identically regardless of whether the
 * sidebar is expanded, collapsed to its icon rail, or (on mobile)
 * closed entirely.
 *
 * Below `lg` the sidebar is off-canvas, so this bar also carries the
 * logo and the button that opens it — the same job the sidebar's own
 * mobile top bar used to do before search moved here.
 */
export function AppHeader({ onOpenMobile }: { onOpenMobile: () => void }) {
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="glass sticky top-0 z-30 border-b border-line">
      <div className="flex items-center gap-3 px-4 py-3 lg:px-8 lg:py-4">
        <Link
          href="/"
          className="text-stretch shrink-0 font-display text-lg font-semibold tracking-tight text-ink lg:hidden"
        >
          STAT<span className="text-steel">WERKS</span>
        </Link>

        <div className="min-w-0 flex-1 lg:max-w-sm">
          <SidebarSearch ref={searchInputRef} />
        </div>

        <button
          type="button"
          onClick={onOpenMobile}
          aria-label="Open navigation"
          className="shrink-0 rounded-lg p-2 text-steel transition-colors hover:bg-surface-recessed hover:text-ink lg:hidden"
        >
          <Menu size={20} strokeWidth={1.75} />
        </button>
      </div>
    </header>
  );
}
