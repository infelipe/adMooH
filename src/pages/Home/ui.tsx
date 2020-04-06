import React from 'react';
import {
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonThumbnail,
} from '@ionic/react';

import { Layout } from 'components/Layout';
import { HomeProps } from 'pages/Home/model';
import { HomeSkeleton } from 'pages/Home/skeleton';
import style from 'pages/Home/style.module.css';

export const HomeUI = ({ albumCollection }: HomeProps) => {
  let content;

  if (!albumCollection) {
    content = <HomeSkeleton />;
  } else if (albumCollection.length) {
    content = (
      <IonList>
        {albumCollection.map(({ id, photoCount, thumbnailUrl, title }) => (
          <IonItem key={id} button detail routerLink={`/album/${id}`}>
            <IonThumbnail className={style.thumbnail} slot="start">
              <img alt={title} src={thumbnailUrl} />
            </IonThumbnail>
            <IonLabel>
              <p>{title}</p>
            </IonLabel>
            <IonNote
              className="ion-align-self-center ion-no-padding"
              slot="end"
            >
              {photoCount}
            </IonNote>
          </IonItem>
        ))}
      </IonList>
    );
  } else {
    content = (
      <div className="ion-text-center">
        <p>Gallery is empty.</p>
      </div>
    );
  }

  return <Layout title="Gallery">{content}</Layout>;
};
