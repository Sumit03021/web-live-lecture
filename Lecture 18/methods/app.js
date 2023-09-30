let person ={
    // properties
    name:"sumit kumar",
    age:"23",
    title:"hum sath sath hai",
    // methods
    describe: function desc(){
        console.log("hi my name is sumit")
        console.log(`hi my name is ${this.name}`) 
    }
}

console.log(person.describe)
person.describe() // can call
// person.desc() // cannot call
// desc() // als not call due to fucntion defined inside a objects.
let ans = person.describe(); // run the codes.
console.log(ans) // undefined 

//---------------- this keywords
// type 1: --- points to objects when referred in the methods.























