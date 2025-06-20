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

export const createNotificationSlice: StateCreator<NotificationSliceType & FavoritesSliceType , [], [], NotificationSliceType> = (
  set
) => ({
  notification: {
    text: "",
    error: false,
    show: false,
  },
  closeNotification: () =>
    set({
      notification: {
        show: false,
        text: "",
        error: false,
      },
    }),

  showNotification: (payload) => {
    set({
      notification: {
        show: true,
        text: payload.text,
        error: payload.error,
      },
    });

    setTimeout(() => {
      set({
        notification: {
          show: false,
          text: "",
          error: false,
        },
      });
    }, 2000);
  }
    
});
