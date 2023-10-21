let todo={
    title:"sumit kumar",
    desc:function(){
        return 'you have to go titles'
    }
}
console.log(todo.title);
console.log(todo.desc());
console.log(todo.samarth);//undefined
//console.log(todo.samarth()); // errors--typeerrors(not a function)

// prototypes------ another objects--,acts like fallback source of properties of objects-prototypes.
console.log(todo)
//todo.__proto__----Object.prototype--true
//todo.__proto__.__proto__------null(parents of objects prototypes.)---true

let arr=["string",10 ,20,30];
console.log(arr);
//arr,__proto__===Array.prototype---true
//arr.__proto__.__proto__===Object.prototype---true
//arr.__proto__.__proto__.__proto__===null-----true



















