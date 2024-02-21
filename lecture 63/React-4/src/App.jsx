import React from 'react'
import Hooks from './Components/Hooks'
import CaseTwo from './Components/CaseTwo'
import Home from './Components/Home'
import Product from './Components/Product'
import {BrowserRouter,Routes,Route, useNavigate} from 'react-router-dom'

function App() {
 // let navigate = useNavigate();// not use navigate hook outside anywhere instead always used inside browserRouter


//  function handle1(){
//    // window.location.href="/"//not follow principle of react refershing the pages again and again.
//   navigate('/')
//   }

//   function handle2(){
// //window.location.href="/product"
// navigate('/product')
//   }
  return (
    <div>
      {/* <Hooks/> */}
      {/* <CaseTwo/> */}
      
      {/* <div style={{backgroundColor:'yellow'}}>
        Navbar hu mai
        <button onClick={handle1}>Home</button>
        <button onClick={handle2}>Product</button>
      </div>  used it inside browserRouter*/}

  <BrowserRouter>
  <Nav/>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/product' element={<Product/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  )
}

function Nav(){
  let navigate =useNavigate();
  function handle1(){
    navigate('/')
  }
  function handle2(){
    navigate('/product')
  }
  return (
    <div style={{backgroundColor:'yellow'}}>
        Navbar hu mai
        <button onClick={handle1}>Home</button>
        <button onClick={handle2}>Product</button>
    </div>
  )
}
export default App