import {
  Calendar,
  Car,
  Cog,
  Gauge,
  Hash,
  Settings2,
  Timer,
  Weight,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * Icon per QuickFact label, for the KPI-tile spec readout. Keyed by the
 * exact label string used in data files — add an entry here when a new
 * label shows up, falls back to a generic glyph otherwise.
 */
const ICONS_BY_LABEL: Record<string, LucideIcon> = {
  Production: Calendar,
  "Chassis code": Hash,
  Layout: Car,
  "Engine code": Cog,
  Power: Zap,
  Torque: Gauge,
  "0–60 mph": Timer,
  Transmission: Settings2,
  "Curb weight": Weight,
};

export function iconForFact(label: string): LucideIcon {
  return ICONS_BY_LABEL[label] ?? Hash;
}
