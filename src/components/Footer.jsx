import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-top">
                <div className="footer-col empty"></div>
                <div className="footer-col">
                    <a href="#">Contact Us</a>
                    <a href="#">Instagram</a>
                    <a href="#">FAQs</a>
                </div>
                <div className="footer-col">
                    <a href="#">Shipping & returns</a>
                    <a href="#">Start a return</a>
                </div>
                <div className="footer-col">
                    <a href="#">Press</a>
                    <a href="#">Terms & policies</a>
                </div>
                <div className="footer-col newsletter-col">
                    <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
                    <div className="input-group">
                        <input type="email" placeholder="Enter your email address here" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-col">
                    <p>Copyright © 2026 Balmoral Running</p>
                </div>
                <div className="footer-col">
                    <p className="credits">CREDITS</p>
                </div>
                <div className="footer-col empty"></div>
                <div className="footer-col empty"></div>
                <div className="footer-col selectors-col">
                    <div className="selector">
                        <label>SELECT LANGUAGE</label>
                        <select defaultValue="English">
                            <option value="English">English</option>
                        </select>
                    </div>
                    <div className="selector">
                        <label>SELECT COUNTRY</label>
                        <select defaultValue="Nigeria (USD)">
                            <option value="Nigeria (USD)">Nigeria (USD)</option>
                        </select>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
