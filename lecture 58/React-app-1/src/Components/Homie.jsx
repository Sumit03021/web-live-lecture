import React from 'react'

function Homie() {
  let a= true;
  let b=false;
  let c= undefined;// undefined not show never
  let rn = Math.random()*10;
  let el;
  if(rn== 7){
    el=1;
  }else{
    el=0;
  }
  return (
    <div>
      {/* {a} not show due to boolean */} 
      <h2>{JSON.stringify(a)}</h2>
      <h1>{el}</h1>
      <h3>{JSON.stringify(c)}</h3>
    </div>
  )
}

export default Homie