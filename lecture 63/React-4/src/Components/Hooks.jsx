import React, { useEffect, useRef } from 'react'

function Hooks() {
  let salary =50000 //variable not a state (state also show same behaviours.)

  let spanEl = useRef() // initiatise

  useEffect(()=>{
    setTimeout(() => {
      //document.getElementById('sal').innerHTML = "33000" not right way in react if use it
spanEl.current.innerHTML = '33000'


    }, 3000);
  })
  return (
    <div>
   Salary is <span id='sal' ref={spanEl}> {salary}</span>
    </div>
  )
}

export default Hooks