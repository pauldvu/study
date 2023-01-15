import { create } from "zustand";

export const useColorStore = create((set) => ({
  color: "primary",
  setColor: (newColor) => set((state) => ({ ...state, color: newColor }))
}));
