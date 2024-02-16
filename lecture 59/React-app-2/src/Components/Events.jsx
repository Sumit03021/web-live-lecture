import React from 'react'

function Events() {
  function handleclick(){
    console.log('hello from sumit kumar')
  }
  function del(id){
    console.log(id,"deleted")
  }
  return (
    <div>
      {/* without argument */}
      <button onClick={handleclick}>Click me!</button>
      {/* with arguments callback function inside onclick events. */}
      <button onClick={()=>del(101)}>Delete</button>
    </div>
  )
}

export default Events