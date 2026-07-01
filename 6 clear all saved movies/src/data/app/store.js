import { configureStore } from "@reduxjs/toolkit";
import savedMoviesReducer from "../../features/savedMovies/savedMoviesSlice"

export const store = configureStore({
    reducer: {

        savedMovies : savedMoviesReducer,
    },
})

