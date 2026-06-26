import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './features/counter/counterSlice'

const App = () => {
  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch()
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

    </div>
  )
}

export default App
