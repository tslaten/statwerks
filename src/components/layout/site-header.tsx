import Link from "next/link";
import { getAllPlatforms, getTrimsForPlatform } from "@/data/models";
import { Container } from "./container";
import { ModelNavDrawer } from "./model-nav-drawer";

export function SiteHeader() {
  const groups = getAllPlatforms().map((platform) => ({
    platform,
    trims: getTrimsForPlatform(platform.slug),
  }));

  return (
    <header className="glass sticky top-0 z-40 border-b border-line">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <ModelNavDrawer groups={groups} />
          <Link
            href="/"
            className="text-stretch font-display text-lg font-semibold tracking-tight text-ink"
          >
            STAT<span className="text-steel">WERKS</span>
          </Link>
        </div>
        <nav className="flex items-center gap-6">
          <Link
            href="/models"
            className="label-mono text-steel transition-colors hover:text-ink"
          >
            Models
          </Link>
        </nav>
      </Container>
    </header>
  );
}
