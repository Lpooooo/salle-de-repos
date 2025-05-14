import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import PageTransition from '../components/ui/PageTransition'
import SectionTitle from '../components/ui/SectionTitle'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [formSubmitted, setFormSubmitted] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 1000)
  }
  
  const position = [48.8566, 2.3522] // Paris coordinates
  
  return (
    <PageTransition>
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Contactez-Nous
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Nous sommes à votre écoute pour toute question ou demande.
            </motion.p>
          </div>
        </div>
      </section>
      
      <section className="contact-info">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-card">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <h3>Email</h3>
              <p>contact@Calysta.fr</p>
              <p>reservation@Calysta.fr</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <h3>Téléphone</h3>
              <p>+33 1 23 45 67 89</p>
              <p>Lundi - Vendredi: 9h - 19h</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Adresse</h3>
              <p>Rue Haddock </p>
              <p>77000, Chessy France</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <FaClock />
              </div>
              <h3>Horaires d'Ouverture</h3>
              <p>Lundi - Vendredi: 10h - 20h</p>
              <p>Samedi: 11h - 22h</p>
              <p>Dimanche: 12h - 18h</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-container">
            <div className="form-content">
              <SectionTitle 
                subtitle="Écrivez-Nous" 
                title="Envoyez un message"
              />
              
              {formSubmitted ? (
                <motion.div 
                  className="form-success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3>Message Envoyé!</h3>
                  <p>Merci de nous avoir contacté. Nous reviendrons vers vous dans les plus brefs délais.</p>
                  <button 
                    className="button"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Nom</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Sujet</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5" 
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="buttonMess">Envoyer le Message</button>
                </form>
              )}
            </div>
            
            <div className="map-container">
              <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    Calysta <br /> Rue Haddock 77000, Chessy
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </section>
      
      <section className="faq">
        <div className="container">
          <SectionTitle 
            subtitle="Questions Fréquentes" 
            title="FAQ"
            centered={true}
          />
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Dois-je réserver à l'avance ?</h3>
              <p>Oui, nous recommandons fortement de réserver à l'avance pour garantir votre créneau. Vous pouvez réserver en ligne ou par téléphone jusqu'à 2 heures avant votre visite.</p>
            </div>
            
            <div className="faq-item">
              <h3>Quelle est la durée d'une session ?</h3>
              <p>Nous proposons des sessions de 1h, 2h ou 3h selon vos besoins et l'expérience que vous souhaitez vivre.</p>
            </div>
            
            <div className="faq-item">
              <h3>Puis-je annuler ma réservation ?</h3>
              <p>Les annulations sont possibles jusqu'à 24h avant votre réservation pour un remboursement complet. Au-delà, des frais peuvent s'appliquer.</p>
            </div>
            
            <div className="faq-item">
              <h3>Y a-t-il un âge minimum ?</h3>
              <p>Nos espaces sont ouverts aux personnes de 16 ans et plus. Les mineurs doivent être accompagnés d'un adulte.</p>
            </div>
            
            <div className="faq-item">
              <h3>Que dois-je apporter ?</h3>
              <p>Rien de spécial ! Tout l'équipement nécessaire est fourni. Vous pouvez venir en tenue confortable.</p>
            </div>
            
            <div className="faq-item">
              <h3>Proposez-vous des abonnements ?</h3>
              <p>Oui, nous avons plusieurs formules d'abonnement mensuel et trimestriel qui offrent un accès privilégié et des tarifs préférentiels.</p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Contact