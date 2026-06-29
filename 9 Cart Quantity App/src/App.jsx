import React from 'react'
import { avaliableProducts } from './data/avaliableProducts'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, clearCart, decreaseQuantity, deleteItem } from './features/savedCart/savedCartSlice'

const App = () => {

  const dispatch = useDispatch()
  const CartlistItems = useSelector((state)=>state.savedProducts.savedList)

  return (
    <div>
      <h1>Cart list</h1>

      <h2>Avaliable Products</h2>
      <li>
        {avaliableProducts.map((singleItem)=>(
          <ul key={singleItem.id}>
            <span>{singleItem.name}</span>

            <button onClick={()=>dispatch(addToCart(singleItem))}>Add To Cart</button>
          </ul>
        ))}
      </li>
      <h2>Cart items: {CartlistItems.length}</h2>
      <h2>Cart Items</h2>
      <ul>
        {CartlistItems.map((cartItem)=>(
          <li key={cartItem.id}>
            <span>{cartItem.name} - Quantity: {cartItem.quantity}</span>
            <button onClick={()=>dispatch(deleteItem(cartItem.id))}>Delete</button>
            <button onClick={()=>dispatch(decreaseQuantity(cartItem.id))}>Decrese Quantity</button>
          </li>
        ))}</ul>

        {CartlistItems.length !== 0? (
          <button onClick={()=>dispatch(clearCart())}>Clear Cart</button>
        ):(
          <p>Cart is empty</p>
        )
        }

    </div>
  )
}

export default App
