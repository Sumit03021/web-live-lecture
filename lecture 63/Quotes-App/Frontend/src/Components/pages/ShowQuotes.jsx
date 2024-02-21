import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

function ShowQuotes() {
  let [quote,setQuote] = useState({ author:"" , text:"" })
  const params = useParams();
  useEffect(()=>{
   async function fetchQuote(){
 let res = await axios.get(`http://localhost:8080/quotes/${params.id}`)
//  console.log(res.data)
 let { author , text} = res.data;
 setQuote({ author , text })
    }
    fetchQuote();
  },[]);

  return (
    <div>
<h2>Quote: {quote.text}</h2>
<p>Author: {quote.author}</p>
    </div>
  )
}

export default ShowQuotes