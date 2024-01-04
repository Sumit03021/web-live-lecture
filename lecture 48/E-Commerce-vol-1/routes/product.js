const express=require('express')
const Product= require('../models/Product')
const router=express.Router()
//index
router.get('/products',async (req,res)=>{
  let products= await Product.find()
  res.render('index',{products})
})
//new form
router.get('/product/new',(req,res)=>{
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
   let foundProduct=await Product.findById(id);
   res.render('show',{foundProduct})
})

//show edit form
router.get('/products/:id/edit' , async(req,res)=>{
  let {id} = req.params;
  let foundProduct = await Product.findById(id);
  res.render('edit' , {foundProduct})
})

//actully changing the product
router.patch('/products/:id' , async(req,res)=>{
  let {id} = req.params;
  let {name , img , price , desc} = req.body;
  await Product.findByIdAndUpdate(id , {name , img , price , desc} );
  res.redirect('/products')
})

//deleting
router.delete('/products/:id' , async(req,res)=>{
  let {id} = req.params;
  await Product.findByIdAndDelete(id);
  res.redirect('/products')
})












module.exports = router












