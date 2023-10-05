// before ES6 only one variable that is (var) afterthat 3 (var,let,const)
// 1.var
var sumit=100
sumit =200 // reinitial var
console.log(sumit)

var sumit=300 // redeclares
console.log(sumit)


// 2.let
let sam=100
sam=200 // reinitial
console.log(sam)
//   let sam=300  // not redeclares
//   console.log(sam)



// 3.const 
const sum=100
// sum=200 // not reinitials and not redeclares
console.log(sum)


const person={ // error refernce address cannot be changed but inside object can be changed
    username:"sumit kumar",
    lang:"english"
}
console.log(person.username)
console.log(person.lang)

person.lang="hindi"
console.log(person.lang)
  
















































