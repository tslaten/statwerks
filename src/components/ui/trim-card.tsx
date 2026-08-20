import { mergedKnownIssues, type Platform, type Trim } from "@/data/models";
import { countBySeverity, SpecPlateCard } from "./spec-plate-card";

/** Card for a platform hub page — one per trim. */
export function TrimCard({
  platform,
  trim,
}: {
  platform: Platform;
  trim: Trim;
}) {
  const issues = mergedKnownIssues(platform, trim);

  return (
    <SpecPlateCard
      href={`/models/${platform.slug}/${trim.slug}`}
      meta={trim.overview.power}
      title={trim.name}
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
