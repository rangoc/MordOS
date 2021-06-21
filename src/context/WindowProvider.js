import React, { useState, createContext } from 'react';

const WindowContext = createContext({
  fileDirectory: false,
  textFile: false,
  gallery: false,
  camera: false,
  rssFeed: false,
  webBrowser: false,
});

const WindowProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState({
    fileDirectory: false,
    textFile: false,
    gallery: false,
    webcam: false,
    rssFeed: false,
    webBrowser: false,
  });
  const openWindow = (code) => {
    if (isOpen[code] === false) {
      setIsOpen({ ...isOpen, [code]: true });
    } else {
      // console.log('Already opened');
    }
  };
  const closeWindow = (code) => {
    setIsOpen({ ...isOpen, [code]: false });
    // console.log(`closing ${code}`);
  };
  return (
    <WindowContext.Provider
      value={{
        isOpen,
        openWindow,
        closeWindow,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};

export { WindowProvider, WindowContext };
