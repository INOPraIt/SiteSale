import React from 'react';
import './Card.css';

export default function Card({name, price, link}) {
  return (
    <div className="card">
      <div className="container">
        <img 
          src={link}
          className='cardProduct'
        />
        <div className='flexContComment'>
          <p className='pTag'>Tag: Kripto</p>
          <p className='pPrice'>Цена: 1300р</p>
        </div>
      </div>
    </div>
  )
}
