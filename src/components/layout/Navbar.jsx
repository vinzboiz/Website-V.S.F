import React, { useState, useEffect, useRef } from "react";
import "../../assets/styles/Common/Navbar.css";
import HamburgerMenuIcon from "../../assets/icons/Common/HamburgerMenu.png";
import Logo from "../../assets/icons/Common/Logo.png";
import SearchIcon from "../../assets/icons/Common/Search.png";
import ShoppingBagIcon from "../../assets/icons/Common/ShoppingBag.png";
import UserIcon from "../../assets/icons/Common/User.png";
import CloseIcon from "../../assets/icons/Common/close.png";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Xử lý thanh cuộn trong sidebar
  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (sidebar) {
      sidebar.style.overflowY =
        sidebar.scrollHeight > window.innerHeight ? "auto" : "hidden";
    }
  }, [isMenuOpen, isCartOpen]);

  // Hỗ trợ cuộn bằng cảm ứng
  useEffect(() => {
    const sidebar = sidebarRef.current;
    let startY = 0;

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const deltaY = e.touches[0].clientY - startY;
      if (sidebar) {
        sidebar.scrollTop -= deltaY;
        startY = e.touches[0].clientY;
      }
    };

    if (sidebar) {
      sidebar.addEventListener("touchstart", handleTouchStart);
      sidebar.addEventListener("touchmove", handleTouchMove);
    }

    return () => {
      if (sidebar) {
        sidebar.removeEventListener("touchstart", handleTouchStart);
        sidebar.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, [isMenuOpen, isCartOpen]);

  return (
    <>
      {(isMenuOpen || isCartOpen) && (
        <div
          className="overlay"
          onClick={() => {
            setIsMenuOpen(false);
            setIsCartOpen(false);
          }}
        ></div>
      )}

      <div className="container">
        <div
          className={`logo-container ${isSticky ? "sticky" : ""} desktop-only `}
        >
          <img src={Logo} className="icon logo" alt="logo" />
        </div>

        <div className={`navbar-container ${isSticky ? "sticky" : ""}`}>
          <img
            src={HamburgerMenuIcon}
            className="icon hamburger-menu-icon"
            alt="menu-icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <div className="icon-list">
            <img
              src={SearchIcon}
              className="icon search-icon desktop-only"
              alt="search-icon"
              onClick={() => setIsSearchActive(!isSearchActive)}
            />
            <img
              src={ShoppingBagIcon}
              className="icon shopping-bag-icon"
              alt="cart-icon"
              onClick={() => setIsCartOpen(!isCartOpen)}
            />
            <img
              src={UserIcon}
              className="icon user-icon desktop-only"
              alt="user-icon"
            />
          </div>
        </div>

        {/* Sidebar Menu */}
        <div
          className={`sidebar-menu ${isMenuOpen ? "open" : ""}`}
          ref={sidebarRef}
        >
          <div className="icon-sidebar-container">
            <img src={Logo} className="icon logo-mobile-ipad-only" alt="logo" />

            <img
              src={CloseIcon}
              className="icon close-icon"
              alt="close-icon"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
          <ul className="menu-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Collections</a> <span>›</span>
            </li>
            <li>
              <a href="#">Categories</a> <span>›</span>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Sale</a>
            </li>
          </ul>
        </div>

        {/* Cart Sidebar */}
        <div
          className={`cart-sidebar ${isCartOpen ? "open" : ""}`}
          ref={sidebarRef}
        >
          <img
            src={CloseIcon}
            className="icon close-icon"
            alt="close-icon"
            onClick={() => setIsCartOpen(false)}
          />
          <div className="cart-content">
            <h3>Your cart is empty</h3>
            <button
              className="continue-shopping-btn"
              onClick={() => setIsCartOpen(false)}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
