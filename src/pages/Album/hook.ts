import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';

import { AlbumProps } from 'pages/Album/model';
import { fetcher } from 'utilities/fetcher';
import { setPhotoCollection } from 'store';
import { Photo, RootState } from 'types';

export const useAlbum = (): AlbumProps => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data } = useSWR(
    `https://my-json-server.typicode.com/infelipe/admooh-test-fake-api/photos?albumId=${id}`,
    fetcher
  );

  useEffect(() => {
    dispatch(setPhotoCollection(data));
  }, [data, dispatch]);

  const [selectedPhoto, setSelectedPhoto] = useState<Photo>();
  const [showLightbox, setShowLightbox] = useState(false);
  const photoCollection = useSelector(
    ({ photoCollection }: RootState) => photoCollection
  );
  const albumTitle = useSelector(({ albumCollection }: RootState) =>
    albumCollection
      ? albumCollection.find(({ id }) =>
          photoCollection ? id === photoCollection[0].albumId : -1
        )?.title || 'Album'
      : 'Album'
  );

  return {
    albumTitle,
    photoCollection,
    selectedPhoto,
    setSelectedPhoto,
    setShowLightbox,
    showLightbox,
  };
};
