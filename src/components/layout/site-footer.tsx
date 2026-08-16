import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-hairline">
      <Container className="flex flex-col gap-3 py-8 text-sm text-steel-dim md:flex-row md:items-center md:justify-between">
        <p>
          Statwerks is general buying guidance, not a substitute for a
          professional pre-purchase inspection.
        </p>
        <p className="label-mono">© {new Date().getFullYear()} STATWERKS</p>
      </Container>
    </footer>
  );
}
