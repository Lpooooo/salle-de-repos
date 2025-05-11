import { Link } from 'react-router-dom'
import PageTransition from '../components/ui/PageTransition'
import './NotFound.css'

const NotFound = () => {
  return (
    <PageTransition>
      <section className="not-found">
        <div className="container">
          <div className="not-found-content">
            <h1>404</h1>
            <h2>Page Non Trouvée</h2>
            <p>La page que vous recherchez semble introuvable.</p>
            <Link to="/" className="button">Retour à l'Accueil</Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default NotFound