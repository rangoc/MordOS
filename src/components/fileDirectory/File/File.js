import React, { useState, useContext } from 'react';

// context
import { WindowContext } from 'context/WindowProvider';
import { TextFileContext } from 'context/TextFileProvider';
// assets
import fileIcon from 'assets/file.svg';
import './file.scss';
import { appMode, appType } from 'constants/appType';

const File = ({ file }) => {
  const { name } = file;
  const [optionsMenu, setOptionsMenu] = useState(false);
  const { openWindow } = useContext(WindowContext);
  const { setFile, textFiles, setTextFiles } = useContext(TextFileContext);
  const handleEdit = () => {
    openWindow(appType.textFile, appMode.edit);
    setFile(file);
  };
  const handleDelete = () => {
    setTextFiles(textFiles.filter((f) => f.id !== file.id));
  };
  return (
    <div className="file" onClick={() => setOptionsMenu(!optionsMenu)}>
      <div className="file-details">
        <div className="file-icon-wrapper">
          <img src={fileIcon} alt="File" />
        </div>
        <div className="file-name">
          {name}
          {`.txt`}
        </div>
      </div>
      <div className="file-options">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <div className={`options-menu ${optionsMenu ? 'active' : ''}`}>
          <div onClick={handleEdit}>Edit</div>
          <div onClick={handleDelete}>Delete</div>
        </div>
      </div>
    </div>
  );
};

export default File;
