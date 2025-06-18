import React from "react";

function Menu() {
  return (
    <div className="menu" id="menu">
      <div className="heading">Our Menu</div>
      <div className="filter">
        <div className="button">All</div>
        <div className="button">Coffee</div>
        <div className="button">Snacks</div>
        <div className="button">Desserts</div>
      </div>
      <div>
        <div className="card">cards</div>
        <div className="card">cards</div>
        <div className="card">cards</div>
      </div>
    </div>
  )
}

export default Menu;