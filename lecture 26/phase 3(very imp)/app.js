console.log("start")
console.log("run after 4 seconds")  
console.log("end") 
// settimeout(function,time delayed in millisecondes)  
console.log("start")
setTimeout(function(){
    console.log("run after 4 seconds")
},4000)      
console.log("end")   

// line (call stack)---go to web api(set timeout)----store function for wait ----then in the call back queue---in that time eventloop check when will be call stack is empty and is there any function in cb queue----then returned into call stack.


























