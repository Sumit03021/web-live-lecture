
function sum(num1,num2){
    console.log(num1) // undefined
    console.log(num2) // umdefined
    return num1 +num2
}
let output=sum() // no arguments
console.log(output)

let final=sum(10) // 1 arguments
console.log(final)

function sums(num1,num2=20){
    console.log(num1) // undefined
    console.log(num2) // umdefined
    return num1 +num2
}
 let finals=sums(10)
 console.log(finals)





























