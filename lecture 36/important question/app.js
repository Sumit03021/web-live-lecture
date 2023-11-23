const person={
    first:'sumit',
    last:'kumar'
}
console.log(person)
person.age=26;
console.log(person)
// can i add property--yes
// can i change value of property---yes
// can i delete property--yes
delete person.last
console.log(person)


//spread operators-----...
//works on both array and objects....
let arr=[1,2,3,4,5]
let arr2=[...arr,6,7,78]

console.log(arr)
console.log(arr2)
// concatenation adding 
let arr3=arr2.concat(arr);
console.log(arr3)

//modern -mostly used
//destructing the array and objects....
let array=[1,2,3,4,5]
let [a,b,c,d,e]=array;
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)

// but in object only by key can be access;
let obj={
    first:'sumit',
    last:'kumar'
}
let {first,last}=obj;
console.log(first)
console.log(last)

let {first:name,last:last1}=obj;
console.log(name);// yes new key worked but old key not worked due to changed
console.log(first)// not work due to key are changed.












