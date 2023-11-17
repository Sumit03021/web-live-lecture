// webapi ---fetch('url')---returns a promise--returned metadata(not entire datas)
fetch('https://api.tvmaze.com/search/shows?q=girls')
.then(function(response){
return response.json()// waited till entire data comes.
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error);
})
































