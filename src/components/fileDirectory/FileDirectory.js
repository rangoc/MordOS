import React, { useContext } from 'react';

// components
import File from './components/File';
// context
import { WindowContext } from 'context/WindowProvider';
import { TextFileContext } from 'context/TextFileProvider';
// assets
import cancel from 'assets/cancel.svg';
import fileDirectory from 'assets/fileDirectory.svg';

import './fileDirectory.scss';
const FileDirectory = () => {
  const { closeWindow } = useContext(WindowContext);
  const { textFiles } = useContext(TextFileContext);
  return (
    <div className="window-wrapper">
      <div className="window-header">
        <div className="appIcon-wrapper">
          <img src={fileDirectory} alt="File Directory" />
        </div>
        <div
          className="closeIcon-wrapper"
          onClick={() => closeWindow('fileDirectory')}
        >
          <img src={cancel} alt="Cancel" />
        </div>
      </div>
      <div className="files-wrapper">
        <div className="files">
          {textFiles.length > 0 &&
            textFiles.map((file) => <File key={file.id} file={file} />)}
        </div>
      </div>
    </div>
  );
};

export default FileDirectory;
