//constructor function
let req=new XMLHttpRequest();

console.log(req)
req.open('GET','https://api.tvmaze.com/search/shows?q=girls');
req.send();

req.onload=function(response){
    console.log(response)
    console.log(this.response)
}
































