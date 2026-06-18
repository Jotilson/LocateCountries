import {Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Lista from '../pages/lista'
import Favorite from '../pages/favorite'
import NavBar from '../component/navBar'
import Detalhes from '../pages/detalhes'
import Home2 from '../pages/home2'
import NotFound from '../pages/notFound'
function AppRoutes(){

    return(
        <>
         <NavBar/>
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