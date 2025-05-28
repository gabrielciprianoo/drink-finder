import { object, string, array } from "valibot";

export const CategoriesAPISchema = object({
  drinks: array(
    object({
      strCategory: string(),
    })
  ),
});

export const SearchFiltersSchema = object({
  ingredient: string(),
  category: string(),
});

export const DrinkAPIResponseSchema = object({
  idDrink: string(),
  strDrink: string(),
  strDrinkThumb: string(),
});

export const DrinksAPIResponseSchema = object({
  drinks: array(DrinkAPIResponseSchema)
});