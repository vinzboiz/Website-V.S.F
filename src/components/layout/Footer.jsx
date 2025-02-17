import React from "react";
import "../../assets/styles/Common/Footer.css"; // Import CSS
import FooterData from "../../data/Footer/Footer.js"; // Import dữ liệu

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Cột 1: Customer Service */}
        <div className="footer-column">
          <h4>Customer Service</h4>
          <ul>
            {FooterData.customerService.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Cột 2: Worry Free Shopping */}
        <div className="footer-column">
          <h4>Worry Free Shopping</h4>
          <ul>
            {FooterData.worryFreeShopping.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Cột 3: Thông tin */}
        <div className="footer-column">
          <h4>Information</h4>
          <ul>
            {FooterData.information.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Cột 4: Đăng ký email + Follow Us */}
        <div className="footer-column subscribe">
          <h3>Stay updated on sales, new items and more</h3>
          <button className="subscribe-button">SIGN UP & SAVE 15%</button>

          {/* Follow Us */}
          <div className="follow-us">Follow Us</div>
          <div className="social-icons">
            {FooterData.socialLinks.map((social, index) => (
              <img key={index} src={social.src} alt={social.name} />
            ))}
          </div>
        </div>
      </div>

      {/* Chính sách & điều khoản */}
      <div className="footer-bottom">
        <p>
          {FooterData.policies.map((policy, index) => (
            <span key={index}>
              <a href={policy.link}>{policy.name}</a>
              {index !== FooterData.policies.length - 1 && " | "}
            </span>
          ))}
        </p>
        <p>© 2025, Fanatics, LLC. All Rights Reserved.</p>
        <div className="payment-icons">
          {FooterData.paymentIcons.map((icon, index) => (
            <img key={index} src={icon.src} alt={icon.alt} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
