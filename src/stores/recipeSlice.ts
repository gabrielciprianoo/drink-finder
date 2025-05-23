import type { StateCreator } from "zustand";
import { getCategories } from "../services/RecipeService";
import type { Categories } from "../types";

export type RecipeSliceType = {
    categories: Categories;
    fetchCategories: () => Promise<void>;
}

export const recipeSlice : StateCreator<RecipeSliceType> =  ( set ) => ({
    categories: {
        drinks: []
    },
    fetchCategories: async () =>{
        const categories = await getCategories();
        set({
            categories
        })
    }
});