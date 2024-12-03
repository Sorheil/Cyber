import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// components
import Header from './components/Header'
import Footer from './components/Footer'
// pages
import Home from './pages/Home'
import Product from './pages/Product'
// style
import './App.css'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    <Footer />
    </Router>
  </StrictMode>,
)
