const express =require("express")
const app =express();

const cookieParser =require('cookie-parser')

app.use(cookieParser('hi i am your secret teacher'))
app.get('/setcookies',(req,res)=>{
  res.cookie('mode','dark')
  res.cookie('location','delhi')
  res.cookie('username','samarth')
  res.cookie('age',23)
  res.cookie('pass','baba rickshaw wala',{signed:true})
  res.send("maine cookies bhej di hai")
})

app.get('/getcookies',(req,res)=>{
  console.log(req.cookies)
  // not show signed cookies.
  // but access by calling signedcookies
  res.send(req.signedCookies)
})









app.listen(8080,()=>{
  console.log("server connected at 8080.")
})








