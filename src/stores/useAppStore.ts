import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecetaSlice, RecetaSliceType } from "./recetaSlice";

export const useAppStore = create<RecetaSliceType>()(devtools((...a) => ({
    ...createRecetaSlice(...a)
})))