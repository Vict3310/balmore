import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Scroll from './components/Scroll'
import Home from './components/Home'
import Press from './pages/Press'
import AboutUs from './pages/AboutUs'
import Stockists from './pages/Stockists'

const App = () => {
  return (
    <Scroll>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/press" element={<Press />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/stockists" element={<Stockists />} />
        </Routes>
        <Footer />
      </div>
    </Scroll>
  )
}

export default App

