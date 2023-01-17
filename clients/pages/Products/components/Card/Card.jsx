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
        />
        <div className='flexContComment'>
          <p className='pTag'>Tag: {name}</p>
          <p className='pPrice'>Цена: {startPrice}</p>
        </div>
      </div>
    </div>
  )
}
