console.log(document.getElementsByTagName("h1"))//html collections
let h1arr=document.getElementsByTagName("h1")
console.log(h1arr[0])
console.log(h1arr[1])

for(let item of h1arr){
console.log(item)
item.style.color="red"
item.style.border="2px solid black"
}

for(let i=0;i<h1arr.length;i++){
    if(i==0){
        h1arr[i].style.fontSize="100px"
    }
}
// queryselector("#sam")--("#sam p")----(".div p")

























































