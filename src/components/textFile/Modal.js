import React, { useContext } from 'react';
// context
import { WindowContext } from 'context/WindowProvider';
// assets
import fileDirectory from 'assets/fileDirectory.svg';

// sass
import './modal.scss';
const Modal = () => {
  const { setShowModal } = useContext(WindowContext);
  return (
    <div className="modal">
      <p>
        All text files that you <span>save</span> will be placed inside of
      </p>
      <div className="modalImgWrapper">
        <img src={fileDirectory} alt="File Directory" />
      </div>
      <div className="buttonContainer">
        <button
          type="button"
          onClick={() => setShowModal({ show: false, neverShowAgain: false })}
        >
          Got it!
        </button>
        <button
          type="button"
          onClick={() => setShowModal({ show: false, neverShowAgain: true })}
        >
          Don't show again
        </button>
      </div>
    </div>
  );
};

export default Modal;
