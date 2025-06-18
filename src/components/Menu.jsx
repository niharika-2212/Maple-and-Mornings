import React from "react";
import "../assets/styles/Menu.css";
import { MenuData } from "./MenuData.jsx";
function Menu() {
  return (
    <div className="menu" id="menu">
      <div className="heading">Our Menu</div>
      <div className="menu-content">
        {MenuData.map((data, index) => {
          return (
            <div className="card" key={index}>
              <div className="category-heading">{data.category}</div>
              {data.items.map((item,i)=>{
                return(
                  <div key={i} className="item">
                  <div className="item-name" >{item.name}</div>
                  <div className="item-price">{item.price}</div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Menu;