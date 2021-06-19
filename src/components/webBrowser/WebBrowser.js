import React from 'react';
// assets
import webBrowser from 'assets/webBrowser.svg';

// sass
import './webBrowser.scss';
const WebBrowser = () => {
  return (
    <div className="webBrowser">
      <div className="iconWrapper">
        <img src={webBrowser} alt="" />
      </div>
    </div>
  );
};

export default WebBrowser;
