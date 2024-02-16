import React from 'react'
import Person from './Components/Person'
import Events from './Components/Events'
import Students from './Components/Students'

function App() {
  return (
    <div>
      {/* <Events/>
      <Person/>
      <Events/>
      <Events/> */}
      {/* called props if call functional components with any argumnets or attributes  */}
      <Students name ="sam" color="black" num="56" />
      <Students name ="samarth" color="green" num="560" />
      <Students name ="sam vohra" color="orange" num="52" />
    </div>
  )
}

export default App