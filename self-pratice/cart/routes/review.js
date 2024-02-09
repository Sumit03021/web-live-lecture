const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Review = require('../models/Review');
const {validateReview} = require('../middleware');
const {isLoggedIn} =require('../middleware')

// actually adding reviews
router.post('/products/:id/review',isLoggedIn ,validateReview ,async(req,res)=>{
  try{
    let {id} = req.params;
    let product = await Product.findById(id);
    let {rating,comment} =req.body;
    let newReview = new Review({rating,comment,userId:req.user._id});
    await product.reviews.push(newReview);
    await newReview.save();
    await product.save();
    req.flash('success',`${newReview.userId.firstName} added own review for ${product.name}.`)
    res.redirect(`/products/${id}`);
  }
  catch(e){
    res.status(500).render('error',{error:e.message});
  }
})

router.delete('/review/:id',isLoggedIn ,async(req,res)=>{
  try{
    let {id} = req.params;
    await Review.findByIdAndDelete(id);
    res.redirect('/products')
  }
  catch(e){
    res.status(500).render('error',{error:e.message})
  }
  
})



module.exports = router;