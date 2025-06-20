import type { StateCreator } from "zustand";
import type { FavoritesSliceType } from "./favoritesSlice";

type Notification = {
  text: string;
  error: boolean;
  show: boolean;
};

export type NotificationSliceType = {
  notification: Notification;
  closeNotification: () => void;
  showNotification: (payload: Pick<Notification, "text" | "error">) => void;
};

export const createNotificationSlice: StateCreator<
  NotificationSliceType & FavoritesSliceType,
  [],
  [],
  NotificationSliceType
> = (set, get) => ({
  notification: {
    text: "",
    error: false,
    show: false,
  },

  showNotification: ({ text, error }) => {

    set({
      notification: {
        text,
        error,
        show: true,
      },
    });

    setTimeout(() => {
      get().closeNotification();
    }, 2000);
  },

  closeNotification: () => {
    set((state) => ({
      notification: {
        ...state.notification,
        show: false,
      },
    }));

    setTimeout(() => {
      set({
        notification: {
          text: "",
          error: false,
          show: false,
        },
      });
    }, 300); 
  },
});
