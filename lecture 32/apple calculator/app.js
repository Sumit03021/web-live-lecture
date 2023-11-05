const btns=document.querySelectorAll('button')
const input=document.querySelector('input')

for(let button of btns){
    button.addEventListener('click',function(e){
        let btnText= e.target.innerText;
        //console.log(btnText)
 if(btnText=="AC"){
        input.value="";
 }else if(btnText=="="){
    try{
        input.value=eval(input.value);
    }
    catch{
        input.value="invalid";
    }
 }else{
    input.value +=btnText;
 }
    })
}


















































