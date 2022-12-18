import React from 'react';
import './CreateProducts.css';

export default function CreateProducts() {
  return (
    <div className='containerCreateProducts'>
      <div className='productItem1'>
        <div>
          <form className='formProductItem'>
            <div>
              <p className='textInpLabel'>Название</p>
              <input
                className='namedInp'
                placeholder='Название'
              />
            </div>
            <div>
            <p className='textInpLabel'>Категория</p>
              <input
                className='namedInp'
                placeholder='Категория'
              />
            </div>
            <div>
            <p className='textInpLabel'>Цена без правок</p>
              <input
                className='namedInp'
                placeholder='Цена без правок'
              />
            </div>
            <div>
            <p className='textInpLabel'>Цена с правками</p>
              <input
                className='namedInp'
                placeholder='Цена с правками'
              />
            </div>
            <div>
            <p className='textInpLabel'>Ссылка на шапку</p>
              <input
                className='namedInp'
                placeholder='Ссылка на шапку'
              />
            </div>
            <button className='btnCreateCardPost'>
              Создать карточку
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
