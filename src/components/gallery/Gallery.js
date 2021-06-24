import React, { useState, useEffect } from 'react';

// components
import Window from 'components/Window';
import Photo from './Photo';
// assets
import gallery from 'assets/gallery.svg';
import { appType } from 'constants/appType';

// sass
import './gallery.scss';
const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const fetchResponse = await fetch(
        'https://jsonplaceholder.typicode.com/photos/?_limit=30'
      );
      const response = await fetchResponse.json();
      setPhotos(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Window icon={gallery} code={appType.gallery}>
      <div className="gallery-wrapper">
        {photos.length > 0 ? (
          photos.map((photo) => <Photo key={photo.id} photo={photo} />)
        ) : (
          <p className="empty-directory">Gallery is empty</p>
        )}
      </div>
    </Window>
  );
};

export default Gallery;
