import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Quotes from '../quotes/Quotes';

function AllQuotes() {
  let [quotes,setQuotes] = useState([])
  useEffect(()=>{
    async function getQuotes(){
  const res =  await  axios.get('http://localhost:8080/allquotes');
 console.log(res,"all quotes api fetched successfully.")
 setQuotes(res.data)
    }
   getQuotes();
  },[])
  return (
    <div>
<h1>All Quotes</h1>
<ul>
  {quotes.map((quote,index)=>{
return <Quotes id={quote._id} key={quote._id} text={quote.text} author={quote.author}/>
  })}
</ul>
    </div>
  )
}

export default AllQuotes