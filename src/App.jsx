import React, { useState } from 'react';
import Header from './Components/Header';
import TodoApp from './Components/TodoList';
import './App.css';
import { LanguageProvider } from './Components/LanguageContext';

function App() {
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageProvider value={{ language }}>
      <div className="Header">
        <Header changeLanguage={changeLanguage} />
        <TodoApp language={language} />
      </div>
    </LanguageProvider>
  );
}

export default App;
