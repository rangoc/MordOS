import React, { useContext } from 'react';

// context
import { WindowContext } from 'context/WindowProvider';

// sass
import './icon.scss';
const Icon = ({ name, asset }) => {
  const { isOpen, openWindow } = useContext(WindowContext);
  return (
    <div
      className={`${name} ${isOpen[name] ? `active` : ''}`}
      onClick={() => openWindow(name)}
    >
      <div className="iconWrapper">
        <img src={asset} alt="Icon" />
      </div>
    </div>
  );
};

export default Icon;
