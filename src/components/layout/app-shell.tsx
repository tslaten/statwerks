"use client";

import { useState, type ReactNode } from "react";
import { AppHeader } from "./app-header";
import { SiteSidebar, type PlatformWithTrims } from "./site-sidebar";

/**
 * Owns the sidebar's collapsed/expanded state (desktop icon rail) and
 * the mobile drawer's open/closed state, so the sidebar, the header,
 * and the content column's offset all stay in sync regardless of
 * which one triggers a change — e.g. the header's hamburger button
 * opens the same drawer the sidebar itself renders. Defaults to
 * expanded/closed; the App Router keeps this layout mounted across
 * client-side navigations, so the choice holds while browsing and
 * only resets on a full page reload — no localStorage read needed to
 * dodge a hydration mismatch.
 */
export function AppShell({
  groups,
  children,
}: {
  groups: PlatformWithTrims[];
  children: ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleCollapsed = () => setCollapsed((prev) => !prev);

  return (
    <>
      <SiteSidebar
        groups={groups}
        collapsed={collapsed}
        onToggleCollapsed={toggleCollapsed}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />
      <div
        className={`flex min-h-full flex-col ${collapsed ? "lg:pl-20" : "lg:pl-72"}`}
      >
        <AppHeader onOpenMobile={() => setMobileOpen(true)} />
        {children}
      </div>
    </>
  );
}
