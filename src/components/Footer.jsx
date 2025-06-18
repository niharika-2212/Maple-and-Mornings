import React from "react";
import "../assets/styles/Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="heading-small">Quick links</div>
        <a href="#hero">Home</a>
        <a href="#hero">About</a>
        <a href="#hero">Menu</a>
        <a href="#hero">Gallery</a>
        <a href="#hero">Contact</a>
      </div>
      <div className="footer-content">
        <div className="heading-small">Contact</div>
        <div>Email: <a href="mailto:hello@mapleandmornings.com">hello@mapleandmornings.com</a></div>
        <div>Phone: +91 92831 38482</div>
        <div className="socials">
          <FaInstagram className="icons" />
          <FaLinkedin className="icons" />
        </div>
      </div>
      <div className="footer-content">
        <div className="heading-small">Location</div>
        <div>1st Floor, Eldora Arcade,<br/>
          Church Street, Bangalore</div>
        <div className="copyright">© 2025 Brew & Bloom Café. All rights reserved.</div>
      </div>
    </div>
  )
}

export default Footer;