const express=require('express')
const app=express()

app.listen(8080,()=>{
console.log("server is started.")
})

app.use((req,res)=>{
    console.log("server is accepted the requests.")
    res.send("route hit.")
    
})


//app.use('path'---shows response only on that path other shows none,()=>{})






