import React, { useEffect, useState } from 'react'

function Github({username}) {
let [user,setUser] = useState({imgUrl:"",followers:0,following:0})

//api call
useEffect(()=>{
  fetch(`https://api.github.com/users/${username}`).then(async function(res){
    let data = await res.json();
    let { avatar_url , followers , following } = data;
    setUser(()=>{
      return {
        imgUrl:avatar_url,
         followers:followers,
         following:following,
      }
    })
  })
},[])//in array if use any state or props then put into arrays.
  return (
    <div>
<img src={user.imgUrl} alt="" />
<figure>
  <p>Username: {username}</p>
  <p>Followers: {user.followers}</p>
  <p>Following: {user.following}</p>
</figure>
    </div>
  )
}

export default Github