import React, { useRef, useEffect, useState } from "react";
import "../../assets/styles/Home/More/MoreSection.css";
import moreSectionData from "../../data/More/MoreSection.js";

const MoreSection = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // **Xử lý cuộn ngang khi kéo bằng chuột**
  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += event.deltaY * 2; // Tăng tốc độ cuộn
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  // 📌 Kéo chuột để cuộn
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Tăng tốc độ kéo
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="featured-container">
      <h2 className="featured-title">More</h2>
      <div
        className="featured-scrollbar"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        style={{ cursor: isDragging ? "grabbing" : "grab" }} // Thay đổi con trỏ khi kéo
      >
        {moreSectionData.map((item) => (
          <div key={item.id} className="featured-item">
            <img src={item.src} alt={item.name} />
            <div className="featured-info">
              <p className="featured-name">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreSection;
