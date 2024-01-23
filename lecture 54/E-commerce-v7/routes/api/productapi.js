const express =require('express');
const { isLoggedIn } = require('../../middleware');
const User =require('../../models/User')
const router =express.Router()


router.post('/products/:id/like',isLoggedIn, async (req,res)=>{
  let {id} = req.params;
  let user = req.user;
 let isLiked = user.wishList.includes(id);
 if(isLiked){
 await User.findByIdAndUpdate(req.user._id,{$pull:{wishList:id}})
 }
 else{
  await User.findByIdAndUpdate(req.user._id,{$addToSet:{wishList:id}})
 }
 res.status(201).send('ok');
})













module.exports =router;