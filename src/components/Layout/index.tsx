import React from 'react';

import { LayoutProps } from 'components/Layout/model';
import { LayoutUI } from 'components/Layout/ui';

export const Layout = ({ children, title }: LayoutProps) => (
  <LayoutUI title={title}>{children}</LayoutUI>
);
