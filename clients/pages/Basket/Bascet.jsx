import React from 'react';
import Card from '../Products/components/Card/Card';
import './Bascet.css';
import CardBascet from './components/CardBascet/CardBascet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Bascet() {
  return (
    <div className='containerBascet'>
      <div className='itemBascet1'>
        <h1 className='bascetHeader1'>Ваша корзина:</h1>
      </div>
      <div className='itemBascet2'>
        <CardBascet />
        <CardBascet />
        <CardBascet />
        <CardBascet />
        <CardBascet />
        
      </div>
        <div className='itemBascet3'>
          <h1 className='bascetHeader2'>Оплата:</h1>
          <h2 className='textBuscet1'>Выберете способ оплаты:</h2>
          <div>
            <Link className='wayPay'>
              1.Freecassa
            </Link>
          </div>
          <div>
            <Link className='wayPay'>
              2.Interkassa
            </Link>
          </div>
          <div>
            <Link className='wayPay'>
              3.Enot
            </Link>
          </div>
          <div>
            <Link className='wayPay'>
              4.Coinpayments
            </Link>
          </div>
          <div>
            <Link className='wayPay'>
              5.Primepayments
            </Link>
          </div>
          <div>
          </div>
        </div>
    </div>
  )
}
