import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import ThemeSlice from './ThemeSlice';

 // Adjust the path as necessary


const store = configureStore({
  reducer: {
    cart: cartReducer,
    theme: ThemeSlice,
  },
});

export default store;
