import type { StateCreator } from "zustand";
import type { Drinks } from "../types";

export type GeneratedRecipeType = {
  generatedRecipes: Drinks[];
  generatedLoading: boolean;
  generateRecipe: () => Promise<void>;
};

export const createGeneratedRecipeSlice: StateCreator<
  GeneratedRecipeType
> = () => ({
  generatedRecipes: [],
  generatedLoading: false,
  generateRecipe: async () => {},
});
