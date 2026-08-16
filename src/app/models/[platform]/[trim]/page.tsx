import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { ChecklistGroup } from "@/components/ui/checklist-group";
import { DraftBanner } from "@/components/ui/draft-banner";
import { KnownIssueRow } from "@/components/ui/known-issue-row";
import { MarketContextPanel } from "@/components/ui/market-context-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpecStrip } from "@/components/ui/spec-strip";
import {
  getAllPlatformTrimParams,
  getPlatformBySlug,
  getTrim,
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
  const criticalCount = issues.filter((i) => i.severity === "critical").length;
  const isDraft =
    platform.contentStatus === "placeholder" ||
    trim.contentStatus === "placeholder";

  return (
    <>
      {isDraft ? <DraftBanner /> : null}

      <header>
        <Container className="pb-10 pt-12 md:pt-16">
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

        <Container className="pb-10">
          <SpecStrip facts={quickFacts} />
        </Container>
      </header>

      <Container className="pb-14 pt-4 md:pb-20">
        <section aria-labelledby="known-issues">
          <SectionHeading
            index="01"
            title="Known issues"
            aside={`${issues.length} flagged · ${criticalCount} critical`}
          />
          <div className="space-y-4">
            {issues.map((issue) => (
              <KnownIssueRow key={issue.id} issue={issue} />
            ))}
          </div>
        </section>

        <section aria-labelledby="market-context" className="mt-16 md:mt-20">
          <SectionHeading index="02" title="Market pricing context" />
          <MarketContextPanel context={trim.marketContext} />
        </section>

        <section aria-labelledby="checklist" className="mt-16 md:mt-20">
          <SectionHeading index="03" title="Buying checklist" />
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            <ChecklistGroup
              title="Documents to request"
              items={platform.checklist.documentsToRequest}
            />
            <ChecklistGroup
              title="Questions for the seller"
              items={platform.checklist.questionsForSeller}
            />
            <ChecklistGroup
              title="PPI advice"
              items={platform.checklist.ppiAdvice}
            />
          </div>
        </section>
      </Container>
    </>
  );
}
