import { configureStore } from "@reduxjs/toolkit";
import fruitBasketReducer from "../features/fruitBasket/fruitBasketSlice"

export const store = configureStore({
    reducer:{
        fruitBasket: fruitBasketReducer,
        },
    }
)