import type { InferOutput } from "valibot";
import type { CategoriesAPISchema } from "../schemas";

export type Categories = InferOutput<typeof CategoriesAPISchema>;