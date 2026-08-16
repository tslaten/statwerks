import { SEVERITY_LABEL, type Severity } from "@/data/models";

const styles: Record<Severity, string> = {
  critical: "border-critical/25 bg-critical/[0.07] text-critical",
  watch: "border-watch/25 bg-watch/[0.07] text-watch",
  clear: "border-clear/25 bg-clear/[0.07] text-clear",
};

export function SeverityTag({ severity }: { severity: Severity }) {
  return (
    <span
      className={`label-mono inline-flex shrink-0 items-center rounded-full border px-2.5 py-1 ${styles[severity]}`}
    >
      {SEVERITY_LABEL[severity]}
    </span>
  );
}

const dotStyles: Record<Severity, string> = {
  critical: "bg-critical",
  watch: "bg-watch",
  clear: "bg-clear",
};

/** Compact severity indicator — used in tight spaces like index cards. */
export function SeverityDot({ severity }: { severity: Severity }) {
  return (
    <span
      aria-hidden
      className={`inline-block size-1.5 rounded-full ${dotStyles[severity]}`}
    />
  );
}
