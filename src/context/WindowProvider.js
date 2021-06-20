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
  const openWindow = (name) => {
    if (isOpen[name] === false) {
      setIsOpen({ ...isOpen, [name]: true });
    } else {
      // console.log('Already opened');
    }
  };
  const closeWindow = (name) => {
    setIsOpen({ ...isOpen, [name]: false });
    // console.log(`closing ${name}`);
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
