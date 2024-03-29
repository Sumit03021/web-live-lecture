import React, { createContext, useContext } from 'react'

let myContext = createContext();


function UseContextHook({name}) {
  
  return (
    <div>
      <myContext.Provider value={name}>
<Component1/>
      </myContext.Provider>
    </div>
  )
}

function Component1(){
  return(
    <div>
      <h1>this is 1 component.</h1>
      
      <Component2/>
    </div>
  ) 
}
function Component2(){
  return(
    <div>
      <h1>this is 2 component.</h1>
      <Component3/>
    </div>
  ) 
}
function Component3(){
  let hello = useContext(myContext)
  return(
    <div>
      <h1>this is 3 component.</h1>
      <h1>hi my name is {hello} </h1>
    </div>
  ) 
}
export default UseContextHook