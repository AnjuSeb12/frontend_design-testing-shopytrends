import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/ThemeSlice.js' 
import { FaMoon, FaSun } from 'react-icons/fa'; 

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
