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
  <img 
    src="https://media.discordapp.net/attachments/1297907778039451719/1372142506397143151/Calysta_logo_transparent.png?ex=6825b2ca&is=6824614a&hm=7d799f7aa8467e0e2d0b7697611279d3c4f693fa653aee7de93f67bedbfa7b73&=&format=webp&quality=lossless&width=913&height=383" 
    alt="Logo Calysta" className="logo" id="one"
  />
  <img 
    src="https://media.discordapp.net/attachments/1297907778039451719/1372144515837722664/Calysta_logo_beige_transparent.png?ex=6825b4a9&is=68246329&hm=365fb4412ee3f5df07281f744f30b1c9bfc9f2b81633c75b261af67bb9b30115&=&format=webp&quality=lossless&width=948&height=438" 
    alt="Logo Calysta" className="logo" id="two"
   
  />
  <img 
    src="https://media.discordapp.net/attachments/1297907778039451719/1372144516097773590/Calysta_logo_blanc_transparent.png?ex=6825b4a9&is=68246329&hm=9a29ae015a76849a9f3a33e4b9fa21d1bc39f1417fd8058c3a6e3236087b378f&=&format=webp&quality=lossless&width=965&height=363" 
    alt="Logo Calysta" className="logo" id="three"
   
  />
  <img 
    src="https://media.discordapp.net/attachments/1297907778039451719/1372144516366336121/Calysta_logo_couleur_transparent.png?ex=6825b4a9&is=68246329&hm=ca50a3f9ec6272c0a34b2c5168aa81df528597d8582ee39a68eab510d0dd3b50&=&format=webp&quality=lossless&width=945&height=443" 
    alt="Logo Calysta" className="logo" id="four"
   
  />
  <img 
    src="https://media.discordapp.net/attachments/1297907778039451719/1372144516605280297/Calysta_logo_violet_transparent.png?ex=6825b4a9&is=68246329&hm=e9dc2c8e64b1c0f033a1b4dce2931a95cf18bb0207816969ee835aa071288997&=&format=webp&quality=lossless&width=1033&height=468" 
    alt="Logo Calysta" className="logo" id="five"
    
  />

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