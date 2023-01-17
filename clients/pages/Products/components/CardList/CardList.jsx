import React from 'react';
import Card from '../Card/Card';
import { useSelector} from 'react-redux'

const CardList = () => {
  const cards = useSelector(state => state.cards.cards);

  return cards.map(card => 
    <Card 
      key={card.id}
      {...card}
      // name={card.name}
      // category={card.category}
      // subCategory={card.subCategory}
      // endPrice={card.endPrice}
      // link={card.link}
    />
  )
}

export default CardList;
