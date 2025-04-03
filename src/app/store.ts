import {configureStore} from "@reduxjs/toolkit"
import activeScreenSlice from "../slices/activeScreenSlice"
import productsSlice from "../slices/productsSlice"
export const store = configureStore({
    reducer: {
        activeScreen: activeScreenSlice,
        products: productsSlice
    }
})