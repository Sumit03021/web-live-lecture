const express=require('express');
const app=express();
const path=require('path');


let comments=[
{
 id:0,
 uername:"samarth",
 comment:"live share start karo"    
},
{
 id:1,
 username:"sumit",
 comment:"hare ram hare krishna"
},
{
id:2,
username:"vikas",
comment:"aaj park chalte hai"
},
{
id:3,
username:"anubhav",
comment:"mohan pyaare dekhi kya"
},
{
id:4,
username:"mohan",
comment:"kya hua aaj class main"
}
]
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))

//restful route a/c to tables
//task-1  show all comments where are my comments
app.get('/comments',(req,res)=>{
    res.render('index',{comments})
})

//task-2 show a form for new comments
app.get('/comments/new',(req,res)=>{
    res.render('new')
})

//task-3 --to actually add comments in the database.---req.body
app.post('/comments',(req,res)=>{
    let {username,comment}=req.body
    comments.push({username,comment,id:comments.length})
// res.send(req.body)// by default--undefined store to change data we use middleware
res.redirect('/comments')
})














app.listen(8080,()=>{
    console.log("server connected at port 8080")
})






















