const express=require('express')
const app=express()
const path=require('path')

let arr=['hi','hello','bye']
let rn=Math.floor(Math.random()*25+6);
let todo=['go to gym','study time','go to shopping','running','cleaning']
// templating engine use ejs
app.set('view engine','ejs');

// views path locate from dirname /views.---process.cwd() --not use  due to from 2 back position we cannot access correct.
app.set('views',path.join(__dirname,'views'));

// root route hit 
app.get('/',(req,res)=>{
    res.render('app')//to show response.
})

// stars
app.get('/star',(req,res)=>{
    res.render('star',{arr})// for get data store into star.ejs
})
//random number
app.get('/random',(req,res)=>{
    res.render('random',{rn})
})
//todolist
app.get('/todolist',(req,res)=>{
    res.render('todolist',{todo})
})

app.listen(8080,()=>{
    console.log("server connected at port 8080")
})


























