import React from 'react';

import { useLightbox } from 'components/Lightbox/hook';
import { LightboxProps } from 'components/Lightbox/model';
import { LightboxUI } from 'components/Lightbox/ui';

export const Lightbox = ({ title, ...rest }: LightboxProps) => {
  const { dismiss, popoverRef } = useLightbox();

  return (
    <LightboxUI
      {...rest}
      dismiss={dismiss}
      popoverRef={popoverRef}
      title={title}
    />
  );
};
