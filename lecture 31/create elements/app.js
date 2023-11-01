//can create new elements ---yes
let h2=document.createElement('h2')
let p=document.createElement('p')
h2.innerText="sumit kumar thankyou"
p.innerText="hi my name is sumit"
let section=document.querySelector('section')
console.log(h2.innerText);


section.appendChild(h2)
//section.appendChild(h2,p)--wrong  not add multiples
section.append(h2,p)
section.append("hello world")
section.append(`<h1>hello my world</h1>`)// write with tagname

section.prepend("hello")// at the starting of html




























