import React, { useContext } from 'react';
// context
import { TextFileContext } from 'context/TextFileProvider';
// assets
import fileDirectory from 'assets/fileDirectory.svg';

// sass
import './hintOverlay.scss';
const HintOverlay = ({ zIndex }) => {
  const { setHintOverlay } = useContext(TextFileContext);
  return (
    <div className="hintOverlay" style={{ zIndex: `${zIndex + 1}` }}>
      <p>
        All text files that you <span>save</span> will be placed inside of
      </p>
      <div className="hintOverlayImg-wrapper">
        <img src={fileDirectory} alt="File Directory" />
      </div>
      <div className="buttonContainer">
        <button
          type="button"
          onClick={() => setHintOverlay({ show: false, neverShowAgain: false })}
        >
          Got it!
        </button>
        <button
          type="button"
          onClick={() => setHintOverlay({ show: false, neverShowAgain: true })}
        >
          Don't show again
        </button>
      </div>
    </div>
  );
};

export default HintOverlay;
