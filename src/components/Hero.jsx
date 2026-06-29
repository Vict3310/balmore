import React from 'react'
import './Hero.css'
import Navbar from './Navbar'

const Hero = () => {
    return (
        <section className="hero">
            <Navbar />
            <div className="hero-footer">
                <div className="hero-footer-left">
                    <h1>SPRING SUMMER<sup>26</sup></h1>
                    <p className="shop-now">SHOP NOW</p>
                </div>
                <div className="hero-footer-right">
                    <p>A collection shaped at the intersection of Montreal’s grit and technical innovation. As we move into the 2026 summer season, our latest range reimagines warm-weather running through lightweight construction, breathable performance, and considered design built for heat and movement.</p>
                </div>
            </div>
        </section>
    )
}

export default Hero
