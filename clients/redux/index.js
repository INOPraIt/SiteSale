import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/User.slices';
import {cardReducer} from './reducers/card.reducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    card: cardReducer
  }
})