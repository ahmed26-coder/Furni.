import'./nav.css'
import { RxAvatar } from "react-icons/rx";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Nav() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <nav>
            <h2>Furni.</h2>
            <div className="nav">
              <ul>
                <li><NavLink to="/" className={({ isActive }) => isActive || activeLink === "/" ? "active-link" : ""} onClick={() => setActiveLink("/")} end >Home</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => isActive || activeLink === "/about" ? "active-link" : ""} onClick={() => setActiveLink("/about")}>About Us</NavLink></li>
                <li><NavLink to="/servisec" className={({ isActive }) => isActive || activeLink === "/servisec" ? "active-link" : ""} onClick={() => setActiveLink("/servisec")}>Servisec</NavLink></li>
                <li><NavLink to="/blog" className={({ isActive }) => isActive || activeLink === "/blog" ? "active-link" : ""} onClick={() => setActiveLink("/blog")}>Blog</NavLink></li>
                <li><NavLink to="/contact"className={({ isActive }) => isActive || activeLink === "/contact" ? "active-link" : ""} onClick={() => setActiveLink("/contact")}>Contact Us</NavLink></li>
              </ul>
              <RxAvatar />
              <FiShoppingCart />
            </div>
          </nav>
  )
}

export default Nav
