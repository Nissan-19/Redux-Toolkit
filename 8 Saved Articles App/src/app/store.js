import { configureStore } from "@reduxjs/toolkit";
import savedArticlesReducer from "../features/savedArticlesSlice/savedArticlesSlice";

export const store = configureStore({

    reducer:{

    savedArticles : savedArticlesReducer,
    },

})