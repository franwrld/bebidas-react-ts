import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"
import type { Categories } from "../types"

export type RecetaSliceType = {
    categories: Categories
    fetchCategories: () => Promise<void>
}

export const createRecetaSlice : StateCreator<RecetaSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    }
})