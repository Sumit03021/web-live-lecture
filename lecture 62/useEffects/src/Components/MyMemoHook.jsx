import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'

function MyMemoHook() {
  let [count,setCount] =useState(0);
  let [inp,setInp] = useState(0);

function handleChange(e){
setInp(e.target.value)
}
function handleClick(){
  setCount(count++)
}

// let ans =0;
// for(let i=1;i<=inp;i++){
// ans = ans + i;
// console.log("loop")
// }

let loop = useMemo(()=>{
  let ans =0;
  for(let i=1;i<=inp;i++){
    ans = ans + i;
    console.log("loop")
  }
},[inp])

  return (
    <div>
<input onChange={handleChange} type="text"value={inp}/>
<h1>Sum till that number: {loop}</h1>
<button onClick={handleClick}>Counter: {count}</button>
  </div>
  )
}
//use memo--- avoid heavy looping problem in which remembering previous input evaluated value till new input value changed for state and rerendering the pages show same value without again looping calculations etc.

export default MyMemoHook;