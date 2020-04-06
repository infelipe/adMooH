import React from 'react';
import {
  IonCol,
  IonGrid,
  IonList,
  IonRow,
  IonSkeletonText,
} from '@ionic/react';

import style from 'pages/Album/style.module.css';

export const AlbumSkeleton = () => (
  <IonList>
    <IonGrid>
      <IonRow>
        <IonCol size="4">
          <IonSkeletonText animated className={style.col} />
        </IonCol>
        <IonCol size="4">
          <IonSkeletonText animated className={style.col} />
        </IonCol>
        <IonCol size="4">
          <IonSkeletonText animated className={style.col} />
        </IonCol>
        <IonCol size="4">
          <IonSkeletonText animated className={style.col} />
        </IonCol>
        <IonCol size="4">
          <IonSkeletonText animated className={style.col} />
        </IonCol>
        <IonCol size="4">
          <IonSkeletonText animated className={style.col} />
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonList>
);
