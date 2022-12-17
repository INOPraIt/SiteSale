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
          <div className='containerSecretItem'>
            <div className='headerSecretItem1'>
              <h1 className='headerFilters1'>Фильтры</h1>
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
            <div className='itemSecretBlock1'>
              <p className='textFilters'>Цена:</p>
              <input
                className='inpFilters1'
                placeholder='От'
                type="number"
              />
              <input
                className='inpFilters2'
                placeholder='До'
                type="number"
              />
              <div>
                <button className='btnBtnFilters2'>
                  Применить фильтры
                </button>
              </div>
            </div>
            <div className='itemSecretBlock2'>
              <p className='textFilters'>Категории:</p>
              <div class="dropdown">
                <button class="dropbtn">Категория</button>
                <div class="dropdown-content">
                  <a href="#">Больницы</a>
                  <a href="#">Продажи</a>
                  <a href="#">Бизнес</a>
                  <a href="#">Продажи</a>
                  <a href="#">Бизнес</a>
                </div>
              </div>
            </div>
            <div className='itemSecretBlock3'>
            <p className='textFilters'>Сортировать по:</p>
              <div class="dropdown">
                <button class="dropbtn">По</button>
                <div class="dropdown-content">
                  <a href="#">Новизне</a>
                  <a href="#">Популярности</a>
                </div>
              </div>
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
      </div>
      <div className='itemProducts3'>
        <div>
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
        <div className='cardTetxtSite'>
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
    </div>
  )
}
