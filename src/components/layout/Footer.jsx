import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Calysta</h3>
            <p>Votre oasis de calme et de sérénité au cœur de la ville.</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Liens Rapides</h4>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/histoire">Notre Histoire</Link></li>
              <li><Link to="/vitrines">Nos Espaces</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/reservation">Réservation</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact</h4>
            <ul>
              <li>
                <FaMapMarkerAlt />
                <span>Rue Haddock 77000, Chessy</span>
              </li>
              <li>
                <FaPhoneAlt />
                <span>+06 60 60 60 60</span>
              </li> 
              <li>
                <FaEnvelope />
                <span>reservation@Calysta.fr</span>
              </li>
            </ul>
          </div>
          <div className="footer-hours">
            <h4>Horaires d'Ouverture</h4>
            <ul>
              <li><span>Lundi - Vendredi:</span> 10h - 20h</li>
              <li><span>Samedi:</span> 11h - 22h</li>
              <li><span>Dimanche:</span> 12h - 18h</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Tous droits réservés.</p>
          <div className="footer-legal">
            <a href="#">Mentions Légales</a>
            <a href="#">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer