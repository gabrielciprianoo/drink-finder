import type { StateCreator } from "zustand";
import type { Recipe } from "../types";
import {
  createNotificationSlice,
  type NotificationSliceType,
} from "./notificactionSlice";

export type FavoritesSliceType = {
  favorites: Recipe[];
  handleClickFavorite: (recipe: Recipe) => void;
  isFavorite: (id: Recipe["idDrink"]) => boolean;
  loadFromStorage: () => void;
};

export const createFavoritesSlice: StateCreator<
  FavoritesSliceType & NotificationSliceType,
  [],
  [],
  FavoritesSliceType
> = (set, get, api) => ({
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

      createNotificationSlice(set, get, api).showNotification({
      error: false,
      text: "Eliminado Correctamente",
    });
    } else {
      // Add to favorites
      set((state) => ({ favorites: [...state.favorites, recipe] }));

      createNotificationSlice(set, get, api).showNotification({
        error: false,
        text: "Agregado Correctamente",
      });
    }

    localStorage.setItem("favorites", JSON.stringify(get().favorites));

  },

  isFavorite: (id) => {
    const isFavorite = get().favorites.some(
      (favorite) => favorite.idDrink === id
    );
    return isFavorite;
  },

  loadFromStorage: () => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      set({ favorites: JSON.parse(storedFavorites) });
    }
  },
});
