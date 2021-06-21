import React, { useEffect, useContext } from 'react';
// context
import { TextFileContext } from 'context/TextFileProvider';
// components
import Window from 'components/Window';
import HintOverlay from './HintOverlay';
import CreateModal from './CreateModal';

// constant
import { appType } from 'constants/appType';
// assets
import textFile from 'assets/textFile.svg';
// sass
import './createTextFile.scss';

const CreateTextFile = ({ content = '' }) => {
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
    <Window
      icon={textFile}
      code={appType.textFile}
      customStyle={{ justifyContent: 'space-between' }}
    >
      <textarea
        className="textFile-content"
        id="textFile-content"
        name="textFile-content"
        autoFocus={true}
        disabled={hintOverlay.show}
        value={content}
        onChange={handleChangeTextAreaContent}
      />
      <button className="primaryButton" type="button" onClick={openCreateModal}>
        Create
      </button>
      {hintOverlay.show && <HintOverlay />}
      {createModal.show && <CreateModal />}
    </Window>
  );
};

export default CreateTextFile;
