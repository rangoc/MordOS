import React from 'react';

import './photo.scss';
const Photo = ({ photo }) => {
  return (
    <div className="photo">
      <a
        href={photo.url}
        target="_blank"
        rel="noreferrer"
        className="photo-wrapper"
      >
        <img src={photo.thumbnailUrl} alt={photo.title} />
      </a>
      <p>{photo.title}</p>
    </div>
  );
};

export default Photo;
