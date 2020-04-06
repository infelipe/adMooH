import React from 'react';
import { IonCol, IonGrid, IonImg, IonList, IonRow } from '@ionic/react';
import { Link } from 'react-router-dom';

import { Layout } from 'components/Layout';
import { Lightbox } from 'components/Lightbox';
import { AlbumProps } from 'pages/Album/model';
import { AlbumSkeleton } from 'pages/Album/skeleton';
import style from 'pages/Album/style.module.css';

export const AlbumUI = ({
  albumTitle,
  photoCollection,
  selectedPhoto,
  setSelectedPhoto,
  setShowLightbox,
  showLightbox,
}: AlbumProps) => {
  let content;

  if (!photoCollection) {
    content = <AlbumSkeleton />;
  } else if (photoCollection.length) {
    content = (
      <>
        <IonList>
          <IonGrid>
            <IonRow>
              {photoCollection.map((photo) => {
                const { id, title, url } = photo;

                return (
                  <IonCol key={id} size="4">
                    <IonImg
                      alt={title}
                      className={style.border}
                      src={url}
                      onClick={() => {
                        setSelectedPhoto(photo);
                        setShowLightbox(true);
                      }}
                    />
                  </IonCol>
                );
              })}
            </IonRow>
          </IonGrid>
        </IonList>

        <Lightbox
          isOpen={showLightbox}
          title={selectedPhoto?.title}
          onDidDismiss={() => setShowLightbox(false)}
        >
          <img
            alt={selectedPhoto?.title}
            className={style.img}
            src={selectedPhoto?.url}
          />
        </Lightbox>
      </>
    );
  } else {
    content = (
      <div className="ion-text-center">
        <p>Album is empty.</p>
        <Link to="/">Go back to the gallery.</Link>
      </div>
    );
  }

  return <Layout title={albumTitle}>{content}</Layout>;
};
