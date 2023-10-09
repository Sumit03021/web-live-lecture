// access variable/function before its declaration
let a // declare
console.log(a) // no hoisting
a=100 // reinitialize

// hoisting done in all cases (var,let,const )
// var(undefined)------let(reference error---cannot access before initialize)


console.log(sam) // hoisting
b() // hoisting
var sam=100;  // undefined value -----access before use.-----hoisting
function b(){
    console.log("inside the b");
}

// console.log(sumit)----(refernce errors)-----hoisting done but DTZ(dead temporal zone)----cannot access
let sumit=100 // cannot access before initialization the value in the 'let'--reference errors(half infomation)
//  console.log(sumit1)-----sumit1 is not defined(refernce errors due to not declare)


 // refernce errror ----1. cannot access before initialize (let)-----DTZ
 // 2. sumit1 is not defined-----refernce errors.(not declared)
 
// console.log(same) ------const---refernce errors
const same=100; // same reference errors cannot access also in const before initialize(DTZ)
// let & const ----hoisting----- yes,but acts differently i.e. in DTZ(interviewers)


var Sumit=100;
function sams(){
    console.log(Sumit)
}
sams()


 











































