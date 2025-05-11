import './SectionTitle.css'

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = false, 
  light = false 
}) => {
  return (
    <div className={`section-title ${centered ? 'centered' : ''} ${light ? 'light' : ''}`}>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <h2>{title}</h2>
      <div className="title-underline"></div>
    </div>
  )
}

export default SectionTitle