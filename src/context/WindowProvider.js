import React, { useState, createContext } from 'react';

// constants
import { appType } from 'constants/appType';

const WindowContext = createContext({
  fileDirectory: { create: false, edit: false },
  textFile: false,
  gallery: false,
  camera: false,
  rssFeed: false,
  webBrowser: false,
});

const WindowProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState({
    fileDirectory: false,
    textFile: { create: false, edit: false },
    gallery: false,
    webcam: false,
    rssFeed: false,
    webBrowser: false,
  });
  const [highestZIndex, setHighestZIndex] = useState(1);
  const openWindow = (code, mode = null) => {
    if (code === appType.textFile) {
      if (!isOpen[code][mode]) {
        setIsOpen({ ...isOpen, [code]: { ...isOpen[code], [mode]: true } });
      } else {
        // console.log('Already opened');
      }
    } else {
      if (isOpen[code] === false) {
        setIsOpen({ ...isOpen, [code]: true });
      } else {
        // console.log('Already opened');
      }
    }
  };
  const closeWindow = (code, mode = null) => {
    if (code === appType.textFile) {
      setIsOpen({ ...isOpen, [code]: { ...isOpen[code], [mode]: false } });
      // console.log(`closing ${code} ${mode}`);
    } else {
      setIsOpen({ ...isOpen, [code]: false });
      // console.log(`closing ${code}`);
    }
  };
  return (
    <WindowContext.Provider
      value={{
        isOpen,
        highestZIndex,
        openWindow,
        setHighestZIndex,
        closeWindow,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};

export { WindowProvider, WindowContext };
