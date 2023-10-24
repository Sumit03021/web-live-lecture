function getdata(cb){
    setTimeout(function(){
        let data='hello my family';
        cb(data,null);
        
    },3000)
}
getdata(function(data,error){
   if(error){
    console.log(error)
   }else{
    console.log(data);
   }
})
//promises ---use for callback hell tackling
//promise is constructor function(new keyword use in it.)
// let promise1=new Promise();//object
//always accepts cb function
// let promise2=new Promise(function(){

// })
//always use 2 arguments in promise.
// let promise3=new Promise(function(resolve,reject){

// })

let mypromise=new Promise(function(resolve,reject){
    setTimeout(function(){
        let data="hello my name is sumit kumar"
        resolve(data) // call resolve due to call before reject
        let err="nahi dunga data"
        reject(err)
    },4000)
})

mypromise.then(function(data){//always accept cb function ----only if data resolved
console.log(data,'resolve')
}
)
.catch(function(err){ //
    console.log(err,'reject')
})































































