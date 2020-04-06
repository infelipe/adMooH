import { useRef } from 'react';

import { UseLightbox } from 'components/Lightbox/model';

export const useLightbox = (): UseLightbox => {
  const popoverRef = useRef<HTMLIonPopoverElement>(null);
  const dismiss = () => {
    if (!popoverRef || !popoverRef.current) {
      return;
    }

    popoverRef.current.dismiss();
  };

  return { dismiss, popoverRef };
};
