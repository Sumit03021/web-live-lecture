//1. regular function invocation
// also exist without object.----depends on how as it being  called
function fn(){
console.log(this)
}
fn();// rgular function points to calling windows.
//console.log('sumit)---same----window.console.log('sumit)


//2. methods invocation
let obj={
    number:20,
    fun:function(){
        console.log(this)
    }
}
obj.fun()// called method invocation---points to the parent objects.
//3. direct function calling-----points to windows
let sam=obj.fun;
sam();


let obj3={
    a:10,
    fn:function(){
        console.log(this)//1. obj
        function sam(){
            console.log(this)//2. window
        }
        sam()// direct function calling
    }
}

//3. constructor function---points to object that created.
function Createobj(){
    this.x=200;
}
let obj4=new Createobj();
console.log(obj4.x)// points to obj created

//3. indirect invocations----call,apply,bind
//a.calling
let obj5={
    sam:20,
    fn:function(a,b,c){
        console.log(this,a,b,c)
    }
}
obj5.fn(1,2,3)
let obj6={
    sam:50
}
obj5.fn.call(obj6)// change context of this
obj5.fn.call(obj6,1,2,3)// change context of this.

//b. apply---call & apply are same change context of this 
obj5.fn.apply(obj6)
obj5.fn.apply(obj6,[1,2,3])// array separated---least used

// bind --not run but create and assign the variable.
let myfun=obj5.fn.bind(obj6)
console.log(myfun)// points to fn functions.---point to arguments as this.
myfun()

// 5. arrow function
let obj7={
    a:50,
    fn:function(){
        console.log(this)
        let sam=()=>{
            console.log(this)// refernce to lexical environment means parents of that function.
        }
        sam();
    }
}
obj7.fn()

let obj8={
    fn:()=>{
        console.log(this)
        let sum=()=>{
            console.log(this)
        }
        sum()
    }
}
obj8.fn()






















