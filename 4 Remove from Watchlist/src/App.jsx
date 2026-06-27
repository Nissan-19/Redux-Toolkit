import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fruits } from './data/fruits'
import { addToBasket, removeFromBasket } from './features/fruitBasket/fruitBasketSlice'

const App = () => {
  const dispatch = useDispatch()
  const fruitBasketFruits = useSelector((state)=>state.fruitBasket.items)
  return (
    <div>
      <h1>Fruit Basket</h1>
      <h2>Fruits</h2>
      <ul>{
        fruits.map((fruit)=>(
          <li key={fruit.basketItemId}>
            <span>
              {fruit.name} - {fruit.price}
            </span>
            <button onClick={()=>dispatch(addToBasket({...fruit, basketItemId: crypto.randomUUID()}))}>Add to Basket</button>
          </li>
        ))
        }

      </ul>

      <h2>Basket count:{fruitBasketFruits.length} </h2>

      <h2>Basket items</h2>

      <ul>
        {fruitBasketFruits.map((fruit, index) => (
  <li key={`${fruit.basketItemId}-${index}`}>
    <span>
      {fruit.name} - {fruit.price}
      <button onClick={() => dispatch(removeFromBasket(fruit.basketItemId))}>
        Delete from basket
      </button>
    </span>
  </li>
))}
      </ul>
    </div>
  )
}

export default App
