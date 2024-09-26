import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import ThemeSlice from './ThemeSlice';

 


const store = configureStore({
  reducer: {
    cart: cartReducer,
    theme: ThemeSlice,
  },
});

export default store;
