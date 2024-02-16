import React from 'react'
import { useState } from 'react'

function Counter() {

  let [count,setCount] = useState(0)
  function increase(){
  setCount(count+1)
  }
  function decrease(){
  setCount(count-1)
  }
  function reset(){
  setCount(0)
  }
  return (
    <div>
      <h2>Count : {count}</h2>
    <button onClick={increase}>Increase</button>
    <button onClick={reset}>Reset</button>
    <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default Counter