import React from 'react';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { useGetGoodsQuery } from '../../../../redux/getCards';

const CardList = ({onShowItem}) => {

  const {data = [], isLoading } = useGetGoodsQuery();
  if (isLoading) return <h1>Loading...</h1>
  

  return data.map(card => 
    <Card 
      key={card.id}
      name={card.header}
      link={card.capScrin}
      startPrice={card.price}
      onShowItem={onShowItem}
    />
  )
}

export default CardList;
