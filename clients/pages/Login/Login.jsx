import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <div className='containerLogin'>
      <div className='itemLogin1'>
        <h2 className='textHeaderLogin1'><li>SiteSale</li></h2>
        <div className='blockAuth1'>
          <h1 className='textHeaderLogin2'>Добро пожаловать</h1>
          <p className='textLogin1'>Добро пожаловать, осталось уточнить детали.</p>
          <form>
            <p className='emailTextAuth'>Email</p>
            <input
              className='inpEmailAuth'
              type={'email'}
              placeholder='Введите ваш email'
            />
          </form>
          <form>
            <p className='emailTextAuth' >Password</p>
            <input
              className='inpEmailAuth'
              type={'password'}
              placeholder='Введите ваш пароль'
            />
          </form>
          <button className='btnLogin1'>
            Зарегистрироваться
          </button>
        </div>
      </div>
      <div className='itemLogin2'>
        <img
          className='imgSwitchLoogin'
          src='https://sun9-88.userapi.com/impg/oG0cTySqCw8bd1yilixoFA_TaR3kHUeqLTcbFQ/1kYaaVH2H08.jpg?size=600x800&quality=95&sign=801d554e3c404283d0d539ce767f5522&type=album'
        />
      </div>
    </div>
  )
}
