import React, { useContext } from 'react';

// context
import { WindowContext } from 'context/WindowProvider';

// sass
import './icon.scss';
const Icon = ({ code, asset }) => {
  const { isOpen, openWindow } = useContext(WindowContext);
  return (
    <div
      className={`${code} ${isOpen[code] ? `active` : ''}`}
      onClick={() => openWindow(code)}
    >
      <div className="icon-wrapper">
        <img src={asset} alt="Icon" />
      </div>
    </div>
  );
};

export default Icon;
