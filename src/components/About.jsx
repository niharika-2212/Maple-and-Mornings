import React from "react";
import "../assets/styles/About.css";
function About() {
  return (
    <div className="about" id="about">
      <div className="heading">About us</div>
      <div className="about-content">
        <div>
          <div className="about-left">
            <div className="sub-heading">Welcome to Maple and Mornings!</div>
            <div>Nestled in the heart of Bangalore, we're a cozy
              café built around simple pleasures: slow
              mornings, handcrafted brews, and honest
              food. Whether you're starting your day with a
              warm maple latte or taking a quiet break with
              our signature sourdough toast, we're here to
              make each moment count.</div>
          </div>
          <img src="/about.jpg" className="about-image" />
        </div>
      </div>
    </div>
  )
}

export default About;