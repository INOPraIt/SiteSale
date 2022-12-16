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
          <Link className='underline-one'>
            Все
          </Link>
          <Link className='underline-one'>
            Сайты
          </Link>
          <Link className='underline-one'>
            Приложения
          </Link>
          <Link className='underline-one'>
            Комплекс (Сайт+Приложение)
          </Link>
        </div>
      </div>
    </div>
  )
}
