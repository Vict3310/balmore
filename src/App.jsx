import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import PageTransition from './components/PageTransition'
import NewsletterModal from './components/NewsletterModal'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Scroll from './components/Scroll'
import Home from './components/Home'
import Press from './pages/Press'
import AboutUs from './pages/AboutUs'
import Stockists from './pages/Stockists'
import TankTops from './pages/TankTops'
import TShirts from './pages/TShirts'
import ShopAll from './pages/ShopAll'
import SearchPage from './pages/SearchPage'
import ProductDetail from './pages/ProductDetail'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'

const App = () => {
  const location = useLocation()
  
  return (
    <CartProvider>
      <WishlistProvider>
        <Scroll>
        <div className="app">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/press" element={<PageTransition><Press /></PageTransition>} />
              <Route path="/about-us" element={<PageTransition><AboutUs /></PageTransition>} />
              <Route path="/stockists" element={<PageTransition><Stockists /></PageTransition>} />
              <Route path="/search" element={<PageTransition><SearchPage /></PageTransition>} />
              <Route path="/collections/shopall" element={<PageTransition><ShopAll /></PageTransition>} />
              <Route path="/collections/tank-tops" element={<PageTransition><TankTops /></PageTransition>} />
              <Route path="/collections/t-shirts" element={<PageTransition><TShirts /></PageTransition>} />
              <Route path="/collections/longsleeves" element={<PageTransition><TShirts /></PageTransition>} />
              <Route path="/collections/pullovers" element={<PageTransition><TShirts /></PageTransition>} />
              <Route path="/collections/t-shirts-longsleeves" element={<PageTransition><TShirts /></PageTransition>} />
              <Route path="/products/:handle" element={<PageTransition><ProductDetail /></PageTransition>} />
            </Routes>
          </AnimatePresence>
          <Footer />
          <NewsletterModal />
        </div>
      </Scroll>
      </WishlistProvider>
    </CartProvider>
  )
}

export default App

