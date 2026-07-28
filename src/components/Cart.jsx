import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import { useCart } from '../context/CartContext';

const CARDS_VISIBLE = 2.3; // how many cards are partially visible at once

const Cart = () => {
    const {
        isCartOpen, setIsCartOpen,
        cartItems, removeFromCart, updateQuantity,
        cartCount, cartSubtotal,
        recommendations
    } = useCart();

    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateScrollState = () => {
        const el = scrollRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 0);
        setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
    };

    const scroll = (dir) => {
        const el = scrollRef.current;
        if (!el) return;
        const cardWidth = el.clientWidth / CARDS_VISIBLE;
        el.scrollBy({ left: dir * cardWidth, behavior: 'smooth' });
        setTimeout(updateScrollState, 350);
    };

    return (
        <>
            {/* ── Cart Drawer ── */}
            <div className={`cart-drawer ${isCartOpen ? 'cart-open' : ''}`}>
                <div className="cart-header">
                    <h2>Cart({cartCount})</h2>
                    <button className="cart-close-btn" onClick={() => setIsCartOpen(false)}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                <div className="cart-scrollable-content">
                    {/* ── Cart Items ── */}
                    {cartItems.length === 0 ? (
                        <div className="cart-content cart-empty">
                            <p>Your cart is currently empty.</p>
                            <button className="continue-shopping-btn" onClick={() => setIsCartOpen(false)}>CONTINUE SHOPPING</button>
                        </div>
                    ) : (
                        <div className="cart-items-list">
                            {cartItems.map((item, idx) => (
                                <div className="cart-item" key={idx}>
                                    <div className="cart-item-img">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="cart-item-details">
                                        <div className="cart-item-top">
                                            <h3>{item.title}</h3>
                                            <p>{item.price}</p>
                                        </div>
                                        <p className="cart-item-variant">Color: {item.variant}</p>
                                        <p className="cart-item-variant">Size: {item.size}</p>
                                        <div className="cart-item-actions">
                                            <div className="qty-selector">
                                                <button onClick={() => updateQuantity(item.id, item.variant, item.size, -1)}>-</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, item.variant, item.size, 1)}>+</button>
                                            </div>
                                            <button className="remove-btn" onClick={() => removeFromCart(item.id, item.variant, item.size)}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* ── Cart Footer ── */}
                    {cartItems.length > 0 && (
                        <div className="cart-footer">
                            <div className="cart-subtotal">
                                <span>Subtotal</span>
                                <span>${cartSubtotal.toFixed(2)} USD</span>
                            </div>
                            <p className="shipping-text">
                                Add $35.00 to qualify for free shipping<br />
                                (Duties and taxes are included on all international orders)
                            </p>
                            <button className="checkout-btn">Checkout</button>
                        </div>
                    )}

                    {/* ── Smart Recommendations Carousel ── */}
                    {recommendations.length > 0 && (
                        <div className="cart-recommendations">
                            <div className="rec-header">
                                <h3>You may also like</h3>
                                <div className="rec-nav">
                                    <button
                                        className={`rec-arrow ${!canScrollLeft ? 'disabled' : ''}`}
                                        onClick={() => scroll(-1)}
                                        aria-label="Scroll left"
                                    >
                                        ←
                                    </button>
                                    <button
                                        className={`rec-arrow ${!canScrollRight ? 'disabled' : ''}`}
                                        onClick={() => scroll(1)}
                                        aria-label="Scroll right"
                                    >
                                        →
                                    </button>
                                </div>
                            </div>
                            <div
                                className="recommendations-scroll"
                                ref={scrollRef}
                                onScroll={updateScrollState}
                            >
                                {recommendations.map((p, i) => (
                                    <Link
                                        key={p.id || i}
                                        to={`/products/${p.handle}`}
                                        className="rec-card"
                                        onClick={() => setIsCartOpen(false)}
                                    >
                                        <div className="rec-card-img">
                                            <img src={p.image} alt={p.title} />
                                        </div>
                                        <div className="rec-card-info">
                                            <p className="rec-title">{p.title}</p>
                                            <p className="rec-price">{p.price}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* ── Cart Overlay ── */}
            {isCartOpen && (
                <div
                    className="cart-overlay"
                    onClick={() => setIsCartOpen(false)}
                />
            )}
        </>
    );
};

export default Cart;
