import { configureStore } from "@reduxjs/toolkit";
import savedCartReducer from "../features/savedCart/savedCartSlice"
import reducer from "../features/savedCart/savedCartSlice";

export const store = configureStore({
    reducer:{
        savedProducts:savedCartReducer
    }
})