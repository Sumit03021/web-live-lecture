const mongoose =require('mongoose');
const Quote = require('./Models/Quote');

let dummyQuotes = [
{
  author:"samarth vohra",
  text:"aadmi ka jeevan sangarsh hai,harna ya jeetna nahi"
},
{
  author:"Maverick",
  text:"Sirf ek insaan se aapko pyaar milega aur vo tum ho"
},
{
  author:"shubham kumar",
  text:"time , tide , JS wait for none"
},
{
  author:"Jatin",
  text:"hard times, make hard men, hard men make easy times, easy times make world happy"
}
]

async function seedDB(){
await Quote.insertMany(dummyQuotes)
console.log("SeedDB worked properly.")
}

module.exports = seedDB;


