import Bhai from "./Components/Bhai";
import Hello from "./Components/Hello"
import Homie from "./Components/Homie";
import Person from "./Components/Person";
import Badmaas from "./Components/Sam";

//export default so that by anyname access but if export Sam(named) so only import {Sam} used capital only and that named export only.
//use component always in capital letters
function App(){
  //upper parts---use normal js statements
  //if else while ect.
  let a=100;
  
  
  //lower returned only in jsx format
  return (
    <div>
      <Bhai/>
      <Homie/>
      {/* <Hello/> */}
      {/* <Person/> */}
      {/* <Badmaas/> */}
      {/* <h1>hello form h1 tags</h1>
      <h2>hello from h2 tags</h2>
      <h2>hello form {a}</h2> */}
    </div>
    //always single parents
  )
}

export default App;
//default export
//named export









