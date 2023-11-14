// js library ---dom manipulation ----
//jQuery use and also from $ sign check in console.

//$('h1')----documnent.queryselectorAll
let h1=$('h1')
let para =$('p')
let id=$('#sam')
let classes= $('.sam')

console.log(h1)
console.log(para)
console.log(id)

//para.css('color','red')
//para.css('border','2px solid black')
// normal css kabab case and camel case in objected css.
para.css({
    color:'blue',
    border:'2px solid black',
    backgroundColor:'red'
})

//innerText,innerHTML,textContent-----
para.text()// behave like textContent

para.html()// innerhtml

let input=$('#kaam')
//getattribute
console.log(input.attr('type'))
//setattribute
input.attr('type','text')

//selecting first ,last elements
let list1=$('ul li').first();
let list3=$('ul li').last();
list1.css('color','red')
list3.css('color','green')

//value from input
input.val()//act as getter and setter
input.val('mai nahi btaunga') //placeholder

//classlist
para.addClass('a b c')

para.removeClass('a b')
//para.toggleClass('a b')
console.log(para.hasClass('c')) // contains classlist





