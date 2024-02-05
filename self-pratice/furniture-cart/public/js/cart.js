
let addbtn = document.querySelector('.plus1');
let lessbtn = document.querySelector('.minus1');
let quantity = document.querySelector('.quantity1');

let count=1;
// for(let item of quantity){
  let span = document.createElement('span');
  quantity.append(span);
  span.innerText = count;
// }
// for(let btn of addbtn){
  addbtn.addEventListener('click',()=>{
    count++;
    span.innerText=count;
    if(count>=100){
      span.innerText = '100'
    }
  })
// }
// for(let less of lessbtn){

  lessbtn.addEventListener('click',()=>{
    count--;
    span.innerText = count;
    if(count<=1){
      span.innerText = '1';
    }
  })
// }
















