import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='itemHome3'>
       <div className='blockHome2'>
          <h1 className='headerHome2'>SiteSale:</h1>
          <p className='textHome2'>
            Мы уважаем всех кто присутствует на SiteSale,<br />
            поэтому вы всегда можете обратиться в нашу <br />
            поддержку в Telegram.
          </p>
        </div>
        <div className='blockHome3'>
          <h3 className='tetxHome3'>Ссылки:</h3>
          <p className='textHome4'>
            Поддержка:
            <a 
              href='https://t.me/Ryzhev_3301'
              className='linksTelegram'
              >
              @SiteSale
            </a>
          </p>
        </div>
        <div className='blockHome3'>
          <h3 className='tetxHome3'>Гайды:</h3>
          <p className='textHome4'>
            <Link to={'/getStarted'} className='linksTelegramGudes'>Как начать?</Link>
          </p>
          <p className='textHome4'>
            <Link to={'/getStarted'} className='linksTelegramGudes'>Выбор</Link>
          </p>
          <p className='textHome4'>
            <Link to={'/getStarted'} className='linksTelegramGudes'>Оплата</Link>
          </p>
        </div>
        <div className='blockHome3'>
          <h3 className='tetxHome3'>Сообщество:</h3>
          <p className='textHome4'>
            <a className='linksTelegram' href='https://t.me/Ryzhev_3301'>
              Telegram разработчика
            </a>
          </p>
        </div>
    </div>
  )
}
