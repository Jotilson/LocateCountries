import { Suspense } from 'react';
import './App.css'
import AppRoutes from './routes/appRoutes'
import NavBar from './component/navBar';
import {useLocation } from 'react-router-dom'


function App() {
 
const location=useLocation();

  return (
    <>
    <Suspense fallback={<p>Carregando...</p>}>
       {location.pathname !== "/" && <NavBar/>}

    <AppRoutes/>
    </Suspense>
   

     
    </>
  )
}

export default App
