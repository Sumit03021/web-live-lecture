let num=document.getElementById('num')
let num1=document.getElementById('num1')
let btn=document.getElementById('addbtn')
let h3=document.getElementById('addcontent')
btn.addEventListener('click',function(){
    let sum=+num.value + +num1.value
    h3.textContent=`this is output of ${num.value} and ${num1.value} = ${sum}`
})