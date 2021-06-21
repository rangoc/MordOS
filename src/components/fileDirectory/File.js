import React from 'react';

// assets
import fileIcon from 'assets/file.svg';
import './file.scss';
const File = ({ file }) => {
  const { name } = file;
  return (
    <div className="file">
      <div className="file-details">
        <div className="file-icon-wrapper">
          <img src={fileIcon} alt="File" />
        </div>
        <div className="file-name">
          {name}
          {`.txt`}
        </div>
      </div>
      <button>Edit</button>
      <div className="file-options">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default File;
