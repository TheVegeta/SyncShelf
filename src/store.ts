import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type BearStore = {
  isAuth: boolean;
  username: string;
  jwt: string;
  setAuth: (options: { jwt: string; username: string }) => void;
  reset: () => void;
};

export const useBearStore = create<BearStore>()(
  persist(
    (set, get) => ({
      isAuth: false,
      jwt: "",
      username: "",
      setAuth: ({ jwt, username }) => set({ isAuth: true, jwt, username }),
      reset: () => set({ isAuth: false, jwt: "", username: "" }),
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
