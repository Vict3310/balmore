import React, { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState(() => {
        const saved = localStorage.getItem('balmoral_wishlist');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('balmoral_wishlist', JSON.stringify(wishlistItems));
    }, [wishlistItems]);

    const toggleWishlist = (product) => {
        setWishlistItems(prev => {
            const exists = prev.some(item => item.title === product.title);
            if (exists) {
                return prev.filter(item => item.title !== product.title);
            }
            return [...prev, product];
        });
    };

    const isInWishlist = (title) => {
        return wishlistItems.some(item => item.title === title);
    };

    return (
        <WishlistContext.Provider value={{ wishlistItems, toggleWishlist, isInWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};
