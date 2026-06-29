import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [showNavbar, setShowNavbar] = useState(true)
    const [isScrolled, setIsScrolled] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)
    const location = useLocation()

    // Force dark (black) navbar on brand pages — no transparency
    const brandPages = ['/about-us', '/press', '/stockists']
    const isDarkPage = brandPages.includes(location.pathname)

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

    const navbarClasses = `navbar ${!showNavbar ? 'navbar-hidden' : ''} ${isScrolled ? 'navbar-scrolled' : ''} ${isDarkPage ? 'navbar-dark-page' : ''}`
    const mobileNavbarClasses = `navbar-mobile ${!showNavbar ? 'navbar-hidden' : ''} ${isScrolled ? 'navbar-scrolled' : ''} ${isDarkPage ? 'navbar-dark-page' : ''}`

    return (
        <>
            {/* ── Desktop Navbar ── */}
            <nav className={navbarClasses}>
                <ul className="nav-links">
                    <li>All</li>
                    <li className="has-dropdown">
                        Tops
                        <ul className="dropdown-menu">
                            <li>T-shirts &amp; Longsleeves</li>
                            <li>Tank Tops</li>
                            <li>Pullovers</li>
                        </ul>
                    </li>
                    <li className="has-dropdown">
                        Bottoms
                        <ul className="dropdown-menu">
                            <li>Pants</li>
                            <li>Tights</li>
                            <li>Shorts</li>
                        </ul>
                    </li>
                    <li className="has-dropdown">
                        Accessories
                        <ul className="dropdown-menu">
                            <li>Socks</li>
                            <li>Headwears</li>
                            <li>Others</li>
                        </ul>
                    </li>
                </ul>

                <div className="brand">
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Balmore</Link>
                </div>

                <ul className="nav-links nav-links-right">
                    <li className="has-dropdown">
                        The brand
                        <ul className="dropdown-menu">
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/press">Press</Link></li>
                            <li><Link to="/stockists">Stockists</Link></li>
                        </ul>
                    </li>
                    <li>Search</li>
                    <li>Login</li>
                    <li>Cart</li>
                </ul>
            </nav>

            {/* ── Mobile Navbar ── */}
            <nav className={mobileNavbarClasses}>
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
                    <button className="icon-btn" aria-label="Search">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                    </button>
                    <button className="icon-btn" aria-label="Cart">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <path d="M16 10a4 4 0 01-8 0" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* ── Mobile Slide-in Drawer ── */}
            <div className={`mobile-drawer ${mobileOpen ? 'drawer-open' : ''}`}>
                <ul className="drawer-links">
                    <li>All</li>
                    <li>Tops</li>
                    <li className="drawer-sub">T-shirts &amp; Longsleeves</li>
                    <li className="drawer-sub">Tank Tops</li>
                    <li className="drawer-sub">Pullovers</li>
                    <li>Bottoms</li>
                    <li className="drawer-sub">Pants</li>
                    <li className="drawer-sub">Tights</li>
                    <li className="drawer-sub">Shorts</li>
                    <li>Accessories</li>
                    <li className="drawer-sub">Socks</li>
                    <li className="drawer-sub">Headwears</li>
                    <li className="drawer-sub">Others</li>
                    <li className="drawer-divider" />
                    <li>The Brand</li>
                    <li className="drawer-sub" onClick={() => setMobileOpen(false)}><Link to="/about-us">About Us</Link></li>
                    <li className="drawer-sub" onClick={() => setMobileOpen(false)}><Link to="/press">Press</Link></li>
                    <li className="drawer-sub" onClick={() => setMobileOpen(false)}><Link to="/stockists">Stockists</Link></li>
                    <li>Login</li>
                </ul>
            </div>

            {/* ── Overlay ── */}
            {mobileOpen && (
                <div
                    className="drawer-overlay"
                    onClick={() => setMobileOpen(false)}
                />
            )}
        </>
    )
}

export default Navbar

