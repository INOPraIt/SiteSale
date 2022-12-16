import React from 'react';
import Card from './components/Card/Card';
import './Products.css';
import { motion } from 'framer-motion';

export default function Products() {

  const [filter, setFilter] = React.useState(false)

  return (
    <div className='containerProducts'>
      {filter &&
        <motion.div
          className='secretItem1'
          initial={{ x: -1000, opacity: 0, }}
          animate={{ x: 0, opacity: 1, }}
          transition={{ delay: 0 }}
        >
        <div className='itemFiltersDeFlex'>
          <div>
            <h2 className='headerFilters1'>Фильтры:</h2>
            <div>
              <p className='textFilters'>Цена:</p>
              <input
                className='inpFilters1'
                placeholder='От'
                type={'number'}
              />
              <input
                className='inpFilters2'
                placeholder='До'
                type={'number'}
              />
            </div>
            <button 
              className='btnBtnFilters2'
            >Применить фильтры</button>
          </div>
          <div>
            <button 
              className='btnBtnFilters'
              onClick={() => { setFilter((prev) => !prev) }}
            >
              <img 
                src='https://img.icons8.com/ios-glyphs/512/delete-sign.png'
                className='imgBtnFilters'
              />
            </button>
          </div>
        </div>
        </motion.div>
      }
      <div className='itemProducts1'>

        {!filter &&
          <motion.div 
            className='inputBlockProducts'
            initial={{ x: -1000, opacity: 0, }}
            animate={{ x: 0, opacity: 1, }}
            transition={{ delay: 0 }}
          >
            <div className='inpProductSearch1'>
              <img
                src='https://img.icons8.com/ios-glyphs/512/search.png'
                className='imgProducts'
              />
            </div>
            <input
              className='inpProductSearch2'
              placeholder='Search...'
            />
            <div className='inpProductSearch3'>
              <button
                className='btnFiltersProducts'
                onClick={() => { setFilter((prev) => !prev) }}
              >
                <img
                  className='imgSettingsProducts'
                  src='https://img.icons8.com/ios/512/settings.png'
                />
              </button>
            </div>
          </motion.div>
        }
      </div>
      <div className='itemProducts2'>
        {!filter &&
          <motion.div
            className='headersGenProducts'
            initial={{ x: -1000, opacity: 0, }}
            animate={{ x: 0, opacity: 1, }}
            transition={{ delay: 0 }}
          >
            <h1 className='headerProducts'>
              Покупайте лучшие готовые решения.
            </h1>
            <p className='textProducts1'>
              Нашей платформой пользуется более 10000+ человек
            </p>
          </motion.div>
        }

      </div>
      <div className='itemProducts3'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
