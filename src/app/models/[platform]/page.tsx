import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { DraftBanner } from "@/components/ui/draft-banner";
import { KnownIssueRow } from "@/components/ui/known-issue-row";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpecStrip } from "@/components/ui/spec-strip";
import { TrimCard } from "@/components/ui/trim-card";
import {
  getAllPlatforms,
  getPlatformBySlug,
  getTrimsForPlatform,
  SEVERITY_ORDER,
} from "@/data/models";

export function generateStaticParams() {
  return getAllPlatforms().map((platform) => ({ platform: platform.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/models/[platform]">): Promise<Metadata> {
  const { platform: platformSlug } = await params;
  const platform = getPlatformBySlug(platformSlug);
  if (!platform) return {};

  return {
    title: platform.name,
    description: platform.overview.summary,
  };
}

export default async function PlatformPage({
  params,
}: PageProps<"/models/[platform]">) {
  const { platform: platformSlug } = await params;
  const platform = getPlatformBySlug(platformSlug);
  if (!platform) notFound();

  const trims = getTrimsForPlatform(platform.slug);
  const sharedIssues = [...platform.sharedKnownIssues].sort(
    (a, b) => SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity]
  );

  return (
    <>
      {platform.contentStatus === "placeholder" ? <DraftBanner /> : null}

      <header>
        <Container wide className="pb-10 pt-12 md:pt-16">
          <nav className="label-mono flex items-center gap-2 text-steel-dim">
            <Link href="/models" className="transition-colors hover:text-ink">
              Models
            </Link>
            <span aria-hidden>/</span>
            <span className="text-steel">{platform.shortName}</span>
          </nav>

          <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <span className="label-mono text-steel-dim">
              {platform.chassisCode}
            </span>
            <h1 className="text-stretch font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
              {platform.name}
            </h1>
          </div>
          <p className="mt-2 font-mono text-sm text-steel">
            {platform.overview.years} · {platform.overview.body}
          </p>

          <p className="mt-6 max-w-2xl text-[0.9375rem] leading-relaxed text-ink/90">
            {platform.overview.summary}
          </p>
        </Container>

        <Container wide className="pb-10">
          <SpecStrip facts={platform.overview.quickFacts} />
        </Container>
      </header>

      <Container wide className="pb-14 pt-4 md:pb-20">
        <section aria-labelledby="trims">
          <SectionHeading
            index="01"
            title="Choose a trim"
            aside={`${trims.length} trim${trims.length === 1 ? "" : "s"}`}
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trims.map((trim) => (
              <TrimCard key={trim.slug} platform={platform} trim={trim} />
            ))}
          </div>
        </section>

        {sharedIssues.length > 0 ? (
          <section aria-labelledby="shared-issues" className="mt-16 md:mt-20">
            <SectionHeading
              index="02"
              title="Known across every trim"
              aside={`${sharedIssues.length} flagged`}
            />
            <p className="mb-6 max-w-2xl text-sm leading-relaxed text-steel">
              These apply platform-wide, regardless of trim. Each trim&apos;s
              own dashboard adds anything specific to that engine/spec
              variant.
            </p>
            <div className="max-w-3xl space-y-4">
              {sharedIssues.map((issue) => (
                <KnownIssueRow key={issue.id} issue={issue} />
              ))}
            </div>
          </section>
        ) : null}
      </Container>
    </>
  );
}
