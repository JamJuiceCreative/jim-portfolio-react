import React from 'react';

export default function PortfolioItem({ title, description, imageSrc }) {
  return (
    <div className="portfolio-item">
      <h3>{title}</h3>
      <div
        style={{
          backgroundColor: 'lightblue',
          margin: '-15px 0px',
          border: '1px solid #ccc',
          boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        }}
      >
        <img
          src={imageSrc}
          alt={title}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            display: 'block', // Remove any potential extra spacing
            margin: '0 auto', // Center horizontally within the div
          }}
          className="d-flex align-items-center" // Center vertically within the div
        />
      </div>
      <p>{description}</p>
    </div>
  );
}
