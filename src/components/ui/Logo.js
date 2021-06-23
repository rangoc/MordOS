import React from 'react';
// assets
import logo from 'assets/logo.svg';
// sass
import './logo.scss';
const Logo = () => {
  return (
    <div className="wrapper">
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;
