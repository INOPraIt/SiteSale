import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='containerHome'>
      <div className='itemHome1'>
        <div className='blockHome1'>
          <h1 className='headerHome1'>SiteSale</h1>
          <h2 className='textHome1'>
            Приветствуем вас на SiteSale. Сдесь вы можете<br />
            приобрести сайты или полноценные веб-приложения.<br />
            Начните пользоваться нашими услугами прямо сейчас!
          </h2>
          <button className='btnHome1'>
            <Link
              to={'/products'}
              className='linkGen'
            >Начать</Link>
          </button>
        </div>
      </div>
      <div className='itemHome2'>
        <img
          src='https://sun9-10.userapi.com/impg/HagZsyo-4tjKMr5meznuiAGWZUjerb0s36NdWA/0F0nm7UYGPY.jpg?size=1080x810&quality=95&sign=52c11056cd1a5df7409dde5702d7a25c&type=album'
          className='imgHome1'
        />
        <img />
      </div>
      <div >
      </div>
    </div>
  )
}
