import { useSelector } from 'react-redux';

import { HomeProps } from 'pages/Home/model';
import { RootState } from 'types';

export const useHome = (): HomeProps => {
  const albumCollection = useSelector(
    ({ albumCollection }: RootState) => albumCollection
  );

  return { albumCollection };
};
