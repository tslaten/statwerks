import { SEVERITY_LABEL, type Severity } from "@/data/models";

const styles: Record<Severity, string> = {
  critical: "border-critical/40 bg-critical/10 text-critical",
  watch: "border-watch/40 bg-watch/10 text-watch",
  clear: "border-clear/40 bg-clear/10 text-clear",
};

export function SeverityTag({ severity }: { severity: Severity }) {
  return (
    <span
      className={`label-mono inline-flex shrink-0 items-center rounded-sm border px-2 py-1 ${styles[severity]}`}
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
