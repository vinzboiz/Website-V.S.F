import React from "react";
import "../../assets/styles/Home/Featured/FeaturedGallery.css";
import galleryData from "../../data/Product/Country/CountryData.js";

const FeaturedGallery = () => {
  return (
    <div className="gallery-container">
      {/* Background đen phía sau */}
      <div className="gallery-background">
        <div className="gallery-content">
          {/* Bên trái - 1 ảnh lớn */}
          <div className="gallery-left">
            {galleryData
              .filter((item) => item.position === "left")
              .map((item) => (
                <div key={item.id} className="gallery-item">
                  <img src={item.src} alt={item.name} />
                  <p className="gallery-text">{item.name}</p>
                </div>
              ))}
          </div>

          {/* Bên phải - 4 ảnh (2 hàng, 2 cột) */}
          <div className="gallery-right">
            {galleryData
              .filter((item) => item.position === "right")
              .map((item) => (
                <div key={item.id} className="gallery-item">
                  <img src={item.src} alt={item.name} />
                  <p className="gallery-text">{item.name}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedGallery;
