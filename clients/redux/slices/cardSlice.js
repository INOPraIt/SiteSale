import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: []
  },
  reducers: {
    addCard(state, action) {
      console.log(action);

      state.cards.push({
        id: Date.now(),
        name: action.payload.name,
        category: action.payload.currentCategory,
        subCategory: action.payload.currentSubCategory,
        startPrice: action.payload.startPrice,
        endPrice: action.payload.endPrice,
        link: action.payload.link
      })
    },
  },
});

export const { addCard } = cardSlice.actions;
export default cardSlice.reducer;
