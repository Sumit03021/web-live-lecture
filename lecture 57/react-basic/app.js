//dom
// let rootEl = document.getElementById('root')

let h1 = React.createElement('h1',{id:'sam',className:'h1'},'hello from dom')

// ReactDOM.render(h1,rootEl) //version react 17

//version 18

// let root = ReactDOM.createRoot(rootEl);
// root.render(h1)

//---------------------------
let h2 = React.createElement('h2',null,'hello h2')
// let root = ReactDOM.createRoot(rootEl);
// root.render([h1,h2]) //but wrong

// let div = React.createElement('div',null,[
// React.createElement('h1',null,'hi i am h1 tags'),
// React.createElement('h2',null,'hi i am from h2 tags')
// ])

// let root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(div)

// jsx syntax---js + XML(html)
let div = (
  <div>
  <h1 id='sam'>hello from h1 tags</h1>
  <h2 id='sames'>hello from h2 tags</h2>
  </div>
)

let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(div)
//babel --compiler for jsx syntax convert to js for browser reading .


//webpacks-----bundlers handle multiple files into main files to the browser---webpacks, vite,parcel etcs.





