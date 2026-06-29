import React, { useState, useEffect } from 'react';
import './Stockists.css';

const stockistsItems = [
  { id: 1,  name: "LE CLUB",          link: "https://leclub.cc/collections/balmoral",                         image: "https://www.balmoralrunning.com/cdn/shop/files/Stockists-01_c3a8a066-ea65-4f0a-ad8e-3121d5f1a7fc.jpg?v=1776650679" },
  { id: 2,  name: "Faux Mouvement",   link: "https://fauxmouvement.cc/collections/balmoral-sports",           image: "https://www.balmoralrunning.com/cdn/shop/files/Stockists-02_ea3c3f72-9c27-4486-85d5-3f286993fabe.jpg?v=1776650678" },
  { id: 3,  name: "Culture Athletics",link: "https://cultureathletics.com/collections/balmoral-sports",       image: "https://www.balmoralrunning.com/cdn/shop/files/Stockists-04_2f81ec49-8777-4b22-a3d1-770e9345ee84.jpg?v=1776650678" },
  { id: 4,  name: "Deadstock.ca",     link: "https://deadstock.ca/collections/brand-balmoral",                image: "https://www.balmoralrunning.com/cdn/shop/files/Stockists-05_5c522716-39af-4d2a-a2e6-ad1687696cd5.jpg?v=1776650678" },
  { id: 5,  name: "Stomping Ground",  link: "https://stompingground.ca/collections/brand-balmoral",           image: "https://www.balmoralrunning.com/cdn/shop/files/Stockists-10_da6fb2ae-8acb-4a86-b7f4-a8e294330b9a.jpg?v=1776650678" },
  { id: 6,  name: "Altitude Sports",  link: "https://www.altitude-sports.com/c/balmoral-sports",              image: "https://www.balmoralrunning.com/cdn/shop/files/Stockists-03_4dd9a9db-065b-461c-936d-8557cb8f600e.jpg?v=1776650678" },
  { id: 7,  name: "Think Empire",     link: "https://thinkempire.com/collections/balmoral",                   image: "https://www.balmoralrunning.com/cdn/shop/files/Stockists-11_66ed9a29-7e57-401b-b25c-550e3a54a1dd.jpg?v=1776650636" },
  { id: 8,  name: "Boutique Archive", link: "https://www.boutiquearchive.com/",                               image: "https://www.balmoralrunning.com/cdn/shop/files/Stockists-12.jpg?v=1776657431" },
  { id: 9,  name: "O'Lodge",          link: "https://olodge.ca/en/collections/balmoral",                      image: "https://www.balmoralrunning.com/cdn/shop/files/Stockists-07_158171a2-0098-4f35-a71c-dc8783d57ad9.jpg?v=1776650678" },
  { id: 10, name: "Oberson",          link: "https://oberson.com/en/collections/vendors?q=Balmoral",          image: "https://www.balmoralrunning.com/cdn/shop/files/Stockists-06_3d475ef1-4a80-445f-b97f-100a3ef95629.jpg?v=1776650678" },
  { id: 11, name: "Stockist 11",      link: "#",                                                              image: "https://www.balmoralrunning.com/cdn/shop/files/Stockists-09_b6573d8b-b479-41b9-9b15-ee1ab8e875a8.jpg?v=1776650679" },
  { id: 12, name: "Stockist 12",      link: "#",                                                              image: "https://www.balmoralrunning.com/cdn/shop/files/Stockists-08_8261034b-0ef4-41fc-a95e-e4cec5efc879.jpg?v=1776650679" },
];

const Stockists = () => {
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
  const canNext = startIndex + VISIBLE < stockistsItems.length;

  const prev = () => { if (canPrev) setStartIndex(i => i - 1); };
  const next = () => { if (canNext) setStartIndex(i => i + 1); };

  const cardWidthPct = 100 / VISIBLE;
  const translateX = -(startIndex * cardWidthPct);

  return (
    <div className="stockists-page">
      <div className="page-header">
        <h1>Stockists</h1>
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
          {stockistsItems.map(item => (
            <a
              key={item.id}
              className="stockist-card"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ flex: `0 0 ${cardWidthPct}%` }}
            >
              <div className="stockist-image">
                <img src={item.image} alt={item.name} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stockists;
