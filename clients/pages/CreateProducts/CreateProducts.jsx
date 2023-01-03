import React from 'react';
import { connect } from 'react-redux';
import './CreateProducts.css';
import { createCard } from '../../redux/actions/card.action'; 

const CreateProducts = (props) => {
  const [name, setName] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [startPrice, setStartPrice] = React.useState('');
  const [endPrice, setEndPrice] = React.useState('');
  const [link, setLink] = React.useState('');

  const submitFormHandler = event => {
    event.preventDefault();
  }

  const createNewCard = () => {
    let newCard = {
      id: Date.now(),
      name: name,
      category: category,
      startPrice: startPrice,
      endPrice: endPrice,
      link: link
    }

    props.createCard(newCard)
  }

  return (
    <div className='containerCreateProducts'>
      <div className='productItem1'>
        <div>
          <form 
            className='formProductItem'
            onSubmit={submitFormHandler}
            >
            <div>
              <p className='textInpLabel'>Название</p>
              <input
                className='namedInp'
                placeholder='Название'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
            <p className='textInpLabel'>Категория</p>
              <input
                className='namedInp'
                placeholder='Категория'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div>
            <p className='textInpLabel'>Цена без правок</p>
              <input
                className='namedInp'
                type={'number'}
                min={"0"}
                placeholder='Цена без правок'
                value={startPrice}
                onChange={(e) => setStartPrice(e.target.value)}
              />
            </div>
            <div>
            <p className='textInpLabel'>Цена с правками</p>
              <input
                className='namedInp'
                type={'number'}
                min={"0"}
                placeholder='Цена с правками'
                value={endPrice}
                onChange={(e) => setEndPrice(e.target.value)}
              />
            </div>
            <div>
            <p className='textInpLabel'>Ссылка на шапку</p>
              <input
                className='namedInp'
                placeholder='Ссылка на шапку'
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <button 
              className='btnCreateCardPost'
              onClick={createNewCard}
              >
              Создать карточку
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

const mapDispachToProps = {
  createCard
}

export default connect(null, mapDispachToProps)(CreateProducts)