import React from 'react'
import { useCallback } from 'react';
import { useState,memo } from 'react'

function MyCallBack() {
  let [count,setCount] = useState(0);
  // let a=1; referncally same

  // function a(){
  //   console.log("hi i am usecallback")
  // }

let a = useCallback(function(){
  console.log("hi i am usecallback")
},[])

  return (
    <div>
<Demo b={a} />
<button onClick={()=>setCount(count++)}>Click {count}</button>
    </div>
  )
}

let Demo = memo(function ({b}){
  return(
    <div>
      {/* <h1>hi {b}</h1> references same */}
      <h1>hi {b()}</h1>
    </div>
  )
})

export default MyCallBack