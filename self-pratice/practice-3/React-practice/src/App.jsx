import React from 'react'
import Person from './Components/Person';
import Hello from './Components/Hello';
import Logout from './Components/Logout';
import Counter from './Components/Counter';
import Maverick from './Components/Maverick';
import Tida from './Components/Tida';
import Memo from './Components/Memo';
import MyMemoHook from './Components/MyMemoHook';
import CaseTwo from './Components/CaseTwo';
import UseContextHook from './Components/UseContextHook';

function App() {
  // let arr =[{a:10},{a:20,b:20},{a:10}];
  let luck = 7
  let rn = Math.floor(Math.random()*10)
  let el
  if(rn === 7){
  el=1;
  }else{
    el=0;
  }
  // let obj ={a:100}
  return (
    <div>
      {/* <Person name='sam' age='23'/>
      <Person name='sumit' age='24'/>
      <Hello/>
      <Logout/> */}
      {/* <Counter/> */}
      {/* <Maverick/> */}
      {/* <Tida/> */}
      {/* <Memo/> */}
      {/* <MyMemoHook/> */}
      {/* <CaseTwo/> */}
      <UseContextHook name="sumit"/>
    </div>

  )
}

export default App