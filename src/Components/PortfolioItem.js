import React from 'react'

export default function PortfolioItem({title, description, imageSrc}) {
  return (
    <div className="portfolio-item">
    <h3>{title}</h3>
    <div style={{backgroundColor:"lightblue", margin: '15px 0px 15px 0px', border: '1px solid #ccc', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'}}>
    <img src={imageSrc} alt={title} style={{ maxWidth: '100%', minWidth: '100%', height: '100%', maxHeight: '100%' }} />
    </div>
    <p> {description}</p>
    </div>
  )
}
