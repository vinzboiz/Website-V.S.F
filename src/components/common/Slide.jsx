import React, { useState, useEffect } from "react";
import imageData from "../../data/Slides/Slide.js";
import "../../assets/styles/Home/Slide/Slide.css";

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Chuyển slide mỗi 5 giây

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageData.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      {/* Vùng click chuyển slide */}
      <div className="slider-left" onClick={prevSlide}></div>
      <div className="slider-right" onClick={nextSlide}></div>

      {imageData.map((item, index) => (
        <div
          key={item.id}
          className={`slide ${index === currentIndex ? "active" : ""}`}
        >
          <img src={item.src} alt={item.name} className="slide-image" />

          {/* Thông tin sản phẩm */}
          <div className="slide-info">
            <div className="product-name">{item.name}</div>
            <div className="product-description">{item.description}</div>
          </div>
        </div>
      ))}

      {/* Thanh trượt (chấm tròn) */}
      <div className="dots-container">
        {imageData.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? "active-dot" : ""}`}
            onClick={() => goToSlide(index)} // Thêm sự kiện click vào chấm tròn
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slide;
