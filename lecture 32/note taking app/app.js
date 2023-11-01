let input=document.querySelector('input')
let btn=document.querySelector('button')
let list=document.querySelector('#list')
btn.addEventListener('click',function(e){
let notes=input.value;
let li=document.createElement('li');
li.innerText=notes;
list.appendChild(li);
input.value="";
li.addEventListener('click',()=>{
    li.remove();
})
})





















































