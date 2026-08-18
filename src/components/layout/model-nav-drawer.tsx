"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PanelLeft, X } from "lucide-react";
import type { Platform, Trim } from "@/data/models";

export interface PlatformWithTrims {
  platform: Platform;
  trims: Trim[];
}

/**
 * Dashboard-style quick-switcher: a trigger button in the header opens a
 * slide-in drawer (fixed, off-canvas from the left) listing every
 * platform/trim so a reader can jump between model dashboards from
 * anywhere on the site, not just the /models index. Purely client-side
 * navigation chrome — the drawer itself carries no page content.
 */
export function ModelNavDrawer({ groups }: { groups: PlatformWithTrims[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  // Escape to close, and lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="model-nav-drawer"
        className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-steel transition-colors hover:bg-surface-recessed hover:text-ink"
      >
        <PanelLeft size={18} strokeWidth={1.75} aria-hidden />
        <span className="label-mono">Models</span>
      </button>

      {/* Backdrop */}
      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-ink/30 backdrop-blur-[2px] transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer panel */}
      <div
        id="model-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Model dashboards"
        className={`fixed inset-y-0 left-0 z-50 flex w-full max-w-xs flex-col border-r border-line bg-surface shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <span className="text-stretch font-display text-base font-semibold text-ink">
            Model dashboards
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="rounded-lg p-1.5 text-steel transition-colors hover:bg-surface-recessed hover:text-ink"
          >
            <X size={18} strokeWidth={1.75} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Models">
          <Link
            href="/models"
            onClick={close}
            className="label-mono mb-3 flex items-center justify-between rounded-lg px-3 py-2.5 text-steel transition-colors hover:bg-surface-recessed hover:text-ink"
          >
            All models
            <span aria-hidden>→</span>
          </Link>

          <ul className="space-y-5">
            {groups.map(({ platform, trims }) => (
              <li key={platform.slug}>
                <p className="label-mono mb-1.5 px-3 text-steel-dim">
                  {platform.chassisCode} · {platform.shortName}
                </p>
                <ul className="space-y-0.5">
                  {trims.map((trim) => {
                    const href = `/models/${platform.slug}/${trim.slug}`;
                    const active = pathname === href;
                    return (
                      <li key={trim.slug}>
                        <Link
                          href={href}
                          onClick={close}
                          aria-current={active ? "page" : undefined}
                          className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors ${
                            active
                              ? "bg-surface-recessed text-ink"
                              : "text-steel hover:bg-surface-recessed hover:text-ink"
                          }`}
                        >
                          <span className="font-medium">{trim.name}</span>
                          <span className="label-mono text-steel-dim">
                            {trim.overview.power}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
