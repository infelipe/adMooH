import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import useSWR from 'swr';
import '@ionic/react/css/core.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/typography.css';

import { Album } from 'pages/Album';
import { Home } from 'pages/Home';
import { fetcher } from 'utilities/fetcher';
import { setAlbumCollection } from 'store';
import 'variables.css';

export const App = () => {
  const dispatch = useDispatch();
  const { data } = useSWR(
    'http://my-json-server.typicode.com/infelipe/admooh-test-fake-api/albums',
    fetcher
  );

  useEffect(() => {
    dispatch(setAlbumCollection(data));
  }, [data, dispatch]);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route component={Home} exact path="/" />
          <Route component={Album} exact path="/album/:id" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};
