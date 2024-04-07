import React, { useState } from "react";
import "./NavBar.css";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
function NavBar({links}) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar"> 
         <div className="nav__container">  
         <NavLink exact to="/" className="nav-logo">
            <span>Logo</span>
            {/* <i className="fas fa-code"></i> */}
           
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
             <li className="nav-item">
             <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
          {links.map((link, index) => (
          <li key={index} className="nav-item"> 
            <NavLink to={`/${link.toLowerCase()}`} activeClassName="active"
          className="nav-links"
          onClick={handleClick}>{link}</NavLink>
          </li>
        ))}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
               <IoMdClose/>
              </span>
            ) : (
              <span className="icon">
                 <FaBars /> 
              </span>
            )}
          </div>
         </div>
      </nav>
    </>
  );
}

export default NavBar;