import React, { useRef, useEffect } from 'react';
// components
import Window from 'components/Window';
// constants
import { appType } from 'constants/appType';
// assets
import webcam from 'assets/webcam.svg';
// sass
import './webcam.scss';
const Webcam = () => {
  const videoRef = useRef();
  useEffect(() => {
    getVideo();
  }, [videoRef]);
  const getVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {},
      });
      let video = videoRef.current;
      video.srcObject = stream;
      video.play();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Window icon={webcam} code={appType.webcam}>
      <div className="webcam-wrapper">
        <video ref={videoRef} className="video" />
      </div>
    </Window>
  );
};

export default Webcam;
