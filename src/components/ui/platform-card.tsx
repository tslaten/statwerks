import { mergedKnownIssues, type Platform, type Trim } from "@/data/models";
import { countBySeverity, SpecPlateCard } from "./spec-plate-card";

/**
 * Card for the /models index. Links straight to the dashboard when a
 * platform only has one trim (today's reality); links to the platform
 * hub to pick a trim once a platform has more than one.
 */
export function PlatformCard({
  platform,
  trims,
}: {
  platform: Platform;
  trims: Trim[];
}) {
  const onlyTrim = trims.length === 1 ? trims[0] : null;

  const href = onlyTrim
    ? `/models/${platform.slug}/${onlyTrim.slug}`
    : `/models/${platform.slug}`;
  const title = onlyTrim
    ? `${platform.chassisCode} ${onlyTrim.name}`
    : platform.name;
  const teaser = onlyTrim ? onlyTrim.teaser : platform.teaser;
  const issues = onlyTrim
    ? mergedKnownIssues(platform, onlyTrim)
    : platform.sharedKnownIssues;
  const draft =
    platform.contentStatus === "placeholder" ||
    onlyTrim?.contentStatus === "placeholder";

  return (
    <SpecPlateCard
      href={href}
      kicker={platform.chassisCode}
      meta={platform.overview.years}
      title={title}
      teaser={teaser}
      severityCounts={countBySeverity(issues)}
      draft={draft}
      ctaLabel={onlyTrim ? "View dashboard →" : "View trims →"}
    />
  );
}
