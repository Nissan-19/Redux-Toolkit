import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    savedList:[],
}

const savedMoviesSlice = createSlice({

    name:"savedMovies",
    initialState,
    reducers:{
        saveMovie:(state,action)=>{
            const movieAlreadySaved = state.savedList.some(
                (savedMovie) =>savedMovie.id === action.payload.id
            )
            if(!movieAlreadySaved){
            state.savedList.push(action.payload)
            }
        },

        deleteMovie:(state,action)=>{
            state.savedList=state.savedList.filter((savedMovie)=>
            savedMovie.id !== action.payload)
        },

        clearAllMovies:(state,action)=>{
            state.savedList = []
        }
    },

})

export const {saveMovie, deleteMovie,clearAllMovies} = savedMoviesSlice.actions

export default savedMoviesSlice.reducer

