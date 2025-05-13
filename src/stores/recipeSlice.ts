import type { StateCreator } from "zustand";

type Category = {
    cat : ''
};

export type RecipeSliceType = {
    categories: Category[];
}

export const recipeSlice : StateCreator<RecipeSliceType> =  () => ({
    categories: []
});