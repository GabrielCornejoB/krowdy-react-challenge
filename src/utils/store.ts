import { create } from "zustand";

interface GlobalStore {
  isHomeActive: boolean;
  toggleActivePage: () => void;
}

export const useGlobalStore = create<GlobalStore>((set) => ({
  isHomeActive: true,
  toggleActivePage: () =>
    set((store) => ({ isHomeActive: !store.isHomeActive })),
}));
