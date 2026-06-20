import { lazy } from 'react'
import {Routes, Route} from 'react-router-dom'
const Home = lazy(()=> import('../pages/home'))
const Lista =lazy(()=> import('../pages/lista'))
const Favorite = lazy(()=> import('../pages/favorite'))
const NavBar = lazy(()=> import('../component/navBar'))
const Detalhes = lazy(()=> import('../pages/detalhes'))
const Home2 = lazy(()=> import('../pages/home2'))
const NotFound = lazy(()=> import('../pages/notFound'))


function AppRoutes(){
  
    return(
        <>
 
  
    <Routes>
<Route path='/' element={<Home2/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/favorite' element={<Favorite/>}/>
 <Route path='/lista' element={<Lista/>}/>
<Route path='/detalhes/:country' element={<Detalhes/>}/>
<Route path='*' element={<NotFound/>}/>
 
    </Routes>
        </>
    )
}

export default AppRoutes