
let step1=function(){//----first class function called
    console.log("selecting the image")
    return new Promise(function(resolve,reject){
    setTimeout(function(){
       resolve('image.jpg')
    },4000)
 })
}
let step2=function(image){//----first class function called
    console.log(`applying filter to ${image}`)
    return new Promise(function(resolve,reject){
    setTimeout(function(){
       resolve('filter applied to image.jpg')
    },2000)
 })
}
let step3=function(filter){//----first class function called
    console.log('caption added to filtered image')
    return new Promise(function(resolve,reject){
    setTimeout(function(){
       resolve('caption done successfully')
    },4000)
 })
}

//promise chaining
step1().then(function(image){
    console.log('image selected')
    return step2(image)
})
.then(function(filter){
 console.log('filter applied')
 return step3(filter)
})
.then(function(comment){
    console.log('comment added to the images')
})






































































