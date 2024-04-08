import React from 'react';

function Header({ changeLanguage }) {
  return (
    <div className="header">
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ge')}>Georgian</button>
    </div>
  );
}

export default Header;
