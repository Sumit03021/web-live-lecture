const express = require('express')
const app = express();
const mongoose = require('mongoose')
const seedDB = require('./seed')
const cors = require('cors')
const QuotesRoutes = require('./apis/quotesRoute')



mongoose.connect("mongodb://127.0.0.1:27017/quotes")
.then(()=>{
  console.log("DB connected");
})
.catch((err)=>{
  console.log("error in DB",err);
})

app.use(cors({
  origin:["http://localhost:5173"]
}));// call for anyone accepted if you want to open only for own projects

app.use(express.json()); //for parsing application/json
app.use(express.urlencoded({extended:true})) // for parsing application/x-www-form-urlencoded.

app.get('/',(req,res)=>{
  res.send("welcome to backend")
})

app.use(QuotesRoutes)


// seedDB()

const PORT = 8080;
app.listen(PORT,(req,res)=>{
  console.log("Backend server connected")
})














