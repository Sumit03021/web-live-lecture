const mongoose = require('mongoose')
const {Schema} = require('mongoose')

let quoteSchema = new mongoose.Schema({
  author:{
    type:String,
    trim:true,
    required:true,
  },
  text:{
    type:String,
    trim:true,
    required:true,
  }
})

const Quote = mongoose.model("Quote",quoteSchema);
module.exports = Quote;