import React, { useContext } from 'react';
// components
import Window from 'components/Window';
import File from '../File/File';
import Arrows from '../Arrow/Arrow';
// context
import { TextFileContext } from 'context/TextFileProvider';
// utils
import { sortFiles } from 'utils/sortFiles';
// constants
import { appType } from 'constants/appType';
import { sortType } from 'constants/sortType';
// assets
import fileDirectory from 'assets/fileDirectory.svg';
// sass
import './fileDirectory.scss';
const FileDirectory = () => {
  const { textFiles, setTextFiles } = useContext(TextFileContext);
  const { files, order, sort } = textFiles;

  return (
    <Window
      icon={fileDirectory}
      code={appType.fileDirectory}
      customStyle={{ alignItems: 'center' }}
    >
      <>
        {files.length > 0 ? (
          <div className="files-wrapper">
            <div className="files-sort-options">
              <div
                className="sort-name"
                onClick={() =>
                  setTextFiles(sortFiles(files, sortType.name, order))
                }
              >
                Name
                <Arrows
                  code={sort === sortType.name ? sortType.name : null}
                  sort={sort}
                  order={order}
                />
              </div>
              <div
                className="sort-date"
                onClick={() =>
                  setTextFiles(sortFiles(files, sortType.date, order))
                }
              >
                Date
                <Arrows
                  code={sort === sortType.date ? sortType.date : null}
                  sort={sort}
                  order={order}
                />
              </div>
            </div>
            <div className="files">
              {files.map((file) => (
                <File key={file.id} file={file} />
              ))}
            </div>
          </div>
        ) : (
          <p className="empty-directory">Directory is currently empty</p>
        )}
      </>
    </Window>
  );
};

export default FileDirectory;
