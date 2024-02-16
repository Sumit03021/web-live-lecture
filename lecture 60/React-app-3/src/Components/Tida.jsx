import React from 'react'
import { useState } from 'react'

function Tida() {
  return (
    <div>
<Head task="do roll" />
<Head task="do sniff" />
<Head task="do bark" />
<BadaHead task="do jump" />
    </div>
  )
}

function Head({task}){
  return <h1>Title: {task} </h1>
}

function BadaHead({task}){
  let [titl,setTitl]=useState(task)
  function handleclick(){
setTitl(Math.floor(Math.random()*10))
  }
  return (
    <>
    <Head task={titl} />
      <button onClick={handleclick}>Click</button>
    </>
  )
}
export default Tida