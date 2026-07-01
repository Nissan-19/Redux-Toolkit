import React from 'react'
import { availableMovies } from './data/avaliableMovies'
import { useDispatch, useSelector } from 'react-redux'
import { deleteMovie, saveMovie, clearAllMovies } from './features/savedMovies/savedMoviesSlice'

const App = () => {
  const dispatch = useDispatch()
  const savedMovieList = useSelector((state)=>state.savedMovies.savedList)
  return (
    <div>
      <h1>Movies Watchlist</h1>

      <h2>Avaliable Movies</h2>

      <ul>
        {availableMovies.map((singleMovie)=>(
          <li key={singleMovie.id}>
            <span>{singleMovie.name} {singleMovie.year}</span>
            <button onClick={()=>dispatch(saveMovie(singleMovie))}>Add To List</button>
          </li>
        ))}
      </ul>

      <h2>Saved Movies</h2>
      <p>save Count :{savedMovieList.length} </p>
      <ul>
        {savedMovieList.map((savedMovie)=>(
          <li key={savedMovie.id}>
            <span>{savedMovie.name} {savedMovie.year}</span>
            <button onClick={()=>dispatch(deleteMovie(savedMovie.id))}>Delete Movie</button>
          </li>
        ))}
      </ul>
      <h2>Clear All Movies</h2>
      <button onClick={()=>dispatch(clearAllMovies())}>Clear All Movies</button>
    </div>
  )
}

export default App
