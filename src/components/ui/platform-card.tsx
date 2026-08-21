import { type Platform, type Trim } from "@/data/models";
import { countBySeverity, SpecPlateCard } from "./spec-plate-card";

/**
 * Card for a platform (generation) — used on the home page and the
 * /models index. Always links to the platform hub page
 * (`/models/[platform]`), even when that platform currently has only
 * one trim. Earlier this shortcut straight to that trim's dashboard
 * instead, which meant visually-identical cards navigated to two
 * different kinds of page depending on trim count — a mixed mental
 * model for anyone clicking around the grid. Consistency wins: every
 * platform card behaves the same way regardless of how many trims it
 * has, and the hub page itself already handles the single-trim case
 * fine (its trim picker just shows one card).
 *
 * Still shows a representative photo when available (the platform's
 * first trim's image) so single-trim platforms don't lose the real
 * vehicle photos just because the card no longer deep-links to that
 * trim specifically.
 */
export function PlatformCard({
  platform,
  trims,
}: {
  platform: Platform;
  trims: Trim[];
}) {
  const representativeTrim = trims[0];

  return (
    <SpecPlateCard
      href={`/models/${platform.slug}`}
      meta={platform.overview.years}
      title={platform.name}
      teaser={platform.teaser}
      severityCounts={countBySeverity(platform.sharedKnownIssues)}
      draft={platform.contentStatus === "placeholder"}
      ctaLabel="View model →"
      image={representativeTrim?.image}
    />
  );
}
