import React, { useState } from 'react'

function Person(props) {
  let [username,setUsername]=useState('sam')
  function handleclick(){
    setUsername(Math.floor(Math.random()*10))
  }
  return (
    <div>
      <h1>name: {props.name}</h1>
      <h2>age: {props.age}</h2>
      <button onClick={handleclick}>click</button>
    </div>
  )
}

export default Person