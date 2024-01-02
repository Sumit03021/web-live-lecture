const express=require('express')
const Product= require('../models/Product')
const router=express.Router()
//index
router.get('/products',async (req,res)=>{
  let products= await Product.find()
  res.render('index',{products})
})
//new form
router.get('/products/new',(req,res)=>{
    res.render('new')
})

// actually adding products.
router.post('/products',async (req,res)=>{
  let {name,img,price,description}=req.body
  await Product.create({name,img,price,description})
  res.redirect('/products')
})

//show particular products
router.get('/products/:id',async (req,res)=>{
   let {id}=req.params
   let foundProduct=await Product.findById({id});
   res.render('show',{foundProduct})
})














module.exports=router












