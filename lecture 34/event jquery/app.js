let btn=$('button')
btn.click(function(){
    console.log('hello')
})

$('ul li').click(function(e){
 console.log(e)
 console.log(e.target)
//  e.target.css('color','red') --wrong not work
$(this).css('color','red')
})
//add eventlistener---on--events  btn.on('click',function(){})
//keyup event---input.keyup(function(){})

//fadein()--come like display(initial)
//fadeout()---display none
//fadetoggle()----toggle the displays.








































