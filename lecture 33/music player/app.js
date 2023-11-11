let songlist=document.getElementById("songlist")
let play=document.getElementById('play-btn')
let progress=document.getElementById('progress');
let songs=[
    {
        name:'song1',
        id:1
    },
    {
name:'song2',
id:2
    },
    {
name:'song3',
id:3
    },
    {
name:'song4',
id:4
    }
]

let audio=new Audio('song1.mp3')
for(let song of songs){
    let li=document.createElement('li')
    li.innerText=song.name;
    li.setAttribute('id',song.id);
    li.classList.add('song-item');
    songlist.append(li);
}

play.addEventListener('click',()=>{
    audio.paused ? audio.play():audio.pause();
    if(play.children[0].classList.contains('fa-play')){
        play.children[0].classList.remove('fa-play')
        play.children[0].classList.add('fa-pause')
    }else if(play.children[0].classList.contains('fa-pause')){
        play.children[0].classList.remove('fa-pause')
        play.children[0].classList.add('fa-play')
    }
})

// range move time update
audio.addEventListener('timeupdate',()=>{
    let currrentprogress=audio.currentTime*100/audio.duration;
    progress.value=currrentprogress;
    //progress not favicon.ico not found shown.
})
// drag change song
progress.addEventListener('change',()=>{
    let updateprogress=audio.duration*progress.value/100;
    audio.currentTime=updateprogress;
})

songlist.addEventListener('click',(e)=>{
let songId=e.target.getAttribute('id')
audio.src=`song${songId}.mp3`;
audio.currentTime=0;
audio.play();
play.children[0].classList.add('fa-pause');
play.children[0].classList.remove('fa-play');
})



























