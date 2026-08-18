import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, ClipboardList, DollarSign, LayoutGrid, Tag } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ChecklistGroup } from "@/components/ui/checklist-group";
import { DraftBanner } from "@/components/ui/draft-banner";
import { KnownIssueRow } from "@/components/ui/known-issue-row";
import { MarketContextPanel } from "@/components/ui/market-context-panel";
import { PopularOptionsList } from "@/components/ui/popular-options-list";
import { SectionHeading } from "@/components/ui/section-heading";
import { countBySeverity } from "@/components/ui/spec-plate-card";
import { SpecStrip } from "@/components/ui/spec-strip";
import { SeverityMixBar } from "@/components/ui/severity-mix-bar";
import { VehiclePhoto } from "@/components/ui/vehicle-photo";
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

          <div className="mt-6 lg:grid lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-14">
            <div className="lg:max-w-xl">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <span className="label-mono text-steel-dim">
                  {platform.chassisCode}
                </span>
                <h1 className="text-stretch font-display text-4xl font-semibold leading-tight text-ink md:text-5xl lg:text-6xl">
                  {platform.chassisCode} {trim.name}
                </h1>
              </div>
              <p className="mt-2 font-mono text-sm text-steel">
                {platform.overview.years} · {platform.overview.body}
              </p>

              <p className="mt-6 text-[0.9375rem] leading-relaxed text-ink/90">
                {trim.overview.summary ?? platform.overview.summary}
              </p>
            </div>

            <div className="relative mt-12 lg:mt-0">
              <span
                aria-hidden
                className="text-stretch pointer-events-none absolute -top-10 left-0 select-none font-display text-[6rem] font-bold leading-none text-ink/[0.04] sm:text-[8rem] lg:-top-14 lg:text-[9rem]"
              >
                {platform.chassisCode}
              </span>
              {/* No card/frame around this image — asked for twice. Don't
                  wrap it in a shadow-card/bg-surface panel even if a future
                  generic "every card gets elevation" pass seems to call for
                  it; this element is an explicit exception. */}
              <VehiclePhoto
                image={trim.image}
                fallbackLabel={`${platform.chassisCode} ${trim.name}`}
                className="aspect-[4/3] w-full rounded-[20px]"
                sizes="(min-width: 1024px) 48vw, 90vw"
                iconSize={44}
              />
            </div>
          </div>
        </Container>
      </header>

      <Container wide className="pb-14 pt-4 md:pb-20">
        <section id="overview" className="scroll-mt-24">
          <SectionHeading index="00" title="Overview" icon={LayoutGrid} />
          <SpecStrip facts={quickFacts} />
          <div className="shadow-card mt-5 rounded-2xl bg-surface p-5">
            <p className="label-mono mb-3 text-steel-dim">Known-issue mix</p>
            <SeverityMixBar counts={severityCounts} />
          </div>
        </section>

        <div className="mt-16 grid grid-cols-1 gap-10 md:mt-20 lg:grid-cols-2 lg:gap-12">
          <section
            id="known-issues"
            aria-labelledby="known-issues"
            className="scroll-mt-24"
          >
            <SectionHeading
              index="01"
              title="Known issues"
              icon={AlertTriangle}
              aside={`${issues.length} flagged · ${criticalCount} critical`}
            />
            <div className="space-y-4">
              {issues.map((issue) => (
                <KnownIssueRow key={issue.id} issue={issue} />
              ))}
            </div>
          </section>

          <section
            id="market-context"
            aria-labelledby="market-context"
            className="scroll-mt-24"
          >
            <SectionHeading
              index="02"
              title="Market pricing context"
              icon={DollarSign}
            />
            <MarketContextPanel context={trim.marketContext} />
          </section>
        </div>

        {trim.popularOptions && trim.popularOptions.length > 0 ? (
          <section
            id="options"
            aria-labelledby="options"
            className="mt-16 scroll-mt-24 md:mt-20"
          >
            <SectionHeading
              index="03"
              title="Popular options"
              icon={Tag}
              aside={`${trim.popularOptions.length} tracked`}
            />
            <PopularOptionsList
              options={trim.popularOptions}
              note={trim.optionsNote}
            />
          </section>
        ) : null}

        <section
          id="checklist"
          aria-labelledby="checklist"
          className="mt-16 scroll-mt-24 md:mt-20"
        >
          <SectionHeading
            index={trim.popularOptions && trim.popularOptions.length > 0 ? "04" : "03"}
            title="Buying checklist"
            icon={ClipboardList}
          />
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
      </Container>
    </>
  );
}
