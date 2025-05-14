import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Header.css'

const Header = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [mobileMenuOpen])
  
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])
  
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo" onClick={() => setMobileMenuOpen(false)}>
          <h2>Calysta</h2>
        </Link>
        
        <nav className={`main-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-links">
            <li>
              <NavLink 
                to="/" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/histoire" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                Histoire
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/vitrines" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                Vitrines
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-reservation">
              <NavLink 
                to="/reservation" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `button ${isActive ? 'active' : ''}`}
              >
                Réservation
              </NavLink>
            </li>
          </ul>
        </nav>
        
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>
    </header>
  )
}

export default Header