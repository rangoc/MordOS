import React, { useContext } from 'react';
// components
import AppBar from 'components/appbar/AppBar';
import Logo from 'components/logo/Logo';
// context
import { WindowContext } from 'context/WindowProvider';

// assets
import cancel from 'assets/cancel.svg';
// sass
import './userInterface.scss';
const UserInterface = () => {
  const { isOpen } = useContext(WindowContext);

  console.log(isOpen);
  return (
    <div className="ui">
      <AppBar />
      <Logo />
      <div className="windowArea">
        {isOpen.textFile && (
          <div className="windowWrapper">
            <div className="windowHeader">
              <div className="iconWrapper">
                <img src={cancel} alt="Cancel" />
              </div>
            </div>
            <textarea className="text-file" autoFocus={true} />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInterface;
