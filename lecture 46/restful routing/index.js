const express=require('express');
const app=express();
const path=require('path');
const methodOverride=require('method-override')// for put ,patch, delete methods.

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
app.use(methodOverride('_method')) // use for method overriding
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

//task-4 --to show particular comment in db/array
app.get('/comments/:commentid',(req,res)=>{
    let {commentid}=req.params
    let foundComment=comments.find((comments)=>{return comments.id==commentid})// == flexible in number and string but === rigid in number to number ad string to string.
    res.render('show',{foundComment})
})

//task-5 ---to show a edit form particular comment
app.get('/comments/:commentid/edit',(req,res)=>{
    let {commentid}=req.params
    let foundComment=comments.find((comments)=>{return comments.id==commentid})
    res.render('edit',{foundComment})
})

// task-6 update by using patch(partial change) and put (full change)----to actuallly edit on db/array.
app.patch('/comments/:commentid',(req,res)=>{
    let {commentid}=req.params
    let foundComment=comments.find((comments)=>{return comments.id==commentid})
    let {comment}=req.body // textarea name take as object in it. and require to method set as post
    // then  form action is as '/comments/<%=foundComment.id%>?_method=PATCH'
    foundComment.comment=comment
    res.redirect('/comments')
})

//task-7 actually delete comments form the db/array.
app.delete('/comments/:commentid',(req,res)=>{
    let {commentid}=req.params
    // also create form into the index.ejs file to delete comment.
    comments=comments.filter((comment)=>{return comment.id != commentid})
    res.redirect('/comments')
})




app.listen(8080,()=>{
    console.log("server connected at port 8080")
})






















