export function DraftBanner() {
  return (
    <div className="glass sticky top-16 z-30 border-b border-watch/20">
      <p className="label-mono mx-auto flex max-w-5xl items-center gap-2 px-6 py-2.5 text-watch md:px-10">
        <span aria-hidden>◆</span>
        Placeholder content — pending research review, not yet verified
      </p>
    </div>
  );
}
