import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'
import Cart from './Cart'
import { useCart } from '../context/CartContext'

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const { isCartOpen, setIsCartOpen, cartCount } = useCart()
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [showNavbar, setShowNavbar] = useState(true)
    const [isScrolled, setIsScrolled] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [searchQuery, setSearchQuery] = useState('')
    const location = useLocation()
    const navigate = useNavigate()

    // Force dark (black) navbar on pages with white/light backgrounds
    const brandPages = ['/about-us', '/press', '/stockists', '/search']
    const isDarkPage = brandPages.includes(location.pathname)
        || location.pathname.startsWith('/products/')

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            if (currentScrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setShowNavbar(false)
            } else {
                setShowNavbar(true)
            }
            setLastScrollY(currentScrollY)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    // Close search on route change
    useEffect(() => {
        setIsSearchOpen(false)
        setSearchQuery('')
    }, [location.pathname])

    const openSearch = () => setIsSearchOpen(true)
    const closeSearch = () => {
        setIsSearchOpen(false)
        setSearchQuery('')
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            closeSearch()
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
        }
    }

    // The wrapper gets a white bg when: scrolled, or search is open, or on a dark page
    const hasWhiteBg = isScrolled || isSearchOpen || isDarkPage

    const wrapperClasses = [
        'navbar-block',
        !showNavbar ? 'navbar-hidden' : '',
        hasWhiteBg ? 'navbar-block--white' : '',
    ].join(' ')

    const innerClasses = [
        'navbar-inner',
        hasWhiteBg ? 'navbar-inner--dark-text' : '',
    ].join(' ')

    return (
        <>
            {/* ── SVG Filter Definitions ── */}
            <svg style={{position:'fixed',top:0,left:0,width:0,height:0,overflow:'hidden'}} aria-hidden="true">
                <defs>
                    <filter id="glass-edge-warp" x="-5%" y="-300%" width="110%" height="700%" colorInterpolationFilters="sRGB">
                        <feTurbulence type="fractalNoise" baseFrequency="0.012 0.028" numOctaves="2" seed="9" result="noise"/>
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="26" xChannelSelector="R" yChannelSelector="G"/>
                    </filter>
                </defs>
            </svg>
            {/* ── Desktop Navbar Block (nav + search row as one white unit) ── */}
            <div className={wrapperClasses}>

                {/* ── Liquid Glass Layers (only when scrolled) ── */}
                <div className={`glass-body ${hasWhiteBg ? 'glass-body--on' : ''}`} aria-hidden="true" />

                {/* Top edge warp: outer div applies SVG distortion, inner shows backdrop */}
                <div className={`glass-edge-warp glass-edge-warp--top ${hasWhiteBg ? 'glass-edge-warp--on' : ''}`} aria-hidden="true">
                    <div className="glass-edge-inner" />
                </div>

                {/* Bottom edge warp */}
                <div className={`glass-edge-warp glass-edge-warp--bottom ${hasWhiteBg ? 'glass-edge-warp--on' : ''}`} aria-hidden="true">
                    <div className="glass-edge-inner" />
                </div>

                {/* Specular rim highlight */}
                <div className={`glass-specular ${hasWhiteBg ? 'glass-specular--on' : ''}`} aria-hidden="true" />

                <nav className={innerClasses}>
                    <ul className="nav-links">
                        <li><Link to="/collections/shopall" style={{ textDecoration: 'none', color: 'inherit' }}>All</Link></li>
                        <li className="has-dropdown" onMouseEnter={closeSearch}>
                            Tops
                            <ul className="dropdown-menu">
                                <li><Link to="/collections/t-shirts">T-Shirts &amp; Longsleeves</Link></li>
                                <li><Link to="/collections/tank-tops">Tank Tops</Link></li>
                                <li><Link to="/collections/pullovers">Pullovers</Link></li>
                            </ul>
                        </li>
                        <li className="has-dropdown" onMouseEnter={closeSearch}>
                            Bottoms
                            <ul className="dropdown-menu">
                                <li><Link to="/collections/pants">Pants</Link></li>
                                <li><Link to="/collections/tights">Tights</Link></li>
                                <li><Link to="/collections/shorts">Shorts</Link></li>
                            </ul>
                        </li>
                        <li className="has-dropdown" onMouseEnter={closeSearch}>
                            Accessories
                            <ul className="dropdown-menu">
                                <li><Link to="/collections/socks">Socks</Link></li>
                                <li><Link to="/collections/headwear">Headwears</Link></li>
                                <li><Link to="/collections/other">Others</Link></li>
                            </ul>
                        </li>
                    </ul>

                    <div className="brand">
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Balmore</Link>
                    </div>

                    <ul className="nav-links nav-links-right">
                        <li className="has-dropdown" onMouseEnter={closeSearch}>
                            The brand
                            <ul className="dropdown-menu">
                                <li><Link to="/about-us">About Us</Link></li>
                                <li><Link to="/press">Press</Link></li>
                                <li><Link to="/stockists">Stockists</Link></li>
                            </ul>
                        </li>
                        <li onClick={openSearch} style={{ cursor: 'pointer' }}>Search</li>
                        <li><Link to="/login">Login</Link></li>
                        <li onClick={() => setIsCartOpen(true)} style={{ cursor: 'pointer' }}>Cart({cartCount})</li>
                    </ul>
                </nav>

                {/* ── Search Bar Row — expands within the same white block ── */}
                <div className={`search-bar-row ${isSearchOpen ? 'search-bar-row--open' : ''}`}>
                    <form className="search-bar-form" onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Search by keyword"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            autoFocus={isSearchOpen}
                        />
                        <div className="search-bar-actions">
                            <button type="submit" className="search-bar-submit">SEARCH</button>
                            <button type="button" className="search-bar-close" onClick={closeSearch}>
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 1L1 12M1 1l11 11" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* ── Mobile Navbar ── */}
            <nav className={`navbar-mobile ${!showNavbar ? 'navbar-hidden' : ''} ${hasWhiteBg ? 'navbar-scrolled' : ''} ${isDarkPage ? 'navbar-dark-page' : ''}`}>
                <button
                    className="hamburger"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger-line ${mobileOpen ? 'open' : ''}`} />
                    <span className={`hamburger-line ${mobileOpen ? 'open' : ''}`} />
                    <span className={`hamburger-line ${mobileOpen ? 'open' : ''}`} />
                </button>

                <div className="brand brand-mobile">
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Balmore</Link>
                </div>

                <div className="mobile-icons">
                    <button className="icon-btn" aria-label="Search" onClick={openSearch}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                    </button>
                    <button className="icon-btn" aria-label="Cart" onClick={() => setIsCartOpen(true)} style={{ position: 'relative' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <path d="M16 10a4 4 0 01-8 0" />
                        </svg>
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </button>
                </div>
            </nav>

            {/* ── Mobile Slide-in Drawer ── */}
            <div className={`mobile-drawer ${mobileOpen ? 'drawer-open' : ''}`}>
                <ul className="drawer-links">
                    <li onClick={() => setMobileOpen(false)}><Link to="/collections/shopall">All</Link></li>
                    <li>Tops</li>
                    <li className="drawer-sub" onClick={() => setMobileOpen(false)}><Link to="/collections/t-shirts">T-Shirts &amp; Longsleeves</Link></li>
                    <li className="drawer-sub" onClick={() => setMobileOpen(false)}><Link to="/collections/tank-tops">Tank Tops</Link></li>
                    <li className="drawer-sub" onClick={() => setMobileOpen(false)}><Link to="/collections/pullovers">Pullovers</Link></li>
                    <li>Bottoms</li>
                    <li className="drawer-sub" onClick={() => setMobileOpen(false)}><Link to="/collections/pants">Pants</Link></li>
                    <li className="drawer-sub" onClick={() => setMobileOpen(false)}><Link to="/collections/tights">Tights</Link></li>
                    <li className="drawer-sub" onClick={() => setMobileOpen(false)}><Link to="/collections/shorts">Shorts</Link></li>
                    <li>Accessories</li>
                    <li className="drawer-sub" onClick={() => setMobileOpen(false)}><Link to="/collections/socks">Socks</Link></li>
                    <li className="drawer-sub" onClick={() => setMobileOpen(false)}><Link to="/collections/headwear">Headwears</Link></li>
                    <li className="drawer-sub" onClick={() => setMobileOpen(false)}><Link to="/collections/other">Others</Link></li>
                    <li className="drawer-divider" />
                    <li>The Brand</li>
                    <li className="drawer-sub" onClick={() => setMobileOpen(false)}><Link to="/about-us">About Us</Link></li>
                    <li className="drawer-sub" onClick={() => setMobileOpen(false)}><Link to="/press">Press</Link></li>
                    <li className="drawer-sub" onClick={() => setMobileOpen(false)}><Link to="/stockists">Stockists</Link></li>
                    <li onClick={() => setMobileOpen(false)}><Link to="/login">Login</Link></li>
                </ul>
            </div>

            {/* ── Mobile Overlay ── */}
            {mobileOpen && (
                <div className="drawer-overlay" onClick={() => setMobileOpen(false)} />
            )}

            <Cart />
        </>
    )
}

export default Navbar
