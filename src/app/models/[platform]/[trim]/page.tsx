import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { ChecklistGroup } from "@/components/ui/checklist-group";
import { DraftBanner } from "@/components/ui/draft-banner";
import { KnownIssueRow } from "@/components/ui/known-issue-row";
import { MarketContextPanel } from "@/components/ui/market-context-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { countBySeverity } from "@/components/ui/spec-plate-card";
import { SpecStrip } from "@/components/ui/spec-strip";
import { SeverityMixBar } from "@/components/ui/severity-mix-bar";
import {
  getAllPlatformTrimParams,
  getPlatformBySlug,
  getTrim,
  mergedChecklist,
  mergedKnownIssues,
  mergedQuickFacts,
} from "@/data/models";

export function generateStaticParams() {
  return getAllPlatformTrimParams();
}

export async function generateMetadata({
  params,
}: PageProps<"/models/[platform]/[trim]">): Promise<Metadata> {
  const { platform: platformSlug, trim: trimSlug } = await params;
  const platform = getPlatformBySlug(platformSlug);
  const trim = platform && getTrim(platformSlug, trimSlug);
  if (!platform || !trim) return {};

  const description = trim.overview.summary ?? platform.overview.summary;

  return {
    title: `${platform.chassisCode} ${trim.name}`,
    description,
    openGraph: {
      title: `${platform.chassisCode} ${trim.name} buying dashboard`,
      description,
    },
  };
}

export default async function TrimPage({
  params,
}: PageProps<"/models/[platform]/[trim]">) {
  const { platform: platformSlug, trim: trimSlug } = await params;
  const platform = getPlatformBySlug(platformSlug);
  const trim = platform && getTrim(platformSlug, trimSlug);
  if (!platform || !trim) notFound();

  const issues = mergedKnownIssues(platform, trim);
  const quickFacts = mergedQuickFacts(platform, trim);
  const checklist = mergedChecklist(platform, trim);
  const severityCounts = countBySeverity(issues);
  const criticalCount = issues.filter((i) => i.severity === "critical").length;
  const isDraft =
    platform.contentStatus === "placeholder" ||
    trim.contentStatus === "placeholder";

  return (
    <>
      {isDraft ? <DraftBanner /> : null}

      <header>
        <Container wide className="pb-10 pt-12 md:pt-16">
          <nav className="label-mono flex flex-wrap items-center gap-2 text-steel-dim">
            <Link href="/models" className="transition-colors hover:text-ink">
              Models
            </Link>
            <span aria-hidden>/</span>
            <Link
              href={`/models/${platform.slug}`}
              className="transition-colors hover:text-ink"
            >
              {platform.shortName}
            </Link>
            <span aria-hidden>/</span>
            <span className="text-steel">{trim.shortName}</span>
          </nav>

          <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <span className="label-mono text-steel-dim">
              {platform.chassisCode}
            </span>
            <h1 className="text-stretch font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
              {platform.chassisCode} {trim.name}
            </h1>
          </div>
          <p className="mt-2 font-mono text-sm text-steel">
            {platform.overview.years} · {platform.overview.body}
          </p>

          <p className="mt-6 max-w-2xl text-[0.9375rem] leading-relaxed text-ink/90">
            {trim.overview.summary ?? platform.overview.summary}
          </p>
        </Container>
      </header>

      <Container wide className="pb-14 pt-4 md:pb-20">
        <div className="lg:flex lg:items-start lg:gap-10">
          {/* Sidebar — "at a glance" specs + severity mix, sticky on desktop.
              Rendered first so mobile sees it before the long issue list. */}
          <aside className="mb-10 lg:order-2 lg:mb-0 lg:sticky lg:top-24 lg:w-72 lg:shrink-0">
            <p className="label-mono text-steel-dim">At a glance</p>
            <div className="mt-4">
              <SpecStrip facts={quickFacts} />
            </div>
            <div className="shadow-card mt-3 rounded-xl bg-surface px-4 py-4">
              <p className="label-mono mb-3 text-steel-dim">
                Known-issue mix
              </p>
              <SeverityMixBar counts={severityCounts} />
            </div>
          </aside>

          <div className="lg:order-1 lg:min-w-0 lg:flex-1">
            <section aria-labelledby="known-issues">
              <SectionHeading
                index="01"
                title="Known issues"
                aside={`${issues.length} flagged · ${criticalCount} critical`}
              />
              <div className="max-w-3xl space-y-4">
                {issues.map((issue) => (
                  <KnownIssueRow key={issue.id} issue={issue} />
                ))}
              </div>
            </section>

            <section aria-labelledby="market-context" className="mt-16 md:mt-20">
              <SectionHeading index="02" title="Market pricing context" />
              <div className="max-w-3xl">
                <MarketContextPanel context={trim.marketContext} />
              </div>
            </section>

            <section aria-labelledby="checklist" className="mt-16 md:mt-20">
              <SectionHeading index="03" title="Buying checklist" />
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                <ChecklistGroup
                  title="Documents to request"
                  items={checklist.documentsToRequest}
                />
                <ChecklistGroup
                  title="Questions for the seller"
                  items={checklist.questionsForSeller}
                />
                <ChecklistGroup title="PPI advice" items={checklist.ppiAdvice} />
              </div>
            </section>
          </div>
        </div>
      </Container>
    </>
  );
}
