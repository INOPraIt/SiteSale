import { CREATE_CARD } from "../types/cards.type";

const initialState = {
  cards: []
};

export const cardReducer = (s = initialState, a) => {
  switch (a.type) {
    case CREATE_CARD:
      return {...s, cards: [...s.cards, a.payload]}
    default:
      return initialState;
  }
}
