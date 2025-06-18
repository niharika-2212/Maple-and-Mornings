import React,{useState} from "react";
import "../assets/styles/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () =>{
    setMenuOpen(!menuOpen); // toggle when click
  }
  return (
    <div className="navbar" id="navbar">
      <div className="navbar-logo">
        <img src="/name.png" className="logo" />
        <a href="#hero" className="web-name">Maple & Mornings</a>
      </div>
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <div><a href="#about">About</a></div>
        <div><a href="#menu">Menu</a></div>
        <div><a href="#gallery">Gallery</a></div>
        <div><a href="#contact">Contact</a></div>
      </div>

      <div className="hamburger" onClick={handleMenu}>
        <GiHamburgerMenu className="icons"/>
      </div>
    </div>
  )
}

export default Navbar;