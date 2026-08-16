# Adding a model

Every model dashboard page (`/models/[slug]`) is rendered entirely from a
data file in this directory — there's no per-model component code to touch.

## Steps

1. Copy `981-cayman-s.ts` to a new file named after the slug, e.g.
   `987-2-cayman-s.ts`.
2. Fill in every field. The shape is defined and documented in `types.ts`
   (`Model` interface) — your editor will flag anything missing.
3. Set `contentStatus: "placeholder"` until the copy has been reviewed
   against real research, then flip it to `"reviewed"`. Placeholder
   models show a draft banner on their page; reviewed ones don't.
4. Register the model in `index.ts`:
   ```ts
   import { yourNewModel } from "./987-2-cayman-s";
   export const models: Model[] = [cayman981S, carrera9971S, yourNewModel];
   ```
5. That's it — the model automatically appears on `/models` and at
   `/models/<slug>`, including SEO metadata and static generation
   (`generateStaticParams` reads from `getAllModels()`).

## Field notes

- `slug` — must be URL-safe and match the filename by convention (not
  enforced, just tidy). This becomes the route: `/models/<slug>`.
- `knownIssues[].severity` — one of `"critical" | "watch" | "clear"`.
  These map directly to the orange/blue/green signal colors and drive
  sort order on the page (critical first).
- `marketContext` — written copy, not live data. `asOf` is an ISO date
  shown next to the range so readers know how fresh the pricing
  commentary is; update it whenever you revise the numbers.
- `checklist` — three flat string arrays. Keep each line to roughly a
  sentence; the UI renders them as inspection-style checklist rows, not
  paragraphs.

## Later phases (don't build yet, just don't paint into a corner)

The schema intentionally doesn't reference VIN-specific data, payment
status, or PPI-inspector referrals — those are later-phase features per
the product brief. When they arrive, they should be addable as new
top-level fields on `Model` (or a related type keyed by `slug` /
`chassisCode`) without reshaping what's here.
