import React from 'react'

function Bhai() {
  let arr = [10,20,30,40]
  let obj = {a:10}
  let arr2 = [{a:10},{a:20},{a:30}]
  let arr3 = [{a:10},{a:20,b:30},{c:40,d:90,e:200}]
  return (
    <div>
      {arr}
      {/* <h1>{obj}</h1> not show */}
      <h2>{obj.a}</h2>
      {/* <h3>{arr2}</h3> not show */}
      <h3>{JSON.stringify(arr2)}</h3>
      {arr2.map((item,index)=>{
        return <h4>{item.a}</h4>
      })}
      {arr3.map((item,index)=>{
        return Object.values(item).map((itn,index)=>{
          return <h5>{itn}</h5>
        })
      })}
    </div>
  )
}

export default Bhai