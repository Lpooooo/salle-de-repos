import { motion } from 'framer-motion'
import PageTransition from '../components/ui/PageTransition'
import SectionTitle from '../components/ui/SectionTitle'
import './History.css'

const History = () => {
  const timelineItems = [
    {
      year: '2020',
      title: 'La Vision',
      description: 'L\'idée de Calysta est née d\'un constat simple : dans notre vie urbaine trépidante, nous manquons d\'espaces dédiés uniquement à la relaxation et au bien-être mental.'
    },
    {
      year: '2021',
      title: 'Recherche & Conception',
      description: 'Après des mois d\'études sur les environnements optimaux pour la détente, nous avons conçu un espace qui combine science du bien-être et design biophilique.'
    },
    {
      year: '2022',
      title: 'Début des Travaux',
      description: 'Les travaux ont commencé dans un bâtiment historique du centre-ville, préservant son caractère tout en l\'adaptant à nos besoins spécifiques.'
    },
    {
      year: '2023',
      title: 'Formation de l\'Équipe',
      description: 'Nous avons rassemblé une équipe passionnée de professionnels du bien-être, formés spécifiquement à notre approche holistique de la relaxation.'
    },
    {
      year: '2024',
      title: 'Ouverture',
      description: 'Tranquillité a ouvert ses portes au public, proposant une nouvelle façon de se ressourcer en milieu urbain.'
    }
  ]
  
  return (
    <PageTransition>
      <section className="history-hero">
        <div className="container">
          <div className="history-hero-content">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Notre Histoire
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Le parcours qui nous a menés à créer un havre de paix unique.
            </motion.p>
          </div>
        </div>
      </section>
      
      <section className="history-intro">
        <div className="container">
          <div className="history-intro-content">
            <div className="intro-text">
              <SectionTitle 
                subtitle="Nos Débuts" 
                title="De l'idée à la réalité"
              />
              <p class="custom-text">Calysta est née d'une passion pour le bien-être et d'une conviction forte : dans notre monde hyperconnecté, nous avons plus que jamais besoin d'espaces dédiés à la déconnexion et à la relaxation.</p>
              <p class="custom-text">Notre fondatrice, Manon Viard, se dedie au bien-être des étudiants sur les campus Ynov. Elle propose des salles de sieste immersives, conçues pour offrir une pause régénérante au cœur du rythme intense des études. Grâce à des ambiances sensorielles douces, lumières, sons, odeurs, confort, ces espaces visent à favoriser la récupération mentale, réduire le stress, et améliorer la concentration. Calysta valorise le repos comme un levier de performance et de santé mentale dans l’environnement étudiant.</p>
              <p class="custom-text">Ce qui n'était au départ qu'un rêve est devenu, étape par étape, le sanctuaire urbain que nous connaissons aujourd'hui.</p>
            </div>
            <div className="intro-image">
              <img src="https://cdn.shopify.com/s/files/1/0579/9962/2298/files/GN_slide3B_1024x1024.jpg?v=1626440825" alt="Fondatrice de Tranquillité" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="timeline">
        <div className="container">
          <SectionTitle 
            subtitle="Notre Parcours" 
            title="Les étapes clés"
            centered={true}
          />
          
          <div className="timeline-container">
            {timelineItems.map((item, index) => (
              <motion.div 
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
            <div className="timeline-line"></div>
          </div>
        </div>
      </section>
      
      <section className="philosophy">
        <div className="container">
          <div className="philosophy-content">
            <div className="philosophy-image">
              <img src="https://i.pinimg.com/736x/bc/b2/6d/bcb26db555143ba68b4d5e1a57ce7908.jpg" alt="Espace zen avec plantes et lumière naturelle" />
            </div>
            <div className="philosophy-text">
              <SectionTitle 
                subtitle="Notre Philosophie" 
                title="L'art de la détente authentique"
              />
              <p>Avec Calysta, nous croyons que la véritable relaxation engage tous les sens et nécessite un environnement spécialement conçu pour favoriser le lâcher-prise.</p>
              <p>Notre approche repose sur quatre principes fondamentaux :</p>
              <ul className="philosophy-principles">
                <li>
                  <h4>Présence</h4>
                  <p>Créer un espace qui encourage naturellement l'attention au moment présent.</p>
                </li>
                <li>
                  <h4>Nature</h4>
                  <p>Intégrer des éléments naturels pour leur effet apaisant sur le système nerveux.</p>
                </li>
                <li>
                  <h4>Silence</h4>
                  <p>Offrir un refuge contre la pollution sonore de la vie urbaine.</p>
                </li>
                <li>
                  <h4>Équilibre</h4>
                  <p>Harmoniser tous les aspects de l'expérience, de la température à l'éclairage.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="values">
        <div className="container">
          <SectionTitle 
            subtitle="Nos Valeurs" 
            title="Ce qui nous guide au quotidien"
            centered={true}
          />
          
          <div className="values-grid">
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h3>Authenticité</h3>
              <p>Nous croyons à l'importance d'être fidèles à notre mission première : offrir une expérience de détente véritable, sans artifices ni compromis.</p>
            </motion.div>
            
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3>Bienveillance</h3>
              <p>Chaque décision que nous prenons est guidée par une attention sincère au bien-être de nos clients et de notre équipe.</p>
            </motion.div>
            
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3>Excellence</h3>
              <p>Nous visons l'excellence dans chaque détail, des matériaux que nous utilisons à la qualité de service que nous offrons.</p>
            </motion.div>
            
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3>Durabilité</h3>
              <p>Notre engagement envers l'environnement se reflète dans nos choix de matériaux, nos pratiques et notre vision à long terme.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default History