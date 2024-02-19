import React from 'react'
import { useState } from 'react';

function Effects() {
  let [d,setD] = useState("")
  fetch("https://api.tvmaze.com/search/shows?q=girls").then(async function(res){
    let data = await res.json();
    console.log(data)
    // setD(res)
  })
  return (
    <div>
api call kar raha hu.
    </div>
  )
}

export default Effects