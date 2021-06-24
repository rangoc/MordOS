import React, { useState, useContext } from 'react';
// context
import { WindowContext } from 'context/WindowProvider';
import { TextFileContext } from 'context/TextFileProvider';
// constants
import { appMode, appType } from 'constants/appType';
// assets
import fileIcon from 'assets/file.svg';
import './file.scss';

const File = ({ file }) => {
  const { name, createdAt } = file;
  const [optionsMenu, setOptionsMenu] = useState(false);
  const { openWindow } = useContext(WindowContext);
  const { setFile, textFiles, setTextFiles } = useContext(TextFileContext);
  const { files } = textFiles;
  const handleEdit = () => {
    openWindow(appType.textFile, appMode.edit);
    setFile(file);
  };
  const handleDelete = () => {
    setTextFiles({
      ...textFiles,
      files: files.filter((f) => f.id !== file.id),
    });
  };

  // helper function to format date
  const formatDate = (dateObj) => {
    const dateToString = dateObj.toString();
    const dayMonthYear = dateToString.slice(4, 15);
    const dayMonthYearFormatted = dayMonthYear.replace(/ /g, '/');
    return dayMonthYearFormatted;
  };
  return (
    <div className="file" onClick={() => setOptionsMenu(!optionsMenu)}>
      <div className="file-details">
        <div className="file-name">
          <div className="file-icon-wrapper">
            <img src={fileIcon} alt="File" />
          </div>
          <div className="file-text">{name}</div>
        </div>

        <div className="file-date">{formatDate(createdAt)}</div>
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
