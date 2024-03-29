import React from 'react'

function Hello() {
  function handleclick(){
    console.log('hello')
  }
  return (
    <div>
      <button onClick={handleclick}>click me</button>
    </div>
  )
}

export default Hello