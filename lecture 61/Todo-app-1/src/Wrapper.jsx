import React from 'react'

function WrapperComponent({component}) {
  return (
    <div style={{border:"2px solid black",backgroundColor:'yellow'}}>
{component}
    </div>
  )
}

export function ChildComponent(){
  return (
    <div>
<h1>Child HU Mai</h1>
    </div>
  )
}
export default WrapperComponent;