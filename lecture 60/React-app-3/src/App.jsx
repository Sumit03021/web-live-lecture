import React from 'react'
// import Person from './Components/Person'
// import Logout from './Components/Logout'
import Counter from './Components/Counter'
import Maverick from './Components/Maverick'
import Tida from './Components/Tida'
import Memo from './Components/Memo'

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      {/* <Person name="sumit" age='24'/>
      <Person name="sam" age='27'/> */}
      {/* <Logout/> */}
      {/* <Counter/> */}
      {/* <Maverick/> extra render that does not needed but tida do only that thing that needed to render save reloading time etc. */}
      {/* <Tida/> */}
      <Memo/>
    </div>
  )
}

export default App