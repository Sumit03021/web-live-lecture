for(let i=1;i<=3;i++){
    console.log(i+" ")
}
let i=1;
while(i<=3){
    console.log(i)
    i++
}
// --------------for of-------------
//   iterator of iterable item(item of array etcs.)
//in web development if use array always use for of loops init.
let arr=[1,2,3,4,5,6]
for(let system of arr){
    console.log(system)
}

//------------- for in loops---------(objects)
let person={
    hindi:45,
    english:100,
    maths:23
}
for(let system in person){
    console.log(system) // keys
    console.log(person[system]) // value ---like arrays
  console.log(person.system) // undefined
}

//----------- break /continue---------
// break ---- ends at that points.
 for(let i=0;i<6;i++)
 {
    if(i==5){
    break
}
    console.log(i)
    
 }
 // continue -----missed that part and conitnue
 for(let i=0;i<8;i++){
   
    if(i==5){
        continue
    } console.log(i)
    
 }











































