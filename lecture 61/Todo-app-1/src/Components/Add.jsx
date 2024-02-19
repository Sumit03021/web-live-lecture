import React , {useState, Fragment} from 'react'

function Add() {
  let arr = [
    {title:"go to place 1",desc:"place 1 is amazing"},{title:"go to place 2",desc:"place 2 is amazing"},{title:"go to place 3",desc:"place 3 is amazing"}
  ]

  let [arrays,setArrays] = useState(arr)

  return (
    <div>
<AddTodo arrays={arrays} setArrays={setArrays}/>
<Todo todos={arrays}/>
    </div>
  )
}

function AddTodo({arrays,setArrays}){
 let [inp1,setInp1] = useState("")
 let [inp2,setInp2] = useState("")
  function handleAddTodo(){
    setArrays([...arrays,{title:inp1,desc:inp2}])
  }
function changeInp1(e){
  setInp1(e.target.value)
}
function changeInp2(e){
  setInp2(e.target.value)
}

return(
  <div>
    <input onChange={changeInp1} type="text" name="" id="title" value={inp1}/>
    <input onChange={changeInp2} type="text" name="" id="desc" value={inp2}/>
    <button onClick={handleAddTodo}>Add Todo</button>
  </div>
)
}

function Todo({todos}){
return(
  <div>
    {
      todos.map((item,index)=>{
 return (
  <div key={index}>
    <h1>Title: {item.title}</h1>
    <h1>Desc: {item.desc}</h1>
  </div>
 )
      })
    }
  </div>
)
}

export default Add