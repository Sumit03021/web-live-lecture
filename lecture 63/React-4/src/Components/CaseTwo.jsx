import React, { useRef, useState } from 'react'

function CaseTwo() {
const [count,setCount] = useState(0);

let countRef = useRef(0)

function handleIncrease(){
  setCount(count +1) //render-2 --not maintain state 
  console.log("State",count) //render-1
}

function handleIncrease2(){
// console.log(countRef.current)
countRef.current += 1;
console.log("refernce: ",countRef.current)
}

  return (
    <div>
      Count-1: {count}
      <br/>
      Count-2: {countRef.current}
      <br/>
<button onClick={handleIncrease}>Click-1</button>
<br/>
<button onClick={handleIncrease2}>Click-2</button>
    </div>
  )
}

export default CaseTwo