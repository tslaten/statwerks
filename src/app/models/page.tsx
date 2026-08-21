import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ComingSoonCard } from "@/components/ui/coming-soon-card";
import { PlatformCard } from "@/components/ui/platform-card";
import { getAllPlatforms, getTrimsForPlatform } from "@/data/models";

export const metadata: Metadata = {
  title: "Model dashboards",
  description:
    "Every Porsche model buying dashboard on Statwerks — known issues, market pricing context, and a buying checklist, by generation.",
};

export default function ModelsIndexPage() {
  const platforms = getAllPlatforms();

  return (
    <Container className="py-16 md:py-20">
      <p className="label-mono text-steel-dim">Model dashboards</p>
      <h1 className="text-stretch mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
        Pick a model to see what to look for.
      </h1>
      <p className="mt-5 max-w-xl text-[0.9375rem] leading-relaxed text-steel">
        Each dashboard covers known issues by severity, general market
        pricing context, and a buying checklist specific to that model,
        generation, and trim. More are added over time.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {platforms.map((platform) => (
          <PlatformCard
            key={platform.slug}
            platform={platform}
            trims={getTrimsForPlatform(platform.slug)}
          />
        ))}
        <ComingSoonCard />
      </div>
    </Container>
  );
}
