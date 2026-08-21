import { mergedKnownIssues, type Platform, type Trim } from "@/data/models";
import { countBySeverity, SpecPlateCard } from "./spec-plate-card";

/**
 * Card for one trim. Used on a platform hub page (where the
 * surrounding page already establishes which platform you're looking
 * at, so the bare trim name reads fine) and on cross-platform listings
 * like the home page's "Popular trims" section or /trims, where
 * `includeChassisCode` should be turned on — "Cayman S" alone is
 * ambiguous between the 981 and 718 platforms, but "981 Cayman S"
 * isn't.
 */
export function TrimCard({
  platform,
  trim,
  includeChassisCode = false,
}: {
  platform: Platform;
  trim: Trim;
  includeChassisCode?: boolean;
}) {
  const issues = mergedKnownIssues(platform, trim);
  const title = includeChassisCode
    ? `${platform.chassisCode} ${trim.name}`
    : trim.name;

  return (
    <SpecPlateCard
      href={`/models/${platform.slug}/${trim.slug}`}
      meta={trim.overview.power}
      title={title}
      teaser={trim.teaser}
      severityCounts={countBySeverity(issues)}
      draft={
        trim.contentStatus === "placeholder" ||
        platform.contentStatus === "placeholder"
      }
      image={trim.image}
    />
  );
}
