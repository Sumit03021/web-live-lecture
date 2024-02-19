import React from 'react'
import axios from "axios"
import { useEffect } from 'react'
import { useState } from 'react'

function Right() {
  let [d,setD] = useState("")
  useEffect(()=>{
    axios
    .get("https://api.tvmaze.com/search/shows?q=girls")
    .then(function(res){
      console.log(res)
     setD(res)
       });
  },[])
  return (
    <div>
right  {}
    </div>
  )
}

export default Right