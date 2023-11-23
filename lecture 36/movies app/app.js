let input=document.querySelector('input')
let btn=document.querySelector('button')
let list=document.querySelector('.list')


btn.addEventListener('click',function(){
    let searchtext=input.value;
  let data= fetchdata(searchtext);
  input.value="";
})

function fetchdata(searchtext){
axios.get(`https://api.tvmaze.com/search/shows?q=${searchtext}`)
.then(function(response){
    manipulateDom(response.data)
})
}

function manipulateDom(alloteddata){
    while(list.firstChild){
        list.firstChild.remove();
    }
    for(let data of alloteddata){
        let figure= document.createElement('figure')
        figure.innerHTML=`
        <img src="${data.show.image.medium}"/>
        <h2>Name: ${data.show.name}</h2>
        <h5>Language: ${data.show.language}</h5>`
        list.appendChild(figure)
    }
}


































