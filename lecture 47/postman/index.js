const express=require('express')
const app=express()
const mongoose=require('mongoose')
// schema always created as objects and then new schema with any name for the model
const {Schema}=mongoose
const students=new Schema({
    name:String,
    rollNo:Number
})
// then create model in which first word use should be capitalise that show on model,other is the that name which taken as new schema objects .
const student=mongoose.model('Student',students)
mongoose.connect('mongodb://127.0.0.1:27017/try')
let student1=new student({name:'sumit',rollNo:1})
student1.save()
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






















