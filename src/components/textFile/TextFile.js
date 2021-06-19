import React from 'react';

// assets
import textFile from 'assets/textFile.svg';

// sass
import './textFile.scss';
const TextFile = () => {
  return (
    <div className="textFile">
      <div className="iconWrapper">
        <img src={textFile} alt="" />
      </div>
    </div>
  );
};

export default TextFile;
