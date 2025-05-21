import { object, string, array } from "valibot";

export const CategoriesAPISchema = object({
  drinks: array(
    object({
      strCategory: string(),
    })
  ),
});
