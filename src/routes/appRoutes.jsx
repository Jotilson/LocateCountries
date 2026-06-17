import {Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Lista from '../pages/lista'
import Favorite from '../pages/favorite'
import NavBar from '../component/navBar'
import Detalhes from '../pages/detalhes'
function AppRoutes(){

    return(
        <>
         <NavBar/>
    <Routes>
  <Route path='/home' element={<Home/>}/>
  <Route path='/favorite' element={<Favorite/>}/>
 <Route path='/lista' element={<Lista/>}/>
<Route path='/detalhes/:iso2' element={<Detalhes/>}/>
 
    </Routes>
        </>
    )
}

export default AppRoutes