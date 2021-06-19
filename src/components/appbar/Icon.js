import React, { useContext } from 'react';

// context
import { WindowContext } from 'context/WindowProvider';
const Icon = ({ name, asset }) => {
  const { openWindow } = useContext(WindowContext);
  return (
    <div className={name} onClick={() => openWindow(name)}>
      <div className="iconWrapper">
        <img src={asset} alt="Icon" />
      </div>
    </div>
  );
};

export default Icon;
