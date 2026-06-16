import { NavLink } from "react-router-dom";

function NavBar(){

    return(
        <nav>
    <NavLink className='a' to='/home'>Home</NavLink>
    <NavLink className='a' to='/lista'>Países</NavLink>
        </nav>
    )
}

export default NavBar