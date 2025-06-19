import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { createRecipeSlice, type RecipeSliceType} from "./recipeSlice";
import { createFavoritesSlice, type FavoritesSliceType } from './favoritesSlice';

type useAppStoreType = RecipeSliceType & FavoritesSliceType;

export const useAppStore = create<useAppStoreType>()(
  devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavoritesSlice(...a),
  }))
);
