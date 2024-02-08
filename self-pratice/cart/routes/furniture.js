const express = require('express');
const Product = require('../models/Product');
const {isLoggedIn} = require('../middleware');
const router = express.Router();

router.get('/:type',async(req,res)=>{
  try{
    let {type} = req.params;
    // console.log(type)
    let products = await Product.find({type:`${type}`});
    // console.log(req.params);
    res.render('products/furniture',{products})
  }
  catch(e){
    res.status(500).render('error',{error:e.message})
  }
})

//executive chairs
router.get('/furniture/:id',async(req,res)=>{
  let {id} = req.params;
  let products = await Product.find({category:`${id}`})
  res.render('products/furniture',{products})


  // res.send('ok')
})

router.get('/furniture/:type/high',async(req,res)=>{
  let {type} = req.params;
  console.log(type)
  let products = await Product.find({type:`${type}`}).sort({price:-1})
  console.log(products[0])
  res.render('products/furniture',{products})
  // res.send('ok')
})

router.post('/furniture/:type/:collection',async(req,res)=>{
  let {type,collection} = req.params;
  // let {myCollection} = req.body;
  let products = await Product.find({$and:[{type:`${type}`},{myCollection:`${collection}`}]});
  // console.log(myCollection)
  res.render('products/furniture',{products})
})






module.exports = router;