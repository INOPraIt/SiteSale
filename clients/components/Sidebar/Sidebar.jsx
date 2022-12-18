import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='conatinerSidebar'>
      <div className='itemSidebar1'>
        <div className='logoSidebar'>
          <Link 
            className='linkLogoSidebar'
            to={'/'}>
            <h3>SiteSale</h3>
          </Link>
        </div>
        <div className='blockLinkSidebar'>
          <Link 
            className='underline-one'
            to={'/products'}
          >
            Все
          </Link>
          <Link 
            to={'/products'}
            className='underline-one'
          >
            Сайты
          </Link>
          <Link 
            className='underline-one'
            to={'/products'}
          >
            Приложения
          </Link>
          <Link 
            className='underline-one'
            to={'/products'}
          >
            Комплекс (Сайт+Приложение)
          </Link>
          <Link
            to={'/bascet'}
            className='underline-one'
          >
            Моя корзина
          </Link>
          <Link
            to={'/createproducts'}
            className='underline-one'
          >
            Создать пост
          </Link>
        </div>
      </div>
      <hr 
        className='lineSidebar'
        
        />
    </div>
  )
}
