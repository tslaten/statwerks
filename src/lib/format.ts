const usdFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function formatUSD(value: number): string {
  return usdFormatter.format(value);
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
});

export function formatMonthYear(isoDate: string): string {
  return dateFormatter.format(new Date(isoDate));
}

/**
 * Trims format `overview.power` as e.g. "385 hp @ 6,500 rpm" for full
 * spec-readout contexts (cards, the trim page itself). Tighter contexts —
 * the sidebar's trim rows, the global search dropdown — show just enough
 * to distinguish trims at a glance, so this strips the "@ N,NNN rpm"
 * suffix when present. Strings that don't have one (e.g. "296–320 hp")
 * pass through unchanged.
 */
export function powerWithoutRpm(power: string): string {
  return power.replace(/\s*@\s*[\d,]+\s*rpm.*/i, "").trim();
}
