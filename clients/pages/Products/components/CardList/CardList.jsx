import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';

const CardList = ({paramCard}) => {
  return paramCard.map(card => 
    <Card 
      key={card.id}
      name={card.name}
      price={card.startPrice}
      link={card.link}
    />
  )
}

const mapStateToProps = state => {
  return {
    paramCard: state.card.cards
  }
}

export default connect(mapStateToProps, null)(CardList);
