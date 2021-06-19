import React from 'react';
// components
import Icon from './Icon';

// assets
import fileDirectory from 'assets/fileDirectory.svg';
import textFile from 'assets/textFile.svg';
import gallery from 'assets/gallery.svg';
import webcam from 'assets/webcam.svg';
import rssFeed from 'assets/rssFeed.svg';
import webBrowser from 'assets/webBrowser.svg';
// sass
import './appbar.scss';
const AppBar = () => {
  const icons = [
    { key: 1, name: 'fileDirectory', asset: fileDirectory },
    { key: 2, name: 'textFile', asset: textFile },
    { key: 3, name: 'gallery', asset: gallery },
    { key: 4, name: 'webcam', asset: webcam },
    { key: 5, name: 'rssFeed', asset: rssFeed },
    { key: 6, name: 'webBrowser', asset: webBrowser },
  ];
  return (
    <div className="appbar">
      {icons.map((icon) => (
        <Icon key={icon.key} name={icon.name} asset={icon.asset} />
      ))}
    </div>
  );
};

export default AppBar;
