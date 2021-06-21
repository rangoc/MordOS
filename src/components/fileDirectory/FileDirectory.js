import React, { useContext } from 'react';

// components
import Window from 'components/Window';
import File from './File';
// context
import { TextFileContext } from 'context/TextFileProvider';

// constants
import { appType } from 'constants/appType';
// assets
import fileDirectory from 'assets/fileDirectory.svg';
// sass
import './fileDirectory.scss';
const FileDirectory = () => {
  const { textFiles } = useContext(TextFileContext);
  return (
    <Window icon={fileDirectory} code={appType.fileDirectory}>
      <div className="files-wrapper">
        <div className="files">
          {textFiles.length > 0 &&
            textFiles.map((file) => <File key={file.id} file={file} />)}
        </div>
      </div>
    </Window>
  );
};

export default FileDirectory;
