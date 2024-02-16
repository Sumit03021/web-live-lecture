import React from 'react'

function Students(props) {
  return (
    <div>
      <h1>name: {props.name}</h1>
      <h2>color: {props.color}</h2>
      <h3>num: {props.num}</h3>
    </div>
  )
}

export default Students