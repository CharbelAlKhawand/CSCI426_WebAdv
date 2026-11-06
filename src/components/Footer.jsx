// components/Footer.jsx
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/store">Store</NavLink></li>
        <li><NavLink to="/favorites">Favorites</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        
        
      </ul>
      <p className="footer-copy">
        &copy; {new Date().getFullYear()} csci426_webadv. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;