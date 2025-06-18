import React from "react";
import "../assets/styles/Gallery.css";

const galleryImages = [
  {image: "/gallery1.png" , caption: "interior"},
  {image: "/gallery2.png" , caption: "interior"},
  {image: "/gallery3.png" , caption: "window corner"},
  {image: "/gallery4.png" , caption: "interior"},
  {image: "/gallery5.png" , caption: "interior"},
  {image: "/gallery6.png" , caption: "interior"},
]
function Gallery(){
return(
    <div className="gallery" id="gallery">
      <div className="heading">Gallery</div>
      <div className="gallery-grid">
        {galleryImages.map((img,index)=>{
          return(
          <img src={img.image}  alt={img.caption} key={index}/>
          )
        })}
      </div>
    </div>
  )
}

export default Gallery;