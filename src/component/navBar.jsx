import { NavLink } from "react-router-dom";

function NavBar(){

    return(
        <nav>
    <NavLink className='a' to='/home'>Home</NavLink>
    <NavLink className='a' to='/favorite'>Favoritos</NavLink>
    <NavLink className='a' to='/lista'>Países</NavLink>
    <NavLink className='a' to='/detalhes'></NavLink>
        </nav>
    )
}

export default NavBar