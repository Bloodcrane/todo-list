import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './redux/themeSlice';
import './App.css';

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme && storedTheme !== currentTheme) {
      dispatch(toggleTheme());
    }
  }, [currentTheme, dispatch]);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
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
