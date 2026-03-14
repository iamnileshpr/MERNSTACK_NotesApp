import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Create from './Pages/Create'
import Note from './Pages/Note'
import Edit from './Pages/Edit'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/note/:id' element={<Note/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
