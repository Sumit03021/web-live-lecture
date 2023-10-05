 var a=20
 function mera(){
    console.log("inside mera function")
 }
 console.log(a)
 mera()
 // variable and function use first before defined the variable and fucntion called hoisting
 console.log(b) // undefined
 merafun() // called function
 var b=29;
 function merafun(){
    console.log("have fun")
 }

 // -------------hoisting----------------------
 function sam(){ // defined
    console.log(c) // use
    var c=23  // defined
 }
 sam()// access





















