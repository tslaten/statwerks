import type { LucideIcon } from "lucide-react";

export interface DashboardNavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

/** Sticky left-hand section nav for a dashboard page — jump links, not routing. */
export function DashboardNav({ items }: { items: DashboardNavItem[] }) {
  return (
    <nav className="lg:sticky lg:top-24" aria-label="On this page">
      <p className="label-mono mb-3 px-3 text-steel-dim">On this page</p>
      <ul className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.href}>
              <a
                href={item.href}
                className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-steel transition-colors hover:bg-surface hover:text-ink"
              >
                <Icon size={16} strokeWidth={1.75} aria-hidden />
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
