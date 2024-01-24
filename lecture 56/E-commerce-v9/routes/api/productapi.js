const express =require('express');
const { isLoggedIn } = require('../../middleware');
const User =require('../../models/User')
const router =express.Router()


router.post('/products/:productId/like',isLoggedIn, async (req,res)=>{
  let {productId} = req.params;
  let user = req.user;
 let isLiked = user.wishList.includes(productId);
 if(isLiked){
 await User.findByIdAndUpdate(req.user._id,{$pull:{wishList:productId}})
 }
 else{
  await User.findByIdAndUpdate(req.user._id,{$addToSet:{wishList:productId}})
 }
 res.status(201).send('ok');
})













module.exports =router;