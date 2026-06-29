import React, { useState } from 'react'
import capbig from '../assets/capbig.jpg'
import './Shop.css'
import capbrownnet from '../assets/capbrownnet.webp'
import capred from '../assets/capred.webp'
import capgreen from '../assets/capgreen.webp'
import capnetblue from '../assets/capnetblue.webp'
import cappurple from '../assets/cappurple.webp'
import capwhite from '../assets/capwhite.webp'
import shopbottombig from '../assets/shopbottombig.jpg'
import shopbtop1 from '../assets/shopbtop1.webp'
import shopbtop2 from '../assets/shopbtop2.webp'
import shopbtop3 from '../assets/shopbtop3.webp'
import hoodblue from '../assets/hoodblue.webp'
import hoodbpurple from '../assets/hoodbpurple.webp'
import hoodbwhite from '../assets/hoodbwhite.webp'
import shirt1 from '../assets/shirt1.webp'
import shirt2 from '../assets/shirt2.webp'
import shirt3 from '../assets/shirt3.webp'
import shirt4 from '../assets/shirt4.webp'
import shirt4_1 from '../assets/shirt4.1.webp'
import shirt5 from '../assets/shirt5.webp'
import shirt6 from '../assets/shirt6.webp'
import shirt6_1 from '../assets/shirt6.1.webp'
import shirt6_2 from '../assets/shirt6.2.webp'
import shirt7 from '../assets/shirt7.webp'
import shirt7_1 from '../assets/shirt7.1.webp'
import shirt7_2 from '../assets/shirt7.2.webp'
import shirt8 from '../assets/shirt8.webp'
import shirt8_1 from '../assets/shirt8.1.webp'
import shirt8_2 from '../assets/shirt8.2.webp'
import shirt8_3 from '../assets/shirt8.3.webp'
import shipping from '../assets/shipping.webp'
import contact from '../assets/contact.webp'
import lookbook from '../assets/lookbook.webp'
import press from '../assets/press.webp'
import capstack from '../assets/capstack.jpg'

const somervilleColors = {
    images: [capbrownnet, capnetblue],
    names: ['brown', 'blue'],
}

const aderdeenColors = {
    images: [capred, capgreen, cappurple, capwhite],
    names: ['red', 'green', 'purple', 'cream'],
}

const hoodieColors = {
    images: [hoodblue, hoodbpurple, hoodbwhite],
    names: ['blue', 'purple', 'cream'],
}

const oakwoodColors = {
    images: [shopbtop1, shopbtop2, shopbtop3],
    names: ['black', 'purple', 'cream'],
}

const shirt4Colors = {
    images: [shirt4, shirt4_1],
    names: ['black', 'white'],
}

const shirt6Colors = {
    images: [shirt6, shirt6_1, shirt6_2],
    names: ['navy', 'grey', 'olive'],
}

const shirt7Colors = {
    images: [shirt7, shirt7_1, shirt7_2],
    names: ['red', 'forest', 'charcoal'],
}

const shirt8Colors = {
    images: [shirt8, shirt8_1, shirt8_2, shirt8_3],
    names: ['navy', 'white', 'forest', 'cream'],
}

const colorMap = {
    brown: '#8B7355',
    blue: '#2563EB',
    red: '#DC2626',
    green: '#16A34A',
    purple: '#7C3AED',
    cream: '#F0DCC0',
    black: '#111111',
    white: '#F5F5F5',
    navy: '#1E3A5F',
    grey: '#808080',
    olive: '#556B2F',
    forest: '#228B22',
    charcoal: '#36454F',
}

const ProductCard = ({ title, price, className, img, options }) => {
    const [colorIdx, setColorIdx] = useState(0)
    const currentImg = options?.images?.[colorIdx] || img

    return (
        <div className={className}>
            <div className='img-wrap'>
                <img src={currentImg} alt={title} />
            </div>
            <div className={`${className}-des`}>
                <h3>{title}</h3>
                <p>{price}</p>
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
                        options={somervilleColors}
                    />
                    <ProductCard
                        title="Aderdeen 6-Panel Hat"
                        price="$65.00 USD"
                        className="shopleft1"
                        options={aderdeenColors}
                    />
                </div>
            </div>

            <div className='shop-bottom'>
                <div className='shop-bottom-left'>
                    <ProductCard
                        title="Oakwood TankTop"
                        price="$150.00 USD"
                        className="shopright1"
                        options={oakwoodColors}
                    />
                    <ProductCard
                        title="Oakwood Longsleeves"
                        price="$120.00 USD"
                        className="shopleft1"
                        options={hoodieColors}
                    />
                </div>
                <div className='shop-bottom-right'>
                    <img src={shopbottombig} alt="" />
                    <div className='des'>
                        <div className='des-right'>
                            <h1>APPAREL</h1>
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
                    title="Tee"
                    price="$85.00 USD"
                    className="shopgrid"
                    img={shirt1}
                />
                <ProductCard
                    title="Tee"
                    price="$85.00 USD"
                    className="shopgrid"
                    img={shirt2}
                />
                <ProductCard
                    title="Tee"
                    price="$85.00 USD"
                    className="shopgrid"
                    img={shirt3}
                />
                <ProductCard
                    title="Tee"
                    price="$85.00 USD"
                    className="shopgrid"
                    options={shirt4Colors}
                />
                <ProductCard
                    title="Tee"
                    price="$85.00 USD"
                    className="shopgrid"
                    img={shirt5}
                />
                <ProductCard
                    title="Tee"
                    price="$85.00 USD"
                    className="shopgrid"
                    options={shirt6Colors}
                />
                <ProductCard
                    title="Tee"
                    price="$85.00 USD"
                    className="shopgrid"
                    options={shirt7Colors}
                />
                <ProductCard
                    title="Tee"
                    price="$85.00 USD"
                    className="shopgrid"
                    options={shirt8Colors}
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
