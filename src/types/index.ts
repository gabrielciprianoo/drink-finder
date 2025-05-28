import type { InferOutput } from "valibot";
import type { CategoriesAPISchema, DrinksAPIResponseSchema, SearchFiltersSchema } from "../schemas";

export type Categories = InferOutput<typeof CategoriesAPISchema>;
export type SearchFilterType = InferOutput<typeof SearchFiltersSchema>;
export type Drinks = InferOutput<typeof DrinksAPIResponseSchema>;