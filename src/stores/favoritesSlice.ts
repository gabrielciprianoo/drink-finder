import type { StateCreator } from "zustand";
import type { Recipe } from "../types";

export type FavoritesSliceType = {
  favorites: Recipe[];
  handleClickFavorite: (recipe: Recipe) => void;
  isFavorite: (id: Recipe["idDrink"]) => boolean;
};

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (
  set,
  get
) => ({
  favorites: [],

  handleClickFavorite: (recipe) => {
    const exist = get().isFavorite(recipe.idDrink);
    if (exist) {
      // Remove from favorites
      set((state) => ({
        favorites: state.favorites.filter(
          (favorite) => favorite.idDrink !== recipe.idDrink
        ),
      }));
    } else {
      // Add to favorites
      set((state) => ({ favorites: [...state.favorites, recipe] }));
    }
  },

  isFavorite: (id) => {
    const isFavorite = get().favorites.some(
      (favorite) => favorite.idDrink === id
    );
    return isFavorite;
  },
});
