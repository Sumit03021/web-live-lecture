const express = require('express');
const Product = require('../models/Product');
const {isLoggedIn} = require('../middleware');
const router = express.Router();

router.get('/:type',async(req,res)=>{
  try{

    let {type} = req.params;
    let products = await Product.find({type:`${type}`});
    // console.log(req.params);
    res.render('products/index',{products})
  }
  catch(e){
    res.status(500).render('error',{error:e.message})
  }
})









module.exports = router;