import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { TrimCard } from "@/components/ui/trim-card";
import { getAllTrims, getPlatformBySlug } from "@/data/models";

export const metadata: Metadata = {
  title: "All trims",
  description:
    "Every Porsche trim dashboard on Statwerks, across every generation — known issues, market pricing context, and a buying checklist.",
};

export default function TrimsIndexPage() {
  const trims = getAllTrims();

  return (
    <Container className="py-16 md:py-20">
      <p className="label-mono text-steel-dim">All trims</p>
      <h1 className="text-stretch mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
        Every trim dashboard, in one list.
      </h1>
      <p className="mt-5 max-w-xl text-[0.9375rem] leading-relaxed text-steel">
        Browsing by exact trim rather than by generation? Every dashboard
        on the site is listed here — jump straight to the one you&apos;re
        cross-shopping.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {trims.map((trim) => {
          const platform = getPlatformBySlug(trim.platformSlug);
          if (!platform) return null;
          return (
            <TrimCard
              key={`${trim.platformSlug}-${trim.slug}`}
              platform={platform}
              trim={trim}
              includeChassisCode
            />
          );
        })}
      </div>
    </Container>
  );
}
