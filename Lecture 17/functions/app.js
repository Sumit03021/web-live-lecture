// function can reuse multiple times
// int float etc like datatype not use in function to declare in js(just call functions)

// function defination for declarations
function sum() {
let num1=10
let num2=20
console.log(num1 + num2)
}
// multiple times can call fucntions
sum()
sum()
sum()


function sums(num3) { // parameter
    let num1=10
    let num2=20
    console.log(num1 + num2+ num3)
    }
    // multiple times can call fucntions
    sums(50) //arguments
    sums(45) //arguments
    sums(30) // arguments
    
// after return statement next line ignored by functions
    function ans(num4) {
        let num1=10
        let num2=20
        let ans= num1 +num2 +num4
        return ans
        console.log("sumit")
        }

    console.log(ans(45)) // call return etcs
    let answer=ans(45)
    console.log(answer)
        


























