import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ModelCard } from "@/components/ui/model-card";
import { getAllModels } from "@/data/models";

export default function Home() {
  const models = getAllModels();

  return (
    <>
      <section className="border-b border-hairline">
        <Container className="pb-16 pt-20 md:pb-24 md:pt-28">
          <p className="label-mono text-watch">
            Free · No login · Model-specific
          </p>
          <h1 className="text-stretch mt-5 max-w-3xl font-display text-5xl font-semibold leading-[0.98] tracking-tight text-ink md:text-7xl">
            Know what to look for before you buy.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-steel">
            Statwerks is a free buying dashboard for a specific used Porsche
            model and generation — known issues by severity, general market
            pricing context, and a buying checklist — so you walk in
            informed, not hopeful.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/models"
              className="label-mono inline-flex items-center gap-2 bg-ink px-5 py-3 text-graphite transition-opacity hover:opacity-85"
            >
              Browse model dashboards →
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-inset">
        <Container className="grid grid-cols-1 divide-y divide-hairline sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            { value: String(models.length).padStart(2, "0"), label: "Model dashboards live" },
            { value: "$0", label: "Cost to read one" },
            { value: "0", label: "Accounts required" },
          ].map((stat) => (
            <div key={stat.label} className="px-0 py-6 sm:px-8 sm:first:pl-0 sm:last:pr-0">
              <div className="font-mono text-3xl text-ink">{stat.value}</div>
              <div className="label-mono mt-2 text-steel-dim">
                {stat.label}
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section className="border-b border-hairline">
        <Container className="py-16 md:py-20">
          <p className="label-mono text-steel-dim">How it works</p>
          <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {[
              {
                index: "01",
                title: "Pick your model",
                body: "Every generation carries its own known-issue profile. Start with the exact model and years you're cross-shopping.",
              },
              {
                index: "02",
                title: "Read the dashboard",
                body: "Known issues tagged by severity, general market pricing context, and a buying checklist — all on one page.",
              },
              {
                index: "03",
                title: "Buy informed",
                body: "Walk into the sale, the PPI, and the negotiation already knowing what a specialist would tell you to check.",
              },
            ].map((step) => (
              <div key={step.index}>
                <span className="label-mono text-steel-dim">
                  {step.index}
                </span>
                <h3 className="mt-3 font-display text-xl font-medium text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-steel">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16 md:py-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <p className="label-mono text-steel-dim">Available now</p>
            <Link
              href="/models"
              className="label-mono text-steel transition-colors hover:text-ink"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {models.map((model) => (
              <ModelCard key={model.slug} model={model} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
