import pay1 from "../../assets/icons/Pay/amex.png";
import pay2 from "../../assets/icons/Pay/jcb.png";
import pay3 from "../../assets/icons/Pay/maestro.png";
import pay4 from "../../assets/icons/Pay/master.png";
import pay5 from "../../assets/icons/Pay/paypal.png";
import pay6 from "../../assets/icons/Pay/visa.png";
import social1 from "../../assets/icons/Social/facebook.png";
import social2 from "../../assets/icons/Social/insta.png";
import social3 from "../../assets/icons/Social/x.png";
import social4 from "../../assets/icons/Social/youtube.png";

const FooterData = {
  customerService: [
    { name: "Help", link: "#" },
    { name: "Track Order", link: "#" },
    { name: "Size Chart", link: "#" },
  ],
  worryFreeShopping: [
    { name: "Promo Terms and Exclusions", link: "#" },
    { name: "Coupons & Promotions", link: "#" },
    { name: "Transfer Shield", link: "#" },
    { name: "Safe Shopping", link: "#" },
    { name: "Delivery & Shipping", link: "#" },
    { name: "365-Day Returns", link: "#" },
  ],
  information: [
    { name: "My Account", link: "#" },
    { name: "About Us", link: "#" },
    { name: "Affiliate Program", link: "#" },
  ],
  socialLinks: [
    { id: 1, src: social1, name: "Facebook" },
    { id: 2, src: social2, name: "TikTok" },
    { id: 3, src: social3, name: "YouTube" },
    { id: 4, src: social4, name: "Instagram" },
  ],
  policies: [
    { name: "Privacy Policy", link: "#" },
    { name: "Terms of Use", link: "#" },
    { name: "Modern Slavery and Child Labour Statement", link: "#" },
    { name: "UK Tax Strategy", link: "#" },
    { name: "Site Map", link: "#" },
    { name: "Cookie Policy & Management", link: "#" },
    { name: "Product Concerns", link: "#" },
  ],
  paymentIcons: [
    { id: 1, src: pay1, alt: "amex" },
    { id: 2, src: pay2, alt: "jcb" },
    { id: 3, src: pay3, alt: "maestro" },
    { id: 4, src: pay4, alt: "master" },
    { id: 5, src: pay5, alt: "PayPal" },
    { id: 6, src: pay6, alt: "visa" },
  ],
};

export default FooterData;
