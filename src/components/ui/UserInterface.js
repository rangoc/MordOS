import React, { useContext } from 'react';
// components
import AppBar from 'components/appbar/AppBar';
import Logo from 'components/logo/Logo';
import TextFileWindow from 'components/textFile/TextFileWindow';
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
      <div className="windowArea">{isOpen.textFile && <TextFileWindow />}</div>
    </div>
  );
};

export default UserInterface;
