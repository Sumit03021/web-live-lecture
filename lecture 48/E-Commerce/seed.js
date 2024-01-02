const mongoose=require('mongoose')
const Product = require('./models/Product')

const products=[
    {
        name:"iphone 15 pro",
        img:"https://unsplash.com/photos/an-iphone-box-sitting-on-top-of-a-blanket-qJ_kVbrnWDs",
        price:150000,
        description:"very costly phone"
    },
    {
        name:"macbook pro",
        img:"https://unsplash.com/photos/a-laptop-computer-sitting-on-top-of-a-white-bed-zR6r-CpCnmg",
        price:200000,
        description:"very future making"
    },
    {
        name:"apple pencil",
        img:"https://unsplash.com/photos/person-drawing-woman-character-byoBbHSlP5U",
        price:12000,
        description:"i can write future"
    }
]


async function seedDB(){
   await Product.insertMany(products)
   console.log("DB seeded")
}

module.exports=seedDB;































