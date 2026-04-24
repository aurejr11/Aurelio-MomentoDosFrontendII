// Se crea el componente Card 

import React from 'react';

const Card = ({ name, price, img }) => (
  <div className="product-card">
    <div className="product-img">{img}</div>
    <h4 style={{margin: '10px 0 5px'}}>{name}</h4>
    <p style={{fontSize: '0.8rem', color: '#666'}}>Algodón de alta calidad</p>
    <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '15px'}}>
      <span style={{fontWeight: 'bold'}}>€{price}</span>
      <button className="btn-add">AÑADIR</button>
    </div>
  </div>
);
export default Card;