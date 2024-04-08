import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './redux/themeSlice';
import './App.css';

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    // Retrieve theme preference from localStorage
    const storedTheme = localStorage.getItem('theme');
    // If theme preference exists in localStorage and it's different from the current theme, toggle the theme
    if (storedTheme && storedTheme !== currentTheme) {
      dispatch(toggleTheme());
    }
  }, [currentTheme, dispatch]);

  const handleThemeToggle = () => {
    // Toggle the theme
    dispatch(toggleTheme());
    // Update localStorage with the new theme preference
    localStorage.setItem('theme', currentTheme === 'light' ? 'dark' : 'light');
    document.body.classList.toggle('dark-theme');
  };

  return (
    <div>
      <button onClick={handleThemeToggle}>
        Toggle Theme ({currentTheme})
      </button>
    </div>
  );
};

export default ThemeSwitch;
