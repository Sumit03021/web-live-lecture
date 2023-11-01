// action act on dom(reactions)---many types of events
// 3 ways of eventlistener
let btn=document.querySelector('.btn')
//1. ways
function sumit(){
    console.log("hello")
}


// 2.ways 
// btn.onclick=function(){
//     console.log("empty vacancy")
// }


let btn2=document.querySelector('.btn2')
function nacho(){
    console.log("nato nato nato")
}
function gaao(){
    console.log("gaao gaao")
}
// override and not working on multiple events
// btn2.onclick=nacho;
// btn2.onclick=gaao;


//3. ways-eventlistener---works multiple click functions
btn2.addEventListener('click',nacho)
btn2.addEventListener('click',gaao)


let body=document.querySelector('body')
btn.addEventListener('click',()=>{
body.style.backgroundColor="red"
})




























