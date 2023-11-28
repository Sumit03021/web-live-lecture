let math = require('./index');
console.log(math)

//when u donot export anything from ur file then empty object is being sent;

console.log(math.pi)
console.log(math.ans1(5))
console.log(math.ans2(3,6))

let {pi,ans1,ans2}=math
console.log(pi)
console.log(ans1(8))
console.log(ans2(7,8))

//let {pi,ans1,ans2}=require('./index')
// module.exports send anything from one to other files

// let name= math

// console.log(name)





