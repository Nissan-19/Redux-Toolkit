import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"
import watchlistReducer from "../features/watchlist/watchlistSlice"

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        watchlist: watchlistReducer,
    },

    
})