//constructor function
function User(naam,umar,rang){
this.username=naam;
this.age=umar;
this.color=rang;
this.desc=function(){
    return `my name is ${this.username}`
}
}
let user2=new User('sumit',25,'red');
console.log(user2);
console.log(user2.desc());
// when use function with keyword new ans first letter as capital and return a object called constructor function.



















