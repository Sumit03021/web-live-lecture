const express =  require('express');
const User =require('../models/User')
const passport =require('passport')
const router = express.Router();

router.get('/register',(req,res)=>{
  res.render('auth/signup')
})

router.post('/register',async (req,res)=>{
  let {username,password,email,role, gender}=req.body;
   let user =new User({username, email,gender,role});
   let newUser = await User.register(user,password);
    res.redirect('/login')
})

router.get('/login',(req,res)=>{
  res.render('auth/login')
})

router.post('/login',
passport.authenticate('local',
{
  failureRedirect:'/login',
  failureMessage:true
}),
(req,res)=>{
  req.flash('success',`welcome back ${req.user.username}`)
  res.redirect('/products')
})

router.get('/logout',(req,res)=>{
  req.logOut(()=>{
    req.flash('success','Thank you for visiting')
    res.redirect('/login')
  })
})









module.exports = router;