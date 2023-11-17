// 3rd party library--calling api;
axios.get('https://api.tvmaze.com/search/shows?q=girls')
.then(function(response){
console.log(response)
})
.catch(function(error){
    console.log(error)
})



































