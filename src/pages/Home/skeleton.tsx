import React from 'react';
import {
  IonItem,
  IonLabel,
  IonList,
  IonSkeletonText,
  IonThumbnail,
} from '@ionic/react';

import style from 'pages/Home/style.module.css';

export const HomeSkeleton = () => (
  <IonList>
    <IonItem>
      <IonThumbnail className={style.thumbnail} slot="start">
        <IonSkeletonText animated />
      </IonThumbnail>
      <IonLabel>
        <IonSkeletonText animated />
      </IonLabel>
    </IonItem>
    <IonItem>
      <IonThumbnail className={style.thumbnail} slot="start">
        <IonSkeletonText animated />
      </IonThumbnail>
      <IonLabel>
        <IonSkeletonText animated />
      </IonLabel>
    </IonItem>
    <IonItem>
      <IonThumbnail className={style.thumbnail} slot="start">
        <IonSkeletonText animated />
      </IonThumbnail>
      <IonLabel>
        <IonSkeletonText animated />
      </IonLabel>
    </IonItem>
  </IonList>
);
