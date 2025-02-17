import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "../../assets/styles/Home/Carousel/Carousel.css";
import prevIcon from "../../assets/icons/Common/prev.png";
import nextIcon from "../../assets/icons/Common/next.png";

const Carousel = ({ data, showMoreButton, onMoreClick }) => {
  const carouselRef = useRef(null);
  const scrollRef = useRef(null);
  const thumbRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = data?.length || 0;
  const visibleSlides = 5;
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < totalSlides - visibleSlides) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      const itemWidth =
        carouselRef.current.querySelector(".carousel-item").clientWidth + 20; // 20px là khoảng cách giữa ảnh
      const scrollAmount = currentIndex * itemWidth;
      carouselRef.current.style.transition = "transform 0.5s ease-in-out";
      carouselRef.current.style.transform = `translateX(-${scrollAmount}px)`;
    }
    updateScrollbar();
  }, [currentIndex]);

  const updateScrollbar = () => {
    if (scrollRef.current && thumbRef.current) {
      const maxScroll =
        scrollRef.current.clientWidth - thumbRef.current.clientWidth;
      const scrollAmount =
        (currentIndex / (totalSlides - visibleSlides)) * maxScroll;
      thumbRef.current.style.left = `${scrollAmount}px`;
    }
  };

  // 📌 Xử lý sự kiện vuốt trên màn hình cảm ứng
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;

    if (swipeDistance > 50) {
      nextSlide(); // Vuốt sang trái => chuyển slide tiếp theo
    } else if (swipeDistance < -50) {
      prevSlide(); // Vuốt sang phải => chuyển slide trước đó
    }
  };

  return (
    <div className="carousel-container">
      {totalSlides > 0 ? (
        <>
          <button
            className="arrow left only-desktop"
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <img src={prevIcon} alt="Prev" />
          </button>

          <div
            className="carousel-wrapper"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="carousel-track" ref={carouselRef}>
              {data.map((img, index) => (
                <div key={index} className="carousel-item">
                  <img src={img.src} alt={img.name} />
                  <p className="image-name">{img.name}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            className="arrow right only-desktop"
            onClick={nextSlide}
            disabled={currentIndex >= totalSlides - visibleSlides}
          >
            <img src={nextIcon} alt="Next" />
          </button>

          <div
            className="scrollbar-container"
            ref={scrollRef}
            onClick={(e) => {
              const { left, width } = scrollRef.current.getBoundingClientRect();
              const clickPosition = e.clientX - left;
              const newIndex = Math.round(
                (clickPosition / width) * (totalSlides - visibleSlides)
              );
              setCurrentIndex(newIndex);
            }}
          >
            <div className="scrollbar-thumb" ref={thumbRef}></div>
          </div>

          {showMoreButton && (
            <button className="more-button" onClick={onMoreClick}>
              More
            </button>
          )}
        </>
      ) : (
        <p className="carousel-empty">No images available</p>
      )}
    </div>
  );
};

// ✅ Thêm PropTypes để kiểm tra kiểu dữ liệu của props
Carousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired, // ✅ Đảm bảo data là mảng chứa các object có id, src, name
  showMoreButton: PropTypes.bool, // ✅ Nút "More" có bật hay không
  onMoreClick: PropTypes.func, // ✅ Hàm callback khi bấm "More"
};

// ✅ Giá trị mặc định cho props
Carousel.defaultProps = {
  data: [],
  showMoreButton: true,
  onMoreClick: () => console.log("More button clicked!"),
};

export default Carousel;
