const mongoose = require("mongoose")
const passportLocalMongoose =require('passport-local-mongoose')

const userSchema =new mongoose.Schema({
  //usename and password already used in the passport-local
  email:{
    type:String,
    trim:true,
    required:true
  },
  role:{
     type:String,
     default:'Buyer'
  },
  gender:{
    type:String,
    trim:true,
    required:true
  },
  wishList:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:'Product'
    }
  ]
})

userSchema.plugin(passportLocalMongoose) //always apply on schema

let User = mongoose.model('User',userSchema)
module.exports = User;
















