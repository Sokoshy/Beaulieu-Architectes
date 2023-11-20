import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import Logo from "./Logo.svg";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleMenu = () => {
    setShowNav(!showNav);
  };

  return (
    <header>
      <nav
        className={`navbar 2xl:ml-[11rem] ${showNav ? "show-nav" : ""}`}
        role="navigation"
      >
        <Link className="navbar__logo mr-[calc(50vw-105px)] xl:mr-0" to={`/`}>
          <img className="Logo" src={Logo} alt="" />
        </Link>
        <ul className="navbar__links">
          <li className="navbar__link">
            <Link to={`/agence`} /*onClick={handleNavLinkClick}*/>
              L'Agenge
            </Link>
          </li>
          <li className="navbar__link">
            <Link to={`/realisation`}>Réalisation</Link>
          </li>
          <li className="navbar__link">
            <Link to={`/prestation`}>Prestation</Link>
          </li>
          <li className="navbar__link">
            <Link to={`/blog`}>Blog</Link>
          </li>
          <li className="navbar__link">
            <Link to={`/contact`}>Contact</Link>
          </li>
          <li className="navbar__link">
            <div className="searchcontainer">
              <div className="search-box">
                <input type="text" />
                <span></span>
              </div>
            </div>
          </li>
        </ul>
        <button className="burger" onClick={toggleMenu}>
          <span className="bar"></span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
