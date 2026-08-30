import { getAllPlatforms, getAllTrims, getPlatformBySlug } from "./index";
import { roadmap } from "./roadmap";
import { powerWithoutRpm } from "@/lib/format";

export type SearchResult =
  | { kind: "platform"; label: string; subtitle: string; href: string }
  | { kind: "trim"; label: string; subtitle: string; href: string }
  | { kind: "coming-soon"; label: string; subtitle: string };

/**
 * Flattens every navigable platform + trim, plus every not-yet-covered
 * roadmap generation, into one list of search records. The "coming
 * soon" entries have no `href` — they're included so searching for a
 * generation the site doesn't have yet (e.g. "993") surfaces an honest
 * "not covered yet" result instead of nothing, matching the sidebar's
 * disabled-row treatment for the same generations.
 */
export function buildSearchIndex(): SearchResult[] {
  const results: SearchResult[] = [];

  for (const platform of getAllPlatforms()) {
    results.push({
      kind: "platform",
      label: platform.name,
      subtitle: platform.overview.years,
      href: `/models/${platform.slug}`,
    });
  }

  for (const trim of getAllTrims()) {
    const platform = getPlatformBySlug(trim.platformSlug);
    if (!platform) continue;
    results.push({
      kind: "trim",
      label: `${platform.chassisCode} ${trim.name}`,
      // Stripped of "@ N,NNN rpm" — the autosuggest row is a tight,
      // single-line space, same reasoning as the sidebar's trim rows.
      subtitle: powerWithoutRpm(trim.overview.power),
      href: `/models/${platform.slug}/${trim.slug}`,
    });
  }

  for (const gen of roadmap) {
    if (gen.platformSlugs?.length) continue; // already covered as a platform above
    results.push({
      kind: "coming-soon",
      label: gen.label,
      subtitle: gen.years,
    });
  }

  return results;
}
