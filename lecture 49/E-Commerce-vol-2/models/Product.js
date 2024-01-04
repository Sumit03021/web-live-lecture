const mongoose=require('mongoose')

//Schema
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    img:{
       type:String,
       trim:true
    },
    price:{
       type:Number,
       min:0,
       required:true
    },
    description:{
       type:String,
       trim:true
    },
    reviews:[
      {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Review"
    }
   ]
})

// models/collections is js class---objects/document.
// model---> always will be singular and first letter should be capital used in first name.

let Product = mongoose.model('Product',productSchema)

module.exports=Product



























