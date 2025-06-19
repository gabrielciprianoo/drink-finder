import axios from "axios";
import { parse, safeParse } from "valibot";
import { CategoriesAPISchema, DrinksAPIResponseSchema, RecipeAPIResponseSchema } from "../schemas";
import type { Drink, Recipe, SearchFilterType } from "../types";

export async function getCategories() {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
  const { data } = await axios(url);
  const response = parse(CategoriesAPISchema, data);

  if (response) {
    return response;
  }
}

export async function getRecipes(filters: SearchFilterType) {
  try {
    const { category, ingredient } = filters;
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}&i=${ingredient}`;

    const { data } = await axios(url);
    const result = safeParse(DrinksAPIResponseSchema, data);
    if (!result.success) {
      console.log("data is not definded correctly");
      return;
    }

    const { output } = result;
    return output;
  } catch (e) {
    console.error(e);
  }
}

export async function getRecipeById(id : Drink['idDrink']) : Promise<Recipe> {

  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

  const { data } = await axios(url);

  const result = safeParse(RecipeAPIResponseSchema, data.drinks[0]);

  if(!result.success){
      console.error('Error data invalid', result.issues);
      return {} as Recipe;
  }

  return result.output;
  
}
