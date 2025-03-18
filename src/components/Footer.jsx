import React from "react";
import "../styles/Footer.css";
import logoSecundario from '../icons/logoSecundario.png';
import GPay from '../images/Footer/GPay.jpg';
import APay from '../images/Footer/APay.jpg';
import PayPal from '../images/Footer/Paypal.jpg';
import MasterCard from '../images/Footer/MasterCard.jpg';
import Visa from '../images/Footer/Visa.jpg';
import NewsLetterSection from "./NewsLetterSection";

function Footer() {
  return (
    <>
    <NewsLetterSection/>
    <footer className="footer">
      <div className="footer-top pl-12">
        <div className="footer-logo">
          <img src={logoSecundario} alt="Saburo Logo" />
          <p className="max-w-60 text-justify">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
          <div className="footer-social">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h3>COMPANY</h3>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Works</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>
          <div>
            <h3>HELP</h3>
            <ul>
              <li><a href="#">Customer Support</a></li>
              <li><a href="#">Delivery Details</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3>FAQ</h3>
            <ul>
              <li><a href="#">Account</a></li>
              <li><a href="#">Manage Deliveries</a></li>
              <li><a href="#">Orders</a></li>
              <li><a href="#">Payments</a></li>
            </ul>
          </div>
          <div>
            <h3>RESOURCES</h3>
            <ul>
              <li><a href="#">Free eBooks</a></li>
              <li><a href="#">Development Tutorial</a></li>
              <li><a href="#">How to - Blog</a></li>
              <li><a href="#">Youtube Playlist</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom pl-20 pr-20">
        <p>Saburo © 2000-2023, All Rights Reserved</p>
        <div className="footer-payments">
          <img src={Visa} alt="Visa" />
          <img src={MasterCard} alt="Mastercard" />
          <img src={PayPal} alt="PayPal" />
          <img src={APay} alt="Apple Pay" />
          <img src={GPay} alt="Google Pay" />
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;