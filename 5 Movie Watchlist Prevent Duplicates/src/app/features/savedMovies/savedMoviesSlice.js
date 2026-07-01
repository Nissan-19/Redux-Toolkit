// createSlice is used to create one Redux feature/slice
import { createSlice } from "@reduxjs/toolkit"

// This is the starting state for saved movies.
// At first, no movie is saved, so savedList is empty.
const initialState = {
  savedList: [],
}

// This slice controls the saved movies section of Redux state.
const savedMoviesSlice = createSlice({
  // This name identifies this slice inside Redux Toolkit
  name: "savedMovies",

  // This connects the starting state to this slice
  initialState,

  reducers: {
    // saveMovie will run when App.jsx dispatches saveMovie(singleMovie)
    saveMovie: (state, action) => {
      // action.payload is the movie sent from App.jsx
      // Example: { id: 1, title: "Inception", year: 2010 }

      // Check if the movie is already saved in savedList.
      // savedMovie means one movie already inside the savedList array.
      const movieAlreadySaved = state.savedList.some(
        (savedMovie) => savedMovie.id === action.payload.id
      )

      // some() is a JavaScript array method.
      // It checks: "Does at least one item in this array pass this condition?"
      // Here, it checks whether at least one savedMovie has the same id
      // as the movie we are trying to save.

      // If movieAlreadySaved is false, then add the movie.
      // The ! means "not".
      // So !movieAlreadySaved means "movie is not already saved".
      if (!movieAlreadySaved) {
        // Add that movie into the savedList array.
        state.savedList.push(action.payload)
      }
    },

    // removeMovie will run when App.jsx dispatches removeMovie(savedMovie.id)
    removeMovie: (state, action) => {
      // action.payload is the id of the movie we want to remove.
      // Example: if we dispatch removeMovie(1),
      // then action.payload is 1.

      // filter() creates a new array by keeping only the items
      // that pass the condition below.
      state.savedList = state.savedList.filter(
        // savedMovie means one movie already inside savedList.
        // Keep the savedMovie only if its id is NOT equal to action.payload.
        (savedMovie) => savedMovie.id !== action.payload
      )

      // Example:
      // If savedList has Inception with id 1,
      // and action.payload is 1,
      // then Inception will be removed.
    },
  },
})

// Export the actions so App.jsx can dispatch them.
// saveMovie is used to save a movie.
// removeMovie is used to remove a movie.
export const { saveMovie, removeMovie } = savedMoviesSlice.actions

// Export the reducer so store.js can connect this slice to Redux.
export default savedMoviesSlice.reducer