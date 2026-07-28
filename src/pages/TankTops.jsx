import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './TankTops.css'
import heroImg from '../assets/tankhero.webp'
import tank1 from '../assets/newtank1.webp'
import tank2 from '../assets/newtank2.webp'
import tank3 from '../assets/newtank3.webp'
import tank4 from '../assets/newtank4.webp'
import tank5 from '../assets/newtank5.webp'
import tank6 from '../assets/newtank6.webp'
import tank7 from '../assets/newtank7.webp'
import tank8 from '../assets/newtank8.webp'
import tank9 from '../assets/newtank9.webp'
import tank10 from '../assets/newtank10.webp'
import tank11 from '../assets/newtank11.webp'
import tank12 from '../assets/newtank12.webp'

import shipping from '../assets/shipping.webp'
import contact from '../assets/contact.webp'
import lookbook from '../assets/lookbook.webp'
import press from '../assets/press.webp'

const products = [
    { img: tank1,  title: 'Oakwood Tank Top', price: '$65.00 USD' },
    { img: tank2,  title: 'Oakwood Tank Top', price: '$65.00 USD' },
    { img: tank3,  title: 'Oakwood Tank Top', price: '$65.00 USD' },
    { img: tank4,  title: 'Track Club Tank Top', price: '$60.00 USD' },
    { img: tank5,  title: 'Track Club Tank Top', price: '$60.00 USD' },
    { img: tank6,  title: 'Track Club Tank Top', price: '$60.00 USD' },
    { img: tank7,  title: 'Academy Cropped Tank Top', price: '$60.00 USD' },
    { img: tank8,  title: 'Academy Cropped Tank Top', price: '$60.00 USD' },
    { img: tank9,  title: 'Harland Tank Top', price: '$65.00 USD' },
    { img: tank10, title: 'Harland Tank Top', price: '$65.00 USD' },
    { img: tank11, title: 'Hudson Muscle Tee', price: '$65.00 USD' },
    { img: tank12, title: 'Hudson Muscle Tee', price: '$65.00 USD' },
]

const slugify = (text) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

const ProductCard = ({ img, title, price }) => {
    const passedState = {
        img,
        title,
        price,
        options: null
    };

    return (
        <div className="shopgrid">
            <Link to={`/products/${slugify(title)}`} state={passedState} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className='img-wrap'>
                    <img src={img} alt={title} />
                </div>
            </Link>
            <div className="shopgrid-des">
                <Link to={`/products/${slugify(title)}`} state={passedState} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h3>{title}</h3>
                    <p>{price}</p>
                </Link>
            </div>
        </div>
    )
}

const TankTops = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="tanktops-page">
            {/* ── HERO: landscape ── */}
            <div className="tanktops-hero">
                <img src={heroImg} alt="Tank Tops Hero" />
                <h1>Tank Tops</h1>
            </div>

            {/* ── CONTROLS BAR ── */}
            <div className="tanktops-header">
                <div className="tanktops-controls">
                    <span>Collection</span>
                    <span>&#xrightleftharpoons; Filter by</span>
                </div>
            </div>

            {/* ── PRODUCT GRID ── */}
            <div className="shop-grid">
                {products.map((p, i) => (
                    <ProductCard key={i} img={p.img} title={p.title} price={p.price} />
                ))}
            </div>

            {/* ── FOOTER CARDS ── */}
            <div className='tanktops-footer'>
                <div className='tanktops-footer-card'>
                    <h2 className='card-title'>Shipping &amp; returns</h2>
                    <div className='img-wrap'>
                        <img src={shipping} alt="Shipping" />
                    </div>
                    <p className='card-desc'>Review our shipping and returns information</p>
                </div>
                <div className='tanktops-footer-card'>
                    <h2 className='card-title'>Contact</h2>
                    <div className='img-wrap'>
                        <img src={contact} alt="Contact" />
                    </div>
                    <p className='card-desc'>Email our team for all inquiries</p>
                </div>
                <div className='tanktops-footer-card'>
                    <h2 className='card-title'>Lookbook</h2>
                    <div className='img-wrap'>
                        <img src={lookbook} alt="Lookbook" />
                    </div>
                    <p className='card-desc'>Explore the Spring–Summer 26 Lookbook</p>
                </div>
                <div className='tanktops-footer-card'>
                    <h2 className='card-title'>Press</h2>
                    <div className='img-wrap'>
                        <img src={press} alt="Press" />
                    </div>
                    <p className='card-desc'>Discover our selected features and mentions</p>
                </div>
            </div>
        </div>
    )
}

export default TankTops
