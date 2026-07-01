import React from 'react'
import { availableArticles } from './data/avalaibleArticles/avaliableArticles'
import { useDispatch, useSelector } from 'react-redux'
import { clearAll, removeArticle, saveArticle } from './features/savedArticlesSlice/savedArticlesSlice'

const App = () => {
  
  const dispatch = useDispatch()
  const savedArticleList = useSelector((state)=>state.savedArticles.savedList)

  return (
    <div>
      <h1>Avaliable Article list</h1>
      <ul>{
        availableArticles.map((singleArticle)=>(
          <li key={singleArticle.id}>
            {singleArticle.name} {singleArticle.pages} 
            <button onClick={()=> dispatch(saveArticle(singleArticle))}>Save to list</button></li>
        ))}
      </ul>
        <h2>Saved Count: {savedArticleList.length}</h2>
        <h2>Saved Articles</h2>
        <ul>{
          savedArticleList.map((savedArticle)=>(
          <li key={savedArticle.id}>
            <span>{savedArticle.name} {savedArticle.pages}</span>
            <button onClick={()=>dispatch(removeArticle(savedArticle.id))}>Remove from list</button>
          </li>
        ))}</ul>
      
        <span>
          {savedArticleList.length > 0 ?
            (
              <button onClick={()=>dispatch(clearAll())}>Clear All</button>
            ):(
              <p>Nothing saved yet</p>
            )
        
          }
        </span>

    </div>
  )
}

export default App
