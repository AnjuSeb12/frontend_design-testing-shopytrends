import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/ThemeSlice.js' // Adjust the path as necessary
import { FaMoon, FaSun } from 'react-icons/fa'; // Icons for light and dark modes

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div onClick={handleToggle} style={{ cursor: 'pointer' }}>
      {isDarkMode ? <FaSun size={20} color="white" /> : <FaMoon size={20} color="white" />}
    </div>
  );
};

export default ThemeToggle;
