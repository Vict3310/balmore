import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductDetail.css';

import capnetblue from '../assets/capnetblue.webp';
import capbrownnet from '../assets/capbrownnet.webp';
import capred from '../assets/capred.webp';

const mockCatalog = {
    'somerville-4-panel-hat': {
        id: 'somerville-4-panel',
        title: 'Somerville 4-Panel Hat',
        price: '$65.00 USD',
        description: 'The Somerville Hat is built in the same trusted low profile 4 panel shape, now upgraded with full mesh paneling for maximum airflow.',
        images: [capnetblue, capbrownnet, capred],
        colors: ['Navy', 'Brown', 'Red'],
        colorHexes: ['#1E1E4C', '#6B5A4B', '#9B2C2C']
    }
};

const ProductDetail = () => {
    const { handle } = useParams();
    const location = useLocation();
    const { addToCart, trackView } = useCart();
    
    // Use state passed from Link, otherwise fallback to mockCatalog
    const stateProduct = location.state ? {
        id: handle,
        title: location.state.title,
        price: location.state.price,
        description: `The ${location.state.title} is built with premium materials for maximum comfort and durability.`,
        images: location.state.options?.images || [location.state.img],
        colors: location.state.options?.names || ['Default'],
        colorHexes: location.state.options?.hexes || ['#000']
    } : null;

    const product = stateProduct || mockCatalog[handle] || mockCatalog['somerville-4-panel-hat'];
    
    // Check if the product title suggests it's a hat/cap (one size) or clothing
    const isOneSize = product.title.toLowerCase().includes('hat') || product.title.toLowerCase().includes('cap');
    const availableSizes = isOneSize ? ['OS'] : ['XS', 'S', 'M', 'L', 'XL'];
    
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [selectedSize, setSelectedSize] = useState(availableSizes.includes('M') ? 'M' : 'OS');

    useEffect(() => {
        window.scrollTo(0, 0);
        setSelectedColor(product.colors[0]);
        // Track this product view for smart recommendations
        trackView({
            id: product.id || handle,
            title: product.title,
            price: product.price,
            image: product.images[0],
            handle: handle
        });
    }, [handle]);

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.images[product.colors.indexOf(selectedColor)] || product.images[0],
            variant: selectedColor,
            size: selectedSize
        });
    };

    const [isZoomed, setIsZoomed] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setMousePos({ x, y });
    };

    const mainImgSrc = product.images[product.colors.indexOf(selectedColor)] || product.images[0];

    return (
        <div className="product-detail-page">
            <div className="product-detail-left">
                <div 
                    className="main-image-container"
                    onMouseEnter={() => setIsZoomed(true)}
                    onMouseLeave={() => setIsZoomed(false)}
                    onMouseMove={handleMouseMove}
                >
                    <img 
                        src={mainImgSrc} 
                        alt={product.title} 
                        className={isZoomed ? "zoomed" : ""}
                        style={isZoomed ? { transformOrigin: `${mousePos.x}% ${mousePos.y}%` } : {}}
                    />
                    {!isZoomed && <span className="enlarge-btn">+ ENLARGE</span>}
                </div>
                
                {product.images.length > 1 && (
                    <div className="thumbnail-gallery">
                        {product.images.map((img, idx) => (
                            <div 
                                key={idx} 
                                className={`thumbnail ${mainImgSrc === img ? 'active' : ''}`}
                                onClick={() => setSelectedColor(product.colors[idx])}
                            >
                                <img src={img} alt={`${product.title} thumbnail ${idx}`} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
            
            <div className="product-detail-right">
                <div className="product-detail-info">
                    <h1>{product.title}</h1>
                    <p className="price">{product.price}</p>
                    
                    <div className="color-selector">
                        <p>COLOR: {selectedColor.toUpperCase()}</p>
                        <div className="color-swatches">
                            {product.colors.map((color, idx) => (
                                <button 
                                    key={color}
                                    className={`color-swatch ${selectedColor === color ? 'active' : ''}`}
                                    onClick={() => setSelectedColor(color)}
                                    aria-label={`Select color ${color}`}
                                >
                                    <span style={{ backgroundColor: product.colorHexes[idx] }} />
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <div className="size-selector">
                        <span>Size</span>
                        <select 
                            value={selectedSize} 
                            onChange={(e) => setSelectedSize(e.target.value)}
                        >
                            {availableSizes.map(size => (
                                <option key={size} value={size}>{size}</option>
                            ))}
                        </select>
                    </div>
                    
                    <button className="add-to-cart-btn" onClick={handleAddToCart}>
                        Add to cart
                    </button>
                    
                    <div className="product-description">
                        <p>{product.description}</p>
                        <p className="more-link">+ MORE</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
