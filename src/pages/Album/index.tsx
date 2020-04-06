import React from 'react';

import { useAlbum } from 'pages/Album/hook';
import { AlbumUI } from 'pages/Album/ui';

export const Album = () => {
  const {
    albumTitle,
    photoCollection,
    selectedPhoto,
    setSelectedPhoto,
    setShowLightbox,
    showLightbox,
  } = useAlbum();

  return (
    <AlbumUI
      albumTitle={albumTitle}
      photoCollection={photoCollection}
      selectedPhoto={selectedPhoto}
      setSelectedPhoto={setSelectedPhoto}
      setShowLightbox={setShowLightbox}
      showLightbox={showLightbox}
    />
  );
};
