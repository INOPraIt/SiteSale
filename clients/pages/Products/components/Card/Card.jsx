import React from 'react';
import './Card.css';

export default function Card({ 
    name,
    category,
    subCategory,
    startPrice,
    endPrice,
    link
  }) {

  return (
    <div className="card">
      <div className="container">
        <img 
          className='cardProduct'
          src={link}
        />
        <div className='flexContComment'>
          <p className='pTag'>Название: {name}</p>
          <p className='pPrice'>Цена: {startPrice} р.</p>
        </div>
      </div>
    </div>
  )
}
