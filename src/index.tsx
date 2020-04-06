import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'preact/debug';

import { App } from 'App';
import { store } from 'store';

if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  const ReactRedux = require('react-redux/lib');

  whyDidYouRender(React, {
    trackAllPureComponents: true,
    trackExtraHooks: [[ReactRedux, 'useSelector']],
  });
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
