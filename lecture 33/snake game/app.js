
// let canvas=document.querySelector('canvas')
//white board
// let ctx=canvas.getContext('2d');
//dip into paint
//ctx.fillStyle='green'
//draw
//ctx.fillRect(120,120,50,100)//----x,y,w,h--fill full

//ctx.strokeStyle='red'----color for stroke
//ctx.strokeRect(120,120,50,50)// outlined reactangle

// ctx.beginPath()
// ctx.moveTo(20,30)
// ctx.lineTo(120,130)
// ctx.lineTo(100,20)
// ctx.lineTo(90,90)
// ctx.stroke()
// ctx.closePath
// ctx.font="30px italic"
// ctx.fillText('sumit',100,75)
// snake reactangle ban raha hai
// let snakecell=[[0,0],[50,0],[100.0]]---
//[[0,0],[0,50],[0,100]]

//------------step 2---------
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
let cellSize = 50;
let height = 600;
let width = 1000;
let direction = 'right';

function fooditerate(){
    return[
        Math.floor(Math.random()*(width-cellSize)/cellSize)*cellSize,
        Math.floor(Math.random()*(height-cellSize)/cellSize)*cellSize
    ]
}
let food =fooditerate();
let snakeCells = [ [0,0] , [50,0] , [100,0] ]

function draw(){
    ctx.clearRect(0 , 0 , width , height);
for(let cell of snakeCells){
    ctx.fillStyle ='red';
    ctx.fillRect(cell[0] , cell[1] , cellSize , cellSize);
}
  ctx.fillStyle='white'
  ctx.fillRect(food[0],food[1],cellSize,cellSize)
}

function update(){
   let headX = snakeCells[snakeCells.length - 1][0];
   let headY = snakeCells[snakeCells.length - 1][1];

   let newHeadX
   let newHeadY
   if(direction === 'right'){
      newHeadX=headX +cellSize;
      newHeadY= headY
   }else if(direction ==='down'){
      newHeadY=headY+cellSize
      newHeadX= headX
   }else if(direction === 'up'){
         newHeadY=headY - cellSize;
         newHeadX=headX
   }else{
     newHeadX=headX -cellSize;
     newHeadY=headY;
   }
   snakeCells.push([newHeadX , newHeadY]);
   if(food[0]==newHeadX && food[1]==newHeadY){
    food=fooditerate();
   }else{
    snakeCells.shift();
   }
   
   
}

document.addEventListener('keydown',(e)=>{
if(e.key === 'ArrowUp'){
direction='up'
}else if(e.key === 'ArrowRight'){
direction='right'
}else if(e.key === 'ArrowDown'){
direction='down'
}else{
direction='left'
}
})




setInterval(function(){
update();
draw();
},200)





















