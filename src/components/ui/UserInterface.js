import React, { useContext } from 'react';
// components
import AppBar from 'components/appbar/AppBar';
import Logo from './components/Logo';
import CreateTextFile from 'components/textFile/CreateTextFile';
import FileDirectory from 'components/fileDirectory/FileDirectory';
// context
import { WindowContext } from 'context/WindowProvider';

// sass
import './userInterface.scss';

const UserInterface = () => {
  const { isOpen } = useContext(WindowContext);

  return (
    <div className="ui">
      <AppBar />
      <Logo />
      <div className="windowArea">
        {isOpen.textFile && <CreateTextFile />}
        {isOpen.fileDirectory && <FileDirectory />}
      </div>
    </div>
  );
};

export default UserInterface;
