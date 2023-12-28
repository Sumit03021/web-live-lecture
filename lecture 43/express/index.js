const express=require('express')
const app=express()

const port=8080;
app.listen(port,()=>{
    console.log("server is connected at port 8080.")
})

//---------------methods express-----------

// app.use('/cat',(req,res)=>{
//     res.send("hi i am middleware.")
// })
// /cat path show response and also if /cat/sumit then also shows due to goes from same path.

//GET---path,cb fucntion compulsory
// app.get('/sumit',(req,res)=>{
//     res.send("hi i am sumit kumar")
// })


// app.get('/cat',(req,res)=>{
//     res.send("get from /cat.")
// })
// first goes due to first response then afterthat none of other matters call or not.---top to bottom approach.//
// get /cat works only on particular path but use /cat works on /cat/ anything.

// -----------middleware-advances---------------
//middleware never/should not response.send()--just works as middlemen to check path is right or not example: product buy after login path (check) by the middlewares.

app.use('/cat',(req,res,next)=>{
console.log("hi i am cat middleware")
next()
})

app.get('/cat',(req,res)=>{
    res.send("hi i am sumit kumar thank you")
})

app.get('*',(req,res)=>{// left for the all over paths.
    // remember always run that code on bottom to read extra responses.
    res.send("page not found 404")
})






