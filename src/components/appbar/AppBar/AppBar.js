import React from 'react';
// components
import Icon from '../Icon/Icon';

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
    { id: 1, code: 'fileDirectory', asset: fileDirectory },
    { id: 2, code: 'textFile', asset: textFile },
    { id: 3, code: 'gallery', asset: gallery },
    { id: 4, code: 'webcam', asset: webcam },
    { id: 5, code: 'rssFeed', asset: rssFeed },
    { id: 6, code: 'webBrowser', asset: webBrowser },
  ];
  return (
    <div className="appbar">
      {icons.map((icon) => (
        <Icon key={icon.id} code={icon.code} asset={icon.asset} />
      ))}
    </div>
  );
};

export default AppBar;
