import Hello from "./Components/Hello"
function App(){
  //upper parts---use normal js statements
  //if else while ect.
  let a=100;
  
  
  //lower returned only in jsx format
  return (
    <div>
      <Hello/>
      <h1>hello form h1 tags</h1>
      <h2>hello from h2 tags</h2>
      <h2>hello form {a}</h2>
    </div>
    //always single parents
  )
}

export default App;
//default export
//named export









