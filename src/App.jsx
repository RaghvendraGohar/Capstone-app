import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './component/Register'


function App() {
  const [count, setCount] = useState(0)

  return (
        <>
        <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Register />} />
        </Routes>
        </BrowserRouter>
          
    </>
  )
}

export default App
