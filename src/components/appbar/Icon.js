import React, { useContext } from 'react';

// context
import { WindowContext } from 'context/WindowProvider';

import { appType, appMode } from 'constants/appType';
// sass
import './icon.scss';
const Icon = ({ code, asset }) => {
  const { isOpen, openWindow } = useContext(WindowContext);
  return (
    <>
      {code === appType.textFile ? (
        <div
          className={`${code} ${
            isOpen[code][appMode.create] ? `${appMode.create} active` : ''
          }`}
          onClick={() => openWindow(code, appMode.create)}
        >
          <div className="icon-wrapper">
            <img src={asset} alt="Icon" />
          </div>
        </div>
      ) : (
        <div
          className={`${code} ${isOpen[code] ? 'active' : ''}`}
          onClick={() => openWindow(code)}
        >
          <div className="icon-wrapper">
            <img src={asset} alt="Icon" />
          </div>
        </div>
      )}
    </>
  );
};

export default Icon;
