import React from 'react';
import Card from '../Products/components/Card/Card';
import './Bascet.css';
import CardBascet from './components/CardBascet/CardBascet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Bascet() {
  const [interkassa, setInterkassa] = React.useState(false);
  const [coinpayments, setCoinpayments] = React.useState(false);
  const [enot, setEnot] = React.useState(false);
  const [primepayments, setPrimepayments] = React.useState(false);

  console.log(
    interkassa,
    coinpayments,
    enot,
    primepayments
  );

  return (
    <div className='containerBascet'>
      <div className='itemBascet1'>
        <h1 className='bascetHeader1'>Ваша корзина:</h1>
      </div>
      <div className='itemBascet2'>
        <CardBascet />
        <CardBascet />
        <CardBascet />
        <CardBascet />
        <CardBascet />
      </div>

      {!interkassa &&
        <motion.div
          initial={{ x: 1000, opacity: 0, }}
          animate={{ x: 0, opacity: 1, }}
          transition={{ delay: 0 }}
          className='itemBascet3'
        >
          <h1 className='bascetHeader2'>Оплата:</h1>
          <h2 className='textBuscet1'>Выберете способ оплаты:</h2>
          <div>
            <Link className='wayPay'>
              1.Interkassa
            </Link>
          </div>
          <div>
            <Link className='wayPay'>
              2.Coinpayments
            </Link>
          </div>
          <div>
            <Link className='wayPay'>
              3.Enot
            </Link>
          </div>
          <div>
            <Link className='wayPay'>
              4.Primepayments
            </Link>
          </div>
          <div>
          </div>
        </motion.div>
      }

      {/* {interkassa &&
        <motion.div
          className='itemBascet3'
          initial={{ x: 1000, opacity: 0, }}
          animate={{ x: 0, opacity: 1, }}
          transition={{ delay: 0 }}
        >
          <div className='blockInterkassa1'>
            <h1 className='interkassaHeader1'>Interkassa:</h1>
            <button
              className='btnBtnBuscet'
              onClick={() => { setInterkassa((prev) => !prev) }}
            >
              <img
                src='https://img.icons8.com/ios-glyphs/512/delete-sign.png'
                className='imgBtnFilters'
              />
            </button>
          </div>
          <h2 className='interkassaHeader2'>Укажите свои реквезиты:</h2>
          <div>
            <label className='labelCardPay1'>Номер карты:</label>
            <input className='inpCardPay1' />
          </div>
        </motion.div>
      } */}

      {/* {coinpayments &&
        <div className='itemBascet3'>
          <motion.div
            className='itemBascet3'
            initial={{ x: 1000, opacity: 0, }}
            animate={{ x: 0, opacity: 1, }}
            transition={{ delay: 0 }}
          >
            <div className='blockInterkassa1'>
              <h1 className='interkassaHeader1'>Interkassa:</h1>
              <button
                className='btnBtnBuscet'
                onClick={() => { setCoinpayments((prev) => !prev) }}
              >
                <img
                  src='https://img.icons8.com/ios-glyphs/512/delete-sign.png'
                  className='imgBtnFilters'
                />
              </button>
            </div>
            <h2 className='interkassaHeader2'>Укажите свои реквезиты:</h2>
            <div>
              <label className='labelCardPay1'>Номер карты:</label>
              <input className='inpCardPay1' />
            </div>
          </motion.div>
        </div>
      }

      {enot &&
        <div className='itemBascet3'>
          enot
        </div>
      }

      {primepayments &&
        <div className='itemBascet3'>
          primepayments
        </div>
      } */}

    </div>
  )
}
