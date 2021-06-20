import React, { useEffect, useContext } from 'react';
import { WindowContext } from 'context/WindowProvider';
// assets
import cancel from 'assets/cancel.svg';
import Modal from './Modal';

// sass
import './textFileWindow.scss';
const TextFileWindow = () => {
  const { closeWindow, showModal, setShowModal } = useContext(WindowContext);
  const { neverShowAgain, show } = showModal;

  useEffect(() => {
    if (neverShowAgain === false) {
      setShowModal({ neverShowAgain: false, show: true });
    } else {
      setShowModal({ neverShowAgain: true, show: false });
    }
  }, [neverShowAgain, setShowModal]);

  const handleSave = () => {
    console.log('saving');
  };
  return (
    <div className="windowWrapper">
      <div className="windowHeader">
        <div className="iconWrapper" onClick={() => closeWindow('textFile')}>
          <img src={cancel} alt="Cancel" />
        </div>
      </div>
      <textarea className="text-file" autoFocus={true} disabled={show} />
      <button type="button" onClick={handleSave}>
        Save
      </button>
      {show && <Modal />}
    </div>
  );
};

export default TextFileWindow;
