import React from "react";
import PropTypes from "prop-types";
import "../../assets/styles/Home/Marquee/CommonMarquee.css"; // CSS chung cho Marquee

const Marquee = ({ texts, speed, className }) => {
  // Nếu chỉ có một text, nhân đôi để tạo hiệu ứng chạy vô hạn
  const repeatedTexts = texts.length === 1 ? Array(10).fill(texts[0]) : texts;

  return (
    <div className={`marquee-wrapper ${className}`}>
      {" "}
      {/* Nhận className từ props */}
      <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="marquee-content">
            {repeatedTexts.map((text, index) => (
              <React.Fragment key={index}>
                <span className="shape-circle shape--sm">•</span>
                <span className="bold text-xxs">{text}</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

Marquee.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  speed: PropTypes.number,
  className: PropTypes.string, // Nhận className từ props
};

Marquee.defaultProps = {
  speed: 10,
  className: "",
};

export default Marquee;
