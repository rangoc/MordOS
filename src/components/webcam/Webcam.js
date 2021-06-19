import React from 'react';

// assets
import webcam from 'assets/webcam.svg';

// sass
import './webcam.scss';

const Webcam = () => {
  return (
    <div className="webcam">
      <div className="iconWrapper">
        <img src={webcam} alt="" />
      </div>
    </div>
  );
};

export default Webcam;
