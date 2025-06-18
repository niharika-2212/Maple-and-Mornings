import React from "react";
import "../assets/styles/Hero.css";
function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-heading">Maple & Mornings</div>
        <div className="hero-subheading">Fresh starts with every sip.</div>
        <a href="#menu"><div className="hero-CTA button">View Menu</div></a>
      </div>
    </div>
  )
}

export default Hero;