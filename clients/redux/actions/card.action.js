import { CREATE_CARD } from "../types/cards.type";

export const createCard = (card) => {
  return {
    type: CREATE_CARD,
    payload: card
  }
}