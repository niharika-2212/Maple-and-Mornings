import React from "react";
import "../assets/styles/Gallery.css";

const galleryImages = [
  {image: "/gallery1.webp" , caption: "interior"},
  {image: "/gallery2.webp" , caption: "interior"},
  {image: "/gallery3.webp" , caption: "window corner"},
  {image: "/gallery4.webp" , caption: "interior"},
  {image: "/gallery5.webp" , caption: "interior"},
  {image: "/gallery6.webp" , caption: "interior"},
]
function Gallery(){
return(
    <div className="gallery" id="gallery">
      <div className="heading">Gallery</div>
      <div className="gallery-grid">
        {galleryImages.map((img,index)=>{
          return(
          <img src={img.image} loading="lazy" alt={img.caption} key={index}/>
          )
        })}
      </div>
    </div>
  )
}

export default Gallery;