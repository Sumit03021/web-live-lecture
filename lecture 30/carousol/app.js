const img=document.querySelector('img')
let arr=[
    'cat.avif',
    'lion.avif',
    'lion2.avif',
    'lion3.avif',
    'lion4.avif'
]
let num=0
let id=setInterval(() => {
    img.setAttribute('src',arr[num])
    num=((num+1)%arr.length)
}, 2000);


setTimeout(()=>{
    clearInterval(id)
},20000)















































