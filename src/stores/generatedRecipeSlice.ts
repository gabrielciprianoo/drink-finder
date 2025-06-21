import type { StateCreator } from "zustand";
import type { Recipes } from "../types";
import {
  generateImageFromPrompt,
  generateRecipeWithAI,
} from "../services/ChatGPTService";
import {
  createNotificationSlice,
  type NotificationSliceType,
} from "./notificactionSlice";
import type { FavoritesSliceType } from "./favoritesSlice";

const STORAGE_KEY = "generatedDrinks";

export type GeneratedRecipeType = {
  generatedRecipes: Recipes;
  generatedLoading: boolean;
  generateRecipe: (prompt: string) => Promise<void>;
  loadGeneratedFromStorage: () => void;
  clearGeneratedRecipes: () => void;
};

export const createGeneratedRecipeSlice: StateCreator<
  GeneratedRecipeType & NotificationSliceType & FavoritesSliceType,
  [],
  [],
  GeneratedRecipeType
> = (set, get, api) => ({
  generatedRecipes: { drinks: [] },
  generatedLoading: false,

  generateRecipe: async (prompt) => {
    try {
      set({ generatedLoading: true });

      const [recipe, imageUrl] = await Promise.all([
        generateRecipeWithAI(prompt),
        generateImageFromPrompt(prompt),
      ]);

      if (!recipe) {
        createNotificationSlice(set, get, api).showNotification({
          error: true,
          text: "No se pudo generar la receta",
        });

        return;
      }

      recipe.strDrinkThumb = imageUrl ?? "/drinkyai.jpg";
      recipe.generatedWithAI = true;

      const updatedDrinks = [...get().generatedRecipes.drinks || [], recipe];
      set({ generatedRecipes: { drinks: updatedDrinks } });
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ drinks: updatedDrinks }));
      createNotificationSlice(set, get, api).showNotification({
        error: false,
        text: "Receta Generada Correctamente",
      });
    } catch (error) {
      createNotificationSlice(set, get, api).showNotification({
        error: true,
        text: "No se pudo generar la receta",
      });
      console.error("Error al generar receta e imagen:", error);
    } finally {
      set({ generatedLoading: false });
    }
  },

  loadGeneratedFromStorage: () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        set({ generatedRecipes: parsed.drinks ? parsed : { parsed } });
      } catch (error) {
        console.warn("Error al leer recetas generadas del localStorage", error);
      }
    }
  },

  clearGeneratedRecipes: () => {
    set({ generatedRecipes: { drinks: [] } });
    localStorage.removeItem(STORAGE_KEY);
  },
});
