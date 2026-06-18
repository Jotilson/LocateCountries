import './App.css'
import AppRoutes from './routes/appRoutes'
import NavBar from './component/navBar';
import {useLocation } from 'react-router-dom'


function App() {
 
const location=useLocation();

  return (
    <>
    {location.pathname !== "/" && <NavBar/>}

    <AppRoutes/>

     
    </>
  )
}

export default App
