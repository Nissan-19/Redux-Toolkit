import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    savedList:[],
}

const savedCartSlice = createSlice({

    name:"savedProducts",
    initialState,
    reducers:{

        addToCart: (state, action) => {
            const existingProduct = state.savedList.find(
            (cartItem) => cartItem.id === action.payload.id
             )

                if (existingProduct) {
                    existingProduct.quantity += 1
                } else {
                    state.savedList.push({
                    ...action.payload,
                    quantity: 1, //adding quantity directly inside the cart. it was not define before
                 })
                }
            },
        
        deleteItem:(state,action)=>{
            state.savedList= state.savedList.filter(
                (savedItem)=>savedItem.id !== action.payload
            )
        },
        clearCart:(state,action)=>{
            state.savedList  = []
        },
        decreaseQuantity: (state, action) => {
        const existingProduct = state.savedList.find(
            (cartItem) => cartItem.id === action.payload
        )

        if (existingProduct.quantity > 1) {
            existingProduct.quantity -= 1
        } else {
            state.savedList = state.savedList.filter(
            (cartItem) => cartItem.id !== action.payload
            )
            }
        }
}})

export default savedCartSlice.reducer

export const {addToCart, deleteItem, clearCart, decreaseQuantity} = savedCartSlice.actions