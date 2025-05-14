import { useState } from 'react'
import { motion } from 'framer-motion'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { FaCalendarAlt, FaClock, FaCheck } from 'react-icons/fa'
import PageTransition from '../components/ui/PageTransition'
import SectionTitle from '../components/ui/SectionTitle'
import './Reservation.css'

const Reservation = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [selectedDuration, setSelectedDuration] = useState('')
  const [selectedSpace, setSelectedSpace] = useState('')
  const [formStep, setFormStep] = useState(1)
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: ''
  })
  const [bookingComplete, setBookingComplete] = useState(false)
  
  const timeSlots = [
    '10:00', '11:00', '12:00', '13:00', '14:00', 
    '15:00', '16:00', '17:00', '18:00', '19:00'
  ]
  
  const durations = [
    { value: '1', label: '1 heure', price: '25€' },
    { value: '2', label: '2 heures', price: '45€' },
    { value: '3', label: '3 heures', price: '60€' }
  ]
  
  const spaces = [
    { id: 'meditation', name: 'Salon de Méditation' },
    { id: 'nature', name: 'Atmosphère Nature' },
    { id: 'sensorial', name: 'Chambre Sensorielle' }
  ]
  
  const handleNextStep = () => {
    window.scrollTo(0, 0)
    setFormStep(2)
  }
  
  const handlePrevStep = () => {
    setFormStep(1)
  }
  
  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target
    setPersonalInfo({
      ...personalInfo,
      [name]: value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setBookingComplete(true)
      window.scrollTo(0, 0)
    }, 1500)
  }
  
  const isStepOneComplete = selectedDate && selectedTime && selectedDuration && selectedSpace
  
  const isStepTwoComplete = personalInfo.firstName && personalInfo.lastName && 
                          personalInfo.email && personalInfo.phone
  
  return (
    <PageTransition>
      <section className="reservation-hero">
        <div className="container">
          <div className="reservation-hero-content">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Réservation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Réservez votre moment de détente en quelques clics.
            </motion.p>
          </div>
        </div>
      </section>
      
      <section className="reservation-container">
        <div className="container">
          {bookingComplete ? (
            <div className="booking-confirmation">
              <div className="confirmation-icon">
                <FaCheck />
              </div>
              <h2>Réservation Confirmée!</h2>
              <p>Merci pour votre réservation, {personalInfo.firstName}. Nous avons hâte de vous accueillir!</p>
              
              <div className="booking-details">
                <h3>Détails de votre réservation:</h3>
                <ul>
                  <li><strong>Date:</strong> {selectedDate?.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</li>
                  <li><strong>Heure:</strong> {selectedTime}</li>
                  <li><strong>Durée:</strong> {durations.find(d => d.value === selectedDuration)?.label}</li>
                  <li><strong>Espace:</strong> {spaces.find(s => s.id === selectedSpace)?.name}</li>
                </ul>
              </div>
              
              <p>Un email de confirmation a été envoyé à {personalInfo.email}. Vous pouvez également contacter notre équipe au +33 1 23 45 67 89 pour toute question.</p>
            </div>
          ) : (
            <div className="reservation-form-container">
              <div className="reservation-steps">
                <div className={`step ${formStep === 1 ? 'active' : ''} ${formStep > 1 ? 'completed' : ''}`}>
                  <div className="step-number">1</div>
                  <span>Sélection</span>
                </div>
                <div className="step-connector"></div>
                <div className={`step ${formStep === 2 ? 'active' : ''} ${formStep > 2 ? 'completed' : ''}`}>
                  <div className="step-number">2</div>
                  <span>Informations</span>
                </div>
              </div>
              
              {formStep === 1 ? (
                <div className="form-step">
                  <SectionTitle 
                    subtitle="Étape 1" 
                    title="Choisissez votre expérience"
                  />
                  
                  <div className="reservation-options">
                    <div className="option-group">
                      <h3>
                        <FaCalendarAlt /> 
                        Sélectionnez une date
                      </h3>
                      <div className="date-picker-container">
                        <DatePicker
                          selected={selectedDate}
                          onChange={date => setSelectedDate(date)}
                          minDate={new Date()}
                          dateFormat="dd/MM/yyyy"
                          placeholderText="Choisir une date"
                          className="date-picker"
                        />
                      </div>
                    </div>
                    
                    <div className="option-group">
                      <h3>
                        <FaClock /> 
                        Choisissez un créneau horaire
                      </h3>
                      <div className="time-slots">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="option-group">
                      <h3>Sélectionnez une durée</h3>
                      <div className="duration-options">
                        {durations.map((duration) => (
                          <div 
                            key={duration.value}
                            className={`duration-card ${selectedDuration === duration.value ? 'selected' : ''}`}
                            onClick={() => setSelectedDuration(duration.value)}
                          >
                            <h4>{duration.label}</h4>
                            <p className="price">{duration.price}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="option-group">
                      <h3>Choisissez un espace</h3>
                      <div className="space-options">
                        {spaces.map((space) => (
                          <div 
                            key={space.id}
                            className={`space-card ${selectedSpace === space.id ? 'selected' : ''}`}
                            onClick={() => setSelectedSpace(space.id)}
                          >
                            <h4>{space.name}</h4>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-actions">
                    <button 
                      className="button"
                      onClick={handleNextStep}
                      disabled={!isStepOneComplete}
                    >
                      Continuer
                    </button>
                  </div>
                </div>
              ) : (
                <div className="form-step">
                  <SectionTitle 
                    subtitle="Étape 2" 
                    title="Vos coordonnées"
                  />
                  
                  <form onSubmit={handleSubmit}>
                    <div className="form-summary">
                      <h3>Récapitulatif de votre réservation</h3>
                      <div className="summary-details">
                        <p><strong>Date:</strong> {selectedDate?.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        <p><strong>Heure:</strong> {selectedTime}</p>
                        <p><strong>Durée:</strong> {durations.find(d => d.value === selectedDuration)?.label}</p>
                        <p><strong>Espace:</strong> {spaces.find(s => s.id === selectedSpace)?.name}</p>
                      </div>
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="firstName">Prénom *</label>
                        <input 
                          type="text" 
                          id="firstName" 
                          name="firstName" 
                          value={personalInfo.firstName}
                          onChange={handlePersonalInfoChange}
                          required 
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="lastName">Nom *</label>
                        <input 
                          type="text" 
                          id="lastName" 
                          name="lastName" 
                          value={personalInfo.lastName}
                          onChange={handlePersonalInfoChange}
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={personalInfo.email}
                          onChange={handlePersonalInfoChange}
                          required 
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="phone">Téléphone *</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone" 
                          value={personalInfo.phone}
                          onChange={handlePersonalInfoChange}
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="notes">Notes ou demandes spéciales</label>
                      <textarea 
                        id="notes" 
                        name="notes" 
                        rows="4" 
                        value={personalInfo.notes}
                        onChange={handlePersonalInfoChange}
                      ></textarea>
                    </div>
                    
                    <div className="form-actions">
                      <button 
                        type="button" 
                        className="button button-secondary"
                        onClick={handlePrevStep}
                      >
                        Retour
                      </button>
                      
                      <button 
                        type="submit" 
                        className="button"
                        disabled={!isStepTwoComplete}
                      >
                        Confirmer la Réservation
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
      
      <section className="reservation-info">
        <div className="container">
          <SectionTitle 
            subtitle="Informations Pratiques" 
            title="Ce que vous devez savoir"
            centered={true}
          />
          
          <div className="info-cards">
            <div className="info-card">
              <h3>Politique d'Annulation</h3>
              <p>Les annulations sont possibles jusqu'à 24h avant votre réservation pour un remboursement complet. Au-delà, des frais peuvent s'appliquer.</p>
            </div>
            
            <div className="info-card">
              <h3>Arrivée</h3>
              <p>Nous vous recommandons d'arriver 15 minutes avant le début de votre séance pour vous permettre de vous installer confortablement.</p>
            </div>
            
            <div className="info-card">
              <h3>À Apporter</h3>
              <p>Venez simplement dans une tenue confortable. Tout le nécessaire pour votre séance est fourni (serviettes, rafraîchissements, etc.).</p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Reservation