import React from 'react'

export default function PortfolioItem({title, description, imageSrc}) {
  return (
    <>
    <h3>{title}</h3>
    <div style={{backgroundColor:"lightblue", border: 'solid red 3px', margin: '15px 0px 15px 0px'}}>
    <img src={imageSrc} alt={title} style={{ maxWidth: '100%', minWidth: '100%', height: 'auto' }} />
    </div>
    <p> {description}</p>
    </>
  )
}
