# Adding a platform or trim

Model content is split into two tiers so a new trim doesn't mean
re-authoring shared platform content:

- **Platform** (`platforms/*.ts`) — one per generation/chassis, e.g.
  "981 Cayman". Holds facts and known issues common to every trim of
  that generation: production years, chassis code, layout, the shared
  known-issues list, and the buying checklist.
- **Trim** (`trims/*.ts`) — one per trim within a platform, e.g.
  "Cayman S". Extends its platform with trim-specific specs (engine,
  power, 0–60, weight), trim-specific known issues, and pricing.
  Points back at its platform via `platformSlug`.

A trim's full dashboard page merges its platform's shared data with its
own — see `mergedKnownIssues` / `mergedQuickFacts` / `mergedChecklist`
in `index.ts`.

Route: `/models/[platformSlug]/[trimSlug]`, e.g. `/models/981-cayman/s`.
`/models/[platformSlug]` on its own is a lightweight hub page: platform
overview, shared known issues, and a card per trim.

## Adding a new trim to an existing platform (the common case)

This is the case the schema is built around — e.g. adding "GTS" to the
981 Cayman platform.

1. Copy `trims/981-cayman-s.ts` to a new file, e.g. `981-cayman-gts.ts`.
2. Set `slug` (this becomes the URL, e.g. `"gts"`) and keep
   `platformSlug: "981-cayman"` pointing at the existing platform.
3. Fill in `overview` (trim-specific specs) and `knownIssues` (only
   what's specific to this trim — shared platform issues don't need
   repeating).
4. Register it in `index.ts`:
   ```ts
   import { cayman981Gts } from "./trims/981-cayman-gts";
   export const trims: Trim[] = [cayman981S, carrera9972S, cayman981Gts];
   ```
5. Done. `/models/981-cayman` automatically shows a card for the new
   trim, and `/models/981-cayman/gts` renders its full dashboard. The
   `981-cayman.ts` platform file doesn't change at all.

## Adding a new platform (a new generation)

1. Copy `platforms/981-cayman.ts` to a new file, e.g. `987-2-cayman.ts`.
2. Fill in every field — shape is documented in `types.ts` (`Platform`).
3. Add at least one trim for it (see above), setting that trim's
   `platformSlug` to match.
4. Register both in `index.ts`.

## Field notes

- `slug` (platform or trim) — must be URL-safe; the trim's URL is
  `/models/<platformSlug>/<slug>`.
- `contentStatus` — `"placeholder"` until copy is reviewed against real
  research, then `"reviewed"`. A page shows a draft banner if *either*
  its platform or its trim is still a placeholder.
- `knownIssue.severity` — one of `"critical" | "watch" | "clear"`. Maps
  directly to the orange/blue/green signal colors and drives sort order
  (critical first) after platform + trim issues are merged.
- Put an issue on the **platform** if it applies regardless of trim
  (e.g. a coolant tank that ages out on every car of that generation).
  Put it on the **trim** if it's specific to that engine/spec variant
  (e.g. bore scoring reported on one displacement but not another).
- `marketContext` — trim-level only; pricing varies by trim, not by
  platform. Written copy, not live data — `asOf` is an ISO date shown
  next to the range so readers know how fresh the commentary is.
- `checklist` — lives on `Platform`; put documents/questions/PPI advice
  here if they apply regardless of trim. A trim can add its own via
  the optional `checklistAdditions` (e.g. "test PDK shift quality" only
  makes sense on PDK-equipped trims) — `mergedChecklist()` combines the
  two for display, platform items first.
- `image` (trim-level, optional) — a background-removed product shot.
  Drop the file under `public/vehicles/<platformSlug>/<trimSlug>.png`
  (PNG or WebP, transparent background, ~1600px on the long edge, and
  keep the same crop/angle — e.g. all 3/4-front — across trims so the
  index grid doesn't look mismatched), then set
  `image: { src: "/vehicles/981-cayman/s.png", alt: "981 Cayman S, three-quarter front view" }`.
  Every page that shows an image renders a placeholder (dashed box,
  car icon, "Image pending") when this is omitted, so it's safe to
  leave unset and add later without touching layout code.

## Later phases (don't build yet, just don't paint into a corner)

The schema intentionally doesn't reference VIN-specific data, payment
status, or PPI-inspector referrals — those are later-phase features per
the product brief. When they arrive, they should be addable as new
top-level fields on `Trim` (or a related type keyed by trim `slug` +
`platformSlug`) without reshaping what's here.
