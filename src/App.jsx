import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Body from './components/Body'
import Area from './components/Area'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
    
     
    </>
  )
}

export default App
