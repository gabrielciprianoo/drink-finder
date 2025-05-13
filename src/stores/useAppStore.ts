import { create } from 'zustand';
import { recipeSlice, type RecipeSliceType } from './recipeSlice';
export const useAppStore = create<RecipeSliceType>( (...a ) => ({
    ...recipeSlice( ...a )
}));
