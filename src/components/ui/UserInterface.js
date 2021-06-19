import React from 'react';

// components
import AppBar from 'components/appbar/AppBar';
// assets
import logo from 'assets/logo.png';
// sass
import './userInterface.scss';

const UserInterface = () => {
  return (
    <div className="ui">
      <AppBar />
      <div className="logoWrapper">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default UserInterface;
