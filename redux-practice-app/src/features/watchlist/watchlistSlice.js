import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    items:[],
}

const watchlistSlice = createSlice({
    name: "watchlist",
    initialState,
    reducers:{
        addToWatchlist: (state, action)=>{
            state.items.push(action.payload)
        },
    },
})

export const{addToWatchlist}= watchlistSlice.actions

export default watchlistSlice.reducer