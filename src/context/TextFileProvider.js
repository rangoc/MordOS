import React, { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
const TextFileContext = createContext();

const TextFileProvider = ({ children }) => {
  // state needed for file directory
  const [textFiles, setTextFiles] = useState([]); // here all text files will be placed

  // text area state
  const [textAreaContent, setTextAreaContent] = useState('');

  const handleChangeTextAreaContent = (e) => {
    setTextAreaContent(e.target.value);
  };
  // text file window hint overlay
  const [hintOverlay, setHintOverlay] = useState({
    show: false,
    neverShowAgain: false,
  });

  // text file save modal
  const [saveModal, setSaveModal] = useState({
    show: false,
    textFileName: '',
  });

  const openSaveModal = () => {
    setSaveModal({ show: true, textFileName: '' });
    // console.log('Opening Save Modal');
  };
  const closeSaveModal = () => {
    setSaveModal({ show: false, textFileName: '' });
    // console.log('Closing Save Modal');
  };

  const handleChangeSaveModal = (e) => {
    setSaveModal({ ...saveModal, textFileName: e.target.value });
  };

  const handleSubmitSaveModal = async (e, textFileContent) => {
    e.preventDefault();
    setTextFiles([
      ...textFiles,
      {
        id: uuidv4(),
        name: e.target[0].value,
        content: textFileContent,
        createdAt: Date(),
      },
    ]);
    closeSaveModal();
  };
  return (
    <TextFileContext.Provider
      value={{
        textFiles,
        textAreaContent,
        hintOverlay,
        saveModal,
        handleChangeTextAreaContent,
        setHintOverlay,
        openSaveModal,
        closeSaveModal,
        handleChangeSaveModal,
        handleSubmitSaveModal,
      }}
    >
      {children}
    </TextFileContext.Provider>
  );
};

export { TextFileProvider, TextFileContext };
