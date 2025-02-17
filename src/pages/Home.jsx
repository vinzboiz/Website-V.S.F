import React from "react";
import "../assets/styles/Home/Main/Style.css";
import marqueeData from "../data/Marquees/Marquee.js";
import Marquee from "../components/common/Marquee.jsx";
import DotMarquee from "../components/common/MarqueeDot.jsx";
import "../assets/styles/Home/Marquee/DotMarquee.css";
import "../assets/styles/Home/Marquee/WhiteMarquee.css";
import Navbar from "../components/layout/Navbar.jsx";
import Slide1 from "../components/common/Slide.jsx";
import BannerData from "../data/Banner/Banner.js";
import Carousel from "../components/common/Carousel.jsx";
import clubsImages from "../data/Product/Clubs/ClubsData.js"; // Import danh sách ảnh
import "../assets/styles/Home/Marquee/BlackMarquee.css";
import CountryGallery from "../components/Home/FeaturedGallery.jsx";
import FeaturedBrand from "../components/Home/FeaturedBrand.jsx";
import MoreSection from "../components/Home/MoreSection.jsx";
import FeatureSection from "../data/More/FeatureSection.js";
import Footer from "../components/layout/Footer.jsx";
import UpButton from "../assets/icons/Common/upbutton.png";
const Home = () => {
  const handleMoreClick = () => {
    console.log("More button clicked!");
    // Điều hướng đến trang sản phẩm hoặc mở danh mục lớn hơn
  };

  return (
    <div className="container">
      <Navbar />
      {/*Marquee tren cung co dau cham */}
      <div className="dot-marquee-container">
        {marqueeData
          .filter((item) => item.id === 1)
          .map((item, index) => (
            <DotMarquee
              key={index}
              texts={item.texts}
              speed={item.speed}
              className={item.className}
            />
          ))}
      </div>
      {/* Slide dau tien o trang chu */}
      <Slide1 />
      {/* Gioi thieu ve quan */}
      <div className="introduction-container">
        <div>
          <div className="question">WHO ARE WE?</div>
          <div className="answer">
            We at Vinz Shop Football are fans of the beautiful game just like
            you! Encapsulating the plethora of emotions from the realms of
            football and combining them with fashion trends in our designs,
            materialising them for you to wear in.
          </div>
        </div>
      </div>
      {/* anh shop */}
      <div className="banner-shop">
        {BannerData.filter((item) => item.id === 1).map((item) => (
          <img
            key={item.id}
            className={item.className}
            src={item.src}
            alt={item.alt}
          />
        ))}
      </div>
      {/* Marquee trang ko co dot choose club */}
      <div className="white-marquee-container">
        {marqueeData
          .filter((item) => item.id === 2)
          .map((item, index) => (
            <Marquee
              key={index}
              texts={item.texts}
              speed={item.speed}
              className={item.className}
            />
          ))}
      </div>

      {/* Carousel cua trang chu */}
      <Carousel
        data={clubsImages}
        showMoreButton={true}
        onMoreClick={handleMoreClick}
      />
      {/* Marquee den ko co dot */}
      <div className="black-marquee-container">
        {marqueeData
          .filter((item) => item.id === 3)
          .map((item, index) => (
            <Marquee
              key={index}
              texts={item.texts}
              speed={item.speed}
              className={item.className}
            />
          ))}
      </div>
      {/*Them gallery theo country */}
      <CountryGallery />
      {/* anh shop sell*/}
      <div className="sell-shop">
        {BannerData.filter((item) => item.id === 2).map((item) => (
          <img
            key={item.id}
            className={item.className}
            src={item.src}
            alt={item.alt}
          />
        ))}
      </div>
      {/* Marquee trang ko co dot choose brand */}
      <div className="white-marquee-container">
        {marqueeData
          .filter((item) => item.id === 4)
          .map((item, index) => (
            <Marquee
              key={index}
              texts={item.texts}
              speed={item.speed}
              className={item.className}
            />
          ))}
      </div>
      {/* brand giay */}
      <FeaturedBrand />
      {/*cac muc san pham khac */}
      <MoreSection />
      {/*Old kit section */}
      <div className="old-kit-container">
        {BannerData.filter((item) => item.id === 3).map((item) => (
          <img
            key={item.id}
            className={item.className}
            src={item.src}
            alt={item.alt}
          />
        ))}
        <div className="old-kit-info">
          <div className="old-kit-title"> Classic Kits</div>
          <div className="old-kit-desc">
            Timeless Style for the Beautiful Game.
          </div>
        </div>
        <button className="old-kit-button"> Shop Now</button>
      </div>
      {/*Feature Section*/}
      <div className="feature-section-container">
        {FeatureSection.map((item) => (
          <div key={item.id} className="feature-section-item">
            <img src={item.src} alt={item.name} />
            <p className="feature-section-name">{item.name}</p>
          </div>
        ))}
      </div>
      {/*description vinz shop*/}
      <div className="desc-shop-container">
        <div className="desc-shop-title">
          Vinz Shop Football – Gear Up Like a Pro!
        </div>
        <div className="desc-shop-desc">
          At Vinz Shop Football (V.S.F), we share your passion for football! We
          provide top-quality football jerseys, boots, gloves, socks, and
          accessories to help you play and support your favorite team in style.
          <br />
          From official club kits of Manchester United, Liverpool, Barcelona,
          Real Madrid, PSG, and more to high-performance football gear, we’ve
          got everything you need. Plus, with custom printing services, you can
          rep your favorite player like never before! When you think football,
          think V.S.F!
        </div>
      </div>
      {/* Video YouTube bên dưới phần mô tả shop */}
      <div className="youtube-container">
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/u2FLSmVsFs0"
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Footer />
      {/* Nút cuộn lên đầu trang */}
      <img
        src={UpButton}
        alt="Scroll to top"
        className="scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </div>
  );
};

export default Home;
