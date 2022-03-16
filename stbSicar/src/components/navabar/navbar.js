import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./navbar.css";
import { Link } from "react-router-dom";
// import logo from "./Logo.png"
// import LoginDialog from "../MUI/Dialog";
import logo from "./logo.svg";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 150) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);
  //

  return (
    <>
      <div class={colorChange ? " colorChange nav" : "navbar nav"}>
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <div class={colorChange ? "nav-title-on  " : "nav-title"}>
            <Link to="/">
              <img className="logo" src={logo} alt="" />
            </Link>
          </div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div class="nav-links">
          <Link to="/nousconnaitre"> Nous Connaitre</Link>
          <Link to="/nosfonds"> Nos Fonds</Link>
          <Link to="/representationsocial"> Responsabilité Sociale</Link>
          <Link to="/realisation">Nos Réalisations</Link>
          <Link to="/news"> Actualités</Link>
          <Link to="/contact"> Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
