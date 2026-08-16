export function ChecklistGroup({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h3 className="label-mono mb-4 text-steel">{title}</h3>
      <ul className="space-y-3.5">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink/90">
            <span aria-hidden className="mt-0.5 font-mono text-steel-dim">
              □
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
