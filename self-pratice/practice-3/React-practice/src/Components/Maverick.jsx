import React from 'react'
import { useState } from 'react'

function Maverick() {
  let [titl,setTitl] =useState("do bhau bhau");
  function handleTodo(){
setTitl(Math.floor(Math.random()*10))
  }
  return (
    <div>
<MavKeTodo title= {titl} />
<button onClick={handleTodo}>Click</button>
<MavKeTodo title="hi live" />
<MavKeTodo title="hello world" />
    </div>
  )
}

function MavKeTodo(props){
  return(
    <h1>task: {props.title} </h1>
  )
}
export default Maverick