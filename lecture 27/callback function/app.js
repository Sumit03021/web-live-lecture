// wrong ways to write code
// first select image then applied filters etc.
function step1(){
    console.log("select image from gallery")
    setTimeout(function(){
return 'selected image'
    },4000 )
}

function step2(image){
        console.log("applying filter images")
    setTimeout(function(){
        return 'filter apllied'
    },2000)
}
let image=step1();
console.log(image)
let filteredimage=step2()
console.log(filteredimage)
//------------------------------------------------
//right ways for codes
// vertically grow
function steps1(fn){
    console.log("please wait image is being selected")
    setTimeout(function(){
        console.log('image selected')
fn('image selected')
    },4000)
}
function steps2(image,fn){
    console.log(`applying fiter to ${image}`)
    setTimeout(function(){
console.log(`filter applied to the ${image}`)
fn('filtered image')
    },2000)
}
function step3(filter,fn){
    console.log(`adding your ${filter}`)
    setTimeout(function(){
console.log('caption done');
 fn('image with caption')
    },3000)
}
function step4(caption){
    console.log(`uploading your final ${caption}`)
    setTimeout(function(){
        console.log('image posted successfully')
    },5000)
}

// horizontally grow--nested functions(pyramid of DOM)---callack hell
steps1(function(image){
steps2(image,function(filter){
    step3(filter,function(caption){
        step4(caption)
    })
})
})

























































