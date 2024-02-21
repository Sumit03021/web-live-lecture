const express = require('express');
const router = express.Router();
const Quote = require('../Models/Quote')

router.get('/allquotes',async (req,res)=>{
  try{
let allQuotes = await Quote.find({});
res.status(200).json(allQuotes)
  }
  catch(e){
    res.status(400).json({msg: "Something went wrong in all quotes"})
  }
})

router.post('/addquotes',async(req,res)=>{
  try{
 let {author,text} = req.body;
 let newQuote = await Quote.create({author,text})
 console.log(newQuote,"newQuote")
 res.status(201).json({msg:"New Quote created successfully."})
  }
  catch(e){
    res.status(400).json({msg:"Somthing went wrong in add quotes"})
  }
})

router.get('/quotes/:id',async(req,res)=>{
  let quote = await Quote.findById(req.params.id);
  res.status(200).json(quote);
})









module.exports = router;