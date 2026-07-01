// configureStore creates the main Redux store
import { configureStore } from "@reduxjs/toolkit"

// Import the reducer from the savedMovies slice. and give it a name: savedMoviesReducer
import savedMoviesReducer from "../app/features/savedMovies/savedMoviesSlice"

// Create and export the main Redux store.
// main.jsx will use this store inside Provider.
export const store = configureStore({
  reducer: {
    // This key creates state.savedMovies in Redux.
    // savedMoviesReducer controls what is stored inside it.
    savedMovies: savedMoviesReducer,
  },        //savedMovies: {
            //savedList: []} this looks like this on redux stojre
})