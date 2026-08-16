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
import { getAllModels, getModelBySlug, SEVERITY_ORDER } from "@/data/models";

export function generateStaticParams() {
  return getAllModels().map((model) => ({ slug: model.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/models/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const model = getModelBySlug(slug);
  if (!model) return {};

  return {
    title: model.name,
    description: model.overview.summary,
    openGraph: {
      title: `${model.name} buying dashboard`,
      description: model.overview.summary,
    },
  };
}

export default async function ModelPage({
  params,
}: PageProps<"/models/[slug]">) {
  const { slug } = await params;
  const model = getModelBySlug(slug);
  if (!model) notFound();

  const issues = [...model.knownIssues].sort(
    (a, b) => SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity]
  );
  const criticalCount = issues.filter((i) => i.severity === "critical").length;

  return (
    <>
      {model.contentStatus === "placeholder" ? <DraftBanner /> : null}

      <header className="border-b border-hairline">
        <Container className="pb-10 pt-12 md:pt-16">
          <nav className="label-mono flex items-center gap-2 text-steel-dim">
            <Link href="/models" className="transition-colors hover:text-ink">
              Models
            </Link>
            <span aria-hidden>/</span>
            <span className="text-steel">{model.shortName}</span>
          </nav>

          <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <span className="label-mono text-steel-dim">
              {model.chassisCode}
            </span>
            <h1 className="text-stretch font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
              {model.name}
            </h1>
          </div>
          <p className="mt-2 font-mono text-sm text-steel">
            {model.overview.years} · {model.overview.body}
          </p>

          <p className="mt-6 max-w-2xl text-[0.9375rem] leading-relaxed text-ink/90">
            {model.overview.summary}
          </p>
        </Container>

        <Container>
          <SpecStrip facts={model.overview.quickFacts} />
        </Container>
      </header>

      <Container className="py-14 md:py-20">
        <section aria-labelledby="known-issues">
          <SectionHeading
            index="01"
            title="Known issues"
            aside={`${issues.length} flagged · ${criticalCount} critical`}
          />
          <div>
            {issues.map((issue) => (
              <KnownIssueRow key={issue.id} issue={issue} />
            ))}
          </div>
        </section>

        <section aria-labelledby="market-context" className="mt-16 md:mt-20">
          <SectionHeading index="02" title="Market pricing context" />
          <MarketContextPanel context={model.marketContext} />
        </section>

        <section aria-labelledby="checklist" className="mt-16 md:mt-20">
          <SectionHeading index="03" title="Buying checklist" />
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            <ChecklistGroup
              title="Documents to request"
              items={model.checklist.documentsToRequest}
            />
            <ChecklistGroup
              title="Questions for the seller"
              items={model.checklist.questionsForSeller}
            />
            <ChecklistGroup
              title="PPI advice"
              items={model.checklist.ppiAdvice}
            />
          </div>
        </section>
      </Container>
    </>
  );
}
