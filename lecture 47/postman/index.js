const express=require('express')
const app=express()
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/class')
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("hello world")
})

app.post('/',(req,res)=>{
    const data=req.body
    console.log('data',data)
    res.send("posting is sended.")
})



//learn how to use postman app.










app.listen(8080,()=>{
    console.log("server connected at port 8080")
})






















