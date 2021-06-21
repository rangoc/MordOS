import React, { useState, useContext } from 'react';

// components
import Window from 'components/Window';
import { appMode, appType } from 'constants/appType';
// context
import { TextFileContext } from 'context/TextFileProvider';
import { WindowContext } from 'context/WindowProvider';
// assets
import textFile from 'assets/textFile.svg';

const EditTextFile = ({ file }) => {
  const { closeWindow } = useContext(WindowContext);
  const { textFiles, setTextFiles } = useContext(TextFileContext);
  const [textAreaContent, setTextAreaContent] = useState(file.content);

  const handleChangeTextAreaContent = (e) => {
    setTextAreaContent(e.target.value);
  };
  const updateTextFiles = (fileElement) => {
    const updatedFiles = textFiles.map((f) =>
      f.id === fileElement.id
        ? { ...fileElement, content: textAreaContent, modifiedAt: Date() }
        : f
    );
    setTextFiles(updatedFiles);
    closeWindow(appType.textFile, appMode.edit);
  };
  return (
    <Window
      icon={textFile}
      code={appType.textFile}
      mode={appMode.edit}
      customStyle={{ justifyContent: 'space-between' }}
    >
      <textarea
        className="textFile-content"
        id="textFile-content"
        name="textFile-content"
        autoFocus={true}
        value={textAreaContent}
        onChange={handleChangeTextAreaContent}
      ></textarea>
      <button
        className="primary-button"
        type="button"
        onClick={() => updateTextFiles(file)}
      >
        Update
      </button>
    </Window>
  );
};

export default EditTextFile;
