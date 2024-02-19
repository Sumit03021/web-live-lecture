import React, { useState ,Fragment} from 'react'

function Todos() {
  let arr = [
    {title:"go to place 1",desc:"place 1 is amazing"},{title:"go to place 2",desc:"place 2 is amazing"},{title:"go to place 3",desc:"place 3 is amazing"}
  ]

  let [arrays,setArrays] = useState(arr)

  return(
    <Fragment>
    <SingleTodo todos={arrays} />
    </Fragment>
  )
  //----------------------------------------------------
  // return (
  //   <div>
  //    <SingleTodo title="go to place 1" desc="place 1 is amazing" />
  //    <SingleTodo title="go to place 2" desc="place 2 is amazing" />
  //    <SingleTodo title="go to place 3" desc="place 3 is amazing" />
  //   </div>
  // )
  //------------------------------------------------------
}

function SingleTodo({todos}){
  return(
    <Fragment>
    {
      todos.map((item,index)=>{
        return (
          <div key={index}>
       <h1>{item.title}</h1>
       <h1>{item.desc}</h1>
          </div>
        )
      })
    }
    </Fragment>
  )
}
export default Todos