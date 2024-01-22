const express=require('express')
const Product= require('../models/Product')
const Review =require('../models/Review')
const {validateProduct}=require('../middleware')
const router=express.Router()
//index
router.get('/products',async (req,res)=>{
  try{
  let products= await Product.find()
  res.render('index',{products})
  }
  catch(e){
    res.render('error',{err:e.message})
  }
})
//new form
router.get('/product/new',(req,res)=>{
  try{
    res.render('new')
  }
  catch(e){
    res.render('error',{err:e.message})
  }
})

// actually adding products.
router.post('/products',validateProduct,async (req,res)=>{
  try{
  let {name,img,price,description}=req.body
  await Product.create({name,img,price,description})
  res.redirect('/products')
  }
  catch(e){
    res.render('error',{err:e.message})
  }
})

//show particular products
router.get('/products/:id',async (req,res)=>{
  try{
   let {id}=req.params
   let foundProduct=await Product.findById(id).populate('reviews');
   res.render('show',{foundProduct,success:req.flash('msg')})
  }
  catch(e){
    res.render('error',{err:e.message})
  }
})

//show edit form
router.get('/products/:id/edit' , async(req,res)=>{
  try{
  let {id} = req.params;
  let foundProduct = await Product.findById(id);
  res.render('edit' , {foundProduct})
}
catch(e){
  res.render('error',{err:e.message})
}
})

//actully changing the product
router.patch('/products/:id' ,validateProduct, async(req,res)=>{
  try{
  let {id} = req.params;
  let {name , img , price , desc} = req.body;
  await Product.findByIdAndUpdate(id , {name , img , price , desc} );
  res.redirect('/products')
}
catch(e){
  res.render('error',{err:e.message})
}
})

//deleting
router.delete('/products/:id' , async(req,res)=>{
  try{
  let {id} = req.params;
  let foundProduct=await Product.findById(id);
  // before delete the product first deleting the reviews.
  for(let ids of foundProduct.reviews){
    await Review.findByIdAndDelete(ids);
  }
  await Product.findByIdAndDelete(id);
  res.redirect('/products')
}
catch(e){
  res.render('error',{err:e.message})
}
})












module.exports = router












