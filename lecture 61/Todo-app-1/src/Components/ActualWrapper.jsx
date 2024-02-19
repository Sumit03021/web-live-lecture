import React from 'react'

function ActualWrapper({children}) {
  return (
    <div style={{border:"2px solid red",backgroundColor:"yellow"}}>
{children}
    </div>
  )
}

export function ChotaWrapper({children}){
  return(
    <div>
      <h1>Hello h1</h1>
      <h2>Hello h2</h2>
      {children}
    </div>
  )
}
export default ActualWrapper