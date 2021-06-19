import React from 'react';
// assets
import logo from 'assets/logo.png';
// sass
import './logo.scss';
const Logo = () => {
  return (
    <div className="logoWrapper">
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;
