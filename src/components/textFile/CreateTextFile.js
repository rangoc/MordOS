import React, { useEffect, useContext } from 'react';
import { TextFileContext } from 'context/TextFileProvider';
import { WindowContext } from 'context/WindowProvider';

// components
import HintOverlay from './components/HintOverlay';
import CreateModal from './components/CreateModal';
// assets
import cancel from 'assets/cancel.svg';
import textFile from 'assets/textFile.svg';
// sass
import './createTextFile.scss';
const CreateTextFile = () => {
  const { closeWindow } = useContext(WindowContext);
  const {
    handleChangeTextAreaContent,
    hintOverlay,
    setHintOverlay,
    createModal,
    openCreateModal,
  } = useContext(TextFileContext);

  useEffect(() => {
    if (hintOverlay.neverShowAgain === false) {
      setHintOverlay({ neverShowAgain: false, show: true });
    } else {
      setHintOverlay({ neverShowAgain: true, show: false });
    }
  }, [hintOverlay.neverShowAgain, setHintOverlay]);

  return (
    <div className="window-wrapper">
      <div className="window-header">
        <div className="appIcon-wrapper">
          <img src={textFile} alt="Text File editor" />
        </div>
        <div
          className="closeIcon-wrapper"
          onClick={() => closeWindow('textFile')}
        >
          <img src={cancel} alt="Cancel" />
        </div>
      </div>
      <textarea
        className="textFile-content"
        id="textFile-content"
        name="textFile-content"
        autoFocus={true}
        disabled={hintOverlay.show}
        onChange={handleChangeTextAreaContent}
      />
      <button type="button" onClick={openCreateModal}>
        Create
      </button>
      {hintOverlay.show && <HintOverlay />}
      {createModal.show && <CreateModal />}
    </div>
  );
};

export default CreateTextFile;
