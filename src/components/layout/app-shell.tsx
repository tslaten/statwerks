"use client";

import { useState, type ReactNode } from "react";
import { SiteSidebar, type PlatformWithTrims } from "./site-sidebar";

/**
 * Owns the sidebar's collapsed/expanded state so both the sidebar
 * (which renders the toggle) and the content column (which needs to
 * shrink/grow its left offset to match) stay in sync. Defaults to
 * expanded; the App Router keeps this layout mounted across
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
  const toggleCollapsed = () => setCollapsed((prev) => !prev);

  return (
    <>
      <SiteSidebar
        groups={groups}
        collapsed={collapsed}
        onToggleCollapsed={toggleCollapsed}
      />
      <div
        className={`flex min-h-full flex-col ${collapsed ? "lg:pl-20" : "lg:pl-72"}`}
      >
        {children}
      </div>
    </>
  );
}
