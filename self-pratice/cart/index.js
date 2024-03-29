const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const session = require('express-session')
const flash = require('connect-flash')
const productRoute = require('./routes/product')
const reviewRoute = require('./routes/review')
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const cartRoute = require('./routes/cart')
const likeRoute = require('./routes/like')
const addressRoute = require('./routes/address')
const furnitureRoute = require('./routes/furniture')
const passport = require('passport')
const loaclStrategy = require('passport-local')
const User = require('./models/User')
const {date }= require('joi')

//connect mongodb
mongoose.set('strictQuery',true)
mongoose.connect('mongodb://127.0.0.1:27017/furnitureCart')
.then(()=>{console.log('DB connected')})
.catch((err)=>{console.log(err)})


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
//static files
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

let configSession = {
secret:'key cat',
resave:false,
saveUninitialized:true,
cookies:{
  httpOnly:true,
  expires:Date.now() + 7*24*60*60*1000,
  maxAge:7*24*60*60*1000
}
}

app.use(session(configSession));
app.use(flash());

//use serialize and deserialize of model for the passport session support
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//use static authenticate of model in localStrategy
passport.use(new loaclStrategy(User.authenticate()))

app.use((req,res,next)=>{
  res.locals.currentUser = req.user;
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
})


app.get('/',(req,res)=>{
  res.send("hello world")
})

//Routes
app.use(productRoute);
app.use(reviewRoute);
app.use(authRoute);
app.use(userRoute);
app.use(cartRoute);
app.use(likeRoute);
app.use(addressRoute);
app.use(furnitureRoute);

let PORT=8080;
app.listen(PORT,()=>{
  console.log('server connected at 8080.')
})