import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSearch, FaLeaf, FaWater, FaWind, FaVolumeMute } from 'react-icons/fa'
import PageTransition from '../components/ui/PageTransition'
import SectionTitle from '../components/ui/SectionTitle'
import './Showcase.css'

const Showcase = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')
  
  const spaces = [
    {
      id: 1,
      name: 'Salon de Méditation',
      description: 'Un espace dédié à la pratique de la méditation, avec coussins ergonomiques et éclairage ajustable.',
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'meditation'
    },
  
    {
      id: 2,
      name: 'Votre bulle de liberté',
      description: 'Un espace de liberté pour écouter, regarder, lire... comme il vous plaît.',
      image: 'https://images.pexels.com/photos/5699665/pexels-photo-5699665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'silence'
    },

    {
      id: 3,
      name: 'Chambre Sensorielle',
      description: 'Un environnement où lumières, sons et parfums sont soigneusement orchestrés pour induire la relaxation.',
      image: 'https://images.pexels.com/photos/3045825/pexels-photo-3045825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'meditation'
    }
  ]
  
  const filteredSpaces = activeFilter === 'all' 
    ? spaces 
    : spaces.filter(space => space.category === activeFilter)
  
  const openLightbox = (image) => {
    setSelectedImage(image)
  }
  
  const closeLightbox = () => {
    setSelectedImage(null)
  }
  
  return (
    <PageTransition>
      <section className="showcase-hero">
        <div className="container">
          <div className="showcase-hero-content">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Nos Espaces
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Découvrez notre collection d'environnements conçus pour votre bien-être.
            </motion.p>
          </div>
        </div>
      </section>
      
      <section className="showcase-intro">
        <div className="container">
          <SectionTitle 
            subtitle="Notre Collection" 
            title="Des espaces uniques pour chaque besoin"
            centered={true}
          />
          <p className="intro-text">
            Chaque espace de Tranquillité a été soigneusement conçu pour offrir une expérience spécifique. 
            Qu'il s'agisse de méditation profonde, de reconnexion à la nature ou simplement de détente silencieuse, 
            vous trouverez l'environnement parfaitement adapté à vos besoins du moment.
          </p>
          
          <div className="filter-controls">
            <button 
              className={activeFilter === 'meditation' ? 'active' : ''} 
              onClick={() => setActiveFilter('meditation')}
            >
              <FaWind /> Méditation
            </button>
            <button 
              className={activeFilter === 'silence' ? 'active' : ''} 
              onClick={() => setActiveFilter('silence')}
            >
              <FaVolumeMute /> Silence
            </button>
          </div>
          
          <motion.div 
            className="spaces-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence>
              {filteredSpaces.map((space) => (
                <motion.div 
                  key={space.id}
                  className="space-card"
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="space-image" onClick={() => openLightbox(space.image)}>
                    <img src={space.image} alt={space.name} />
                    <div className="image-overlay">
                      <FaSearch className="search-icon" />
                    </div>
                  </div>
                  <div className="space-info">
                    <h3>{space.name}</h3>
                    <p>{space.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      
      <section className="amenities">
        <div className="container">
          <SectionTitle 
            subtitle="Pour Votre Confort" 
            title="Équipements et services"
            centered={true}
          />
          
          <div className="amenities-grid">
            <div className="amenity-card">
              <h3>Matériel de Confort</h3>
              <ul>
                <li>Coussins et tapis de méditation ergonomiques</li>
                <li>Couvertures chauffantes pour une relaxation optimale</li>
                <li>Casques de réduction de bruit pour une immersion totale</li>
                <li>Masques pour les yeux en soie naturelle</li>
              </ul>
            </div>
            
            <div className="amenity-card">
              <h3>Contrôle d'Environnement</h3>
              <ul>
                <li>Éclairage ajustable avec variation de couleurs</li>
                <li>Système sonore immersif avec sélection de sons naturels</li>
                <li>Contrôle de température individuel dans chaque espace</li>
                <li>Diffuseurs d'huiles essentielles apaisantes</li>
              </ul>
            </div>
            
            <div className="amenity-card">
              <h3>Services Complémentaires</h3>
              <ul>
                <li>Sélection de thés organiques et infusions</li>
                <li>Mini-bibliothèque de bien-être et relaxation</li>
                <li>Applications guidées sur tablettes disponibles</li>
                <li>Conseils personnalisés par notre équipe spécialisée</li>
              </ul>
            </div>
            
            <div className="amenity-card">
              <h3>Espaces Communs</h3>
              <ul>
                <li>Vestiaires privés avec casiers sécurisés</li>
                <li>Salon d'accueil avec boissons rafraîchissantes</li>
                <li>Terrasse extérieure pour les beaux jours</li>
                <li>Connexion Wi-Fi dans les zones communes uniquement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="experience">
        <div className="container">
          <div className="experience-content">
            <div className="experience-text">
              <SectionTitle 
                subtitle="L'Expérience Tranquillité" 
                title="Comment ça marche ?"
              />
              <ol className="experience-steps">
                <li>
                  <h4>Réservation</h4>
                  <p>Choisissez l'espace qui vous convient et réservez votre créneau en ligne ou par téléphone.</p>
                </li>
                <li>
                  <h4>Accueil</h4>
                  <p>À votre arrivée, notre équipe vous accueille et vous présente les lieux et le fonctionnement.</p>
                </li>
                <li>
                  <h4>Préparation</h4>
                  <p>Un temps de transition dans notre salon d'accueil vous permet de vous déconnecter du monde extérieur.</p>
                </li>
                <li>
                  <h4>Immersion</h4>
                  <p>Profitez de votre espace réservé en toute tranquillité, pour la durée choisie.</p>
                </li>
                <li>
                  <h4>Retour</h4>
                  <p>Après votre session, un moment de réintégration vous est proposé avant de repartir.</p>
                </li>
              </ol>
            </div>
            <div className="experience-image">
              <img src="https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Expérience de relaxation guidée" />
            </div>
          </div>
        </div>
      </section>
      
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="close-lightbox" onClick={closeLightbox}>&times;</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Vue agrandie" />
          </div>
        </div>
      )}
    </PageTransition>
  )
}

export default Showcase