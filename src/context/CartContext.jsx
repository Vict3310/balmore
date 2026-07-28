import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const MAX_RECENT = 8; // max recently viewed to track

export const CartProvider = ({ children }) => {
    // Initialize from localStorage if available
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem('balmoral_cart');
        return saved ? JSON.parse(saved) : [];
    });
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [recentlyViewed, setRecentlyViewed] = useState(() => {
        const saved = localStorage.getItem('balmoral_recent');
        return saved ? JSON.parse(saved) : [];
    });

    // Save to localStorage whenever cart or recently viewed changes
    useEffect(() => {
        localStorage.setItem('balmoral_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem('balmoral_recent', JSON.stringify(recentlyViewed));
    }, [recentlyViewed]);

    // Call this from the ProductDetail page whenever a user lands on a product
    const trackView = useCallback((product) => {
        setRecentlyViewed(prev => {
            // Remove any existing entry for this product (de-dupe by handle/id)
            const filtered = prev.filter(p => p.id !== product.id);
            // Add to the front (most recent first), cap at MAX_RECENT
            return [product, ...filtered].slice(0, MAX_RECENT);
        });
    }, []);

    const addToCart = (product) => {
        setCartItems((prev) => {
            const existing = prev.find(item =>
                item.id === product.id &&
                item.variant === product.variant &&
                item.size === product.size
            );
            if (existing) {
                return prev.map(item =>
                    item === existing ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (id, variant, size) => {
        setCartItems(prev => prev.filter(item => !(item.id === id && item.variant === variant && item.size === size)));
    };

    const updateQuantity = (id, variant, size, amount) => {
        setCartItems(prev => prev.map(item => {
            if (item.id === id && item.variant === variant && item.size === size) {
                const newQty = item.quantity + amount;
                return { ...item, quantity: newQty > 0 ? newQty : 1 };
            }
            return item;
        }));
    };

    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const cartSubtotal = cartItems.reduce((acc, item) => {
        const priceNum = parseFloat(item.price.replace(/[^0-9.]/g, ''));
        return acc + (priceNum * item.quantity);
    }, 0);

    // Build the "you may also like" list:
    //  1. Products from recentlyViewed that aren't already in the cart
    //  2. Return up to 6 items
    const recommendations = recentlyViewed
        .filter(p => !cartItems.some(c => c.id === p.id))
        .slice(0, 6);

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            isCartOpen,
            setIsCartOpen,
            cartCount,
            cartSubtotal,
            recentlyViewed,
            trackView,
            recommendations
        }}>
            {children}
        </CartContext.Provider>
    );
};
