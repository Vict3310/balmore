import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './TShirts.css'

const ASSETS = '../assets/T-Shirts & Longsleeves – Balmoral Sports_files/'

// ── T-Shirts
import tshirt1 from '../assets/tshirt1.webp'
import tshirt2 from '../assets/tshirt2.webp'
import tshirt3 from '../assets/tshirt3.webp'
import tshirt4 from '../assets/tshirt4.webp'
import tshirt5 from '../assets/tshirt5.webp'
import tshirt6 from '../assets/tshirt6.webp'
import tshirt7 from '../assets/tshirt7.webp'
import tshirt8 from '../assets/tshirt8.webp'
import tshirt9 from '../assets/tshirt9.webp'
import tshirt10 from '../assets/tshirt10.webp'
// ── Longsleeves
import ls1 from '../assets/ls1.webp'
import ls2 from '../assets/ls2.webp'
import ls3 from '../assets/ls3.webp'
import ls4 from '../assets/ls4.webp'
import ls5 from '../assets/ls5.webp'
import ls6 from '../assets/ls6.webp'
import ls7 from '../assets/ls7.webp'
import ls8 from '../assets/ls8.webp'
// ── Hero
import hero from '../assets/tshirthero.jpg'

const tshirts = [
    { img: tshirt1,  title: 'Radius T-Shirt',                   price: '$85.00 USD' },
    { img: tshirt2,  title: 'Lansdowne T-Shirt',                price: '$85.00 USD' },
    { img: tshirt3,  title: 'Oxford Cropped T-Shirt',           price: '$75.00 USD' },
    { img: tshirt4,  title: 'Plaza Ringer T-Shirt',             price: '$60.00 USD' },
    { img: tshirt5,  title: 'Sports Games Cropped Ringer T-Shirt', price: '$60.00 USD' },
    { img: tshirt6,  title: 'Gallery T-Shirt',                  price: '$85.00 USD' },
    { img: tshirt7,  title: 'Harvest T-Shirt',                  price: '$85.00 USD' },
    { img: tshirt8,  title: 'Athleisure T-Shirt',               price: '$75.00 USD' },
    { img: tshirt9,  title: 'Oakwood T-Shirt',                  price: '$85.00 USD' },
    { img: tshirt10, title: 'Oakwood T-Shirt',                  price: '$85.00 USD' },
]

const longsleeves = [
    { img: ls1, title: 'Oakwood Longsleeve', price: '$110.00 USD' },
    { img: ls2, title: 'Radius Longsleeve',  price: '$110.00 USD' },
    { img: ls3, title: 'Harvest Longsleeve', price: '$110.00 USD' },
    { img: ls4, title: 'Oxford Longsleeve',  price: '$100.00 USD' },
    { img: ls5, title: 'Plaza Longsleeve',   price: '$100.00 USD' },
    { img: ls6, title: 'Athleisure Longsleeve', price: '$110.00 USD' },
    { img: ls7, title: 'Gallery Longsleeve', price: '$110.00 USD' },
    { img: ls8, title: 'Lansdowne Longsleeve', price: '$110.00 USD' },
]

const slugify = (text) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')

const ProductCard = ({ img, title, price }) => {
    const passedState = { img, title, price, options: null }
    return (
        <div className="tshirts-card">
            <Link to={`/products/${slugify(title)}`} state={passedState} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="tshirts-card-img">
                    <img src={img} alt={title} />
                </div>
            </Link>
            <div className="tshirts-card-des">
                <Link to={`/products/${slugify(title)}`} state={passedState} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h3>{title}</h3>
                    <p>{price}</p>
                </Link>
            </div>
        </div>
    )
}

const TShirts = () => {
    useEffect(() => { window.scrollTo(0, 0) }, [])

    return (
        <div className="tshirts-page">
            {/* ── HERO ── */}
            <div className="tshirts-hero">
                <img src={hero} alt="T-Shirts & Longsleeves" />
                <h1>T-Shirts &amp; Longsleeves</h1>
            </div>

            {/* ── T-SHIRTS SECTION ── */}
            <section className="tshirts-section">
                <div className="tshirts-section-header">
                    <h2>T-Shirts</h2>
                </div>
                <div className="tshirts-grid">
                    {tshirts.map((p, i) => (
                        <ProductCard key={i} img={p.img} title={p.title} price={p.price} />
                    ))}
                </div>
            </section>

            {/* ── LONGSLEEVES SECTION ── */}
            <section className="tshirts-section">
                <div className="tshirts-section-header">
                    <h2>Longsleeves</h2>
                </div>
                <div className="tshirts-grid">
                    {longsleeves.map((p, i) => (
                        <ProductCard key={i} img={p.img} title={p.title} price={p.price} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default TShirts
