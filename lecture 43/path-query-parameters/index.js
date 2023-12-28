// https:reddit.com/r/cats
// protocols/request url/permanent path/temprary paths.
const express=require('express')
const app=express();

app.get('/r/cat',(req,res)=>{
    res.send("cat")
})
app.get('/r/dog',(req,res)=>{
    res.send("dog")
})

app.listen(8080,()=>{
    console.log("server is connected at port 8080.")
})

// paths parameter---/r/:
app.get('/r/:machar',(req,res)=>{
    // console.log(req)
    let {machar}=req.params
    console.log(req.params)//objects that name use.
    res.send(`request sent at ${machar}`)
})

// query parameter---/search/?
app.get('/search',(req,res)=>{
    // console.log(req)
    let {bhagwan,wife}=req.query
    res.send(`request sent ${bhagwan} and ${wife}`)
})




















