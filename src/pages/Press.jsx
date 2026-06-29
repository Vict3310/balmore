import React, { useState, useEffect } from 'react';
import './Press.css';
import nuvoImg from '../assets/Nuvo_Press.jpg';
import gqImg from '../assets/GQ_Press.jpg';
import hypebeastImg from '../assets/Hypebeast_Press.jpg';
import runloversImg from '../assets/Runlovers_Press.jpg';

const pressItems = [
  { title: "NUVO Magazine", subtitle: "Issue 105", image: nuvoImg, id: 1 },
  { title: "GQ", subtitle: "Online article", image: gqImg, id: 2 },
  { title: "HYPEBEAST", subtitle: "Online article", image: hypebeastImg, id: 3 },
  { title: "Run Lovers", subtitle: "Online article", image: runloversImg, id: 4 },
];

const Press = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setStartIndex(0);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const VISIBLE = isMobile ? 1 : 3;
  const canPrev = startIndex > 0;
  const canNext = startIndex + VISIBLE < pressItems.length;

  const prev = () => { if (canPrev) setStartIndex(i => i - 1); };
  const next = () => { if (canNext) setStartIndex(i => i + 1); };

  const cardWidthPct = 100 / VISIBLE;
  const translateX = -(startIndex * cardWidthPct);

  return (
    <div className="page-container press-page">
      <div className="page-header">
        <h1>Press</h1>
        <div className="carousel-controls">
          <button onClick={prev} disabled={!canPrev} aria-label="Previous">&#8592;</button>
          <button onClick={next} disabled={!canNext} aria-label="Next">&#8594;</button>
        </div>
      </div>
      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{ transform: `translateX(${translateX}%)` }}
        >
          {pressItems.map(item => (
            <div
              key={item.id}
              className="press-card"
              style={{ flex: `0 0 ${cardWidthPct}%` }}
            >
              <div className="press-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="press-info">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Press;
