import type { StateCreator } from "zustand";
import {
  getCategories,
  getRecipeById,
  getRecipes,
} from "../services/RecipeService";
import type {
  Categories,
  Drink,
  Drinks,
  Recipe,
  SearchFilterType,
} from "../types";

export type RecipeSliceType = {
  categories: Categories;
  drinks: Drinks;
  loading: boolean;
  filters: SearchFilterType;
  selectedRecipe: Recipe;
  modal: boolean;
  fetchCategories: () => Promise<void>;
  searchRecipers: (searchFilters: SearchFilterType) => Promise<void>;
  selectRecipe: (id: Drink["idDrink"]) => Promise<Recipe>;
  closeModal: () => void;
};

export const createRecipeSlice: StateCreator<RecipeSliceType> = (set) => ({
  categories: {
    drinks: [],
  },

  drinks: {
    drinks: [],
  },

  loading: false,

  filters: {
    ingredient: "",
    category: "",
  },

  selectedRecipe: {} as Recipe,

  modal: false,

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
      set({ filters });
      set({ drinks });
    } catch (error) {
      console.error("Error al buscar recetas", error);
      set({ drinks: { drinks: [] } });
    } finally {
      set({ loading: false });
    }
  },

  selectRecipe: async (id) => {
    const selectedRecipe = await getRecipeById(id);
    set({
      selectedRecipe,
      modal: true,
    });
    return selectedRecipe;
  },

  closeModal: () => {
    set({ modal: false });
    setTimeout(() => {
      set({ selectedRecipe: {} as Recipe });
    }, 200);
  },
});
