import React, { useState, useEffect } from 'react';
import './LazyImage.css';

const LazyImage = ({ src, alt, className = '' }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Reset if src changes
        setIsLoaded(false);
        const img = new Image();
        img.src = src;
        img.onload = () => setIsLoaded(true);
    }, [src]);

    return (
        <div className={`lazy-image-wrapper ${isLoaded ? 'loaded' : 'loading'} ${className}`}>
            <img 
                src={src} 
                alt={alt} 
                className={`lazy-image ${isLoaded ? 'visible' : 'hidden'}`}
            />
        </div>
    );
};

export default LazyImage;
