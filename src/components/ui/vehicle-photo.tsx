import Image from "next/image";
import { Car } from "lucide-react";
import type { VehicleImage } from "@/data/models";

/**
 * A background-removed vehicle product shot, or a tasteful placeholder
 * when one hasn't been sourced yet (see `Trim.image` in types.ts). Renders
 * inside a `relative` box the caller sizes via `className` (aspect ratio +
 * width) — this component only fills that box.
 */
export function VehiclePhoto({
  image,
  fallbackLabel,
  className = "",
  sizes = "(min-width: 1024px) 24rem, 90vw",
  iconSize = 28,
  bordered = true,
  objectPosition = "center",
}: {
  image?: VehicleImage;
  /** Name shown in the placeholder state, e.g. "981 Cayman S" */
  fallbackLabel: string;
  className?: string;
  sizes?: string;
  iconSize?: number;
  /** Placeholder only: dashed border + rounded corners. Turn off when a
      parent already clips/rounds the box (e.g. a card with overflow-hidden). */
  bordered?: boolean;
  /** Where the car sits within its box when the box's aspect ratio doesn't
      match the image's — e.g. "bottom" to anchor it just above an overlay. */
  objectPosition?: string;
}) {
  if (image) {
    return (
      <div className={`relative overflow-hidden bg-surface-recessed ${className}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          style={{ objectFit: image.fit ?? "contain", objectPosition }}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 bg-surface-recessed ${bordered ? "rounded-xl border border-dashed border-line-strong" : ""} ${className}`}
    >
      <Car
        size={iconSize}
        strokeWidth={1.25}
        className="text-steel-dim"
        aria-hidden
      />
      <span className="label-mono text-steel-dim">Image pending</span>
      <span className="sr-only">{fallbackLabel} — image not yet added</span>
    </div>
  );
}
