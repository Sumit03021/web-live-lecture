function sum(num1,num2){
    console.log(num1 + num2)
}
sum(4,5)
sum('sumit',' kumar')

function a(fn){
    console.log("mai hu a")
    fn()
}
function b(){ // callback functions
    console.log("mai hu b")
}
a(b); // -----higher order function----'a'
 // hOF ----when entire function call as an argument inside the some other function.
// when entire function return from the other function then other fucntion called HOF

function sam(){ // hof
    console.log("hi")
    function c(){ // callback function
        console.log("hello")
    }
    return c
}
sam()
 let temp=sam()
 console.log(temp)
 
 // callback functions---b
 // a function which sent as argument to the other function and there in calling also important called callback functions

function getString(arr){
    let res=[]
    for(let item of arr){ 
        if(typeof(item) === 'string'){
            res.push(item)
        }
    }
    return res
}

function getNumber(arr){
    let res=[]
    for(let item of arr){
        if(typeof(item) === 'number'){
            res.push(item)
        }
    }
    return res
}
function getBool(arr){
    let res=[]
    for(let item of arr){
        if(typeof(item) === 'boolean'){
            res.push(item)
        }
    }
    return res
}
let arr=['sam',100,'bhaukaali',true,false,400]
console.log(getString(arr))
console.log(getNumber(arr))
console.log(getBool(arr))

// ----------use hof---------
function getstring(item){ // call back fn
    return typeof(item)==='string'
}

function getnumber(item){ //call back fn
    return typeof(item)==='number'
}

function getbool(item){ //call back fn
    return typeof(item)==='boolean'
}

function get(arr,fn){ //HOf
let res=[]
for(let item of arr){
    if(fn(item)){
        res.push(item)
    }
}
return res
}

console.log(get(arr,getstring))
console.log(get(arr,getnumber))
console.log(get(arr,getbool))


















