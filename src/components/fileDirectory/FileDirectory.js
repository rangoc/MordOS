import React from 'react';

// assets
import fileDirectory from 'assets/fileDirectory.svg';

// sass
import './fileDirectory.scss';
const FileDirectory = () => {
  return (
    <div className="fileDirectory">
      <div className="iconWrapper">
        <img src={fileDirectory} alt="fileDirectory" />
      </div>
    </div>
  );
};

export default FileDirectory;
