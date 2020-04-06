import React from 'react';
import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
  IonPopover,
} from '@ionic/react';
import { close } from 'ionicons/icons';

import { LightboxProps, UseLightbox } from 'components/Lightbox/model';

export const LightboxUI = ({
  children,
  dismiss,
  isOpen,
  popoverRef,
  title,
  ...rest
}: UseLightbox & LightboxProps) =>
  isOpen ? (
    <IonPopover {...rest} isOpen={isOpen} ref={popoverRef}>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>{title}</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => dismiss()}>
              <IonIcon icon={close} slot="icon-only" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      {children}
    </IonPopover>
  ) : null;
