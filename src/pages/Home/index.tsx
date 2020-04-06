import React from 'react';

import { useHome } from 'pages/Home/hook';
import { HomeUI } from 'pages/Home/ui';

export const Home = () => {
  const { albumCollection } = useHome();

  return <HomeUI albumCollection={albumCollection} />;
};
