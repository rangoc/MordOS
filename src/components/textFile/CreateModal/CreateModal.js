import React, { useContext } from 'react';
// context
import { TextFileContext } from 'context/TextFileProvider';
// assets
import cancel from 'assets/cancel.svg';
import textFile from 'assets/textFile.svg';
// sass
import './createModal.scss';
const CreateModal = () => {
  const {
    textAreaContent,
    createModal,
    closeCreateModal,
    handleChangeCreateModal,
    handleSubmitCreateModal,
  } = useContext(TextFileContext);
  const { textFileName } = createModal;

  return (
    <div className="createModal-wrapper">
      <div className="createModal">
        <div className="window-header">
          <div className="appIcon-wrapper">
            <img src={textFile} alt="Text File editor" />
          </div>
          <div className="closeIcon-wrapper" onClick={closeCreateModal}>
            <img src={cancel} alt="Cancel" />
          </div>
        </div>
        <form
          className="createModal-form"
          onSubmit={(e) => handleSubmitCreateModal(e, textAreaContent)}
        >
          <input
            className="textFile-name"
            type="text"
            id="textFile-name"
            name="textFile-name"
            placeholder="Enter the name of your file"
            value={textFileName}
            onChange={handleChangeCreateModal}
          />
          <button className="primary-button" type="submit">
            Done
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateModal;
