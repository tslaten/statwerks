# Statwerks

Free, model-specific buying dashboards for used Porsches — known issues by
severity, general market pricing context, and a buying checklist — before
you ever call a seller.

Phase 1 (current): static, file-based content, no accounts, no payments.
See `AGENTS.md` for the full product brief.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a model

Model content lives entirely in `src/data/models/` as typed data files —
no component code to touch. See `src/data/models/README.md` for the
step-by-step template.

## Stack

- Next.js (App Router, static generation via `generateStaticParams`)
- Tailwind CSS v4 (theme tokens in `src/app/globals.css`)
- Archivo (display), Inter (body), IBM Plex Mono (data/specs) via
  `next/font/google`

## Design system

- **Surfaces**: graphite scale — `graphite` (page bg) → `raised` (cards)
  → `inset` (recessed data panels), separated by `hairline` borders
  rather than shadows.
- **Text**: `ink` (primary), `steel` (secondary), `steel-dim` (tertiary
  labels — kept ≥4.5:1 contrast on both `graphite` and `inset`).
- **Signal colors**: `critical` (orange), `watch` (blue), `clear` (green)
  — map 1:1 to known-issue severity and nothing else, so they stay
  meaningful.
- **Type**: Archivo dialed toward its expanded width axis for display
  type (`text-stretch` utility), Inter for body copy, IBM Plex Mono for
  anything spec/data-like (years, prices, mileage, severity tags).

## Structure notes for later phases

Per the product brief, a paid VIN-specific report and PPI-inspector
referrals are explicitly out of scope for Phase 1. The `Model` content
schema (`src/data/models/types.ts`) is written so those can be added as
new fields later without reshaping what already exists.
