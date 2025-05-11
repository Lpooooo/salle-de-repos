import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaLeaf, FaHotTub, FaCocktail, FaClock } from 'react-icons/fa'
import PageTransition from '../components/ui/PageTransition'
import SectionTitle from '../components/ui/SectionTitle'
import './Home.css'

const Home = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.5 }
    })
  }
  
  return (
    <PageTransition>
      <section className="hero">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Votre espace de détente au cœur de la ville
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Découvrez un havre de paix où le temps s'arrête et le stress s'évapore.
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link to="/vitrines" className="button">Découvrir</Link>
            <Link to="/reservation" className="button button-secondary">Réserver</Link>
          </motion.div>
        </div>
      </section>
      
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <motion.div 
              className="feature-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0}
              variants={fadeInUpVariants}
            >
              <div className="feature-icon">
                <FaLeaf />
              </div>
              <h3>Environnement Apaisant</h3>
              <p>Un décor inspiré de la nature pour favoriser votre relaxation et bien-être.</p>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={1}
              variants={fadeInUpVariants}
            >
              <div className="feature-icon">
                <FaHotTub />
              </div>
              <h3>Installations Premium</h3>
              <p>Des équipements de qualité supérieure pour une expérience de détente inégalée.</p>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={2}
              variants={fadeInUpVariants}
            >
              <div className="feature-icon">
                <FaCocktail />
              </div>
              <h3>Rafraîchissements Bio</h3>
              <p>Une sélection de boissons et collations naturelles pour vous revitaliser.</p>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={3}
              variants={fadeInUpVariants}
            >
              <div className="feature-icon">
                <FaClock />
              </div>
              <h3>Horaires Flexibles</h3>
              <p>Des créneaux adaptés à vos besoins, pour vous détendre quand vous le souhaitez.</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="about-preview">
        <div className="container">
          <div className="about-preview-content">
            <div className="about-text">
              <SectionTitle 
                subtitle="Notre Philosophie" 
                title="Un refuge de calme dans un monde agité"
              />
              <p>Depuis notre création, nous avons conçu Tranquillité comme un sanctuaire urbain où chacun peut se reconnecter à soi-même. Notre espace de détente combine des éléments naturels avec un design contemporain pour créer une atmosphère propice à la relaxation.</p>
              <p>Chaque détail a été soigneusement pensé pour vous offrir une expérience multisensorielle apaisante, des arômes subtils aux textures douces, en passant par une acoustique optimisée.</p>
              <Link to="/histoire" className="button">En savoir plus</Link>
            </div>
            <div className="about-image">
              <img src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Espace de relaxation avec lumière tamisée" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="testimonials">
        <div className="container">
          <SectionTitle 
            subtitle="Témoignages" 
            title="Ce que nos clients disent"
            centered={true}
          />
          
          <div className="testimonials-carousel">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Un véritable havre de paix en plein centre-ville. Je m'y rends chaque semaine pour décompresser après le travail. Le personnel est attentionné et l'ambiance parfaite."</p>
              </div>
              <div className="testimonial-author">
                <img src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Sophie M." />
                <div>
                  <h4>Sophie M.</h4>
                  <p>Cliente régulière</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"J'ai découvert cet endroit il y a trois mois et c'est devenu mon refuge. Les espaces sont impeccables et l'atmosphère est exactement ce dont j'ai besoin pour me ressourcer."</p>
              </div>
              <div className="testimonial-author">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Thomas D." />
                <div>
                  <h4>Thomas D.</h4>
                  <p>Client depuis 2024</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Absolument parfait ! J'ai offert une séance à mes parents pour leur anniversaire de mariage et ils ont adoré. L'accueil est chaleureux et les installations sont exceptionnelles."</p>
              </div>
              <div className="testimonial-author">
                <img src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Camille R." />
                <div>
                  <h4>Camille R.</h4>
                  <p>Nouvelle cliente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Prêt à vous offrir un moment de détente ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Réservez dès maintenant votre créneau et commencez votre voyage vers la sérénité.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link to="/reservation" className="button">Réserver maintenant</Link>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Home