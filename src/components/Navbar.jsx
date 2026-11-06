import { NavLink } from "react-router-dom";
import './Navbar.css';

function Navbar(){
    return(
        <nav className="navbar">
            <ul className="navbar-links">
                <li><NavLink to="/" end>Home</NavLink></li>
                <li><NavLink to="/store">Store</NavLink></li>
                <li><NavLink to="/favorites">Favorites</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                
                
            </ul>
        </nav>
    )
}

export default Navbar;