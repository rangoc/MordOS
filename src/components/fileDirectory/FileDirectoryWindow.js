import React, { useContext } from 'react';

// components
import File from './components/File';
// context
import { WindowContext } from 'context/WindowProvider';
import { TextFileContext } from 'context/TextFileProvider';
// assets
import cancel from 'assets/cancel.svg';
import fileDirectory from 'assets/fileDirectory.svg';

import './fileDirectoryWindow.scss';
const FileDirectoryWindow = () => {
  const { closeWindow } = useContext(WindowContext);
  const { textFiles } = useContext(TextFileContext);
  return (
    <div className="windowWrapper">
      <div className="windowHeader">
        <div className="appIconWrapper">
          <img src={fileDirectory} alt="File Directory" />
        </div>
        <div
          className="closeIconWrapper"
          onClick={() => closeWindow('fileDirectory')}
        >
          <img src={cancel} alt="Cancel" />
        </div>
      </div>
      <div className="filesWrapper">
        <div className="files">
          {textFiles.length > 0 &&
            textFiles.map((file) => <File key={file.id} file={file} />)}
        </div>
      </div>
    </div>
  );
};

export default FileDirectoryWindow;
