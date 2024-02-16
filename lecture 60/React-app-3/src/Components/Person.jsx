import React from 'react'

function Person(props) {
  return (
    <div>
      <h1>Name : {props.name}</h1>
      <h2>age : {props.age}</h2>
    </div>
  )
}

export default Person