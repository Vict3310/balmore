import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import capbig from '../assets/capbig.jpg'
import './Shop.css'
import shopbottombig from '../assets/shopbottombig.jpg'
import shipping from '../assets/shipping.webp'
import contact from '../assets/contact.webp'
import lookbook from '../assets/lookbook.webp'
import press from '../assets/press.webp'
import capstack from '../assets/capstack.jpg'

// ── Helper to load clean assets ──
import capgreen from '../assets/capgreen.webp'
import cappurple from '../assets/cappurple.webp'
import capred from '../assets/capred.webp'
import capwhite from '../assets/capwhite.webp'
import capbrownnet from '../assets/capbrownnet.webp'
import capnetblue from '../assets/capnetblue.webp'

import newtank3 from '../assets/newtank3.webp'
import newtank4 from '../assets/newtank4.webp'
import newtank5 from '../assets/newtank5.webp'

import ls6 from '../assets/ls6.webp'
import ls7 from '../assets/ls7.webp'
import ls8 from '../assets/ls8.webp'

import shirt6 from '../assets/shirt6.webp'
import shirt6_1 from '../assets/shirt6.1.webp'
import shirt7_1 from '../assets/shirt7.1.webp'
import shirt7 from '../assets/shirt7.webp'
import shirt1 from '../assets/shirt1.webp'

import tshirt8 from '../assets/tshirt8.webp'
import tshirt9 from '../assets/tshirt9.webp'
import tshirt10 from '../assets/tshirt10.webp'

import shirt3 from '../assets/shirt3.webp'
import shirt4 from '../assets/shirt4.webp'
import shirt5 from '../assets/shirt5.webp'

import tshirt4 from '../assets/tshirt4.webp'
import tshirt5 from '../assets/tshirt5.webp'
import tshirt6 from '../assets/tshirt6.webp'
import tshirt7 from '../assets/tshirt7.webp'

const somervilleColors = {
    images: [capgreen, cappurple],
    names: ['Navy', 'Gun Metal'],
}

const aderdeenColors = {
    images: [capred, capwhite, capbrownnet, capnetblue],
    names: ['Sand', 'Red', 'Forest Green', 'Navy'],
}

// ── Oakwood Collection ──
const oakwoodColors = {
    images: [newtank3, newtank4, newtank5],
    names: ['Black', 'Navy', 'Stone'],
}

const oakwoodSleeveColors = {
    images: [ls6, ls7, ls8],
    names: ['Black', 'Navy', 'Stone'],
}

// ── Cotton T-Shirts ──
const athleisureImg = shirt6
const galleryImg = shirt6_1
const harvestImg = shirt7_1
const radiusImg = shirt7

// ── Performance T-Shirts ──
const oxfordImg = shirt1

const plazaColors = {
    images: [tshirt8, tshirt9, tshirt10],
    names: ['Brown', 'Baby blue', 'Cream'],
}

const sportsGamesColors = {
    images: [shirt3, shirt4, shirt5],
    names: ['White', 'Forest Green', 'Wine'],
}

const lansdowneColors = {
    images: [tshirt4, tshirt5, tshirt6, tshirt7],
    names: ['Cream', 'Blue', 'Dark grey', 'White'],
}

const colorMap = {
    Navy: '#1e1e4c',
    'Gun Metal': '#575757',
    Sand: '#eae1c3',
    Red: '#c11111',
    'Forest Green': '#123005',
    Black: '#000000',
    Stone: '#E0D8C8',
    Cream: '#efe8cd',
    Blue: '#adc9f2',
    'Dark grey': '#353535',
    White: '#FFFFFF',
    Brown: '#492e0f',
    'Baby blue': '#63b0e1',
    Wine: '#4c0e20',
}

const slugify = (text) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

const ProductCard = ({ title, price, className, img, options }) => {
    const [colorIdx, setColorIdx] = useState(0)
    const currentImg = options?.images?.[colorIdx] || img

    const passedState = {
        img: img || options?.images?.[0],
        title,
        price,
        options: options ? {
            names: options.names,
            images: options.images,
            hexes: options.names.map(name => colorMap[name] || '#000')
        } : null
    }

    return (
        <div className={className}>
            <Link to={`/products/${slugify(title)}`} state={passedState} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className='img-wrap'>
                    <img src={currentImg} alt={title} />
                </div>
            </Link>
            <div className={`${className}-des`}>
                <Link to={`/products/${slugify(title)}`} state={passedState} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h3>{title}</h3>
                    <p>{price}</p>
                </Link>
                {options && (
                    <div className='color-swatches'>
                        {options.names.map((name, i) => (
                            <button
                                key={name}
                                className={`swatch ${colorIdx === i ? 'active' : ''}`}
                                onClick={() => setColorIdx(i)}
                            >
                                <span className='swatch-dot' style={{ background: colorMap[name] }} />
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

const Shop = () => {
    return (
        <div className='shop'>
            <div className='shop-top'>
                <div className='shop-left'>
                    <img src={capbig} alt="" />
                    <div className='des'>
                        <div className='des-right'>
                            <h1>HEADWEAR</h1>
                        </div>
                        <div className='des-right'>
                            <h3>SS26 Collection</h3>
                            <p>For Spring–Summer 2026, Balmoral presents a range of headwear designed for warm weather movement and everyday wear, lightweight, breathable, and precise in construction. Each piece is shaped by performance needs and daily use, with a considered approach to form and function.</p>
                            <button className='des-btn'>SHOP HEADWEAR</button>
                        </div>
                    </div>
                </div>
                <div className='shop-right'>
                    <ProductCard
                        title="Somerville 4-Panel Hat"
                        price="$65.00 USD"
                        className="shopright1"
                        img={somervilleColors.images[0]}
                        options={somervilleColors}
                    />
                    <ProductCard
                        title="Aberdeen 6-Panel Hat"
                        price="$65.00 USD"
                        className="shopleft1"
                        img={aderdeenColors.images[0]}
                        options={aderdeenColors}
                    />
                </div>
            </div>

            <div className='shop-bottom'>
                <div className='shop-bottom-left'>
                    <ProductCard
                        title="Oakwood Tank Top"
                        price="$65.00 USD"
                        className="shopright1"
                        img={oakwoodColors.images[0]}
                        options={oakwoodColors}
                    />
                    <ProductCard
                        title="Oakwood Longsleeve"
                        price="$95.00 USD"
                        className="shopleft1"
                        img={oakwoodSleeveColors.images[0]}
                        options={oakwoodSleeveColors}
                    />
                </div>
                <div className='shop-bottom-right'>
                    <img src={shopbottombig} alt="" />
                    <div className='des'>
                        <div className='des-right'>
                            <h1>THE OAKWOOD COLLECTION</h1>
                        </div>
                        <div className='des-right'>
                            <h3>THE OAKWOOD COLLECTION</h3>
                            <p>The Oakwood collection brings together a selection of styles designed for race day performance. Lightweight, focused, and built to move, each piece is refined for speed and clarity when it matters most.</p>
                            <button className='des-btn'>DISCOVER</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='shop-grid'>
                <div className='shopgrid-heading'>
                    <h1>Cotton T-shirts</h1>
                </div>
                <ProductCard
                    title="Athleisure T-Shirt"
                    price="$75.00 USD"
                    className="shopgrid"
                    img={athleisureImg}
                />
                <ProductCard
                    title="Gallery T-Shirt"
                    price="$75.00 USD"
                    className="shopgrid"
                    img={galleryImg}
                />
                <ProductCard
                    title="Harvest T-Shirt"
                    price="$75.00 USD"
                    className="shopgrid"
                    img={harvestImg}
                />
                <ProductCard
                    title="Radius T-Shirt"
                    price="$75.00 USD"
                    className="shopgrid"
                    img={radiusImg}
                />
            </div>

            <div className='shop-grid'>
                <div className='shopgrid-heading'>
                    <h1>Performance T-Shirts</h1>
                </div>
                <ProductCard
                    title="Oxford Cropped T-Shirt"
                    price="$105.00 USD"
                    className="shopgrid"
                    img={oxfordImg}
                />
                <ProductCard
                    title="Plaza Ringer T-Shirt"
                    price="$110.00 USD"
                    className="shopgrid"
                    img={plazaColors.images[0]}
                    options={plazaColors}
                />
                <ProductCard
                    title="Sports & Games Cropped Ringer T-Shirt"
                    price="$110.00 USD"
                    className="shopgrid"
                    img={sportsGamesColors.images[0]}
                    options={sportsGamesColors}
                />
                <ProductCard
                    title="Lansdowne T-Shirt"
                    price="$105.00 USD"
                    className="shopgrid"
                    img={lansdowneColors.images[0]}
                    options={lansdowneColors}
                />
            </div>

            <div className='shop-video-section'>
                <div className='shop-video-left'>
                    <img src={capstack} alt="" />
                    <div className='des'>
                        <div className='des-right'>
                            <h1>ABOUT US</h1>
                        </div>
                        <div className='des-right'>
                            <h3>BALMORAL</h3>
                            <p>Balmoral was founded in Canada to create timeless garments shaped by the country's distinct climate and way of life. Our collections are built for movement, designed with precision, and made to last beyond the season.</p>
                            <button className='des-btn'>DISCOVER MORE</button>
                        </div>
                    </div>
                </div>
                <div className='shop-video-right'>
                    <video
                        src="https://www.balmoralrunning.com/cdn/shop/videos/c/vp/c96a1942b1894cf18a35d6da49aee5a7/c96a1942b1894cf18a35d6da49aee5a7.HD-1080p-7.2Mbps-81646476.mp4?v=0"
                        playsInline
                        muted
                        loop
                        autoPlay
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            </div>

            <div className='shop-footer'>
                <div className='shop-footer-card'>
                    <h2 className='card-title'>Shipping & returns</h2>
                    <div className='img-wrap'>
                        <img src={shipping} alt="" />
                    </div>
                    <p className='card-desc'>Review our shipping and returns information</p>
                </div>
                <div className='shop-footer-card'>
                    <h2 className='card-title'>Contact</h2>
                    <div className='img-wrap'>
                        <img src={contact} alt="" />
                    </div>
                    <p className='card-desc'>Email our team for all inquiries</p>
                </div>
                <div className='shop-footer-card'>
                    <h2 className='card-title'>Lookbook</h2>
                    <div className='img-wrap'>
                        <img src={lookbook} alt="" />
                    </div>
                    <p className='card-desc'>Explore the Spring–Summer 26 Lookbook</p>
                </div>
                <div className='shop-footer-card'>
                    <h2 className='card-title'>Press</h2>
                    <div className='img-wrap'>
                        <img src={press} alt="" />
                    </div>
                    <p className='card-desc'>Discover our selected features and mentions</p>
                </div>
            </div>
        </div>
    )
}

export default Shop
