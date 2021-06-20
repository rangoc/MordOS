import React, { useContext } from 'react';

// context
import { TextFileContext } from 'context/TextFileProvider';
// assets
import cancel from 'assets/cancel.svg';

// sass
import './saveModal.scss';
const SaveModal = () => {
  const {
    textAreaContent,
    saveModal,
    closeSaveModal,
    handleChangeSaveModal,
    handleSubmitSaveModal,
  } = useContext(TextFileContext);
  const { textFileName } = saveModal;

  return (
    <div className="saveModalWrapper">
      <div className="saveModal">
        <div className="saveModal-header">
          <div className="cancelIcon-wrapper" onClick={closeSaveModal}>
            <img src={cancel} alt="Cancel" />
          </div>
        </div>
        <form
          className="saveModal-form"
          onSubmit={(e) => handleSubmitSaveModal(e, textAreaContent)}
        >
          <input
            className="textFile-name"
            type="text"
            id="textFile-name"
            name="textFile-name"
            placeholder="Enter the name of your file"
            value={textFileName}
            onChange={handleChangeSaveModal}
          />
          <button type="submit">Done</button>
        </form>
      </div>
    </div>
  );
};

export default SaveModal;
