import React, { useEffect, useContext } from 'react';
import { TextFileContext } from 'context/TextFileProvider';
import { WindowContext } from 'context/WindowProvider';

// components
import HintOverlay from './components/HintOverlay';
import SaveModal from './components/SaveModal';
// assets
import cancel from 'assets/cancel.svg';
import textFile from 'assets/textFile.svg';
// sass
import './textFileWindow.scss';
const TextFileWindow = () => {
  const { closeWindow } = useContext(WindowContext);
  const {
    handleChangeTextAreaContent,
    hintOverlay,
    setHintOverlay,
    saveModal,
    openSaveModal,
  } = useContext(TextFileContext);

  useEffect(() => {
    if (hintOverlay.neverShowAgain === false) {
      setHintOverlay({ neverShowAgain: false, show: true });
    } else {
      setHintOverlay({ neverShowAgain: true, show: false });
    }
  }, [hintOverlay.neverShowAgain, setHintOverlay]);

  return (
    <div className="windowWrapper">
      <div className="windowHeader">
        <div className="appIconWrapper">
          <img src={textFile} alt="Text File editor" />
        </div>
        <div
          className="closeIconWrapper"
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
      <button type="button" onClick={openSaveModal}>
        Save
      </button>
      {hintOverlay.show && <HintOverlay />}
      {saveModal.show && <SaveModal />}
    </div>
  );
};

export default TextFileWindow;
