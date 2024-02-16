import React from 'react'

function Person() {
  let rn = Math.floor(Math.random()*10);
  let luck = 7;
  let el;
  if(rn === luck){
    el = <h2>You win</h2>
  }else{
    el = <h2>Better luck next time</h2>
  }
  return (
    <div>
{/* <h1>Hello sam ,{rn} -&gt; {el}</h1> can i use if else inside this */}
<h1>
  {/* ternary operators */}
  {
    rn=== luck ? (
      <h1>You won !!</h1>
    ) : (
<p>Better luck next time !!</p>
    )
  }
</h1>
    </div>
  )
}

export default Person