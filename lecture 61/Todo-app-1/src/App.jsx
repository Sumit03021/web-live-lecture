import React from 'react'
// import Todos from './Components/Todos'
import Add from './Components/Add'
// import WrapperComponent,{ChildComponent} from './Wrapper'
import ActualWrapper,{ChotaWrapper} from './Components/ActualWrapper'
function App() {
  return (
    <React.Fragment>
      {/* <Add/> */}
    {/* <Todos/> */}
    {/* <WrapperComponent component={<ChildComponent/>} /> */}
    <ActualWrapper>
      <ChotaWrapper>
        kasie ho sab badiya naa!
      </ChotaWrapper>
    </ActualWrapper>
    </React.Fragment>
  )
}

export default App