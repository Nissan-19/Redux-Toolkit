import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import{products} from "./data/products"
import { decrement, increment, reset } from './features/counter/counterSlice'
import { addToWatchlist } from './features/watchlist/watchlistSlice'

const App = () => {
  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch()
  const watchlistItems = useSelector((state)=>state.watchlist.items)

  return (
    <div>
      <h1>Redux Counter App</h1>
      <h2>Count: {count}</h2>

      <button onClick={()=>dispatch(increment())}>
        Increment
      </button>

      <button onClick={()=>dispatch(decrement())}>
        Decrement
      </button>

      <button onClick={()=>dispatch(reset())}>
        Reset
      </button>

      <br />
      <br />

      <h1>Redux Watchlist Practice</h1>
      <h2>Products</h2>

      <ul>{
            products.map((product)=>(
              <li key={product.id}>
                <span>
                  {product.name} - €{product.price}
                </span>

                <button onClick={()=>dispatch(addToWatchlist(product))}>Add to Watchlist</button>
              </li>
              
            ))}
        </ul>

        <h2>Watchlist Count:{watchlistItems.length}</h2>

        <h2>Watchlist Items</h2>

<ul>
  {watchlistItems.map((item) => (
    <li key={item.id}>
      {item.name} - €{item.price}
    </li>
  ))}
</ul>

    </div>
    
  )
}

export default App
