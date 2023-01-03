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
        <h4><b>Название - {name}</b></h4>
        <h4><b>Цена - {price}</b></h4>
        <button className='btnCardProduct1'>
          Добавить в карзину
        </button>
        <button className='btnCardProduct2'>
          Убрать из корзины
        </button>
      </div>
    </div>
  )
}
