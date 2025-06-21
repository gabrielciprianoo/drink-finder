import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { createRecipeSlice, type RecipeSliceType} from "./recipeSlice";
import { createFavoritesSlice, type FavoritesSliceType } from './favoritesSlice';
import { createNotificationSlice, type NotificationSliceType } from "./notificactionSlice";
import { createGeneratedRecipeSlice, type GeneratedRecipeType } from "./generatedRecipeSlice";

type useAppStoreType = RecipeSliceType & FavoritesSliceType & NotificationSliceType & GeneratedRecipeType;

export const useAppStore = create<useAppStoreType>()(
  devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
    ...createGeneratedRecipeSlice(...a),
  }))
);
