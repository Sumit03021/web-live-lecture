// lexical environment----local memory +lexical env of parents(LM + LEP (LM + LEP----so on))

var b=100
function a(){
    console.log(b) //100
}
a() // scoping -----lexical environment 

function outer(){
    var c=20 // global var or parents variable value.
    inner()
    function inner(){
        console.log(c) //20
    }
}
outer()

function outers(){
    var d=20
    inner()
    function inner(){
        var d=1000;
        console.log(d) // 1000
    }
    console.log(d) //20
}
outers()

function Outers(){
    var e=20
    // inner()
    // function inner()
    {
        var e=1000;
        console.log(e)
    }
    console.log(e)
}
Outers()
// var scopes are   1. global    2. functional
// let & const      1. block     2.local/script












































