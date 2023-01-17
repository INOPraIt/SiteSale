import React from 'react';
import './Products.css';
import { motion } from 'framer-motion';
import CardList from './components/CardList/CardList';

export default function Products() {

  const [filter, setFilter] = React.useState(false)

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
          />
        </div>
      </div>
    </div>
  )
}
