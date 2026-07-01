// useDispatch lets this component send actions to Redux
// useSelector lets this component read data from Redux
import { useDispatch, useSelector } from "react-redux"
// Original list of movies shown on the page
import { availableMovies } from "./data/availableMovies"

// saveMovie is the Redux action created in savedMoviesSlice.js
import { saveMovie, removeMovie } from "../src/app/features/savedMovies/savedMoviesSlice"

const App = () => {
  // dispatch is used to send actions to Redux
  const dispatch = useDispatch()

  // We need dispatch because Redux actions do not run by themselves.
  // You must send them using dispatch.

  // savedMovieList reads the savedList array from Redux state
  // state.savedMovies comes from store.js reducer key
  // savedList comes from initialState inside savedMoviesSlice.js
  const savedMovieList = useSelector((state) => state.savedMovies.savedList)

  return (
    <div>
      <h1>Movie Watchlist</h1>

      <h2>Available Movies</h2>

      <ul>
        {availableMovies.map((singleMovie) => (
          <li key={singleMovie.id}>
            <span>
              {singleMovie.title} ({singleMovie.year})
            </span>

            {/* When clicked, dispatch sends saveMovie(singleMovie) to Redux */}
            {/* singleMovie becomes action.payload inside the saveMovie reducer */}
            <button onClick={() => dispatch(saveMovie(singleMovie))}>
              Save Movie
            </button>
          </li>
        ))}
      </ul>

      <h2>Saved Movies</h2>

      {/* savedMovieList.length shows how many movies are saved in Redux */}
      <p>Saved Count: {savedMovieList.length}</p>

      <ul>
        {/* Loop through the movies saved in Redux and display them */}
        {savedMovieList.map((savedMovie) => (
          <li key={savedMovie.id}>
            <span>
              {savedMovie.title} ({savedMovie.year})
            </span>

            {/* When clicked, dispatch sends removeMovie(savedMovie.id) to Redux */}
            {/* savedMovie.id becomes action.payload inside the removeMovie reducer */}
            <button onClick={() => dispatch(removeMovie(savedMovie.id))}>
              Remove Movie
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App