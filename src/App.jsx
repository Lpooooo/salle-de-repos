import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/utils/ScrollToTop'

// Pages
import Home from './pages/Home'
import History from './pages/History'
import Showcase from './pages/Showcase'
import Contact from './pages/Contact'
import Reservation from './pages/Reservation'
import NotFound from './pages/NotFound'

function App() {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  
  // Handle header transparency on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Header isScrolled={isScrolled} />
      <ScrollToTop />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/histoire" element={<History />} />
            <Route path="/vitrines" element={<Showcase />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}

export default App