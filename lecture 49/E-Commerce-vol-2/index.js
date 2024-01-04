const express=require('express')
const app=express()
const path=require('path')
const mongoose=require('mongoose')
const seedDB=require('./seed')
const productRoutes=require('./routes/product')
const methodOverride=require('method-override')
const reviewRoutes =require('./routes/review')


mongoose.connect('mongodb://127.0.0.1:27017/julyBatch')
.then(()=>{console.log("db connected")})
.catch((err)=>{"error is: ",err})


app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
// seedDB()
app.use(productRoutes)
app.use(reviewRoutes)
const port=8080
app.listen(port,()=>{
    console.log(`server connected at port ${port}`)
})


































