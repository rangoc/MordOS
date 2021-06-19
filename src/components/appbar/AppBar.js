import React from 'react';
// components
import FileDirectory from 'components/fileDirectory/FileDirectory';
import Gallery from 'components/gallery/Gallery';
import RssFeed from 'components/rssFeed/RssFeed';
import TextFile from 'components/textFile/TextFile';
import Webcam from 'components/webcam/Webcam';
import WebBrowser from 'components/webBrowser/WebBrowser';

// sass
import './appbar.scss';

const AppBar = () => {
  return (
    <div className="appbar">
      <FileDirectory />
      <TextFile />
      <Gallery />
      <Webcam />
      <RssFeed />
      <WebBrowser />
    </div>
  );
};

export default AppBar;
