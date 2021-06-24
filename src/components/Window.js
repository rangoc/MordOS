import React, { useContext } from 'react';
// context
import { WindowContext } from 'context/WindowProvider';
// assets
import cancel from 'assets/cancel.svg';
// sass
import './window.scss';
const Window = ({ icon, code, mode = null, children, customStyle = {} }) => {
  const { closeWindow } = useContext(WindowContext);
  return (
    <div className="window-wrapper" style={customStyle}>
      <div className="window-header">
        <div className="appIcon-wrapper">
          <img src={icon} alt={`${code}`} />
        </div>
        <div
          className="closeIcon-wrapper"
          onClick={() => closeWindow(code, mode)}
        >
          <img src={cancel} alt="Cancel" />
        </div>
      </div>
      {children}
    </div>
  );
};

export default Window;
