let input=document.querySelector('input')
input.addEventListener('input',function(e){
    console.log(e.target.value)
    // console.log(e.data)--- last data
    // console.log(e.target)----type of input text
    // console.log(e)----etc.
})
//value property only for input
 let input1=document.querySelector('.heading')
 let h1=document.querySelector('h1')
input1.addEventListener('input',function(e){
  let heading=e.target.value
  h1.innerText=heading
})
















































