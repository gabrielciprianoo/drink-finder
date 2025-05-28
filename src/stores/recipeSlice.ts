import type { StateCreator } from "zustand";
import { getCategories, getRecipes } from "../services/RecipeService";
import type { Categories, Drinks, SearchFilterType } from "../types";

export type RecipeSliceType = {
  categories: Categories;
  drinks: Drinks;
  loading: boolean;
  filters: SearchFilterType;
  fetchCategories: () => Promise<void>;
  searchRecipers: (searchFilters: SearchFilterType) => Promise<void>;
};

export const recipeSlice: StateCreator<RecipeSliceType> = (set) => ({
  categories: {
    drinks: [],
  },

  drinks: {
    drinks: [],
  },

  loading: false,

  filters: {
    ingredient: '',
    category: ''
  },

  fetchCategories: async () => {
    const categories = await getCategories();
    set({
      categories,
    });
  },

  searchRecipers: async (filters) => {
    try {
      set({ loading: true });

      const [drinks] = await Promise.all([
        getRecipes(filters),
        new Promise((r) => setTimeout(r, 2000)),
      ]);
      set({ filters })
      set({ drinks });
    } catch (error) {
      console.error("Error al buscar recetas", error);
      set({ drinks: { drinks: [] } });
    } finally {
      set({ loading: false });
    }
  },
});
