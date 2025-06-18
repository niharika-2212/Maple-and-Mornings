import React from "react";
import "../assets/styles/Navbar.css";
function Navbar(){
  return(
    <div className="navbar" id="navbar">
      <div className="navbar-logo">
        <img src="/name.png" className="logo" />
        <a href="#hero" className="web-name">Maple & Mornings</a>
        </div>
      <div className="navbar-links">
        <div><a href="#about">About</a></div>
        <div><a href="#menu">Menu</a></div>
        <div><a href="#gallery">Gallery</a></div>
        <div><a href="#contact">Contact</a></div>
      </div>
    </div>
  )
}

export default Navbar;