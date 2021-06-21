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

  // text file create modal
  const [createModal, setCreateModal] = useState({
    show: false,
    textFileName: '',
  });

  const openCreateModal = () => {
    setCreateModal({ show: true, textFileName: '' });
    // console.log('Opening Save Modal');
  };
  const closeCreateModal = () => {
    setCreateModal({ show: false, textFileName: '' });
    // console.log('Closing Save Modal');
  };

  const handleChangeCreateModal = (e) => {
    setCreateModal({ ...createModal, textFileName: e.target.value });
  };

  // generating a text file that will be placed inside a File Directory component
  const handleSubmitCreateModal = async (e, textFileContent) => {
    e.preventDefault();
    setTextFiles([
      ...textFiles,
      {
        id: uuidv4(),
        name: e.target[0].value || 'untitled',
        content: textFileContent,
        createdAt: Date(),
      },
    ]);
    closeCreateModal();
  };
  return (
    <TextFileContext.Provider
      value={{
        textFiles,
        textAreaContent,
        hintOverlay,
        createModal,
        handleChangeTextAreaContent,
        setHintOverlay,
        openCreateModal,
        closeCreateModal,
        handleChangeCreateModal,
        handleSubmitCreateModal,
      }}
    >
      {children}
    </TextFileContext.Provider>
  );
};

export { TextFileProvider, TextFileContext };
