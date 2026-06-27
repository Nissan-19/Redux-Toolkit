import { createSlice } from "@reduxjs/toolkit";
import { fruits } from "../../data/fruits";

const initialState = {
    items: [],
}

const fruitBasketSlice = createSlice({
    name: "fruitBasket",
    initialState,
    reducers:{
        addToBasket:(state,action)=>{
            state.items.push(action.payload)
        },

        removeFromBasket:(state,action)=>{
            state.items=state.items.filter((fruits)=>fruits.basketItemId !== action.payload)
        }
    }
})

export const {addToBasket, removeFromBasket}=fruitBasketSlice.actions
export default fruitBasketSlice.reducer