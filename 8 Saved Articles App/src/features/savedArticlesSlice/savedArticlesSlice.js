import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    savedList : [],
}

const savedArticleSlice = createSlice({
    
    name: "SavedArticles",
    initialState,
    reducers :{

        saveArticle:(state,action)=>{
            const articleAlreadySaved = state.savedList.some(
                (savedArticle)=> savedArticle.id === action.payload.id
            )
            
            if(!articleAlreadySaved){
            state.savedList.push(action.payload)
            }
        },

        removeArticle:(state,action)=>{
            state.savedList=state.savedList.filter((savedArticle)=>savedArticle.id !==action.payload)
        },

        clearAll:(state,action)=>{
            state.savedList = []
        },
    },
})

export const {saveArticle, removeArticle, clearAll} = savedArticleSlice.actions
export default savedArticleSlice.reducer

