import './App.css'
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Lista from './pages/lista'
import NavBar from './component/navBar'


function App() {
 
  return (
    <>
    <NavBar/>
    <Routes>
  <Route path='/home' element={<Home/>}/>
 <Route path='/lista' element={<Lista/>}/>
 
    </Routes>
    </>
  )
}

export default App
