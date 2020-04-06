import { Dispatch, SetStateAction } from 'react';

import { Photo } from 'types';

export type AlbumProps = {
  albumTitle: string;
  photoCollection: Photo[] | null;
  selectedPhoto?: Photo;
  setSelectedPhoto: Dispatch<SetStateAction<Photo | undefined>>;
  setShowLightbox: Dispatch<SetStateAction<boolean>>;
  showLightbox: boolean;
};
