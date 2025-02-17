import React from "react";
import "../../assets/styles/Home/Featured/FeaturedBrand.css";
import brandData from "../../data/Product/Shoes/BrandShoesData.js";

const FeaturedBrand = () => {
  return (
    <div className="brand-container">
      {/* Background */}
      <div className="brand-background">
        <div className="brand-content">
          {/* 🌟 Phần trên: 2 ảnh lớn */}
          <div className="brand-top">
            {brandData.top.map((item) => (
              <div key={item.id} className="brand-item">
                <img src={item.src} alt={item.name} />
                <p className="brand-text">{item.name}</p>
              </div>
            ))}
          </div>

          {/* 🔥 Phần dưới: 5 ảnh nhỏ */}
          <div className="brand-bottom">
            {brandData.bottom.map((item, index) => (
              <div
                key={item.id}
                className={`brand-item ${index === 3 ? "more-item" : ""}`}
              >
                <img src={item.src} alt={item.name} />
                <p className="brand-text">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBrand;
