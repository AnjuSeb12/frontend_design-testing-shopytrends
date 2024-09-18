// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   isDarkMode: false, // Initial state for theme (light mode by default)
// };

// const themeSlice = createSlice({
//   name: 'theme',
//   initialState,
//   reducers: {
//     toggleTheme: (state) => {
//       state.isDarkMode = !state.isDarkMode; // Toggle between dark and light mode
//     },
//     setDarkMode: (state, action) => {
//       state.isDarkMode = action.payload;
//     }
//   },
// });

// export const { toggleTheme, setDarkMode } = themeSlice.actions;

// export default themeSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

// Initialize theme from localStorage, fallback to light mode if not set
const initialState = {
  isDarkMode: localStorage.getItem('theme') === 'dark' ? true : false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode; // Toggle between dark and light mode
      const newTheme = state.isDarkMode ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme); // Save theme to localStorage
      document.body.className = newTheme; // Apply the theme class to body element
    },
    setDarkMode: (state, action) => {
      state.isDarkMode = action.payload; // Set theme directly
      const newTheme = state.isDarkMode ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme); // Save theme to localStorage
      document.body.className = newTheme; // Apply the theme class to body element
    },
  },
});

export const { toggleTheme, setDarkMode } = themeSlice.actions;

export default themeSlice.reducer;
