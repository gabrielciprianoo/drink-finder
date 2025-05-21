import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { recipeSlice, type RecipeSliceType } from "./recipeSlice";
export const useAppStore = create<RecipeSliceType>()(
  devtools((...a) => ({
    ...recipeSlice(...a),
  }))
);
