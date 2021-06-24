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
    {
      id: 1,
      code: 'fileDirectory',
      name: 'File Directory',
      asset: fileDirectory,
    },
    { id: 2, code: 'textFile', name: 'Text Editor', asset: textFile },
    { id: 3, code: 'gallery', name: 'Gallery', asset: gallery },
    { id: 4, code: 'webcam', name: 'WebCam', asset: webcam },
    { id: 5, code: 'rssFeed', name: 'News', asset: rssFeed },
    { id: 6, code: 'webBrowser', name: 'Browser', asset: webBrowser },
  ];
  return (
    <div className="appbar">
      {icons.map((icon) => (
        <Icon
          key={icon.id}
          code={icon.code}
          asset={icon.asset}
          name={icon.name}
        />
      ))}
    </div>
  );
};

export default AppBar;
