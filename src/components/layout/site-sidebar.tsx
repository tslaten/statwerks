"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Gauge,
  Home,
  LayoutGrid,
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
  X,
} from "lucide-react";
import type { Platform, Trim } from "@/data/models";

export interface PlatformWithTrims {
  platform: Platform;
  trims: Trim[];
}

/**
 * Persistent dashboard-style left nav (logo, primary links, the full
 * model list, a promo card) — present on every page, not toggled from
 * a header button. Fixed and always visible at `lg` and up, and
 * collapsible there to an icon-only rail (`collapsed`/`onToggleCollapsed`
 * are owned by `AppShell` so the content column's offset can track it).
 * Below `lg` — where collapsing to icons doesn't help on a phone-width
 * screen — it's always full-width and behaves as a slim top bar +
 * off-canvas drawer instead; the collapse toggle only renders at `lg`.
 */
export function SiteSidebar({
  groups,
  collapsed,
  onToggleCollapsed,
}: {
  groups: PlatformWithTrims[];
  collapsed: boolean;
  onToggleCollapsed: () => void;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  // Escape to close, and lock body scroll while the mobile drawer is open.
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

  const navLinkClass = (active: boolean) =>
    `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
      collapsed ? "lg:justify-center" : ""
    } ${
      active
        ? "bg-surface-recessed font-medium text-ink"
        : "text-steel hover:bg-surface-recessed hover:text-ink"
    }`;

  return (
    <>
      {/* Mobile top bar — the sidebar itself is off-canvas below `lg` */}
      <div className="glass sticky top-0 z-30 flex items-center justify-between border-b border-line px-4 py-3 lg:hidden">
        <Link
          href="/"
          className="text-stretch font-display text-lg font-semibold tracking-tight text-ink"
        >
          STAT<span className="text-steel">WERKS</span>
        </Link>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="site-sidebar"
          aria-label="Open navigation"
          className="rounded-lg p-2 text-steel transition-colors hover:bg-surface-recessed hover:text-ink"
        >
          <Menu size={20} strokeWidth={1.75} />
        </button>
      </div>

      {/* Mobile backdrop */}
      <div
        aria-hidden
        onClick={close}
        className={`fixed inset-0 z-40 bg-ink/30 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Sidebar — persistent at lg+ (collapsible there), off-canvas drawer below it */}
      <div
        id="site-sidebar"
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-line bg-surface transition-transform duration-300 ease-out lg:translate-x-0 lg:shadow-none ${
          open ? "translate-x-0 shadow-2xl" : "-translate-x-full"
        } ${collapsed ? "lg:w-20" : "lg:w-72"}`}
      >
        <div
          className={`flex items-center justify-between px-5 py-5 ${collapsed ? "lg:justify-center lg:px-0" : ""}`}
        >
          <Link
            href="/"
            onClick={close}
            title="Statwerks"
            className="flex items-center gap-2.5"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-ink text-canvas">
              <Gauge size={17} strokeWidth={2} aria-hidden />
            </span>
            <span
              className={`text-stretch font-display text-lg font-semibold tracking-tight text-ink ${collapsed ? "lg:hidden" : ""}`}
            >
              STAT<span className="text-steel">WERKS</span>
            </span>
          </Link>
          <button
            type="button"
            onClick={close}
            aria-label="Close navigation"
            className="rounded-lg p-1.5 text-steel transition-colors hover:bg-surface-recessed hover:text-ink lg:hidden"
          >
            <X size={18} strokeWidth={1.75} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-2" aria-label="Primary">
          <Link
            href="/"
            onClick={close}
            title="Home"
            className={navLinkClass(pathname === "/")}
          >
            <Home size={17} strokeWidth={1.75} aria-hidden className="shrink-0" />
            <span className={collapsed ? "lg:hidden" : ""}>Home</span>
          </Link>
          <Link
            href="/models"
            onClick={close}
            title="All models"
            className={navLinkClass(pathname === "/models")}
          >
            <LayoutGrid
              size={17}
              strokeWidth={1.75}
              aria-hidden
              className="shrink-0"
            />
            <span className={collapsed ? "lg:hidden" : ""}>All models</span>
          </Link>

          <div className={collapsed ? "lg:hidden" : ""}>
            <p className="label-mono mb-1.5 mt-6 px-3 text-steel-dim">
              Model dashboards
            </p>
            <ul className="space-y-4">
              {groups.map(({ platform, trims }) => (
                <li key={platform.slug}>
                  <p className="px-3 text-xs font-medium text-steel">
                    {platform.chassisCode} · {platform.shortName}
                  </p>
                  <ul className="mt-1 space-y-0.5">
                    {trims.map((trim) => {
                      const href = `/models/${platform.slug}/${trim.slug}`;
                      const active = pathname === href;
                      return (
                        <li key={trim.slug}>
                          <Link
                            href={href}
                            onClick={close}
                            aria-current={active ? "page" : undefined}
                            className={`flex items-center justify-between rounded-lg py-2 pl-8 pr-3 text-sm transition-colors ${
                              active
                                ? "bg-surface-recessed text-ink"
                                : "text-steel hover:bg-surface-recessed hover:text-ink"
                            }`}
                          >
                            <span>{trim.name}</span>
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
          </div>
        </nav>

        <div className={`p-4 ${collapsed ? "lg:hidden" : ""}`}>
          <div className="rounded-2xl bg-surface-recessed p-5">
            <p className="text-stretch font-display text-sm font-semibold text-ink">
              Free, no login
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-steel">
              Every model dashboard is free to read — known issues, pricing
              context, and a buying checklist, no account required.
            </p>
            <Link
              href="/models"
              onClick={close}
              className="label-mono mt-4 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-canvas transition-opacity hover:opacity-85"
            >
              Browse dashboards →
            </Link>
          </div>
        </div>

        <button
          type="button"
          onClick={onToggleCollapsed}
          aria-pressed={collapsed}
          aria-label={collapsed ? "Expand navigation" : "Collapse navigation"}
          title={collapsed ? "Expand navigation" : "Collapse navigation"}
          className={`hidden items-center gap-2.5 border-t border-line px-5 py-4 text-steel transition-colors hover:bg-surface-recessed hover:text-ink lg:flex ${collapsed ? "lg:justify-center" : ""}`}
        >
          {collapsed ? (
            <PanelLeftOpen size={17} strokeWidth={1.75} aria-hidden />
          ) : (
            <>
              <PanelLeftClose size={17} strokeWidth={1.75} aria-hidden />
              <span className="text-sm">Collapse</span>
            </>
          )}
        </button>
      </div>
    </>
  );
}
