import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/slices/User.slices';

export default function Login() {

  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log();
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }));
        navigate('/home')
      })
      .catch(console.log)
  }

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </form>
          <form>
            <p className='emailTextAuth' >Password</p>
            <input
              className='inpEmailAuth'
              type={'password'}
              placeholder='Введите ваш пароль'
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </form>
          <div className='linkBlockLogin'>
            <p>
              <Link
                className='linkAccoiuntLogin'
                to={'/register'}
              >
                Нет аккаунта?
              </Link>
            </p>
            <p>
              <Link
                className='linkAccoiuntLogin1'
                to={'/okno'}
              >
                Забыл пароль.
              </Link>
            </p>
          </div>
          <button 
            className='btnLogin1'
            onClick={() => handleLogin(email, pass)}
            >
            Войти
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

