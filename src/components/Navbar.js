import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <div className="navbar__logo">
          <picture>
            <source media="(max-width: 768px)" srcset="img/LOGO-145.png" />
            <img src="/img/LOGO.png" alt="logo" />
          </picture>
          {/* <img src="img/logo.png" alt="Logo" id="logo" /> */}
        </div>
      </NavLink>
      <NavLink to="/">
        <div>Accueil</div>
      </NavLink>
      <NavLink to="/about">
        <div>A propos</div>
      </NavLink>
    </nav>
  );
}

export default Navbar;
