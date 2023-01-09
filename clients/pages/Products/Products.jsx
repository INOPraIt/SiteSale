import React from 'react';
import Card from './components/Card/Card';
import './Products.css';
import { motion } from 'framer-motion';
import CardList from './components/CardList/CardList';
import axios from 'axios';

export default function Products() {

  const [filter, setFilter] = React.useState(false)

  const cards = [
    { id: 1, name: 'dawdwad' },
    { id: 2, name: 'hdrd' },
    { id: 3, name: 'xbfcbdxfb' },
    { id: 4, name: 'jnhn' }
  ]

  axios({
    method: 'get',
    url: 'http://localhost:5000/api/getcards'
  })
    .then((response) => {
      console.log(response.data);
    });

  return (
    <div className='containerProducts'>
      <div className='itemProducts1'>
        <div className='inputBlockProducts'>
          <button className='btnCategory'>
            Бизнес
          </button>
          <button className='btnCategory'>
            Криптовалюта
          </button>
          <button className='btnCategory'>
            It индустрия
          </button>
          <button className='btnCategory'>
            Социальные услуги
          </button>
          <button className='btnCategory'>
            Новостные
          </button>
          <button className='btnCategory'>
            Копии
          </button>
        </div>
      </div>
      <div className='itemProducts2'>
        <div className='inputBlockProducts1'>
          <button
            onClick={() => setFilter(prev => !prev)}
            className='btnFilter'>
            Фильтры
          </button>
        </div>
      </div>
      <div className='itemProducts3'>
        <div className='inputBlockProducts'>
        </div>
      </div>
      <div>
      </div>
      {filter &&
        <motion.div
          className='itemProducts4'
          initial={{ x: -1000, opacity: 0, }}
          animate={{ x: 0, opacity: 1, }}
          transition={{ delay: 0 }}
        >
          <div>
            <input 
              className='inputSearchTag'
              placeholder='Теги'
            />
            <input 
              type={'number'}
              className='inputSearchPrice'
              placeholder='Цена от:'
            />
            <input 
              type={'number'}
              className='inputSearchPriceDo'
              placeholder='Цена до:'
            />
          </div>
        </motion.div>
      }
      <div className='itemProducts5'>
        <div>
          <div className='headersGenProducts'>
            <h1 className='headerProducts'>
              Покупайте лучшие готовые решения.
            </h1>
            <p className='textProducts1'>
              Нашей платформой пользуется более 10000+ человек
            </p>
          </div>
        </div>
      </div>
      <div className='itemProducts6'>
        <div className='cardTetxtSite'>
          <CardList
            cards={cards}
          />
        </div>
      </div>
    </div>
  )
}
