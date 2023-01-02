import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/User.slices'

export const store = configureStore({
  reducer: {
    user: userReducer,
  }
})