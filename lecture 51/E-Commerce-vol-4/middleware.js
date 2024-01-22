const {productSchema,reviewSchema}=require('./schema.js')

const validateProduct = (req,res,next)=>{
  let {name,img,price,description}=req.body
  const {error}=productSchema.validate({name,img,price,description})
  if(error){
    const msg = error.details.map((err)=>err.message).join(",")
    return res.render('error',{err:msg})
  }
  next();
}

const validateReview =(req,res,next)=>{
  let {rating,comment}=req.body
  const {error}=reviewSchema.validate({rating, comment})
  if(error){
    const msg =error.details.map((err)=>err.message).join(",")
    return res.render('error',{err:msg})
  }
  next();
}

module.exports ={validateProduct,validateReview}
















