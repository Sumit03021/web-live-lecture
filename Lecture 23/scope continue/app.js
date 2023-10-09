function outer(){
    var a=10
    inner()
    function inner(){
        console.log(a) // undefined ----- due var a declared in the functions
        var a=100
        console.log(a) // 100
    }
    var a=1000
    console.log(a) // 1000
}
outer()
// console.log(a) -----undefined reference errors ------ not defined
function outers(){
    inners()
    var b=10
   console.log(b) // 10
    function inners(){
        console.log(b) // undefined ----- due var a declared in the functions
        var b=100
        console.log(b) // 100
    }
    var b=1000
    console.log(b) // 1000
}
outers()

function outersa(){
    let d=10
   console.log(d) // 10
   innersa()
    function innersa(){
        console.log(d) // 10 
      d=100  // if use let to declare d then refernce error shows so use d as reinitialize for let.
        console.log(d) // 100
    }
   
    console.log(d) // 100
}
outersa()




































































