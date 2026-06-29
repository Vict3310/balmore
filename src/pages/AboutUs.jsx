import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="page-container about-page">
      <div className="about-hero">
        <video
          src="https://www.balmoralrunning.com/cdn/shop/videos/c/vp/c96a1942b1894cf18a35d6da49aee5a7/c96a1942b1894cf18a35d6da49aee5a7.HD-1080p-7.2Mbps-81646476.mp4?v=0"
          playsInline
          muted
          loop
          autoPlay
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div className="about-hero-overlay">
          <h2>About Us</h2>
        </div>
      </div>
      <div className="about-content">
        <div className="about-content-left">
          <h3>THE BRAND</h3>
        </div>
        <div className="about-content-right">
          <p>
            Balmoral was founded in Canada to create timeless garments shaped by the country’s distinct climate and way of life. Drawing from its Canadian heritage, the brand takes inspiration from landscapes where long winters demand protection, resilience, and warmth, and short summers invite lightness and movement. Each collection reinterprets essential pieces through this seasonal contrast, balancing function and refinement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
