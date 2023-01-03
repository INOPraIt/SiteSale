import React from 'react';
import Card from './components/Card/Card';
import './Products.css';
import { motion } from 'framer-motion';
import CardList from './components/CardList/CardList';

export default function Products() {

  const [filter, setFilter] = React.useState(false)

  const cards = [
    {id: 1, name: 'dawdwad'},
    {id: 2, name: 'hdrd'},
    {id: 3, name: 'xbfcbdxfb'},
    {id: 4, name: 'jnhn'}
  ]

  return (
    <div className='containerProducts'>
      {filter &&
        <motion.div
          className='secretItem1'
          initial={{ x: -1000, opacity: 0, }}
          animate={{ x: 0, opacity: 1, }}
          transition={{ delay: 0 }}
        >
          <div className='containerSecret1'>
            <div className='itemSecretBlockFilter1'>
              <div className='priceSecretContainer'>
                <p className='headerPrice1'>Цена Р:</p>
                <input
                  className='priceOt'
                  type={"number"}
                  min={"1"}
                  placeholder="От"
                />
                <input
                  className='priceDo'
                  type={"number"}
                  min={"1"}
                  placeholder="До"
                />
              </div>
              <div>
                <button
                  onClick={() => { setFilter((prev) => !prev) }}
                  className='btnCrosSecretBlock'
                >
                  <img
                    className='imgCrosSecretBlock'
                    src='https://img.icons8.com/ios-glyphs/512/delete-sign.png'
                  />
                </button>
              </div>
            </div>
            <div className='itemSecretBlockFilter2'>
              <hr className='lineBlockCategory' />
              <div class="dropdown">
                <button class="dropbtn">
                  <img
                    className='category1'
                    src='https://img.icons8.com/material-outlined/512/circled-chevron-up.png'
                  />
                  <p className='namedFilters'>Категория</p>
                </button>
                <div class="dropdown-content">
                  <a href="#">Личный безнес</a>
                  <a href="#">Больницы</a>
                  <a href="#">Криптовалюта</a>
                  <a href="#">Интернет магазины</a>
                  <a href="#">It компании</a>
                </div>
              </div>
            </div>
            <div className='itemSecretBlockFilter3'>
              <hr className='lineBlockCategory' />
              <div class="dropdown">
                <button class="dropbtn">
                  <img
                    className='category1'
                    src='https://img.icons8.com/material-outlined/512/circled-chevron-up.png'
                  />
                  <p className='namedFilters'>По новизне</p>
                </button>
                <div class="dropdown-content">
                  <a href="#">Самые новые</a>
                  <a href="#">1-2 месяца</a>
                  <a href="#">3-4 месяца</a>
                  <a href="#">5-6 месяцев</a>
                  <a href="#">Больше полугода</a>
                  <a href="#">Больше года</a>
                </div>
              </div>
            </div>
            <div className='itemSecretBlockFilter4'>
              <hr className='lineBlockCategory' />
              <div class="dropdown">
                <button class="dropbtn">
                  <img
                    className='category1'
                    src='https://img.icons8.com/material-outlined/512/circled-chevron-up.png'
                  />
                  <p className='namedFilters'>По популярности</p>
                </button>
                <div class="dropdown-content">
                  <a href="#">10-20 star</a>
                  <a href="#">20-30 star</a>
                  <a href="#">30-40 star</a>
                  <a href="#">40-50 star</a>
                  <a href="#">50-60 star</a>
                  <a href="#">Больше 60 star</a>
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
          <CardList 
            cards={cards}
          />
        </div>
      </div>
    </div>
  )
}
