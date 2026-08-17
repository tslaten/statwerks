import { cayman981 } from "./platforms/981-cayman";
import { carrera9972 } from "./platforms/997-2-carrera";
import { cayman981S } from "./trims/981-cayman-s";
import { carrera9972S } from "./trims/997-2-carrera-s";
import {
  SEVERITY_ORDER,
  type BuyingChecklist,
  type KnownIssue,
  type Platform,
  type QuickFact,
  type Trim,
} from "./types";

export * from "./types";

/** Every platform (generation) the site knows about. */
export const platforms: Platform[] = [cayman981, carrera9972];

/**
 * Every trim the site knows about, each pointing back at a platform via
 * `platformSlug`. Add a new trim here — nothing above needs to change.
 */
export const trims: Trim[] = [cayman981S, carrera9972S];

export function getAllPlatforms(): Platform[] {
  return platforms;
}

export function getPlatformBySlug(slug: string): Platform | undefined {
  return platforms.find((platform) => platform.slug === slug);
}

export function getTrimsForPlatform(platformSlug: string): Trim[] {
  return trims.filter((trim) => trim.platformSlug === platformSlug);
}

export function getTrim(platformSlug: string, trimSlug: string): Trim | undefined {
  return trims.find(
    (trim) => trim.platformSlug === platformSlug && trim.slug === trimSlug
  );
}

/** Every valid (platform, trim) slug pair — feeds generateStaticParams. */
export function getAllPlatformTrimParams(): { platform: string; trim: string }[] {
  return trims.map((trim) => ({ platform: trim.platformSlug, trim: trim.slug }));
}

/** A trim's known issues plus everything shared by its platform, severity-sorted. */
export function mergedKnownIssues(platform: Platform, trim: Trim): KnownIssue[] {
  return [...platform.sharedKnownIssues, ...trim.knownIssues].sort(
    (a, b) => SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity]
  );
}

/** A trim's spec readout: platform-level facts followed by trim-level facts. */
export function mergedQuickFacts(platform: Platform, trim: Trim): QuickFact[] {
  return [...platform.overview.quickFacts, ...trim.overview.quickFacts];
}

/** The platform's buying checklist plus any trim-specific additions. */
export function mergedChecklist(platform: Platform, trim: Trim): BuyingChecklist {
  const additions = trim.checklistAdditions ?? {};
  return {
    documentsToRequest: [
      ...platform.checklist.documentsToRequest,
      ...(additions.documentsToRequest ?? []),
    ],
    questionsForSeller: [
      ...platform.checklist.questionsForSeller,
      ...(additions.questionsForSeller ?? []),
    ],
    ppiAdvice: [...platform.checklist.ppiAdvice, ...(additions.ppiAdvice ?? [])],
  };
}
