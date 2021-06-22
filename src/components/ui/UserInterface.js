import React, { useContext } from 'react';
// components
import AppBar from 'components/appbar/AppBar';
import Logo from './Logo';
import CreateTextFile from 'components/textFile/CreateTextFile';
import FileDirectory from 'components/fileDirectory/FileDirectory';
import EditTextFile from 'components/textFile/EditTextFile';
import Gallery from 'components/gallery/Gallery';
import RssFeed from 'components/rssFeed/RssFeed';
import Webcam from 'components/webcam/Webcam';
// context
import { WindowContext } from 'context/WindowProvider';
import { TextFileContext } from 'context/TextFileProvider';
// sass
import './userInterface.scss';

const UserInterface = () => {
  const { isOpen } = useContext(WindowContext);
  const { file } = useContext(TextFileContext);

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
      </div>
    </div>
  );
};

export default UserInterface;
