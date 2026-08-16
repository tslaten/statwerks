import Link from "next/link";
import { Container } from "./container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/80 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-stretch font-display text-lg font-semibold tracking-tight text-ink"
        >
          STAT<span className="text-steel">WERKS</span>
        </Link>
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
