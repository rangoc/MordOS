import React from 'react';

// components
import Window from 'components/Window';
import Photo from '../Photo/Photo';

// hooks
import useFetch from 'hooks/useFetch';

// assets
import gallery from 'assets/gallery.svg';
import { appType } from 'constants/appType';

// sass
import './gallery.scss';

const Gallery = () => {
  const { isLoading, serverError, data } = useFetch(
    'https://jsonplaceholder.typicode.com/photos/?_limit=30'
  );
  return (
    <Window icon={gallery} code={appType.gallery}>
      <div className="gallery-wrapper">
        {!isLoading ? (
          data.map((photo) => <Photo key={photo.id} photo={photo} />)
        ) : serverError ? (
          <p className="empty-directory">{serverError}</p>
        ) : (
          <p className="empty-directory">Gallery is empty</p>
        )}
      </div>
    </Window>
  );
};

export default Gallery;
