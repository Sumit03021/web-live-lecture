import React from 'react'
import { memo } from 'react'
import { useState } from 'react'

function Memo() {
  let [t,setT]= useState("hello memo")
  function handleclick(){
    setT(Math.floor(Math.random()*10))
  }
  return (
    <div>
<MyMemo titl={t} />
<button onClick={handleclick}>Click</button>
<MyMemo titl="Bye Memo" />
<MyMemo titl="goodbye Memo" />
<MyMemo titl="hye Memo" />
    </div>
  )
}

// function MyMemo({titl}){
//   return (
//     <div>
// <h1>title: {titl}</h1>
//     </div>
//   )
// }
//memoize the props-----tracking of the props for rerenderings.
const MyMemo = memo(function ({titl}){
  return (
    <div>
<h1>title: {titl}</h1>
    </div>
  )
}

)

export default Memo