const express = require('express');
const User = require('../models/User');
const Product = require('../models/Product');
const {isLoggedIn} = require('../middleware');
const stripe = require('stripe')
('sk_test_51ObzemSAN1sJa92KzbwUGIlfMPC3izaYtvDsO3OplX88TO81eVBWJupn4X3pxtuUWGe7DNdvrinoszkl0lscfWpm00gz3aPWBe')
const router = express.Router();

//display all cart items
router.get('/user/cart',isLoggedIn ,async(req,res)=>{
  let userId = req.user._id;
  let user = await User.findById(userId).populate('cart');
  let totalAmount = await user.cart.reduce((sum, item)=> sum+item.price,0);
  res.render('cart/cart',{user,totalAmount})
})

//add to cart
router.post('/user/:id/add',isLoggedIn , async(req,res)=>{
let {id} = req.params;
let userId = req.user._id;
let user = await User.findById(userId);
let product = await Product.findById(id);

// if(user.cart.length === 0){
//   await user.cart.push(product);
//   await user.save()
// }
  // if(user.cart._id !== id){
    await user.cart.push(product);
    await user.save()
    req.flash('success',`${product.name} added to your cart. ${user.firstName}!`)
  // }

res.redirect(`/products/${id}`)
})

//delete from the cart
router.delete('/user/cart/:id',isLoggedIn ,async(req,res)=>{
let {id} =req.params;
let userId = req.user._id;
let user = await User.findById(userId);
let product = await Product.findById(id);
await user.cart.pop(product);
await user.save();
req.flash('success',`${product.name} deleted from you cart. ${user.firstName}!`)
res.redirect('/user/cart')
})

//checkout page
router.get('/checkout/:id',async(req,res)=>{
let userId = req.user._id;
let user = await User.findById(userId).populate('cart');
let totalAmount = await user.cart.reduce((sum,item)=>sum+item.price ,0);
const session = await stripe.checkout.sessions.create({
  line_items: [
    {
      price_data: {
        currency: 'inr',
        product_data: {
          name: 'T-shirt',
        },
        unit_amount: totalAmount*100,
      },
      quantity: 1,
    },
  ],
  mode: 'payment',
  success_url: 'http://localhost:4242/success.html',
  cancel_url: 'http://localhost:4242/cancel.html',
});

res.redirect(303, session.url);
})

module.exports = router;