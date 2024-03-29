import React from 'react'
import { useState } from 'react'
import Person from './Person'
function Logout() {
// let username ='sumit'
// function handleclick(){
//   console.log(username)
//   username="mohit"
//   console.log(username)
// }
let [username,setUsername] = useState("sumit")

function handleclick(){
  setUsername("mohit")
}

  return (
    <div>
      <h1>Logout page</h1>
      <Person name={username} age="21"/>
      <button onClick={handleclick}>Logout</button>
    </div>
  )
}

export default Logout