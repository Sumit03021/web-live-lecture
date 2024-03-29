import React from 'react'
import MainNavigation from './Components/mainNavigation/MainNavigation'
import {Routes, Route} from 'react-router-dom'
import AllQuotes from './Components/pages/AllQuotes'
import NewQuotes from './Components/pages/NewQuotes'
import ShowQuotes from './Components/pages/ShowQuotes'

function App() {
  return (
    <div>
      <MainNavigation/>
      
<main>
  <Routes>
   <Route path='/' element={<AllQuotes/>}/>
   <Route path='/new' element={<NewQuotes/>}/>
   <Route path='/quotes/:id' element={<ShowQuotes/>}/>
  </Routes>
</main>

    </div>
  )
}

export default App