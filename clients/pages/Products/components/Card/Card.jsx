import React from 'react';
import './Card.css';

export default function Card() {
  return (
    <div className="card">
      <img 
        src='https://sun9-10.userapi.com/impg/HagZsyo-4tjKMr5meznuiAGWZUjerb0s36NdWA/0F0nm7UYGPY.jpg?size=1080x810&quality=95&sign=52c11056cd1a5df7409dde5702d7a25c&type=album'
        className='cardProduct'
      />
      <div className="container">
        <h4><b>120$</b></h4>
        <p>Описание</p>
      </div>
    </div>
  )
}
