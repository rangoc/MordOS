import React from 'react';

// assets
import gallery from 'assets/gallery.svg';

// sass
import './gallery.scss';
const Gallery = () => {
  return (
    <div className="gallery">
      <div className="iconWrapper">
        <img src={gallery} alt="gallery" />
      </div>
    </div>
  );
};

export default Gallery;
