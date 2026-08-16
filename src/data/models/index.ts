import { cayman981S } from "./981-cayman-s";
import { carrera9971S } from "./997-1-carrera-s";
import type { Model } from "./types";

export * from "./types";

/**
 * Every model dashboard the site knows about. Order here controls the
 * order cards appear on /models — add new entries at the end.
 */
export const models: Model[] = [cayman981S, carrera9971S];

export function getAllModels(): Model[] {
  return models;
}

export function getModelBySlug(slug: string): Model | undefined {
  return models.find((model) => model.slug === slug);
}
