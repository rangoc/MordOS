import React, { useEffect, useContext } from 'react';
// components
import AppBar from 'components/appbar/AppBar/AppBar';
import Logo from '../Logo/Logo';
import CreateTextFile from 'components/textFile/CreateTextFile/CreateTextFile';
import FileDirectory from 'components/fileDirectory/FileDirectory/FileDirectory';
import EditTextFile from 'components/textFile/EditTextFile/EditTextFile';
import Gallery from 'components/gallery/Gallery/Gallery';
import RssFeed from 'components/rssFeed/RssFeed/RssFeed';
import Webcam from 'components/webcam/Webcam';
import WebBrowser from 'components/webBrowser/WebBrowser';
// context
import { WindowContext } from 'context/WindowProvider';
import { TextFileContext } from 'context/TextFileProvider';
// sass
import './userInterface.scss';
const UserInterface = () => {
  const { isOpen } = useContext(WindowContext);
  const { file } = useContext(TextFileContext);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <div className="ui">
      <AppBar />
      <Logo />
      <div className="windowArea">
        {isOpen.textFile.create && <CreateTextFile />}
        {isOpen.fileDirectory && <FileDirectory />}
        {isOpen.textFile.edit && <EditTextFile file={file} />}
        {isOpen.gallery && <Gallery />}
        {isOpen.rssFeed && <RssFeed />}
        {isOpen.webcam && <Webcam />}
        {isOpen.webBrowser && <WebBrowser />}
      </div>
    </div>
  );
};

export default UserInterface;
