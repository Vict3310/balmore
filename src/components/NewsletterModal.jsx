import React, { useState, useEffect } from 'react';
import './NewsletterModal.css';

const NewsletterModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasSeen, setHasSeen] = useState(false);

    useEffect(() => {
        // Check if user has already dismissed it
        if (localStorage.getItem('balmoral_newsletter')) {
            setHasSeen(true);
            return;
        }

        // Show modal after 15 seconds
        const timer = setTimeout(() => {
            if (!hasSeen) setIsOpen(true);
        }, 15000);

        // Or show on exit intent (mouse leaving window top)
        const handleMouseLeave = (e) => {
            if (e.clientY <= 0 && !hasSeen) {
                setIsOpen(true);
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            clearTimeout(timer);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [hasSeen]);

    const handleClose = () => {
        setIsOpen(false);
        setHasSeen(true);
        localStorage.setItem('balmoral_newsletter', 'true');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, submit email to backend here
        handleClose();
    };

    if (!isOpen) return null;

    return (
        <div className="newsletter-overlay" onClick={handleClose}>
            <div className="newsletter-modal" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={handleClose}>
                    <svg width="15" height="15" viewBox="0 0 11 11" fill="none" stroke="currentColor">
                        <path d="M10.35 0.35L0.35 10.35M10.35 10.35L0.35 0.35"></path>
                    </svg>
                </button>
                <div className="newsletter-content">
                    <h2>Join the Club</h2>
                    <p>Subscribe for 10% off your first order and early access to new releases.</p>
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="Email Address" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewsletterModal;
