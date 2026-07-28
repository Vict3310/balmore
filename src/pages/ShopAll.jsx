import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useWishlist } from '../context/WishlistContext'
import LazyImage from '../components/LazyImage'
import './ShopAll.css'
import shipping from '../assets/shipping.webp'
import contact from '../assets/contact.webp'
import lookbook from '../assets/lookbook.webp'
import press from '../assets/press.webp'

import { globalProducts } from '../data/products'

const slugify = (text) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')

const ProductCard = ({ img, title, price }) => {
    const passedState = { img, title, price, options: null }
    const { toggleWishlist, isInWishlist } = useWishlist()
    const inWishlist = isInWishlist(title)

    const handleWishlist = (e) => {
        e.preventDefault() // prevent navigating
        toggleWishlist({ img, title, price })
    }

    return (
        <div className="shopall-card position-relative">
            <button 
                className={`wishlist-btn ${inWishlist ? 'active' : ''}`}
                onClick={handleWishlist}
                aria-label="Save to wishlist"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill={inWishlist ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            </button>
            <Link to={`/products/${slugify(title)}`} state={passedState} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="shopall-card-img">
                    <LazyImage src={img} alt={title} />
                </div>
            </Link>
            <div className="shopall-card-des">
                <Link to={`/products/${slugify(title)}`} state={passedState} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h3>{title}</h3>
                    <p>{price}</p>
                </Link>
            </div>
        </div>
    )
}

const ShopAll = () => {
    const [categoryFilter, setCategoryFilter] = React.useState('All')
    const [sortOrder, setSortOrder] = React.useState('newest')

    useEffect(() => { window.scrollTo(0, 0) }, [])

    // Filter and sort logic
    let displayedProducts = [...globalProducts]
    
    if (categoryFilter !== 'All') {
        displayedProducts = displayedProducts.filter(p => p.category === categoryFilter)
    }

    if (sortOrder === 'price-asc') {
        displayedProducts.sort((a, b) => parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, '')))
    } else if (sortOrder === 'price-desc') {
        displayedProducts.sort((a, b) => parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, '')))
    }

    return (
        <div className="shopall-page">
            {/* ── HERO ── */}
            <div className="shopall-hero">
                <img src={new URL('../assets/Shop All – Balmoral Sports_files/032626_BALMORAL_ECOM6925_fda77885-d888-402f-9edc-2437bb06a3.webp', import.meta.url).href} alt="Shop All" />
                <h1>Shop All</h1>
            </div>

            {/* ── CONTROLS ── */}
            <div className="shopall-header">
                <div className="shopall-controls">
                    <span>{displayedProducts.length} products</span>
                    
                    <div className="shopall-filters">
                        <select 
                            value={categoryFilter} 
                            onChange={(e) => setCategoryFilter(e.target.value)}
                        >
                            <option value="All">All Categories</option>
                            <option value="Headwear">Headwear</option>
                            <option value="Pullovers">Pullovers</option>
                            <option value="Longsleeves">Longsleeves</option>
                            <option value="T-Shirts">T-Shirts</option>
                            <option value="Tank Tops">Tank Tops</option>
                        </select>
                        
                        <select 
                            value={sortOrder} 
                            onChange={(e) => setSortOrder(e.target.value)}
                        >
                            <option value="newest">Sort: Newest</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* ── PRODUCT GRID ── */}
            <div className="shopall-grid">
                {displayedProducts.map((p, i) => (
                    <ProductCard key={`${p.title}-${i}`} img={p.img} title={p.title} price={p.price} />
                ))}
            </div>

            {/* ── FOOTER LINKS ── */}
            <div className="shopall-footer">
                <div className="shopall-footer-card">
                    <h2>Shipping & returns</h2>
                    <div className="img-wrap"><img src={shipping} alt="" /></div>
                    <p>Review our shipping and returns information</p>
                </div>
                <div className="shopall-footer-card">
                    <h2>Contact</h2>
                    <div className="img-wrap"><img src={contact} alt="" /></div>
                    <p>Email our team for all inquiries</p>
                </div>
                <div className="shopall-footer-card">
                    <h2>Lookbook</h2>
                    <div className="img-wrap"><img src={lookbook} alt="" /></div>
                    <p>Explore the Spring–Summer 26 Lookbook</p>
                </div>
                <div className="shopall-footer-card">
                    <h2>Press</h2>
                    <div className="img-wrap"><img src={press} alt="" /></div>
                    <p>Discover our selected features and mentions</p>
                </div>
            </div>
        </div>
    )
}

export default ShopAll
