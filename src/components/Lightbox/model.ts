import { ComponentProps, MutableRefObject } from 'react';
import { IonPopover } from '@ionic/react';

export type IonPopoverProps = ComponentProps<typeof IonPopover>;

export type UseLightbox = {
  dismiss: () => void;
  popoverRef: MutableRefObject<HTMLIonPopoverElement | null>;
};

export type LightboxProps = IonPopoverProps & {
  title?: string;
};
